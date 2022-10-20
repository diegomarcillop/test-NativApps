import {StyleSheet} from 'react-native';

import {colors, fonts} from '../../common/Style/Style';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    padding: 10,
  },
  title: {
    fontFamily: fonts.poppinsBold,
    fontSize: 16,
    color: colors.Black700,
    textAlign: 'center',
  },
  title_section: {
    fontFamily: fonts.poppinsBold,
    fontSize: 16,
    color: colors.Black700,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: colors.Gray200,
    marginVertical: 10,
  },
  list: {
    height: '80%',
    overflow: 'scroll',
  },
  actions: {
    height: '10%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
