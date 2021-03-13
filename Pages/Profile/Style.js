import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  content: {
    marginTop: 20,

    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    paddingBottom: 20,
  },
  profPic: {
    marginVertical: 30,
  },

  fontStyle: {
    fontSize: 18,
  },
  porto: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    height: '25%',
    borderRadius: 20,
    borderColor: 'black',
    padding: 10,
    width: '80%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  body: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export {styles};
