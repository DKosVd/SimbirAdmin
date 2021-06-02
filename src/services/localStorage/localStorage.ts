export const localStorage = {
  setItem(name: string, token: string) {
    return window.localStorage.setItem(name, token);
  },
  getItem(name: string) {
    return window.localStorage.getItem(name);
  },
  deleteItem(name: string) {
    window.localStorage.removeItem(name);
  },
  deleteAll() {
    window.localStorage.clear();
  },
};
