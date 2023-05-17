import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [


  {
    _id: '1',
    title:'The Lord of the Rings - Gollum',
    description:'Play as Gollum on his quest to retrieve his Precious. You will need to climb the mountains of Mordor, sneak around Mirkwood and make difficult choices.',
    price: 2399,
    discount:10,
    platform: ['windows'],
    releaseDate:  '05/25/23',
    categoryName: ['Action', 'Adventure' ,'Stealth'],
    image: 'https://cdn1.epicgames.com/spt-assets/d20026139e774e57ab451e2a1b94c6e2/download-the-lord-of-the-rings--gollum-offer-clg3r.png?h=480&quality=medium&resize=1&w=360',
  comingSoon: true,
  bestSeller:false,
  featured:true,
  topSellers:false,
  specials:true,
  onSale:false,
  starRatings: 4,
  
  }
,




  {
    _id: '2',
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
  },
  {
    _id: '73be75cc-c2b5-468f-928f-aa995b57d7bd',
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

  },
  {
    _id: '7bd1c5e6-9ca3-4780-ac93-1cd840377f61',
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
    
  },
  {
    _id: '1da65729-0524-4f6d-bae0-6584f15bb67d',
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
    
  },
  {
    _id: '6e5066d5-7398-46e6-855b-f6fa6ac64fc1',
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
    
  },
  {
    _id: '5e51f6e5-4dfa-4420-a5fc-eddb1bf6b341',
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
 
  },
  {
    _id: 'a2c826b3-3b87-4b77-8731-d4ee16328033',
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
 
  },
  //Catergory 2: Shooter
  {
    _id: '660bc584-df4c-4db0-98b6-29779c926a98',
    title: 'STAR WARS™ Battlefront™ II: Celebration Edition',
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
   
  },
  {
    _id: '8479a2ca-9180-47eb-9b35-630985d30d96',
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
  
  },
  {
    _id: 'ae5049a2-ba2c-4f7a-ad3f-9922a3ebfbfa',
    title: 'Wolfenstein: The New Order',
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
 
  },
  {
    _id: 'b53a946e-6926-4921-910a-1300b22356a1',
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

  },
  {
    _id: '6391c241-0e89-42d0-9dca-096d3e29cae1',
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

  },
  {
    _id: 'ee13d35b-05ad-4289-b2af-43d8b8d0b622',
    title: "Tom Clancy's Rainbow Six® Extraction",
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
   
  },
  {
    _id: 'db9e67cf-720e-4ada-be71-bd246be8a787',
    title: 'HITMAN - Game of the Year Edition',
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
 
  },
  //Catergory 3: Action
  {
    _id: '3437e354-406f-4f21-a981-40be7f9f6022',
    title: 'Shadow of the Tomb Raider: Definitive Edition',
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

  },
  {
    _id: 'aed97a1c-1451-4640-b819-78ceb6bba30b',
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

  },
  {
    _id: '1c0c3852-7dfd-440a-ac11-d86de9860945',
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
  
  },
  {
    _id: '971378a7-eb76-4534-903b-f618c3ca9649',
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
 
  },
  {
    _id: '0e559e60-81c8-41df-a737-465832a59dd7',
    title: 'Total War: WARHAMMER III',
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
  
  },
  {
    _id: '06baec52-05a2-4bb5-ad9b-7acc2fcabee1',
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

  },
  {
    _id: 'd98fe06a-d74c-485c-843e-b25e47165ea8',
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
  
  },
  {
    _id: '420d7cf0-e4fb-4b44-b676-107bb566ac78',
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
 
  },
];
