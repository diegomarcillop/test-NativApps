import {StyleSheet} from 'react-native';

import {colors, fonts} from '../../common/Style/Style';

export const style = StyleSheet.create({
  container: {
    height: 100,
    borderWidth: 1,
    borderColor: colors.Gray300,
    borderRadius: 5,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '30%',
    height: '100%',
  },
  content: {
    width: '70%',
    paddingHorizontal: 10,
  },
  label: {
    fontFamily: fonts.poppinsBold,
    fontSize: 10,
    color: colors.Black600,
  },
  description: {
    fontFamily: fonts.poppinsLight,
    fontSize: 12,
    color: colors.Black600,
  },
});
