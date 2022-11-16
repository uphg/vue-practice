<template>
  <div class="tabs-demo">
    <h2>Tabs 组件</h2>
    <Demo>
      <ETabs v-model:value="active">
        <ETabPane name="a1" label="周董">爱在西元前</ETabPane>
        <ETabPane name="a2" label="李荣浩浩">李白</ETabPane>
        <ETabPane name="a3" label="邓紫棋">泡沫</ETabPane>
      </ETabs>
    </Demo>
    <Demo>
      <ETabs v-model:value="active">
        <template #prefix>前缀</template>
        <ETabPane name="a1" label="周董">爱在西元前</ETabPane>
        <ETabPane name="a2" label="李荣浩浩">李白</ETabPane>
        <ETabPane name="a3" label="邓紫棋">泡沫</ETabPane>
        <div>hi</div>
        <template #suffix>后缀</template>
      </ETabs>
    </Demo>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ETabs from '@/components/tabs/Tabs'
import ETabPane from '@/components/tabs/TabPane'

const active = ref('a2')
</script>