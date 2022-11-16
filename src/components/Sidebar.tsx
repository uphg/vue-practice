import { defineComponent, type PropType } from "vue";
import SidebarLink from "./SidebarLink";

const Sidebar = defineComponent({
  name: 'SidebarLink',
  props: {
    data: {
      type: Array as PropType<{ path: string, title: string }[]>,
      default: () => []
    }
  },
  setup(props) {
    return () => (
      <aside class="sidebar">
        {props.data.map((item, index) => (
          <SidebarLink key={index} path={item.path}>{item.title}</SidebarLink>
        ))}
      </aside>
    )
  }
})

export default Sidebar