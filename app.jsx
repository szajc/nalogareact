import React, { useState } from 'react';
import AddPerson from './addPerson.jsx';
import QueueRow from './queueRow.jsx';

export const storeContext = React.createContext();

export default function App() {
    const [queues, setQueues] = useState([
                                    { name: 'John Doe', tasks: ['Groceries', 'Take out the trash'] }
                                ]);

    const store = {
        queues: { 
            get: () => queues,
            set: setQueues
        }
    };

    const getRows = () => {
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
        return newRows
    }

    let rows = getRows();

    console.log('render: App');

    return (
        <div> 
            <div className="title">Tasks</div>
            <AddPerson setPeople={setQueues} currentPeople={queues} />
            <storeContext.Provider value={store.queues} >
                <div className="queues-wrapper">
                    {
                    rows.map((row, idx) => <QueueRow key={`${idx}`} idx={idx} row={row} />)
                    }
                </div>
            </storeContext.Provider>
        </div>
    );
}

