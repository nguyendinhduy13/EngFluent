import {Colors} from '@assets/colors';
import {SCREEN_WIDTH} from '@constants/index';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  dropDown: {
    borderRadius: 5,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },

  textheader1: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black1,
  },

  textheader2: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.black1,
  },

  dropdown3BtnStyle: {
    width: 160,
    height: 35,
    alignSelf: 'flex-end',
    backgroundColor: Colors.orange3,
    borderWidth: 2,
    borderColor: Colors.orange2,
    borderRadius: 30,
    bottom: 7,
  },

  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dropdown3BtnTxt: {
    color: Colors.orange1,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 14,
  },

  dropdown3RowStyle: {
    backgroundColor: Colors.white,
    height: 30,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 5,
    backgroundColor: Colors.orange3,
  },

  dropdown3RowTxt: {
    color: Colors.black1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    marginHorizontal: 12,
  },

  iconFire: {
    width: 20,
    height: 20,
  },

  listTopic: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
    height: 585,
  },
  wrapAllTopic: {
    marginHorizontal: 20,
    marginTop: 100,
  },

  wrapTopic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  topicImage: {
    width: 55,
    height: 55,
  },

  wrapContentTopic: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  wrapDescription: {
    marginLeft: 10,
    width: SCREEN_WIDTH - 205,
  },

  topicTitle: {
    color: Colors.black3,
    fontSize: 16,
    fontWeight: '700',
  },

  topicDescription: {
    color: Colors.black2,
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
    elevation: 2,
  },

  iconStyle: {
    color: Colors.orange4,
  },
});
