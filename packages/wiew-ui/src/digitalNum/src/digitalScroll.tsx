import { defineComponent, ref, reactive, computed, watch, onMounted, nextTick } from 'vue'
import { digitalValidator } from './helper'
import './digitalScroll.scss'

export default defineComponent({
  name: 'WDigitalScroll',
  props: {
    to: {
      validator: digitalValidator,
      default: '0'
    },
    from: {
      validator: digitalValidator,
      default: '0'
    },
    dislocation: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 500
    }
  },
  setup(props) {
    const digitals = reactive([",", ".", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"])
    const listHeight = ref(0)
    const spacing = ref(1)

    const elHeight = computed(() => listHeight.value / digitals.length)
    const listStyle = computed(() => {
      const style: Record<string, any> = {}

      style.transitionDuration = `${props.interval / 1000 * spacing.value}s`

      return style
    })
    const listRef = ref<HTMLDivElement | null>(null)
    const wrapRef = ref<HTMLDivElement | null>(null)

    const calcHeight = () => {
      listHeight.value = listRef.value.clientHeight
    }
    const setPosition = (target: string) => {
      const idx = digitals.findIndex(item => target === item)
      const offset = idx * elHeight.value

      if(!listRef) return
      nextTick(() => {
        listRef.value.style.transform = `translateY(-${offset}px)`
      })
    }

    watch(() => props.to, (newVal, oldVal) => {
      if(!listRef) return
      if(props.dislocation) {
        const oldIdx = digitals.findIndex(item => oldVal === item)
        const newIdx = digitals.findIndex(item => newVal === item)
        spacing.value = Math.abs(newIdx - oldIdx)
      } else {
        spacing.value = 1
      }
      setPosition(newVal)
    }, {
      immediate: true
    })

    onMounted(() => {
      calcHeight()
      wrapRef.value.style.height = `${elHeight.value}px`
      setPosition(props.from)
      setTimeout(() => {
        setPosition(props.to)
      }, 300)
    })

    return () => (
      <div class="w-digital-scroll" ref={wrapRef}>
        <div ref={listRef} class="w-digital-scroll-list" style={listStyle.value}>
          {
            digitals.map(item => (
              <span class="w-digital-scroll-item" key={item}>
                { item }
              </span>
            ))
          }
        </div>
      </div>
    )
  }
})