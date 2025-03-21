import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen px-[3%] py-[2%] overflow-y-auto bg-zinc-900 text-white">
      <div className="w-full flex items-center mb-6">
        <h1 className="text-2xl font-semibold text-zinc-400 flex items-center">
          <i onClick={() => navigate("/")} className="hover:text-[#6556CD] cursor-pointer ri-arrow-left-line mr-2"></i>
          Contact Us
        </h1>
      </div>

      <div className="flex justify-center">
      <div className="max-w-3xl ">
        <h2 className="text-3xl font-bold text-[#6556CD]">Contact Information</h2>
        <p className="text-gray-300 mt-4">
          Have questions, feedback, or partnership inquiries? Feel free to reach out to us. 
          We’d love to hear from you!
        </p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-white">Contact Us:</h3>
          <ul className="mt-3 space-y-3 text-gray-300">
            <li>📧 <span className="text-white font-semibold">Email:</span> kahananghan9383@gmail.com</li>
            <li>📞 <span className="text-white font-semibold">Phone:</span> +91 82641 09896</li>
            <li>📍 <span className="text-white font-semibold">Address:</span> Surat, Gujarat, India</li>
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-white">Send Us a Message</h3>
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-[#1e1e1e] border border-zinc-700 rounded-lg text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-[#1e1e1e] border border-zinc-700 rounded-lg text-white focus:outline-none"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 bg-[#1e1e1e] border border-zinc-700 rounded-lg text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#6556CD] hover:bg-[#4b3ca7] text-white px-6 py-2 rounded-lg transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-white">Follow Us</h3>
          <p className="text-gray-300 mt-2">Stay updated with the latest movies & shows by following us on social media.</p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-2xl text-blue-500 hover:text-white"><i className="ri-facebook-circle-fill"></i></a>
            <a href="#" className="text-2xl text-blue-400 hover:text-white"><i className="ri-twitter-fill"></i></a>
            <a href="#" className="text-2xl text-pink-500 hover:text-white"><i className="ri-instagram-fill"></i></a>
            <a href="#" className="text-2xl text-red-500 hover:text-white"><i className="ri-youtube-fill"></i></a>
          </div>
        </div>

        <div className="mt-8">
          <button onClick={() => navigate("/")} className="bg-[#6556CD] hover:bg-[#4b3ca7] text-white px-6 py-2 rounded-lg transition-all">
            Go Home
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
