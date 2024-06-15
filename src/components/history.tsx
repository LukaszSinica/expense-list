"use client";
import { HistoryDataType, useExpense } from '@/app/expenseProvider';
import React from 'react';

export default function History() {
    const { getHistoryData } = useExpense();
    const[ historyData, setHistoryData ] = React.useState<HistoryDataType>({})
    const dates = Object.keys(historyData);
    const sortedDates = dates.sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

    React.useEffect(() => {
        setHistoryData(getHistoryData)
    }, [])
   

    return (
        <div className='flex h-full items-center flex-col'>
            <h1 className='flex p-4 text-lg font-bold shadow-sm w-full justify-center'>History</h1>
            <div className='flex flex-col w-full overflow-y-auto'>
            {sortedDates.map(date => (
                <div key={date} className="shadow-gray shadow-md p-4 hover:bg-gray-200 dark:hover:bg-gray-700 w-full">
                    <div className='font-medium'>
                        {date}
                    </div>    
                    <p className="font-light">Daily spent: {historyData[date].dayAmount}</p>
                    <p className="font-light">Most spent expense: {historyData[date].mostSpentCategory}</p>
                    <p className="font-light">Most spent on {historyData[date].mostSpentCategory}: {historyData[date].mostSpentOn}</p>
                </div>
            ))}
            </div>
        </div>
    )
}
