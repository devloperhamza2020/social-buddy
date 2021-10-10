import React from 'react';

const Comment = (props) => {
    const {name, email, body} = props.comment;

    const divStyle={
        border: '1px solid tomato',
        margin: '10px',
        padding: '20px',
        color: 'red'
    }
    return (
        <div style={divStyle}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Comment;