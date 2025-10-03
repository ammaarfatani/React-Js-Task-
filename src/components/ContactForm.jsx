import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
   <div className="bg-[#E01923] text-white p-10 flex flex-col justify-center">
  <div className="max-w-md mx-auto w-full">
    <p className="text-sm font-semibold tracking-widest uppercase mb-3">
      LET’S TALK
    </p>
    <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
      Got an idea? <br /> Let’s get in touch!
    </h1>
    <p className="text-red-100 mb-8 text-sm md:text-base">
      Have queries? Not sure of your App Strategy? <br />
      Discuss with us and we'll guide you the way forward.
    </p>

    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full p-4 bg-white text-gray-800 rounded-md focus:ring-2 focus:ring-red-300"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        className="w-full p-4 bg-white text-gray-800 rounded-md focus:ring-2 focus:ring-red-300"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="w-full p-4 bg-white text-gray-800 rounded-md focus:ring-2 focus:ring-red-300"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        rows={5}
        className="w-full p-4 bg-white text-gray-800 rounded-md focus:ring-2 focus:ring-red-300"
        required
      ></textarea>

      <button
        type="submit"
        className="w-full py-4 text-white font-bold uppercase tracking-wide bg-gradient-to-b from-red-700 to-red-900 rounded-md shadow-md hover:from-red-800 hover:to-black transition-all"
      >
        Let’s Get In Touch
      </button>
    </form>
  </div>
</div>

  );
};

export default ContactForm;
