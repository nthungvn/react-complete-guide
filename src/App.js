import React, { useCallback, useState } from 'react';
import './App.css';
import Button from './components/UI/Button/Button';


function App() {
  console.log('APP RUNNING...');
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevState) => !prevState);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
