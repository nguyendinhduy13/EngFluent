import {Colors} from '@assets/colors';
import {SCREEN_WIDTH} from '@constants/index';
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

  wrapItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    padding: 12,
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
  },

  wrapSentence: {
    width: SCREEN_WIDTH - 109,
  },

  btnAudio: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 4,
  },
  imageAudio: {
    width: 15.5,
    height: 13,
  },

  textSentence: {
    color: Colors.black3,
    fontSize: 16,
    fontWeight: '700',
  },

  textVietnamese: {
    marginTop: 5,
    color: Colors.black2,
    fontSize: 12,
    fontWeight: '400',
  },

  wrapOption: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapButton: {
    flexDirection: 'row',
    marginHorizontal: 20,
    width: SCREEN_WIDTH - 40,
    marginTop: 20,
    justifyContent: 'space-between',
  },

  textQuestion: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.black3,
  },

  learnSampleButton: {
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: Colors.white,
    height: 56,
    width: SCREEN_WIDTH / 2 - 30,
    borderColor: Colors.gray2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  chatAIButton: {
    borderRadius: 15,
    backgroundColor: Colors.orange5,
    height: 56,
    width: SCREEN_WIDTH / 2 - 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  learnSampleText: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.black2,
  },
  chatAItext: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.white,
  },
});
