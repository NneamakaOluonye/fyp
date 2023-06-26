import { ref } from "vue";

export default function useLocalStorage() {
  const localStorageName = ref("lms")

  const addDataToLocalStorage = (datas = {}) => {
    const values = Object.values(datas)
    const depositLocalStorage = JSON.parse(localStorage.getItem(localStorageName.value));
    const data_objects = {};

    Object.keys(datas).forEach((data, index) => {
      data_objects[data] = values[index];
    })

    localStorage.setItem(localStorageName.value, JSON.stringify({
      ...depositLocalStorage,
      ...data_objects
    }));
  }

  const removeDataFromLocalStorage = (datas = []) => {
    const depositLocalStorage = JSON.parse(localStorage.getItem(localStorageName.value));
    const depositLocalStorageKeys = Object.keys(depositLocalStorage);

    datas.forEach(data => {
      if (depositLocalStorageKeys.includes(data)) {
        delete depositLocalStorage[data]
        localStorage.setItem(localStorageName.value, JSON.stringify(depositLocalStorage));
      }
    })
  }

  const checkDataExistInLocalStorage = (data) => {
    if (localStorage.getItem(localStorageName.value)) {
      const depositLocalStorage = JSON.parse(localStorage.getItem(localStorageName.value));
      const depositLocalStorageKeys = Object.keys(depositLocalStorage);

      return depositLocalStorageKeys.includes(data)
    }

    return false;
  }

  // const updateDataInLocalStorage = (folder, key, value) => {
  //     if (localStorage.getItem(localStorageName.value)) {
  //         const depositLocalStorage = JSON.parse(localStorage.getItem(localStorageName.value));
  //         const depositLocalStorageKeys = Object.keys(depositLocalStorage);
  //
  //         if (depositLocalStorageKeys.includes(folder)) {
  //             const fileStorage = getDataFromLocalStorage(folder)
  //             const fileStorageKeys = Object.keys(fileStorage);
  //
  //             fileStorageKeys.forEach(data => {
  //                 if (data === key) {
  //                     const newData = {}
  //                     newData[data] = value
  //
  //                     const finalCopy = {}
  //                     finalCopy[folder] = newData
  //
  //                     console.log(JSON.stringify(newData))
  //                     localStorage.setItem(localStorageName.value, JSON.stringify(finalCopy))
  //                 }
  //             })
  //         }
  //     }
  //
  //     return false;
  // }

  const getDataFromLocalStorage = (data) => {
    if (localStorage.getItem(localStorageName.value)) {
      const depositLocalStorage = JSON.parse(localStorage.getItem(localStorageName.value));
      return depositLocalStorage[data];
    } else {
      return null;
    }
  }

  const checkLocalStorageExist = () => {
    return localStorage.getItem(localStorageName.value);
  }

  const removeLocalStorage = () => {
    return localStorage.removeItem(localStorageName.value);
  }

  return {
    addDataToLocalStorage,
    removeDataFromLocalStorage,
    checkDataExistInLocalStorage,
    getDataFromLocalStorage,
    checkLocalStorageExist,
    removeLocalStorage
  }
}
