import { defineComponent, ref, onMounted, unref } from 'vue'
import props from './props'
import type { QRcodePropType } from './types'
import { useHookToCreateQrcode } from './hooks/useRenderQrcode'

export default defineComponent({
  name: 'WQrcode',
  props,
  emit: ['done'],
  setup(props: QRcodePropType, { emit }) {
    const wrapRef = ref<HTMLCanvasElement | null>(null);

    const createQrcode = async() => {
      const wrapEl = unref(wrapRef)
      if(!wrapEl) return;

      const { value, options, width, logo } = props
      const renderValue = String(value)
      console.log(renderValue);

      const url = await useHookToCreateQrcode({
        canvas: wrapEl,
        width,
        logo,
        content: renderValue,
        options: options || {}
      })
      emit('done', { url, ctx: wrapEl.getContext('2d') });
    }

    onMounted(createQrcode)

    return () => (
      <canvas ref={wrapRef} />
    )
  }
})