import { createStore } from 'vuex';
import axios from 'axios';

const API = 'https://animechan.vercel.app/api/random';

export default createStore({
	state: {
		quote: {},
	},
	mutations: {
		updateQuote(state, payload) {
			state.quote = payload;
		},
	},
	actions: {
		async callQuote({ commit, dispatch }) {
			const { data } = await axios.get(API);
			if (data.quote.length > 190) {
				dispatch('callQuote');
			} else {
				commit('updateQuote', data);
			}
		},
	},
	modules: {},
});
