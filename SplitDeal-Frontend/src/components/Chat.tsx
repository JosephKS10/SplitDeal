import React from 'react'

const Chat = () => {

  return (
    <>
        {/* Content */}
<div className="relative h-screen">
  <div className="py-10 lg:py-14">
    {/* Title */}
    <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto text-center">
      <a className="inline-block mb-4 flex-none focus:outline-hidden focus:opacity-80" href="../examples/html/ai-with-sidebar.html" aria-label="SplitDeal">
        <img src="https://res.cloudinary.com/dehtc9uyy/image/upload/v1741969203/SplitDealLogo_wtfs6f.png" width={150} height={150} alt="Logo" />
      </a>

      <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
        Welcome to SplitDeal 
      </h1>
      <p className="mt-3 text-gray-600">
        We help people to find, share and enjoy the best deals in market.
      </p>
    </div>
    {/* End Title */}

    <ul className="mt-16 space-y-5">
      {/* Chat Bubble */}
      <li className="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
        <svg className="shrink-0 size-9.5 rounded-full" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="38" rx="6" fill="#2563EB"/>
          <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" strokeWidth="1.5"/>
          <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" strokeWidth="1.5"/>
          <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white"/>
        </svg>

        <div className="space-y-3">
          <h2 className="font-medium text-gray-800">
            How can we help?
          </h2>
          <div className="space-y-1.5">
            <p className="mb-1.5 text-sm text-gray-800">
              You can ask questions like:
            </p>
            <ul className="list-disc list-outside space-y-1.5 ps-3.5">
              <li className="text-sm text-gray-800">
                What's SplitDeal UI?
              </li>

              <li className="text-sm text-gray-800">
                How many Starter Pages & Examples are there?
              </li>

              <li className="text-sm text-gray-800">
                Is there a PRO version?
              </li>
            </ul>
          </div>
        </div>
      </li>
      {/* End Chat Bubble */}

      {/* Users bubble always appears in right */}
      <li className="py-2 sm:py-4">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-2xl flex gap-x-2 sm:gap-x-4">
            
            <div className="grow mt-2 text-right space-y-3">
              <p className="text-gray-800">
                what's SplitDeal ui?
              </p>
            </div>
            <span className="shrink-0 flex items-center justify-center size-9.5 rounded-full bg-gray-600">
              <span className="text-sm font-medium text-white">AZ</span>
            </span>
          </div>
        </div>
      </li>
      {/* End Chat Bubble */}

      {/* Chat Bubble */}
      <li className="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
        <svg className="shrink-0 size-9.5 rounded-full" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="38" rx="6" fill="#2563EB"/>
          <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" strokeWidth="1.5"/>
          <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" strokeWidth="1.5"/>
          <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white"/>
        </svg>

        <div className="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
          {/* Card */}
          <div className="space-y-3">
            <p className="text-sm text-gray-800">
              SplitDeal UI is an open-source set of prebuilt UI components based on the utility-first Tailwind CSS framework.
            </p>
            <div className="space-y-1.5">
              <p className="text-sm text-gray-800">
                Here're some links to get started
              </p>
              <ul>
                <li>
                  <a className="text-sm text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="../docs/index.html">
                    Installation Guide
                  </a>
                </li>
                <li>
                  <a className="text-sm text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="../docs/frameworks.html">
                    Framework Guides
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* End Card */}

          {/* Button Group */}
          <div>
            <div className="sm:flex sm:justify-between">
              <div>
                <div className="inline-flex border border-gray-200 rounded-full p-0.5">
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-hidden focus:bg-blue-100 focus:text-blue-800">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                  </button>
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-hidden focus:bg-blue-100 focus:text-blue-800">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
                  </button>
                </div>
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
                  Copy
                </button>
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                  Share
                </button>
              </div>

              <div className="mt-1 sm:mt-0">
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                  New answer
                </button>
              </div>
            </div>
          </div>
          {/* End Button Group */}
        </div>
      </li>
      {/* End Chat Bubble */}

      {/* Chat Bubble */}
      <li className="py-2 sm:py-4">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-2xl flex gap-x-2 sm:gap-x-4">
            
            <div className="grow mt-2 text-right space-y-3">
              <p className="text-gray-800">
                Hey Guys how are you doin today?
              </p>
            </div>
            <span className="shrink-0 flex items-center justify-center size-9.5 rounded-full bg-gray-600">
              <span className="text-sm font-medium text-white">AZ</span>
            </span>
          </div>
        </div>
      </li>
      {/* End Chat Bubble */}

      {/* Chat Bubble */}
      <li className="py-2 sm:py-4">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-2xl flex gap-x-2 sm:gap-x-4">
            
            <div className="grow mt-2 text-right space-y-3">
            <p className="text-gray-800">
                create a table example with SplitDeal using avatars, badges and progress bars
              </p>
            </div>
            <span className="shrink-0 flex items-center justify-center size-9.5 rounded-full bg-gray-600">
              <span className="text-sm font-medium text-white">AZ</span>
            </span>
          </div>
        </div>
      </li>
      {/* End Chat Bubble */}

      {/* Chat Bubble */}
    
      {/* End Chat Bubble */}

      {/* Chat Bubble */}
      <li className="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
        <svg className="shrink-0 size-9.5 rounded-full" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="38" rx="6" fill="#2563EB"/>
          <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" strokeWidth="1.5"/>
          <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" strokeWidth="1.5"/>
          <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white"/>
        </svg>

        <div className="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
          {/* Card */}
          <div className="space-y-3">
            <p className="text-sm text-gray-800">
              Hold on a sec...
            </p>
          </div>
          {/* End Card */}

          {/* Table Section */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-2xs overflow-hidden">
            {/* Table */}
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase text-gray-800">
                            Name
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase text-gray-800">
                            Status
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase text-gray-800">
                            Portfolio
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase text-gray-800">
                            Created
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <div className="flex items-center gap-x-3">
                            <img className="inline-block size-9.5 rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar" />
                            <div className="grow">
                              <span className="block text-sm font-semibold text-gray-800">Christina Bersh</span>
                              <span className="block text-sm text-gray-500">christina@site.com</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            Active
                          </span>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <div className="flex items-center gap-x-3">
                            <span className="text-xs text-gray-500">1/5</span>
                            <div
  className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden"
  role="progressbar"
  aria-valuenow={100} // ✅ Use numbers, not strings
  aria-valuemin={0} // ✅ Use numbers
  aria-valuemax={100} // ✅ Use numbers
>
  <div className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap"></div>
</div>

                          </div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-500">28 Dec, 12:12</span>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <div className="flex items-center gap-x-3">
                            <img className="inline-block size-9.5 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar" />
                            <div className="grow">
                              <span className="block text-sm font-semibold text-gray-800">David Harrison</span>
                              <span className="block text-sm text-gray-500">david@site.com</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            Warning
                          </span>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <div className="flex items-center gap-x-3">
                            <span className="text-xs text-gray-500">3/5</span>
                            <div
  className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden"
  role="progressbar"
  aria-valuenow={100} // ✅ Use numbers, not strings
  aria-valuemin={0} // ✅ Use numbers
  aria-valuemax={100} // ✅ Use numbers
>
  <div className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap"></div>
</div>

                          </div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-500">20 Dec, 09:27</span>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <div className="flex items-center gap-x-3">
                            <span className="inline-flex items-center justify-center size-9.5 rounded-full bg-gray-300">
                              <span className="font-medium text-gray-800">A</span>
                            </span>
                            <div className="grow">
                              <span className="block text-sm font-semibold text-gray-800">Anne Richard</span>
                              <span className="block text-sm text-gray-500">anne@site.com</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            Active
                          </span>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <div className="flex items-center gap-x-3">
                            <span className="text-xs text-gray-500">5/5</span>
                            <div
  className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden"
  role="progressbar"
  aria-valuenow={100} // ✅ Use numbers, not strings
  aria-valuemin={0} // ✅ Use numbers
  aria-valuemax={100} // ✅ Use numbers
>
  <div className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap"></div>
</div>

                          </div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-500">18 Dec, 15:20</span>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <div className="flex items-center gap-x-3">
                            <img className="inline-block size-9.5 rounded-full" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80" alt="Avatar" />
                            <div className="grow">
                              <span className="block text-sm font-semibold text-gray-800">Samia Kartoon</span>
                              <span className="block text-sm text-gray-500">samia@site.com</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            Active
                          </span>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <div className="flex items-center gap-x-3">
                            <span className="text-xs text-gray-500">0/5</span>
                            <div
  className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden"
  role="progressbar"
  aria-valuenow={1} // ✅ Number, not a string
  aria-valuemin={0} // ✅ Number
  aria-valuemax={100} // ✅ Number
>
  <div className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap"></div>
</div>

                          </div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-500">18 Dec, 15:20</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* End Table */}
          </div>
          {/* End Table Section */}

          {/* Button Group */}
          <div>
            <div className="sm:flex sm:justify-between">
              <div>
                <div className="inline-flex border border-gray-200 rounded-full p-0.5">
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-hidden focus:bg-blue-100 focus:text-blue-800">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                  </button>
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-hidden focus:bg-blue-100 focus:text-blue-800">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
                  </button>
                </div>
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
                  Copy
                </button>
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                  Share
                </button>
              </div>

              <div className="mt-1 sm:mt-0">
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                  New answer
                </button>
              </div>
            </div>
          </div>
          {/* End Button Group */}
        </div>
      </li>
      {/* End Chat Bubble */}

      {/* Chat Bubble */}

      {/* End Chat Bubble */}

      {/* Chat Bubble */}
      <li className="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
        <svg className="shrink-0 size-9.5 rounded-full" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="38" rx="6" fill="#2563EB"/>
          <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" strokeWidth="1.5"/>
          <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" strokeWidth="1.5"/>
          <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white"/>
        </svg>

        <div className="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
          {/* Card */}
          <div className="space-y-3">
            <p className="text-sm text-gray-800">
              Of course!
            </p>
          </div>
          {/* End Card */}

          <div className="mt-3 flex-none min-w-full bg-gray-800 font-mono text-sm p-5 rounded-lg">
  <span className="text-red-500">
    table <span className="text-gray-300">
      className=&quot;<span className="text-sky-400">min-w-full divide-y divide-gray-200</span>&quot;
    </span>
    <span className="text-red-500">&gt;</span>
  </span>
  <span className="block"></span>
  <span className="ms-5 text-red-500">
    &lt;thead <span className="text-gray-300">
      className=&quot;<span className="text-sky-400">bg-gray-50</span>&quot;
    </span>
    <span className="text-red-500">&gt;</span>
  </span>
  <span className="block"></span>
  <span className="ms-10 text-gray-500">...</span>
</div>


          {/* Button Group */}
          <div>
            <div className="sm:flex sm:justify-between">
              <div>
                <div className="inline-flex border border-gray-200 rounded-full p-0.5">
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-hidden focus:bg-blue-100 focus:text-blue-800">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                  </button>
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-hidden focus:bg-blue-100 focus:text-blue-800">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
                  </button>
                </div>
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
                  Copy
                </button>
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                  Share
                </button>
              </div>

              <div className="mt-1 sm:mt-0">
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                  New answer
                </button>
              </div>
            </div>
          </div>
          {/* End Button Group */}
        </div>
      </li>
      {/* End Chat Bubble */}

      {/* Chat Bubble */}
    
      {/* End Chat Bubble */}

      {/* Chat Bubble */}
      <li className="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
        <svg className="shrink-0 size-9.5 rounded-full" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="38" rx="6" fill="#2563EB"/>
          <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" strokeWidth="1.5"/>
          <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" strokeWidth="1.5"/>
          <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white"/>
        </svg>

        <div className="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
          {/* Card */}
          <div className="space-y-3">
            <p className="text-sm text-gray-800">
              Sure!
            </p>
          </div>
          {/* End Card */}

          <div>
            <button type="button" className="mb-2.5 me-1.5 py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-lg border border-blue-600 bg-white text-blue-600 align-middle hover:bg-blue-50 focus:outline-hidden focus:bg-blue-50 text-sm">
              Is Tailwind CSS a free library?
            </button>
            <button type="button" className="mb-2.5 me-1.5 py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-lg border border-blue-600 bg-white text-blue-600 align-middle hover:bg-blue-50 focus:outline-hidden focus:bg-blue-50 text-sm">
              What's the latest Tailwind CSS version?
            </button>
            <button type="button" className="mb-2.5 me-1.5 py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-lg border border-blue-600 bg-white text-blue-600 align-middle hover:bg-blue-50 focus:outline-hidden focus:bg-blue-50 text-sm">
              Is it a utility-class based?
            </button>
          </div>

          {/* Button Group */}
          <div>
            <div className="sm:flex sm:justify-between">
              <div>
                <div className="inline-flex border border-gray-200 rounded-full p-0.5">
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-hidden focus:bg-blue-100 focus:text-blue-800">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                  </button>
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-hidden focus:bg-blue-100 focus:text-blue-800">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
                  </button>
                </div>
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
                  Copy
                </button>
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                  Share
                </button>
              </div>

              <div className="mt-1 sm:mt-0">
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                  New answer
                </button>
              </div>
            </div>
          </div>
          {/* End Button Group */}
        </div>
      </li>
      {/* End Chat Bubble */}

      {/* Chat Bubble */}

      {/* End Chat Bubble */}

      {/* Chat Bubble */}
      <li className="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
        <svg className="shrink-0 size-9.5 rounded-full" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="38" rx="6" fill="#2563EB"/>
          <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" strokeWidth="1.5"/>
          <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" strokeWidth="1.5"/>
          <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white"/>
        </svg>

        <div className="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
          {/* Card */}
          <div className="space-y-3">
            <p className="text-sm text-gray-800">
              Here you go...
            </p>
          </div>
          {/* End Card */}

          <div className="grid grid-cols-2 gap-1 rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img className="w-full object-cover" src="https://images.unsplash.com/photo-1677644334825-0eb411012ac0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Deep Learning" />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <img className="w-full object-cover" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Deep Learning" />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <img className="w-full object-cover" src="https://images.unsplash.com/photo-1680193895115-b51b4ed5392f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Deep Learning" />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <img className="w-full object-cover" src="https://images.unsplash.com/photo-1680587590161-3a1dd77a7609?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Deep Learning" />
            </div>
          </div>

          {/* Button Group */}
          <div>
            <div className="sm:flex sm:justify-between">
              <div>
                <div className="inline-flex border border-gray-200 rounded-full p-0.5">
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-hidden focus:bg-blue-100 focus:text-blue-800">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                  </button>
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-hidden focus:bg-blue-100 focus:text-blue-800">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
                  </button>
                </div>
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
                  Copy
                </button>
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                  Share
                </button>
              </div>

              <div className="mt-1 sm:mt-0">
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                  New answer
                </button>
              </div>
            </div>
          </div>
          {/* End Button Group */}
        </div>
      </li>
      {/* End Chat Bubble */}

      {/* Chat Bubble */}
      <li className="py-2 sm:py-4">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-2xl flex gap-x-2 sm:gap-x-4">
            <div className="grow mt-2 space-y-3">
              <p className="text-right text-gray-800">
                what's tailwindcss?
              </p>
            </div>

            <span className="shrink-0 inline-flex items-center justify-center size-9.5 rounded-full bg-gray-600">
              <span className="text-sm font-medium text-white">AZ</span>
            </span>
          </div>
        </div>
      </li>
      {/* End Chat Bubble */}

      {/* Chat Bubble */}
      <li className="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
        <svg className="shrink-0 size-9.5 rounded-full" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="38" rx="6" fill="#2563EB"/>
          <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" strokeWidth="1.5"/>
          <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" strokeWidth="1.5"/>
          <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white"/>
        </svg>

        <div className="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
          {/* Card */}
          <div className="space-y-3">
            <p className="text-sm text-gray-800">
              Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.
            </p>
            <div className="space-y-1.5">
              <ul>
                <li>
                  <a className="text-sm text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="#">
                    Get started with Tailwind CSS
                  </a>
                </li>
                <li>
                  <a className="text-sm text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="#">
                    Tailwind CSS Installation guide
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* End Card */}

          {/* Button Group */}
          <div>
            <div className="sm:flex sm:justify-between">
              <div>
                <div className="inline-flex border border-gray-200 rounded-full p-0.5">
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-hidden focus:bg-blue-100 focus:text-blue-800">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                  </button>
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-hidden focus:bg-blue-100 focus:text-blue-800">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
                  </button>
                </div>
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
                  Copy
                </button>
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                  Share
                </button>
              </div>

              <div className="mt-1 sm:mt-0">
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                  New answer
                </button>
              </div>
            </div>
          </div>
          {/* End Button Group */}
        </div>
      </li>
      {/* End Chat Bubble */}

      {/* Chat Bubble */}
      <li className="py-2 sm:py-4">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-2xl flex gap-x-2 sm:gap-x-4">
            <div>
              <div className="text-end">
                <button type="button" className="ms-1.5 mb-1.5 py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-lg border border-blue-600 bg-white text-blue-600 align-middle hover:bg-blue-50 focus:outline-hidden focus:bg-blue-50 text-sm">
                  What is the use of Tailwind CSS?
                </button>
                <button type="button" className="ms-1.5 mb-1.5 py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-lg border border-blue-600 bg-white text-blue-600 align-middle hover:bg-blue-50 focus:outline-hidden focus:bg-blue-50 text-sm">
                  What is the difference between Tailwind CSS and CSS?
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
      {/* End Chat Bubble */}

      {/* Chat Bubble */}
      
      {/* End Chat Bubble */}
    </ul>
  </div>

  <div className="sticky bottom-0 z-10 bg-white border-t border-gray-200 pt-2 pb-3 sm:pt-4 sm:pb-6">
    {/* Textarea */}
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">
      <div className="flex justify-between items-center mb-3">
        <button type="button" className="inline-flex justify-center items-center gap-x-2 rounded-lg font-medium text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 text-xs sm:text-sm">
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          New chat
        </button>

        <button type="button" className="py-1.5 px-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
          <svg className="size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/>
          </svg>
          Stop generating
        </button>
      </div>

      {/* Input */}
      <div className="relative">
        <textarea className="p-3 sm:p-4 border-2 border-slate-400 pb-12 sm:pb-12 block w-full  rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Ask me anything..."></textarea>

        {/* Toolbar */}
        <div className="absolute bottom-px inset-x-px p-2 rounded-b-lg bg-white">
          <div className="flex flex-wrap justify-between items-center gap-2">
            {/* Button Group */}
            <div className="flex items-center">
              {/* Mic Button */}
              <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-hidden focus:bg-gray-100">
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><line x1="9" x2="15" y1="15" y2="9"/></svg>
              </button>
              {/* End Mic Button */}

              {/* Attach Button */}
              <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-hidden focus:bg-gray-100">
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
              </button>
              {/* End Attach Button */}
            </div>
            {/* End Button Group */}

            {/* Button Group */}
            <div className="flex items-center gap-x-1">
              {/* Mic Button */}
              <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-hidden focus:bg-gray-100">
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
              </button>
              {/* End Mic Button */}

              {/* Send Button */}
              <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-hidden focus:bg-blue-500">
                <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                </svg>
              </button>
              {/* End Send Button */}
            </div>
            {/* End Button Group */}
          </div>
        </div>
        {/* End Toolbar */}
      </div>
      {/* End Input */}
    </div>
    {/* End Textarea */}
  </div>
</div>
{/* End Content */}
    </>
  )
}

export default Chat