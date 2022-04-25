import { defineComponent, ref, toRefs, computed, reactive, unref } from 'vue'
import props from './props'
import type { VirtualScrollPropType } from './types'
import { getSlot } from '../../utils/tsxHelper'

function convertToUnit(str: string | number | null | undefined, unit = 'px'): string | undefined {
  if (str == null || str === '') {
    return undefined;
  } else if (isNaN(+str!)) {
    return String(str);
  } else {
    return `${Number(str)}${unit}`;
  }
}

export default defineComponent({
  name: 'w-virtual-scroll',
  props,
  setup(props: VirtualScrollPropType, { slots }) {
    const wrapElRef = ref<HTMLElement | null>(null);
    const state = reactive({
      first: 0,
      last: 0,
      scrollTop: 0
    })

    const { itemHeight, height, width, items, bench } = toRefs(props)

    const getBenchRef = computed(() => {
      return parseInt(bench.value as string)
    })
    const getItemHeightRef = computed(() => {
      return parseInt(itemHeight.value as string)
    })
    const getFirstToRenderRef = computed(() => {
      return Math.max(0, state.first - unref(getBenchRef))
    })
    const getLastToRenderRef = computed(() => {
      return Math.min((items.value || []).length, state.last + unref(getBenchRef))
    })
    const getContainerStyleRef = computed(() => {
      return {
        height: convertToUnit((items.value || []).length * unref(getItemHeightRef))
      }
    })
    const getWrapStyleRef = computed(() => {
      const style: Record<string, string> = {}
      const wrapHeight = convertToUnit(height.value)
      const wrapWidth = convertToUnit(width.value)
      
      if(wrapHeight) style.height = wrapHeight
      if(wrapWidth) style.width = wrapWidth

      return style
    })

    function renderChildren() {
      return items.value.slice(unref(getFirstToRenderRef), unref(getLastToRenderRef)).map(genChild)
    }

    function genChild(item: any, index: number) {
      index += unref(getFirstToRenderRef)
      const top = convertToUnit(index + unref(getItemHeightRef))
      return (
        <div class="virtual-scroll__item" style={{ top }} key={index}>
          { getSlot(slots, 'default', { index, item }) }
        </div>
      )
    }

    return () => (
      <div style={unref(getWrapStyleRef)} ref={wrapElRef}>
        <div style={unref(getContainerStyleRef)}>
          { renderChildren() }
        </div>
      </div>
    )
  }
})