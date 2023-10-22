// import React, { useState } from 'react';
// import './style.css'

// const Home = () => {
//   const [inputs, setInputs] = useState({
//     expense: '',
//     price: '',
//     date:""
//   });
//   const [dataTable, setdataTable] = useState([]);

//   const [editData, seteditData] = useState(false);
//   const [editIndex, seteditIndex] = useState('');

//   const handleChange = (e) => {
//     setInputs({
//       ...inputs,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const deleteHandler = (index) => {
//     const filterData = dataTable.filter((item, i) => i !== index);
//     setdataTable(filterData);
//   };

//   const editHandler = (index) => {
//     const tempData = dataTable[index];
//     setInputs({
//       expense: tempData.expense,
//       price: tempData.price,
//       date: tempData.date,
//     });
//     seteditData(true);
//     seteditIndex(index);
//   };


// const onsubmitHandler = (e) => {
//     e.preventDefault();
  
//     if (editIndex !== '') {
//       // Editing an existing task
//       const tempData = [...dataTable];
//       tempData[editIndex] = { ...inputs };
//       setdataTable(tempData);
//       seteditData(false);
//     } else {
//       // Adding a new task
//       setdataTable([...dataTable, inputs]);
//     }
  
//     // Clear input fields and reset editIndex
//     setInputs({ expense: '', price: '' });
//     seteditIndex('');
//   };
//   return (
//     <div className='page'>
//       <h1>Expense Tracker</h1>
//       <div className='container'>
//         <form onSubmit={onsubmitHandler}>
//           <div>
//             <input
//               className='input'
//               type='text'
//               name='expense'
//               id='expenseTitle'
//               value={inputs.expense}
//               onChange={handleChange}
//               placeholder='Enter Title'
//             />
//           </div>
//           <div>
//             <input
//               className='input'
//               type='number'
//               name='price'
//               id='expensePrice'
//               value={inputs.price}
//               onChange={handleChange}
//               placeholder='Enter Price'

//             />
//           </div>
//           <div>
//             <input
//               className='input'
//               type='date'
//               name='date'

//               value={inputs.date}
//               onChange={handleChange}
             
//             />
//           </div>
          
//           <div>
//             <button className='submit' type='submit'>{editData ? 'update' : 'add'}</button>
//           </div>
//         </form>
//       </div>
    
     
//       <div className='list'>
//         <table>
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Expense</th>
//               <th>date</th>
//               <th>Edit</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {dataTable.map((item, i) => (
              
//               <tr>
//                 <td>{item.title}</td>
//                 <td>{item.price}</td>
//                 <td>{item.date}</td>

//                 <td>
//                   <button className='edit-btn' onClick={() => editHandler(i)}>edit</button>
//                 </td>
//                 <td>
//                   <button className='del-btn' onClick={() => deleteHandler(i)}>delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>


//       </div>
//   );
// };

// export default Home;
import React, { useState } from 'react';
import './style.css';

const Home = () => {
  const [inputs, setInputs] = useState({
    expense: '',
    price: '',
    date: '',
  });
  const [dataTable, setDataTable] = useState([]);

  const [editData, setEditData] = useState(false);
  const [editIndex, setEditIndex] = useState('');

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const deleteHandler = (index) => {
    const filterData = dataTable.filter((item, i) => i !== index);
    setDataTable(filterData);
  };

  const editHandler = (index) => {
    const tempData = dataTable[index];
    setInputs({
      expense: tempData.expense,
      price: tempData.price,
      date: tempData.date,
    });
    setEditData(true);
    setEditIndex(index);
  };

  const onsubmitHandler = (e) => {
    e.preventDefault();

    if (editIndex !== '') {
      // Editing an existing task
      const tempData = [...dataTable];
      tempData[editIndex] = { ...inputs };
      setDataTable(tempData);
      setEditData(false);
    } else {
      // Adding a new task
      setDataTable([...dataTable, inputs]);
    }

    // Clear input fields and reset editIndex
    setInputs({ expense: '', price: '', date: '' });
    setEditIndex('');
  };

  return (
    <div className='page'>
      <h1>Expense Tracker</h1>
      <div className='container'>
        <form onSubmit={onsubmitHandler}>
          <div>
            <input
              className='input'
              type='text'
              name='expense'
              id='expenseTitle'
              value={inputs.expense}
              onChange={handleChange}
              placeholder='Enter Title'
              required
            />
          </div>
          <div>
            <input
              className='input'
              type='number'
              name='price'
              id='expensePrice'
              value={inputs.price}
              onChange={handleChange}
              placeholder='Enter Price'
              required
            />
          </div>
          <div>
            <input
              className='input'
              type='date'
              name='date'
              min={"01-01-2020"}
              value={inputs.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button className='submit' type='submit'>
              {editData ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>

      <div className='list'>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map((item, i) => (
              <tr key={i}>
                <td>{item.expense}</td>
                <td>{item.price}</td>
                <td>{item.date}</td>
                <td>
                  <button className='edit-btn' onClick={() => editHandler(i)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button className='del-btn' onClick={() => deleteHandler(i)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

