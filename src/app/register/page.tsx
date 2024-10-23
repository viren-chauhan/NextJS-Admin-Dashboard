"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import React from "react";

export default function Register() {
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
                    htmlFor="forName"
                    className="block text-sm font-semibold mb-2 text-gray-600"
                  >
                    Name
                  </label>
                  <TextInput
                    type="text"
                    style="py-3 px-4 w-full rounded-md"
                    placeholder="Enter Name"
                    id="forName"
                    ariaDescribedby="hs-input-helper-text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      console.log("Text Changed!", e.target.value)
                    }
                  />
                </div>
                {/* Email */}
                <div className="mb-4">
                  <label
                    htmlFor="forEmail"
                    className="block text-sm font-semibold mb-2 text-gray-600"
                  >
                    Email Address
                  </label>
                  <TextInput
                    type="email"
                    style="py-3 px-4 w-full rounded-md"
                    placeholder="Enter Email"
                    id="forEmail"
                    ariaDescribedby="hs-input-helper-text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      console.log("Text Changed!", e.target.value)
                    }
                  />
                </div>
                {/* password */}
                <div className="mb-4">
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
                {/* button */}
                <div className="grid my-6">
                  <Button
                    btnName="Sign Up"
                    style="py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 justify-center text-base font-normal"
                    onClick={() => console.log("Sign Up Button Clicked!")}
                  />
                </div>
                <div className="flex justify-center gap-2 items-center">
                  <p className="text-base font-medium text-gray-500">
                    Already have an Account?
                  </p>
                  <a
                    href="./authentication-login.html"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Sign In
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
