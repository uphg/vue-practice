import { defineComponent } from "vue";

const Demo = defineComponent({
  name: 'Demo',
  setup(_props, context) {
    return () => (
      <div class="e-demo">{context.slots.default?.()}</div>
    )
  }
})

export default Demo