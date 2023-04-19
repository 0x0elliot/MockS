/* eslint-disable @next/next/no-img-element */
//@ts-nocheck
import React, { useState } from "react";


function SwapForm() {
  const [mockLocation, setMockLocation] = useState<string>("");
  const [mockJSON, setMockJSON] = useState<object | null>(null);
  const [responseData, setResponseData] = useState<object | null>(null);

  async function postMockData(
    mockJSON: object,
    mockLocation: string
  ): Promise<void> {
    const data = {
      mockJSON: mockJSON,
      mockLocation: mockLocation,
    };

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/mock/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      setResponseData(responseData); // set the response data in state
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function getMockData(mockLocation: string): Promise<object | null> {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/mock/${mockLocation}`
      );
      const data = await response.json();
      setResponseData(data); // set the response data in state
      return data;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }

  return (
    <>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="max-w-lg mx-auto text-center">
            <h1
              className="text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-poppins text-center mb-10 ml-5 mr-5"
              style={{
                background:
                  "linear-gradient(to right,rgba(135, 206, 235, 1), rgba(1, 0, 70, 1))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MockS
            </h1>

            <h3 className="text-xl text-gray-800 mb-10 -mt-4">
              your go-to api testing toolkit.
            </h3>
          </div>

          <div>
            <div className="relative">
              <input
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm mb-4"
                placeholder="/CREATE/endpoint"
                type="text"
                onChange={(event) => setMockLocation(event.target.value)}
                value={mockLocation}
              />

              <span className="absolute inset-y-0 right-0 grid px-4 place-content-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <div className="relative">
              <input
                className="w-full h-32 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter JSON"
                type="text"
                onChange={(event) => setMockJSON(event.target.value)}
                value={mockJSON}
              />

              <span className="absolute inset-y-0 right-0 grid px-4 place-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-10">
            {responseData ? (
              <div>
                <p>Response Data:</p>
                <pre className="text-gray-700">
                  {JSON.stringify(responseData, null, 2)}
                </pre>
              </div>
            ) : (
              <p className="text-gray-700 ml-2">Try out :p</p>
            )}

            <span className="space-x-3">
              {" "}
              <button
                onClick={async () => {
                  const data = await postMockData(mockJSON, mockLocation);
                  console.log(data);
                }}
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                /POST
              </button>
              <button
                onClick={async () => {
                  const data = await getMockData(mockLocation);
                  console.log(data);
                }}
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                /GET
              </button>
            </span>
          </div>
        </div>

        <div className="relative w-full h-64 sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            src="/me.png"
            className="absolute inset-0 object-fill w-full h-full"
          />
        </div>
      </section>
    </>
  );
}

export default SwapForm;
