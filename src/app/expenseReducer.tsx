import { ExpenseDate } from "../lib/expesneListTypes";

const initialState: ExpenseDate[] = [];

export const initializer = (initialValue = initialState) => {
    if (typeof window !== "undefined") {
        try {
            const expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
            return expenses || initialValue;
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
            const { date, category, amount } = action.item;
            const newState = { ...state };

            if (!newState[date]) {
                newState[date] = {};
            }

            if (!newState[date][category]) {
                newState[date][category] = { amount: 0, entries: 0 };
            }

            if (!newState[date][category].expenseItems) {
                newState[date][category].expenseItems = {};
            }
        
            const entryIndex =  newState[date][category].entries;
            newState[date][category].expenseItems[entryIndex] = { amount: amount };

            newState[date][category].amount += amount;
            newState[date][category].entries += 1;

            localStorage.setItem('expenses', JSON.stringify(newState));

            return newState;
        }
        case "REMOVE_FROM_EXPENSE": {
            const { date, category, amount, expense } = action.item;
            const newState = { ...state };

            if (newState[date] && newState[date][category]) {
                newState[date][category].amount -= amount;
                newState[date][category].entries -= 1;
                delete newState[date][category].expenseItems[expense];
                if (newState[date][category].amount <= 0) {
                    delete newState[date][category];
                } else if(newState[date][category].expenseItems.length == 0) {
                    delete newState[date][category];
                }
                if(Object.keys(newState[date]).length == 0) {
                    delete newState[date];
                }
            }
            localStorage.setItem('expenses', JSON.stringify(newState));

            return newState;
        }
        case "REMOVE_EXPENSE": {
            const { date, category } = action.item;
            const newState = { ...state };

            if (newState[date] && newState[date][category]) {
                delete newState[date][category]
                if (Object.keys(newState[date]).length == 0) {
                    delete newState[date];
                }
            }
            localStorage.setItem('expenses', JSON.stringify(newState));

            return newState;
        }

        case "CLEAR_ALL_EXPENSE": {
            localStorage.removeItem('expenses');
            return initialState;
        }
        case "GET_EXPENSE_LIST": {
            return state;
        }
        case "GET_EXPENSE_LIST_BY_DATE": {
            const { date } = action.item;
            const newState = { ...state };

            return newState[date];
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

export const removeExpense = () => ({
    type: "REMOVE_EXPENSE"
});

export const clearALLExpense = () => ({
    type: "CLEAR_ALL_EXPENSE"
});

export const getExpenseList = () => ({
    type: "GET_EXPENSE_LIST"
});

export const getExpenseListByDate = () => ({
    type: "GET_EXPENSE_LIST_BY_DATE"
});