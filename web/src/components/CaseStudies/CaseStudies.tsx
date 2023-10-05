import { BsCheckCircle } from 'react-icons/bs'
import { FaMagnifyingGlassLocation } from 'react-icons/fa6'

const CaseStudies = () => {
  return (
    <>
      <h1 className="m-4 text-center text-3xl font-semibold">
        Lorem Ipsum La di Da!
      </h1>
      <div className="grid grid-cols-2 gap-4 bg-yellow-100 p-6">
        <div className="m-2 rounded-lg bg-white shadow-md shadow-green-700">
          <FaMagnifyingGlassLocation className="m-4 fill-green-400 text-3xl" />
          <h3 className="m-2 text-xl font-semibold">Measure</h3>
          <p className="m-4  text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            neque expedita voluptates ullam natus reprehenderit libero enim
            sapiente corporis hic cumque incidunt perferendis maxime praesentium
            sunt explicabo, rem vero! Voluptate.
          </p>
        </div>
        <div className="m-2 rounded-md bg-white shadow-md shadow-green-700">
          <BsCheckCircle className="m-4 fill-green-400 text-3xl" />

          <h3 className="m-2 text-xl font-semibold">Gain Insights</h3>
          <p className="m-4  text-slate-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            dolor laborum est sed tenetur at fuga, ad atque ab nemo eaque eius
            corporis, error iure minima quod modi, similique saepe?
          </p>
        </div>
        <div>THIS IS WHERE I'D ADD A SCREENSHOT OF THE REPOrTING</div>
      </div>
    </>
  )
}

export default CaseStudies
