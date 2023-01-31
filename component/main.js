const app = Vue.createApp({
  data: () => ({
    
  }),
  watch: {
  },
  methods: {
    clickHandler: function () {
      
    }
  }
})

app.component('hello-component', {
  template: '<p>Hello, Nori</p>'
})

app.mount('#app')