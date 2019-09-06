export default {
  state: {
    showHeaderNotice: false
  },
  mutations: {
    setNotice(state, token) {
      state.token = token;
      setToken(token);
    }
  },
  actions: {}
};
