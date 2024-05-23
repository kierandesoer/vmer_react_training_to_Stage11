import React from 'react'; 
import { Button } from 'components/Button';

export const App = () => {

  return (
    <div style={{ width: '100%', backgroundColor: 'red', color: 'white', textAlign: 'center', padding: '20px'}}>
      <h1>Hello World!</h1>
      <div style={{ marginTop: '20px' }}>
        <Button buttonText='Click Me!' alertText='You clicked me!'/>
      </div> 
      <div style={{ marginTop: '20px' }}>
        <Button buttonText='And me!' alertText='WooHoo!'/>
      </div>
    </div>
  );
}