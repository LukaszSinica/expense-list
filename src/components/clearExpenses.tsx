"use client"
import { useExpense } from '@/app/expenseProvider';
import React from 'react'

export default function ClearExpenses() {
  const { clearALLExpense } = useExpense();

  return (
    <button onClick={() => clearALLExpense()}>Clear</button>
  )
}
