import React from 'react';

export const Task = (props) => {
    return (
        <div className='task'>
            <p>
                {props.task}
            </p>
            <button onClick={(e)=> {
                props.setTasks(props.tasks.filter((tasks,index)=> index !== props.id))
            }}>x</button>
        </div>
    )
}