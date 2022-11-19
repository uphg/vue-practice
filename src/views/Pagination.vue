<template>
  <h2>Pagination 分页</h2>
  <Demo>
    <tu-pagination v-model:current="current" :total="201" :page-size="10" />
  </Demo>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const current = ref(5)
</script>