import {Colors} from '@assets/colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@constants/index';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  backgroundHeader: {
    height: SCREEN_HEIGHT * 0.15,
    width: '100%',
    justifyContent: 'center',
  },

  wrapHeader: {
    marginTop: 15,
    bottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },

  wrapTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBack: {
    color: Colors.white,
  },

  wrapTextTitle: {
    marginLeft: 10,
  },

  txtTitleLesson: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.white,
  },

  txtTitleAI: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.white,
  },

  wrapHistory: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30 / 2,
    width: 30,
    height: 30,
    backgroundColor: Colors.white30PC,
  },

  historyIcon: {
    width: 17.5,
    height: 15,
  },

  imageLesson: {
    width: 55,
    height: 55,
  },

  wrapSpeakAI: {
    position: 'absolute',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    bottom: 0,
    width: '100%',
    height: SCREEN_HEIGHT * 0.85,
    backgroundColor: 'white',
    padding: 20,
  },

  wrapConversation1: {
    height: SCREEN_HEIGHT * 0.75 - 80,
  },

  wrapConversation2: {
    height: SCREEN_HEIGHT * 0.4,
  },

  wrapConversation3: {
    height: SCREEN_HEIGHT * 0.5,
  },

  wrapSuggestions: {
    alignItems: 'center',
    height: SCREEN_HEIGHT * 0.35 - 80,
  },

  wrapItem: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 7,
    marginTop: 10,
    width: SCREEN_WIDTH - 40,
    borderColor: Colors.gray2,
  },

  scrollResult: {
    marginTop: 5,
    maxHeight: SCREEN_HEIGHT * 0.25 - 35,
  },

  wrapResult: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtAsk: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 12,
    fontWeight: '400',
    color: Colors.black2,
  },

  btnDelete: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25 / 2,
    height: 25,
    width: 25,
    borderWidth: 0.05,
    shadowColor: '#BEBAB3',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 15,
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },

  deleteIcon: {
    width: 11,
    height: 12,
  },

  textResult: {
    fontSize: 16,
    fontWeight: '700',
    paddingHorizontal: 10,
    color: Colors.black3,
  },

  textTitleSuggestions: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 10,
    color: Colors.black2,
  },

  textSuggestions: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black3,
  },

  wrapchat: {
    padding: 10,
  },

  AIchat: {
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 20,
    backgroundColor: Colors.blue1,
  },

  personchat: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: Colors.gray3,
  },

  AIavatar: {
    width: 36,
    height: 36,
    position: 'absolute',
    bottom: -5,
    left: -5,
    borderRadius: 36 / 2,
  },

  personavatar: {
    width: 36,
    height: 36,
    position: 'absolute',
    bottom: -5,
    right: -5,
    borderRadius: 36 / 2,
  },

  contentChatPerson: {
    fontSize: 15,
    width: SCREEN_WIDTH - 100,
    fontWeight: '400',
    color: Colors.black3,
  },

  contentChatAI: {
    fontSize: 15,
    width: SCREEN_WIDTH - 80,
    fontWeight: '400',
    color: Colors.black3,
  },

  loadingResult: {
    fontSize: 16,
    fontWeight: '400',
    left: 15,
    fontStyle: 'italic',
    color: Colors.gray2,
  },

  translateChatAI: {
    fontSize: 13,
    width: SCREEN_WIDTH - 80,
    fontWeight: '400',
    color: Colors.black2,
  },

  voiceIcon: {
    width: 75,
    height: 75,
  },

  btnVoice: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 15,
  },

  waveForm: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 1,
    width: SCREEN_WIDTH,
    height: 100,
  },

  textWave: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: '400',
    color: Colors.black2,
  },

  wrapIcon: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 108,
    alignSelf: 'flex-end',
  },

  line: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.gray4,
    marginVertical: 10,
  },

  wrapSendIcon: {
    width: 51,
    height: 51,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 15,
    alignSelf: 'center',
    borderRadius: 51 / 2,
    backgroundColor: Colors.orange5,
  },

  sendIcon: {
    height: 20,
    width: 20,
  },
});
