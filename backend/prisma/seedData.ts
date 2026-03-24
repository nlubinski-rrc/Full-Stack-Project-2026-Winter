const movies = [
  {
    title: "Ant-Man and the Wasp: Quantumania",
    overview: "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
    averageRating: 7,
    releaseDate: "2023-02-15",
  },
  {
    title: "The Super Mario Bros. Movie",
    overview: "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    averageRating: 8,
    releaseDate: "2023-04-05",
  },
  {
    title: "Shazam! Fury of the Gods",
    overview: "Billy Batson and his foster siblings, who transform into superheroes by saying \"Shazam!\", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.",
    averageRating: 7,
    releaseDate: "2023-03-15",
  },
  {
    title: "Avatar: The Way of Water",
    overview: "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    averageRating: 8,
    releaseDate: "2022-12-14",
  },
  {
    title: "The Last Kingdom: Seven Kings Must Die",
    overview: "In the wake of King Edward's death, Uhtred of Bebbanburg and his comrades adventure across a fractured kingdom in the hopes of uniting England at last.",
    averageRating: 7,
    releaseDate: "2023-04-14",
  },
  {
    title: "Creed III",
    overview: "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian — a fighter who has nothing to lose.",
    averageRating: 7,
    releaseDate: "2023-03-01",
  },
  {
    title: "Evil Dead Rise",
    overview: "Two sisters find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
    averageRating: 7,
    releaseDate: "2023-04-12",
  },
  {
    title: "Murder Mystery 2",
    overview: "After starting their own detective agency, Nick and Audrey Spitz land a career-making case when their billionaire pal is kidnapped from his wedding.",
    averageRating: 7,
    releaseDate: "2023-03-28",
  },
  {
    title: "Puss in Boots: The Last Wish",
    overview: "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    averageRating: 8,
    releaseDate: "2022-12-07",
  },
  {
    title: "John Wick: Chapter 4",
    overview: "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    averageRating: 8,
    releaseDate: "2023-03-22",
  },
  {
    title: "Adrenaline",
    overview: "A female FBI agent holidaying in Eastern Europe with her family gets her life upside down when her daughter is kidnapped. She has to team up with a criminal on the run to save her daughter before time runs out.",
    averageRating: 4,
    releaseDate: "2022-12-15",
  },
  {
    title: "Cocaine Bear",
    overview: "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
    averageRating: 6,
    releaseDate: "2023-02-22",
  },
  {
    title: "The Communion Girl",
    overview: "Spain, late 1980s. Newcomer Sara tries to fit in with the other teens in this tight-knit small town in the province of Tarragona. If only she were more like her extroverted best friend, Rebe. They go out one night at a nightclub, on the way home, they come upon a little girl holding a doll, dressed for her first communion. And that's when the nightmare begins.",
    averageRating: 6,
    releaseDate: "2023-02-10",
  },
  {
    title: "65",
    overview: "65 million years ago, the only 2 survivors of a spaceship from Somaris that crash-landed on Earth must fend off dinosaurs and reach the escape vessel in time before an imminent asteroid strike threatens to destroy the planet.",
    averageRating: 6,
    releaseDate: "2023-03-02",
  },
  {
    title: "Pirates Down the Street II: The Ninjas from Across",
    overview: "The pirates feel right at home in Sandborough, but the atmosphere cools right down when the ninjas come to live in the street. After all, pirates and ninjas are sworn enemies! While pirate captain Hector Blunderbuss struggles to get rid of his new neighbours, son Billy and ninja daughter Yuka become friends. The pirates challenge the ninjas to the ultimate battle at the village's annual hexathlon.",
    averageRating: 6,
    releaseDate: "2022-04-20",
  },
  {
    title: "Gangs of Lagos",
    overview: "A group of friends who each have to navigate their own destiny, growing up on the bustling streets and neighborhood of Isale Eko, Lagos.",
    averageRating: 6,
    releaseDate: "2023-04-07",
  },
  {
    title: "The Pope's Exorcist",
    overview: "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
    averageRating: 7,
    releaseDate: "2023-04-05",
  },
  {
    title: "Supercell",
    overview: "Good-hearted teenager William always lived in hope of following in his late father's footsteps and becoming a storm chaser. His father's legacy has now been turned into a storm-chasing tourist business, managed by the greedy and reckless Zane Rogers, who is now using William as the main attraction to lead a group of unsuspecting adventurers deep into the eye of the most dangerous supercell ever seen.",
    averageRating: 6,
    releaseDate: "2023-03-17",
  },
  {
    title: "Kill Boksoon",
    overview: "At work, she's a renowned assassin. At home, she's a single mom to a teenage daughter. Killing? That's easy. It's parenting that's the hard part.",
    averageRating: 7,
    releaseDate: "2023-02-17",
  },
  {
    title: "Attack on Titan",
    overview: "As viable water is depleted on Earth, a mission is sent to Saturn's moon Titan to retrieve sustainable H2O reserves from its alien inhabitants. But just as the humans acquire the precious resource, they are attacked by Titan rebels, who don't trust that the Earthlings will leave in peace.",
    averageRating: 6,
    releaseDate: "2022-09-30",
    },
];

const reviews = [
    {
        movieName: "Kill Boksoon",
        review: "Fantastic movie, I really liked it.",
        reviewOutOfTen: 9
    },
    {
        movieName: "Supercell",
        review: "I did not like this movie, I thought it sucked.",
        reviewOutOfTen: 2
    }
]

export {movies, reviews}