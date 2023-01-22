const app = Vue.createApp({
  data: () => ({
    message: 'Hello Vue',
    number: 100,
    ok: false
  }),
})

app.mount('#app')