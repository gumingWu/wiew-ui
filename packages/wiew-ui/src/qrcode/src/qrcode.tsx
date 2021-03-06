import { defineComponent, ref, onMounted, unref, watch } from 'vue'
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

    watch(
      () => props,
      createQrcode,
      {
        deep: true
      }
    )

    return () => (
      <canvas ref={wrapRef} />
    )
  }
})