import React from 'react';

function Contact() {
  return (
    <section className="bg-gray-300 flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-5 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          
        </div>

        <div className="bg-gray-500 rounded-lg shadow-md p-8 max-w-lg mx-auto border border-gray-900">
          <form className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full py-3 px-4 bg-gray-50 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full py-3 px-4 bg-gray-50 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full py-3 px-4 bg-gray-50 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 h-32"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="py-3 px-6 bg-gray-900 text-white font-semibold rounded-lg hover:bg-yellow-500 hover:text-black hover:font-bold transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
