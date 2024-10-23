"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import React from "react";

export default function Forms() {
  return (
    <>
      <main className="h-full overflow-y-auto  max-w-full  pt-4">
        <div className="container full-container py-5 flex flex-col gap-6">
          <div className="card">
            <div className="card-body flex flex-col gap-6">
              <h6 className="text-lg text-gray-600 font-semibold">Forms</h6>
              <div className="card">
                <div className="card-body">
                  <form className="flex flex-col gap-6">
                    <div>
                      <label
                        htmlFor="input-label-with-helper-text"
                        className="block text-sm font-semibold mb-2 text-gray-600"
                      >
                        Email address
                      </label>
                      <TextInput
                        type="email"
                        style="py-3 px-4 w-full rounded-md"
                        id="input-label-with-helper-text"
                        placeholder="you@site.com"
                        aria-describedby="hs-input-helper-text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          console.log("Text Changed!", e.target.value)
                        }
                      />
                      <p
                        className="text-sm  text-gray-500 mt-2"
                        id="hs-input-helper-text"
                      >
                        We&apos;ll never share your email with anyone else.
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor="input-label-with-helper-text"
                        className="block text-sm font-semibold mb-2 text-gray-600"
                      >
                        Password
                      </label>
                      <TextInput
                        type="password"
                        style="py-3 px-4 w-full rounded-md"
                        id="input-label-with-helper-text"
                        placeholder="Enter password"
                        aria-describedby="hs-input-helper-text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          console.log("Text Changed!", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex">
                      <TextInput
                        type="checkbox"
                        style="shrink-0 mt-0.5 text-blue-600 py-2.5 px-2.5 rounded-[4px]"
                        id="hs-default-checkbox"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          console.log("Text Changed!", e.target.value)
                        }
                      />
                      <label
                        htmlFor="hs-default-checkbox"
                        className="text-sm text-gray-500 ms-3 dark:text-gray-400"
                      >
                        Check me out
                      </label>
                    </div>
                    <Button
                      btnName="Submit"
                      style="py-2.5 px-4 text-sm text-white bg-blue-600 hover:bg-blue-700 justify-center text-base font-normal w-fit"
                      onClick={() => console.log("Sign Up Button Clicked!")}
                    />
                  </form>
                </div>
              </div>
              <h6 className="text-lg text-gray-600 font-semibold">
                Disabled forms
              </h6>
              <div className="card">
                <div className="card-body">
                  <h6 className="text-2xl text-gray-500 mb-4">
                    Disabled fieldset example
                  </h6>
                  <form action="" className="flex flex-col gap-4">
                    <div>
                      <label
                        htmlFor="input-label-with-helper-text"
                        className="block text-sm font-semibold mb-2 text-gray-600"
                      >
                        Disabled input
                      </label>
                      <TextInput
                        type="email"
                        id="input-label-with-helper-text"
                        placeholder="Disabled input"
                        ariaDescribedby="hs-input-helper-text"
                        style="bg-gray-400 disabled:opacity-80 disabled:pointer-events-none disabled:shadow-xl py-3 px-4 w-full rounded-md"
                        disabled={true}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="input-label-with-helper-text"
                        className="block text-sm font-semibold mb-2 text-gray-600"
                      >
                        Disabled select menu
                      </label>
                      <select
                        className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-400 disabled:opacity-80 disabled:pointer-events-none disabled:shadow-xl"
                        disabled={true}
                      >
                        <option>Disabled select</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                    <div className="flex opacity-60">
                      <TextInput
                        type="checkbox"
                        style="shrink-0 mt-0.5 text-blue-600 py-2.5 px-2.5 rounded-[4px]"
                        id="hs-disabled-checkbox"
                        disabled={true}
                      />
                      <label
                        htmlFor="hs-disabled-checkbox"
                        className="text-sm text-gray-500 ms-3 "
                      >
                        Can&apos;t check this
                      </label>
                    </div>
                    <Button
                      btnName="Submit"
                      style="py-2.5 px-4 text-sm text-white bg-blue-600 hover:bg-blue-700 justify-center text-base font-normal w-fit disabled:opacity-50 disabled:pointer-events-none"
                      disabled={true}
                      onClick={() => console.log("Sign Up Button Clicked!")}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
