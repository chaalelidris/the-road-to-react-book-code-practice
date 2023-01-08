import React from 'react';

// List component
const List = props => (
    <ol>
        {props.list.map(item =>
            <li key={item.objectID}>
                <span>
                    <a href={item.url}>{item.title} </a>
                </span>
                <span>{item.author} </span>
                <span>{item.num_comments} </span>
                <span>{item.points} </span>
            </li>
        )}
    </ol>
)

export default List;