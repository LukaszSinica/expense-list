"use client"
import { useExpense } from '@/app/expenseProvider';
import { expenseListTypes } from '@/app/lib/expesneListTypes'
import React, { FormEvent } from 'react'

const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

export default function AddExpense() {
  const { addToExpense } = useExpense();

  const optionTypes = expenseListTypes.map((type, key) => 
    <option key={key} value={type}>{type}</option>
  )
  
 async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const date = getTodayDate();
    const category = data.type as string;
    const amount = parseFloat(data.amount as string);
    const icon = `${category}_icon`;

    const item = { date, category, amount, icon };
    addToExpense(item);
}

  return (
    <div className="flex-grow shadow-gray shadow-md justify-center pt-4">
      <form onSubmit={onSubmit}>
      <div>
        Type: 
        <select name="type" defaultValue="Gas">
          {optionTypes}
        </select>
      </div>
      <div>
        Amount:
        <input type="number" id="amount" name="amount"/>
      </div>
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}


