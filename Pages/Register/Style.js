import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
    marginTop: '20%',
  },
  mainColumn: {
    flex: 1,
    width: '80%',
    height: 400,
    marginTop: '10%',
    marginBottom: '20%',
    padding: 20,
    backgroundColor: '#F3F3F3',
    borderRadius: 25,
  },
  loginText: {
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailText: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 12,
  },
  boxLogin: {
    marginVertical: 10,
    flex: 1,
    justifyContent: 'space-around',
  },
  input: {
    marginTop: 2,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    fontSize: 14,
  },
  buttonSignin: {
    backgroundColor: '#FFA0A0',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  registerArea: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  registerText: {
    color: 'red',
    fontSize: 12,
  },
});

export {styles};
