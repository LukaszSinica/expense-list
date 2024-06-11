export const expenseListTypes = [
    "Gas",
    "Groceries",
    "Food",
]
export interface Expense {
    amount: number;
}
export interface ExpenseItems {
    [item: string]: Expense;
}

export interface ExpenseDetails {
    entries: number;
    amount: number;
    expenseItems: ExpenseItems;
}

export interface ExpenseCategory {
    [category: string]: ExpenseDetails;
}

export interface ExpenseDate {
    [date: string]: ExpenseCategory;
}
