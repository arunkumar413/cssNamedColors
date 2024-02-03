import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { colors } from './colors';

function App() {
  const [count, setCount] = useState(0);

  function handleClick(evt, item) {
    console.log(item);
    // Copy the text inside the text field
    navigator.clipboard.writeText(item);
  }

  const colorElements = colors.map(function (item, index) {
    return (
      <div
        key={item}
        onClick={(evt) => handleClick(evt, item)}
        style={{
          backgroundColor: item,
          height: 100,
          textAlign: 'center',
          verticalAlign: 'middle',
        }}
      >
        {item}
      </div>
    );
  });

  return (
    <>
      <div className="colorContainer">{colorElements}</div>
    </>
  );
}

export default App;
