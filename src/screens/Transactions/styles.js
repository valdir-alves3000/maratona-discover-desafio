import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../Constants';

const styles = StyleSheet.create({
  new: {
    marginHorizontal: 25,
    marginVertical: 18
  },

  newText: {
    color: colors.green,    
  },

  titleList: {
    flexDirection: 'row',
    backgroundColor: '#fff',

    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 3,
    marginTop: 20,
    marginHorizontal: 5
  },

  listText: {    
    color: colors.darkBlue,
    width: 150,       
  },

  expense: {
    color: colors.red
  },

  income: {
    color: colors.green
  },

  icon: {
    width: 30,
    height: 30,
    color: colors.red,

    borderWidth: 2,
    borderColor: colors.red,
    borderRadius: 15,

    textAlign: 'center',
    fontWeight: '700'
  }
  
});

export default styles;
