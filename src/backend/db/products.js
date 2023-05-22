import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [


  {
    _id: '1',
    title: 'Marvels Midnight Suns',
    description:
      'Confront the darker side of the Marvel universe in an all-new Tactical RPG featuring Iron Man, Wolverine, Captain America, Ghost Rider, Blade, and more. ',
    publisher: '2K',
    price: 3339,
    stock: 10,
    discount: 0,
    platform: ['windows'],
    releaseDate: '12/02/22',
    categoryName: [ 'RPG'  ,'Strategy'],
    image:
    'https://cdn1.epicgames.com/offer/ea73c08ac633414584e281f838b3a78c/EGS_MarvelsMidnightSuns_FiraxisGames_S2_1200x1600-2bbbf1249898e7441527c7b5679b1dd2?h=480&quality=medium&resize=1&w=360',
      comingSoon: false,
      bestSeller: false,
      featured: true,
      topProductSellers: false,
      specials: true,
      onSale: true,
      starRatings: 4.5,
    },

  {
    _id: '2',
    title: 'Total War',
    description:
      'The cataclysmic conclusion to the Total War: WARHAMMER trilogy is coming. Rally your forces and step into the Realm of Chaos, a dimension of mind-bending horror where the very fate of the world will be decided. Will you conquer your Daemons… or command them? After a dying god breaks open a portal to the Realm of Chaos, four Ruinous Powers - Khorne, Nurgle, Tzeentch and Slaanesh - rise from this maelstrom. Will they reign victorious? Or can the kingdoms of Kislev and Grand Cathay turn the tide of war?',
    publisher: 'SEGA',
    price: 3399,
    stock: 10,
    discount: 0,
    platform: ['windows', 'mac'],
    releaseDate: '02/17/22',
    categoryName: ['Action', 'Multiplayer', 'Strategy'],
   
    image:
      'https://cdn1.epicgames.com/dda64c2956b54f1ba3cd97f6aaee775f/offer/EGS_TotalWarWARHAMMERIII_CreativeAssembly_S6-1200x1600-bf935f14317eaf51f4906079a2888ced.jpg?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller:false,
      featured:true,
      topProductSellers:false,
      specials:true,
      onSale: true,
      starRatings: 4.7,
  },
  {
    _id: '3',
    title: 'Wolfenstein',
    description:
      'Wolfenstein®: The New Order reignites the series that created the first-person shooter genre. Set against a backdrop of an alternate 1960s, discover an unfamiliar world ruled by a familiar enemy—one that has changed and twisted history as you know it.',
    publisher: 'Bethesda Softworks',
    price: 1179,
    stock: 10,
    discount: 60,
    platform: ['windows'],
    releaseDate: '09/09/21',
    categoryName: ['Shooter', 'Action'],

    image:
      'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_WolfensteinTheNewOrder_MachineGames_S2_1200x1600-0f70ad56e210812c26a9dde1a8143a58?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller:true,
      featured:true,
      topProductSellers:false,
      specials:false,
      onSale: true,
      starRatings: 4.6,
  },

 

  {
    _id: '4',
    title: 'World Turtles',
    description:
      'The World Turtle carries entire civilizations on its back through outer space & the Meeps are the only ones on a quest to save it. Cooperation, rather than conquest will save the day, so prepare to harvest, build, research & explore the void in this wholesome turtleback builder.',
    publisher: 'World Turtles',
    price: 719,
    stock: 10,
    discount: 0,
    platform: ['windows'],
    releaseDate: '05/01/23',
    categoryName: ['Strategy', 'Simulation' , 'Indie'],
    image:
    'https://cdn1.epicgames.com/spt-assets/20e432bcde564ed2961583b421ed4a69/world-turtles-jvr3y.png?h=480&quality=medium&resize=1&w=360',
      comingSoon: false,
      bestSeller: false,
      featured: false,
      topProductSellers: false,
      specials: false,
      onSale: true,
      starRatings: 3.9,
    },
  
  
  {
    _id: '5',
    title: 'Stranded: Alien Dawn',
    description:
      'Brave a new world in Stranded: Alien Dawn, a planet survival sim placing the fate of a small marooned group in your hands. Forge your story through compelling and immersive strategic gameplay as you make vital decisions to protect your survivors.',
    publisher: 'Frontier Foundry',
    price: 1500,
    stock: 10,
    discount: 0,
    platform: ['windows'],
    releaseDate: '04/25/23',
    categoryName: ['Strategy', 'Survival'],
    image:
    'https://cdn1.epicgames.com/offer/f575ebe4cc43491c95e5e01e5741a031/EGS_StrandedAlienDawn_HaemimontGames_S2_1200x1600-3bfc50b0406c2d8df87f58bb4ec9360a?h=480&quality=medium&resize=1&w=360',
      comingSoon: false,
      bestSeller: false,
      featured: false,
      topProductSellers: false,
      specials: false,
      onSale: true,
      starRatings: 4.4,
    },


{
  _id: '6',
  title: 'League of Legends',
  description:
    'Become a legend. Find your champion, master their abilities, and outplay your opponents in an epic 5v5 battle to destroy the enemy base. ',
  publisher: 'Riot Games',
  price: 0,
  stock: 10,
  discount: 0,
  platform: ['windows','mac'],
  releaseDate: '11/04/21',
  categoryName: [ 'Action' ,'RPG'  ,'Strategy'],
  image:
  'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/LoL_1200x1600-15ad6c981af8d98f50e833eac7843986?h=480&quality=medium&resize=1&w=360',
    comingSoon: false,
    bestSeller: false,
    featured: false,
    topProductSellers: false,
    specials: true,
    onSale: false,
    starRatings: 4.2,
  },
{
  _id: '7',
  title: 'F1® Manager 2022',
  description:
    'Make your mark on Formula 1® in the officially licensed F1® Manager 2022. Be the boss of your chosen constructor and pick from a roster of 2022 drivers and staff. ',
  publisher: 'Frontier Developments',
  price: 2299,
  stock: 10,
  discount: 0,
  platform: ['windows'],
  releaseDate: '08/30/22',
  categoryName: [ 'Simulation' ,'Strategy'],
  image:
  'https://cdn1.epicgames.com/offer/d14dcbe6b15b4fe191ff00880b9927f2/EGS_F1Manager2022_FrontierDevelopments_S2_1200x1600-ee21b96787fc0a2962aaa3404975573b?h=480&quality=medium&resize=1&w=360',
    comingSoon: false,
    bestSeller: false,
    featured: false,
    topProductSellers: false,
    specials: true,
    onSale: false,
    starRatings: 4.6,
  },


{
  _id: '8',
  title: 'Anno 1800',
  description:
    'Welcome to the dawn of the Industrial Age. Experience one of the most exciting & fast-changing periods of all time in a rich city-building experience.',
  publisher: 'Ubisoft',
  price: 3129,
  stock: 10,
  discount: 0,
  platform: ['windows'],
  releaseDate: '05/30/19',
  categoryName: [ 'City Builder'  ,'Strategy'],
  image:
  'https://cdn1.epicgames.com/offer/oregano/an18-store-portrait-1200x1600-1200x1600-665115795_1200x1600-a714948f3c93306d618c279edded0525?h=480&quality=medium&resize=1&w=360',
    comingSoon: false,
    bestSeller: true,
    featured: true,
    topProductSellers: true,
    specials: true,
    onSale: true,
    starRatings: 4.8,
  },
{
  _id: '9',
  title: 'Grim Nights',
  description:
    'A survival strategy indie-game. Gather resouces, expand your village, explore the underground for riches and train soldiers to defend against hordes of the undead.',
  publisher: 'Edym Pixels',
  price: 109,
  stock: 10,
  discount: 0,
  platform: ['windows'],
  releaseDate: '04/25/23',
  categoryName: [ 'Indie'  ,'Strategy'],
  image:
  'https://cdn1.epicgames.com/spt-assets/29b641c046cc44559e803ddb725d2f6a/grim-nights-mun9l.png?h=480&quality=medium&resize=1&w=360',
    comingSoon: false,
    bestSeller: false,
    featured: false,
    topProductSellers: false,
    specials: true,
    onSale: true,
    starRatings: 4.5,
  },

{
  _id: '10',
  title: 'Age Of Wonders 4',
  description:
    'Rule a fantasy realm of your own design! Explore new magical realms in Age of Wonders signature blend of 4X strategy and turn-based tactical combat. Control a faction that grows and changes as you expand your empire with each turn!',
  publisher: 'Paradox Interactive',
  price: 2479,
  stock: 10,
  discount: 0,
  platform: ['windows'],
  releaseDate: '05/02/23',
  categoryName: ['Strategy'],
  image:
  'https://cdn1.epicgames.com/offer/61375e6a52534a1aa2d8ba6d46f9ee64/EGS_AgeofWonders4_TriumphStudios_S2_1200x1600-6753645ce36ddcfd00142d40143f3c46?h=480&quality=medium&resize=1&w=360',
    comingSoon: false,
    bestSeller: true,
    featured: false,
    topProductSellers: true,
    specials: false,
    onSale: true,
    starRatings: 4.5,
  },

 


{
  _id: '11',
  title: 'At Eves Wake',
  description:
    'An interactive Lovecraftian horror story about surviving a family you never knew and their servitude to a dark patron. True to the genre, you retain all knowledge from every play-through. Shape your fate and that of the family. Will you embrace this gift or rid humanity of their taint? Your actions will shape your fate and that of the family.',
  publisher: 'Sugar Rush Studios',
  price: 359,
  stock: 10,
  discount: 0,
  platform: ['windows'],
  releaseDate: '10/26/21',
  categoryName: ['Horror', 'Narration'],
  image:
  'https://cdn1.epicgames.com/offer/f0743109c5784d44a1a404a4cee42f20/EGS_AtEvesWake_SugarRushStudios_S2_1200x1600-10bbef1adfe107ad0f28e6014bd97618?h=480&quality=medium&resize=1&w=360',
    comingSoon: false,
    bestSeller: false,
    featured: false,
    topProductSellers: false,
    specials: false,
    onSale: true,
    starRatings:  4.2,
  },


{
  _id: '12',
  title: 'SIMULACRA 3',
  description:
    'The town of Stonecreek is haunted. People keep disappearing into thin air, leaving nothing but an eerie symbol behind. With the townsfolk gripped with fear, use a missing victims phone to unlock the truth in the third entry of the acclaimed horror series, SIMULACRA.',
  publisher: 'Neon Doctrine',
  price: 349,
  stock: 10,
  discount: 0,
  platform: ['windows'],
  releaseDate: '10/24/22',
  categoryName: ['Horror', 'Simulation'],
  image:
  'https://cdn1.epicgames.com/spt-assets/f0790b4175bd44a084ce61a8b7644373/download-simulacra-3-offer-11lny.png?h=480&quality=medium&resize=1&w=360',
    comingSoon: false,
    bestSeller: false,
    featured: false,
    topProductSellers: false,
    specials: false,
    onSale: true,
    starRatings: 3.3,
  },



{
  _id: '13',
  title: 'Mundaun',
  description:
    'Mundaun is a lovingly hand-penciled horror tale set in a dark, secluded valley of the alps. Explore various areas full of secrets to discover, survive hostile encounters, drive vehicles, fill your inventory and solve a variety of hand-crafted puzzles.',
  publisher: 'MWM Interactive ',
  price: 529,
  stock: 10,
  discount: 0,
  platform: ['windows'],
  releaseDate: '03/16/21',
  categoryName: ['Adventure', 'Horror', 'Indie'],
  image:
    'https://cdn1.epicgames.com/8f08ba8f76c940f89fa9d84658535a02/offer/EGS_Mundaun_HiddenFields_S2-1200x1600-0e209f071069b203df62c2f80a3f624f.jpg?h=480&quality=medium&resize=1&w=360',
    comingSoon: false,
    bestSeller: false,
    featured: true,
    topProductSellers: false,
    specials: false,
    onSale: true,
    starRatings: 4.4,
  },

{
  _id: '14',
  title: 'Tormented Souls',
  description:
    'Classic horror is back! Inspired by the original Resident Evil and Alone in the Dark, Tormented Souls modernises fixed perspective horror - as Caroline Walker investigates the mysterious disappearance of twin girls in a terrifying mansion-turned-hospital.',
  publisher: 'PQube',
  price: 619,
  stock: 10,
  discount: 0,
  platform: ['windows'],
  releaseDate: '10/31/22',
  categoryName: ['Puzzle', 'Horror', 'Survival'],
  image:
    'https://cdn1.epicgames.com/offer/1a1223658a7e4213911df20c3983e4c0/EGS_TormentedSouls_DualEffectGamesAbstractDigital_S2_1200x1600-3ca24fd6ba836410dd7974f5f39823dd?h=480&quality=medium&resize=1&w=360',
    comingSoon: false,
    bestSeller: true,
    featured: true,
    topProductSellers: false,
    specials:true,
    onSale: true,
    starRatings: 4.5,
  },

{
  _id: '15',
  title: 'Im looking for 3024 people',
  description:
    'Can you run, swim and use a shotgun without your eyes?—Im looking for 3024 people is an ARG where you will have to solve complex puzzles in-game but also in real life. Participate in an AI voice-generated blind experiment; interact with websites and locations with other players.',
  publisher: 'Bakodun Game Studios',
  price: 179,
  stock: 10,
  discount: 30,
  platform: ['windows'],
  releaseDate: '02/03/23',
  categoryName: ['Puzzle', 'Horror', 'Adventure'],
  image:
    'https://cdn1.epicgames.com/spt-assets/22af81ed09734eafa9d7323981089be5/im-looking-for-3024-people-trzv6.jpg?h=480&quality=medium&resize=1&w=360',
    comingSoon: false,
    bestSeller: false,
    featured: false,
    topProductSellers: false,
    specials:false,
    onSale: true,
    starRatings: 4.1,
  },


{
  _id: '16',
  title: 'EBOLA 2',
  description:
    'EBOLA 2 is created in the spirit of the great classics of survival horrors. In this game, you will control the main character with a first-person camera which makes you feel like you are in a real horror movie.',
  publisher: 'Indie Games Studio',
  price: 539,
  stock: 10,
  discount: 30,
  platform: ['windows'],
  releaseDate: '05/09/23',
  categoryName: ['Survival', 'Horror', 'Action'],
  image:
    'https://cdn1.epicgames.com/spt-assets/57b6b64ab5404675ae73436e0f4d13b8/ebola-2-457v3.jpg?h=480&quality=medium&resize=1&w=360',
    comingSoon: false,
    bestSeller: false,
    featured: false,
    topProductSellers: false,
    specials:false,
    onSale: true,
    starRatings: 3.4,
  },




{
  _id: '17',
  title: 'Them and Us',
  description:
    'Them and Us is a classic, survival horror game with a focus on atmosphere and player immersion. Discover the truth of Alicia’s past as she descends further into her strange, unending nightmare.',
  publisher: 'TendoGames Co., Ltd',
  price: 1429,
  stock: 10,
  discount: 40,
  platform: ['windows'],
  releaseDate: '09/28/21',
  categoryName: ['Survival', 'Horror', 'Action', 'Adventure'],
  image:
    'https://cdn1.epicgames.com/spt-assets/690e49d2e1f94c1487badc4df2d25b7f/them-and-us-1rykd.png?h=480&quality=medium&resize=1&w=360',
    comingSoon: false,
    bestSeller: true,
    featured: false,
    topProductSellers: false,
    specials:false,
    onSale: true,
    starRatings: 4.7,
  },





  {
    _id: '18',
    title: 'Far Cry® 6',
    description:
      'Welcome to Yara, a tropical paradise frozen in time. As the dictator of Yara, Antón Castillo is intent on restoring his nation back to its former glory by any means, with his son, Diego, following in his bloody footsteps. Their oppressive rule has ignited a revolution. Play as Dani Rojas, a local Yaran, as you fight alongside a modern-day guerrilla revolution to liberate Yara! Fight against Castillo’s regime in the most expansive Far Cry® to date, through jungles, beaches, and Esperanza, the capital city of Yara. Employ an arsenal of resolver weapons, backpacks, and vehicles to take down Castillo’s ruthless regime.',
    publisher: 'Ubisoft',
    price: 2999,
    stock: 10,
    discount: 50,
    platform: ['windows'],
    releaseDate: '10/07/21',
    categoryName: ['Open World', 'Shooter', 'Action', 'Adventure'],
    image:
      'https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller: true,
      featured: false,
      topProductSellers: false,
      specials:true,
      onSale: true,
      starRatings: 4.5,
    },
  {
    _id: '19',
    title: "Assassin's Creed® Valhalla",
    description:
      "In Assassin's Creed® Valhalla, become Eivor, a legendary Viking warrior on a quest for glory. Explore England's Dark Ages as you raid your enemies, grow your settlement, and build your political power. Lead epic Viking raids against Saxon troops and fortresses. Dual-wield powerful weapons and relive the visceral fighting style of the Vikings. Challenge yourself with the most varied collection of enemies ever in Assassin's Creed. Shape the growth of your character with each choice and carve a path to glory. Explore a Dark Age open world, from the shores of Norway to the kingdoms of England. Personalize your experience by growing your clan's settlement.",
    publisher: 'Ubisoft',
    price: 2999,
    stock: 10,
    discount: 60,
    platform: ['windows'],
    releaseDate: '11/17/20',
    categoryName: ['Open World', 'RPG', 'Action'],
    
    image:
      'https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Portrait_640x854-640x854-288120c5573756cb988b6c1968cebd86.png?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller:false,
      featured:true,
      topProductSellers:true,
      specials:true,
      onSale:false,
      starRatings: 4.6,
  },
  {
    _id: '20',
    title: 'The Witcher 3: Wild Hunt',
    description:
      'Become a professional monster slayer and embark on an adventure of epic proportions! Upon its release, The Witcher 3: Wild Hunt became an instant classic, claiming over 250 Game of the Year awards. Now you can enjoy this huge, over 100-hour long, open-world adventure along with both its story-driven expansions worth an extra 50 hours of gameplay. This edition includes all additional content - new weapons, armor, companion outfits, new game mode and side quests.',
    publisher: 'CD PROJEKT S.A.',
    price: 1413,
    stock: 10,
    discount: 80,
    platform: ['windows'],
    releaseDate: '10/07/21',
    categoryName: ['Open World', 'RPG', 'Adventure'],
    image:
      'https://cdn1.epicgames.com/14ee004dadc142faaaece5a6270fb628/offer/EGS_TheWitcher3WildHuntGameoftheYear_CDPROJEKTRED_S2-1200x1600-d887e1b749d11e8876996227e4de5c89.jpg?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller:true,
      featured:true,
      topProductSellers:true,
      specials:true,
      onSale: false,
      starRatings: 4.9,
      
  },
  {
    _id: '21',
    title: 'Cyberpunk 2077',
    description:
      'Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades. The relationships you forge and the choices you make will shape the story and the world around you. Legends are made here. What will yours be?',
    publisher: 'CD PROJEKT RED',
    price: 2999,
    stock: 10,
    discount: 50,
    platform: ['windows'],
    releaseDate: '12/10/20',
    categoryName: ['Open World', 'Shooter', 'Action', 'Adventure'],
    
    image:
      'https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S2_03_1200x1600-b1847981214ac013383111fc457eb9c5?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller:true,
      featured:false,
      topProductSellers:true,
      specials:false,
      onSale: true,
      starRatings: 4.6,
  },
  {
    _id: '22',
    title: 'Watch Dogs: Legion',
    description:
      'Build a resistance from virtually anyone you see as you hack, infiltrate, and fight to take back a near-future London that is facing its downfall. Welcome to the Resistance. Recruit and play as anyone in the city. Everyone you see has a unique backstory, personality, and skill set. Hack armed drones, deploy spider-bots, and take down enemies using an Augmented Reality Cloak. Explore a massive urban open world featuring London’s many iconic landmarks and fun side activities. Take your recruits online and team up with your friends as you complete missions and challenging endgame content.',
    publisher: 'Ubisoft',
    price: 2999,
    stock: 10,
    discount: 0,
    platform: ['windows'],
    releaseDate: '10/29/20',
    categoryName: ['Open World', 'Action', 'Adventure'],

    image:
      'https://cdn1.epicgames.com/0a84818055e740a7be21a2e5b6162703/offer/WatchDogs_Legion_Store_Portrait_1200x1600-1200x1600-a6b2d4cce489aeeb87bad4a6db168bed.jpg?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller:false,
      featured:false,
      topProductSellers:false,
      specials:false,
      onSale: true,
      starRatings: 4.4,
  },
  {
    _id: '23',
    title: 'Ghost Recon Breakpoint',
    description:
      'Become an elite spec ops soldier known as a Ghost, tasked with a special mission to Auroa. The remote archipelago somewhere in the South Pacific has lost contact with outside world due to Skell Technology turning hostile. The Wolves, a rogue spec ops team, led by your ex–brother-in-arms, have taken over and are hunting you down. Lead your team through the island landscape and save the civilians without being noticed.',
    publisher: 'Ubisoft',
    price: 2999,
    stock: 10,
    discount: 75,
    platform: ['windows'],
    releaseDate: '10/04/19',
    categoryName: ['Open World', 'Shooter'],
 
    image:
      'https://cdn1.epicgames.com/salesEvent/salesEvent/GRT_STD_Edition_Store_Portrait_1200x1600_1200x1600-b08ee70d85ee2649b6e9c575d9192e66?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller:false,
      featured:false,
      topProductSellers:false,
      specials:false,
      onSale: true,
      starRatings: 4.5,
  },
  {
    _id: '24',
    title: 'Genshin Impact',
    description:
      'Embark on a journey across Teyvat to find your lost sibling and seek answers from The Seven — the gods of each element. Explore this wondrous world, join forces with a diverse range of characters, and unravel the countless mysteries that Teyvat holds',
    publisher: 'COGNOSPHERE PTE. LTD.',
    price: 0,
    stock: 10,
    discount: 0,
    platform: ['windows'],
    releaseDate: '06/09/21',
    categoryName: ['Open World', 'Adventure', 'RPG', 'Multiplayer'],
 
    image:
      'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GenshinImpact_miHoYoLimited_S2_1200x1600-c12cdcc2cac330df2185aa58c508e820?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller:false,
      featured:false,
      topProductSellers:false,
      specials:false,
      onSale: true,
      starRatings: 4.7,
  },
 
  {
    _id: '25',
    title: 'STAR WARS™',
    description:
      'Be the hero in the ultimate STAR WARS™ battle fantasy with STAR WARS™ Battlefront™ II: Celebration Edition! Get STAR WARS Battlefront II and the complete collection of customization content acquirable through in-game purchase from launch up to – and including – items inspired by STAR WARS™: THE RISE OF SKYWALKER™.*',
    publisher: 'Electronic Arts',
    price: 2499,
    stock: 10,
    discount: 80,
    platform: ['windows'],
    releaseDate: '01/14/21',
    categoryName: ['Shooter', 'Action', 'Adventure'],
  
    image:
      'https://cdn1.epicgames.com/b156c3365a5b4cb9a01a5e1108b4e3f4/offer/EGS_STARWARSBattlefrontIICelebrationEdition_DICE_S2-1200x1600-11d040719a8457bbf36cabbe89b200db.jpg?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller:false,
      featured:false,
      topProductSellers:false,
      specials:false,
      onSale: true,
      starRatings: 3.8,
  },
  {
    _id: '26',
    title: 'Warframe',
    description:
      'Confront warring factions throughout a sprawling interplanetary system as you follow the guidance of the mysterious Lotus and level up your Warframe, build an Arsenal of destructive firepower, and realize your true potential across massive open worlds in this thrilling, genre-defining third-person combat experience.',
    publisher: 'Digital Extremes',
    price: 0,
    stock: 10,
    discount: 0,
    platform: ['windows'],
    releaseDate: '12/11/20',
    categoryName: ['Shooter', 'Action', 'Multiplayer'],

    image:
      'https://cdn1.epicgames.com/offer/244aaaa06bfa49d088205b13b9d2d115/spooky_1200x1600-9336f380a588ac37ced9b7be029ab666?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller:false,
      featured:false,
      topProductSellers:false,
      specials:false,
      onSale: true,
      starRatings: 4.6,
  },


  {
    _id: '27',
    title: 'Crysis 3 Remastered',
    description:
      "In Crysis 3 Remastered, the fate of the world is once again in your hands. Returning to the fight as super-soldier Prophet, wielding a powerful auto-loading Predator Bow that fires electric, explosive, and carbon arrows, take on new and old enemies that threaten the peace you worked so hard to achieve. The search for the alien Alpha Ceph continues, but now you must also expose the truth behind the C.E.L.L. corporation, which has turned New York City into a sprawling urban rainforest sheltered by a giant nanodome. Equipped with your legendary Nanosuit, you must assess, adapt, and attack as you choose your path and fight through seven distinct districts. Decimate your opponents in a blaze of brute force using the Nanosuit's superior technology, or use stealth to achieve your goals and become humanity's silent savior. There's no wrong way to save the world.",
    publisher: 'Crytek',
    price: 709,
    stock: 10,
    discount: 40,
    platform: ['windows'],
    releaseDate: '10/15/21',
    categoryName: ['Shooter', 'Action'],
 
    image:
      'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Crysis3Remastered_Crytek_S2_1200x1600-a98a0e5a8215ee2f2b768ec2140f5fd4?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller:true,
      featured:true,
      topProductSellers:true,
      specials:true,
      onSale: false,
      starRatings: 4.7,
  },
  {
    _id: '28',
    title: 'Battlefield™ 2042',
    description:
      'Battlefield™ 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise. Adapt and overcome in a near-future world transformed by disorder. Squad up and bring a cutting-edge arsenal into dynamically-changing battlegrounds supporting 128 players, unprecedented scale, and epic destruction. The next generation of fan-favorites Conquest and Breakthrough features the largest Battlefield maps ever and up to 128 players. Experience the intensity of all-out warfare on maps filled with dynamic weather and spectacular world events.',
    publisher: 'Electronic Arts',
    price: 2999,
    stock: 10,
    discount: 50,
    platform: ['windows'],
    releaseDate: '11/19/21',
    categoryName: ['Shooter', 'Multiplayer', 'First Person'],
  
    image:
      'https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S2_1200x1600-331f59b6877d2bf2194943fcf7a68048_1200x1600-331f59b6877d2bf2194943fcf7a68048?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller:false,
      featured:false,
      topProductSellers:false,
      specials:false,
      onSale: true,
      starRatings: 4.2,
  },
  {
    _id: '29',
    title: "Rainbow Six® Extraction",
    description:
      'Team Rainbow now faces the greatest terror ever: a lethal, mutating alien invasion. For decades, Team Rainbow has been the shield against the worst global threats imaginable. Now, we face the greatest terror yet: a lethal, mutating alien parasite.',
    publisher: 'Ubisoft',
    price: 1999,
    stock: 10,
    discount: 35,
    platform: ['windows'],
    releaseDate: '01/20/22',
    categoryName: ['Multiplayer', 'Shooter', 'First Person'],
    
    image:
      'https://cdn1.epicgames.com/salesEvent/salesEvent/EN_R6E_STD_EPIC_Store%20Portrait_1200x1600_UK_1200x1600-9859512196094e740761af80c09a41d6?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller:false,
      featured:false,
      topProductSellers:false,
      specials:false,
      onSale: true,
      starRatings: 3.7,
  },
  {
    _id: '30',
    title: 'HITMAN ',
    description:
      'The HITMAN - Game of The Year Edition includes: All missions & locations from the award-winning first season of HITMAN; "Patient Zero" Bonus campaign; 3 new Themed Escalation Contracts; 3 new Outfits; 3 new Weapons. Experiment and have fun in the ultimate playground as Agent 47 to become the master assassin. Travel around the globe to exotic locations and eliminate your targets with everything from a katana or a sniper rifle to an exploding golf ball or some expired spaghetti sauce.',
    publisher: 'IO Interactive A/S',
    price: 3249,
    stock: 10,
    discount: 80,
    platform: ['windows'],
    releaseDate: '09/03/20',
    categoryName: ['Action', 'Adventure', 'Shooter'],

    image:
      'https://cdn1.epicgames.com/3c06b15a8a2845c0b725d4f952fe00aa/offer/EGS_HITMANGameofTheYeardEdition_IOInteractiveAS_Bundles_S2-1200x1600-6add4f514900a2454ad226e6288df595.jpg?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller:true,
      featured:true,
      topProductSellers:true,
      specials:true,
      onSale: true,
      starRatings: 4.8,
  },

  {
    _id: '31',
    title: 'Shadow of the Tomb Raider',
    description:
      "As Lara Croft races to save the world from a Maya apocalypse, she must become the Tomb Raider she is destined to be. In Shadow of the Tomb Raider Definitive Edition experience the final chapter of Lara's origin as she is forged into the Tomb Raider she is destined to be. Combining the base game, all seven DLC challenge tombs, as well as all downloadable weapons, outfits, and skills, Shadow of the Tomb Raider Definitive Edition is the ultimate way to experience Lara’s defining moment.",
    publisher: 'Square Enix',
    price: 2195,
    stock: 10,
    discount: 67,
    platform: ['windows'],
    releaseDate: '12/30/21',
    categoryName: ['Action', 'Adventure'],
    
    image:
      'https://cdn1.epicgames.com/offer/4b5461ca8d1c488787b5200b420de066/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-s4-1200x1600-7ee40d6fa744_1200x1600-950cdb624cc75d04fe3c8c0b62ce98de?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller:true,
      featured:true,
      topProductSellers:false,
      specials:false,
      onSale: true,
      starRatings: 4.7,
  },
  {
    _id: '32',
    title: 'Dying Light 2 Stay Human',
    description:
      "The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements, is on the brink of collapse. Use your agility and combat skills to survive, and reshape the world. Your choices matter. You are a wanderer with the power to change the fate of The City. But your exceptional abilities come at a price. Haunted by memories you cannot decipher, you set out to learn the truth… and find yourself in a combat zone. Hone your skills, as to defeat your enemies and make allies, you’ll need both fists and wits. Unravel the dark secrets behind the wielders of power, choose sides and decide your destiny. But wherever your actions take you, there's one thing you can never forget—stay human.",
    publisher: 'Techland',
    price: 2999,
    stock: 10,
    discount: 0,
    platform: ['windows'],
    releaseDate: '02/04/22',
    categoryName: [
      'Shooter',
      'Action',
      'Horror',
      'First Person',
      'RPG',
      'Survival',
      'Open World',
      'Multiplayer',
    ],

    image:
      'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DyingLight2StayHuman_Techland_S4_1200x1600-b3d66b4576fd6488b674710e13493435?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller:false,
      featured:false,
      topProductSellers:false,
      specials:false,
      onSale: true,
      starRatings: 4.6,
  },
  {
    _id: '33',
    title: 'Sifu',
    description:
      'Sifu is the story of a young Kung Fu student on a path of revenge, hunting for the murderers of his family. One against all, he has no allies, and countless enemies. He has to rely on his unique mastery of Kung Fu as well as a mysterious pendant to prevail, and preserve his family’s legacy.',
    publisher: 'Sloclap',
    price: 939,
    stock: 10,
    discount: 0,
    platform: ['windows'],
    releaseDate: '02/08/22',
    categoryName: ['Fighting', 'Indie', 'Action'],
  
    image:
      'https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller:true,
      featured:false,
      topProductSellers:true,
      specials:false,
      onSale: true,
      starRatings: 4.8,
  },
  {
    _id: '34',
    title: 'Kawaii Deathu Desu',
    description:
      "In Kawaii Deathu Desu, supernatural beings find themselves incarnated as cute japanese idols! Pick a supernatural idol and beat the hell out of - no pun intended - as many overzealous fans as you can in this addictive beat'em up! Can you claim the throne of the underworld?",
    publisher: 'Top Hat Studios, Inc.',
    price: 89,
    stock: 10,
    discount: 30,
    platform: ['windows'],
    releaseDate: '02/08/22',
    categoryName: ['Fighting', 'Indie', 'Action'],

    image:
      'https://cdn1.epicgames.com/spt-assets/05ebc558ea4b43c7a87443f1d56044b0/download-kawaii-deathu-desu-offer-ml2ea.png?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller:false,
      featured:false,
      topProductSellers:false,
      specials:false,
      onSale: true,
      starRatings: 3.6,
  },
 


  {
    _id: '35',
    title: 'Ghostwire: Tokyo',
    description:
      "Tokyo's population has vanished, and deadly supernatural forces prowl the streets. Use an arsenal of elemental abilities to unravel the truth behind the disappearance and save Tokyo.",
    publisher: 'Bethesda Softworks',
    price: 2499,
    stock: 10,
    discount: 0,
    platform: ['windows'],
    releaseDate: '03/25/22',
    categoryName: ['Action', 'Adventure'],

    image:
      'https://cdn1.epicgames.com/offer/a93cd6111251461c953776a0c4ea4d80/EGS_GhostwireTokyoTall_1200x1600-7b8a36d1dfe782ed625e6c6bba487df9?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller:false,
      featured:false,
      topProductSellers:false,
      specials:false,
      onSale: false,
      starRatings: 3.4,
  },
  {
    _id: '36',
    title: "Tiny Tina's Wonderlands",
    description:
      "Embark on an epic adventure full of whimsy, wonder, and high-powered weaponry! Bullets, magic, and broadswords collide across this chaotic fantasy world brought to life by the unpredictable Tiny Tina. Roll your own multiclass hero and loot, shoot, slash, and cast your way through outlandish monsters and loot-filled dungeons on a quest to stop the tyrannical Dragon Lord. Everyone's welcome, so join the party, throw on your adventuring boots, and be Chaotic Great!",
    publisher: '2K',
    price: 3299,
    stock: 10,
    discount: 0,
    platform: ['windows'],
    releaseDate: '03/25/22',
    categoryName: ['Action', 'Adventure'],
 
    image:
      'https://cdn1.epicgames.com/salesEvent/salesEvent/Daffodil_1P_Awareness_INT_Epic_1200x1600_1200x1600-356dd4965bde4c5dbd1000f9c97ac4b4?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller:false,
      featured:false,
      topProductSellers:false,
      specials:false,
      onSale: true,
      starRatings: 4.6,
  },
  {
    _id: '37',
    title: 'HENCHMAN STORY',
    description:
      "Being a bumbling supervillain's henchman is a thankless job. The spandex chafes, there's tons of late nights, and your boss rarely remembers your name. But maybe - just maybe - even the choices of the lowliest henchman can change everything. Find out in this narrative adventure!",
    publisher: 'Top Hat Studios, Inc.',
    price: 349,
    stock: 10,
    discount: 0,
    platform: ['windows'],
    releaseDate: '02/17/22',
    categoryName: ['Comedy', 'Adventure', 'Indie'],
  
    image:
      'https://cdn1.epicgames.com/spt-assets/7b69aea9b3404faaa461911f99b6cbbc/download-henchman-story-offer-iq9jq.png?h=854&resize=1&w=640',
      comingSoon: false,
      bestSeller:true,
      featured:false,
      topProductSellers:true,
      specials:false,
      onSale: true,
      starRatings: 4.6,
  },
// comming soon
  {
    _id: '38',
    title:'RoboCop: Rogue City',
    description:'Become the iconic part man, part machine, all cop hero as you attempt to bring justice to the dangerous, crime-ridden streets of Old Detroit.',
    price: 'COMING SOON',
    publisher:'Nacon',
    discount:0,
    platform: ['windows'],
    releaseDate:  '09/05/23',      
    categoryName: ['Action','Shooter'],
    image: 'https://cdn1.epicgames.com/offer/3a5c77a536854024add2714cbd0fa865/EGS_RoboCopRogueCity_Teyon_S2_1200x1600-3e666124c2088c599e35700623bef464?h=480&quality=medium&resize=1&w=360',
  comingSoon: true,
  bestSeller:false,
  featured:false,
  topProductSellers:false,
  specials:false,
  onSale:false,

  
  },
  {
    _id: '39',
    title:'The Cullfield Ritual',
    description:'Take Part In A Dangerous Ritual Game',
    price: 'COMING SOON',
    publisher:'TheDollarGameStore',
    discount:0,
    platform: ['windows'],
    releaseDate:  '05/21/23',      
    categoryName: ['Horror'],
    image: 'https://cdn1.epicgames.com/spt-assets/10f941dba7c24063ab704437d35a9394/the-cullfield-ritual-1acok.png?h=480&quality=medium&resize=1&w=360',
  comingSoon: true,
  bestSeller:false,
  featured:false,
  topProductSellers:false,
  specials:false,
  onSale:false,

  
  },
  {
    _id: '40',
    title:'Last Remains',
    description:'Last Remains is a 30-50 player zombie battle royale game where survivors compete in a PvPvE world and take risks on their journey to the extraction point by searching buildings to find food, water, and digital collectible skins such as equipment and weapons.',
    price: 'COMING SOON',
    publisher:'Earn Alliance',
    discount:0,
    platform: ['windows','mac'],
    releaseDate:  '12/20/23',      
    categoryName: ['Horror','Survival'],
    image: 'https://cdn1.epicgames.com/spt-assets/da7ace5380fc4b55bfa77d04eceb982e/last-remains-1lbkv.png?h=480&quality=medium&resize=1&w=360',
  comingSoon: true,
  bestSeller:false,
  featured:false,
  topProductSellers:false,
  specials:false,
  onSale:false,

  
  },
  {
    _id: '41',
    title:'The Lord of the Rings - Gollum',
    description:'Play as Gollum on his quest to retrieve his Precious. You will need to climb the mountains of Mordor, sneak around Mirkwood and make difficult choices.',
    price: 'COMING SOON',

    discount:0,
    platform: ['windows'],
    releaseDate:  '05/25/23',
    categoryName: ['Action', 'Adventure' ,'Stealth'],
    image: 'https://cdn1.epicgames.com/spt-assets/d20026139e774e57ab451e2a1b94c6e2/download-the-lord-of-the-rings--gollum-offer-clg3r.png?h=480&quality=medium&resize=1&w=360',
  comingSoon: true,
  bestSeller:false,
  featured:false,
  topProductSellers:false,
  specials:false,
  onSale:false,

  
  }
,
{
  _id: '42',
  title:'Alliance of the Sacred Suns',
  description:'Alliance of the Sacred Suns is a sci-fi grand-strategy RPG that begins with your coronation as the head of an interstellar Empire, and ends with your demise. Manage feuding noble houses and the schemes of would-be usurpers as you try to revive the glory of an Empire on the brink',
  price: 'COMING SOON',
  publisher:'Hooded Horse',
  discount:0,
  platform: ['windows'],
  releaseDate:  '10/28/23',      
  categoryName: ['Simulation','Strategy'],
  image: 'https://cdn1.epicgames.com/spt-assets/f77dd16bbd5c49fd8b6785ddb46b22da/download-alliance-of-the-sacred-suns-offer-daid9.jpg?h=480&quality=medium&resize=1&w=360',
comingSoon: true,
bestSeller:false,
featured:false,
topProductSellers:false,
specials:false,
onSale:false,


},




{
  _id: '43',
  title:'Immortals of Aveum™',
  description:'Summon your power, stop the Everwar, save the realms. Pre-purchase* Immortals of Aveum™ and get the Purified Arclight, a unique blue sigil that will unleash more power!',
  price: 'COMING SOON',
  publisher:'Electronic Arts',
  discount:0,
  platform: ['windows'],
  releaseDate:  '07/20/23',      
  categoryName: ['Shooter'],
  image: 'https://cdn1.epicgames.com/offer/33a47f9b76374045b7da20af80c40aa1/EGS_ImmortalsofAveum_AscendantStudios_S2_1200x1600-14796260492bf93edbcdae1712efa64c?h=480&quality=medium&resize=1&w=360',
comingSoon: true,
bestSeller:false,
featured:false,
topProductSellers:false,
specials:false,
onSale:false,


},
{
  _id: '44',
  title:'Miasma Chronicles',
  description:'From the creators of Mutant Year Zero: Road to Eden comes a beautifully crafted tactical adventure you wont forget. Embark on a quest across a post-apocalyptic wasteland torn apart by a savage force known only as the Miasma.',
  price: 'COMING SOON',
  publisher:'505 Games',
  discount:10,
  platform: ['windows'],
  releaseDate:  '05/23/23',      
  categoryName: ['Action', 'Adventure' ,'Strategy'],
  image: 'https://cdn1.epicgames.com/offer/632b8c18774d480d978cb116518cd06b/Miasma_Portrait_Storefront_1200X1600_1200x1600-ffcbaca5bc9604b9c5d9db1e883f15ec?h=480&quality=medium&resize=1&w=360',
comingSoon: true,
bestSeller:false,
featured:false,
topProductSellers:false,
specials:false,
onSale:false,


},

{
  _id: '45',
  title:'Xenonauts 2',
  description:'Wage a global war of resistance against an alien invasion. Command turn-based tactical battles, build a network of covert bases, directly control your fighter wings, and achieve strategic victory in a simulation of asymmetric warfare against a technologically superior foe.',
  price: 'COMING SOON',
  publisher:'Hooded Horse',
  discount:0,
  platform: ['windows'],
  releaseDate:  '10/28/23',      
  categoryName: ['Space','Strategy'],
  image: 'https://cdn1.epicgames.com/spt-assets/839a9f6d64044fdca86536ddca222ebb/xenonauts-2-1bel4.jpg?h=480&quality=medium&resize=1&w=360',
comingSoon: true,
bestSeller:false,
featured:false,
topProductSellers:false,
specials:false,
onSale:false,


},

];
