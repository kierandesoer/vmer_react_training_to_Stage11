import { Button } from 'components/Button';
import { useState } from 'react';

export const App = () => {
  const [totalCounter, setTotalCounter] = useState(0);
  const incrementTotalCounter = () => {
    setTotalCounter(totalCounter + 1 );
  }
  // Create a list for display in list format
  const people = [
    {
      name: 'Andrew',
      age: 21,
    },{
      name: 'Mark',
      age: 22,
    },{
      name: 'Luke',
      age: 23,
    },{
      name: 'John',
      age: 24,
    }
  ];

  // make the list stateful
  const [peopleList, setPeopleList] = useState(people);
  const [personName, setPersonName] = useState('');
  const [personAge, setPersonAge] = useState(0);
  
  // generate the list people for display
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  const listPeople = peopleList.map(person => 
    <li><p>{person.name} is {person.age} years old.</p></li>
  );

  return (
    <div>
      
      <div style={{ width: '100%', backgroundColor: 'red', color: 'white', textAlign: 'center', padding: '20px'}}>
        <h1>Hello World!</h1>
        {/* Use a ternary if statement to mod by 2 */}
        <h2>Total count is {totalCounter % 2 === 0 ? 'even' : 'odd'}</h2>
        <Button buttonText='Click Me!' alertText='You clicked me!' totalCount={totalCounter} incrementTotalCount={incrementTotalCounter}/>
        <Button buttonText='And me!' alertText='WooHoo!' totalCount={totalCounter} incrementTotalCount={incrementTotalCounter}/>
        <Button buttonText="Please don't touch me!" alertText='Ouch!' totalCount={totalCounter} incrementTotalCount={incrementTotalCounter}/>
      </div>
    
      <div>
        <h1>List of People</h1>
        <ul>{listPeople}</ul>
      </div>
      <div>
        {/* 
          The htmlFor property sets or returns the value of the for attribute of a label.
          The for attribute specifies which form element a label is bound to.
        */}
        <label htmlFor="personName">Name: </label>
        <input type='text' id='personName' value={personName} onChange={(e) => setPersonName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="personAge">Age: </label>
        <input type='number' id='personAge' value={personAge} onChange={(e) => setPersonAge(Number(e.target.value))} />
      </div>
      <div>
        <button type='submit' onClick={() => {
          setPeopleList([...peopleList, {name: personName, age: personAge }])
        }}>Add</ button>
      </div>
    </div>
  );
}