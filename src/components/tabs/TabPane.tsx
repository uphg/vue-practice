import { defineComponent, type ExtractPropTypes, type PropType } from "vue";
import { TAGKEY } from '@/shared'

export type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>

export const tabPaneProps = {
  name: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: ''
  },
  label: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: ''
  }
}

const TabPane = defineComponent({
  name: 'ETabPane',
  props: tabPaneProps,
  [TAGKEY]: 'TabPane',
  setup(_props, context) {
    return () => (
      <div class="tu-tab-pane">{context.slots.default?.()}</div>
    )
  }
})

export default TabPane
