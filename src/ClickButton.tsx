import React from 'react';

const ClickButton = () => {
    const handleClick = () => {
        alert('clicked!');
    };

    return (
        <button onClick={handleClick} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
            Click Me
        </button>
    )
}

export default ClickButton;