const helloComponent = {
  template: '<p>Hello</p>'
}

const app = Vue.createApp({
  data: () => ({
    
  }),
  components: {
    'local-component': helloComponent
  },
  watch: {
  },
  methods: {
  }
})
//Grobal
app.component('hello-component', {
  template: '<p>Hello, Nori</p>'
})

app.mount('#app')