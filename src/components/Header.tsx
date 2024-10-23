import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import React from "react";

export default function Header() {
  return (
    <>
      <Head>
        <>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* Favicon icon*/}
          <link
            rel="shortcut icon"
            type="image/png"
            href="./images/logos/favicon.png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.44.0/tabler-icons.min.css"
          />
          {/* Core Css */}
          <title>Modernize TailwindCSS HTML Admin Template</title>
        </>
      </Head>

      <header className="container full-container w-full max-w-full text-sm py-5 xl:px-9 px-5 top-0 z-20">
        <link rel="stylesheet" href="/css/theme.css" />

        {/* ========== HEADER ========== */}
        <nav
          className="w-full flex items-center justify-between"
          aria-label="Global"
        >
          <ul className="icon-nav flex items-center gap-4 ">
            <li className="relative xl:hidden">
              <a
                className="text-xl  icon-hover cursor-pointer text-heading"
                id="headerCollapse"
                data-hs-overlay="#application-sidebar-brand"
                aria-controls="application-sidebar-brand"
                aria-label="Toggle navigation"
                href="javascript:void(0)"
              >
                <i className="ti ti-menu-2 relative z-1" />
              </a>
            </li>
            <li className="relative">
              <div className="hs-dropdown relative inline-flex [--placement:bottom-left] sm:[--trigger:hover]">
                <a
                  className="relative hs-dropdown-toggle inline-flex  icon-hover text-gray-600"
                  href="#"
                >
                  <i className="ti ti-bell-ringing text-xl relative z-[1]" />
                  <div className="absolute inline-flex items-center justify-center  text-white text-[11px] font-medium  bg-blue-600 w-2 h-2 rounded-full -top-[1px] -right-[6px]"></div>
                </a>
                <div
                  className="card hs-dropdown-menu transition-[opacity,margin] border border-gray-400 rounded-md duration hs-dropdown-open:opacity-100 opacity-0 mt-2 min-w-max  w-[300px] hidden z-[12]"
                  aria-labelledby="hs-dropdown-custom-icon-trigger"
                >
                  <div>
                    <h3 className="text-gray-600 font-semibold text-base px-6 py-3">
                      Notification
                    </h3>
                    <ul className="list-none  flex flex-col">
                      <li>
                        <a
                          href="#"
                          className="py-3 px-6 block hover:bg-blue-500"
                        >
                          <p className="text-sm text-gray-600 font-semibold">
                            Roman Joined the Team!
                          </p>
                          <p className="text-xs text-gray-500 font-medium">
                            Congratulate him
                          </p>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="py-3 px-6 block hover:bg-blue-500"
                        >
                          <p className="text-sm text-gray-600 font-semibold">
                            New message received
                          </p>
                          <p className="text-xs text-gray-500 font-medium">
                            Salma sent you new message
                          </p>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="py-3 px-6 block hover:bg-blue-500"
                        >
                          <p className="text-sm text-gray-600 font-semibold">
                            New Payment received
                          </p>
                          <p className="text-xs text-gray-500 font-medium">
                            Check your earnings
                          </p>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="py-3 px-6 block hover:bg-blue-500"
                        >
                          <p className="text-sm text-gray-600 font-semibold">
                            Jolly completed tasks
                          </p>
                          <p className="text-xs text-gray-500 font-medium">
                            Assign her new tasks
                          </p>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="py-3 px-6 block hover:bg-blue-500"
                        >
                          <p className="text-sm text-gray-600 font-semibold">
                            Roman Joined the Team!
                          </p>
                          <p className="text-xs text-gray-500 font-medium">
                            Congratulate him
                          </p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="btn font-medium hover:bg-blue-700 py-2"
              aria-current="page"
            >
              Download Free
            </a>
            <div className="hs-dropdown relative inline-flex [--placement:bottom-right] sm:[--trigger:hover]">
              <a className="relative hs-dropdown-toggle cursor-pointer align-middle rounded-full">
                <img
                  className="object-cover w-9 h-9 rounded-full"
                  src="./images/profile/user-1.jpg"
                  alt=""
                  aria-hidden="true"
                />
              </a>
              <div
                className="card hs-dropdown-menu transition-[opacity,margin] border border-gray-400 rounded-[7px] duration hs-dropdown-open:opacity-100 opacity-0 mt-2 min-w-max  w-[200px] hidden z-[12]"
                aria-labelledby="hs-dropdown-custom-icon-trigger"
              >
                <div className="card-body p-0 py-2">
                  <a
                    href="javscript:void(0)"
                    className="flex gap-2 items-center px-4 py-[6px] hover:bg-blue-500"
                  >
                    <i className="ti ti-user text-gray-500 text-xl " />
                    <p className="text-sm text-gray-500">My Profile</p>
                  </a>
                  <a
                    href="javscript:void(0)"
                    className="flex gap-2 items-center px-4 py-[6px] hover:bg-blue-500"
                  >
                    <i className="ti ti-mail text-gray-500 text-xl" />
                    <p className="text-sm text-gray-500">My Account</p>
                  </a>
                  <a
                    href="javscript:void(0)"
                    className="flex gap-2 items-center px-4 py-[6px] hover:bg-blue-500"
                  >
                    <i className="ti ti-list-check text-gray-500 text-xl " />
                    <p className="text-sm text-gray-500">My Task</p>
                  </a>
                  <div className="px-4 mt-[7px] grid">
                    <Link
                      href={"/login"}
                      className="btn-outline-primary w-full hover:bg-blue-600 hover:text-white"
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* ========== END HEADER ========== */}
      </header>

      <Script src="./libs/jquery/dist/jquery.min.js"></Script>
      <Script src="./libs/simplebar/dist/simplebar.min.js"></Script>
      <Script src="./libs/iconify-icon/dist/iconify-icon.min.js"></Script>
      <Script src="./libs/@preline/dropdown/index.js"></Script>
      <Script src="./libs/@preline/overlay/index.js"></Script>
      <Script src="./js/sidebarmenu.js"></Script>

      <Script src="./libs/apexcharts/dist/apexcharts.min.js"></Script>
      <Script src="./js/dashboard.js"></Script>
    </>
  );
}
