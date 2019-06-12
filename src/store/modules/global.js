export default {
    namespaced: true,
    state: {
        system: '系统',
        firstLevelMenu: '一级菜单',
        secondLevelMenu: '二级菜单',
        thirdLevelMenu: '三级菜单'
    },
    getters: {
        getBreadCrumb: state => {
            // let breadCrumb = '';
            // if(!state.system){
            //     breadCrumb = breadCrumb + state.system;
            //     if(!state.firstLevelMenu){
            //         breadCrumb = breadCrumb + '>' + state.firstLevelMenu;
            //         if(!state.secondLevelMenu){
            //             breadCrumb = breadCrumb + '>' + state.secondLevelMenu;
            //             if(!state.thirdLevelMenu){
            //                 breadCrumb = breadCrumb + '>' + state.thirdLevelMenu;
            //             }
            //         }
            //     }
            // }
            // return breadCrumb;
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
        }
    }
}