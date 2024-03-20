import {SPEAK_WITH_AI} from '@assets/index';
import {ImageSourcePropType} from 'react-native';

export interface DataAction {
  id: number;
  key: string;
  imageinactive: ImageSourcePropType;
  imageactive: ImageSourcePropType;
  width: number;
  height: number;
}

export const dataAction: DataAction[] = [
  {
    id: 1,
    key: 'listen',
    imageinactive: SPEAK_WITH_AI.LISTEN_UNACTIVE,
    imageactive: SPEAK_WITH_AI.LISTEN_ACTIVE,
    width: 20,
    height: 16,
  },
  {
    id: 2,
    key: 'listenSlow',
    imageinactive: SPEAK_WITH_AI.LISTENSLOW_UNACTIVE,
    imageactive: SPEAK_WITH_AI.LISTENSLOW_ACTIVE,
    width: 16,
    height: 16,
  },
  {
    id: 3,
    key: 'translate',
    imageinactive: SPEAK_WITH_AI.TRANSLATE_UNACTIVE,
    imageactive: SPEAK_WITH_AI.TRANSLATE_ACTIVE,
    width: 16,
    height: 16,
  },
  {
    id: 4,
    key: 'suggest',
    imageinactive: SPEAK_WITH_AI.SUGGEST_UNACTIVE,
    imageactive: SPEAK_WITH_AI.SUGGEST_ACTIVE,
    width: 16,
    height: 16,
  },
];
