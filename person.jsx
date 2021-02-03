import React, { useRef } from 'react';
import './person.css';

const Person = React.memo(props => {

    const { rowIdx, colIdx, data, currentPeople, setPeople } = props;
    const inputRef = useRef();

    function handleClick() {
        const newTask = inputRef.current.value;
        if (!newTask) return;
        const newPeople = currentPeople.map(person => {
            if (person === data) return {...person, tasks: [...person.tasks, newTask]};
            return person;
        });
        setPeople(newPeople);
    }

    console.log('render: Person(' + rowIdx + ', ' + colIdx + ')');

    return (
        <div className="queue">
            <div className="person-name">
                <div>{data.name}</div>
                <div>
                    <input type="text" ref={inputRef}/>
                    {' '}
                    <button type="button" onClick={handleClick}>{'Dodaj opravilo'}</button>
                </div>
            </div>
            {data.tasks.map((task, idx) => <div key={`${idx}`} className="person-task">{task}</div>)}
        </div>
    );
})

export default Person;
