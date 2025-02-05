import { BsCheckCircle } from 'react-icons/bs'
import { FaMagnifyingGlassLocation } from 'react-icons/fa6'
import sunScoreOutputs from './sunScoreOutputs.png'

const CaseStudies = () => {
  return (
    <>
      <h1 className="m-4 text-center text-3xl font-semibold">
        Use real data from weather stations close to your input values.
      </h1>
      <div className="grid grid-cols-1 place-items-center bg-yellow-100 p-6">
        <div className="m-2 rounded-lg bg-white shadow-md shadow-green-700">
          <FaMagnifyingGlassLocation className="m-4 fill-green-400 text-3xl" />
          <img className="m-4" src={sunScoreOutputs} alt="Outputs of simulated solar production showing AnnualAC, AnnuealSolar, and capacity factor figures"></img>
        </div>
      </div>
    </>
  )
}

export default CaseStudies
