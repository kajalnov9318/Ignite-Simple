


function WeatherCard(w) {
  return `
    <div class="bg-white rounded-2xl p-5 shadow-md text-center">
      <h1 class="text-orange-400 font-bold uppercase">${w.day}</h1>
      <h3 class="text-gray-400 mt-2">${w.date}</h3>
      <h2 class="text-black font-bold text-xl mt-2">${w.high}° / ${w.low}°</h2>
    </div>`
}

export function WeatherStrip(weatherList) {
  return `
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-[85%] mx-auto mt-10 mb-16">
      ${weatherList.map(WeatherCard).join('')}
    </div>`
}
