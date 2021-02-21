import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';

import api from '../../services/api';

import styles from './styles';

const Header = () => {
  
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactionsList, setTransactionsList] = useState([]); 

  async function handleGetData() {
    try {
      
      const transactions = await api.get('transactions');      
      const resIncome = await api.get('income');
      const resExpense = await api.get('expense');

      setTransactionsList(transactions.data);
      setIncome(resIncome.data);
      setExpense(resExpense.data);

    } catch (error) {
      Alert.alert('Erro ao carregar. Tente Novamente.');
    }
  }
  
  useEffect(() => {
    handleGetData();
  }, [transactionsList]);  
    
  return (
    <View>
      <View style={styles.header}>
      <Text style={styles.title}>Controle Financeiro</Text>
      </View>

      <View style={{ marginTop: -85 }}>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Entradas</Text>
        <Text style={styles.cardText}>
        {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(income)}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Saídas</Text>
        <Text style={styles.cardText}>
        {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(expense)}
        </Text>
      </View>

      <View style={[styles.card,(income - expense > 0 ? styles.cardTotal : styles.cardNegative)]}>
        <Text style={[styles.cardTitle, styles.totalText]}>Total</Text>
        <Text style={[styles.cardText, styles.totalText]}>
        {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(income - expense)
        }
          </Text>
      </View>

      </View>

    </View>
  );
}

export default Header;