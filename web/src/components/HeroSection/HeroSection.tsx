import { BsCloudSunFill } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section className="bg-yellow-100 w-full">
      <BsCloudSunFill className="mb-4 ml-4 fill-yellow-400 text-9xl " />
      <div className="">
        <h1 className="m-4 text-4xl font-bold text-slate-800">Our Mission</h1>
        <p className="m-8 text-lg font-semibold text-slate-600">
          We strive to provide the best possible service to our customers and
          make their lives easier.
        </p>
        <h1>this is reflected</h1>
        <button className="m-4 rounded bg-white px-4 py-2 font-bold text-slate-800 shadow-lg shadow-green-800 hover:bg-green-800 hover:text-white">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
