import Btn from "@/app/Components/Btn/Btn";
import React from "react";

const Faq = () => {
  return (
    <div className="Faq">
      <div className="p-10">
        <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div className="">
            <h6 className="text-sm font-extrabold text-[#FF9B00]">FAQ</h6>
            <h1 className="text-3xl font-extrabold mt-3 text-[#4C6444]">
              Frequently <br />
              Asked <br />
              Questions.
            </h1>
          </div>
          <div className="">
            <h2 className="text-[#707070] text-lg font-semibold">
              Ask Anything
            </h2>
            <p className="mt-5 text-[#707070] text-sm">
              Explore our FAQ section for answers to common queries about our
              Leathercraft and leather services. Still have questions? Contact
              us for personalized assistance.
            </p>
            <div className="mt-10 border border-b border-[#707070]"></div>
          </div>
        </div>
        <div className="mt-5">
          <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            <div className="">
              <Btn text="Ask A Different Question" />
            </div>
            <div className="">
              {/* Accordion */}
              <div
                id="accordion-flush"
                data-accordion="collapse"
                data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                data-inactive-classes="text-gray-500 dark:text-gray-400"
              >
                <h2 id="accordion-flush-heading-1">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                    data-accordion-target="#accordion-flush-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-flush-body-1"
                  >
                    <span>How can I place an order?</span>
                    <svg
                      data-accordion-icon
                      className="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-1"
                  className="hidden"
                  aria-labelledby="accordion-flush-heading-1"
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Check out this guide to learn how to{" "}
                      <a
                        href="/docs/getting-started/introduction/"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        get started
                      </a>{" "}
                      and start developing websites even faster with components
                      on top of Tailwind CSS.
                    </p>
                  </div>
                </div>
                <h2 id="accordion-flush-heading-2">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                    data-accordion-target="#accordion-flush-body-2"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-2"
                  >
                    <span>What payment methods do you accept?</span>
                    <svg
                      data-accordion-icon
                      className="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-2"
                  className="hidden"
                  aria-labelledby="accordion-flush-heading-2"
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Flowbite is first conceptualized and designed using the
                      Figma software so everything you see in the library has a
                      design equivalent in our Figma file.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Check out the{" "}
                      <a
                        href="https://flowbite.com/figma/"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Figma design system
                      </a>{" "}
                      based on the utility classNamees from Tailwind CSS and
                      components from Flowbite.
                    </p>
                  </div>
                </div>
                <h2 id="accordion-flush-heading-3">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                    data-accordion-target="#accordion-flush-body-3"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-3"
                  >
                    <span>Can I customize my order?</span>
                    <svg
                      data-accordion-icon
                      className="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-3"
                  className="hidden"
                  aria-labelledby="accordion-flush-heading-3"
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      The main difference is that the core components from
                      Flowbite are open source under the MIT license, whereas
                      Tailwind UI is a paid product. Another difference is that
                      Flowbite relies on smaller and standalone components,
                      whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      However, we actually recommend using both Flowbite,
                      Flowbite Pro, and even Tailwind UI as there is no
                      technical reason stopping you from using the best of two
                      worlds.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Learn more about these technologies:
                    </p>
                    <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                      <li>
                        <a
                          href="https://flowbite.com/pro/"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Flowbite Pro
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://tailwindui.com/"
                          rel="nofollow"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Tailwind UI
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
