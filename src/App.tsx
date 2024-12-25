import React from 'react';
import Greeting from './Components/Greeting';
import Counter from './Components/Counter';
import './App.css';
const App: React.FC = () => {
  return (
    <div>
      <Greeting name="Salhi Moneem" />
      <Counter />
    </div>
  );
};

export default App;
