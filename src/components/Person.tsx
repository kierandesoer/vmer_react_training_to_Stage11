import { useState } from "react";

export const Person = ({person, deletePerson, editPerson}) => {
    const [updatePersonName, setUpdatePersonName] = useState(person.name);
    const [updatePersonAge, setUpdatePersonAge] = useState(person.age);
    const [editing, setEditing] = useState(false);

    const editOnClick = (originalPerson, newPerson) => {
        if (editing) {
            editPerson(originalPerson, newPerson);
        }
        setEditing(!editing);
    }

    return <div style={{ padding: 10 }} key={`${person.name}, ${person.age}`}>
        <div>Name: {person.name} Age: {person.age}</div>
        <div>
            <label htmlFor="editPersonName">Name: </label>
            <input disabled={!editing} type='text' placeholder="Enter New Name" id='editPersonName' value={updatePersonName} onChange={(e) => setUpdatePersonName(e.target.value)} />
            <label htmlFor="editPersonAge">Age: </label>
            <input disabled={!editing} type='number' placeholder="Entner New Age" id='editPersonAge' value={updatePersonAge} onChange={(e) => setUpdatePersonAge(Number(e.target.value))} />
            <button style={{ marginLeft: 10 }} onClick={() => editOnClick({name: person.name, age: person.age}, {name: updatePersonName, age: updatePersonAge})}>{editing ? `Confirm` : `Edit`}</button>
            <button style={{ marginLeft: 10 }} onClick={() => deletePerson({ name: person.name, age: person.age })}>Delete</button>
        </div>
    </div>
}
