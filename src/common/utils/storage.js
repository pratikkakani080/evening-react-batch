export const storeData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getData = (key) => {
  return (
    JSON.parse(localStorage.getItem(key)) ||
    JSON.parse(sessionStorage.getItem(key))
  );
};

export const clearStorage = () => {
  localStorage.clear();
  sessionStorage.clear();
};
