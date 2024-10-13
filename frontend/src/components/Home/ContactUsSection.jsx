import { useState } from 'react';
import Mail from '../../assets/Mail-amico.png';

const ContactUsSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(formData);
    };

    return (
        <div className='flex items-center justify-center gap-8 p-16  bg-beige'>

            <div className=' w-[600px]'>
                <img src={Mail} alt="Left" className="h-full w-full object-cover" />
            </div>
            <div className=" flex flex-col items-center justify-center w-[700px] h-[600px] p-16">
                <h1 className="text-5xl font-bold text-gray-800 mt-5">Contact Us</h1>
                <form
                    onSubmit={handleSubmit}
                    className="bg-customPink bg-opacity-60 p-8 rounded-lg shadow-md  w-full mt-6"
                >
                    {/* <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-customPink to-beige">Contact Us</h2> */}

                    {/* Full Name Input */}
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2  focus:border-customGreen"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Message Textarea */}
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                            placeholder="Enter your message"
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white py-2 px-4 rounded-sm hover:bg-gray-600 transition-colors"
                    >
                        Send Message
                    </button>
                </form>
            </div>

        </div>
    );
};

export default ContactUsSection;
