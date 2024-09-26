import emailjs from "emailjs-com";
import React, { useState } from "react";

const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const EmailForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // 确保更新状态
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const fullName = `${formData.firstName} ${formData.lastName}`;
    e.target.from_name.value = fullName;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        alert("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong!");
      }
    );
    e.target.reset();
    setFormData({
      firstName: "",
      lastName: "",
      from_email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full space-y-6"
        onSubmit={handleOnSubmit}
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Send me a message. Let's have a chat!
        </h2>

        <div className="flex space-x-4">
          <div className="flex flex-col w-1/2">
            <label className="text-gray-700 font-semibold">First Name</label>
            <input
              type="text"
              name="firstName"
              autoComplete="off"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Your first name..."
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-gray-700 font-semibold">Last Name</label>
            <input
              type="text"
              name="lastName"
              autoComplete="off"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Your last name..."
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Your email..."
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold">Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
          ></textarea>
        </div>

        <input type="hidden" name="from_name" />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
