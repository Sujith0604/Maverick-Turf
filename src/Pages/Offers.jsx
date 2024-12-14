const Offers = () => {
  return (
    <div className=" flex flex-col p-4">
      <h1 className=" md:text-[10.5vw] text-[40px] font-bold  text-center ">
        OUR{" "}
        <span className=" bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
          OFFERS
        </span>
      </h1>

      <div className="flex items-center justify-center md:justify-around  flex-wrap gap-5 ">
        <a
          href="#"
          className="flex flex-col items-center md:h-[200px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black  shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full  h-96 md:h-auto md:w-48 md:rounded-none "
            src="/images/Hockey-turf.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight ">50% OFF</h5>
            <p className="mb-3  ">
              For the first 20 customers we provide 50% off for hockey
            </p>
          </div>
        </a>

        <a
          href="#"
          className="flex flex-col items-center  md:h-[200px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black  shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full  h-96 md:h-auto md:w-48 md:rounded-none "
            src="/images/ball.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight ">60% OFF</h5>
            <p className="mb-3  ">
              For the first 20 customers we provide 60% off for football.
            </p>
          </div>
        </a>

        <a
          href="#"
          className="flex flex-col items-center  md:h-[200px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black  shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full  h-96 md:h-auto md:w-48 md:rounded-none "
            src="/images/bat.webp"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight ">80% OFF</h5>
            <p className="mb-3  ">
              For the first 5 customers we provide 80% off for cricket
            </p>
          </div>
        </a>

        <a
          href="#"
          className="flex flex-col items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black  shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full  h-96 md:h-auto md:w-48 md:rounded-none "
            src="/images/tt.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight ">Free</h5>
            <p className="mb-3  ">
              For the first 2 customers we provide the table tennis facility
              free.
            </p>
          </div>
        </a>
      </div>

      <h1 className=" md:text-[9vw] text-[32px] font-bold  text-center   bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
        TOURNAMENTS
      </h1>
      <div className="flex items-center justify-center md:justify-around flex-wrap gap-5 ">
        <div className="max-w-sm bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black  shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className=""
              src="/images/Hockey-turf.jpg"
              loading="lazy"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                Hockey 5 vs 5
              </h5>
            </a>
            <p className="mb-3  ">
              This is a 5 vs 5 tournament. You are given 30 min and the team
              with highest goal will be awarded as winners. There is a cash
              prize of 5 thousand.
            </p>
            <a
              href="#"
              className="inline-flex items-center p-4 text-sm font-medium text-center bg-gradient-to-b from-orange-500 to-yellow-300 text-black   focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              KNOW MORE
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
            </a>
          </div>
        </div>

        <div className="max-w-sm h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black  shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="" src="/images/ball.jpg" loading="lazy" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                Football 5 vs 5
              </h5>
            </a>
            <p className="mb-3  ">
              This is a 5 vs 5 tournament. You are given 30 min and the team
              with highest goal will be awarded as winners. There is a cash
              prize of 5 thousand.
            </p>
            <a
              href="#"
              className="inline-flex items-center p-4 text-sm font-medium text-center bg-gradient-to-b from-orange-500 to-yellow-300 text-black   focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              KNOW MORE
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
            </a>
          </div>
        </div>

        <div className="max-w-sm h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black  shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="" src="/images/bat.webp" loading="lazy" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                Cricket 5 vs 5 10-overs
              </h5>
            </a>
            <p className="mb-3  ">
              We are conduction cricket tournaments everymonth and the winning
              will get a cash price of 10 thousand.
            </p>
            <a
              href="#"
              className="inline-flex items-center p-4 text-sm font-medium text-center bg-gradient-to-b from-orange-500 to-yellow-300 text-black   focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              KNOW MORE
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
