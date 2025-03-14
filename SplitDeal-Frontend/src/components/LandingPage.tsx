import React from 'react'
import { AnimatedGradientTextDemo } from './AnimatedGradientTextDemo'
import { DrawCircleText } from './DrawCircleText'

const LandingPage = () => {
  return (
    <>
    <div>
        <div className="relative isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
            
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[50deg] bg-linear-to-tr from-green-200 to-orange-400 opacity-30 sm:left-[calc(10%-10rem)] sm:w-[72.1875rem]"
          />
          
        </div>
        

        <div className="mx-auto max-w-2xl py-32 sm:py-20 ">
        
        {/* <svg className='absolute left-16' width="149" height="122" viewBox="0 0 149 122" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M137.863 0.579489C137.792 0.790681 137.722 1.35386 137.722 1.84664C137.722 2.33943 137.558 4.1463 137.346 5.88277C136.877 9.8485 137.041 15.8792 137.722 19.3287C137.98 20.6193 138.191 21.7222 138.191 21.7926C138.168 21.9804 137.182 20.7601 134.86 17.733C131.763 13.65 130.355 12.0778 127.54 9.59038C119.399 2.38636 111.869 -0.523407 104.408 0.696818C100.584 1.30693 94.9773 3.77085 91.4113 6.37556C83.6695 12.0778 77.734 22.9659 76.4672 33.8072C76.1856 36.1537 76.3029 43.0762 76.6548 46.2675L76.7956 47.6286L75.4115 46.995C68.2795 43.7332 64.6432 42.3722 59.482 41.0346C53.9688 39.6032 48.7372 39.087 43.529 39.439C25.3239 40.6592 10.0982 57.4842 3.55276 83.6252C2.49705 87.896 0.854832 96.0386 0.362167 99.5585C-0.623162 106.434 0.479469 115.609 2.73165 119.246C3.5293 120.514 4.46771 121.523 4.86653 121.523C5.33574 121.523 5.2419 121.077 4.32695 119.246C2.96625 116.477 2.49705 113.755 2.49705 108.499C2.47359 103.454 2.56743 102.891 4.37387 95.0061C7.16564 82.8743 9.32398 76.4916 13.3591 68.5601C16.5497 62.2713 19.5292 58.0709 23.7989 53.8235C29.0775 48.5672 34.661 45.4932 40.8545 44.4137C44.1155 43.8505 50.7078 44.0852 54.5788 44.883C60.655 46.1737 64.9717 47.7459 73.1827 51.7116C78.3674 54.2225 79.4701 54.5041 80.8073 53.6124C82.4495 52.5564 82.6372 51.1954 81.9803 45.6809C81.7692 43.9444 81.5815 40.5419 81.5815 37.9841C81.558 34.0653 81.6284 33.0797 82.0742 31.0382C83.4114 24.8432 86.0624 19.4226 90.0272 14.7294C93.7808 10.2709 99.9509 6.77447 105.37 6.04703C109.499 5.48385 114.168 6.98567 119.024 10.4821C121.769 12.4298 126.766 17.4514 129.088 20.6193L131.083 23.3179L130.215 23.4822C129.745 23.5526 127.235 23.7638 124.678 23.9046C119.306 24.2096 118.555 24.3739 117.429 25.336C115.575 26.9786 115.904 29.9822 118.086 31.0147C119.212 31.5544 123.012 32.0472 127.282 32.2349C129.229 32.3053 133.945 32.5869 137.769 32.8685C145.511 33.4317 145.98 33.3848 147.458 32.0941C149.288 30.475 149.194 28.4569 147.059 23.5291C146.214 21.5814 145.112 18.7421 144.643 17.1933C142.602 10.5994 139.974 2.59755 139.458 1.44773C138.895 0.180568 138.168 -0.218351 137.863 0.579489Z" fill="currentColor"/>
</svg> */}


          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            {/* <div className="relative rounded-full px-3 py-1 text-sm/6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
            <AnimatedGradientTextDemo/>
          </div>
          <div className="text-center">
            {/* <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Data to enrich your online business
            </h1> */}
            <DrawCircleText/>
            
            <p className="mt-8 text-md sm:text-lg font-medium text-pretty text-gray-500 ">
                Connect with others to unlock the power of group buying—pool together!
            </p>

            <form className='py-10'>
            {/* <div className="mx-auto max-w-dm sm:flex sm:space-x-3 p-3 bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-100">
  <div className="w-full sm:w-2/3 pb-2 sm:pb-0">
    <label htmlFor="hs-hero-name-1" className="block text-sm font-medium"><span className="sr-only">Enter Your Address</span></label>
    <input type="text" id="hs-hero-name-1" className="py-2.5 sm:py-3 px-4 block w-full sm:w-3/4 border-2 rounded-lg sm:text-sm focus:border-orange-500 focus:ring-orange-500" placeholder="Your name" />
  </div>
  <div className="flex items-center justify-center pt-2 sm:pt-0 sm:w-1/3 sm:block">
    <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-orange-600 text-white hover:bg-orange-700 focus:outline-hidden focus:bg-orange-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    </a>
  </div>
</div> */}

<form>
          <div className="relative z-10 flex gap-x-3 p-3 bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-100  ">
            <div className="w-full">
              <label htmlFor="hs-search-article-1" className="block text-sm text-gray-700 font-medium dark:text-white"><span className="sr-only">Search Deals</span></label>
              <input type="email" name="hs-search-article-1" id="hs-search-article-1" className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-orange-500 focus:ring-orange-500  dark:border-transparent" placeholder="Search address" />
            </div>
            <div>
              <a className="size-11 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-orange-600 text-white hover:bg-orange-700 focus:outline-hidden focus:bg-orange-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
              </a>
            </div>
          </div>
        </form>

      </form>
            <div className=" flex items-center justify-center gap-x-6">
                
              <a
                href="#"
                className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Explore Deals
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-orange-400 to-orange-700 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
          
        </div>
        
      </div>
      
    </div>

    </>
  )
}

export default LandingPage