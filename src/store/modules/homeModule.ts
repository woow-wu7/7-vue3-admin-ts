const HomeModule = {
  namespaced: true,
  state() {
    return {
      name: "woow_WU6",
      password: "admin",
    };
  },
  mutations: {
    setMessage(state: any, data: any) {
      console.log(`77777`, data)
      state.name = data.name;
      state.password = data.password;
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
