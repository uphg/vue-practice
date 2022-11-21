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
    const top = computed(() => `${props.position?.top - (promptRef.value?.offsetHeight || 0) - 8}px`)
    const left = computed(() => `${props.position?.left - ((promptRef.value?.offsetWidth || 0) / 2)}px`)
    return () => (
      <Teleport to="body">
        <Transition
          name="prompt-fade"
        >
          {{
            default: () => props.visible
            ? (<div
                ref={promptRef} class="tu-prompt"
                style={{ top: top.value, left: left.value }}
                >{context.slots.default?.()}</div>)
            : null
          }}
        </Transition>
      </Teleport>
    )
  }
})

export default Prompt
