export default {
    namespaced: true,
    state: {
        system: '',
        firstLevelMenu: '',
        secondLevelMenu: '',
        thirdLevelMenu: '',
        sidebar: ''
    },
    getters: {
        getBreadcrumb: state => {
            return `${state.system} > ${state.firstLevelMenu} > ${state.secondLevelMenu} > ${state.thirdLevelMenu}`
        }
    },
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
        },
        changeSidebar: (state, sidebar) => {
            state.sidebar = sidebar
        }
    }
}