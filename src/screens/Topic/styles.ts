import {Colors} from '@assets/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
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
});
