import mongoose from "mongoose";
import config from "./src/config/index";
import MOVIE from "./src/models/movie.model";

mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const movies = [
  {
    title: "Aquaman",
    synopsis:
      "Amphibious superhero Arthur Curry learns what it means to be Aquaman when he must stop the king of Atlantis from waging war against the surface world.",
    genre: "Adventure",
    productionYear: 2018,
  },
  {
    title: "Deadpool",
    synopsis:
      "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
    genre: "Action",
    productionYear: 2016,
  },
  {
    title: "Tomorrowland",
    synopsis:
      "Bound by a shared destiny, a teen bursting with scientific curiosity and a former boy-genius inventor embark on a mission to unearth the secrets of a place somewhere in time and space that exists in their collective memory.",
    genre: "Action",
    productionYear: 2015,
  },
  {
    title: "Alice in Wonderland",
    synopsis:
      "Nineteen-year-old Alice returns to the magical world from her childhood adventure, where she reunites with her old friends and learns of her true destiny: to end the Red Queen's reign of terror.",
    genre: "Comedy",
    productionYear: 2010,
  },
  {
    title: "X-Men: Apocalypse",
    synopsis:
      "With mutants Apocalypse and Magneto intent on mankind's destruction, Professor X and his team of young X-Men must battle for the future of humanity.",
    genre: "Fantasy",
    productionYear: 2016,
  },
  {
    title: "Jumanji: Welcome to the Jungle",
    synopsis:
      "Four high school students get sucked into the jungle setting of a video game, where they embark on a quest as their comically mismatched adult avatars.",
    genre: "Fantasy",
    productionYear: 2017,
  },
  {
    title: "How to Train Your Dragon: The Hidden World",
    synopsis:
      "After meeting an enchanted creature, Hiccup and Toothless set out to find a legendary dragon paradise before evil hunter Grimmel finds them first.",
    genre: "Children",
    productionYear: 2019,
  },
  {
    title: "The Angry Birds Movie 2",
    synopsis:
      "Enemies turn into frenemies when the Pigs call for a truce with the Birds to unite against a formidable new foe that’s threatening all of their homes.",
    genre: "Children",
    productionYear: 2019,
  },
  {
    title: "Despicable Me",
    synopsis:
      "Villainous Gru hatches a plan to steal the moon from the sky. But he has a tough time staying on task after three orphans land in his care.",
    genre: "Children",
    productionYear: 2010,
  },
  {
    title: "Spider-Man: Homecoming",
    synopsis:
      "Peter Parker returns to routine life as a high schooler until the Vulture's arrival gives him the chance to prove himself as a web-slinging superhero.",
    genre: "Adventure",
    productionYear: 2017,
  },
];

const seedDB = async () => {
  await MOVIE.deleteMany({});
  await MOVIE.insertMany(movies);
};

seedDB().then(() => {
  mongoose.connection.close();
});
