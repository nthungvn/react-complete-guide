import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');
  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );
  const onChangeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        value={filteredYear}
        onChangeFilter={onChangeFilterHandler}
      />
      {filteredExpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
