<template>
  <div class="life">
    <h1>life</h1>
    <p>打开控制台查看生命周期钩子</p>
    <p>data中的message{{message}}</p>
    <p>
      <button @click="message='data中的message改变了'">改变message</button>
    </p>
  </div>
</template>
<script>
export default {
  name: "life",
  data() {
    return {
      message: "data中的信息"
    };
  },
  methods: {},
  beforeCreate() {
    console.log("beforeCreate：", this.$el, this.$data);
  },
  created() {
    console.log("created：", this.$el, this.$data);
  },
  beforeMount() {
    console.log("beforeMount：", this.$el, this.$data.message);
  },
  mounted() {
    console.log("mounted：", this.$el, this.$data.message);
  },
  beforeUpdate() {
    console.log("beforeUpdate：", this.$el, this.$data.message);
  },
  updated() {
    console.log("updated：", this.$el, this.$data.message);
  },
  beforeDestroy() {
    console.log("beforeDestroy：", this.$el, this.$data.message);
  },
  destroyed() {
    console.log("destroyed：", this.$el, this.$data.message);
  }
};
</script>