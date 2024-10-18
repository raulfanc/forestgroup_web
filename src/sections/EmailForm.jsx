import emailjs from 'emailjs-com'
import React, { useState } from 'react'

const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

const EmailForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    from_email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    const fullName = `${formData.firstName} ${formData.lastName}`
    e.target.from_name.value = fullName

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text)
        alert('Message Sent Successfully')
      },
      (error) => {
        console.log(error.text)
        alert('Something went wrong!')
      }
    )
    e.target.reset()
    setFormData({
      firstName: '',
      lastName: '',
      from_email: '',
      message: '',
    })
  }

  return (
    // <div className="flex items-center justify-center bg-[#FFFFFF] py-16 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-xl w-full bg-[#1E2D3B] p-8 rounded-lg shadow-md">
    //     <h2 className="text-4xl font-bold text-center text-[#ffffff] mb-6">
    //       Contact Us
    //     </h2>
    //     <p className="text-center text-[#ffffff] mb-8">
    //       We'd love to hear from you. Please fill out the form below and we'll
    //       get in touch soon.
    //     </p>
    //     <form onSubmit={handleOnSubmit}>
    //       <div className="flex flex-wrap -mx-2 mb-4">
    //         <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
    //           <label className="block text-[#ffffff] font-semibold mb-2">
    //             First Name
    //           </label>
    //           <input
    //             type="text"
    //             name="firstName"
    //             autoComplete="off"
    //             value={formData.firstName}
    //             onChange={handleChange}
    //             placeholder="Your first name..."
    //             required
    //             className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
    //           />
    //         </div>
    //         <div className="w-full md:w-1/2 px-2">
    //           <label className="block text-[#ffffff] font-semibold mb-2">
    //             Last Name
    //           </label>
    //           <input
    //             type="text"
    //             name="lastName"
    //             autoComplete="off"
    //             value={formData.lastName}
    //             onChange={handleChange}
    //             placeholder="Your last name..."
    //             required
    //             className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
    //           />
    //         </div>
    //       </div>

    //       <div className="mb-4">
    //         <label className="block text-[#ffffff] font-semibold mb-2">
    //           Email
    //         </label>
    //         <input
    //           type="email"
    //           name="from_email"
    //           value={formData.from_email}
    //           onChange={handleChange}
    //           autoComplete="off"
    //           placeholder="Your email..."
    //           required
    //           className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
    //         />
    //       </div>

    //       <div className="mb-6">
    //         <label className="block text-[#ffffff] font-semibold mb-2">
    //           Message
    //         </label>
    //         <textarea
    //           name="message"
    //           rows="5"
    //           value={formData.message}
    //           onChange={handleChange}
    //           placeholder="Your message..."
    //           required
    //           className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm resize-none"
    //         ></textarea>
    //       </div>

    //       <input type="hidden" name="from_name" />

    //       <button
    //         type="submit"
    //         className="w-full py-3 bg-[#EDCD1F] text-[#000000] font-semibold rounded-md shadow-lg hover:bg-[#D4B017] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-300"
    //         >
    //         Submit
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div className="flex items-center justify-center bg-[#FFFFFF] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full bg-[#eae0d5] p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-center mb-8">
          We'd love to hear from you. Please fill out the form below and we'll
          get in touch soon.
        </p>
        <form onSubmit={handleOnSubmit}>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <label className="block font-semibold mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                autoComplete="off"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Your first name..."
                required
                className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label className="block font-semibold mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                autoComplete="off"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Your last name..."
                required
                className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Your email..."
              required
              className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              required
              className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm resize-none"
            ></textarea>
          </div>

          <input type="hidden" name="from_name" />

          <button
            type="submit"
            className="w-full py-3 bg-[#584a41] text-[#ffffff] font-semibold rounded-md shadow-lg hover:bg-[#7a6857] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default EmailForm
