const app = Vue.createApp({
  data: () => ({
    message: 'Hello Nori',
    message1: 'Hey',
    checked: false,
    colors: [],
    color: ''
  }),
  watch: {
  },
  methods: {
    clickHandler: function () {
      
    }
  }
})

app.mount('#app')