import React from "react";
import Product from "@/components/Product";
import PathTracker from "@/components/PathTracker";
import Transaction from "@/components/Transaction";

const PRODUCT_DATA = [
  {
    id: 1,
    imgUrl: "./images/products/product-1.jpg",
    productName: "Boat Headphone",
    price: 50,
    originalPrice: 65,
  },
  {
    id: 2,
    imgUrl: "./images/products/product-2.jpg",
    productName: "MacBook Air Pro",
    price: 650,
    originalPrice: 900,
  },
  {
    id: 3,
    imgUrl: "./images/products/product-3.jpg",
    productName: "Red Valvet Dress",
    price: 150,
    originalPrice: 200,
  },
  {
    id: 4,
    imgUrl: "./images/products/product-4.jpg",
    productName: "Cute Soft Teddybear",
    price: 285,
    originalPrice: 345,
  },
];

const TRACK_DATA = [
  {
    time: "9:30 AM",
    event: "Payment received from John Doe of $385.90",
    color: "border-blue-600",
  },
  {
    time: "10:00 AM",
    event: "New sale recorded",
    detail: "#ML-3467",
    color: "border-blue-300",
  },
  {
    time: "12:00 PM",
    event: "Payment was made of $64.95 to Michael",
    color: "border-teal-500",
  },
  {
    time: "9:30 AM",
    event: "New sale recorded",
    detail: "#ML-3467",
    color: "border-yellow-500",
  },
  {
    time: "9:30 AM",
    event: "New arrival recorded",
    color: "border-red-500",
  },
  {
    time: "12:00 AM",
    event: "Payment Done",
    color: "border-teal-500",
  },
];

const TRANSACTION = [
  {
    id: "1",
    name: "Sunil Joshi",
    role: "Web Designer",
    projectName: "Elite Admin",
    priority: "Low",
    budget: "3.9",
  },
  {
    id: "2",
    name: "Andrew McDownland",
    role: "Project Manager",
    projectName: "Real Homes WP Theme",
    priority: "Medium",
    budget: "24.5k",
  },
  {
    id: "3",
    name: "Christopher Jamil",
    role: "Project Manager",
    projectName: "MedicalPro WP Theme",
    priority: "High",
    budget: "12.8k",
  },
  {
    id: "4",
    name: "Nirav Joshi",
    role: "Frontend Engineer",
    projectName: "Hosting Press HTML",
    priority: "Critical",
    budget: "2.4k",
  },
];

export default function page() {
  return (
    <>
      <main className="h-full overflow-y-auto  max-w-full pt-4">
        <div className="container full-container py-5 flex flex-col gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 gap-x-0 lg:gap-y-0 gap-y-6">
            <div className="col-span-2">
              <div className="card">
                <div className="card-body">
                  <div className="sm:flex block justify-between mb-5">
                    <h4 className="text-gray-600 text-lg font-semibold sm:mb-0 mb-2">
                      Sales Overview
                    </h4>
                    <select
                      name="cars"
                      id="cars"
                      className=" border-gray-400 text-gray-500 rounded-md text-sm border-[1px] focus:ring-0 sm:w-auto w-full"
                    >
                      <option value="volvo">March2023</option>
                      <option value="saab">April2023</option>
                      <option value="mercedes">May2023</option>
                      <option value="audi">June2023</option>
                    </select>
                  </div>
                  <div id="chart" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="text-gray-600 text-lg font-semibold mb-5">
                    Yearly Breakup
                  </h4>
                  <div className="flex gap-6 items-center justify-between">
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[21px] font-semibold text-gray-600">
                        $36,358
                      </h3>
                      <div className="flex items-center gap-1">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-teal-400">
                          <i className="ti ti-arrow-up-left text-teal-500" />
                        </span>
                        <p className="text-gray-600 text-sm font-normal ">
                          +9%
                        </p>
                        <p className="text-gray-500 text-sm font-normal text-nowrap">
                          last year
                        </p>
                      </div>
                      <div className="flex">
                        <div className="flex gap-2 items-center">
                          <span className="w-2 h-2 rounded-full bg-blue-600" />
                          <p className="text-gray-500 font-normal text-xs">
                            2023
                          </p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <span className="w-2 h-2 rounded-full bg-blue-500" />
                          <p className="text-gray-500 font-normal text-xs">
                            2023
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex  items-center">
                      <div id="breakup" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="flex gap-6 items-center justify-between">
                    <div className="flex flex-col gap-5">
                      <h4 className="text-gray-600 text-lg font-semibold">
                        Monthly Earnings
                      </h4>
                      <div className="flex flex-col gap-[18px]">
                        <h3 className="text-[21px] font-semibold text-gray-600">
                          $6,820
                        </h3>
                        <div className="flex items-center gap-1">
                          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-400">
                            <i className="ti ti-arrow-down-right text-red-500" />
                          </span>
                          <p className="text-gray-600 text-sm font-normal ">
                            +9%
                          </p>
                          <p className="text-gray-500 text-sm font-normal">
                            last year
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-11 h-11 flex justify-center items-center rounded-full bg-cyan-500 text-white self-start">
                      <i className="ti ti-currency-dollar text-xl" />
                    </div>
                  </div>
                </div>
                <div id="earning" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 gap-x-0 lg:gap-y-0 gap-y-6">
            <div className="card">
              <div className="card-body">
                <h4 className="text-gray-600 text-lg font-semibold mb-6">
                  Recent Transactions
                </h4>
                <ul className="timeline-widget relative">
                  {TRACK_DATA.map((item, index) => (
                    <PathTracker
                      key={index}
                      time={item?.time}
                      event={item?.event}
                      detail={item?.detail}
                      color={item?.color}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-2">
              <div className="card h-full">
                <div className="card-body">
                  <h4 className="text-gray-600 text-lg font-semibold mb-6">
                    Recent Transaction
                  </h4>
                  <div className="relative overflow-x-auto">
                    {/* table */}
                    <table className="text-left w-full whitespace-nowrap text-sm">
                      <thead className="text-gray-700">
                        <tr className="font-semibold text-gray-600">
                          <th scope="col" className="p-4">
                            Id
                          </th>
                          <th scope="col" className="p-4">
                            Assigned
                          </th>
                          <th scope="col" className="p-4">
                            Name
                          </th>
                          <th scope="col" className="p-4">
                            Priority
                          </th>
                          <th scope="col" className="p-4">
                            Budget
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {TRANSACTION.map((transaction, index) => (
                          <Transaction
                            key={index}
                            id={transaction.id}
                            name={transaction.name}
                            role={transaction.role}
                            projectName={transaction.projectName}
                            priority={transaction.priority}
                            budget={transaction.budget}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 gap-6">
            {PRODUCT_DATA.map((product) => (
              <div key={product.id}>
                <Product
                  imgUrl={product?.imgUrl}
                  productName={product.productName}
                  price={product.price}
                  originalPrice={product.originalPrice}
                />
              </div>
            ))}
          </div>
          <footer>
            <p className="text-base text-gray-500 font-normal p-3 text-center">
              Design and Developed by{" "}
              <a
                href="https://adminmart.com/"
                target="_blank"
                className="text-blue-600 underline hover:text-blue-700"
              >
                AdminMart.com
              </a>
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
