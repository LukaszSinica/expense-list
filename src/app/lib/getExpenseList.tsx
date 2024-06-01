"use client"
import { useExpense } from "@/app/expenseProvider";
import React from "react";
import { ExpenseDate } from "./expesneListTypes";

export const getExpense = () => {
    const { getExpenseList } = useExpense();
    const expense = getExpenseList();
    const [ expenseList, setExpenseList ] = React.useState<ExpenseDate>({})

    React.useEffect(() => {
        setExpenseList(expense);
    }, [expense])

    return (
        <>
            {(Object.keys(expenseList).map(date => (
                <div key={date} className="flex flex-col w-100 items-center">
                    <div className="flex h-8 items-center">{date}</div>
                    {Object.keys(expenseList[date]).map(category => (
                        <div id={category} key={category} className="flex justify-between shadow-gray shadow-md px-12 py-4 hover:bg-gray-200 w-full">
                            <div className="flex grow-1">
                                <div className="self-center">{expenseList[date][category].icon}</div>
                                <div className="px-8">
                                    <div className="font-medium">
                                        {category}
                                    </div>
                                    <div className="font-extralight">
                                        {expenseList[date][category].entries} entry
                                    </div>
                                </div>
                            </div>
                            <div className="self-center text-red-400 font-semibold">
                                $ -{expenseList[date][category].amount}
                            </div>
                        </div>
                    ))}
                </div>
            )))}
        </>
    )
}