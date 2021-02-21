import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import api from '../../services/api';

import Header from '../Header';
import Transactions from '../Transactions';


const Home = () => {
  return (
        <ScrollView style={{ flex: 1, backgroundColor: '#f0f2f5'}}>
      <Header />
      <Transactions />
    </ScrollView>
  );
}

export default Home;
