<template>
  <div class="upload">
    <div class="select" style="border:1px solid red">自定义选定的文本样式</div>
    <input type="number">
    <input type="file" ref="input" @change="fileChange" />
    <button @click="upload">上传</button>
    数据汇总 Odometer
    应用管理 Iphone
    分销商管理 UserFilled
    小程序管理 Tools
    商户管理 Avatar
    系统设置 Setting
    菜单 Menu
    角色 User
    账号 User
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      files: null,
      chunkList: [],
    }
  },
  computed: {},
  methods: {
    fileChange(ev) {
      if (ev.target.files.length) {
        this.files = ev.target.files[0]
        this.chunkList = this.createChunk(this.files)
        console.log(ev, this.files, this.chunkList)
      }
    },
    upload() {
      const uploadList = this.chunkList.map((item, index) => {
        return {
          file: item.file,
          size: item.file.size,
          percent: 0,
          chunkName: `${this.files.name}-${index}`,
          fileName: this.files.name,
          index,
        }
      })
      this.uploadFile(uploadList)
    },
    async uploadFile(uploadList) {
      const requestList = uploadList
        .map(({ file, fileName, index, chunkName }) => {
          const formData = new formData()
          formData.append("file", file)
          formData.append("fileName", fileName)
          formData.append("chunkName", chunkName)
          return { formData, index }
        })
        .map(({ formData, index }) => {
          console.log(formData, index)
          // uploadApi(formData)
        })
      await Promise.all(requestList)
    },
    createChunk(files, size = 2 * 1024 * 1024) {
      const chunkList = []
      let cur = 0
      while (cur < files.size) {
        chunkList.push({
          file: files.slice(cur, cur + size),
        })
        cur += size
      }
      return chunkList
    },
  },
}
</script>
<style>
/* 关键样式 */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.select::selection {
  color: #ffffff;
  background-color: #ff4c9f;
}
</style>
