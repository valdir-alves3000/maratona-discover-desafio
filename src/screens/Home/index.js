import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import api from '../../services/api';

import Header from '../Header';
import Transactions from '../Transactions';


const Home = (props) => {
  
  const [transactionsList, setTransactionsList] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  async function handleGetTransactions() {
    try {
      const response = await api.get('transactions');
      if (response) {
        setTransactionsList(response.data);
        handleExpense();
        handleIncomes();
      }

    } catch (error) {
    }
  }

  function handleIncomes() {
    setIncome(0);
   transactionsList.forEach(transaction => {
     if(transaction.expense ==="0") {
      setIncome(prevent => prevent += Number(transaction.amount))
       }
    });   
  }

  function handleExpense() {
    setExpense(0);
   transactionsList.forEach(transaction => { 
     if(transaction.expense ==="1") {
    setExpense(prevent => prevent += Number(transaction.amount))
     }
  });      
  }

  useEffect(() => {
          
    handleGetTransactions();
    
  }, [transactionsList]);
  
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f0f2f5'}}>
      <Header expense={expense} income={income} total={income -expense}/>
      <Transactions
       props={transactionsList} />
    </ScrollView>
  );
}

export default Home;