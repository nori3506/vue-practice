const buttonCounter = {
  template: '<div><span>Count: </span> <button v-on:click="countUp">{{ count }}</button></div>',
  data: () => ({
    count: 0
  }),
  methods: {
    countUp: function (event) {
      this.count++
    }
  }
}

const app = Vue.createApp({
  data: () => ({

  }),
  components: {
    // component name should include "-" and kebab case like button-counter
    'button-counter': buttonCounter
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