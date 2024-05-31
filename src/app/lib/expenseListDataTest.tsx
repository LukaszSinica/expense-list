interface ExpenseDetails {
    amount: number;
    entries: number;
    icon: string | React.ReactElement
}

interface ExpenseCategory {
    [category: string]: ExpenseDetails;
}

interface ExpenseDay {
    [day: string]: ExpenseCategory;
}

interface ExpenseMonth {
    [month: string]: ExpenseDay;
}

interface ExpenseYear {
    [year: string]: ExpenseMonth;
}


export const expenseListDataTest: ExpenseYear = {
    "2024": {
        "02": {
            "03": {
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
            "01": {
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
        },
    },
}

export const getTestData = () => {
    return (
        <>
            {(Object.keys(expenseListDataTest).map(year => 
                Object.keys(expenseListDataTest[year]).map(month => 
                    Object.keys(expenseListDataTest[year][month]).map(day => (
                        <div key={`${year}-${month}-${day}`} className="flex flex-col w-100 items-center">
                                <div className="flex h-8 items-center">{`${year}-${month}-${day}`}</div>
                                {Object.keys(expenseListDataTest[year][month][day]).map(category => (
                                    <div key={category} className="flex justify-between shadow-gray shadow-md px-12 py-4 hover:bg-gray-200 w-full">
                                        <div className="flex grow-1">
                                            <div className="self-center">icon</div>
                                            <div className="px-8">
                                                <div className="font-medium">
                                                    {category}
                                                </div>
                                                <div className="font-extralight">
                                                    {expenseListDataTest[year][month][day][category].entries} entry
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-center text-red-400 font-semibold">
                                            $ -{expenseListDataTest[year][month][day][category].amount}
                                        </div>
                                    </div>
                                ))}
                        </div>
                        )
                    )
            )
            ))
            }
        </>
    )
    return 
}