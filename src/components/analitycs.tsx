"use client";
import { AnalyticsDataType, useExpense } from '@/app/expenseProvider';
import React from 'react';

export default function Analitycs() {
    const { getAnalyticsData } = useExpense();
    const[ analyticsData, setAnalyticsData ] = React.useState<AnalyticsDataType>({})
    const dates = Object.keys(analyticsData);
    const sortedDates = dates.sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

    React.useEffect(() => {
        setAnalyticsData(getAnalyticsData)
    }, [])
   

    return (
        <div className='flex h-full items-center flex-col'>
            <h1 className='flex p-4 text-lg font-bold shadow-sm w-full justify-center'>Analytics Data</h1>
            <div className='flex flex-col w-full overflow-y-auto'>
            {sortedDates.map(date => (
                <div key={date} className="shadow-gray shadow-md p-4 hover:bg-gray-200 w-full">
                    <div className='font-medium'>
                        {date}
                    </div>    
                    <p className="font-light">Daily spent: {analyticsData[date].dayAmount}</p>
                    <p className="font-light">Most spent expense: {analyticsData[date].mostSpentCategory}</p>
                    <p className="font-light">Most spent on {analyticsData[date].mostSpentCategory}: {analyticsData[date].mostSpentOn}</p>
                </div>
            ))}
            </div>
        </div>
    )
}
