import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  STORAGE_KEY_IS_FIRST_LAUNCH,
  STORAGE_KEY_SYMPTOMS,
  STORAGE_KEY_SUPPORTED,
  STORAGE_KEY_CUSTOM_SYMPTOMS,
} from '../common/constants';

const getSymptoms = async () => {
  const symptoms = await AsyncStorage.getItem(STORAGE_KEY_SYMPTOMS);
  if (symptoms) {
    return JSON.parse(symptoms);
  }
};

const setSymptoms = async (symp) => {
  await AsyncStorage.setItem(STORAGE_KEY_SYMPTOMS, JSON.stringify(symp));
};

const getIsFirstAppLaunch = async () =>
  await AsyncStorage.getItem(STORAGE_KEY_IS_FIRST_LAUNCH);

const setIsFirstAppLaunch = async (isAppFirstLaunch) => {
  await AsyncStorage.setItem(
    STORAGE_KEY_IS_FIRST_LAUNCH,
    JSON.stringify(isAppFirstLaunch),
  );
};

const getSupported = async () => {
  const supported = await AsyncStorage.getItem(STORAGE_KEY_SUPPORTED);
  if (supported) {
    return JSON.parse(supported);
  }
};

const setSupported = async (supported) =>
  await AsyncStorage.setItem(STORAGE_KEY_SUPPORTED, JSON.stringify(supported));

const getCustomSymptoms = async () => {
  const customSymptoms = await AsyncStorage.getItem(
    STORAGE_KEY_CUSTOM_SYMPTOMS,
  );
  return JSON.parse(customSymptoms) || [];
};

const addCustomSymptoms = async (sym) => {
  const customSymptoms = await getCustomSymptoms();
  customSymptoms.push(sym);
  await AsyncStorage.setItem(
    STORAGE_KEY_CUSTOM_SYMPTOMS,
    JSON.stringify(customSymptoms),
  );
};

export default {
  getSymptoms,
  setSymptoms,
  getIsFirstAppLaunch,
  setIsFirstAppLaunch,
  getSupported,
  setSupported,
  getCustomSymptoms,
  addCustomSymptoms,
};
