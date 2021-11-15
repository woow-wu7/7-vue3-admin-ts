const HomeModule = {
  namespaced: true,
  state() {
    return {
      name: "woow_WU6",
      password: "admin",
      time: +new Date()
    };
  },
  getters: {
    getTime(state: any) {
      return state.time
    },
    getUserMessage(state: any, getters: any) {
      return state.name + ';' + state.password + getters.getTime
    }
  },
  mutations: {
    setMessage(state: any, payload: any) {
      console.log(`77777`, payload)
      state.name = payload.name;
      state.password = payload.password;
    },
  },
  actions: {
    async getUser(context: any, id: number) {
      console.log(id);
      const data = await new Promise((resolve) =>
        setTimeout(() => {
          return (
            resolve({
              name: "111111",
              password: "22222",
            })
          )
        }, 1000)
      );
      console.log(`data`, data)
      context.commit("setMessage", data);
    },
  },
};

export default HomeModule;
