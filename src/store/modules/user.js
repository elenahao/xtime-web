export default {
    namespaced: true,
    state: {
        userId: 100,
        userName: "derek"
    },
    getters: {
        moreUserId: state => {
            return state.userId + 10
        },
        upUserName: state => {
            return state.userName.toUpperCase()
        }
    },
    mutations: {
        addUserId: (state) => {

                state.userId += 1
        },
        addUserName: (state) => {
            state.userName += "!"
        }
    },
    actions: {
        addAction: ({commit}) => {
            commit('addUserName')
        }
    }
}