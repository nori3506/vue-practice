const app = Vue.createApp({
  data: () => ({
    message: "hello vue js"
  }),
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    reversedMessageMethod: function () {
      return this.message.split('').reverse().join('')
    }
  }
})

app.mount('#app')