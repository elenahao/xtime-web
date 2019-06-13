export default {
    namespaced: true,
    state: {
        system: '',
        firstLevelMenu: '',
        secondLevelMenu: '',
        thirdLevelMenu: '',
        systemCode: '',
        firstMenuCode: '',
        secondMenuCode: '',
        thirdMenuCode: ''
    },
    getters: {
        getSysAndFirst: state => {
            return `${state.systemCode}>${state.firstMenuCode}`
        }
    },
    mutations: {
        changeSysAndFirst: (state, payload) => {
            state.system = payload.system
            state.firstLevelMenu = payload.first
            state.systemCode = payload.systemCode
            state.firstMenuCode = payload.firstMenuCode
        },
        changeSecondLevelMenu: (state, secondLevelMenu) => {
            state.secondLevelMenu = secondLevelMenu
        },
        changeThirdLevelMenu: (state, thirdLevelMenu) => {
            state.thirdLevelMenu = thirdLevelMenu
        }
    }
}