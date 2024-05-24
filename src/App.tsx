import React from 'react'; 
import { Button } from 'components/Button';
import {useState} from 'react';

export const App = () => {
  const [totalCounter, setTotalCounter] = useState(0);
  const incrementTotalCounter = () => {
    setTotalCounter(totalCounter + 1 );
  }

  return (
    <div style={{ width: '100%', backgroundColor: 'red', color: 'white', textAlign: 'center', padding: '20px'}}>
      <h1>Hello World!</h1>
      <Button buttonText='Click Me!' alertText='You clicked me!' totalCount={totalCounter} incrementTotalCount={incrementTotalCounter}/>
      <Button buttonText='And me!' alertText='WooHoo!' totalCount={totalCounter} incrementTotalCount={incrementTotalCounter}/>
      <Button buttonText="Please don't touch me!" alertText='Ouch!' totalCount={totalCounter} incrementTotalCount={incrementTotalCounter}/>
    </div>
  );
}