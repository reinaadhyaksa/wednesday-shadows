import { FaArrowRight } from 'react-icons/fa';

const Episodes = () => {
    const episodes = [
        {
            number: 1,
            title: "Wednesday's Child Is Full of Woe",
            description: "After getting expelled, Wednesday is sent to Nevermore Academy, where she attempts to fit in and solve a local murder mystery."
        },
        {
            number: 2,
            title: "Woe Is the Loneliest Number",
            description: "Wednesday's visions lead her to investigate a mysterious monster, while she struggles to connect with her new classmates."
        },
        {
            number: 3,
            title: "Friend or Woe",
            description: "Wednesday reluctantly teams up with Enid for the school's annual Poe Cup competition, uncovering more clues about the monster."
        }
    ];

    return (
        <section id="episodes" className="py-20 bg-gradient-to-b from-secondary to-dark">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-16 text-center font-orbitron" data-aos="fade-up">
                    Season <span className="text-primary">1</span> Episodes
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {episodes.map((episode, index) => (
                        <div
                            key={index}
                            className="bg-dark rounded-xl overflow-hidden border border-secondary border-opacity-30 hover:border-primary transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={(index + 1) * 100}
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src="https://i.pinimg.com/736x/d2/24/63/d224639386c0b28578d98ef5eb65cc7c.jpg"
                                    alt={`Episode ${episode.number}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark to-transparent p-4">
                                    <span className="bg-primary text-dark px-3 py-1 rounded-full text-sm font-bold">Episode {episode.number}</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{episode.title}</h3>
                                <p className="text-light text-opacity-80 mb-4">
                                    {episode.description}
                                </p>
                                <a href="https://www.netflix.com/id/title/81231974" className="text-primary hover:underline flex items-center">
                                    More info <FaArrowRight className="ml-2" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12" data-aos="fade-up">
                    <a
                        href="https://www.netflix.com/id/title/81231974"
                        className="inline-block bg-primary hover:bg-secondary text-dark font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                        View All Episodes
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Episodes;