import { ExpenseDate } from '@/app/lib/expesneListTypes'
import React from 'react'



export default function ExpenseListItem({expenseListData}: ExpenseDate) {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <>
    {Object.keys(expenseListData).map(category => (
        <React.Fragment key={category}>
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
            <>
            {showDetails ? 
            <React.Fragment key={category + "_items"}>
                {Object.keys(expenseListData[category].expenseItems).map((expense) => (
                    <div key={expense} className="flex justify-between shadow-gray shadow-md px-12 py-4 hover:bg-gray-200 w-full">
                        <div className="flex grow-1">
                            <div>
                                <div className="font-medium">
                                    {category}
                                </div>
                            </div>
                        </div>
                        <div className="self-center text-red-400 font-semibold">
                            $ -{expenseListData[category].amount}
                        </div>
                    </div>
                ))}
            </React.Fragment>
            : null}
            </>
        </React.Fragment>
        ))}
    </>
  )
}
