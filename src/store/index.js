import { createStore } from 'vuex'
// A模块
const moduleA = {
  state: {
    username: 'moduleA'
  },
  getters: {
    newName (state) {
      return state.username + 'AAA'
    }
  },
  mutations: {
    updateName (state) {
      state.username = 'moduleAAAAAA'
    }
  }
}
// B模块
const moduleB = {
  namespaced: true,
  state: {
    username: 'moduleB'
  },
  getters: {
    newName (state) {
      return state.username + 'BBB'
    }
  },
  mutations: {
    updateName (state) {
      state.username = 'moduleAAAAAA'
    }
  },
  actions: {
    updateName (ctx) {
      setTimeout(() => {
        ctx.commit('updateName')
      }, 300)
    }
  }
}

export default createStore({
  modules: {
    moduleA,
    moduleB
  }
})
// export default createStore({
//   state: {
//     username: '张三'
//   },
//   getters: {
//     newName (state) {
//       return state.username + '李四'
//     }
//   },
//   mutations: {
//     updateName (state) {
//       state.username = '李四'
//     }
//   },
//   actions: {
//     updateName (ctx) {
//       // 发请求
//       setTimeout(() => {
//         ctx.commit('updateName')
//       }, 500)
//     }
//   },
//   modules: {
//   }
// })
