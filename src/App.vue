<template>
	<section class="main" ref="main">
		<div class="right-col" ref="rightcol">
			<div class="quote__section">
				<div class="anime__quote">
					<h2>"{{ quote.quote }}"</h2>
				</div>
				<div class="anime__name">
					{{ quote.anime }}
				</div>
				<div class="anime__character">- {{ quote.character }}</div>
			</div>
			<Btn btnText="Generate New Quote" color="#fff" />
		</div>
	</section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Btn from './components/Btn.vue';
import gsap from 'gsap';
export default {
	name: 'App',
	components: { Btn },
	methods: {
		...mapActions(['callQuote']),

		check() {
			console.log('clicked');
		},
	},
	mounted() {
		const tl = gsap.timeline({ delay: 1 });
		tl.to(this.$refs.main, {
			y: 0,
			duration: 0.5,
		});
		tl.to(this.$refs.rightcol, {
			opacity: 1,
			x: 0,
			duration: 2,
		});
	},
	created() {
		this.callQuote();
	},
	computed: {
		...mapState(['quote']),
	},
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@400;600;700&display=swap');
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: 'Exo', sans-serif;
	height: 100%;
	width: 100%;
	background: #0f0f19;
	overflow: hidden;
}
section {
	transform: translateY(100%);
	width: 100vw;
	height: 100vh;
	background: #000 url('./assets/bg.png');
	background-size: cover;
	background-position: bottom center;
	display: flex;
	justify-content: flex-end;
	.right-col {
		transform: translateX(100%);
		opacity: 0;
		width: 50%;
		height: 100%;
		border-radius: 50px 0 0 50px;
		background: #333;
		box-shadow: 10px 10px 20px #000000, inset 10px 10px 20px #242424;
		padding: 5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8rem;
		.quote__section {
			width: 100%;
			min-height: 70%;
			// height: max-content;
			position: relative;

			.anime__quote {
				z-index: 0;
				position: absolute;
				left: 10%;
				width: 80%;
				height: 100%;
				border-radius: 36px;
				background: linear-gradient(45deg, #2e2e2e, #373737);
				box-shadow: 20px -20px 60px #2b2b2b, -20px 20px 60px #3b3b3b;
				text-align: center;
				display: grid;
				place-content: center;
				padding: 2rem;
				h2 {
					color: #fff;
					text-shadow: 0 0 10px rgba(3, 3, 3, 0.8);
					font-size: 1.5rem;
				}
				overflow: scroll;
				&::-webkit-scrollbar {
					display: none;
				}
			}
			.anime__name {
				top: -5%;
				left: 5%;
				position: absolute;
				padding: 0.2rem 2rem;
				border-radius: 41px;
				background: linear-gradient(315deg, #e6e6e6, #ffffff);
				box-shadow: -7px -7px 30px #2b2b2b, 7px 7px 30px #3b3b3b;
				z-index: 1;
			}
			.anime__character {
				position: absolute;
				bottom: -5%;
				right: 5%;
				padding: 0.2rem 2rem;
				border-radius: 41px;
				background: linear-gradient(315deg, #e6e6e6, #ffffff);
				box-shadow: -7px -7px 30px #2b2b2b, 7px 7px 30px #3b3b3b;
				z-index: 1;
			}
		}
	}
}
@media only screen and (max-width: 769px) {
	section {
		justify-content: center;
		background-position: left center;
		.right-col {
			width: 100%;
			border-radius: 0 0 50px 50px;
			height: 60%;
			padding: 1rem;
			padding-top: 2rem;
			gap: 1.5rem;
			.quote__section {
			}
		}
	}
}
</style>
