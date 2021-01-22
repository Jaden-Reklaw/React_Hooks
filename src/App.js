//import components here
import Button from './components/buttonComponent';
import Display from './components/Display';

import { useState } from "react";
//useState is how to keep track of state using react hooks
//a, b = useState()
//a) state object(getter)
//b) updater function(setter)
//syntax const[a, b]=useState(initialStateValue);

function App() {
  const [counter, setCounter] = useState(24);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);

  return (
    <div>
      <Button onClickFunc={incrementCounter} increment={1}/>
      <Button onClickFunc={incrementCounter} increment={2}/>
      <Button onClickFunc={incrementCounter} increment={4}/>
      <Button onClickFunc={incrementCounter} increment={8}/>
      <Display message={counter}/>
    </div>
  );
}

export default App;
