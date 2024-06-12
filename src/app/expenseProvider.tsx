'use client'
import React, { useContext } from 'react'
import { expenseReducer, initializer } from './expenseReducer'
import { ExpenseDate } from './lib/expesneListTypes';

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
  const clearALLExpense = () => dispatch({ type: "clearALLExpense" });
  const getExpenseList = () => expenses;

  const value = { expenses, addToExpense, removeFromExpense, removeExpense, clearALLExpense, getExpenseList };

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
