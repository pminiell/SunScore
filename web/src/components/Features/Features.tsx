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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          neque expedita voluptates ullam natus reprehenderit libero enim
          sapiente corporis hic cumque incidunt perferendis maxime praesentium
          sunt explicabo, rem vero! Voluptate.
        </p>
      </div>
      <div className="m-2 rounded-md bg-white shadow-md shadow-green-700">
        <BsGraphUpArrow className="m-4 bg-green-400 text-3xl" />

        <h3 className="m-2 text-xl font-semibold">Gain Insights</h3>
        <p className="m-4  text-slate-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          dolor laborum est sed tenetur at fuga, ad atque ab nemo eaque eius
          corporis, error iure minima quod modi, similique saepe?
        </p>
      </div>
      <div className="m-2 rounded-md bg-white shadow-md shadow-green-700">
        <LiaFileInvoiceDollarSolid className="m-4 bg-green-400 text-3xl" />
        <h3 className="m-2 text-xl font-semibold">Improve</h3>
        <p className="m-4 text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magni
          optio, doloremque maiores dolorum quos sit aperiam, illum obcaecati
          odio ab quasi illo repellat nobis! Necessitatibus nisi eveniet
          recusandae ab.
        </p>
      </div>
    </div>
  )
}

export default Features
