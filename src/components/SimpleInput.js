import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');

  const nameInputRef = useRef();

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    console.log(nameInputRef.current.value);

    // nameInputRef.current.value = '';
    setEnteredName('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
