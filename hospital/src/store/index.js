import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        active: 0,
        department: 0,
        username: null,
        pdf: null,
        information: {
            name: '',
            age: '',
            sex: '',
            description: '',
            allergies: '',
        }
    },
    actions: {
        //响应组件中的动作
        reflushInfo(context, value) {
            console.log('store中的actions.reflushInfo被执行了!');
            context.commit('ReflushInfo', value);
        }
    },
    mutations: {
        //执行更新state中的数据
        ReflushInfo(state, value) {
            console.log('store中的mutations.ReflushInfo被执行了!');
            state.information.age = value.age;
            state.information.description = value.description;
            state.information.allergies = value.allergies;
            state.information.sex = value.sex;
            state.information.name = value.name;
        }
    },
    modules: {}
});