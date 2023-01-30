const app = Vue.createApp({
  data: () => ({
    counter: 0,
  }),
  watch: {
  },
  methods: {
    clickHandler: function() {
      this.counter++
    }
  }
})

app.mount('#app')