import { getInternetExplorerVersion } from '../utils/compatibility'
import { defineComponent, onUnmounted, onMounted, ref, createVNode } from 'vue'
import './style.css'

let isIE

function initCompat () {
  if (!initCompat.init) {
    initCompat.init = true
    isIE = getInternetExplorerVersion() !== -1
  }
}

export default defineComponent({
  name: 'ResizeObserver',

  emits: ['notify'],

  setup (props, { emit }) {
    let _w = 0
    let _h = 0
    const elRef = ref(null)
    let _resizeObject = null

    const compareAndNotify = () => {
      if (_w !== elRef.value.offsetWidth || _h !== elRef.value.offsetHeight) {
        _w = elRef.value.offsetWidth
        _h = elRef.value.offsetHeight

        emit('notify', {
          width: _w,
          height: _h,
        })
      }
    }

    const addResizeHandlers = () => {
      _resizeObject.contentDocument.defaultView.addEventListener('resize', compareAndNotify)
      compareAndNotify()
    }

    const removeResizeHandlers = () => {
      if (_resizeObject && _resizeObject.onload) {
        if (!isIE && _resizeObject.contentDocument) {
          _resizeObject.contentDocument.defaultView.removeEventListener('resize', compareAndNotify)
        }

        elRef.value.removeChild(_resizeObject)

        _resizeObject.onload = null
        _resizeObject = null
      }
    }

    onMounted(() => {
      initCompat()

      _w = elRef.value.offsetWidth
      _h = elRef.value.offsetHeight

      const object = document.createElement('object')
      _resizeObject = object

      object.setAttribute('aria-hidden', 'true')
      object.setAttribute('tabindex', '-1')
      object.onload = addResizeHandlers
      object.type = 'text/html'

      if (isIE) {
        elRef.value.appendChild(object)
      }

      object.data = 'about:blank'

      if (!isIE) {
        elRef.value.appendChild(object)
      }
    })

    onUnmounted(() => {
      removeResizeHandlers()
    })

    // return { elRef }

    return () => {
      return createVNode('div', {
        ref: elRef.value,
        class: 'resize-observer',
        tabindex: '-1',
      },
      )
    }
  },
})
