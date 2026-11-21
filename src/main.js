import './style.css'

import { days, weather } from './data.js'

import { Header } from './components/Header.js'
import { InfoCard } from './components/InfoCard.js'
import { WeatherStrip } from './components/WeatherStrip.js'
import { Itinerary } from './components/Itinerary.js'
import { Footer } from './components/Footer.js'

document.querySelector('#app').innerHTML = `
  ${Header()}
  ${InfoCard()}
  ${WeatherStrip(weather)}
  ${Itinerary(days)}
  ${Footer()}
`

// Lucide icons (data-lucide="...") ko asli icons mein badlo
lucide.createIcons()
