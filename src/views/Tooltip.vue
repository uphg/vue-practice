<template>
  <h2>Tooltip 分页</h2>
  <Demo>
    <tu-tooltip>
      <button>我是按钮</button>
    </tu-tooltip>
  </Demo>
  <Demo class="tooltip-demo">
    <tu-tooltip content="Hello, I am Jack. Hello, I am Jack. Hello, I am Jack">
      <tu-button>我是按钮</tu-button>
      <!-- <tu-button>我是按钮</tu-button> -->
    </tu-tooltip>
  </Demo>
  <p v-for="item in 40" :key="item">你好，我的杰克。</p>
</template>
