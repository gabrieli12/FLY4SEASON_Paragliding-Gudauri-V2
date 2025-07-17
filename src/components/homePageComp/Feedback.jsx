import React from "react";
import mainLogo from '../../assets/under-300px/site-main-logo.svg'
import smith from '../../assets/under-300px/guests/smith wilson.jpeg'
import ahmad from '../../assets/under-300px/guests/Ahmad Jurri.png'
import dave from '../../assets/under-300px/guests/Dave Garcia.png'
import vladimir from '../../assets/under-300px/guests/Vladimir.png'



const feedbackData = [
  {
    name: "Smith Wilson",
    image: smith,
    comment:
      "It’s wonderful experience with brave heart peoples hope fully next time i will come and do it againThanks a lot all 4 seasonParagliding",
  },
  {
    name: "Ahmad Jurri",
    image: ahmad,
    comment:
      "The team very professional. Great experience . I will safe with the guide. All I need it only to enjoy the view. Thanks a lot,",
  },
  {
    name: "Dave Garcia",
    image: dave,
    comment:
      "a year ago One of the best things to do at Gudauri. Highly recommend, unforgettable views and really professional team!🤝🪂",
  },
  {
    name: "Vladimir",
    image: vladimir,
    comment:
      "The best paragliding experience of my life and definitely the best experience of our Georgia trip. Definitely recommend this lifetime experience.",
  },
  {
    name: "Saad Tariq",
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocLnmIpSJcUvka6vf-GsF-wxdBAGof2ou59eqXiWVTU7ZWttZg=w45-h45-p-rp-mo-br100",
    comment:
      "Amazing paragliding tandem flight experience today with them in Gudauri. Mr. Ika from the team was my tandem partner... Very enjoyable experience overall.",
  },
  {
    name: "Zhiena Munoz",
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocJ_LsmYenzG12HTP1lC71Q0htIj4-tzfOn4TLSMRCV9_G3oFQ=w75-h75-p-rp-mo-br100",
    comment:
      "Wonderful experience! A must try activity in (Gudauri) Georgia. The view is breathtaking! The paragliding team are all professionals and helpful! Thank you.",
  },
  {
    name: "Singletrack - Mountain Biking Tours In Georgia",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjWqPfUbqY1wsHPZ0aWx70t9PHx5yw6uk4XvJJAY-xWONVWa3TGO=w75-h75-p-rp-mo-br100",
    comment:
      "We had an amazing tandem paragliding experience with the 4 season paragliding team. Thanks for the great memories 🤘 …",
  },
  {
    name: "Harmen Veenbrink",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXZT0GykCY1uR-w5kDewmoLpnMH6xjdgUE0SK0G5mrN8c9uI6xT=w75-h75-p-rp-mo-br100",
    comment: "We had a very nice flight over the mountains. The video by a GoPro was included.",
  },
  {
    name: "Mohmamed Tayea",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjWBrUrJqxi0EuStM9BhSzarvgKT-e-jbkkST9G38iyMOz3JModI=w45-h45-p-rp-mo-br100",
    comment: "The best Paragliding i have ever had in my life. Ika & Lasha are the best pilots",
  },
  {
    name: "Alex Nadibaidze",
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocK28MrWVwclC6PgDuquwkLZrjOyC1KEPkxJMQQVKIxJ8e47KA=w45-h45-p-rp-mo-ba2-br100",
    comment: "I had a great experience with this guys, they did the best job",
  },
  {
    name: "Yoav Porat",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjW_C-jwau5ZZdIjr2BlIYv0j_6hujXQjdGYQbMyxQof4IxfCPzxsA=w45-h45-p-rp-mo-ba3-br100",
    comment:
      "אחלה חברה, נחמדים, מקצועיים, רגועים. עשינו 3 קייט, 2 ילדות בנות 8, 10 ואשתי. מאוד נהנו. רק לתאם מראש ציפיות.",
  },
  {
    name: "Simona Lewandowska",
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocKrmKbolJM5bETV-minktrTdvWyjvXXooMwXwWTfGu8okILuw=w45-h45-p-rp-mo-br100",
    comment:
      "Kluci byli skvělý. Skvělá, snadná a rychlá komunikace. Video poslali ještě ten večer. Bezva zážitek, rozhodně doporučuju.:)",
  },
];

const Feedback = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-5 mb-36 py-10">
      <h2
        className="text-3xl tracking-wide text-center p-2"
      >
        Feedback from our Guests <br /> ⭐⭐⭐⭐⭐
      </h2>

      <div className="flex flex-wrap justify-center items-start gap-24 p-2 mt-20">
        <div className="bg-lime-100/10 rounded-xl p-2 h-[500px] overflow-y-scroll" >
          {feedbackData.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3"
            >
              <img
                src={item.image}
                alt={`Profile picture of guest - ${item.name}`}
                className="rounded-full w-11 h-11 object-cover border border-gray-400"
              />
              <div>
                <p className="text-sm font-bold text-green-900">{item.name}</p>
                <p className="text-[0.9rem] leading-6 max-w-md px-1">
                  <span className="text-lg">⭐⭐⭐⭐⭐</span> 
                  {item.comment}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col items-center justify-center text-center p-5 mt-10"
        >
          <p className="text-[1.7rem] font-sans leading-9">
            Paragliding in Georgia / Gudauri <br />{" "}
            <b>FLY4SEASON</b> Paragliding
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B995598555791&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mainLogo}
              alt="FLY4SEASON Paragliding Gudauri Georgia - Official Logo"
              className="w-32 h-32"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
