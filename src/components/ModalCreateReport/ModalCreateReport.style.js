import {StyleSheet} from 'react-native';

import {fonts, colors} from '../../common/Style/Style';

export const style = StyleSheet.create({
  container: {
    width: '90%',
    //flex: 0.8,
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    opacity: 0.9,
  },
  btn_close: {
    width: 30,
    height: 30,
    backgroundColor: colors.Gray400,
    borderRadius: 100,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginBottom: 10,
  },
  text_btn_blose: {
    fontWeight: 'bold',
    color: 'white',
  },
  actions: {
    //height: '20%',
  },
  input: {
    fontFamily: fonts.paragraph,
    fontSize: 14,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: colors.Gray300,
    height: 100,
    borderRadius: 5,
    marginBottom: 10,
  },
  label: {
    fontFamily: fonts.poppinsBold,
    fontSize: 14,
    color: colors.Black800,
    marginBottom: 5,
  },
  title: {
    fontFamily: fonts.poppinsBold,
    fontSize: 18,
    color: colors.Black800,
    textAlign: 'center',
  },
  text_small: {
    fontFamily: fonts.poppinsLight,
    fontSize: 12,
    textDecorationLine: 'underline',
    color: colors.Gray400,
  },
  required: {
    color: colors.Danger,
  },
  btn_upload: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: colors.Gray300,
    marginBottom: 10,
    borderStyle: 'dotted',
  },
  upload_btn: {
    width: 35,
    height: 35,
    opacity: 0.8,
  },
  upload_image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
});
