import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../common/Style/Style';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  item: {
    marginBottom: 10,
  },
  feedback: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%',
  },
  feedback_text: {
    fontFamily: fonts.poppinsLight,
    fontSize: 14,
    color: colors.Gray400,
  },
});
