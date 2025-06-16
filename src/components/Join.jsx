import { FaSkull, FaInstagram, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa';

const Join = () => {
    return (
        <section id="join" className="py-20 bg-dark">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-gradient-to-r from-dark to-secondary p-1 rounded-xl" data-aos="fade-up">
                    <div className="bg-dark rounded-lg p-8 md:p-12">
                        <h2 className="text-3xl font-bold mb-6 text-center font-orbitron">
                            Join the <span className="text-primary">Dark Side</span>
                        </h2>
                        <p className="text-center mb-8">
                            Subscribe to our newsletter for exclusive content, behind-the-scenes, and updates about
                            Wednesday.
                        </p>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-secondary bg-opacity-20 border border-secondary border-opacity-50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="wednesday@nevermore.edu"
                                />
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="agree"
                                    className="w-4 h-4 text-primary bg-secondary bg-opacity-20 border-secondary rounded focus:ring-primary focus:ring-2"
                                />
                                <label htmlFor="agree" className="ml-2 text-sm">I agree to receive emails about Wednesday</label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-secondary text-dark font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                            >
                                <FaSkull /> Subscribe Now
                            </button>
                        </form>

                        <div className="mt-8">
                            <p className="text-center mb-4">Follow us on social media</p>
                            <div className="flex justify-center space-x-6">
                                <a href="#" className="text-light hover:text-primary text-2xl transition">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="text-light hover:text-primary text-2xl transition">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="text-light hover:text-primary text-2xl transition">
                                    <FaTiktok />
                                </a>
                                <a href="#" className="text-light hover:text-primary text-2xl transition">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Join;