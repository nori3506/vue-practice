const app = Vue.createApp({
  data: () => ({
    counter: 0,
    message: ''
  }),
  watch: {
  },
  methods: {
    clickHandler: function() {
      this.counter++
    },
    clickHandler1: function(event) {
      this.counter++
      console.log(event.target)
      console.log(event.target.id)
    },
    clickHandler2: function($event, message) {
      console.log(message)
      this.message = message
      console.log($event)
    }
  }
})

app.mount('#app')