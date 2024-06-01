"use client"
import { getTestData } from '@/app/lib/expenseListDataTest';
import { getExpense } from '@/app/lib/getExpenseList';
import React from 'react'

export default function ExpenseList() {
  return (
    <main className="flex-grow shadow-gray shadow-md">
      {getExpense()}
    </main>
  )
}
