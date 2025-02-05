import { BsCloudSunFill } from "react-icons/bs";
import { Link, navigate, NavLink, routes } from "@redwoodjs/router";

const HeroSection = () => {
  return (
    <section className="bg-yellow-100 bg-auto p-8">
      <BsCloudSunFill className="pb-4 pl-4 fill-yellow-400 text-9xl " />
      <h1 className="p-4 text-4xl font-bold text-slate-800">What data are we looking at?</h1>
      <p className="p-8 text-lg font-semibold text-slate-800">
        NREL's PVWatts® API estimates the energy production of grid-connected photovoltaic (PV) energy systems based on a few simple inputs.
      </p>
      <ul className="list-disc list-inside ml-8">
        <li className="font-bold text-slate-800">Address</li>
        <li className="font-bold text-slate-800">Axis-Tracking</li>
        <li className="font-bold text-slate-800">Capacity</li>
        <li className="font-bold text-slate-800">Angle</li>
      </ul>
      <p className="p-8 text-lg font-semibold text-slate-800">
        Using these simple outputs you get a high level projection of the energy production of a solar system.
      </p>
      <Link
        to={routes.login()}
        className="rounded bg-white px-4 py-2 font-bold text-slate-800 shadow-lg shadow-green-800 hover:bg-green-800 hover:text-white"
        activeClassName="bg-green-800"
      >
        Get Started
      </Link>
    </section>
  );
};

export default HeroSection;
