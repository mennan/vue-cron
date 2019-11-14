<template>
	<div>
		<div class="form-check form-row">
			<input
				class="form-check-input"
				type="radio"
				name="everySeconds"
				id="everySecond"
				v-model="value.cronEvery"
				value="1"
			/>
			<label
				class="form-check-label"
				for="everySecond"
			>
				{{ text.Seconds.every }}
			</label>
		</div>
		<div class="form-check with-input form-row">
			<input
				class="form-check-input"
				type="radio"
				name="everySeconds"
				id="everyStartingSeconds"
				v-model="value.cronEvery"
				value="2"
			/>
			<label
				class="form-check-label"
				for="everyStartingSeconds"
			>
				{{ text.Seconds.interval[0] }}
				<div class="d-inline-block">
					<input
						type="number"
						class="form-control form-control-sm"
						v-model="value.incrementIncrement"
						min="1"
						max="60"
					/>
				</div>
				{{ text.Seconds.interval[1] || "" }}
				<div class="d-inline-block">
					<input
						type="number"
						class="form-control form-control-sm"
						v-model="value.incrementStart"
						min="0"
						max="59"
					/>
				</div>
				{{ text.Seconds.interval[2] || "" }}
			</label>
		</div>
		<div class="form-check form-row with-select">
			<input
				class="form-check-input"
				type="radio"
				name="everySeconds"
				id="everySpecificSeconds"
				v-model="value.cronEvery"
				value="3"
			/>
			<label class="form-check-label">
				<div class="d-flex align-items-center">
					<span class="d-inline-block">
						{{ text.Seconds.specific }}
					</span>
					<div class="d-inline-block">
						<multiselect
							v-model="value.specificSpecific"
							:options="specificSecondsOptions"
							:multiple="true"
							:close-on-select="false"
							placeholder=""
							:searchable="false"
						></multiselect>
					</div>
				</div>
			</label>
		</div>
		<div class="form-check with-input form-row">
			<input
				class="form-check-input"
				type="radio"
				name="everySeconds"
				id="rangeSeconds"
				v-model="value.cronEvery"
				value="4"
			/>
			<label
				class="form-check-label"
				for="rangeSeconds"
			>
				{{ text.Seconds.cycle[0] }}
				<div class="d-inline-block">
					<input
						type="number"
						class="form-control form-control-sm"
						v-model="value.rangeStart"
						min="1"
						max="60"
					/>
				</div>
				{{ text.Seconds.cycle[1] || "" }}
				<div class="d-inline-block">
					<input
						type="number"
						class="form-control form-control-sm"
						v-model="value.rangeEnd"
						min="0"
						max="59"
					/>
				</div>
				{{ text.Seconds.cycle[2] || "" }}
			</label>
		</div>
	</div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
	name: "Seconds",
	components: {
		Multiselect
	},
	props: {
		text: {},
		value: {}
	},
	data() {
		return {
			specificSecondsOptions: []
		};
	},
	created() {
		for (let i = 0; i < 60; i++) {
			this.specificSecondsOptions.push(i);
		}
	}
};
</script>

<style scoped>
.form-row {
	margin: 10px 0;
}

.with-input input[type="radio"] {
	margin-top: 10px;
}

.with-select input[type="radio"] {
	margin-top: 14px;
}
</style>