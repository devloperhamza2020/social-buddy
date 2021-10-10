import React, { useEffect, useState }from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetails = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});

    //this state for comment
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [])

    //This is for Comments
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data));
    }, [id])



    const divStyle={
        textColor: 'red'
    }
    return (
        <div style={divStyle}>
            <h3>This is Post Detail:{id}</h3>
            <p>Post ID: {post.id}</p>
            <p>Post Title: {post.title}</p>
            <p>Post Body: {post.body}</p>


            <p>Number of Comments: {comments.length}</p>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetails;