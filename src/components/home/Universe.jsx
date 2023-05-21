import AOS from 'aos';
import 'aos/dist/aos.css';

const Universe = () => {
    AOS.init();
    
    return (
        <div className="md:px-32 overflow-hidden">
            <h1 className="text-5xl text-charcoal font-bold text-center leading-[60px]">Visit Different <span className="text-metalicGold text-6xl bg-base-200 px-5 py-2 rounded-xl">Universes</span></h1>
            <div className="mt-16">
                <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-between items-center"
                data-aos="fade-up-left"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                >
                    <div className="w-full md:w-3/4 mx-auto h-[350px] md:h-fit shadow-xl">
                        <img className="w-full h-full object-cover object-center rounded-lg" src='https://i.postimg.cc/kXKKKxdT/stars.jpg' alt="star-wars" />
                    </div>
                    <div className="w-full">
                        <h1 className="text-3xl font-bold text-metalicGold">Star Wars: Journey to a Galaxy Far, Far Away</h1>
                        <p className="mt-5 text-sm text-gray-600 leading-6 tracking-wider text-justify">The Star Wars universe began in 1977 with the release of the first film, later titled "Star Wars: Episode IV - A New Hope." Created by George Lucas, Star Wars introduced audiences to a galaxy far, far away, filled with epic space battles, mystical Jedi knights, and a timeless struggle between good and evil. The original trilogy, followed by prequels and sequels, delved into the rise and fall of Anakin Skywalker, the hero's journey of Luke Skywalker, and the ongoing conflict between the Rebel Alliance and the Galactic Empire. Star Wars has become a cultural phenomenon, spawning a vast universe of films, TV series, books, comics, and merchandise.</p>
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-20 justify-between items-center mt-16 md:mt-5"
                data-aos="fade-up-right"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                >
                    <div className="w-full">
                        <h1 className="text-3xl font-bold text-metalicGold">Marvel: Unleash Your Inner Superhero</h1>
                        <p className="mt-5 text-sm text-gray-600 leading-6 tracking-wider text-justify">The Marvel Universe has a rich and storied history that dates back to the publication of Marvel Comics #1 in 1939. Over the years, Marvel has introduced countless iconic characters and storylines that have shaped the landscape of superhero storytelling. From the creation of the Fantastic Four in 1961, to the debut of Spider-Man, the X-Men, and the Avengers, Marvel has captivated audiences with its relatable heroes, complex narratives, and exploration of social issues. The Marvel Universe has expanded beyond comics into movies, TV shows, and other media, creating a vast interconnected universe known as the Marvel Cinematic Universe (MCU).</p>
                    </div>
                    <div className="w-full md:w-3/4 mx-auto h-[350px] md:h-fit shadow-xl">
                        <img className="w-full h-full object-cover object-center rounded-lg" src='https://i.postimg.cc/8zGWHjpN/marvel.jpg' alt="marvel" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-between items-center mt-16 md:mt-5"
                data-aos="fade-up-left"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                >
                    <div className="w-full md:w-3/4 mx-auto h-[350px] md:h-fit shadow-xl">
                        <img className="w-full h-full object-cover object-center rounded-lg" src="https://i.postimg.cc/ryv5Df7d/dc.jpg" alt="" />
                    </div>
                    <div className="w-full">
                        <h1 className="text-3xl font-bold text-metalicGold">DC: Embrace the Hero Within</h1>
                        <p className="mt-5 text-sm text-gray-600 leading-6 tracking-wider text-justify">DC Comics, originally known as National Allied Publications, has a history that dates back to the late 1930s. The DC Universe is home to iconic characters like Superman, Batman, Wonder Woman, and the Justice League. With Superman's debut in Action Comics #1 in 1938, DC kickstarted the age of superheroes. Over the years, DC has expanded its universe with memorable storylines, including the creation of Batman in 1939, the formation of the Justice League in 1960, and the reinvention of characters like Green Lantern and The Flash. DC's stories explore themes of heroism, justice, and the struggle between light and darkness.</p>
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-20 justify-between items-center mt-16 md:mt-5"
                data-aos="fade-up-right"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                >
                    <div className="w-full">
                        <h1 className="text-3xl font-bold text-metalicGold">Transformers:More Than Meets the Eye</h1>
                        <p className="mt-5 text-sm text-gray-600 leading-6 tracking-wider text-justify">Experience the incredible world of Transformers, where robots in disguise wage an eternal battle between Autobots and Decepticons. From their origins on the planet Cybertron to their ongoing conflict on Earth, Transformers have captured our imaginations with their shape-shifting abilities and captivating storylines. Discover the history and achievements of these remarkable machines, witness their epic transformations, and join the battle for the fate of the universe. Prepare to be awed by the intricate lore and technological marvels that make Transformers a truly unique and beloved franchise.</p>
                    </div>
                    <div className="w-full md:w-3/4 mx-auto h-[350px] md:h-fit shadow-xl">
                        <img className="w-full h-full object-cover object-center rounded-lg" src="https://i.postimg.cc/Cx486S5D/transes.jpg" alt="transformers" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Universe;