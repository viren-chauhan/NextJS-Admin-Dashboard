import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import React from "react";

function Sidebar() {
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

      <aside
        id="application-sidebar-brand"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full  transform hidden xl:block xl:translate-x-0 xl:end-auto xl:bottom-0 top-0 with-vertical h-screen z-[999] flex-shrink-0 border-r-[1px] w-[270px] border-gray-400  bg-white left-sidebar   transition-all duration-300 sticky"
      >
        <link rel="stylesheet" href="/css/theme.css" />
        {/* ---------------------------------- */}
        {/* Start Vertical Layout Sidebar */}
        {/* ---------------------------------- */}
        <div className="p-5">
          <Link href={"/"} className="text-nowrap">
            <img src="./images/logos/dark-logo.svg" alt="Logo-Dark" />
          </Link>
        </div>
        <div className="scroll-sidebar" data-simplebar="">
          <div className="px-6 mt-8">
            <nav className=" w-full flex flex-col sidebar-nav">
              <ul id="sidebarnav" className="text-gray-600 text-sm">
                <li className="text-xs font-bold pb-4">
                  <i className="ti ti-dots nav-small-cap-icon text-lg hidden text-center" />
                  <span>HOME</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link gap-3 py-2 px-3  rounded-md  w-full flex items-center hover:text-blue-600 hover:bg-blue-500"
                    href={"/"}
                  >
                    <i className="ti ti-layout-dashboard  text-xl" />{" "}
                    <span>Dashboard</span>
                  </a>
                </li>
                <li className="text-xs font-bold mb-4 mt-8">
                  <i className="ti ti-dots nav-small-cap-icon text-lg hidden text-center" />
                  <span>UI COMPONENTS</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link gap-3 py-2 px-3  rounded-md w-full flex items-center hover:text-blue-600 hover:bg-blue-500"
                    href={"/buttons"}
                  >
                    <i className="ti ti-article  text-xl" />{" "}
                    <span>Buttons</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link gap-3 py-2 px-3  rounded-md w-full flex items-center hover:text-blue-600 hover:bg-blue-500"
                    href={"/alerts"}
                  >
                    <i className="ti ti-alert-circle  text-xl" />{" "}
                    <span>Alerts</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link gap-3 py-2 px-3  rounded-md w-full flex items-center hover:text-blue-600 hover:bg-blue-500"
                    href={"/cards"}
                  >
                    <i className="ti ti-cards  text-xl" /> <span>Card</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link gap-3 py-2 px-3  rounded-md w-full flex items-center hover:text-blue-600 hover:bg-blue-500"
                    href={"/forms"}
                  >
                    <i className="ti ti-file-description  text-xl" />{" "}
                    <span>Forms</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link gap-3 py-2 px-3  rounded-md w-full flex items-center hover:text-blue-600 hover:bg-blue-500"
                    href={"/typography"}
                  >
                    <i className="ti ti-typography text-xl" />{" "}
                    <span>Typography</span>
                  </a>
                </li>
                <li className="text-xs font-bold mb-4 mt-8">
                  <i className="ti ti-dots nav-small-cap-icon text-lg hidden text-center" />
                  <span>AUTH</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link gap-3 py-2 px-3  rounded-md w-full flex items-center hover:text-blue-600 hover:bg-blue-500"
                    href={"/login"}
                  >
                    <i className="ti ti-login  text-xl" /> <span>Login</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link gap-3 py-2 px-3  rounded-md w-full flex items-center hover:text-blue-600 hover:bg-blue-500"
                    href={"/register"}
                  >
                    <i className="ti ti-user-plus  text-xl" />{" "}
                    <span>Register</span>
                  </a>
                </li>
                <li className="text-xs font-bold mb-4 mt-8">
                  <i className="ti ti-dots nav-small-cap-icon text-lg hidden text-center" />
                  <span>EXTRA</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link gap-3 py-2 px-3  rounded-md w-full flex items-center hover:text-blue-600 hover:bg-blue-500"
                    href={"/icons"}
                  >
                    <i className="ti ti-mood-happy  text-xl" />{" "}
                    <span>Icons</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link gap-3 py-2 px-3  rounded-md w-full flex items-center hover:text-blue-600 hover:bg-blue-500"
                    href={"/sample"}
                  >
                    <i className="ti ti-aperture  text-xl" />{" "}
                    <span>Sample Page</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* Bottom Upgrade Option */}
        <div className="m-6  relative">
          <div className="bg-blue-500 p-5 rounded-md flex items-center justify-between">
            <div>
              <h5 className="text-base font-semibold text-gray-700 mb-3">
                Upgrade to Pro
              </h5>
              <button className="text-xs font-semibold hover:bg-blue-700 text-white bg-blue-600 rounded-md  px-4 py-2">
                Buy Pro
              </button>
            </div>
            <div className="-mt-12 -mr-2">
              <img
                src="./images/profile/rocket.png"
                className="max-w-fit"
                alt="profile"
              />
            </div>
          </div>
        </div>
        {/* </aside> */}
      </aside>

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

export default Sidebar;
