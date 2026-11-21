// HOTEL INFORMATION CARD
export function InfoCard() {
  return `
    <div class="bg-white relative -mt-16 mx-auto w-[90%] rounded-3xl p-8 shadow-2xl">

      <div class="flex flex-col md:flex-row justify-between gap-6 ">

        <div>
          <h1 class="text-blue-950 text-xl font-extrabold">
            Pullman Cape Town
          </h1>

          <p class="text-gray-400 mt-2">
            22 Riebeek St, Cape Town City Centre,
            <br>
            Cape Town, 8000, South Africa
          </p>
        </div>

        <div class="md:text-right">
          <h3 class="text-orange-500 font-medium">
            Program Dates
          </h3>

          <h2 class="text-black font-extrabold text-xl">
            10 – 13 September 2026
          </h2>
        </div>

      </div>

      <div class="border-t border-dashed border-gray-300 mt-6 pt-6 text-center">
        <h2 class="text-black font-bold">
          What a trip! See you at the next IGNITE program.
        </h2>
      </div>

    </div>`
}
