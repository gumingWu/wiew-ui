// step1. 创建组件.tsx
import { defineComponent, Transition, ref, Teleport } from 'vue'
import { ModalProps as props } from './props'
import './Modal.less'

export default defineComponent({
  name: 'WModal',
  props,
  emits: ['close'],
  setup(props, { emit, slots }) {
    const handleClose = (e) => {
      emit('close')
    }

    return () => (
      <Teleport to="body">
        <Transition name="modal">
          {
            props.show ? <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-container">
                <div class="modal-header">
                  {
                    slots.header ? slots.header() : <div>Default Header</div>
                  }
                </div>
                <div class="modal-body">
                  {
                    slots.default ? slots.default() : <div>Default Body</div>
                  }
                </div>
                <div class="modal-footer">
                  {
                    slots.footer ? slots.footer() : <div>
                      Default Footer
                      <w-button onClick={() => emit('close')}>取消</w-button>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div> : ''
          }
        </Transition>
      </Teleport>
    )
  }
})