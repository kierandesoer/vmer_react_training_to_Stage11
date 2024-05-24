import { useState } from "react";

export const Button = ({ buttonText, alertText, totalCount, incrementTotalCount }) => {
    const [counter, setCounter] = useState(0);

    const onClick = () => {
        setCounter(counter + 1 );
        incrementTotalCount();
        // alert("You've clicked me ${counter} times!\n You've clicked all the buttons a total of ${totalCount} times!");
    }

    return (
        <div style={{ marginTop: '20px' }}>
            <button onClick={onClick}>{buttonText} You've clicke me {counter}</button>
        </div>
    )
}
