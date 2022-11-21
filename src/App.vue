<template>
  <Sidebar :data="sidebars"/>
  <div class="page">
    <div class="page-content"><RouterView /></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar'

const sidebars = ref([
  { title: 'Vue Practice', path: '/' },
  { title: 'Tabs 标签页', path: '/tabs' },
  { title: 'Pagination 分页', path: '/pagination' },
  { title: 'Tooltip 提示', path: '/tooltip' },
])
</script>
