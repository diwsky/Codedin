import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 50,
  },
  imageSkillContainer: {},
  mainContainer: {
    flex: 1,
    width: '80%',
    height: 400,
    marginTop: '10%',
    marginBottom: '20%',
    padding: 20,
    backgroundColor: '#F3F3F3',
    borderRadius: 25,
  },
  skillStyle: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 12,
  },
  input: {
    marginTop: 2,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    fontSize: 14,
  },
});

export {styles};
