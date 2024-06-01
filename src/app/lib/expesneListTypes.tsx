export const expenseListTypes = [
    "Gas",
    "Groceries",
    "Food",
]

export interface ExpenseDetails {
    amount: number;
    entries: number;
    icon: string | React.ReactElement
}

export interface ExpenseCategory {
    [category: string]: ExpenseDetails;
}

export interface ExpenseDate {
    [date: string]: ExpenseCategory;
}
