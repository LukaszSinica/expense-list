"use client"
import { useExpense } from "@/app/expenseProvider";
import React from "react";
import { ExpenseDate } from "./expesneListTypes";
import ExpenseListItem from "@/components/expenseListItem";

export const getExpense = () => {
    const { getExpenseList } = useExpense();
    const expenseList = getExpenseList();
    const [ expenseListData, setexpenseListData ] = React.useState<ExpenseDate>({})
    React.useEffect(() => {
        setexpenseListData(expenseList);
    }, [expenseList])

    return (
        <>
            {(Object.keys(expenseListData).map(date => (
                <div key={date} className="flex flex-col w-100 items-center">
                    <div className="flex h-8 items-center">{date}</div>
                    <ExpenseListItem expenseListData={expenseListData[date]}/>
                </div>
            )))}
        </>
    )
}