function Activity(activity) {
  return `
    <div class="flex items-center gap-4">
      <div class="w-11 h-11 shrink-0 rounded-full border-2 border-orange-400 flex items-center justify-center">
        <i data-lucide="${activity.icon}" class="w-5 h-5 text-blue-950"></i>
      </div>

      <p class="font-semibold text-blue-950">
        ${activity.text}
      </p>
    </div>`
}

// Dashed line between activities
const Line = `
  <div class="border-l-2 border-dashed border-orange-400 h-7 ml-5"></div>
`

export function DayCard(day) {
  return `
    <div class="rounded-3xl shadow-xl overflow-hidden">

      <div class="h-1.5 bg-linear-to-r from-orange-500 to-amber-400"></div>

      <div class="p-8">

        <span class="inline-block bg-blue-950 text-white px-4 py-2 rounded-full font-bold text-sm">
          Day ${day.day}
        </span>

        <p class="text-orange-500 mt-5">
          ${day.date}
        </p>

        <h2 class="text-blue-950 font-bold text-2xl uppercase mt-2">
          ${day.title}
        </h2>

        <p class="text-gray-500 italic mt-1">
          ${day.subtitle}
        </p>

        <div class="mt-7">
          ${day.activities.map((activity, index) => `
            ${Activity(activity)}
            ${index !== day.activities.length - 1 ? Line : ""}
          `).join("")}
        </div>

      </div>
    </div>`
}