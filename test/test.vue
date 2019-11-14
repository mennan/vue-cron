<style scoped>
.cron {
	width: 400px;
	margin: 0 auto;
	margin-top: 100px;
}

.cron h1 {
	font-size: 50px;
	text-align: center;
}
</style>

<template>
	<div id="app">
		<div class="cron">
			<h1>vue-cron</h1>
			<input
				type="text"
				class="form-control"
				v-model="cron"
				placeholder="* * * * * ? *"
				@click="cronPopover=!cronPopover"
			/>
			<div v-show="cronPopover">
				<vueCron
					:data="cron"
					@change="changeCron"
					@close="cronPopover = false"
					i18n="en"
				></vueCron>
			</div>

		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			cronPopover: false,
			cron: ""
		};
	},
	components: {},
	computed: {},
	methods: {
		changeCron(val) {
			this.cron = val;
		}
	},
	mounted() {}
};
</script>
