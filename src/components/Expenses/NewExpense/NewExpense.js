import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpanseDataHandler = (enteredExpanseData) => {
        const expenseData = {
            ...enteredExpanseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpanseDataHandler} />
        </div>
    );
}

export default NewExpense;