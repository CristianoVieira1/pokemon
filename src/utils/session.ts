import AsyncStorage from '@react-native-async-storage/async-storage';

export const getCurrentSession = async (): Promise<any | null> => {
  const storage = await AsyncStorage.getItem("@pokemon-storage-key")
  return storage ? JSON.parse(storage) : null;
}

export const saveCurrentSession = (params: any): Promise<void> => {
  return AsyncStorage.setItem("@pokemon-storage-key", JSON.stringify(params))
}

export const clearCurrentSession = (): Promise<void> => {
  return AsyncStorage.clear();
}
