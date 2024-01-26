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
import { Todo, Meta } from 'components/models';
import { onMounted, ref } from 'vue';

const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1',
  },
  {
    id: 2,
    content: 'ct2',
  },
  {
    id: 3,
    content: 'ct3',
  },
  {
    id: 4,
    content: 'ct4',
  },
  {
    id: 5,
    content: 'ct5',
  },
]);
const meta = ref<Meta>({
  totalCount: 1200,
});
</script>
