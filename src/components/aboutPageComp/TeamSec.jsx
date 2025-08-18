import irakliImg from "/images/pilots/irakli.webp";
import lashaImg from "/images/pilots/lasha.webp";
import gelaImg from "/images/pilots/gela.jpg";
import magdaImg from "/images/pilots/magda.jpg";

import { Button } from "../homePageComp/WhoAre";

const teamMembers = [
  {
    name: "Irakli Kaishauri",
    img: irakliImg,
    nationality: "Georgia",
    roles: [
      "Co-Founder of FLY4SEASON.",
      "Flight Director at FLY4SEASON launch pads.",
    ],
    description: [
      "Irakli Kaishauri: born in Georgia, director of the company 4 seasons paragliding.",
      "Graduated from Georgia Technical University Faculty of Engineering in 2008",
      "Successfully completed paragliding courses at the Georgian Paragliding Federation in 2014 and holds an international certificate.",
      "He is a professional pilot instructor with 10 years of experience",
      "Has made nearly 9750 starts.",
    ],
  },
  {
    name: "Lasha Lazviashvili",
    img: lashaImg,
    nationality: "Georgia",
    roles: [
      "Co-Founder of FLY4SEASON.",
      "Flight Director at FLY4SEASON launch pads.",
    ],
    description: [
      "Lasha Lazviashvili Graduated from Georgian Paragliding Federation School.",
      "Has been engaged in paragliding since 2016. One of the first pilots in Gudauri.",
      "Has made nearly 4500 starts.",
      "Has a flight time of minimum 1125 hours.",
    ],
  },
  {
    name: "Gela Abuladze",
    img: gelaImg,
    nationality: "Georgia",
    roles: [],
    description: [
      "Gela Abuladze, 4-season member of the paragliding team, pilot's assistant.",
      "Graduated from Georgia State University in 2014, Faculty of Tourism. Responsible and organized.",
    ],
  },
  {
    name: "Magda Kavtaradze",
    img: magdaImg,
    nationality: "Georgia",
    roles: [],
    description: [
      "Magda Kavtaradze was born in Georgia.",
      "Manager of 'fly4season' company.",
      "Graduated from the Faculty of Psychology. Very communicative and a good organizer.",
    ],
  },
];

const TeamSection = () => {
  return (
    <section className="mt-24 px-4 space-y-16 mb-36">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-start gap-8 p-4 bg-white rounded-xl shadow-md pb-10"
        >
          <div className="flex flex-col items-center lg:w-1/3 text-center">
            <img
              src={member.img}
              alt={`${member.name} - Instructor`}
              className="w-full max-w-xs h-[350px] object-cover rounded-xl"
            />
            <p className="text-2xl font-semibold mt-3" data-aos="fade">
              {member.name}
            </p>
            <div className="flex gap-3 mt-2" data-aos="fade"></div>
          </div>

          <ul className="space-y-2 lg:w-2/3">
            <li className="font-medium" data-aos="fade-right">
              Nationality: {member.nationality}.
            </li>
            {member.roles.map((role, idx) => (
              <li key={idx} className="text-gray-700" data-aos="fade-right">
                {role}
              </li>
            ))}
            <br />
            {member.description.map((desc, idx) => (
              <li key={idx} className="text-gray-600" data-aos="fade">
                {desc}
              </li>
            ))}

            <li className="mt-10 mb-10">
              <a
                href="https://api.whatsapp.com/send/?phone=%2B995598555791&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white "
              >
                <Button value="Contact Us" />
              </a>
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
};

export default TeamSection;
