import React, { useState, useEffect } from 'react';
import AddPerson from './addPerson.jsx';
import QueWrapper from './queWrapper.jsx';

export default function App() {
    const [queues, setQueues] = useState([]);

    useEffect(() => {
        // začetno stanje: dodamo eno demo osebo
        setQueues([{ name: 'Jože Pločnik', tasks: ['Špecerija', 'Odnesi smeti'] }]);
    }, []);

    console.log('render: App');

    const addPeople = (name) => {
        setQueues([...queues, { name, tasks: [] }]);
    }

    return (
        <div>
            <div className="title">Listki opravil</div>
            <AddPerson currentPeople={queues} setPeople={setQueues} />
            <QueWrapper queues={queues} setQueues={setQueues} />
        </div>
    );
}

