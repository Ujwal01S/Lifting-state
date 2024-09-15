import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseList from '../UI/ExpenseList';

export const ExpenseCard = () => {
  const [formData, setFormData] = useState([]);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    setFormData((prevData) => {
      return [expenseData, ...prevData];
    });

    console.log(formData);
    console.log(expenseData);
  };
  return (
    <>
        <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler} />  
        <ExpenseList expense = {formData}/>
    </>
  )
}
