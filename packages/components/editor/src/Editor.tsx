import { defineComponent } from "vue"
import { EditorProps as props } from "./props"
import type { EditorPropsType } from "./types"
import './Editor.css'

export default defineComponent({
  name: 'WEditor',
  props,
  setup(props: EditorPropsType) {
    return () => (
      <div class="w-editor">我是WEditor</div>
    )
  }
})
