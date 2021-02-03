import React, { useMemo } from 'react';
import Person from './person.jsx';
import './queueRow.css';

const QueueRow = props => {

    const { idx, row, currentPeople, setPeople } = props;

    console.log('render: QueueRow #' + idx);
    return (
        <div className="queues-row">
            {row.map((person, n) => <Person key={person.name} rowIdx={idx} colIdx={n} data={person} currentPeople={currentPeople} setPeople={setPeople} />)}
        </div>
    );
}

export default QueueRow;
