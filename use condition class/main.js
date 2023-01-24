const app = Vue.createApp({
  data: () => ({
    largeClass: {
      large: true,
      'bg-gray': true
    },
    dangerClass: {
      'text-danger': true
    },
    isLarge: true
  }),
  watch: {
  },
  methods: {
  }
})

app.mount('#app')