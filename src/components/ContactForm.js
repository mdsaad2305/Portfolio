import React from "react";



const ContactForm = () => {
    return (
        <form action="https://getform.io/f/5a62e304-0f7a-41bb-b889-57e4b4835a29" method="post" className="max-w-md w-full px-6 py-8 bg-gray-800 rounded-lg">
          <input
            className="appearance-none border rounded w-full py-3 px-6 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline mb-4"
            name="name"
            type="text"
            placeholder="Name"
          />
          <input
            className="appearance-none border rounded w-full py-3 px-6 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline mb-4"
            name="email"
            type="email"
            placeholder="Email"
          />
          <textarea
            className="appearance-none border rounded w-full py-3 px-6 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline h-32 resize-none mb-6"
            name="message"
            placeholder="Message"
          ></textarea>
          <button
            className="flex items-center justify-center bg-gray-700 hover:bg-gray-800 border border-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
      </form>
    )
}

export default ContactForm;