import React, { useState } from 'react';
import './style.css'

const Home = () => {
  const [inputs, setInputs] = useState({
    expense: '',
    price: '',
  });
  const [dataTable, setdataTable] = useState([]);

  const [editData, seteditData] = useState(false);
  const [editIndex, seteditIndex] = useState('');

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const deletehandler = (index) => {
    const filterData = dataTable.filter((item, i) => i !== index);
    setdataTable(filterData);
  };

  const edithandler = (index) => {
    const tempData = dataTable[index];
    setInputs({
      expense: tempData.expense,
      price: tempData.price,
    });
    seteditData(true);
    seteditIndex(index);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(inputs)
   if(editIndex){
    const tempeditData = dataTable;
    Object.assign(tempeditData[editIndex],inputs)
    // setdataTable(...tempeditData);
    setdataTable(tempeditData);

    seteditData(false)
    
   }else{
    setdataTable([...dataTable, inputs]);
    
  } if (!editIndex) {
    setInputs({
      expense: '',
      price: '',
    });
  }
};

  return (
    <div className='page'>
      <h1>Expense Tracker</h1>
      <div className='container'>
        <form onSubmit={onSubmitHandler}>
          <div>
            <input
              className='input'
              type='text'
              name='expense'
              id='expenseTitle'
              value={inputs.expense}
              onChange={handleChange}
              placeholder='Enter Title'

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

            />
          </div>
          <div>
            <button className='submit' type='submit'>{editData ? 'update' : 'add'}</button>
          </div>
        </form>
      </div>
    
      {dataTable.map((item, index) => (
        <ul className="list" key={item.title}>
          

          <li>{item.expense}</li>
          <li>{item.price}</li>
          <button onClick={() => deletehandler(index)}>Delete</button>
          <button onClick={() => edithandler(index)}>Edit</button>
        </ul>
      ))}
            <div className="display"></div>

      </div>
  );
};

export default Home;
