const app = Vue.createApp({
  data: () => ({
    largeClass: {
      large: true,
      'bg-gray': true
    },
    dangerClass: {
      'text-danger': true
    },
    isLarge: true,
    color: "blue",
    fontSize: 48,
    styleObject: {
      color: "green",
      fontSize: "60px",
    }
  }),
  watch: {
  },
  methods: {
  }
})

app.mount('#app')