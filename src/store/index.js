import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    meals: [],
    protein: '',
    carbs: '',
    fats: '',
    calories: '',
    isLoggedin: !!localStorage.getItem('token')
  },

  plugins: [createPersistedState()],

  actions: {
    loadMeals: function ({ commit }) {
      /* axios.get('/api/search/meals/by-macros', {
        params: {
          p: store.state.protein,
          c: store.state.carbs,
          f: store.state.fats
        }
      })
      .then((response) => {
        commit('SET_MEALS', { list: response.data })
      }, (err) => {
        console.log(err)
      }) */
    },

    loadMealsWithCalories: function ({ commit }) {
      /* axios.get('/api/search/meals/by-calories/' + store.state.calories)
      .then(response => {
        commit('SET_MEALS', { list: response.data })
      }, (err) => {
        console.log(err)
      }) */
    },

    searchMacros ({ commit }, macros) {
      commit('SET_MACROS', macros)
    },

    searchCalories ({ commit }, calories) {
      commit('SET_CALORIES', calories)
    }
  },

  mutations: {
    SET_MEALS: (state, { list }) => {
      state.meals = list
    },

    SET_MACROS (state, macros) {
      state.protein = macros.protein
      state.carbs = macros.carbs
      state.fats = macros.fats
      state.searchHeaderToggle = true
    },

    SET_CALORIES (state, calories) {
      state.calories = calories
      state.searchHeaderToggle = false
    }
  },

  getters: {
    getMeals: state => {
      return state.meals.results
    },

    getProtein: state => {
      return state.protein
    },

    getCarbs: state => {
      return state.carbs
    },

    getFats: state => {
      return state.fats
    },

    getCalories: state => {
      return state.calories
    }
  }
})

export default store
