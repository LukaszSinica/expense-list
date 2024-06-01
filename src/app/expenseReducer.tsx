import { ExpenseDate } from "./lib/expesneListTypes";

const initialState: ExpenseDate[] = [];

export const initializer = (initialValue = initialState) => {
    if (typeof window !== "undefined") {
        try {
            const expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
            return expenses || initialValue; // Zwracaj expenses jeśli są, w przeciwnym razie initialValue
        } catch (error) {
            console.error("Failed to initialize state from localStorage", error);
            return initialValue;
        }
    }
    return initialValue;
}

export const expenseReducer = (state: any, action: any) => {
    switch (action.type) {
        case "ADD_TO_EXPENSE": {
            const { date, category, amount, icon } = action.item;
            const newState = { ...state };

            if (!newState[date]) {
                newState[date] = {};
            }

            if (!newState[date][category]) {
                newState[date][category] = { amount: 0, entries: 0, icon: icon };
            }

            newState[date][category].amount += amount;
            newState[date][category].entries += 1;

            localStorage.setItem('expenses', JSON.stringify(newState));

            return newState;
        }
        case "REMOVE_FROM_EXPENSE": {
            const { date, category, amount } = action.item;
            const newState = { ...state };

            if (newState[date] && newState[date][category]) {
                newState[date][category].amount -= amount;
                newState[date][category].entries -= 1;

                if (newState[date][category].amount <= 0) {
                    delete newState[date][category];
                }
            }
            localStorage.setItem('expenses', JSON.stringify(newState));

            return newState;
        }
        case "CLEAR_EXPENSE": {
            localStorage.removeItem('expenses');
            return initialState;
        }
        case "GET_EXPENSE_LIST": {
            return state;
        }
        default:
            return state;
    }   
};

export const addToExpense = (item: any) => ({
    type: "ADD_TO_EXPENSE",
    item
});

export const removeFromExpense = (item: any) => ({
    type: "REMOVE_FROM_EXPENSE",
    item
});

export const clearExpense = () => ({
    type: "CLEAR_EXPENSE"
});

export const getExpenseList = () => ({
    type: "GET_EXPENSE_LIST"
});