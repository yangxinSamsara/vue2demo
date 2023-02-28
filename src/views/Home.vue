<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="btnClick">click me</button>
    <input placeholder="input here" />
    <button @click="calc">start calc{{ count }}--{{ computedCount }}</button>
    <button @click="calcWorker">start calc with worker{{ countWorker }}</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"
import Worker from "worker-loader!../worker/calc.js"
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      count: 0,
      countWorker: 0,
    }
  },
  created() {
    console.log("created")
  },
  computed: {
    computedCount() {
      console.log('computed');
      return this.count + 1;
    }
  },
  watch: {
    count: {
      handler: function () {
        console.log("watch")
      },
      immediate: true,
    },
  },
  methods: {
    btnClick() {
      console.log("click.....")
    },
    calc() {
      let sum = 0
      console.time("calc")
      for (let i = 0; i < 200000; i++) {
        for (let i = 0; i < 10000; i++) {
          sum += Math.random()
        }
      }
      console.timeEnd("calc")
      this.count = sum
    },
    calcWorker() {
      let start = performance.now()
      let worker = new Worker()
      worker.postMessage(0)
      worker.addEventListener("message", (e) => {
        this.countWorker = e.data
        worker.terminate()
        let end = performance.now()
        // 得到总的计算时间
        let durationTime = end - start
        console.log("计算结果:", e.data)
        console.log(`代码执行了 ${durationTime} 毫秒`)
      })
    },
  },
}
</script>
