const initialState: [] = [];

export const initializer = (initialValue = initialState) =>
    JSON.parse(localStorage.getItem('expenses') ?? '[]') || initialValue;

export const expenseReducer = (state: any, action: any) => {
    switch (action.type) {
        case "ADD_TO_EXPENSE":
        return state.find((item: any) => item.name === action.item.name)
            ? state.map((item: any) =>
                item.name === action.item.name
                ? {
                    ...item,
                    quantity: item.quantity + 1
                    }
                : item
            )
            : [...state, { ...action.item, quantity: 1 }];

        case "REMOVE_FROM_EXPENSE":
            return state.filter((item: any) => item.name !== action.item.name);

        case "CLEAR_EXPENSE":
            return initialState;

        default:
            return state;
    }   
};
  
export const addToExpense = (item: any) => ({
    type: "ADD_TO_EXPENSE",
    item
});
  
  
export const removeFromExpense = (item: any) => ({
    type: "REMOVE_FROM_CART",
    item
});
  
export const clearExpense = () => ({
    type: "CLEAR_CART"
});