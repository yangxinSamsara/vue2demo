import Vue from "vue"

import Skeleton from "./Skeleton.vue"

export default new Vue({
  components: {
    Skeleton,
  },

  template: `
          <div>
            <skeleton id='skeleton-home' style='display:none' />
            <skeleton id='skeleton-upload' style='display:none' />
          </div>
  `,
})
