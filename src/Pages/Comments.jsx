import { useContext, useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import axios from "axios";
import { AuthContext } from "../Provider";


const Comments = () => {
    const {reload}=useContext(AuthContext)
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('https://comment-server-kappa.vercel.app/comments')
            .then(data => setComments(data.data))
    }, [reload])


    return (
        <div className="max-w-4xl mx-auto py-8 grid md:grid-cols-2 gap-5">

            {
                comments.map(com => <CommentCard key={com._id} comment={com} />)
            }

        </div>
    );
};

export default Comments;