import { createApp } from 'vue'
import App from './App.vue'
import routes from "./routes";
import './styles/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faSearch, faTimes, faFacebook, faInstagram, faTwitter, faYoutube, faTiktok)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(routes)
app.mount('#app')
