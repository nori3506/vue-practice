const app = Vue.createApp({
  data: () => ({
    first: '',
    first1: '',
    last: '',
    last1: '',
    fullName1: ''
  }),
  computed: {
    fullName: function () {
      return this.first + ' ' + this.last
    }
  },
  watch: {
    last1: function (value) {
      this.fullName1 = this.first1 + ' ' + this.last1
    },
    first1: function (value) {
      this.fullName1 = this.first1 + ' ' + this.last1
    }
  }
})

app.mount('#app')