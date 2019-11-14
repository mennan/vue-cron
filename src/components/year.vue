<template>
	<div>
		<div class="form-check form-row">
			<input
				class="form-check-input"
				type="radio"
				name="year"
				id="year_1"
				v-model="value.cronEvery"
				value="1"
			/>
			<label
				class="form-check-label"
				for="year_1"
			>
				{{ text.Year.every }}
			</label>
		</div>
		<div class="form-check with-input form-row">
			<input
				class="form-check-input"
				type="radio"
				name="year"
				id="year_2"
				v-model="value.cronEvery"
				value="2"
			/>
			<label
				class="form-check-label"
				for="year_2"
			>
				{{ text.Year.interval[0] }}
				<div class="d-inline-block">
					<input
						type="number"
						class="form-control form-control-sm"
						v-model="value.incrementIncrement"
						min="1"
						max="99"
					/>
				</div>
				{{ text.Year.interval[1] || "" }}
				<div class="d-inline-block">
					<input
						type="number"
						class="form-control form-control-sm"
						v-model="value.incrementStart"
						min="2018"
						max="2118"
					/>
				</div>
				{{ text.Year.interval[2] || "" }}
			</label>
		</div>
		<div class="form-check form-row with-select">
			<input
				class="form-check-input"
				type="radio"
				name="year"
				id="year_3"
				v-model="value.cronEvery"
				value="3"
			/>
			<label class="form-check-label">
				<div class="d-flex align-items-center">
					<span class="d-inline-block">
						{{ text.Year.specific }}
					</span>
					<div class="d-inline-block">
						<multiselect
							v-model="value.specificSpecific"
							:options="specificYearOptions"
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
				name="year"
				id="year_4"
				v-model="value.cronEvery"
				value="4"
			/>
			<label
				class="form-check-label"
				for="year_4"
			>
				{{ text.Year.cycle[0] }}
				<div class="d-inline-block">
					<input
						type="number"
						class="form-control form-control-sm"
						v-model="value.rangeStart"
						min="2018"
						max="2118"
					/>
				</div>
				{{ text.Year.cycle[1] || "" }}
				<div class="d-inline-block">
					<input
						type="number"
						class="form-control form-control-sm"
						v-model="value.rangeEnd"
						min="2018"
						max="2118"
					/>
				</div>
				{{ text.Year.cycle[2] || "" }}
			</label>
		</div>
	</div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
	name: "Year",
	components: {
		Multiselect
	},
	props: {
		text: {},
		value: {}
	},
	data() {
		return {
			specificYearOptions: []
		};
	},
	created() {
		for (let i = 2017; i <= 2117; i++) {
			this.specificYearOptions.push(i);
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