import React from 'react'; 
import ClickButton from './ClickButton';

export const App = () => {

  return (
    <div style={{ width: '100%', backgroundColor: 'red', color: 'white', textAlign: 'center', padding: '20px'}}>
      <div>Hello World!</div>
      <div style={{ marginTop: '20px' }}>
        <ClickButton />
      </div>
    </div>
  );
}