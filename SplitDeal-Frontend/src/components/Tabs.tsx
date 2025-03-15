const Tabs = () => {
  return (
    <div>
        <div className="border-b border-gray-200">
  <nav className="flex gap-x-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-orange-600 hs-tab-active:text-orange-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-orange-600 focus:outline-hidden focus:text-orange-600 disabled:opacity-50 disabled:pointer-events-none active" id="tabs-with-icons-item-1" aria-selected="true" data-hs-tab="#tabs-with-icons-1" aria-controls="tabs-with-icons-1" role="tab">
      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
      Tab 1
    </button>
    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-orange-600 hs-tab-active:text-orange-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-orange-600 focus:outline-hidden focus:text-orange-600 disabled:opacity-50 disabled:pointer-events-none" id="tabs-with-icons-item-2" aria-selected="false" data-hs-tab="#tabs-with-icons-2" aria-controls="tabs-with-icons-2" role="tab">
      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="10" r="3"></circle>
        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
      </svg>
      Tab 2
    </button>
    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-orange-600 hs-tab-active:text-orange-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-orange-600 focus:outline-hidden focus:text-orange-600 disabled:opacity-50 disabled:pointer-events-none" id="tabs-with-icons-item-3" aria-selected="false" data-hs-tab="#tabs-with-icons-3" aria-controls="tabs-with-icons-3" role="tab">
      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
      Tab 3
    </button>
  </nav>
</div>

<div className="mt-3">
  <div id="tabs-with-icons-1" role="tabpanel" aria-labelledby="tabs-with-icons-item-1">
    <p className="text-gray-500">
      This is the <em className="font-semibold text-gray-800">first</em> item's tab body.
    </p>
  </div>
  <div id="tabs-with-icons-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-icons-item-2">
    <p className="text-gray-500">
      This is the <em className="font-semibold text-gray-800">second</em> item's tab body.
    </p>
  </div>
  <div id="tabs-with-icons-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-icons-item-3">
    <p className="text-gray-500">
      This is the <em className="font-semibold text-gray-800">third</em> item's tab body.
    </p>
  </div>
</div>
    </div>
  )
}

export default Tabs