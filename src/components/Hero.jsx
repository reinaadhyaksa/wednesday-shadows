import { FaPlay, FaTv } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            <div className="absolute inset-0 bg-gradient-to-b from-dark via-secondary to-dark opacity-80"></div>
            <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>

            <div className="container mx-auto px-6 relative z-10 text-center" data-aos="fade-down">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 font-orbitron">
                    Welcome to <span className="text-primary">Nevermore</span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
                    Discover the darkness behind the brilliance of Wednesday Addams.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="https://www.netflix.com/id/title/81231974"
                        className="bg-primary hover:bg-secondary text-dark font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                        <FaPlay /> Watch Trailer
                    </a>
                    <a
                        href="https://www.netflix.com/id/title/81231974"
                        className="border-2 border-primary text-primary hover:bg-primary hover:text-dark font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                        <FaTv className="w-5 h-5" /> Start Streaming
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;