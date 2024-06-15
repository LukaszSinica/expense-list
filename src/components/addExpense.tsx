"use client"
import { useExpense } from '@/app/expenseProvider';
import { getTodayDate } from '@/helper/getTodayDate';
import React, { FormEvent } from 'react'


export default function AddExpense() {
  const { addToExpense } = useExpense();
  const [message, setMessage] = React.useState('')
  const todaysDate = getTodayDate();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData.entries());

      const date = data.date as string;
      const category = data.type as string;
      const amount = parseFloat(data.amount as string);

      const item = { date, category, amount };
      addToExpense(item);
      setMessage('expense Added')
  }

  return (
    <div className="flex-grow shadow-gray shadow-md justify-center p-4">
      <form onSubmit={onSubmit}>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date
        </label>
        <div className="relative max-w-full mb-4 w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
          </div>
          <input type="date" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                id="date" 
                name="date" 
                placeholder="Select date"
                defaultValue={todaysDate}
                required
                />
        </div>
          <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
            Type
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white leading-tight focus:outline-none focus:shadow-outline" 
            id="type" 
            name="type" 
            type="text" 
            placeholder="type"
            required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
              Amount
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white leading-tight focus:outline-none focus:shadow-outline" 
              id="amount" 
              name='amount' 
              type="number" 
              placeholder="10"
              required
              />
          </div>
          <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-md dark:bg-slate-600 dark:text-white dark:hover:bg-gray-700" type="submit">
            Add Expense
          </button>
        </form>
        {message ?<span>{message}</span> : null}
    </div>
  )
}


