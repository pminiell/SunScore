import { BsGraphUpArrow } from 'react-icons/bs'
import { FcCollect } from 'react-icons/fc'
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia'

const Features = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-green-400 p-4 sm:p-6">
      <div className="m-2 rounded-lg bg-white shadow-md shadow-green-700 p-3">
        <div className="flex items-center">
          <FcCollect className="m-2 bg-green-400 text-2xl sm:text-3xl" />
          <h3 className="text-lg sm:text-xl font-semibold">Measure</h3>
        </div>
        <p className="mt-2 text-sm sm:text-base text-slate-500 line-clamp-4 sm:line-clamp-none">
          Accurately measure and monitor your solar energy production with our advanced tools. Get real-time data and insights to ensure your system is performing at its best.
        </p>
      </div>

      <div className="m-2 rounded-md bg-white shadow-md shadow-green-700 p-3">
        <div className="flex items-center">
          <BsGraphUpArrow className="m-2 bg-green-400 text-2xl sm:text-3xl" />
          <h3 className="text-lg sm:text-xl font-semibold">Gain Insights</h3>
        </div>
        <p className="mt-2 text-sm sm:text-base text-slate-500 line-clamp-4 sm:line-clamp-none">
          Analyze your solar energy data to gain valuable insights. Understand your energy usage patterns and identify opportunities for optimization and savings.
        </p>
      </div>

      <div className="m-2 rounded-md bg-white shadow-md shadow-green-700 p-3 sm:col-span-2 lg:col-span-1">
        <div className="flex items-center">
          <LiaFileInvoiceDollarSolid className="m-2 bg-green-400 text-2xl sm:text-3xl" />
          <h3 className="text-lg sm:text-xl font-semibold">Improve</h3>
        </div>
        <p className="mt-2 text-sm sm:text-base text-slate-500 line-clamp-4 sm:line-clamp-none">
          Implement data-driven improvements to enhance your solar energy system's efficiency. Maximize your return on investment and contribute to a sustainable future.
        </p>
      </div>
    </div>
  )
}

export default Features
