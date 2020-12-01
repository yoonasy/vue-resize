<template>
  <div id="app">
    <div class="counter">
      Resize: {{ count }}
    </div>
    <div>
      <button
        class="toggle"
        @click="show = !show"
      >
        Toggle
      </button>
      <button
        class="change"
        @click="changeSize"
      >
        Change CSS size
      </button>
    </div>
    <div
      v-if="show"
      class="resized"
    >
      <textarea :style="{ width: `${width}px` }" />
      <ResizeObserver @notify="handleResize" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',

  setup () {
    const count = ref(0)
    const width = ref(300)

    const handleResize = () => {
      count.value = count.value + 1
      console.log('handle')
    }

    const changeSize = () => {
      width.value = Math.round(Math.random() * 400) + 100
    }

    return {
      count,
      show: true,
      width,

      handleResize,
      changeSize,
    }
  },
})
</script>

<style lang="stylus">
$color = #42b983

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  text-align center
  color #2c3e50
  margin-top 60px

.counter
  font-size 42px
  color $color

.resized
  position relative
  border solid 1px $color
  margin 12px
  padding @margin
  display inline-block
</style>
