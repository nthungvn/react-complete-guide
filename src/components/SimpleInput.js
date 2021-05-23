import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const [
    enteredName,
    nameInputIsInvalid,
    enteredNameIsValid,
    nameInputChangeHandler,
    nameInputBlurHandler,
    resetName,
  ] = useInput('', (enteredName) => enteredName.trim() !== '');

  const [
    enteredEmail,
    emailInputIsInvalid,
    enteredEmailIsValid,
    emailInputChangeHandler,
    emailInputBlurHandler,
    resetEmail,
  ] = useInput(
    '',
    (enteredEmail) => enteredEmail.trim() !== '' && enteredEmail.includes('@')
  );

  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetName();
    resetEmail();
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Email is not valid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
