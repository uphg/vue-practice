import { defineComponent } from "vue";

const Button = defineComponent({
  name: 'TuButton',
  setup(_props, context) {
    return () => <button class="tu-button">{context.slots.default?.()}</button>
  }
})

export default Button