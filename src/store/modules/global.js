export default {
    namespaced: true,
    state: {
        system: '',
        firstLevelMenu: '',
        secondLevelMenu: '',
        thirdLevelMenu: '',
    },
    getters: {},
    mutations: {
        changeSysAndFirst: (state, payload) => {
            state.system = payload.system
            state.firstLevelMenu = payload.first
        },
        changeSecondLevelMenu: (state, secondLevelMenu) => {
            state.secondLevelMenu = secondLevelMenu
        },
        changeThirdLevelMenu: (state, thirdLevelMenu) => {
            state.thirdLevelMenu = thirdLevelMenu
        }
    }
}