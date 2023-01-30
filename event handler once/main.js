const app = Vue.createApp({
  data: () => ({
    message: ''
  }),
  watch: {
  },
  methods: {
    clickHandler: function() {
      this.message = new Date().toLocaleTimeString()
    }
  }
})

app.mount('#app')