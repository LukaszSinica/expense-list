'use client'
import React from 'react'

export const ExpenseContext = React.createContext({})

export default function ExpenseProvider({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <ExpenseContext.Provider value="dark">{children}</ExpenseContext.Provider>
  )

}
