"use client"
import { expenseListTypes } from '@/app/lib/expesneListTypes'
import React, { FormEvent } from 'react'

export default function AddExpense() {
  const optionTypes = expenseListTypes.map((type, key) => 
    <option key={key} value={type}>{type}</option>
  )
  
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const formJson = Object.fromEntries(formData.entries());

    try {
      const expenses = JSON.parse(localStorage.getItem('expenses') ?? '[]');
      expenses.push({...formJson, entry: 1});
      localStorage.setItem('expenses', JSON.stringify(expenses));
    }  catch (error) {}
    
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
function handleSubmit(event: Event | undefined) {
  throw new Error('Function not implemented.');
}

