"use client"
import { useExpense } from '@/app/expenseProvider';
import { ExpenseCategory } from '@/lib/expesneListTypes';
import React from 'react'
import ExpenseListItem from '@/components/expenselist/expenseListItem';
import { getTodayDate } from '@/helper/getTodayDate';

export default function ExpenseList() {
  const [listDate, setListDate] = React.useState(getTodayDate())
  const { getExpenseListByDate } = useExpense();
  const expenseList = getExpenseListByDate(listDate);
  const [ expenseListData, setexpenseListData ] = React.useState<ExpenseCategory>({})

  React.useEffect(() => {
      const expenseList = getExpenseListByDate(listDate);
      setexpenseListData(expenseList);
  }, [expenseList, listDate])
  
  const onChangeDate = (date: { target: { value: React.SetStateAction<string>; }; }) => {
    setListDate(date.target.value);
  };

  return (
    <div className="flex-grow shadow-gray">
      <div className="relative w-full mb-4 shadow-md">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
          </svg>
        </div>
        <input type="date" className="text-sm w-full ps-10 p-4" id="date" name="date" placeholder="Select date" onChange={(date) => onChangeDate(date)} value={listDate}/>
      </div>
      <div className="flex h-8 justify-center font-bold">{listDate}</div>
      <div key={listDate} className="flex flex-col w-100 items-center overflow-y-auto">
          {expenseListData ?
          <>
            {Object.keys(expenseListData).map((category) => (
              <ExpenseListItem key={`${listDate}-${category}`} expenseListData={expenseListData} category={category} date={listDate}/>
            ))}
          </>
          : null}
      </div>
    </div>
  )
}
