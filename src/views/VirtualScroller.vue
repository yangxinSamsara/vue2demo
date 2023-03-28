<template>
  <div class="VirtualScroller">
    <!-- <div class="s1">
      <div class="s1-wrap">
        <div class="s1-item" v-for="(item, index) in list" :key="item">我是第{{ index + 1 }}个</div>
      </div>
    </div> -->
    <div class="s2">
      <RecycleScroller class="scroller" :items="list" :item-size="32" key-field="id" v-slot="{ item }">
        <div class="user">{{ item }}</div>
      </RecycleScroller>
    </div>
  </div>
</template>

<script>
export default {
  name: "VirtualScroller",
  data() {
    return {
      list: Object.keys(Array.from({ length: 100000 })),
    }
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="scss">
.VirtualScroller {
  height: 700px;
  display: flex;
  .s1,
  .s2 {
    width: 400px;
    margin: 0 50px;
    overflow: hidden;
    border: 1px solid #2c3e50;
  }
  .s1-wrap {
    height: 100%;
    overflow-y: auto;
  }

  .s1-item {
    height: 40px;
  }

  .scroller {
    height: 100%;
  }

  .user {
    height: 50px;
  }
}
</style>
