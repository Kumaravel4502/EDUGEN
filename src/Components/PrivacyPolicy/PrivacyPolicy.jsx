

const PrivacyPolicy = () => {
    return (
        <div className="2xl:container mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-15">
            <div className="relative bg-[#FFF7FA] pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-18 overflow-hidden rounded-xl">
                {/* Main Content */}
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl  font-bold text-black">
                        Privacy Policy
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium">
                        <a href="/" className="hover:text-[#8A47CB] font-semibold">
                            Home
                        </a>
                        <span className="text-[#8A47CB] font-semibold"> – Privacy Policy</span>
                    </p>
                </div>

                {/* Top background image */}
                <div className="w-full text-center mb-6 sm:mb-8 md:mb-10">
                    <img
                        src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages1.png"
                        alt="Top Decoration"
                        className="mx-auto w-full max-w-2xl"
                    />
                </div>

                {/* Decorative arc-like background */}
                <div className="absolute inset-0 z-0">
                    <div className="w-[150%] h-[100%] bg-gradient-to-b from-[#F8F8F8] to-transparent rounded-full absolute top-[-75%] left-[-25%]" />
                </div>

                {/* Left Arrow Illustration */}
                <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages5.svg"
                    alt="Arrow Decoration"
                    className="absolute top-6 left-4 sm:top-10 sm:left-10 w-10 sm:w-14 md:w-16 z-10"
                />

                {/* Right Book Illustration */}
                <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages4.svg"
                    alt="Book Decoration"
                    className="absolute top-6 right-4 sm:top-10 sm:right-10 w-10 sm:w-14 md:w-16 z-10"
                />
            </div>
            <div className="w-[90%] mx-auto mt-20 space-y-4">
                <h2 className="sm:text-2xl md:text-3xl  font-bold text-black">Our Website</h2>
                <p className="text-gray-700 font-medium">Our website address is: <a className="text-blue-500 font-bold" href="https://internwork.com">https://internwork.com</a></p>
                <h2 className="sm:text-2xl md:text-3xl  font-bold text-black">Intellectual property</h2>
                <p className="text-gray-700 font-medium leading-8">Welcome to our website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
                <h2 className="sm:text-2xl md:text-3xl  font-bold text-black">Edugen Overview</h2>
                <p className="text-gray-700 font-medium leading-8">We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, subscribe to the newsletter, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, company name. We will collect personal identification information from Users only if they voluntarily consent such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related.</p>

                <h2 className="sm:text-2xl md:text-3xl  font-bold text-black">General permission to use and access and use limitations</h2>
                <p className="text-gray-700 font-medium leading-8">This site is provided by Edugen. Edugen collects information in several ways from different parts of this site.</p>

                <ol className="list-decimal list-inside text-gray-700 font-medium leading-8">
                    <li>Complimentary ground shipping within 1 to 7 business days</li>
                    <li>In-store collection available within 1 to 7 business days</li>
                    <li>Next-day and Express delivery options also available</li>
                    <li>Purchases are delivered in an orange box tied with a Bolduc ribbon, with the exception of certain items</li>
                    <li>See the delivery FAQs for details on shipping methods, costs and delivery times</li>
                </ol>
                <h2 className="sm:text-2xl md:text-3xl  font-bold text-black">Linking to this Site</h2>
                <p className="text-gray-700 font-medium leading-8">Items returned within 14 days of their original shipment date in same as new condition will be eligible for a full refund or store credit. Refunds will be charged back form of payment used for purchase. Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.</p>
                <h2 className="sm:text-2xl md:text-3xl  font-bold text-black">Confidential information</h2>
                <p className="text-gray-700 font-medium leading-8"><span className="font-bold">Edugen</span> accepts the following payment methods:</p>
                <ul className="list-disc list-inside text-gray-700 font-medium leading-8">
                    <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                    <li><span className="font-bold">Edugen</span> features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                </ul>
                <p className="text-gray-700 font-medium leading-8"><span className="font-bold">PayPal:</span>Shop easily online without having to enter your credit card details on the website.Your account will be charged once the order is completed. To register for a PayPal account, visit the website <a href="https://www.paypal.com" className="text-blue-500 font-bold">paypal.com</a>.</p>
            </div>

        </div>


    )
}

export default PrivacyPolicy