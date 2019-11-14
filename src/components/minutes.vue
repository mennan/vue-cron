<template>
	<div>
		<div class="form-check form-row">
			<input
				class="form-check-input"
				type="radio"
				name="minutes"
				id="minute_1"
				v-model="value.cronEvery"
				value="1"
			/>
			<label
				class="form-check-label"
				for="minute_1"
			>
				{{ text.Minutes.every }}
			</label>
		</div>
		<div class="form-check with-input form-row">
			<input
				class="form-check-input"
				type="radio"
				name="minutes"
				id="minute_2"
				v-model="value.cronEvery"
				value="2"
			/>
			<label
				class="form-check-label"
				for="minute_2"
			>
				{{ text.Minutes.interval[0] }}
				<div class="d-inline-block">
					<input
						type="number"
						class="form-control form-control-sm"
						v-model="value.incrementIncrement"
						min="1"
						max="60"
					/>
				</div>
				{{ text.Minutes.interval[1] || "" }}
				<div class="d-inline-block">
					<input
						type="number"
						class="form-control form-control-sm"
						v-model="value.incrementStart"
						min="0"
						max="59"
					/>
				</div>
				{{ text.Minutes.interval[2] || "" }}
			</label>
		</div>
		<div class="form-check form-row with-select">
			<input
				class="form-check-input"
				type="radio"
				name="minutes"
				id="minute_3"
				v-model="value.cronEvery"
				value="3"
			/>
			<label class="form-check-label">
				<div class="d-flex align-items-center">
					<span class="d-inline-block">
						{{ text.Minutes.specific }}
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
				name="minutes"
				id="minute_4"
				v-model="value.cronEvery"
				value="4"
			/>
			<label
				class="form-check-label"
				for="minute_4"
			>
				{{ text.Minutes.cycle[0] }}
				<div class="d-inline-block">
					<input
						type="number"
						class="form-control form-control-sm"
						v-model="value.rangeStart"
						min="1"
						max="60"
					/>
				</div>
				{{ text.Minutes.cycle[1] || "" }}
				<div class="d-inline-block">
					<input
						type="number"
						class="form-control form-control-sm"
						v-model="value.rangeEnd"
						min="0"
						max="59"
					/>
				</div>
				{{ text.Minutes.cycle[2] || "" }}
			</label>
		</div>
	</div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
	name: "Minutes",
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