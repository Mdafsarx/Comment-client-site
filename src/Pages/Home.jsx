import { useContext } from "react";
import Comments from "./Comments";
import Input from "./Input";
import { AuthContext } from "../Provider";
import { toast } from "react-toastify";

const Home = () => {
    const { Edit , setEdit , id ,setReload ,reload} = useContext(AuthContext);

    function handleEdit(e){
        e.preventDefault()
        setEdit(false);
        const name=e.target.name.value ;
        const text=e.target.text.value ;
        const updateComment={name,text};
        fetch(`https://comment-server-kappa.vercel.app/comments/${id}`,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(updateComment)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
              toast('user updated successful');
              setReload(!reload)
            }
        })

    }


    return (
        <div>

            <div className="flex flex-col md:flex-row bg-slate-100">

                <div className="md:w-3/4">
                    <Comments />
                </div>

                <div className="md:w-1/3">
                    <Input />
                </div>

            </div>

            {
                Edit ? <div className="top-1/4 right-1/4  fixed ">
                        <form className="space-y-2 bg-white p-20 rounded-lg shadow-md" onSubmit={handleEdit}>
                            <textarea name="text"  rows={'6'} className="border-2 rounded-xl border-black pl-2 pt-1 w-full" placeholder="Drop your feadback" required></textarea>
                            <input type="text" name="name" className="border-2 rounded-xl border-black pl-2 w-full" placeholder="Enter your name" required />
                            <input type="submit" value="Send" className="btn btn-block btn-error text-white rounded-xl"  />
                        </form>
                </div> : ''
            }


        </div>
    );
};

export default Home;