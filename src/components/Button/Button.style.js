import {StyleSheet} from 'react-native';

import {colors} from '../../common/Style/Colors';
import {fonts} from '../../common/Style/Fonts';

export const style = StyleSheet.create({
  container: {
    height: 40,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.Success,
    //elevation: 3,
  },
  text: {
    fontFamily: fonts.poppinsBold,
    fontSize: 16,
    lineHeight: 20,
    color: 'white',
  },
});
