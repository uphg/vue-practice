import { defineComponent, h, ref, type PropType } from "vue";
import Prompt from "./Prompt";
import { getClientRect } from '@/utils/getClientRect'

const tooltipProps = {
  content: String as PropType<string>
}

const Tooltip = defineComponent({
  name: 'TuTooltip',
  props: tooltipProps,
  setup(props, context) {
    const visible = ref(false)
    const position = ref({ left: 0, top: 0 })
    const handleClick = (event: MouseEvent) => {
      const el = event.target as HTMLElement
      const halfWidth = el.offsetWidth / 2
      const { left, top } = getClientRect(el) as DOMRect
      const { scrollTop, scrollLeft } = document.documentElement
      position.value.top = top + scrollTop
      position.value.left = left + scrollLeft + halfWidth
      visible.value = !visible.value
    }
    return () => [
      context.slots.default?.()?.map((item) => item && h(item, { onClick: handleClick })),
      <Prompt position={position.value} v-model={[visible.value, 'visible']}>{props.content || context.slots.content?.()}</Prompt>
    ]
  }
})

export default Tooltip