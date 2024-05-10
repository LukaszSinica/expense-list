"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export default function ClearExpenses() {
    const router = useRouter();

  function clearExpenses() {
    localStorage.removeItem('expenses');
    router.refresh();
  }

  return (
    <button onClick={() => clearExpenses()}>clear</button>
  )
}
