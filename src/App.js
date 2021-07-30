import React,{useState} from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMUY_EXPENSES = [
    {
      id: 'e1',
      title: 'TV',
      amount: 499.99,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'Music System', amount: 249.99, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'AC',
      amount: 599.99,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'PS 5',
      amount: 499.99,
      date: new Date(2021, 5, 12),
    },
  ];

const App = () => {
  

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })

  // );

  const [expenses,setExpenses] = useState(DUMMUY_EXPENSES)

  const addExpenseHandler = (expense) =>{

    setExpenses((prevExpenses) =>{
      return [expense,...prevExpenses];
    });

  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;