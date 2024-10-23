"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import React from "react";

export default function Login() {
  return (
    <>
      <main>
        {/* Main Content */}
        <div className="flex flex-col w-full  overflow-hidden relative min-h-screen radial-gradient items-center justify-center g-0 px-4">
          <div className="justify-center items-center w-full card lg:flex max-w-md ">
            <div className=" w-full card-body">
              <a href="../" className="py-4 block">
                <img
                  src="./images/logos/dark-logo.svg"
                  alt=""
                  className="mx-auto"
                />
              </a>
              <p className="mb-4 text-gray-500 text-sm text-center">
                Your Social Campaigns
              </p>
              {/* form */}
              <form>
                {/* username */}
                <div className="mb-4">
                  <label
                    htmlFor="forUsername"
                    className="block text-sm font-semibold mb-2 text-gray-600"
                  >
                    Username
                  </label>
                  <TextInput
                    type="text"
                    style="py-3 px-4 w-full rounded-md"
                    placeholder="Enter Username"
                    id="forUsername"
                    ariaDescribedby="hs-input-helper-text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      console.log("Text Changed!", e.target.value)
                    }
                  />
                </div>
                {/* password */}
                <div className="mb-6">
                  <label
                    htmlFor="forPassword"
                    className="block text-sm font-semibold mb-2 text-gray-600"
                  >
                    Password
                  </label>
                  <TextInput
                    type="password"
                    style="py-3 px-4 w-full rounded-md"
                    placeholder="Enter Password"
                    id="forPassword"
                    ariaDescribedby="hs-input-helper-text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      console.log("Text Changed!", e.target.value)
                    }
                  />
                </div>
                {/* checkbox */}
                <div className="flex justify-between">
                  <div className="flex">
                    <TextInput
                      type="checkbox"
                      style="shrink-0 mt-0.5 text-blue-600 py-2.5 px-2.5 rounded-[4px] focus:ring-blue-500"
                      id="hs-default-checkbox"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        console.log("Text Changed!", e.target.checked)
                      }
                    />
                    <label
                      htmlFor="hs-default-checkbox"
                      className="text-sm text-gray-600 ms-3"
                    >
                      Remeber this Device
                    </label>
                  </div>
                  <a
                    href="../"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Forgot Password ?
                  </a>
                </div>
                {/* button */}
                <div className="grid my-6">
                  <Button
                    btnName="Sign In"
                    style="py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 justify-center text-base font-normal"
                    onClick={() => console.log("Submit Button Clicked!")}
                  />
                </div>
                <div className="flex justify-center gap-2 items-center">
                  <p className="text-base font-medium text-gray-500">
                    New to Modernize?
                  </p>
                  <a
                    href="./authentication-register.html"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Create an account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/*end of project*/}
      </main>
    </>
  );
}
