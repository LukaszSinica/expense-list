import { ExpenseCategory, ExpenseDate } from '@/app/lib/expesneListTypes'
import React from 'react'
import ExpenseListItemDetails from './expenseListItemDetails';



export default function ExpenseListItem({expenseListData, category, date}: {expenseListData: ExpenseCategory, category: string, date: string}) {
  const [showDetails, setShowDetails] = React.useState(false);
  return (
    <React.Fragment>
        <div id={category} className="flex justify-between shadow-gray shadow-md px-12 py-4 hover:bg-gray-200 w-full" onClick={() => setShowDetails(!showDetails)}>
            <div className="flex grow-1">
                <div className="self-center">{expenseListData[category].icon}</div>
                <div className="px-8">
                    <div className="font-medium">
                        {category}
                    </div>
                    <div className="font-extralight">
                        {expenseListData[category].entries} entry
                    </div>
                </div>
            </div>
            <div className="self-center text-red-400 font-semibold">
                $ -{expenseListData[category].amount}
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
