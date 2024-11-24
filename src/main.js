import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const changeName = (name) => {
    return name.split('').reverse().join('-')
}

console.log(changeName('John Doe'))
