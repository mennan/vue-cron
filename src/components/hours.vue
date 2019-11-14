<template>
	<div>
		<div class="form-check form-row">
			<input
				class="form-check-input"
				type="radio"
				name="hours"
				id="hour_1"
				v-model="value.cronEvery"
				value="1"
			/>
			<label
				class="form-check-label"
				for="hour_1"
			>
				{{ text.Hours.every }}
			</label>
		</div>
		<div class="form-check with-input form-row">
			<input
				class="form-check-input"
				type="radio"
				name="hours"
				id="hour_2"
				v-model="value.cronEvery"
				value="2"
			/>
			<label
				class="form-check-label"
				for="hour_2"
			>
				{{ text.Hours.interval[0] }}
				<div class="d-inline-block">
					<input
						type="number"
						class="form-control form-control-sm"
						v-model="value.incrementIncrement"
						min="0"
						max="23"
					/>
				</div>
				{{ text.Hours.interval[1] || "" }}
				<div class="d-inline-block">
					<input
						type="number"
						class="form-control form-control-sm"
						v-model="value.incrementStart"
						min="0"
						max="23"
					/>
				</div>
				{{ text.Hours.interval[2] || "" }}
			</label>
		</div>
		<div class="form-check form-row with-select">
			<input
				class="form-check-input"
				type="radio"
				name="hours"
				id="hour_3"
				v-model="value.cronEvery"
				value="3"
			/>
			<label class="form-check-label">
				<div class="d-flex align-items-center">
					<span class="d-inline-block">
						{{ text.Hours.specific }}
					</span>
					<div class="d-inline-block">
						<multiselect
							v-model="value.specificSpecific"
							:options="specificHourOptions"
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
				name="hours"
				id="hour_4"
				v-model="value.cronEvery"
				value="4"
			/>
			<label
				class="form-check-label"
				for="hour_4"
			>
				{{ text.Hours.cycle[0] }}
				<div class="d-inline-block">
					<input
						type="number"
						class="form-control form-control-sm"
						v-model="value.rangeStart"
						min="0"
						max="23"
					/>
				</div>
				{{ text.Hours.cycle[1] || "" }}
				<div class="d-inline-block">
					<input
						type="number"
						class="form-control form-control-sm"
						v-model="value.rangeEnd"
						min="0"
						max="23"
					/>
				</div>
				{{ text.Hours.cycle[2] || "" }}
			</label>
		</div>
	</div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
	name: "Hours",
	components: {
		Multiselect
	},
	props: {
		text: {},
		value: {}
	},
	data() {
		return {
			specificHourOptions: []
		};
	},
	created() {
		for (let i = 0; i < 24; i++) {
			this.specificHourOptions.push(i);
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