import React from 'react';

function About() {
    return (
        <>
            <section className="text-gray-600 body-font bg-gray-300">
                <div className="container mx-auto flex flex-col px-5 py-24">
                    <h1 className="text-center title-font sm:text-5xl text-4xl mb-8 font-bold text-gray-900">
                        About Our Habit Tracking App
                    </h1>
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="lg:w-1/2 mb-10 lg:mb-0">
                            <img
                                className="rounded-lg shadow-lg object-cover object-center w-full h-full"
                                alt="About"
                                src="https://thumbs.dreamstime.com/b/top-view-flat-lay-habit-tracker-book-pen-cup-black-coffee-succulent-plant-pot-blue-background-copy-space-206715044.jpg"
                            />
                        </div>
                        <div className="lg:w-1/2 lg:pl-10">
                            <p className="mb-4 leading-relaxed text-lg">
                                Our habit tracking app is designed to help you stay consistent, focused, and motivated as you work toward 
                                building better habits. Whether you’re aiming to establish a new routine, quit a bad habit, or simply monitor 
                                your daily activities, our app provides the tools and features you need to succeed. We believe in the power of 
                                small, consistent steps leading to big changes over time.
                            </p>
                            <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
                                Why Choose Us?
                            </h2>
                            <p className="mb-8 leading-relaxed text-lg">
                                Our app is built with simplicity and ease-of-use in mind, making it accessible to everyone. We offer a range of 
                                features, from customizable habit tracking options to daily reminders that keep you accountable. Our goal is to 
                                help you achieve your personal milestones and celebrate your growth every step of the way.
                            </p>
                            <div className="flex justify-center">
                                <button className="text-white bg-gray-800 hover:bg-yellow-500 hover:text-black transition duration-300 ease-in-out rounded-lg py-3 px-6 font-bold">
                                    Get Started
                                </button>
                                <button className="ml-4 inline-flex text-gray-700 bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out rounded-lg py-3 px-6">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
