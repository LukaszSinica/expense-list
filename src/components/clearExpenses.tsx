"use client"
import { useExpense } from '@/app/expenseProvider';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function ClearExpenses() {
  const { clearALLExpense } = useExpense();

  return (
    <button onClick={() => clearALLExpense()}><FontAwesomeIcon icon={faTrash} className='w-5 h-5' /></button>
  )
}
