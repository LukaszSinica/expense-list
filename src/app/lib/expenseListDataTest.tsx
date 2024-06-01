interface ExpenseTestDetails {
    amount: number;
    entries: number;
    icon: string | React.ReactElement
}

interface ExpenseTestCategory {
    [category: string]: ExpenseTestDetails;
}

interface ExpenseTestDate {
    [date: string]: ExpenseTestCategory;
}


export const expenseListDataTest: ExpenseTestDate = {
    "2024-02-03": {
        "food": {
            "amount": 50,
            "entries": 2,
            "icon": "food_icon",
        },
        "fuel": {
            "amount": 100,
            "entries": 1,
            "icon": "fuel_icon",
        }
    },
}

export const getTestData = () => {
    return (
        <>
            {(Object.keys(expenseListDataTest).map(date => (
                <div key={date} className="flex flex-col w-100 items-center">
                    <div className="flex h-8 items-center">{date}</div>
                    {Object.keys(expenseListDataTest[date]).map(category => (
                        <div key={category} className="flex justify-between shadow-gray shadow-md px-12 py-4 hover:bg-gray-200 w-full">
                            <div className="flex grow-1">
                                <div className="self-center">{expenseListDataTest[date][category].icon}</div>
                                <div className="px-8">
                                    <div className="font-medium">
                                        {category}
                                    </div>
                                    <div className="font-extralight">
                                        {expenseListDataTest[date][category].entries} entry
                                    </div>
                                </div>
                            </div>
                            <div className="self-center text-red-400 font-semibold">
                                $ -{expenseListDataTest[date][category].amount}
                            </div>
                        </div>
                    ))}
                </div>
            )))}
        </>
    )
}