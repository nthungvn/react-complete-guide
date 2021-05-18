import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const inputProps = {
    id: `amount-${props.id}`,
    name: 'amount',
    type: 'number',
    min: '1',
    max: '5',
    step: '1',
    defaultValue: '1',
  };

  return (
    <form className={classes.form}>
      <Input input={inputProps} label="Amount" />
      <button>+ Add</button>
    </form>
  );
};
export default MealItemForm;
