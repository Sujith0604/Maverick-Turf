import { useState } from "react";

const Offers = () => {
  const games = [
    {
      id: 1,
      title: " Hockey 5 vs 5",
      image: "/images/Hockey-turf.jpg",
      description:
        "This is a 5 vs 5 tournament. You are given 30 min and the team with highest goal will be awarded as winners. There is a cash prize of 5 thousand.",
      buttonText: "KNOW MORE",
    },
    {
      id: 2,
      title: "Football 5 vs 5",
      image: "/images/ball.jpg",
      description:
        "This is a 5 vs 5 tournament. You are given 30 min and the team with highest goal will be awarded as winners. There is a cash prize of 5 thousand.",
      buttonText: "KNOW MORE",
    },
    {
      id: 3,
      title: "Cricket 5 vs 5 10-overs",
      image: "/images/bat.webp",
      description:
        "We are conduction cricket tournaments everymonth and the winning will get a cash price of 10 thousand.",
      buttonText: "KNOW MORE",
    },
  ];

  const [opengId, setOpengId] = useState(null);
  let selectedGame = games.find((g) => g.id === opengId);

  return (
    <section id="offers" className=" flex flex-col p-4">
      <h1 className=" md:text-[10.5vw] text-[40px] font-bold  text-center ">
        OUR{" "}
        <span className=" bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
          OFFERS
        </span>
      </h1>

      <div className="flex items-center justify-center md:justify-around  flex-wrap gap-5 ">
        <div className="flex flex-col items-center md:h-[200px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black  shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full  h-96 md:h-auto md:w-48 md:rounded-none "
            src="/images/Hockey-turf.jpg"
            alt="hockey"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight ">50% OFF</h5>
            <p className="mb-3  ">
              For the first 20 customers we provide 50% off for hockey
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center  md:h-[200px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black  shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full  h-96 md:h-auto md:w-48 md:rounded-none "
            src="/images/ball.jpg"
            alt="football"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight ">60% OFF</h5>
            <p className="mb-3  ">
              For the first 20 customers we provide 60% off for football.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center  md:h-[200px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black  shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full  h-96 md:h-auto md:w-48 md:rounded-none "
            src="/images/bat.webp"
            alt="bat"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight ">80% OFF</h5>
            <p className="mb-3  ">
              For the first 5 customers we provide 80% off for cricket
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black  shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full  h-96 md:h-auto md:w-48 md:rounded-none "
            src="/images/tt.jpg"
            alt="tabletennis"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight ">Free</h5>
            <p className="mb-3  ">
              For the first 2 customers we provide the table tennis facility
              free.
            </p>
          </div>
        </div>
      </div>

      <h1 className=" md:text-[9vw] text-[32px] font-bold  text-center   bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
        TOURNAMENTS
      </h1>
      <div className="flex items-center justify-center md:justify-around flex-wrap gap-5 ">
        {games.map((g) => {
          return (
            <div
              key={g.id}
              className="max-w-sm bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black  shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div>
                <img className="" src={g.image} loading="lazy" alt={g.title} />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                  {g.title}
                </h5>

                <p className="mb-3  ">
                  {" "}
                  {g.description.length > 20
                    ? g.description.substring(0, 20) + "..."
                    : g.description}{" "}
                </p>
                <button
                  onClick={() => {
                    setOpengId(g.id);
                  }}
                  aria-label="model"
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

        {selectedGame && (
          <div className=" fixed inset-0 text-black  bg-black bg-opacity-55 backdrop-blur-sm flex items-center justify-center z-10 ">
            <div className=" md:w-[400px] w-[300px] max-w-md p-6 bg-white rounded-lg shadow-md">
              <div className="flex flex-col gap-5 justify-between">
                <h3 className="text-xl font-bold ">{selectedGame.title}</h3>
                <p className=" text-sm">{selectedGame.description}</p>

                <button
                  onClick={() => setOpengId(null)}
                  aria-label="close"
                  className="text-sm text-gray-500 hover:text-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Offers;
