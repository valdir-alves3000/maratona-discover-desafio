import React, { useEffect, useState } from 'react';

import { Alert, View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from '@react-navigation/native';

import { RectButton } from 'react-native-gesture-handler';

import { Ionicons } from '@expo/vector-icons';

import api from '../../services/api';

import styles from './styles';

const Transactions = (props) => {

  const Item = ({ description, amount, date, id, expense }) => {

    async function remove() {
      try {

        const response = await api.delete('transactions', {
          headers: {
            Authorization: id
          }
        })

        setTransactionsList(transactionsList.filter(transactions => transactions.id !== id));

      } catch (error) {
        Alert.alert("Erro ao deletar. Tente Novamente.")
      }
    }

    return (
      <View style={[styles.titleList, { opacity: 0.7 }]}>
        <Text style={styles.listText} >{description}</Text>
        <Text
          style={
            [
              styles.listText,
              expense === "1" ? styles.expense : styles.income
            ]}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(amount)}

        </Text>
        <Text style={styles.listText}>{date}</Text>

        <RectButton
          onPress={remove}
        >

          <Ionicons name="remove-circle-outline" size={25} color="#e92929" />
        </RectButton>

      </View >
    );
  }

  const renderItem = ({ item }) => (

    <Item
      description={item.description}
      date={item.date}
      amount={item.amount}
      expense={item.expense}
      id={item.id}
    />
  );

  return (
    <View style={{ paddingBottom: 30 }}>
      <Link to='/Modal' style={styles.new}>

        <Text style={styles.newText}>+ Nova Transação</Text>

      </Link>

      <ScrollView horizontal>

        <View>
          <View style={styles.titleList}>
            <Text style={styles.listText} >Descrição</Text>
            <Text style={styles.listText} >Valor</Text>
            <Text style={styles.listText} >Data</Text>
          </View>

          <FlatList
            data={props}
            keyExtractor={transaction => String(transaction.id)}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>

    </View>
  );
}

export default Transactions;
