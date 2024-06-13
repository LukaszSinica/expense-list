import { useExpense } from '@/app/expenseProvider';
import { ExpenseDetails } from '@/app/lib/expesneListTypes'
import React from 'react'

//TODO: ADD INTERFACE/TYPE FOR LONG PARAMETERS
export default function ExpenseListItemDetails({expenseListData, expense, category, date}: {expenseListData: ExpenseDetails, expense: string, category: string, date: string}) {
  const { removeFromExpense } = useExpense();
  const handleSubmit = () => {
    removeFromExpense({expense: expense, category: category, date: date, amount: expenseListData.expenseItems[expense].amount})
  };
  return (
    <div key={expense} className={"flex justify-between shadow-gray shadow-md px-12 py-4 hover:bg-gray-200 w-full"}>
        <div className="flex grow-1">
            <div>
                <div className="font-medium">
                    {category}
                </div>
            </div>
        </div>
        <div className="self-center text-red-400 font-semibold">
            <span className="pr-4">$ -{expenseListData.expenseItems[expense].amount}</span>
            <button type="submit" onClick={() => handleSubmit()}>Delete</button>
        </div>
    </div>
  )
}
