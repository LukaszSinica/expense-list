'use client'
import React, { useContext } from 'react'
import { expenseReducer, initializer } from './expenseReducer'
import { ExpenseCategory, ExpenseDate } from '../lib/expesneListTypes';

interface ExpenseState {
  date: string;
  category: string;
  amount: number;
}

interface ExpenseContextType {
  expenses: ExpenseState[];
  addToExpense: (item: any) => void;
  removeFromExpense: (item: any) => void;
  removeExpense: (item: any) => void
  clearALLExpense: () => void;
  getExpenseList: () => ExpenseDate;
  getExpenseListByDate: (item: any) => ExpenseCategory;
  getHistoryData: () => HistoryDataType;
}

interface DailyData {
  dayAmount: number;
  mostSpentOn: number;
  mostSpentCategory: string;
}

export interface HistoryDataType {
  [date: string]: DailyData;
}
export const ExpenseContext = React.createContext<ExpenseContextType | undefined>(undefined);

export default function ExpenseProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [expenses, dispatch] = React.useReducer(expenseReducer, [], initializer)

  const addToExpense = (item: any) => dispatch({ type: "ADD_TO_EXPENSE", item });
  const removeFromExpense = (item: any) => dispatch({ type: "REMOVE_FROM_EXPENSE", item });
  const removeExpense = (item: any) => dispatch({ type: "REMOVE_EXPENSE", item });
  const clearALLExpense = () => dispatch({ type: "CLEAR_ALL_EXPENSE" });
  const getExpenseList = () => expenses;

  const getExpenseListByDate = (date: string) => expenses[date] as ExpenseCategory;
  const getHistoryData = () => {
    const data: HistoryDataType = {};
    let dayAmount = 0;
    let mostSpentOn = 0;
    let mostSpentCategory = '';
    Object.keys(expenses).map(date => {
      Object.keys(expenses[date]).map(category => {
        dayAmount += expenses[date][category].amount;
        if(expenses[date][category].amount > mostSpentOn) {
          mostSpentOn = expenses[date][category].amount;
          mostSpentCategory = category;
        }
        data[date] = {
          dayAmount: dayAmount, 
          mostSpentOn: mostSpentOn, 
          mostSpentCategory: mostSpentCategory 
        } 
      }) 
      dayAmount = 0;
      mostSpentOn = 0;
      mostSpentCategory = '';
    })
    return data;
  }
  const value = { expenses, addToExpense, removeFromExpense, removeExpense, clearALLExpense, getExpenseList, getExpenseListByDate, getHistoryData };

  React.useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses])

  return (
      <ExpenseContext.Provider value={value}>
        {children}
      </ExpenseContext.Provider>
  )
}

export const useExpense = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
      throw new Error('useExpense must be used within an ExpenseProvider');
  }
  return context;
};
