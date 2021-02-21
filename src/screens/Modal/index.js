import React, { useState } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { Link, useNavigation} from '@react-navigation/native';

import styles from './styles';
import api from '../../services/api';

import Checkbox from 'expo-checkbox';

const Modal = () => {
  const navigation = useNavigation();

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [isChecked, setChecked] = useState(false);

  const data = {
    description,
    amount,
    date,
    expense: isChecked
  };

  function handleGoHome() {
    navigation.navigate('Home', data);    
  }

  async function handleAddTransactions() {    
    
    if (!description || !amount || !date) {
      Alert.alert("Preencha todos os dados para continuar!!!")
    } else {
      
      try {

        const response = await api.post('transactions', data);
      } catch (error) {
        Alert.alert("Erro no cadastro! Tente novamente.");
      }
      
      handleGoHome();
    }
  }

  return (
    <View style={styles.modalOverlay}>
      <View style={styles.modal}>
        <Text style={styles.title}>Nova Transação</Text>

        <TextInput
          style={styles.input}
          onChangeText={text => setDescription(text)}
          value={description}
          placeholder="Descrição"
        />

        <TextInput
          style={styles.input}
          onChangeText={text => setAmount(text)}
          value={amount}
          
          placeholder="0,00"

        />

        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />
          <Text style={styles.paragraph}>Marque em caso de despesas</Text>
        </View>

        <TextInput
          style={styles.input}
          onChangeText={text => setDate(text)}
          value={date}
          placeholder="01/01/2021"
        />

        <View style={styles.btnGroup}>
          <RectButton
            onPress={() => { }}
            style={[styles.btn, styles.btnCancel]}>
            <Link
              to="/Home"
            >
              <Text style={styles.btnText}>Cancelar</Text>
            </Link>
          </RectButton>

          <RectButton
            style={styles.btn}
            onPress={handleAddTransactions}>
            <Text style={styles.btnText}>Salvar</Text>
          </RectButton>
        </View>

      </View>
    </View>
  );
}

export default Modal;
