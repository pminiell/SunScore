import { BsCloudSunFill } from "react-icons/bs";
import { Link, navigate, NavLink, routes } from "@redwoodjs/router";

const HeroSection = () => {
  return (
    <section className="bg-yellow-100 bg-auto p-4 md:p-8 flex flex-col items-center md:items-start">
      <div className="w-full flex justify-center md:justify-start">
        <BsCloudSunFill className="text-6xl md:text-9xl fill-yellow-400 pb-2 md:pb-4 pl-0 md:pl-4" />
      </div>

      <h1 className="p-2 md:p-4 text-2xl md:text-4xl font-bold text-slate-800 text-center md:text-left">
        What data are we looking at?
      </h1>

      <p className="p-4 md:p-8 text-md md:text-lg font-semibold text-slate-800 text-center md:text-left">
        NREL's PVWatts® API estimates the energy production of grid-connected photovoltaic (PV) energy systems based on a few simple inputs.
      </p>

      <ul className="list-disc list-inside ml-4 md:ml-8 w-full max-w-md">
        <li className="font-bold text-slate-800">Address</li>
        <li className="font-bold text-slate-800">Axis-Tracking</li>
        <li className="font-bold text-slate-800">Capacity</li>
        <li className="font-bold text-slate-800">Angle</li>
      </ul>

      <p className="p-4 md:p-8 text-md md:text-lg font-semibold text-slate-800 text-center md:text-left">
        Using these simple outputs you get a high level projection of the energy production of a solar system.
      </p>

      <div className="w-full flex justify-center md:justify-start md:pl-8 mt-4">
        <Link
          to={routes.login()}
          className="rounded bg-white px-4 py-2 font-bold text-slate-800 shadow-lg shadow-green-800 hover:bg-green-800 hover:text-white transition-colors duration-300"
          activeClassName="bg-green-800 text-white"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
