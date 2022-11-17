import { defineComponent, type PropType } from "vue";

const iconProps = {
  is: {
    type: Object
  }
}

const Icon = defineComponent({
  name: 'TuIcon',
  props: iconProps,
  setup(props, context) {
    return () => (
      <i class="tu-icon">{props.is.render() || context.slots.default?.()}</i>
    )
  }
})

export default Icon