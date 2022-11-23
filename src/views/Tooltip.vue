<template>
  <h2>Tooltip 提示</h2>
  <Demo class="tooltip-demo">
    <tu-tooltip content="Hello, I am Jack.">
      <tu-button>点击</tu-button>
    </tu-tooltip>
    <tu-tooltip>
      <template #content>
        <span style="color: #50e2b7;">Hello, I am Jack.</span>
      </template>
      <tu-button>点击</tu-button>
    </tu-tooltip>
  </Demo>
</template>

<style>
.tooltip-demo .tu-button {
  margin-right: 12px;
}
</style>
