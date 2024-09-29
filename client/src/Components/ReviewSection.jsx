import React from 'react'

function ReviewSection() {
  return (
    <div className=' '>
        <div className='h-20 w-full'></div>
        <section>
      {/* Container */}
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl lg:mb-16">
            What our clients are saying
          </h2>
        </div>
        {/* Contents */}
        <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mb-6 md:grid-cols-3 lg:mb-8">
          {/* Content 1 */}
          <div className="grid grid-cols-1 gap-6 rounded-md border border-solid border-gray-300 backgroundGrident p-8 md:p-10">
            <img
              src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9406b0e6cf62_placeholder-logo.svg"
              alt=""
              className="inline-block"
            />
            <p className="text-white">
              “Lorem ipsum dolor sit amet, elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"
            </p>
            <div className="flex flex-row items-start">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
              />
              <div className="flex flex-col items-start">
                <h6 className="text-base font-bold">Laila Bahar</h6>
                <p className="text-sm text-gray-500">Designer</p>
              </div>
            </div>
          </div>
          {/* Content 2 */}
          <div className="grid grid-cols-1 gap-6 rounded-md border border-solid border-gray-300  backgroundGrident p-8 md:p-10">
            <img
              src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9406b0e6cf62_placeholder-logo.svg"
              alt=""
              className="inline-block"
            />
            <p className="text-gray-500">
              “Lorem ipsum dolor sit amet, elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"
            </p>
            <div className="flex flex-row items-start">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
              />
              <div className="flex flex-col items-start">
                <h6 className="text-base font-bold">Laila Bahar</h6>
                <p className="text-sm text-gray-500">Designer</p>
              </div>
            </div>
          </div>
          {/* Content 3 */}
          <div className="grid grid-cols-1 gap-6 rounded-md border border-solid border-gray-300  backgroundGrident p-8 md:p-10">
            <img
              src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9406b0e6cf62_placeholder-logo.svg"
              alt=""
              className="inline-block"
            />
            <p className="text-gray-500">
              “Lorem ipsum dolor sit amet, elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"
            </p>
            <div className="flex flex-row items-start">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
              />
              <div className="flex flex-col items-start">
                <h6 className="text-base font-bold">Laila Bahar</h6>
                <p className="text-sm text-gray-500">Designer</p>
              </div>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-center">
          <a
            href="#"
            className="mr-5 inline-block items-center bg-black px-6 py-3 text-center font-semibold text-white"
          >
            Get Started
          </a>
          <a
            href="#"
            className="inline-block items-center border border-solid border-black bg-white px-6 py-3 text-center font-semibold text-black"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ReviewSection