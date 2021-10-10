import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    const showComment = id =>{
        const url = `/post/${id}`;
        history.push(url);
    }
    const postStyle = {
        border: '1px solid gray',
        margin: '10px 10px',
        padding: '20px',
        float: 'left',
        width: '28%',
        height: 'auto'
    }
    return (
        <div style={postStyle}>
            <h4>{id}</h4>
            <h3><strong>{title}</strong></h3>
            <p style={{textAlign: 'justify'}}>{body}</p>
            <button onClick={()=>  showComment(id)}>Show Detail</button>
        </div>
    );
};

export default Post;