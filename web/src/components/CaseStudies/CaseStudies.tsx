import { useState } from 'react'
import { FaMagnifyingGlassLocation } from 'react-icons/fa6'
import sunScoreOutputs from './sunScoreOutputs.png'

const CaseStudies = () => {
  return (
    <section className="py-6 md:py-8 px-4 md:px-8 flex flex-col">
      <h1 className="mb-4 md:mb-6 text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-800">
        Use real data from weather stations close to your input values.
      </h1>

      <div className="max-w-6xl mx-auto w-full bg-yellow-100 p-4 md:p-6 lg:p-8 rounded-lg flex-grow">
        <div className="flex flex-col h-full items-center rounded-lg bg-white shadow-md shadow-green-700 p-4 md:p-6">
          <div className="w-full flex justify-start mb-2">
            <FaMagnifyingGlassLocation className="text-2xl md:text-3xl fill-green-400" />
          </div>

          <div className="w-full overflow-hidden flex-grow">
            <img
              className="w-full h-auto rounded-md object-cover"
              src={sunScoreOutputs}
              alt="Outputs of simulated solar production showing AnnualAC, AnnuealSolar, and capacity factor figures"
              loading="lazy"
            />
          </div>

          <div className="w-full mt-4 md:mt-6 text-sm md:text-base text-slate-700">
            <p className="font-medium">
              Our detailed analytics provide valuable insights into the solar potential of your location.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Weather data is collected from nearby monitoring stations for accurate projections.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
