import React, { useRef, useContext } from 'react';
import './person.css';

import {storeContext} from './app.jsx';

export default function Person({ rowIdx, colIdx, data }) {
    const datas = useContext(storeContext);
    const inputRef = useRef();
    const getQueues = datas.get();
    const setQueues = datas.set;

    function handleClick() {
        const newTask = inputRef.current.value;
        if (!newTask) return;
        const newPeople = getQueues.map(person => {
            if (person === data) return {...person, tasks: [...person.tasks, newTask]};
            return person;
        });
        setQueues(newPeople);
    }

    console.log('render: Person(' + rowIdx + ', ' + colIdx + ')');

    return (
            <div className="queue">
                <div className="person-name">
                    <div>{data.name}</div>
                    <div>
                        <input type="text" ref={inputRef}/>
                        {' '}
                        <button type="button" onClick={handleClick}>{'Add a task'}</button>
                    </div>
                </div>
                {data.tasks.map((task, idx) => <div key={`${idx}`} className="person-task">{task}</div>)}
            </div>
    );
}

