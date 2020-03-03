import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  display:{
    flex: 1,
    backgroundColor: '#efefef',
    fontSize: 80,
    textAlign: 'right',
    paddingTop: 30,
    paddingRight: 10
  },
  result:{
    flex: 0.4,
    backgroundColor: '#efefef',
    fontSize: 40,
    textAlign: 'right',
    paddingTop: 10,
    paddingRight: 10
  },
  buttons:{
    flex: 5,
    flexDirection: 'row'
  },
  col1: {
    flex: 3,
    backgroundColor: '#000'
  },
  line:{
    flex: 1,
    flexDirection: 'row'
  },
  btn:{
    flex: 1,
    justifyContent: 'center'
  },
  btnText:{
    textAlign: 'center',
    fontSize: 50,
    color: '#fff'
  },
  col2: {
    flex: 1,
    backgroundColor: '#0b0b0b'
  }
});


export default styles