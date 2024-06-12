"use client";
import { ExpenseCategory } from '@/app/lib/expesneListTypes';
import React from 'react';
import ExpenseListItemDetails from './expenseListItemDetails';
import { useExpense } from '@/app/expenseProvider';



export default function ExpenseListItem({expenseListData, category, date}: {expenseListData: ExpenseCategory, category: string, date: string}) {
  const [showDetails, setShowDetails] = React.useState(false);
  const { removeExpense } = useExpense();
  
  const handleRemove = () => {
    removeExpense({date: date, category: category})
  }
  return (
    <React.Fragment>
        <div id={category} className="flex justify-between shadow-gray shadow-md px-12 py-4 hover:bg-gray-200 w-full" onClick={() => setShowDetails(!showDetails)}>
            <div className="flex grow-1">
                <div>
                    <div className="font-medium">
                        {category}
                    </div>
                    <div className="font-extralight">
                        {expenseListData[category].entries} entry
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <span className='text-red-600 font-semibold pr-4 '>                
                    $ -{expenseListData[category].amount}
                </span>
                <button className='text-red-600 font-bold' onClick={() => handleRemove()}>X</button>
            </div>
        </div>
        {showDetails ? 
            <>
                {Object.keys(expenseListData[category].expenseItems).map((expense) => (
                    <ExpenseListItemDetails key={`${category}-${expense}`} expenseListData={expenseListData} expense={expense} category={category} date={date}/>
                ))}
            </>
        : null}
    </React.Fragment>
  )
}
