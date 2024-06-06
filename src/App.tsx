import { Button } from "components/Button";
import { useState } from "react";

const initialCarList = [
  {
    make: 'Ford',
    name: 'Mustang'
  },
  {
    make: 'Chevrolet',
    name: 'Corvette'
  },
  {
    make: 'Dodge',
    name: 'Challenger'
  },
  {
    make: 'Plymouth',
    name: 'Roadrunner'
  }
]

export const App = () => {
  const [totalCount, setTotalCount] = useState(0);
  const incrementTotalCount = () => {
    setTotalCount(totalCount + 1);
  }

  const [cars, setCars] = useState(initialCarList);
  const [carMake, setCarMake] = useState('');
  const [carName, setCarName] = useState('');
  return (
    <>
      <div style={{ height: '100vh', backgroundColor: 'red' }}>
        <h1>Hello, World!</h1>
        {totalCount % 2 === 0 ? <h2>Total count is even</h2> : <h2>Total count is odd</h2>}
        <Button buttonText="Click me!" alertText="You clicked me!" totalCount={totalCount} incrementTotalCount={incrementTotalCount} />
        <Button buttonText="Click me too!" alertText="You clicked me too!" totalCount={totalCount} incrementTotalCount={incrementTotalCount} />
        <Button buttonText="Click me three!" alertText="You clicked me three!" totalCount={totalCount} incrementTotalCount={incrementTotalCount} />
        <div>
          <h2>Cars</h2>
          {cars.map((car) => {
            return <div>
              <h3>{car.make}</h3>
              <p>{car.name}</p>
            </div>
          })}
        </div>
        <div>
          <label htmlFor="carmake">Car make</label>
          <input type="text" placeholder="Enter car make" id="carmake" value={carMake} onChange={(event) => setCarMake(event.target.value)} />
        </div>
        <div>
          <label htmlFor="carname">Car name</label>
          <input type="text" placeholder="Enter car name" id="carname" value={carName} onChange={(event) => setCarName(event.target.value)} />
        </div>
        <div>
          <button type="submit" onClick={() => {
            setCars([...cars, { make: carMake, name: carName }])
          }}>Submit</button>
        </div>
      </div>
    </>
  );
}