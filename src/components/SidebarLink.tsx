import { defineComponent, type PropType } from "vue";
import { RouterLink } from 'vue-router'

const SidebarLink = defineComponent({
  name: 'SidebarLink',
  props: {
    path: {
      type: String as PropType<string>,
      default: ''
    }
  },
  setup(props, context) {
    return () => (
      <RouterLink class="sidebar-link" to={props.path}>{context.slots.default?.()}</RouterLink>
    )
  }
})

export default SidebarLink