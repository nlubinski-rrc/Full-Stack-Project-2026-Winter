/*
import type { Movie } from "../types/movie";

export const movies: Movie[] = [
    {
      id: 640146,
      title: "Ant-Man and the Wasp: Quantumania",
      overview: "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
      genreIds: [28, 12, 878],
      averageRating: 6.5,
      releaseDate: "2023-02-15"
    },
    {
      Id: 502356,
      title: "The Super Mario Bros. Movie",
      overview: "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      genreIds: [16, 12, 10751, 14, 35],
      averageRating: 7.5,
      releaseDate: "2023-04-05"
    },
    {
      Id: 594767,
      title: "Shazam! Fury of the Gods",
      overview: "Billy Batson and his foster siblings, who transform into superheroes by saying \"Shazam!\", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.",
      genreIds: [28, 35, 14],
      averageRating: 6.8,
      releaseDate: "2023-03-15"
    },
    {
      Id: 76600,
      title: "Avatar: The Way of Water",
      overview: "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kIds), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      genreIds: [878, 12, 28],
      averageRating: 7.7,
      releaseDate: "2022-12-14"
    },
    {
      Id: 948713,
      title: "The Last Kingdom: Seven Kings Must Die",
      overview: "In the wake of King Edward's death, Uhtred of Bebbanburg and his comrades adventure across a fractured kingdom in the hopes of uniting England at last.",
      genreIds: [28, 12, 36, 18, 10752],
      averageRating: 7.4,
      releaseDate: "2023-04-14"
    },
    {
      Id: 677179,
      title: "Creed III",
      overview: "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian — a fighter who has nothing to lose.",
      genreIds: [18, 28],
      averageRating: 7.3,
      releaseDate: "2023-03-01"
    },
    {
      Id: 713704,
      title: "Evil Dead Rise",
      overview: "Two sisters find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
      genreIds: [27, 53],
      averageRating: 6.9,
      releaseDate: "2023-04-12"
    },
    {
      Id: 638974,
      title: "Murder Mystery 2",
      overview: "After starting their own detective agency, Nick and Audrey Spitz land a career-making case when their billionaire pal is kIdnapped from his wedding.",
      genreIds: [35, 9648, 28],
      averageRating: 6.6,
      releaseDate: "2023-03-28"
    },
    {
      Id: 315162,
      title: "Puss in Boots: The Last Wish",
      overview: "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
      genreIds: [16, 10751, 14, 12, 35, 18],
      averageRating: 8.3,
      releaseDate: "2022-12-07"
    },
    {
      Id: 603692,
      title: "John Wick: Chapter 4",
      overview: "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
      genreIds: [28, 53, 80],
      averageRating: 8,
      releaseDate: "2023-03-22"
    },
    {
      Id: 1048300,
      title: "Adrenaline",
      overview: "A female FBI agent holIdaying in Eastern Europe with her family gets her life upsIde down when her daughter is kIdnapped. She has to team up with a criminal on the run to save her daughter before time runs out.",
      genreIds: [28],
      averageRating: 4,
      releaseDate: "2022-12-15"
    },
    {
      Id: 804150,
      title: "Cocaine Bear",
      overview: "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
      genreIds: [53, 35, 80],
      averageRating: 6.4,
      releaseDate: "2023-02-22"
    },
    {
      Id: 1008005,
      title: "The Communion Girl",
      overview: "Spain, late 1980s. Newcomer Sara tries to fit in with the other teens in this tight-knit small town in the province of Tarragona. If only she were more like her extroverted best friend, Rebe. They go out one night at a nightclub, on the way home, they come upon a little girl holding a doll, dressed for her first communion. And that's when the nightmare begins.",
      genreIds: [27],
      averageRating: 6.3,
      releaseDate: "2023-02-10"
    },
    {
      Id: 700391,
      title: "65",
      overview: "65 million years ago, the only 2 survivors of a spaceship from Somaris that crash-landed on Earth must fend off dinosaurs and reach the escape vessel in time before an imminent asteroId strike threatens to destroy the planet.",
      genreIds: [878, 12, 53, 28],
      averageRating: 6.3,
      releaseDate: "2023-03-02"
    },
    {
      Id: 946310,
      title: "Pirates Down the Street II: The Ninjas from Across",
      overview: "The pirates feel right at home in Sandborough, but the atmosphere cools right down when the ninjas come to live in the street. After all, pirates and ninjas are sworn enemies!  While pirate captain Hector Blunderbuss struggles to get rId of his new neighbours, son Billy and ninja daughter Yuka become friends. The pirates challenge the ninjas to the ultimate battle at the village's annual hexathlon. Who will win the match? Ninjas are faster and more agile of course, but pirates are the best cheats in all of the seven seas...",
      genreIds: [10751, 28, 12],
      averageRating: 6.2,
      releaseDate: "2022-04-20"
    },
    {
      Id: 1104040,
      title: "Gangs of Lagos",
      overview: "A group of friends who each have to navigate their own destiny, growing up on the bustling streets and neighborhood of Isale Eko, Lagos.",
      genreIds: [80],
      averageRating: 5.6,
      releaseDate: "2023-04-07"
    },
    {
      Id: 758323,
      title: "The Pope's Exorcist",
      overview: "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hIdden.",
      genreIds: [27, 53],
      averageRating: 6.5,
      releaseDate: "2023-04-05"
    },
    {
      Id: 842945,
      title: "Supercell",
      overview: "Good-hearted teenager William always lived in hope of following in his late father's footsteps and becoming a storm chaser. His father's legacy has now been turned into a storm-chasing tourist business, managed by the greedy and reckless Zane Rogers, who is now using William as the main attraction to lead a group of unsuspecting adventurers deep into the eye of the most dangerous supercell ever seen.",
      genreIds: [28],
      averageRating: 6.4,
      releaseDate: "2023-03-17"
    },
    {
      Id: 849869,
      title: "Kill Boksoon",
      overview: "At work, she's a renowned assassin. At home, she's a single mom to a teenage daughter. Killing? That's easy. It's parenting that's the hard part.",
      genreIds: [28, 80, 53],
      averageRating: 6.8,
      releaseDate: "2023-02-17"
    },
    {
      Id: 1033219,
      title: "Attack on Titan",
      overview: "As viable water is depleted on Earth, a mission is sent to Saturn's moon Titan to retrieve sustainable H2O reserves from its alien inhabitants. But just as the humans acquire the precious resource, they are attacked by Titan rebels, who don't trust that the Earthlings will leave in peace.",
      genreIds: [28, 878],
      averageRating: 6.1,
      releaseDate: "2022-09-30"
    }
  ];
*/