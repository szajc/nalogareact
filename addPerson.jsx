import React, { useRef } from 'react';

const AddPerson = React.memo(function AddPerson({ setPeople, currentPeople }) {
    const inputRef = useRef();

    function handleClick() {
        const name = inputRef.current.value;
        if (!name) return;
        setPeople([...currentPeople, { name, tasks: [] }]);
    }

    console.log('render: AddPerson');

    return (
        <div>
            {'Ime: '}<input type="text" ref={inputRef} />
            {' '}
            <button type="button" onClick={handleClick}>Dodaj</button>
        </div>
    );
})

export default AddPerson;