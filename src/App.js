import randomColor from 'randomcolor';
import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  border-radius: 8px;
  margin: 10px 0px;
`;

export default function App() {
  const [textColor, setTextColor] = useState('');
  const generateColor = randomColor();
  // const colorMessage = `Generated Color:${generateColor}`;

  return (
    <>
      <h1>React Random Color Generator</h1>
      <br />
      <p>Click on the button below and create a random color.</p>
      <br />
      <Button
        onClick={() => {
          const generateColor = randomColor();
          setTextColor(generateColor);
          document.body.style.background = generateColor;
        }}
      >
        Generate
      </Button>
      {/* {generateColor && ( */}
      <div style={{ backgroundColor: { textColor } }}>
        Generated Color: {generateColor}
      </div>
    </>
  );
}
