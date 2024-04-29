// useState and useEffect are hooks.
import React, {useState, useEffect} from 'react';
import api from './api'

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    amount: '',
    category: '' ,
    description: '',
    is_income: false,
    date: ''
  });
  // some functions in our app.js file:
  const fetchTransactions = async ()=> {
    const response = await api.get('/transactions/');
    setTransactions(response.data)
  };
  useEffect(()=> {
    fetchTransactions();
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({
      ...formData,
      [event.target.name]:value,
    });
  }
  // handleFormSubmit goes here

}

export default App;
