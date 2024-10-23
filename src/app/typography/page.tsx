import React from "react";

export default function Typography() {
  return (
    <>
      <main className="h-full overflow-y-auto  max-w-full  pt-4">
        <div className="container full-container py-5 flex flex-col gap-6">
          <div className="card">
            <div className="card-body flex flex-col gap-6">
              <h6 className="text-lg text-gray-600 font-semibold">Headings</h6>
              <div className="card">
                <div className="card-body text-gray-600 flex flex-col gap-1">
                  <h1 className="text-4xl">h1. Preline heading</h1>
                  <h2 className="text-3xl">h2. Preline heading</h2>
                  <h3 className="text-2xl">h3. Preline heading</h3>
                  <h4 className="text-xl">h4. Preline heading</h4>
                  <h5 className="text-lg">h5. Preline heading</h5>
                  <h6 className="text-base">h6. Preline heading</h6>
                </div>
              </div>
              <h6 className="text-lg text-gray-600 font-semibold">
                Inline text elements
              </h6>
              <div className="card">
                <div className="card-body text-gray-600 flex flex-col gap-1">
                  <p>
                    You can use the mark tag to <mark>highlight</mark>
                    text.
                  </p>
                  <p>
                    <del>
                      This line of text is meant to be treated as deleted text.
                    </del>
                  </p>
                  <p>
                    <s>
                      This line of text is meant to be treated as no longer
                      accurate.
                    </s>
                  </p>
                  <p>
                    <ins>
                      This line of text is meant to be treated as an addition to
                      the document.
                    </ins>
                  </p>
                  <p>
                    <u>This line of text will render as underlined.</u>
                  </p>
                  <p>
                    <small>
                      This line of text is meant to be treated as fine print.
                    </small>
                  </p>
                  <p>
                    <strong>This line rendered as bold text.</strong>
                  </p>
                  <p>
                    <em>This line rendered as italicized text.</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
