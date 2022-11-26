import './App.scss';
import Main from './containers/Main/Main';
import NavBar from './containers/NavBar/NavBar';
import { useState } from 'react';

function App() {

  let [chosenNavItem, setChosenNavItem] = useState<number>(0);

  // const handleChosenNavItem = (chosenHeader: number) => {
  //   setChosenNavItem(chosenHeader);
  // };

  return (
    <div className="App">
      <NavBar handleChosenNavItem={setChosenNavItem} />
      <Main chosenNavItem={chosenNavItem} />
    </div>
  );
}

export default App;
