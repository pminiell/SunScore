import { BsCloudSunFill } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section className="bg-yellow-100 bg-auto">
      <BsCloudSunFill className="mb-4 ml-4 fill-yellow-400 text-9xl " />
      <div className="">
        <h1 className="m-4 text-4xl font-bold text-slate-800">What data are we looking at?</h1>
        <p className="m-8 text-lg font-semibold text-slate-800">
          NREL's PVWatts® API estimates the energy production of grid-connected photovoltaic (PV) energy systems based on a few simple inputs.
        </p>
        <ul className="list-disc list-inside p-2">
          <li className="font-bold text-slate-800">Address</li>
          <li className="font-bold text-slate-800">Axis-Tracking</li>
          <li className="font-bold text-slate-800">Capacity</li>
          <li className="font-bold text-slate-800">Angle</li>
        </ul>
        <button className="m-4 rounded bg-white px-4 py-2 font-bold text-slate-800 shadow-lg shadow-green-800 hover:bg-green-800 hover:text-white">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
