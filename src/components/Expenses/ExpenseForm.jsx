import React, { useState } from 'react'


const ExpenseForm = (props) => {
  const [data, setData] = useState({});
  const [date, setDate] = useState(new Date());
  

  const handleChange = (e) => {
    setData({...data, [e.target.id]: e.target.value});
  };

  const handleDate =(e) => {
    setDate(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      item: data.item,
      price: data.price,
      date: new Date(date)
    };
    
    props.onSaveExpenseData(expenseData);
    
    setData({
      item:'',
      price:'',
    });

  };

  return (
    <>
        <div className=' w-[54rem] mx-auto pt-24 '>
          <form onSubmit={handleSubmit}>
          <div className= "flex flex-col mx-11 px-28 bg-slate-100 rounded-md shadow-sm shadow-slate-400">

            <label className='items-start my-3 font-semibold font-sans text-lg '>Item Name:</label>
            <input 
            onChange={handleChange}
            value={data.item}
            className='rounded-md my-2 text-center outline-stone-300' type='text' placeholder='item' id='item'/>

            <label className='font-semibold font-sans text-lg '>$Price</label>
            <input 
            onChange={handleChange}
            value={data.price}
            className='rounded-md my-2 text-center outline-stone-300' type='text' placeholder='price' id='price' />
            
            <label className='font-semibold font-sans text-lg'>Date:</label>
            <input 
            onChange={handleDate}
            value={date}
            className='rounded-md my-4 outline-stone-300' type='date' id='date' />
            
            <button className='bg-slate-500 mx-44 rounded-md mb-4 text-white py-1
            hover:bg-slate-700 hover:shadow-lg'>Added Item</button>
            </div>
            </form>
            </div>

          
    </>
  )
}

export default ExpenseForm