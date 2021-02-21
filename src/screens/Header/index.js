import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = ({expense, income, total}) => {
  
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
          }).format(total)
        }
          </Text>
      </View>

      </View>

    </View>
  );
}

export default Header;
