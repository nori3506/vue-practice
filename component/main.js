const helloComponent = {
  template: '<p>Hello</p>'
}

const app = Vue.createApp({
  data: () => ({

  }),
  components: {
    // component name should include "-" and kebab case like button-counter
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