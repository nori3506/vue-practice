const app = Vue.createApp({
  data: () => ({
    message: 'Hello Nori',
    message1: 'Hey',
    checked: false,
    colors: [],
    color: '',
    selected: ''
  }),
  watch: {
  },
  methods: {
    clickHandler: function () {
      
    }
  }
})

app.mount('#app')