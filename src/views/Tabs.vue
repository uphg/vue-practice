<template>
  <div class="tabs-demo">
    <h2>Tabs 组件</h2>
    <Demo>
      <tu-tabs v-model:value="active">
        <tu-tabPane name="a1" label="周董">爱在西元前</tu-tabPane>
        <tu-tabPane name="a2" label="李荣浩浩">李白</tu-tabPane>
        <tu-tabPane name="a3" label="邓紫棋">泡沫</tu-tabPane>
      </tu-tabs>
    </Demo>
    <Demo>
      <tu-tabs v-model:value="active">
        <template #prefix>前缀</template>
        <tu-tabPane name="a1" label="周董">爱在西元前</tu-tabPane>
        <tu-tabPane name="a2" label="李荣浩浩">李白</tu-tabPane>
        <tu-tabPane name="a3" label="邓紫棋">泡沫</tu-tabPane>
        <div>hi</div>
        <template #suffix>后缀</template>
      </tu-tabs>
    </Demo>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref('a2')
</script>