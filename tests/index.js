const store = new Vuex.Store({
    state:{
        count : 0
    },
    mutations:{
        increment(state){
            state.count++
        }
    },
    actions:{
        increment(context){
            setTimeout(() => {
                context.commit('increment')
            }, 2000);
        }
    }
})
new Vue({
    el:'#app',
    store,
    computed:{
        count(){
            return store.state.count
        }
    }
})