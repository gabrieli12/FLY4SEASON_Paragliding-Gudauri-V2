import { Link } from "react-router-dom";

const PilotCard = ({ name, imageUrl, stats }) => (
  <div
    className="flex flex-col md:flex-row items-start gap-6 p-4"
  >
    <div className="flex flex-col items-start">
      <h1 className="text-5xl font-display font-jersey">Pilot</h1>
      <div
        className="w-[270px] h-[300px] rounded-2xl mt-4 bg-cover bg-center shadow-md max-sm:w-[240px] max-sm:h-[280px]"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <Link to='/about'
        className="text-base mt-2 hover:underline w-full text-center max-md:text-left"
      >
        About More
      </Link>
    </div>
    <div className="mt-16 max-md:mt-3 ">
      <p className="text-3xl font-display mb-9 font-winky">{name}</p>
      <ul className="list-disc list-inside space-y-1 text-gray-700 font-poppins text-lg max-sm:text-base">
        {stats.map((s, i) => (
          <li key={i} >
            {s}
          </li>
        ))}
      </ul>
    </div>
  </div>
);


export default PilotCard