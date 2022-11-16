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
  { title: '首页', path: '/' },
  { title: '关于我', path: '/about' },
  { title: 'Tabs 组件', path: '/tabs' },
])
</script>
