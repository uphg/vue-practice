import { defineComponent, Teleport, Transition, type PropType, h, ref, computed } from 'vue';

const Prompt = defineComponent({
  name: 'TuPrompt',
  props: {
    visible: Boolean as PropType<boolean>,
    position: Object as PropType<Record<string, any>>
  },
  emits: ['update:visible'],
  setup(props, context) {
    const promptRef = ref<HTMLElement | null>(null)
    const halfWidth = computed(() => (promptRef.value?.offsetWidth || 0) / 2)
    const style = computed(() => ({
      top: `${props.position?.top - (promptRef.value?.offsetHeight || 0) - 8}px`,
      left: `${props.position?.left - halfWidth.value}px`
    }))
    return () => (
      <Teleport to="body">
        <Transition
          name="prompt-fade"
        >
          {{
            default: () => props.visible
            ? (<div
                ref={promptRef} class="tu-prompt"
                style={style.value}
                >
                  <div class="tu-prompt__content">{context.slots.default?.()}</div>
                  <div class="tu-prompt-arrow-wrapper" style={{ left: `${halfWidth.value}px` }}>
                    <div class="tu-prompt-arrow"></div> 
                  </div>
                </div>)
            : null
          }}
        </Transition>
      </Teleport>
    )
  }
})

export default Prompt
