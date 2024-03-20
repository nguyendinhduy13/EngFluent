import {Colors} from '@assets/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  textHeader: {
    color: Colors.black3,
    fontSize: 19,
    fontWeight: '700',
  },

  topicImage: {
    alignSelf: 'center',
  },

  wrapDescription: {
    marginHorizontal: 20,
  },

  title: {
    marginTop: 10,
    color: Colors.black3,
    fontSize: 16,
    fontWeight: '700',
  },

  description: {
    marginTop: 7,
    color: Colors.black2,
    fontSize: 16,
    fontWeight: '400',
  },

  seeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.orange4,
  },

  txtBtn: {
    color: Colors.orange4,
    fontSize: 12,
    fontWeight: '400',
  },

  wrapIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
  },

  iconStyle: {
    color: Colors.orange4,
  },
});
