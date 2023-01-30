const app = Vue.createApp({
  data: () => ({
    message: 'Hello Nori',
    message1: 'Hey',
    checked: false,
    colors: [],
    color: '',
    selected: '',
    selected1: '',
    age: 0
  }),
  watch: {
  },
  methods: {
    clickHandler: function () {
      
    }
  }
})

app.mount('#app')