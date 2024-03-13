const Events = () => {
  return (
    <section class="bg-black mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8" id = "events">
      <span class="flex items-center">
        <span class="pr-6">Upcoming Events</span>
        <span class="h-px flex-1 bg-white"></span>
      </span>
      <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div class="mx-auto max-w-xl text-center">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            Shark Tank
            <strong class="font-extrabold text-red-700 sm:block">
              {" "}
              Discover your inner enterpreneaur.{" "}
            </strong>
          </h1>

          <p class="mt-4 sm:text-xl/relaxed">
            Join us @ Idea Incubator MGIT for the most awaited event of the
            year!!
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a
              class="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Register Now
            </a>

            <a
              class="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
