import { useState, useEffect } from "react";

export const Button = ({ buttonText, alertText, totalCount, incrementTotalCount }) => {
    const [counter, setCounter] = useState(0);
    const [isEven, setIsEven] = useState(true);

    // Uncomment the following 3 lines and select the alternative alert in the onClick function 
    // if you want the alert to display odd/even, counter and total count
    // useEffect(() => {
    //     setIsEven (counter % 2 === 0);
    // }, [counter]);


    const onClick = () => {
        setCounter(counter + 1 );
        incrementTotalCount();
        alert(alertText);
        // alert(`You've clicked me ${counter + 1} times!\nThis is an ${isEven ? 'even' : 'odd'} amount.\nYou've clicked all the buttons a total of ${totalCount + 1} times!`);
    }

    return (
        <div style={{ marginTop: '20px' }}>
            <button onClick={onClick}>{buttonText}<br />You've clicked me {counter}</button>
        </div>
    )
}
