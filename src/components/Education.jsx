import React from 'react'

const Education = () => {
  return (
    <div className="flex flex-col ml-20 md:flex-row justify-between py-10 px-5">
      <div className="md:w-1/3">
        <h2 className="text-4xl font-bold">Education</h2>
      </div>
      <div className="md:w-2/3">
        <div className="mb-8">
          <h3 className="text-5xl font-semibold border-b-[.5px] w-fit py-5 mb-5 border-green-600">Bachelor's in Data Science</h3>
          <p className="text-gray-300">2023 - Present</p>
          <p className="text-gray-300">Muhammad Nawaz Sharif University of Agriculture, Multan</p>
          <p className="text-gray-300">CGPA - 3.5</p>
          <p className="text-gray-300">Old Shujabad Road, Multan</p>
        </div>
      </div>
    </div>
  )
}

export default Education