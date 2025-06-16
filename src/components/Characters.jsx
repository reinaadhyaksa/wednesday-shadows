import { characters } from "../data";

const Characters = () => {
    return (
        <section id="characters" className="py-20 bg-dark">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-16 text-center font-orbitron" data-aos="fade-up">
                    Main <span className="text-primary">Characters</span>
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {characters.map((character, index) => (
                        <div
                            key={index}
                            className="bg-secondary bg-opacity-20 rounded-xl overflow-hidden border border-secondary border-opacity-30 hover:border-primary transition-all duration-300 transform hover:-translate-y-2"
                            data-aos="fade-up"
                            data-aos-delay={(index + 1) * 100}
                        >
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={character.images}
                                    alt={character.name}
                                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{character.name}</h3>
                                <p className="text-primary mb-4 flex items-center">
                                    {character.icon} <span className="ml-2">{character.power}</span>
                                </p>
                                <p className="text-light text-opacity-80">
                                    {character.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Characters;