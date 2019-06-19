export default {
    namespaced: true,
    state: {
        system: '',
        firstLevelMenu: '',
        secondLevelMenu: '',
        thirdLevelMenu: '',
        systemCode: '',
        menuCode: '',
        firstMenuCode: '',
        secondMenuCode: '',
        thirdMenuCode: '',
        sidebarList: '',
        userCode:'',
        username:'',
        userRoleCode:'',
        userRoleName:'',
        isLogin: false
    },
    getters: {
        getSysAndFirst: state => {
            return `${state.systemCode}/${state.firstMenuCode}`
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
        },
        changeSysCode: (state, systemCode) => {
            state.systemCode = systemCode
        },
        changeMenuCode: (state, menuCode) => {
            state.menuCode = menuCode
        },
        changeSidebarList: (state, sidebarList) => {
            state.sidebarList = sidebarList
        },
        changeUserInfo: (state, userInfo) => {
            state.userCode = userInfo.userCode
            state.username = userInfo.username
            state.userRoleCode = userInfo.userRoleCode
            state.userRoleName = userInfo.userRoleName
            state.isLogin = userInfo.isLogin
        }
    }
}