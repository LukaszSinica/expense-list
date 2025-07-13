"use client"
import { useExpense } from '@/app/expenseProvider';
import { getTodayDate } from '@/helper/getTodayDate';
import React, { FormEvent } from 'react'
import TextInput from '../ui/textInput';
import { Button } from "@/components/ui/button"

export default function AddExpense({ setOpen }: { setOpen: (open: boolean) => void }) {
  const { addToExpense } = useExpense();
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

      setOpen(false);
  
  }

  return (
    <div className="flex-grow shadow-gray shadow-md justify-center p-4">
      <form onSubmit={onSubmit}>
        <label className="block text-sm font-bold mb-2" htmlFor="date">
            Date
        </label>
        <div className="relative max-w-full mb-4 w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
          </div>
          <input type="date" 
                className="text-sm rounded-lg w-full ps-10 p-3" 
                id="date" 
                name="date" 
                placeholder="Select date"
                defaultValue={todaysDate}
                required
                />
        </div>
          <TextInput label={'Type'} name={'type'} type={'text'} placeholder='type'/>
          <TextInput label={'Amount'} name={'amount'} type={'number'} placeholder='10'/>
          <Button variant="outline" type="submit" className="p-5 shadow-md w-full">
            Add Expense
          </Button>
        </form>
    </div>
  )
}


