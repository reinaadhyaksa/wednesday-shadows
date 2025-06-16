const About = () => {
    return (
        <section id="about" className="py-20 bg-gradient-to-b from-dark to-secondary">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-16 text-center font-orbitron" data-aos="fade-up">
                    About <span className="text-primary">The Series</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <p className="text-lg mb-6">
                            Wednesday is a sleuthing, supernaturally infused mystery charting Wednesday Addams' years as a
                            student at Nevermore Academy.
                        </p>
                        <p className="text-lg mb-6">
                            Wednesday attempts to master her emerging psychic ability, thwart a monstrous killing spree that
                            has terrorized the local town, and solve the supernatural mystery that embroiled her parents 25
                            years ago — all while navigating her new and very tangled relationships at Nevermore.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-primary bg-opacity-20 text-primary px-4 py-2 rounded-full">
                                <i className="fas fa-skull mr-2"></i> Gothic
                            </span>
                            <span className="bg-primary bg-opacity-20 text-primary px-4 py-2 rounded-full">
                                <i className="fas fa-magic mr-2"></i> Supernatural
                            </span>
                            <span className="bg-primary bg-opacity-20 text-primary px-4 py-2 rounded-full">
                                <i className="fas fa-theater-masks mr-2"></i> Mystery
                            </span>
                        </div>
                    </div>
                    <div className="relative" data-aos="fade-left">
                        <div className="absolute -inset-4 border-2 border-primary rounded-xl rotate-6 opacity-50"></div>
                        <div className="absolute -inset-4 border-2 border-primary rounded-xl -rotate-3 opacity-30"></div>
                        <img
                            src="https://media.gettyimages.com/id/1486455637/photo/hollywood-california-a-view-of-signage-is-seen-during-netflixs-wednesday-atas-official-event.jpg?s=612x612&w=0&k=20&c=flgv1Rl9Wugk9nHBcV6sy3kVSOlmbxxiF8smtdewL4I="
                            alt="Wednesday Series"
                            className="relative rounded-lg shadow-2xl w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;