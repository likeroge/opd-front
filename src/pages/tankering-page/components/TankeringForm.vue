<script setup lang="ts">
import { api } from 'src/boot/axios';
import BackButton from 'src/uikit/BackButton.vue';
import { Ref, computed, ref } from 'vue';

const depPrice = ref(0);
const arrPrice = ref(0);
const tripTime = ref('');
const aircraft: Ref<string> = ref('AN-124');
const tripFuel = ref(0);
const calculateResult: Ref<number> = ref(0);

const aircraftTypes = ['AN-124', 'IL-76'];

//Over fuel flow per hour (for every tonn)
const overFF = {
  an124: 0.04,
  il76: 0.027,
  an12: 0.011,
};

//Fuel indication delta(error)
const K = 0.03;

const aircraftType = computed(() => {
  if (aircraft.value === 'AN-124') {
    return 'an124';
  }
  if (aircraft.value === 'IL-76') {
    return 'il76';
  }
  return 'an12';
});

const onCalculate = async () => {
  if (
    depPrice.value !== 0 ||
    arrPrice.value !== 0 ||
    (tripTime.value !== '' && tripTime.value !== '00:00')
  ) {
    const tripTimeHrs = Number(tripTime.value.toString().split(':')[0]);
    const tripTimeMin = Number(tripTime.value.toString().split(':')[1]) / 60;
    const tripTimeCorr = tripTimeHrs + tripTimeMin;

    //send to calculate
    try {
      const { data } = await api.post('/tankering/calculate', {
        priceDep: Number(depPrice.value),
        priceArr: Number(arrPrice.value),
        tripTime: tripTimeCorr.toPrecision(3),
        aircraft: aircraftType.value,
        tripFuel: Number(tripFuel.value),
      });
      calculateResult.value = data;
    } catch (err) {
      throw err;
    }
  }
};
</script>

<template>
  <q-form @submit="onCalculate" class="q-mb-md">
    <q-select
      label="Воздушное судно"
      v-model="aircraft"
      :options="aircraftTypes"
    />
    <q-input
      error-message="Цена в аэропорту посадки ($)"
      type="number"
      v-model="depPrice"
      label="Цена в аэропорту вылета  ($)"
    />
    <q-input
      error-message="Цена в аэропорту посадки ($)"
      type="number"
      v-model="arrPrice"
      label="Цена в аэропорту посадки ($)"
    />
    <q-input
      error-message="Введите время полёта"
      type="time"
      v-model="tripTime"
      label="Время в пути"
    />
    <q-input
      error-message="Введите Trip fuel полёта без танкирования (КГ)"
      type="number"
      v-model="tripFuel"
      label="Введите Trip fuel полёта без танкирования (КГ)"
    />
    <q-btn class="q-mt-md" type="submit" color="primary" label="Расчет" />
  </q-form>
  <div
    v-if="calculateResult && calculateResult > 0"
    :class="
      calculateResult > 0 && calculateResult < 50 ? 'bg-green' : 'bg-red-4'
    "
    class="q-pa-md text-white text-center text-h6"
  >
    MIN EXTRA = {{ calculateResult.toFixed(0) }}
  </div>
  <div
    v-if="calculateResult < 0"
    class="q-pa-md text-white text-center text-h6 bg-red-4"
  >
    NO TANK
  </div>
  <BackButton />
</template>
