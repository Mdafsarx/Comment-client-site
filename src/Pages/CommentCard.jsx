import axios from "axios";
import { useContext } from "react";
import { FaUserEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider";

const CommentCard = ({ comment }) => {
    const { name, text ,_id} = comment || {};
    const {setEdit,setId,setReload,reload}=useContext(AuthContext);
   const handleDelete=()=>{
    axios.delete(`https://comment-server-kappa.vercel.app/comments/${_id}`)
    .then(data=>{
        if(data.data.deletedCount===1){
            toast('deleted successful');
            setReload(!reload)
        }
    })
   }

   const handleEdit=function(){
    setEdit(true)
    setId(_id)
   }


    return (
        <div>

            <div className="card  bg-base-100 shadow-xl">

                <div className="card-body">
                    <h3><span className="font-bold text-lg">Name: </span>{name}</h3>
                    <div className="card-actions justify-end">
                        <p>{text}</p>
                        <button className="btn btn-square btn-sm" onClick={handleDelete}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        <button className="btn btn-square btn-sm"  onClick={handleEdit}>
                            <FaUserEdit className="text-xl" />
                        </button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default CommentCard;