"use client"
import { useExpense } from '@/app/expenseProvider';
import React from 'react'

export default function ClearExpenses() {
  const { clearExpense } = useExpense();


  return (
    <button onClick={() => clearExpense()}>clear</button>
  )
}
