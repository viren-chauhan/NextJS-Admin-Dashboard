import React from "react";

export default function Icons() {
  return (
    <>
      <main className="h-full overflow-y-auto max-w-full  pt-4">
        <div className="container full-container py-5 ">
          <div className="card">
            <div className="card-body">
              <h6 className="text-lg text-gray-600 font-semibold mb-6">
                Icons
              </h6>
              <iframe
                src="https://tabler-icons.io/"
                frameBorder={0}
                className="w-full"
                data-simplebar=""
                // style={{height:"600px"}}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
