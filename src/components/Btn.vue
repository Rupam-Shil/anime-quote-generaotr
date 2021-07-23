<template>
	<button type="button" :style="{ color: color }" @click="changeQuote">
		{{ btnText }}
	</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	props: {
		btnText: {
			default: 'Just A Btn',
		},
		color: {
			default: 'red',
		},
	},
	methods: {
		...mapActions(['callQuote']),
		changeQuote() {
			this.callQuote();
		},
	},
};
</script>

<style lang="scss" scoped>
button {
	padding: 1rem 5rem;
	outline: none;
	cursor: pointer;
	border: none;
	border-radius: 50px;
	background: linear-gradient(145deg, #2e2e2e, #373737);
	box-shadow: 20px 20px 60px #2b2b2b, -20px -20px 60px #3b3b3b;
	transition: 0.3s;
	&:hover {
		border-radius: 50px;
		background: linear-gradient(145deg, #373737, #2e2e2e);
		box-shadow: 20px 20px 60px #141414, -20px -20px 60px #525252;
	}
}
</style>
