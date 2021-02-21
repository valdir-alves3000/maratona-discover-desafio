import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../Constants';

const styles = StyleSheet.create({

  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 150,
    backgroundColor: colors.headerColor,    
  },

  title: {
    marginTop: 25,
    marginBottom: 8,
    color: '#fff',
    fontWeight: 'normal',
    fontSize: 25
  },
  
  card: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,

    borderRadius: 3,
    marginBottom: 15,
    marginHorizontal: 5
  },

  cardTitle: {
    color: colors.darkBlue,
    fontSize: 15,
  },

  cardText: {
    fontSize: 22,
    marginTop: 12
  },

  cardTotal: {
    backgroundColor: colors.green
  },

  cardNegative: {
    backgroundColor: colors.lightRed,
  },

  totalText: {
    color: '#fff'
  }

});

export default styles;