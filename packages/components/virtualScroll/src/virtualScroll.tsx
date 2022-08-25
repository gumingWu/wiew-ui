import { defineComponent, ref, computed, onMounted, toRefs } from 'vue'
import { VirtualScrollProps as props } from './props'
import type { VirtualScrollPropsType } from './types'
import './VirtualScroll.less' 

export default /*#__PURE__*/ defineComponent({
  name: 'WVirtualScroll',
  props,
  setup(props: VirtualScrollPropsType) {
    const { data, listItemHeight, containerHeight } = props
    const start = ref(props.startIndex)
    const end = ref(props.endIndex)
    const translateY = ref(0)

    const visibleList = computed(() => {
      return data.slice(start.value, end.value)
    })
    
    const virtualHeight = computed(() => {
      return (data.length - visibleList.value.length) * listItemHeight + listItemHeight
    })

    const onScroll = (e) => {
      const eleScrollTop = e.target.scrollTop
      translateY.value = eleScrollTop
      start.value = Math.floor(eleScrollTop / listItemHeight)
      end.value = start.value + 10
    }

    return () => (
      <div class="virtual-scroller" onScroll={onScroll} style={{ height: `${containerHeight}px` }}>
        <div class="real-list-content" style={{ transform: `translateY(${translateY.value}px)` }}>
          {
            visibleList.value.map(item => (
              <div class="real-list-item" key={item.id} style={{ height: `${listItemHeight}px`, lineHeight: `${listItemHeight}px` }}>{item.name}</div>
            ))
          }
        </div>
        <div class="virtual-height" style={{ height: `${virtualHeight.value}px` }}>数据加载完毕</div>
      </div>
    )
  }
})