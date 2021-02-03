import React, { useState, useEffect } from 'react';
import QueueRow from './queueRow.jsx';

const  queWrapper = props => {

    const { queues, setQueues } = props;
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const newRows = [];
        let currentRow = []
        for (let i = 0; i < queues.length; i++) {
            if (currentRow.length === 3) {
                newRows.push(currentRow);
                currentRow = [];
            }
            currentRow.push(queues[i]);
        }
        if (currentRow.length > 0) newRows.push(currentRow);
        setRows(newRows);
    }, [queues]);

    console.log("render: queWrapper")

    return (
        <div className="queues-wrapper">
            {rows.map((row, idx) => 
                <QueueRow 
                    key={`${idx}`} 
                    idx={idx} 
                    row={row} 
                    currentPeople={queues} 
                    setPeople={setQueues} />
                )
            }
        </div>
    );
}

export default queWrapper;