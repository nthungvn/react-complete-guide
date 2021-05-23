import useInput from '../hooks/use-input';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.trim() !== '' && value.includes('@');

const BasicForm = (props) => {
  const [
    firstNameValue,
    firstNameHasError,
    fistNameIsValid,
    firstNameChangeHandler,
    firstNameBlurHandler,
    resetFirstName,
  ] = useInput(isNotEmpty);

  const [
    lastNameValue,
    lastNameHasError,
    lastNameIsValid,
    lastNameChangeHandler,
    lastNameBlurHandler,
    resetLastName,
  ] = useInput(isNotEmpty);

  const [
    emailValue,
    emailHasError,
    emailIsValid,
    emailChangeHandler,
    emailBlurHandler,
    resetEmail,
  ] = useInput(isEmail);

  const formIsValid = fistNameIsValid && lastNameIsValid && emailIsValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(firstNameValue, lastNameValue, emailValue);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = firstNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const lastNameClasses = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">Please enter a valid first name</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Please enter a valid last name</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
