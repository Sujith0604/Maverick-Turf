import { useState } from "react";

const WhyUs = () => {
  const [opendId, setOpendId] = useState(null);
  const [opengId, setOpengId] = useState(null);

  const data = [
    {
      id: 1,
      title: "Friendly Staffs",
      description:
        "Our staffs are always there to help you for booking and also formanaging the tournament and games.",
      buttonText: "KNOW MORE",
    },
    {
      id: 2,
      title: "No waiting",
      description:
        "In other turf ou need to wait till the previous customer vacate the turf but in ours as you book the turf you can visit at the booked timing and start uout play.",
      buttonText: "KNOW MORE",
    },
    {
      id: 3,
      title: "Secure Booking",
      description:
        "Your booking details and payment are secured no need to worry about it. You are always secured during your payments.",
      buttonText: "KNOW MORE",
    },
  ];

  const games = [
    {
      id: 1,
      title: "Cricket",
      image: "/images/bat.webp",
      description:
        "   We have cricket in our turf. You no need to worry about the bat, stumps, ball and the pitch. We provide you all the necessary think. The only think you have to do is book our turf.",
      buttonText: "KNOW MORE",
    },
    {
      id: 2,
      title: "Hockey",
      image: "/images/Hockey-turf.jpg",
      description:
        "We have hockey in our turf. You no need to worry about the bat, ball and the pitch. We provide you all the necessary think. The only think you have to do is book our turf.",
      buttonText: "KNOW MORE",
    },
    {
      id: 3,
      title: " Football",
      image: "/images/ball.jpg",
      description:
        " We have football in our turf. You no need to worry about the ball and goal post. We provide you all the necessary think. The only think you have to do is book our turf.",
      buttonText: "KNOW MORE",
    },
  ];

  let selectedData = data.find((d) => d.id === opendId);
  let selectedGame = games.find((g) => g.id === opengId);

  return (
    <section
      id="whyus"
      className=" flex flex-col gap-11 items-center justify-center  "
    >
      <div className=" flex flex-col gap-11">
        <h1 className=" md:text-[10.5vw] text-[40px] font-bold  text-center">
          WHY{" "}
          <span className=" bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
            US?
          </span>
        </h1>
        <p className=" text-center md:text-start">
          What sets us apart is our commitment to user engagement and
          collaboration with turf operators nationwide. We believe in building
          partnerships that not only benefit our users but also support local
          businesses. Our platform is designed not just for booking but for
          creating memorable sporting experiences.
        </p>

        <div className="flex items-center justify-center md:justify-around flex-wrap gap-5">
          {data.map((d) => {
            return (
              <div
                key={d.id}
                className="w-[300px] rounded-3xl h-[150px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black  "
              >
                <div className="p-5 flex flex-col items-center justify-center gap-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                    {d.title}
                  </h5>

                  <button
                    onClick={() => {
                      setOpendId(d.id);
                    }}
                    className="inline-flex items-center p-4 text-sm font-medium text-center bg-gradient-to-b from-orange-500 to-yellow-300 text-black   focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {d.buttonText}
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {selectedData && (
          <div className=" fixed inset-0 text-black  bg-black bg-opacity-55 backdrop-blur-sm flex items-center justify-center z-10 ">
            <div className=" md:w-[400px] w-[300px] max-w-md p-6 bg-white rounded-lg shadow-md">
              <div className="flex flex-col gap-5 justify-between">
                <h3 className="text-xl font-bold ">{selectedData.title}</h3>
                <p className=" text-sm">{selectedData.description}</p>

                <button
                  onClick={() => setOpendId(null)}
                  className="text-sm text-gray-500 hover:text-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <h1 className=" md:text-[5vw] text-[30px] font-bold  text-center md:text-start">
        WHAT WE{" "}
        <span className=" bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
          HAVE?
        </span>
      </h1>

      <div className="flex items-center  justify-center gap-5 md:justify-around  w-full flex-wrap">
        {games.map((g) => {
          return (
            <div
              key={g.id}
              className="max-w-sm bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
            >
              <img className="" src={g.image} loading="lazy" alt="" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                  {g.title}
                </h5>

                <p className="mb-3  ">
                  {g.description.length > 20
                    ? g.description.substring(0, 20) + "..."
                    : g.description}{" "}
                </p>
                <button
                  onClick={() => {
                    setOpengId(g.id);
                  }}
                  className="inline-flex items-center p-4 text-sm font-medium text-center bg-gradient-to-b from-orange-500 to-yellow-300 text-black   focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {g.buttonText}
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedGame && (
        <div className=" fixed inset-0 text-black  bg-black bg-opacity-55 backdrop-blur-sm flex items-center justify-center z-10 ">
          <div className=" md:w-[400px] w-[300px] max-w-md p-6 bg-white rounded-lg shadow-md">
            <div className="flex flex-col gap-5 justify-between">
              <h3 className="text-xl font-bold ">{selectedGame.title}</h3>
              <p className=" text-sm">{selectedGame.description}</p>

              <button
                onClick={() => setOpengId(null)}
                className="text-sm text-gray-500 hover:text-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyUs;
