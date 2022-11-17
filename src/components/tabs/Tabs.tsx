import { defineComponent, ref, watchEffect, type PropType, type SetupContext, type VNode } from "vue";
import { renderComponent } from "@/utils/renderComponent";

// 获取相对当前客户端位置的距离
export const getClientRect = (el: HTMLElement | null, property: string) => el?.getBoundingClientRect()[property as keyof DOMRect] as (number | undefined)

const tabsProps = {
  value: {
    type: [String, Number, Boolean, Symbol()] as PropType<string | number | boolean | symbol>,
    default: ''
  },
  type: {
    type: [String] as PropType<'default' | 'segment'>,
    default: 'default'
  }
}

const Tabs = defineComponent({
  name: 'TuTabs',
  props: tabsProps,
  setup(props, context: SetupContext<{}>) {
    const { slots } = context
    const barRef = ref<HTMLElement | null>(null)
    const checkedRef = ref<HTMLElement | null>(null)
    const tabWrapRef = ref<HTMLElement | null>(null)

    const handleTabClick = (item: VNode) => {
      context.emit('update:value', item.props?.name)
    }

    const updateBar = () => {
      const left = getClientRect(checkedRef.value, 'left') || 0
      const wrapLeft = getClientRect(tabWrapRef.value, 'left') || 0
      const width = getClientRect(checkedRef.value, 'width')
      const bar = barRef.value
      if(bar) {
        bar.style.width = width + 'px'
        bar.style.left = left - wrapLeft + 'px'
      }
    }

    watchEffect(updateBar)

    return () => {
      const tabPanes = renderComponent(slots.default?.(), 'TabPane')
      return (
        <div class="tu-tabs">
          <div class={['tu-tabs-nav']}>
            {slots.prefix && <div class="tu-tabs-nav__prefix">{slots.prefix()}</div>}
            <div class={['tu-tabs-nav__wrap']}>
              <div ref={tabWrapRef} class="tu-tabs-tab__wrap">
                {tabPanes.map((item, index) => (
                  <div
                    ref={(el) => {
                      if (item.props?.name === props.value) {
                        checkedRef.value = el as HTMLElement
                      }
                    }}
                    class={['tu-tabs-tab__item', { active: item.props?.name === props.value }]}
                    key={index}
                    onClick={() => handleTabClick(item)}
                  ><span class="tu-tabs-tab__item-label">{item.props?.label}</span></div>
                ))}
              </div>
              <div ref={barRef} class="tu-tabs-bar"></div>
            </div>
            {slots.suffix && <div class="tu-tabs-nav__suffix">{slots.suffix()}</div>}
          </div>
          <div class={['tu-tabs-content']}>
            {tabPanes.find((item) => item.props?.name === props.value)}
          </div>
        </div>
      )
    }
  }
})

export default Tabs