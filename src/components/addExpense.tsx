"use client"
import { useExpense } from '@/app/expenseProvider';
import React, { FormEvent } from 'react'

const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

export default function AddExpense() {
  const { addToExpense } = useExpense();
  const [message, setMessage] = React.useState('')
  
 async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const date = getTodayDate();
    const category = data.type as string;
    const amount = parseFloat(data.amount as string);

    const item = { date, category, amount };
    addToExpense(item);
    setMessage('expense Added')
}

  return (
    <div className="flex-grow shadow-gray shadow-md justify-center p-4">
      <form onSubmit={onSubmit}>
          <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
            Type
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="type" name="type" type="text" placeholder="type"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
              Amount
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" name='amount' type="number" placeholder="10"/>
          </div>
          <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-md" type="submit">
            Add Expense
          </button>
        </form>
        {message ?<span>{message}</span> : null}
    </div>
  )
}


