import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider";

const Input = () => {
    const { setReload, reload } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = e.target.text.value;
        const name = e.target.name.value;
        const review = { text, name };
        fetch('https://comment-server-kappa.vercel.app/comments', {
            method: 'post',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Comment added successful')
                    setReload(!reload)
                    e.target.reset()
                } else {
                    toast.error('Comment added failed')
                }
            })
    }

    return (

        <div className="md:p-8 space-y-3 flex flex-col md:min-h-screen md:justify-end">
            <h1 className="md:text-3xl font-bold text-center">Send your review</h1>
            <form className="space-y-2" onSubmit={handleSubmit}>
                <textarea name="text" rows={'6'} className="border-2 rounded-xl border-black pl-2 pt-1 w-full" placeholder="Drop your feadback" required></textarea>
                <input type="text" name="name" className="border-2 rounded-xl border-black pl-2 w-full" placeholder="Enter your name" required />
                <input type="submit" value="Send" className="btn btn-block btn-error text-white rounded-xl" />
            </form>

        </div>
    );
};

export default Input;