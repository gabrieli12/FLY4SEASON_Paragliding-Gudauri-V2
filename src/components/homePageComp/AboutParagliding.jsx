// linear-to-r from-cyan-400 to-green-700 text-white
const AboutParagliding = () => {
  return (
    <section className="overflow-hidden relative py-20 px-5 flex flex-col justify-center items-center bg-amber-50 bg-[url('./assets/gifs/giphy.gif')] bg-no-repeat bg-size-[300px] bg-center ">


      <p className="text-3xl text-center mt-12" >
        JOIN US FOR THE BEST ADVENTURE OF YOUR LIFE
      </p>
      <p className="text-xl mt-10 text-center" >
        PARAGLIDING WITH A QUALIFIED INSTRUCTOR
      </p>

      <ul
        className="relative overflow-x-hidden w-full grid grid-cols-4 grid-rows-6 justify-items-center items-center p-2 mt-9 max-lg:grid-cols-3 text-center max-md:hidden  "
      >
        <li
          className="item1 text-base tracking-wide opacity-90 animate-textMoveFront col-start-1 row-start-1 pl-[50px]"
        >
          Elevate you adventure
        </li>
        <li
          className="item2 text-base tracking-wide opacity-90 animate-textMoveBack col-start-2 col-end-4 row-start-2 row-end-4 justify-self-start"
        >
          conquer the sky above Gudauri
        </li>
        <li
          className="item3 text-base tracking-wide opacity-90 animate-textMoveBack col-start-3 col-end-5 row-start-5 max-lg:col-3 "
        >
          Feel the rush of the wind beneath your wings
        </li>
        <li
          className="item4 text-center text-base tracking-wide opacity-90 animate-textMoveFront col-start-2 col-end-5 row-start-3 row-end-5"
        >
          savor unparalled sensation
        </li>
        <li
          className="item5 text-base tracking-wide opacity-90 animate-textMoveFront col-start-1 col-end-4 row-start-6"
        >
          surrender to the adrenaline and seize dynamic shots
        </li>
        <li
          className="item6 text-base tracking-wide opacity-90 animate-textMoveFront col-start-3 row-start-1 justify-self-end pr-[50px]"
        >
          Expert instructors
        </li>
        <li
          className="item7 text-base tracking-wide opacity-90 animate-textMoveBack col-start-4 row-start-2 justify-self-start max-lg:col-auto"
        >
          15 years + experiance
        </li>
        <li
          className="item8 text-base tracking-wide opacity-90 animate-textMoveFront col-start-1 row-start-4 mt-[50px] pl-[50px]"
        >
          100% support & protect
        </li>
      </ul>


      <ul
        className="relative overflow-x-hidden w-full grid grid-cols-2 gap-5 justify-items-start items-start p-5 mt-9 md:hidden max-sm:grid-cols-1 list-disc  text-lg max-sm:px-2"
      >
        <li className="max-sm:border-b border-red-400"
          
        >
          Elevate you adventure
        </li>
        <li className="max-sm:border-b border-red-400 border-"
          
        >
          conquer the sky above Gudauri
        </li>
        <li className="max-sm:border-b border-red-400"
        >
          Feel the rush of the wind beneath your wings
        </li>
        <li className="max-sm:border-b border-red-400"
        >
          savor unparalled sensation
        </li>
        <li className="max-sm:border-b border-red-400"
        >
          surrender to the adrenaline and seize dynamic shots
        </li>
        <li className="max-sm:border-b border-red-400"
        >
          Expert instructors
        </li>
        <li className="max-sm:border-b border-red-400"
        >
          15 years + experiance
        </li>
        <li className="max-sm:border-b border-red-400"
        >
          100% support & protect
        </li>
      </ul>
    </section>
  );
};

export default AboutParagliding;
