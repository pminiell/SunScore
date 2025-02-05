import { BsGraphUpArrow } from 'react-icons/bs'
import { FcCollect } from 'react-icons/fc'
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia'

const Features = () => {
  return (
    <div className="grid grid-cols-3 gap-4 bg-green-400 p-6">
      <div className="m-2 rounded-lg bg-white shadow-md shadow-green-700">
        <FcCollect className="m-4 bg-green-400 text-3xl" />
        <h3 className="m-2 text-xl font-semibold">Measure</h3>
        <p className="m-4  text-slate-500">
          Accurately measure and monitor your solar energy production with our advanced tools. Get real-time data and insights to ensure your system is performing at its best.
        </p>
      </div>
      <div className="m-2 rounded-md bg-white shadow-md shadow-green-700">
        <BsGraphUpArrow className="m-4 bg-green-400 text-3xl" />

        <h3 className="m-2 text-xl font-semibold">Gain Insights</h3>
        <p className="m-4  text-slate-500">
          Analyze your solar energy data to gain valuable insights. Understand your energy usage patterns and identify opportunities for optimization and savings.
        </p>
      </div>
      <div className="m-2 rounded-md bg-white shadow-md shadow-green-700">
        <LiaFileInvoiceDollarSolid className="m-4 bg-green-400 text-3xl" />
        <h3 className="m-2 text-xl font-semibold">Improve</h3>
        <p className="m-4 text-slate-500">
          Implement data-driven improvements to enhance your solar energy system's efficiency. Maximize your return on investment and contribute to a sustainable future.
        </p>
      </div>
    </div>
  )
}

export default Features
