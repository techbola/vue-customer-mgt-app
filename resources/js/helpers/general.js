export function initialize(store, router) {

    router.beforeEach((to, from, next) => {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        const currentUser = store.state.currentUser;

        if(requiresAuth && !currentUser) {
            next('/login');
        } else if(to.path === '/login' && currentUser) {
            next('/');
        } else {
            next();
        }
    });

    // grabs all responses that has errors on them and
    // checks if the status of the error is 401 (unauthorized request)
    // maybe the token expired or the user has logged out
    axios.interceptors.response.use(null, (error) => {

        if (error.response.status === 401) {
            store.commit('logout');
            router.push('/login')
        }

        // this returns the errors aside 401
        return Promise.reject(error);

    });

//    setting up the header for all axios api calls
//     axios.defaults.headers.common["Authorization"] = `Bearer ${store.getters.currentUser.token}`
}
