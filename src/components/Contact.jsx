import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section name="Contact">
      <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
          <h2 className="text-4xl font-semibold font-serif text-center text-white mb-6">
          <span className="pb-1 border-b border-teal-500">Contact</span>
          </h2>
          <p className="text-lg font-normal mb-4 text-center text-gray-300">
          Interested in collaborating? Feel free to get in touch with me.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
