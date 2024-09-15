import React from 'react'
import ExpenseDate from './ExpenseDate'

const ExpenseList = ({expense}) => {
    
 

        // const month = expense.date.toLocaleString('en-US', {month: 'long'})
        // const day = expense.date.toLocaleString('en-US', {day: '2-digit'});
        // const year = expense.date.getFullYear();

  return (
    <div className='bg-slate-900 w-1/2 mx-auto mt-32 py-5 rounded-md mb-7'>
        
        {expense.map((e) => (
            <div className='flex bg-slate-400 py-4 justify-between mt-1 mx-4 rounded-md my-3' key={e.id}>
                <div>
                    <ExpenseDate date = {e.date}/>
                </div>

                <div className='flex flex-col justify-end '>
                    <div className=' w-fit font-serif font-semibold text-2xl mb-2 mr-3 text-white'>{e.item}</div>
                    <div className=' w-fit font-serif  mb-2 mr-3 text-white'>${e.price}</div>
                </div>
            </div>
        ))}
    </div>

  )
}

export default ExpenseList