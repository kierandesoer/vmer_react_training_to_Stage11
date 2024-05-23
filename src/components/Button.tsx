import {useState} from 'react';

export const Button = ({ buttonText, alertText }) => {
    const [count, setCount] = useState(0);

    return <button onClick={() => {
        alert(alertText);
        setCount(count + 1);
    }}>{buttonText} This button has been clicked {count} times!</button>
}
