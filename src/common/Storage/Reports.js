import AsyncStorage from '@react-native-async-storage/async-storage';

const key = '@reports_storage';

export const save = async info => {
  try {
    let data = await getAll();
    if (data) {
      data = [info, ...data];
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } else {
      await AsyncStorage.setItem(key, JSON.stringify([info]));
    }
    return {status: true};
  } catch (error) {
    return {error: 'Error SaveReport'};
  }
};

export const removeAll = async () => {
  return await AsyncStorage.removeItem(key);
};

export const getAll = async () => {
  let info = await AsyncStorage.getItem(key);
  return JSON.parse(info);
};
