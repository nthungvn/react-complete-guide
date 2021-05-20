import React, { useCallback, useState } from 'react';
import './App.css';
import Button from './components/UI/Button/Button';
import OutputDemo from './components/Demo/OutputDemo';

function App() {
  console.log('APP RUNNING...');
  const [showParagraph, setShowParagraph] = useState(false);
  const [enableToggle, setEnableToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    if (enableToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [enableToggle]);

  const enableToggleHandler = useCallback(() => {
    setEnableToggle(true);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <OutputDemo show={showParagraph}>This is new!</OutputDemo>
      <Button onClick={enableToggleHandler}>Enable Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
