
const AuthModule = {
    namespaced: true,
    state() {
        return {
            userData: [],
            token: null
        }
    },

    getters: {
        getUserToken: state => state.token,
        getUserData: state => state.userData,

        auth(state) {
            if (state.token) {
                return true
            } else {
                return false
            }
        }
    },
    mutations: {


    },
    actions: {

        setUserInfo: ({ state }, payload) => {
            state.token = payload[0], state.userData = payload[1].user,
                localStorage.setItem('auth', payload[1].user.email);

        },



        removeToken: ({ state }) => {
            state.token = null,
                localStorage.setItem('auth', 'false');
        }
    }

}
export default AuthModule