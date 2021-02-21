import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../Constants/index';
const maxHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  modalOverlay: {
    height: maxHeight,

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    
  },

  modal: {
    backgroundColor: '#f2f5f0',
    padding: 25,
    borderRadius: 7,
    width: 400
  },

  title: {
    color: colors.darkBlue,
    fontSize: 25,
    marginBottom: 20,
    
  },

  input: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 7
  },

  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  btn: {
    width: 150,
    height: 50,

    justifyContent: 'center',
    alignItems: 'center',
    
    backgroundColor: colors.green,
    opacity: 0.5,
    borderRadius: 5,
  },

  btnCancel: {
    backgroundColor: colors.red,  
  },

  btnText: {    
    color: '#fff',
    fontWeight: '700'
  },

  btnCancelText: {
    color: colors.red,   
  },

  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },

});

export default styles;