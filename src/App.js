import randomColor from 'randomcolor';
import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 80px;
  cursor: pointer;
  border-radius: 8px;
  margin: 10px 0px;
`;

export default function App() {
  const [textColor, setTextColor] = useState('');
  const generateColor = String(randomColor());
  const divStyle = {
    backgroundColor: generateColor,
    fontSize: '20px',
    padding: '20px',
    paddingTop: '40px',
    paddingBottom: '40px',
    transition: 'all 0.5s ease',
    display: 'inline-block',
    border: textColor,
  };

  return (
    <>
      <h1>React Random Color Generator</h1>
      <p style={{ fontSize: '20px' }}>
        Click on the button below and create a random color.
      </p>
      <br />
      <Button
        onClick={() => {
          setTextColor(generateColor);
        }}
      >
        Generate
      </Button>
      <br />
      <br />
      <div style={divStyle}>Generated Color: {generateColor}</div>
    </>
  );
}
