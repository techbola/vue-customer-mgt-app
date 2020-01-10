import {getLocalUser} from "./helpers/auth";

const user = getLocalUser();

export default {
    state: {
        welcomeMessage: 'Welcome to my vue app',
        currentUser: user,
        isLoggedIn: !! user,
        loading: false,
        auth_error: null,
        customers: []
    },
    getters: {
        isLoading(state) {
            return state.loading;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        currentUser(state) {
            return state.currentUser;
        },
        authError(state) {
            return state.auth_error;
        },
        customers(state) {
            return state.customers;
        },
        welcome(state) {
            return state.welcomeMessage;
        }
    },
    mutations: {
        login(state) {
            state.loading = true;
            state.auth_error = null;
        },
        loginSuccess(state, payload) {
            state.auth_error = null;
            state.isLoggedIn = true;
            state.loading = false;
            state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});

            localStorage.setItem('user', JSON.stringify(state.currentUser));
        },
        loginFailed(state, payload) {
            state.auth_error = payload.error;
            state.loading = false;
        },
        logout(state){
            localStorage.removeItem('user');
            state.isLoggedIn = false;
            state.currentUser = null;
        }
    },
    actions: {
        login(context) {
            context.commit("login");
        }
    }
}
