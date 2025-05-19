import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="relative bg-[#FFF7FA] pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-18 overflow-hidden rounded-xl mb-12 max-w-6xl mx-auto">
        <div className="relative z-20 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Contact Us
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium">
            <Link to="/" className="hover:text-[#8A47CB] font-semibold">
              Home
            </Link>
            <span className="text-[#8A47CB] font-semibold"> – Contact </span>
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="w-[150%] h-[100%] bg-gradient-to-b from-[#F8F8F8] to-transparent rounded-full absolute top-[-75%] left-[-25%]" />
        </div>
        <img
          src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages5.svg"
          alt="Arrow Decoration"
          className="absolute top-12 left-8 sm:top-16 sm:left-16 w-12 sm:w-16 md:w-20 z-10"
        />
        <img
          src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages4.svg"
          alt="Book Decoration"
          className="absolute top-12 right-8 sm:top-16 sm:right-16 w-12 sm:w-16 md:w-20 z-10"
        />
      </div>

      {/* Contact Card Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg p-8 md:p-12">
        {/* Left: Contact Info */}
        <div className="flex flex-col justify-center">
          <div className="text-sm sub-title font-semibold mb-2 text-blue-500">Contact Us</div>
          <div className="text-3xl font-bold text-black mb-6">
            Get In <span className="text-green-500">Touch</span>
          </div>
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-purple-500/10 text-purple-600 rounded-lg p-3">
                <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/contact1.svg" alt="" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Email-Us:</div>
                <div className="text-gray-600 text-sm">edugenmail@gmail.com</div>
              </div>
            </div>
            {/* Call */}
            <div className="flex items-start gap-4">
              <div className="bg-teal-400/10 text-teal-500 rounded-lg p-3">
                <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/contact2.svg" alt="" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Call Us:</div>
                <div className="text-gray-600 text-sm">+91 9876543210</div>
              </div>
            </div>
            {/* Office */}
            <div className="flex items-start gap-4">
              <div className="bg-purple-500/10 text-purple-600 rounded-lg p-3">
                <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/contact3.svg" alt="" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Office:</div>
                <div className="text-gray-600 text-sm">Mountain Green Road 2389 NY, USA</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Contact Form */}
        <form className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 justify-center">
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" className="flex-1 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Name*" required />
            <input type="email" className="flex-1 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Email*" required />
          </div>
          <input type="text" className="border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Website Address" />
          <textarea className="border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" rows="4" placeholder="Your Message*" required></textarea>
          <button type="submit" className="bg-[#8A47CB] text-white font-semibold py-2 rounded-md hover:bg-[#6C2CA7] transition mt-2">Send Message</button>
        </form>
      </div>

      {/* Full-width Map */}
      <div className="w-full mt-10 rounded-xl overflow-hidden shadow border border-gray-200 max-w-6xl mx-auto">
        <iframe
          title="Edugen Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=0.0%2C51.3%2C0.3%2C51.6&amp;layer=mapnik"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
