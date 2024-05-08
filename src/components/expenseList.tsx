import { expenseListDataTest } from '@/app/lib/expenseListDataTest'
import React from 'react'

export default function ExpenseList() {

  const expenseListData = expenseListDataTest.map((expense, key) => 
    <div key={key} className="flex justify-between shadow-gray shadow-md px-12 py-4 hover:bg-gray-200">
      <div className="flex grow-1">
        <div className="self-center">icon</div>
        <div className="px-8">
          <div className="font-medium">
            {expense.type}
          </div>
          <div className="font-extralight">
            {expense.entry} entry
          </div>
        </div>
      </div>
      <div className="self-center text-red-400 font-semibold">$ -{expense.value}</div>
    </div>
  )

  return (
    <main className="flex-grow shadow-gray shadow-md">{expenseListData}</main>
  )
}
