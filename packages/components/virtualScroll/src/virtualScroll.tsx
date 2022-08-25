import { defineComponent, ref, computed, onMounted } from 'vue'
import { VirtualScrollProps as props } from './props'
import type { VirtualScrollPropsType } from './types'
import './VirtualScroll.less' 

export default /*#__PURE__*/ defineComponent({
  name: 'WVirtualScroll',
  props,
  setup(props: VirtualScrollPropsType) {
    const screenHeight = ref(0)
    const startOffset = ref(0)
    const start = ref(0)
    const end = ref(0)
    const listRef = ref<HTMLElement | null>(null)

    const { listData, itemSize } = props

    const listHeight = computed(() => {
      return listData.length * itemSize
    })
    const visibleCount = computed(() => {
      return Math.ceil(screenHeight.value / itemSize)
    })
    const getTransform = computed(() => {
      return `translateY(${startOffset}px)`
    })
    const visibleData = computed(() => {
      return listData.slice(start.value, Math.min(end.value, listData.length))
    })

    const scrollEvent = () => {
      const scrollTop = listRef.value.scrollTop
      start.value = Math.floor(scrollTop / itemSize)
      end.value = start.value + visibleCount.value
      startOffset.value = scrollTop - ( scrollTop % itemSize )
    }

    onMounted(() => {
      screenHeight.value = listRef.value.clientHeight
      start.value = 0
      end.value = start.value + visibleCount.value
    })

    return () => (
      <div ref={listRef} class="virtual-scroll-container" onScroll={scrollEvent}>
        <div class="virtual-scroll-plantom" style={{ height: `${listHeight.value}px` }}></div>
        <div class="virtual-list" style={{ transform: getTransform.value }}>
          {
            visibleData.value.map(item => (
              <div class="virtual-list-item" key={item.id} style={{ height: `${itemSize}px`, lineHeight: `${itemSize}px` }}>{item.value}</div>
            ))
          }
        </div>
      </div>
    )
  }
})