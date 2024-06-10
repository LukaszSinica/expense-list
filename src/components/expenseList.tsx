"use client"
import { useExpense } from '@/app/expenseProvider';
import { ExpenseDate } from '@/app/lib/expesneListTypes';
import React from 'react'
import ExpenseListItem from './expenseListItem';

export default function ExpenseList() {
  const { getExpenseList } = useExpense();
  const expenseList = getExpenseList();
  const [ expenseListData, setexpenseListData ] = React.useState<ExpenseDate>({})
  React.useEffect(() => {
      setexpenseListData(expenseList);
  }, [expenseList])

  return (
    <main className="flex-grow shadow-gray shadow-md">
      {(Object.keys(expenseListData).map(date => (
              <div key={date} className="flex flex-col w-100 items-center">
                  <div className="flex h-8 items-center">{date}</div>
                  {Object.keys(expenseListData[date]).map((category) => (
                      <ExpenseListItem key={`${date}-${category}`} expenseListData={expenseListData[date]} category={category} date={date}/>
                   ))}
              </div>
          )))}
    </main>
  )
}
