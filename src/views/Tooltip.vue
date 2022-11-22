<template>
  <h2>Tooltip 提示</h2>
  <Demo>
    <tu-tooltip>
      <button>我是按钮</button>
    </tu-tooltip>
  </Demo>
  <Demo class="tooltip-demo">
    <tu-tooltip content="Hello, I am Jack.">
      <tu-button>点击</tu-button>
    </tu-tooltip>
  </Demo>
  <Demo class="tooltip-demo">
    <tu-tooltip>
      <template #content>
        <span>Hello, I am Jack.</span>
      </template>
      <tu-button>点击</tu-button>
    </tu-tooltip>
  </Demo>
  <p v-for="item in 40" :key="item">你好，我的杰克。</p>
</template>
