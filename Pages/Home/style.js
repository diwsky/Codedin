import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  containerWelcome: {
    flex: 1.5,
    paddingHorizontal: 40,
  },
  containerMain: {
    flex: 10,

    padding: 24,
  },
  containerSkill: {
    borderRadius: 25,
    backgroundColor: '#dfe5e3',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  boxSkill: {
    justifyContent: 'space-around',
    marginLeft: 10,
    height: 90,
    flex: 1,
    padding: 5,
  },
  boxSkillRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 1,
  },
});



export {styles};
