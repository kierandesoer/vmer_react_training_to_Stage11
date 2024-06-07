import { useState, useReducer } from "react";
import "../App.css"

const reducer = (state, action) => {
    switch (action.type) {
        case 'updatePersonName':
            return { ...state,  updatePersonName: action.payload };
        case 'updatePersonAge':
            return { ...state, updatePersonAge: action.payload };
        case 'tgEdit':
            return { ...state, editing: !state.editing};
        default:
            return
    }
}

export const Person = ({person, deletePerson, editPerson}) => {
    const [state, dispatch] = useReducer( reducer, { updatePersonName: person.name, updatePersonAge: person.age, editing: false })

    const editOnClick = (originalPerson, updatedPerson) => {
        
        if (state.editing) {
            editPerson(originalPerson, updatedPerson);
        } 

        dispatch({ type: 'tgEdit' });
    }

    return <div style={{ padding: 10 }} key={`${person.name}, ${person.age}`}>
        <div>
            <label htmlFor="editPersonName">Name: </label>
            <input disabled={!state.editing} className={"displayInputBoxes_" + state.editing} type='text' placeholder="Enter New Name" id='editPersonName' value={state.updatePersonName} onChange={(e) => dispatch({ type: 'updatePersonName', payload: e.target.value })} />
            <label htmlFor="editPersonAge">Age: </label>
            <input disabled={!state.editing} className={"displayInputBoxes_" + state.editing} type='number' placeholder="Entner New Age" id='editPersonAge' value={state.updatePersonAge} onChange={(e) => dispatch({ type: 'updatePersonAge', payload: e.target.value })} />
            <button style={{ marginLeft: 10 }} onClick={() => editOnClick({name: person.name, age: person.age}, {name: state.updatePersonName, age: state.updatePersonAge})}>{state.editing ? `Confirm` : `Edit`}</button>
            <button style={{ marginLeft: 10 }} onClick={() => deletePerson({ name: person.name, age: person.age })}>Delete</button>
        </div>
    </div>
}
