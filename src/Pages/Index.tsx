export function Index() {
  return (
    <section className="section_hero">
      <div className="relative flex items-center rounded-2xl bg-blue-50 p-8 lg:col-span-2">
        <div className="relative flex items-center rounded-2xl bg-blue-50 p-8 lg:col-span-2">
          {/* Texto */}
          <div className="flex flex-col">
            <h6 className="text-lg font-semibold text-blue-600">
              Up To 50% Off
            </h6>
            <h1 className="text-4xl leading-snug font-bold">
              For Your First <br />
              <span className="text-blue-500">Electo</span> Shopping
            </h1>
            <p className="text-gray-600">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form by injected
              humour.
            </p>
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white shadow transition hover:bg-blue-700"
            >
              Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
          {/* Imágen */}
          <img
            src="/src/assets/img/hero-1.png"
            alt="Hero"
            className="absolute right-8 bottom-0 max-h-72 object-contain"
          />
        </div>
        <div></div>
      </div>
    </section>
  );
}
