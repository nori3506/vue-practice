const app = Vue.createApp({
  data: () => ({
    basePrice: 100
  }),
  computed: {
    computedNumber: function () {
      console.log('Computed!')
      return Math.random()
    
   }
  },
  methods: {
    methodsNumber: function () {
      console.log('Methods!')

      return Math.random()
    }
  }
})

app.mount('#app')