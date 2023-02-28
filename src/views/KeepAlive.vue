<template>
  <section class="container">
    <aside class="aside">
      <ul>
        <li
          :class="{ active: active === index }"
          v-for="(user, index) in userList"
          :key="index"
          @click="selectUser(index, user)"
        >
          {{ user.name }}
        </li>
      </ul>
    </aside>
    <section class="main">
      <keep-alive :max="3">
        <chat-content :key="currentUser.id" :user-info="currentUser"></chat-content>
      </keep-alive>
    </section>
  </section>
</template>

<script>
import ChatContent from "./ChatContent.vue"
export default {
  components: {
    ChatContent,
  },
  data() {
    return {
      active: -1,
      currentUser: {},
      userList: [
        { id: 1, name: "张三" },
        { id: 2, name: "李四" },
        { id: 3, name: "王五" },
        { id: 4, name: "老六" },
        { id: 5, name: "老八" },
        { id: 6, name: "老九" },
      ],
    }
  },
  methods: {
    selectUser(index) {
      this.active = index
      this.currentUser = this.userList[index]
    },
  },
}
</script>
<style>
ul {
  list-style: none;
}
ul::after{
  content: '';
  clear: both;
  display: block;
}
ul > li {
  display: block;
  float: left;
  margin-right: 20px;
  cursor: pointer;
}
</style>