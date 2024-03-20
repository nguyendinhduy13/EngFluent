import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 26,
    width: windowWidth - 124,
    textAlign: 'center',
  },
  bgicon: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 42,
    width: 42,
  },
});
