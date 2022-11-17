import { computed, defineComponent, type PropType } from "vue"
import { map } from '../../utils'

const paginationProps = {
  current: {
    type: Number as PropType<number>,
    default: 1
  },
  total: {
    type: Number as PropType<number>,
    default: 0
  },
  pageSize: {
    type: Number as PropType<number>,
    default: 10
  },
  pageSlot: {
    type: Number as PropType<number>,
    default: 5
  }
}

const Pagination = defineComponent({
  name: 'TuPagination',
  props: paginationProps,
  emits: ['update:current'],
  setup(props, context) {
    const { emit } = context
    const totalPages = computed(() => Math.ceil(props.total / props.pageSize))

    const pagings = computed(() => {
      const { current } = props
      const result = []
      let count = current - 2 - 1
      while (++count <= current + 2) if(count > 1 && count < totalPages.value) {
        result.push(count)
      }
      return result
    })

    const handleCurrent = (value: number) => {
      emit('update:current', value)
    }

    const handlePrev = () => {
      const prev = props.current - 1
      if (prev >= 1) {
        emit('update:current', props.current - 1)
      }
    }

    const handleNext = () => {
      const next = props.current + 1
      if (next <= totalPages.value) {
        emit('update:current', props.current + 1)
      }
    }
    return () => (
      <div class="tu-pagination">
        {'hi'}
        {JSON.stringify(pagings.value)}
        <button class="tu-pagination-prev tu-pagination-button" disabled={props.current <= 1} onClick={handlePrev}>{'<'}</button>
        <button
          class={['tu-pagination-item tu-pagination-button', { active: 1 === props.current }]}
          onClick={() => handleCurrent(1)}
          >1</button>
        {props.current > 4 && <button class="tu-pagination-button">...</button>}
        {map<number, JSX.Element>(pagings.value, (item, index) => (
          <button
            key={index}
            class={['tu-pagination-item tu-pagination-button', { active: item === props.current }]}
            onClick={() => handleCurrent(item)}
          >{item}</button>
        ))}
        {props.current < (totalPages.value - 4) && <button class="tu-pagination-button">...</button>}
        <button
          class={['tu-pagination-item tu-pagination-button', { active: totalPages.value === props.current }]}
          onClick={() => handleCurrent(totalPages.value)}
          >{totalPages.value}</button>
        <button class="tu-pagination-next tu-pagination-button" disabled={props.current >= totalPages.value} onClick={handleNext}>{'>'}</button>
      </div>
    )
  }
})

export default Pagination