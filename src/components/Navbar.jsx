import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen]);

    return (
        <nav className="fixed w-full bg-dark bg-opacity-90 backdrop-blur-sm z-40 border-b border-secondary">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold font-orbitron">
                        <span className="text-primary">Wednesday</span> Shadows
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="hover:text-primary transition">Home</a>
                        <a href="#about" className="hover:text-primary transition">About</a>
                        <a href="#characters" className="hover:text-primary transition">Characters</a>
                        <a href="#episodes" className="hover:text-primary transition">Episodes</a>
                        <a href="#join" className="hover:text-primary transition">Join</a>
                    </div>
                    <div className="md:hidden">
                        <button
                            className="text-light focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <FaBars className="text-2xl" />
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 space-y-4 pb-4">
                        <a href="#home" className="block hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>Home</a>
                        <a href="#about" className="block hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>About</a>
                        <a href="#characters" className="block hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>Characters</a>
                        <a href="#episodes" className="block hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>Episodes</a>
                        <a href="#join" className="block hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>Join</a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;