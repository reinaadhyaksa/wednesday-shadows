const Footer = () => {
    return (
        <footer className="bg-secondary bg-opacity-20 py-12 border-t border-secondary border-opacity-30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-2xl font-bold font-orbitron mb-6 md:mb-0">
                        <span className="text-primary">Wednesday</span> Shadows
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-primary transition">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition">Terms of Service</a>
                        <a href="#" className="hover:text-primary transition">Contact</a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-secondary border-opacity-20 text-center text-light text-opacity-70">
                    <p>© 2023 Wednesday Shadows. All rights reserved. Wednesday is a Netflix series.</p>
                    <p className="mt-2">This is a fan-made website and not affiliated with Netflix.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;