import { DayCard } from './DayCard.js'

// ITINERARY SECTION
export function Itinerary(days) {
  return `
    <section class="px-6 py-10">

      <!-- HEADING -->
      <div class="text-center mb-12">

        <h2 class="text-orange-500 font-bold uppercase tracking-widest">
          Your Itinerary
        </h2>

        <h1 class="text-blue-950 font-extrabold text-4xl mt-3">
          4 Days in Cape Town
        </h1>

        <p class="text-gray-400 mt-3">
          From touchdown to takeoff — every moment of the journey, mapped out.
        </p>

      </div>

      <!-- ITINERARY GRID -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-7 max-w-6xl mx-auto">
        ${days.map(DayCard).join('')}
      </div>

    </section>`
}
