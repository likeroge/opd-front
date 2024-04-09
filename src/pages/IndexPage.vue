<template>
  <q-page padding>
    <q-img src="../assets/img/occ-banner.jpg"></q-img>
    <div class="q-py-md">
      <h4 class="text-h4 text-center">
        Центр Управления Воздушными Перевозками АК "Волга-Днепр"
      </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae aliquid
        vel dignissimos ipsa omnis facere vitae modi officia ab, alias aut sed
        reiciendis esse recusandae incidunt sit sunt, numquam exercitationem
        optio provident minima voluptate? Nihil reiciendis sit omnis ducimus,
        natus ab eos ut cum a autem quam corrupti nostrum ipsa!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae aliquid
        vel dignissimos ipsa omnis facere vitae modi officia ab, alias aut sed
        reiciendis esse recusandae incidunt sit sunt, numquam exercitationem
        optio provident minima voluptate? Nihil reiciendis sit omnis ducimus,
        natus ab eos ut cum a autem quam corrupti nostrum ipsa!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae aliquid
        vel dignissimos ipsa omnis facere vitae modi officia ab, alias aut sed
        reiciendis esse recusandae incidunt sit sunt, numquam exercitationem
        optio provident minima voluptate? Nihil reiciendis sit omnis ducimus,
        natus ab eos ut cum a autem quam corrupti nostrum ipsa!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae aliquid
        vel dignissimos ipsa omnis facere vitae modi officia ab, alias aut sed
        reiciendis esse recusandae incidunt sit sunt, numquam exercitationem
        optio provident minima voluptate? Nihil reiciendis sit omnis ducimus,
        natus ab eos ut cum a autem quam corrupti nostrum ipsa!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae aliquid
        vel dignissimos ipsa omnis facere vitae modi officia ab, alias aut sed
        reiciendis esse recusandae incidunt sit sunt, numquam exercitationem
        optio provident minima voluptate? Nihil reiciendis sit omnis ducimus,
        natus ab eos ut cum a autem quam corrupti nostrum ipsa!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae aliquid
        vel dignissimos ipsa omnis facere vitae modi officia ab, alias aut sed
        reiciendis esse recusandae incidunt sit sunt, numquam exercitationem
        optio provident minima voluptate? Nihil reiciendis sit omnis ducimus,
        natus ab eos ut cum a autem quam corrupti nostrum ipsa!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae aliquid
        vel dignissimos ipsa omnis facere vitae modi officia ab, alias aut sed
        reiciendis esse recusandae incidunt sit sunt, numquam exercitationem
        optio provident minima voluptate? Nihil reiciendis sit omnis ducimus,
        natus ab eos ut cum a autem quam corrupti nostrum ipsa!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae aliquid
        vel dignissimos ipsa omnis facere vitae modi officia ab, alias aut sed
        reiciendis esse recusandae incidunt sit sunt, numquam exercitationem
        optio provident minima voluptate? Nihil reiciendis sit omnis ducimus,
        natus ab eos ut cum a autem quam corrupti nostrum ipsa!
      </p>
      <!-- <div class="col-3 bg-red-2">Element 1</div> -->
      <!-- <div class="col-3 bg-blue-2">Element 2</div> -->
      <!-- <div class="col bg-green-2">Element 3</div> -->
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { api } from 'src/boot/axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
onMounted(async () => {
  try {
    const { data } = await api.get('/');
  } catch (error) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('firstName');
    router.push('/login');
  }
});
</script>
