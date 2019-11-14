<template>
	<div>
		<div class="form-check form-row">
			<input
				class="form-check-input"
				type="radio"
				name="days"
				id="day_1"
				v-model="day.cronEvery"
				value="1"
			/>
			<label
				class="form-check-label"
				for="day_1"
			>
				{{ text.Day.every }}
			</label>
		</div>
		<div class="form-check form-row with-select">
			<input
				class="form-check-input"
				type="radio"
				name="days"
				id="day_2"
				v-model="day.cronEvery"
				value="2"
			/>
			<label class="form-check-label">
				<div class="d-flex align-items-center">
					<span class="d-inline-block">
						{{ text.Day.intervalWeek[0] }}
					</span>
					<div class="d-inline-block">
						<input
							type="number"
							class="form-control form-control-sm"
							v-model="week.incrementIncrement"
							min="1"
							max="7"
						/>
					</div>
					<span class="d-inline-block">
						{{ text.Day.intervalWeek[1] }}
					</span>
					<div class="d-inline-block">
						<multiselect
							v-model="week.incrementStart"
							:options="intervalWeekOptions"
							:multiple="true"
							:close-on-select="false"
							placeholder=""
							:searchable="false"
							:custom-label="dayLabel"
						>
							<template
								slot="option"
								slot-scope="props"
							>
								<div class="option__desc"><span class="option__title">{{ text.Week[props.option - 1] }}</span></div>
							</template>
						</multiselect>
					</div>
					<span class="d-inline-block">
						{{ text.Day.intervalWeek[2] }}
					</span>
				</div>
			</label>
		</div>
		<div class="form-check with-input form-row">
			<input
				class="form-check-input"
				type="radio"
				name="days"
				id="day_3"
				v-model="day.cronEvery"
				value="3"
			/>
			<label
				class="form-check-label"
				for="day_3"
			>
				{{ text.Day.intervalDay[0] }}
				<div class="d-inline-block">
					<input
						type="number"
						class="form-control form-control-sm"
						v-model="day.incrementIncrement"
						min="1"
						max="31"
					/>
				</div>
				{{ text.Day.intervalDay[1] }}
				<div class="d-inline-block">
					<input
						type="number"
						class="form-control form-control-sm"
						v-model="day.incrementStart"
						min="1"
						max="31"
					/>
				</div>
				{{ text.Day.intervalDay[2] }}
			</label>
		</div>
		<div class="form-check form-row with-select">
			<input
				class="form-check-input"
				type="radio"
				name="days"
				id="day_4"
				v-model="day.cronEvery"
				value="4"
			/>
			<label
				class="form-check-label"
				for="day_4"
			>
				<div class="d-flex align-items-center">
					<span class="d-inline-block">
						{{ text.Day.specificWeek }}
					</span>
					<div class="d-inline-block">
						<multiselect
							v-model="week.specificSpecific"
							:options="intervalWeekOptions"
							:multiple="true"
							:close-on-select="false"
							placeholder=""
							:searchable="false"
							:custom-label="dayLabel"
						>
							<template
								slot="option"
								slot-scope="props"
							>
								<div class="option__desc"><span class="option__title">{{ text.Week[props.option - 1] }}</span></div>
							</template>
						</multiselect>
					</div>
				</div>
			</label>
		</div>
		<div class="form-check form-row with-select">
			<input
				class="form-check-input"
				type="radio"
				name="days"
				id="day_5"
				v-model="day.cronEvery"
				value="5"
			/>
			<label class="form-check-label">
				<div class="d-flex align-items-center">
					<span class="d-inline-block">
						{{ text.Day.specificDay }}
					</span>
					<div class="d-inline-block">
						<multiselect
							v-model="day.specificSpecific"
							:options="intervalDaysOptions"
							:multiple="true"
							:close-on-select="false"
							placeholder=""
							:searchable="false"
						/>
					</div>
				</div>
			</label>
		</div>
		<div class="form-check form-row">
			<input
				class="form-check-input"
				type="radio"
				name="days"
				id="day_6"
				v-model="day.cronEvery"
				value="6"
			/>
			<label
				class="form-check-label"
				for="everySecond"
			>
				{{ text.Day.lastDay }}
			</label>
		</div>
		<div class="form-check form-row">
			<input
				class="form-check-input"
				type="radio"
				name="days"
				id="day_7"
				v-model="day.cronEvery"
				value="7"
			/>
			<label
				class="form-check-label"
				for="everySecond"
			>
				{{ text.Day.lastWeekday }}
			</label>
		</div>
		<div class="form-check form-row with-select">
			<input
				class="form-check-input"
				type="radio"
				name="days"
				id="day_8"
				v-model="day.cronEvery"
				value="8"
			/>
			<label class="form-check-label">
				<div class="d-flex align-items-center">
					<span class="d-inline-block">
						{{ text.Day.lastWeek[0] }}
					</span>
					<div class="d-inline-block">
						<multiselect
							v-model="day.cronLastSpecificDomDay"
							:options="intervalWeekOptions"
							:multiple="true"
							:close-on-select="false"
							placeholder=""
							:searchable="false"
							:custom-label="dayLabel"
						>
							<template
								slot="option"
								slot-scope="props"
							>
								<div class="option__desc"><span class="option__title">{{ text.Week[props.option - 1] }}</span></div>
							</template>
						</multiselect>
					</div>
					<span class="d-inline-block">
						{{ text.Day.lastWeek[1] || "" }}
					</span>
				</div>
			</label>
		</div>
		<div class="form-check with-input form-row">
			<input
				class="form-check-input"
				type="radio"
				name="days"
				id="day_9"
				v-model="day.cronEvery"
				value="9"
			/>
			<label
				class="form-check-label"
				for="day_9"
			>
				<div class="d-inline-block">
					<input
						type="number"
						class="form-control form-control-sm"
						v-model="day.cronDaysBeforeEomMinus"
						min="1"
						max="31"
					/>
				</div>
				{{ text.Day.beforeEndMonth[0] }}
			</label>
		</div>
		<div class="form-check with-input form-row">
			<input
				class="form-check-input"
				type="radio"
				name="days"
				id="day_10"
				v-model="day.cronEvery"
				value="10"
			/>
			<label
				class="form-check-label"
				for="day_10"
			>
				<span class="d-inline-block">
					{{ text.Day.nearestWeekday[0] }}
				</span>
				<div class="d-inline-block">
					<input
						type="number"
						class="form-control form-control-sm"
						v-model="day.cronDaysNearestWeekday"
						min="1"
						max="31"
					/>
				</div>
				<span class="d-inline-block">
					{{ text.Day.nearestWeekday[1] }}
				</span>
			</label>
		</div>
		<div class="form-check with-input form-row">
			<input
				class="form-check-input"
				type="radio"
				name="days"
				id="day_11"
				v-model="day.cronEvery"
				value="11"
			/>
			<label class="form-check-label">
				<div class="d-flex align-items-center">
					<span class="d-inline-block">
						{{ text.Day.someWeekday[0] }}
					</span>
					<div class="d-inline-block">
						<input
							type="number"
							class="form-control form-control-sm"
							v-model="week.cronNthDayNth"
							min="1"
							max="31"
						/>
					</div>
					<div class="d-inline-block">
						<multiselect
							v-model="week.cronNthDayDay"
							:options="intervalWeekOptions"
							:multiple="true"
							:close-on-select="false"
							placeholder=""
							:searchable="false"
							:custom-label="dayLabel"
						>
							<template
								slot="option"
								slot-scope="props"
							>
								<div class="option__desc"><span class="option__title">{{ text.Week[props.option - 1] }}</span></div>
							</template>
						</multiselect>
					</div>
					<span class="d-inline-block">
						{{ text.Day.someWeekday[1] }}
					</span>
				</div>
			</label>
		</div>
	</div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
	name: "Day",
	components: {
		Multiselect
	},
	props: {
		text: {},
		day: {},
		week: {}
	},
	data() {
		return {
			intervalWeekOptions: [],
			intervalDaysOptions: []
		};
	},
	created() {
		for (let i = 1; i <= 7; i++) {
			this.intervalWeekOptions.push(i);
		}

		for (let i = 1; i <= 31; i++) {
			this.intervalDaysOptions.push(i);
		}
	},
	methods: {
		dayLabel(option) {
			return this.text.Week[option - 1];
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