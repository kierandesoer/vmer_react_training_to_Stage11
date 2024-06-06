import { useState } from "react";

export const Button = ({ buttonText, alertText, totalCount, incrementTotalCount }) => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    alert(alertText);
    setCount(count + 1);
    incrementTotalCount();
  }
  return <button onClick={onClick}>{buttonText} Clicked {count} times! Total click count for all buttons is: {totalCount}!</button>
}
