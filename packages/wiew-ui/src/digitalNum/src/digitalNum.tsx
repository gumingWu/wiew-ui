import { defineComponent, ref, reactive, TransitionGroup, watch } from 'vue'
import DigitalScroll from './digitalScroll'
import props from './props'
import type { DigitalTransformPropType } from './types'
import './digitalNum.scss'

export default defineComponent({
  name: 'WDigitalNum',
  components: {
    DigitalScroll
  },
  props,
  setup(props: DigitalTransformPropType) {
    const digitals = ref([])
    const oldDigitals = ref([])

    const parseDigital = (digital) => {
      let digitalsStr = digital + "";
      if (props.useGrouping) {
        digitalsStr = digitalsStr.replace(/^-?\d+/g, m =>
          m.replace(/(?=(?!\b)(\d{3})+$)/g, ",")
        );
      }
      const digitalArr = digitalsStr.split("");
      oldDigitals.value = digitals.value.concat();
      digitals.value = digitalArr;
    }

    watch(() => props.value, (newVal) => {
      parseDigital(newVal)
    }, {
      immediate: true
    })

    return () => (
      <TransitionGroup class="digital-num" name="dn-slide-y" tag="div">
        {
          digitals.value.map((item, idx) => (
            <DigitalScroll 
              class="digital-num-item" 
              key={idx} 
              to={item} 
              interval={props.interval} 
              dislocation={props.dislocation} 
              from="0">
                {item}
            </DigitalScroll>
          ))
        }
      </TransitionGroup>
    )
  }
})