<template>
  <div>
    <h2>{{ userInfo.name }}</h2>
    <h3>{{ num }}</h3>
    <button @click="increament">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: Object,
  },

  data() {
    return {
      num: 0,
    }
  },

  methods: {
    increament() {
      this.num += 1
    },
  },

  activated() {
    const { cache, keys } = this.$vnode.parent.componentInstance
    console.log("activated cache: ", cache)
    console.log("activated keys: ", keys)

    // let cacheLen = 0
    // const max = 3
    // Object.keys(cache).forEach(key => {
    //   if (cache[key]) {
    //     cacheLen += 1
    //     if (cacheLen > max) {
    //       const key = keys.shift()
    //       cache[key].componentInstance.$destroy()
    //       cache[key] = null
    //     }
    //   }
    // })
  },
}
</script>
