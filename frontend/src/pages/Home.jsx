import React from 'react'

function Home() {
  return (
    <>
      <section className="text-gray-600 body-font bg-gray-300">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="habit tracker"
            src="https://img.freepik.com/free-vector/habit-tracker-template-floral-background_52683-48831.jpg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to Your Personal Habit Tracker!
            </h1>
            <p className="mb-8 leading-relaxed">
              Unlock your potential by tracking your daily habits and goals. Whether it's exercising, reading, or any other habit, 
              we are here to help you stay on track. Set your goals, monitor your progress, and celebrate every achievement. Start 
              building better habits today and make each day count!
            </p>
            <div className="flex justify-center">
            <button className="text-white bg-gray-800  border border-yellow-500 bg-gold hover:bg-yellow-500 hover:text-black rounded-lg py-2 px-8 font-bold focus:outline-none transition-colors duration-200">
            Get Started
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
