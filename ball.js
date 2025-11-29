// Store weapon data
const weapons = {
  sword: {
    name: "Sword",
    ability: "Adds damage every hit.",
    skins: ["Default", "Ruby", "Midnight Steel", "Golden", "Super Sword", "Pursuer", "Clawsguy", "Netherite", "Freesmart", "Chainsaw"],
    color: ["#500000ff", "#ff0000", "#513b36ff", "#ffd700", "#a57731ff", "#000000ff", "#511300ee", "#4b4b4b", "#ff9999", "#242424ff"],
    skinCost: ['0', '0', '0', '100', '150', '250', '250', '350', '500', 'mastery'],
    damage: 15,
    special: "stackDamage"
  },
  dagger: {
    name: "Dagger",
    ability: "Adds spin speed every hit.",
    skins: ["Default", "Shadow Tip", "Aqua Sting", "Two Time", "Rainbow", "Bloodful"],
    color: ["#0b0b63ff", "#212221ff", "#006400", "#041228ff", "#ff69b4ff", "#600707ff"],
    skinCost: ['0', '0', '50', '150', '500', 'mastery'],
    damage: 10,
    special: "speedBoost"
  },
  bow: {
    name: "Bow",
    ability: "Shoots a certain amount of arrows every second. Adds 1 arrow every hit.",
    skins: ["Default", "Longbow", "Crossbow", "Compound", "Recurve", "Archer"],
    color: ["#8b4513", "#654321", "#4a4a4a", "#2f4f4f", "#556b2f", "#d2691e"],
    arrowColor: ["#8b4513", "#654321", "#c0c0c0", "#ff4500", "#32cd32", "#ffd700"],
    skinCost: ['0', '100', '150', '200', '300', 'mastery'],
    damage: 10,
    arrowCount: 1,
    shootInterval: 1,
    special: "bowDamage"
  },
  spear: {
    name: "Spear",
    ability: "Longer + more damage every hit",
    skins: ["Default", "Harpoon", "Trident", "Ice Spear", "Dragon Spear", "Bloody"],
    color: ["#808080", "#2f4f4fff", "#00ced1ff", "#add8e6ff", "#8b0000ff", "#3e0909ff"],
    skinCost: ['0', '0', '100', '150', '200', 'mastery'],
    damage: 20,
    special: "longerDamage"
  },
  revolver: {
    name: "Revolver",
    ability: "Shoots 3 bullets that adds damage every hit.",
    skins: ["Default", "Chance", "Moscow", "Pistol", "Gunslinger", "Chicago", "Roulette", "Desert Eagle", "REDACTED", "Prism Blaster", "Minigun"],
    color: ["#9d4c1dff", "#5f5f89ff", "#8b0000", "#808080", "#53280eff", "#3e3e3eff", "#473d00ff", "#daa520ff", "#000000", "linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)", "#2c2c2c"],
    bulletColor: ["#c9c728ff", "#5f5f89ff", "#ff0000", "#c0c0c0", "#8b4513", "#ffff00", "#ffd700", "#ff8c00", "#000000", "#ffffff", "#ff4500"],
    skinCost: ['0', '150', '200', '75', '250', '300', '400', '500', '600', '750', 'mastery'],
    damage: 10,
    special: "tripleDamage"
  },
  unarmed: {
    name: "Unarmed",
    ability: "Damage is equal to speed. Max speed increases every hit.",
    skins: ["Default", "Bareball", "Victim", "Fistful", "Glove", "Boxing Glove", "Civilian", "Iron Fist"],
    color: ["#808080", "#a9a9a9", "linear-gradient(90deg, #a9a9a9, #511300ee)", "#d2b48cff", "#8b4513", "#ff4500", "#f7ca7cff", "linear-gradient(45deg, #2c2c2c, #708090, #c0c0c0)"],
    skinCost: ['0', '50', '100', '150', '200', '300', '500', 'mastery'],
    damage: 5,
    special: "speedBasedDamage"
  },
  dummy: {
    name: "Dummy",
    ability: "Does nothing.",
    skins: ["Default", "ScaleDummy", "TrainingBot", "Bandaged", "ColorfulBot"],
    color: ["#808080", "#708090ff", "#a9a9a9", "#bfc0c2ff", "redToPink"],
    skinCost: ['0', '100', '300', 'achievement', 'mastery'],
    damage: 0,
    special: "none"
  },
  builder: {
    name: "Builder",
    ability: "Main ability is to hit, but it's second ability is placing a wall at the weapon's direction. Deals 20 damage when opponent interacts with wall. Builder also can place down a spinning construction sign that slows down the opponent.",
    skins: ["Default", "Reversed", "Construction Worker", "Intelligence", "Painter", "Swapful", "Artful", "Iron Pickaxe", "Wallmaster", "Brick Explorer", "Architect"],
    color: ["#e0b979ff", "#8B4513", "#c3a475ff", "#9cd7e8ff", "#e4d4beff", "linear-gradient(45deg, #ff0000, #0000ff)", "#ecd1bbff", "#e4d4beff", "#d2b48cff", "#e0b979ff", "#d2b48cff"],
    wallcolor: ["#8B4513", "#f9dd0bff", "#006400", "#005c76ff", "random", "linear-gradient(45deg, #ff0000, #0000ff)", "#ffffffff", "#CBcdcd", "#A9A9A9", "#8B4513", "#3057E1"],
    constructionColor: ["#f9dd0bff", "#e0b979ff", "#84760cff", "#00c8ffff", "random", "linear-gradient(45deg, #ff0000, #0000ff)", "#ffffffff", "#848482", "#7c7c7cff", "linear-gradient(135 deg, #8B4513, #0a337bff)", "#3057E1"],
    skinCost: ['0', '0', '100', '150', '200', '250', '300', '350', '1000', 'achievement', 'mastery'],
    damage: 20,
    speedReduce: '25%',
    special: "placeWall"
  },
  nuke: {
    name: "Nuke",
    ability: "Explodes and instakills every ball when the timer hits 0.",
    skins: ["Default", "Tsar Bomba", "TNT", "Atomic"],
    color: ["#063606ff", "#FF7A00", "#ff4500", "#00ff00"],
    skinCost: ['0', '400', '500', 'mastery'],
    damage: 1,
    special: "nukeExplosion"
  },
  cloner: {
    name: "Cloner",
    ability: "Clones the enemy ball every hit. Increases clone's HP every hit.",
    skins: ["Default", "Devesto", "Develesto", "Shadow Clones", "3D Printer", "Pretence", "Grimoire"],
    color: ["#5c186aff", "#c11d1dff", "#3eefefff", "#bcc59eff", "#808080", "#949494ff", "#533675ff"],
    skinCost: ['0', '300', '300', '350', '500', 'achievement', 'mastery'],
    damage: 25, // Clones only
    special: "cloneEnemy"
  },
  firingRange: {
    name: "Firing Range",
    ability: "Fires a long ranged bullet that deals damage on hit.",
    skins: ["Default", "Reversed", "Sniper", "Laser Gun", "Killdroid", "Deathstar", "Major Threat"],
    color: ["#13bdc9ff", "#ff0000", "#00ffff", "#ff00ffff", "#ba0b0bff", "#e0e0e0ff", "#ffffff"],
    bulletColor: ["#ff0000", "#13bdc9ff", "#00ff00", "#0000ffff", "#ba0b0bff", "#e0e0e0ff", "#ffffff"],
    skinCost: ['0', '100', '200', '300', '500', 'achievement', 'mastery'],
    damage: 25,
    cooldown: 2, // Cooldown in seconds
    special: "firingRange"
  },
  bomber: {
    name: "Bomber",
    ability: "Drops bombs that explode after a short time, dealing area damage.",
    skins: ["Default", "Grenade", "TimeBomb", "Cluster Bomb", "Subspace Tripmine", "Molotov", "Devastator"],
    color: ["#37451eff", "#228b22ff", "#909090ff", "#ff8c00ff", "#800080ff", "#ff4500ff", "#ff0000"],
    explosionColor: ["#ff4500", "#32cd32", "#e5ff00ff", "#ffa500", "#ff00ffff", "#ff6347", "#ffffff"],
    skinCost: ['0', '150', '200', '300', '400', '500', 'mastery'],
    damage: 30,
    bombTimer: Math.floor(Math.random() * 5) + 1, // Time before bomb explodes
    special: "dropBombs"
  },
  giant: {
    name: "Giant",
    ability: "Increases ball & weapon size every hit, but decreases speed",
    skins: ["Default", "Colossal", "Titan", "Gargantuan", "Behemoth", "Spongy", "Dinosaur"],
    color: ["#556b2fff", "#708090ff", "#2f4f4fff", "#4682b4ff", "#000080ff", "#faca2cff", "#41862cff"],
    skinCost: ['0', '100', '150', '200', '250', '400', 'mastery'],
    damage: 15,
    sizeIncrease: 0.1, // Size increase per hit
    speedDecrease: 0.1, // Speed decrease per hit
    special: "sizeSpeedChange"
  },
  offenderStaff: {
    name: "Offender Staff",
    ability: "Shoots a vine from the weapon position that attacks the opponent ball on contact and healing the user ball.",
    skins: ["Default", "Nature's Wrath", "Thorn Whip", "Vine Staff", "Deadly Staff"],
    color: ["#228b22ff", "#32cd32ff", "#006400ff", "#556b2fff", "#6b2f2fff"],
    skinCost: ['0', '150', '200', '500', 'mastery'],
    damage: 20, // Also healing amount
    special: "vineAttack"
  },
  broadcast: {
    name: "Broadcast",
    ability: "Places down a TV that drains health and explodes on a radius of the opponent. User ball can teleport to a TV, causing speed increment.",
    skins: ["Default", "Veeronica", "Television", "Badware", "Aero", "Blue Screened", "Network President"],
    color: ["#0bdb99ff", "#ffbedb", "#868686ff", "#00ff62ff", "linear-gradient(135deg, #9aa5b1ff, #6b7a89ff)", "#3a3aff", "#0bbcdbff"],
    tvColor: ["#0bdb99ff", "#ffbedb", "#868686ff", "#00ff62ff", "linear-gradient(135deg, #7a8a99ff, #5a6a79ff)", "#0033bb", "#0bbcdbff"], // the border colour
    skinCost: ['0', '200', '150', '300', '500', '850', 'mastery'],
    damage: 15,
    health: 90,
    tvHealth: 45,
    tvDrainage: 10, // Per second
    speedBoost: '25%', // Speed increase, meaning 125% for 10 seconds
    damageBoost: 30, // For 10 seconds
    special: "broadcastTv"
  },
  angryBall: {
    name: "Angry Ball",
    ability: "Shoots arrows that capture and pull enemies while healing both balls. Anger meter fills from opponent actions, boosting damage by 25% when full. Captured enemies are dragged along until arrow returns.",
    skins: ["Default", "Furious", "Rage", "Wrath", "Berserk", "Harken", "Infernal"],
    color: ["#ff4500", "#ff0000", "#8b0000", "#dc143c", "#b22222", "#fff200ff", "#000000"],
    skinCost: ['0', '100', '150', '200', '250', '400', 'mastery'],
    damage: 15,
    health: 120,
    speedBoost: 1.125,
    angerThreshold: 100,
    angerBoost: 1.25,
    arrowDamage: 1.15,
    arrowHeal: 25,
    special: "angryMeter"
  },
  healer: { // This weapon is only for Survival Gamemode
    name: "Healer",
    ability: "Heals other good balls, including itself. Sometimes can throw potions of good or bad towards the good or bad balls. Good potions heal good balls while bad potions slow bad balls.",
    skins: ["Default", "Medic", "Cleric", "Caretaker", "Untrusted", "Globally Accepted", "Life Support"],
    color: ["#48bb78", "#ffffff", "#ffd700", "#334e3eff", "linear-gradient(45deg, #48bb78, #4850bbff)", "#00ffff"],
    skinCost: ['0', '100', '150', '250', 'achievement', 'achievement', 'mastery'],
    damage: 10,
    health: 115,
    slowness: 0.15, // 15% slowness (85% speed)
    slowDuration: 5,
    healRadius: 60,
    healHealth: 45,
    potionRadius: 80,
    potionCooldown: 3,
    special: "healGoods"
  },
  rusted: {
    name: "Rusted",
    ability: "Able to rust any ball when hit, slowly deteriorating the target ball's health and speed for 3 seconds.",
    skins: ["Default", "Scale Rust", "Corroded"],
    color: ["linear-gradient(45deg, #783a11ff, #b96127ff)", "linear-gradient(45deg, #783a11ff, #4a2c0e)", "linear-gradient(45deg, #4a2c0e, #6b3d1a)"],
    skinCost: ['0','level10', 'mastery'],
    damage: 18,
    health: 150,
    rustDamage: 3,
    rustDuration: 4,
    speedReduction: 0.4,
    special: "rustDeterioration"
  },
  being: {
    name: "Powerful Being",
    ability: "Works differently from other balls. Clock-shaped and will become more powerful over time.",
    skins: ["Default", "Command Block", "Omnipotent"],
    color: ["#281e04ff", "#f1dc9cff", "#ffffff"],
    skinCost: ['0', '1000', 'mastery'],
    health: 9999,
    healthForActivate: 9800,
    baseDamage: 10,
    fullDamage: 25,
    healthRegen: 5, // Health regenerated per 0.5 seconds
    special: "powerfulBeing"
  },
  hallucination: {
    name: "Hallucination",
    ability: "Able to confuse the opponent, reversing their controls for a short time.",
    skins: ["Default", "Noli", "Nightmare"],
    color: ["#000000ff", "#600a9dff", "#4b0082"],
    skinCost: ['0', '300', 'mastery'],
    damage: 15,
    special: "confuseOpponent"
  }
};

// Maps
const maps = {
  arena: {
    name: "Arena",
    description: "Standard battlefield with no obstacles.",
    mapSize: 250,
    background: "#f0f0f0",
    obstacles: []
  },
  maze: {
    name: "Maze",
    description: "Navigate through walls and corridors.",
    mapSize: 250,
    background: "#e8e8e8",
    obstacles: [
      {x: 50, y: 50, width: 150, height: 20, backgroundColor: "#a0a0a0"},
      {x: 50, y: 180, width: 150, height: 20, backgroundColor: "#a0a0a0"},
      {x: 100, y: 70, width: 20, height: 110, backgroundColor: "#a0a0a0"}
    ]
  },
  fortress: {
    name: "Fortress",
    description: "Central fortress with defensive walls.",
    mapSize: 250,
    background: "#d0d0d0",
    obstacles: [
      {x: 90, y: 90, width: 70, height: 70, backgroundColor: "#808080"},
      {x: 110, y: 110, width: 30, height: 30 , backgroundColor: "#606060"}
    ]
  },
  theHQ: {
    name: "The HQ",
    description: "Complex abandoned headquarters with multiple obstacles. Who knows what happened here?",
    mapSize: 265,
    background: "#576d57ff",
    obstacles: [
      {x: 65, y: 64, width: 120, height: 120, backgroundColor: "#088fc9ff"},
      {x: 80, y: 80, width: 90, height: 90, backgroundColor: "#707070"},
      {x: 100, y: 100, width: 50, height: 50, backgroundColor: "#505050"},
      {x: 115, y: 115, width: 20, height: 20, text: "HQ", fontSize: "8px", color: "#088fc9ff"}
    ],
    otherDetails: [
      {x: 20, y: 20, width: 15, height: 15, backgroundColor: "#654321", text: "📦", fontSize: "8px"},
      {x: 40, y: 25, width: 12, height: 12, backgroundColor: "#8b4513", text: "📋", fontSize: "6px"},
      {x: 200, y: 30, width: 18, height: 18, backgroundColor: "#2f4f4f", text: "🗂️", fontSize: "8px"},
      {x: 25, y: 200, width: 20, height: 8, backgroundColor: "#696969", text: "DESK", fontSize: "4px", color: "#ffffff"},
      {x: 190, y: 210, width: 25, height: 10, backgroundColor: "#8b4513", text: "TABLE", fontSize: "4px", color: "#ffffff"},
      {x: 50, y: 50, width: 8, height: 8, backgroundColor: "#ff0000", text: "🚨", fontSize: "5px"},
      {x: 220, y: 200, width: 15, height: 15, backgroundColor: "#32cd32", text: "🌱", fontSize: "8px"},
      {x: 15, y: 120, width: 12, height: 12, backgroundColor: "#4169e1", text: "💻", fontSize: "6px"},
      {x: 230, y: 50, width: 10, height: 10, backgroundColor: "#ffd700", text: "⚡", fontSize: "6px"}
    ]
  },
  baseplate: {
    name: "Baseplate",
    description: "Abandoned baseplate, with broken scripts.",
    mapSize: 250,
    background: "#646564ff",
    obstacles: [],
    otherDetails: [
      {x: 30, y: 40, width: 15, height: 15, backgroundColor: "#ff0000", text: "ERROR", fontSize: "3px", color: "#ffffff"},
      {x: 180, y: 60, width: 20, height: 8, backgroundColor: "#000000", text: "nil", fontSize: "4px", color: "#ff0000"},
      {x: 70, y: 150, width: 25, height: 12, backgroundColor: "#333333", text: "SCRIPT", fontSize: "4px", color: "#00ff00"},
      {x: 200, y: 180, width: 18, height: 18, backgroundColor: "#8b0000", text: "⚠️", fontSize: "8px"},
      {x: 50, y: 200, width: 30, height: 6, backgroundColor: "#2f2f2f", text: "BROKEN", fontSize: "3px", color: "#ffff00"},
      {x: 150, y: 30, width: 12, height: 12, backgroundColor: "#4b0082", text: "no.", fontSize: "6px"},
      {x: 20, y: 100, width: 16, height: 16, backgroundColor: "#696969", text: "404", fontSize: "5px", color: "#ffffff"},
      {x: 220, y: 120, width: 14, height: 14, backgroundColor: "#dc143c", text: "X", fontSize: "8px", color: "#ffffff"}
    ]
  },
  edgeCity: {
    name: "Edge City",
    description: "Urban battlefield with skyscrapers and a chance for a funny ball to crash the party!",
    mapSize: 390,
    background: "#4a5568",
    obstacles: [
      {x: 30, y: 60, width: 40, height: 100, backgroundColor: "#2d3748", text: "BANK", fontSize: "6px", color: "#ffffff"},
      {x: 280, y: 80, width: 50, height: 150, backgroundColor: "#2d3748", text: "MALL", fontSize: "6px", color: "#ffffff"},
      {x: 140, y: 30, width: 35, height: 80, backgroundColor: "#4a5568"},
      {x: 220, y: 280, width: 45, height: 60, backgroundColor: "#2d3748", text: "CAFE", fontSize: "5px", color: "#ffffff"},
      {x: 80, y: 200, width: 30, height: 70, backgroundColor: "#2d3748", text: "SHOP", fontSize: "5px", color: "#ffffff"}
    ],
    event: {
      type: "funnyBallSpawn",
      timeUntilFunny: 10,
      description: "A wild funny ball appears and joins the fight!"
    }
  },
  cityHospital: {
    name: "City Hospital",
    description: "Medical facility with healing stations and emergency rooms.",
    mapSize: 310,
    background: "#f7fafc",
    obstacles: [
      {x: 75, y: 75, width: 160, height: 100, backgroundColor: "#e2e8f0", text: "HOSPITAL", fontSize: "8px", color: "#2d3748"},
      {x: 100, y: 100, width: 25, height: 25, backgroundColor: "#48bb78", text: "+", fontSize: "12px", color: "#ffffff"},
      {x: 185, y: 100, width: 25, height: 25, backgroundColor: "#48bb78", text: "+", fontSize: "12px", color: "#ffffff"},
      {x: 25, y: 250, width: 50, height: 35, backgroundColor: "#fed7d7", text: "ER", fontSize: "8px", color: "#c53030"},
      {x: 235, y: 250, width: 50, height: 35, backgroundColor: "#fed7d7", text: "ICU", fontSize: "6px", color: "#c53030"}
    ]
  },
  dam: {
    name: "Dam",
    description: "An abandoned dam that floods dirty water every 10 seconds, before draining them. DISGUSTING!!",
    mapSize: 300,
    background: "#303030ff",
    obstacles: [
      {x: 10, y: 10, width: 280, height: 15, backgroundColor: "#654321", text: "DAM WALL", fontSize: "6px", color: "#ffffff"},
      {x: 10, y: 275, width: 280, height: 15, backgroundColor: "#654321"},
      {x: 10, y: 25, width: 15, height: 250, backgroundColor: "#654321"},
      {x: 275, y: 25, width: 15, height: 250, backgroundColor: "#654321"},
      {x: 125, y: 145, width: 50, height: 10, backgroundColor: "#8B4513", text: "VALVE", fontSize: "5px", color: "#ffffff"}
    ],
    event: {
      type: "floodCycle",
      floodInterval: 10,
      floodDuration: 20,
      waterColor: "#4a4a2a",
      waterDamage: 1,
      description: "Dirty water floods the dam every 10 seconds!"
    }
  },
  largeForest: {
    name: "Large Forest",
    description: "Bro did Mr Beast plant all these?",
    mapSize: 465,
    background: "#228b22",
    obstacles: [
      {x: 50, y: 50, width: 25, height: 25, backgroundColor: "#8b4513", text: "🌳", fontSize: "14px", color: "#228b22"},
      {x: 120, y: 80, width: 25, height: 25, backgroundColor: "#8b4513", text: "🌳", fontSize: "14px", color: "#228b22"},
      {x: 220, y: 60, width: 25, height: 25, backgroundColor: "#8b4513", text: "🌳", fontSize: "14px", color: "#228b22"},
      {x: 320, y: 100, width: 25, height: 25, backgroundColor: "#8b4513", text: "🌳", fontSize: "14px", color: "#228b22"},
      {x: 80, y: 180, width: 25, height: 25, backgroundColor: "#8b4513", text: "🌳", fontSize: "14px", color: "#228b22"},
      {x: 180, y: 150, width: 25, height: 25, backgroundColor: "#8b4513", text: "🌳", fontSize: "14px", color: "#228b22"},
      {x: 280, y: 200, width: 25, height: 25, backgroundColor: "#8b4513", text: "🌳", fontSize: "14px", color: "#228b22"},
      {x: 60, y: 280, width: 25, height: 25, backgroundColor: "#8b4513", text: "🌳", fontSize: "14px", color: "#228b22"},
      {x: 150, y: 320, width: 25, height: 25, backgroundColor: "#8b4513", text: "🌳", fontSize: "14px", color: "#228b22"},
      {x: 260, y: 300, width: 25, height: 25, backgroundColor: "#8b4513", text: "🌳", fontSize: "14px", color: "#228b22"},
      {x: 380, y: 250, width: 25, height: 25, backgroundColor: "#8b4513", text: "🌳", fontSize: "14px", color: "#228b22"},
      {x: 350, y: 350, width: 25, height: 25, backgroundColor: "#8b4513", text: "🌳", fontSize: "14px", color: "#228b22"},
      {x: 400, y: 40, width: 20, height: 20, backgroundColor: "#8b4513", text: "🌳", fontSize: "12px", color: "#228b22"},
      {x: 200, y: 70, width: 20, height: 20, backgroundColor: "#8b4513", text: "🌳", fontSize: "12px", color: "#228b22"},
      {x: 50, y: 120, width: 20, height: 20, backgroundColor: "#8b4513", text: "🌳", fontSize: "12px", color: "#228b22"},
      {x: 120, y: 100, width: 20, height: 20, backgroundColor: "#8b4513", text: "🌳", fontSize: "12px", color: "#228b22"},
      {x: 180, y: 130, width: 20, height: 20, backgroundColor: "#8b4513", text: "🌳", fontSize: "12px", color: "#228b22"},
      {x: 40, y: 180, width: 20, height: 20, backgroundColor: "#8b4513", text: "🌳", fontSize: "12px", color: "#228b22"},
      {x: 100, y: 200, width: 20, height: 20, backgroundColor: "#8b4513", text: "🌳", fontSize: "12px", color: "#228b22"},
      {x: 170, y: 190, width: 20, height: 20, backgroundColor: "#8b4513", text: "🌳", fontSize: "12px", color: "#228b22"}
    ]
  },
  bigArena: {
    name: "Big Arena",
    description: "A massive open battlefield for epic battles!",
    background: "#e6e6e6",
    mapSize: 400,
    obstacles: []
  }
};

const modifiers = {
  normal: {
    name: "Normal",
    description: "Standard gameplay with no modifications.",
    effects: {}
  },
  speedBoost: {
    name: "Speed Boost",
    description: "All balls move 50% faster!",
    effects: { speedMultiplier: 1.5 }
  },
  giantBalls: {
    name: "Giant Balls",
    description: "All balls are 2x bigger and deal more damage.",
    effects: { sizeMultiplier: 2, damageMultiplier: 1.3 }
  },
  lowGravity: {
    name: "Low Gravity",
    description: "Balls bounce higher and move more floaty.",
    effects: { gravityMultiplier: 0.5, bounceMultiplier: 1.8 }
  },
  oneHitKO: {
    name: "One Hit KO",
    description: "Every hit is lethal! Be careful!",
    effects: { damageMultiplier: 999 }
  },
  rapidFire: {
    name: "Rapid Fire",
    description: "All weapon cooldowns reduced by 75%.",
    effects: { cooldownMultiplier: 0.25 }
  },
  tinyBalls: {
    name: "Tiny Balls",
    description: "All balls are half size but move faster.",
    effects: { sizeMultiplier: 0.5, speedMultiplier: 1.3 }
  },
  healthRegen: {
    name: "Health Regen",
    description: "All balls slowly regenerate health over time.",
    effects: { healthRegenRate: 2 }
  },
  chaos: {
    name: "Chaos Mode",
    description: "Random weapon swaps every 5 seconds!",
    effects: { weaponSwapInterval: 5 }
  },
  vampire: {
    name: "Vampire",
    description: "Heal for 50% of damage dealt to enemies.",
    effects: { lifeSteal: 0.5 }
  },
  funnyBall: {
    name: "Funny Ball",
    description: "Funny Ball roams around the arena, hurting anyone who dare hits him.",
    effects: { funnyBall: true }
  },
  damFlood: {
    name: "Dam Flood",
    description: "The dam floods dirty water every 10 seconds, before draining them.",
    effects: { damFlood: true }
  },
  banwave: {
    name:  "Banwave",
    description: "Avoid the rusty balls to survive!",
    effects: { banwave: true }
  },
  equality: {
    name: "Equality",
    description: "Every ball will have the same weapon!",
    effects: { equal: true }
  }
};

// Achievements
const achievements = {
  firstWin: {
    name: "First Victory",
    description: "Win your first battle",
    icon: "🏆",
    reward: 50
  },
  speedDemon: {
    name: "Speed Demon",
    description: "Win a battle in under 5 seconds",
    icon: "⚡",
    reward: 100
  },
  marathon: {
    name: "Marathon Fighter",
    description: "Win a battle that lasts over 60 seconds",
    icon: "⏰",
    reward: 75
  },
  weaponMaster: {
    name: "Weapon Master",
    description: "Unlock 10 different weapons",
    icon: "⚔️",
    reward: 200
  },
  skinCollector: {
    name: "Skin Collector",
    description: "Unlock 25 weapon skins",
    icon: "🎨",
    reward: 150
  },
  coinCollector: {
    name: "Coin Collector",
    description: "Earn 1000 total coins",
    icon: "💰",
    reward: 100
  },
  xpGrinder: {
    name: "XP Grinder",
    description: "Earn 500 total XP",
    icon: "📈",
    reward: 75
  },
  masteryAchieved: {
    name: "Mastery Achieved",
    description: "Reach Level 20 with any weapon",
    icon: "🌟",
    reward: 300
  },
  funnyEncounter: {
    name: "Funny Encounter",
    description: "Meet the Funny Ball",
    icon: "😄",
    reward: 50
  },
  waterSurvivor: {
    name: "Water Survivor",
    description: "Let one of your balls survive the dam flood",
    icon: "🌊",
    reward: 100
  },
  banwaveSurvivor: {
    name: "Banwave Survivor",
    description: "Let one of your balls survive the banwave",
    icon: "🔨",
    reward: 150
  },
  dieOfDeathBling: {
    name: "Bling of Death",
    description: "Survive 25 rounds with your Die of Death skins",
    icon: "DOD",
    reward: [500, "Pretence"] // Ball skin as a reward
  },
  untrustworthy: {
    name: "Untrustworthy",
    description: "As Healer, lose as the last ball standing in Survival Gamemode",
    icon: ":(",
    reward: [600, "Untrusted"] // Healer skin
  },
  veryCloseCall: {
    name: "Very Close Call",
    description: "As Dummy, win as the last ball standing in Survival Gamemode with Funny Ball at low health.",
    icon: ":O",
    reward: [700, "Bandaged"] // Dummy skin
  },
  verySpecificAchievement: {
    name: "Very Specific Achievement",
    description: "As Cloner (Pretence), kill the enemy ball (with the Dummy Civilian skin)using your clones in theHQ map in Corrosion gamemode.",
    icon: "Bruh.",
    iconColor: "#530707ff",
    reward: [800, "Deathstar"] // Killdroid variant skin
  },
  allMaps: {
    name: "All Maps",
    description: "Unlock all maps",
    icon: "🗺️",
    reward: [450, "Globally Accepted", "Brick Explorer"] // Healer and Builder skins respectively
  },
  rustCollector: {
    name: "Rust Collector",
    description: "Survive a round with the Banwave modifier.",
    icon: ":/",
    reward: [300, "Rusted"]
  },
  allAchievements: {
    name: "All Achievements",
    description: "Unlock all achievements",
    icon: "🏅",
    reward: 500
  }
};

// Game state
let selectedMap = 'arena';
let selectedGamemode = 'classic';
let selectedModifier = 'normal';
let currentModifier = 'normal';
let survivalSettings = { goodBalls: 8, evilBalls: 1 };
let gameSettings = { speed: 1, showHealth: true, autoRestart: false, showHitboxes: false, showHitmarkers: true };

// Player progression system
let playerData = {
  coins: 100,
  totalXP: 0,
  playerLevel: 1,
  weaponXP: {},
  weaponLevels: {},
  unlockedWeapons: ['sword', 'dagger', 'unarmed', 'dummy', 'bow'],
  unlockedSkins: {},
  achievements: [],
  totalCoinsEarned: 0
};

// Weapon costs
const weaponShop = {
  bow: { cost: 0 },
  spear: { cost: 100 },
  revolver: { cost: 200 },
  builder: { cost: 120 },
  nuke: { cost: 500 },
  cloner: { cost: 300 },
  firingRange: { cost: 350 },
  bomber: { cost: 400 },
  giant: { cost: 300 },
  offenderStaff: { cost: 450 },
  broadcast: { cost: 500 },
  angryBall: { cost: 600 },
  healer: { cost: 400 },
  rusted: { cost: 'achievement' },
  being: { cost: 1000000000 },
  hallucination: { cost: 1000000 }
};

const maxWeaponLevel = 20;
const xpPerWeaponLevel = 50;

// Skin costs (most skins cost coins)
const skinCosts = {
  // Default skins are free (index 0)
  1: 50,   // Second skin
  2: 75,   // Third skin
  3: 100,  // Fourth skin
  4: 125,  // Fifth skin
  5: 150,  // Sixth skin
  6: 175,  // Seventh skin
  7: 200,  // Eighth skin
  8: 250   // Ninth skin
  // Last skin (mastery) is earned through leveling
};

let roundStartTime = 0;

// Achievement functions
function unlockAchievement(achievementKey) {
  if (!playerData.achievements.includes(achievementKey)) {
    playerData.achievements.push(achievementKey);
    const achievement = achievements[achievementKey];
    
    let rewardText = '';
    if (Array.isArray(achievement.reward)) {
      const coins = achievement.reward[0];
      playerData.coins += coins;
      rewardText = `+${coins} coins`;
      
      for (let i = 1; i < achievement.reward.length; i++) {
        const rewardName = achievement.reward[i];
        if (Object.keys(weapons).some(key => weapons[key].name === rewardName)) {
          unlockWeaponByName(rewardName);
          rewardText += ` + ${rewardName} weapon`;
        } else {
          unlockSkinByName(rewardName);
          rewardText += ` + ${rewardName} skin`;
        }
      }
    } else {
      playerData.coins += achievement.reward;
      rewardText = `+${achievement.reward} coins`;
    }
    
    alert(`${achievement.icon} ACHIEVEMENT UNLOCKED!\n${achievement.name}\n${achievement.description}\n${rewardText}!`);
    savePlayerData();
  }
}

function unlockSkinByName(skinName) {
  Object.keys(weapons).forEach(weaponKey => {
    const weapon = weapons[weaponKey];
    const skinIndex = weapon.skins.indexOf(skinName);
    if (skinIndex !== -1 && !playerData.unlockedSkins[weaponKey].includes(skinIndex)) {
      playerData.unlockedSkins[weaponKey].push(skinIndex);
    }
  });
}

function unlockWeaponByName(weaponName) {
  Object.keys(weapons).forEach(weaponKey => {
    if (weapons[weaponKey].name === weaponName && !playerData.unlockedWeapons.includes(weaponKey)) {
      playerData.unlockedWeapons.push(weaponKey);
    }
  });
}

function checkAchievements() {
  // Weapon Master - 10 weapons
  if (playerData.unlockedWeapons.length >= 10) {
    unlockAchievement('weaponMaster');
  }
  
  // Skin Collector - 25 skins
  const totalSkins = Object.values(playerData.unlockedSkins).reduce((total, skins) => total + skins.length, 0);
  if (totalSkins >= 25) {
    unlockAchievement('skinCollector');
  }
  
  // Coin Collector - 1000 total coins
  if (playerData.totalCoinsEarned >= 1000) {
    unlockAchievement('coinCollector');
  }
  
  // XP Grinder - 500 total XP
  if (playerData.totalXP >= 500) {
    unlockAchievement('xpGrinder');
  }
}

let banwaveWins = 0;
function checkBanwaveWin() {
  if (currentModifier === 'banwave') {
    banwaveWins++;
    if (banwaveWins >= 1) {
      unlockAchievement('rustCollector');
    }
  }
}

function checkRoundAchievements(duration) {
  // First Win
  unlockAchievement('firstWin');
  
  // Speed Demon - under 5 seconds
  if (duration < 5) {
    unlockAchievement('speedDemon');
  }
  
  // Marathon - over 60 seconds
  if (duration > 60) {
    unlockAchievement('marathon');
  }
}

// Data saving and loading
function savePlayerData() {
  localStorage.setItem('fightingWeaponBalls_playerData', JSON.stringify(playerData));
}

function loadPlayerData() {
  const saved = localStorage.getItem('fightingWeaponBalls_playerData');
  if (saved) {
    playerData = { ...playerData, ...JSON.parse(saved) };
  }
  initializeWeaponData();
}

function initializeWeaponData() {
  Object.keys(weapons).forEach(weaponKey => {
    if (!playerData.weaponXP[weaponKey]) playerData.weaponXP[weaponKey] = 0;
    if (!playerData.weaponLevels[weaponKey]) playerData.weaponLevels[weaponKey] = 1;
    if (!playerData.unlockedSkins[weaponKey]) playerData.unlockedSkins[weaponKey] = [0];
  });
}

// XP and leveling functions
function addWeaponXP(weaponKey, xp) {
  const currentLevel = playerData.weaponLevels[weaponKey];
  if (currentLevel >= maxWeaponLevel) return; // Max level reached
  
  playerData.weaponXP[weaponKey] += xp;
  playerData.totalXP += xp;
  
  // Check weapon level up
  if (playerData.weaponXP[weaponKey] >= xpPerWeaponLevel) {
    playerData.weaponLevels[weaponKey]++;
    playerData.weaponXP[weaponKey] -= xpPerWeaponLevel;
    
    // Unlock mastery skin at level 20
    if (playerData.weaponLevels[weaponKey] === maxWeaponLevel) {
      const masteryIndex = weapons[weaponKey].skins.length - 1;
      if (!playerData.unlockedSkins[weaponKey].includes(masteryIndex)) {
        playerData.unlockedSkins[weaponKey].push(masteryIndex);
        alert(`🏆 ${weapons[weaponKey].name} MASTERY UNLOCKED! You earned the ${weapons[weaponKey].skins[masteryIndex]} skin!`);
        unlockAchievement('masteryAchieved');
      }
    }
  }
  
  savePlayerData();
  checkAchievements();
}

function addCoins(amount) {
  playerData.coins += amount;
  playerData.totalCoinsEarned += amount;
  savePlayerData();
  checkAchievements();
}

// Shop functions
function buyWeapon(weaponKey) {
  const cost = weaponShop[weaponKey].cost;
  if (playerData.coins >= cost && !playerData.unlockedWeapons.includes(weaponKey)) {
    playerData.coins -= cost;
    playerData.unlockedWeapons.push(weaponKey);
    savePlayerData();
    checkAchievements();
    return true;
  }
  return false;
}

function buySkin(weaponKey, skinIndex) {
  const weapon = weapons[weaponKey];
  const cost = weapon.skinCost ? weapon.skinCost[skinIndex] : skinCosts[skinIndex];
  
  // Block achievement-only, level-locked, and mastery skins from being purchased
  if (!cost || cost === 'achievement' || cost === 'level10' || cost === 'mastery') return false;
  
  const numericCost = parseInt(cost);
  if (isNaN(numericCost)) return false; // Invalid cost
  
  if (playerData.coins >= numericCost && !playerData.unlockedSkins[weaponKey].includes(skinIndex)) {
    playerData.coins -= numericCost;
    playerData.unlockedSkins[weaponKey].push(skinIndex);
    savePlayerData();
    checkAchievements();
    return true;
  }
  return false;
}

// Achievements display
function showAchievements() {
  const shopSection = document.getElementById('shopSection');
  const shopInfoSection = document.getElementById('shopInfoSection');
  
  shopSection.style.display = 'block';
  shopInfoSection.style.display = 'none';
  
  let html = '<h3>🏆 Achievements</h3>';
  
  Object.keys(achievements).forEach(key => {
    const achievement = achievements[key];
    const unlocked = playerData.achievements.includes(key);
    
    html += `
      <div style="padding: 10px; margin: 5px; background: ${unlocked ? '#d4edda' : '#f8f9fa'}; border: 1px solid ${unlocked ? '#c3e6cb' : '#dee2e6'};">
        <div style="font-size: 16px; font-weight: bold;">
          ${achievement.icon} ${achievement.name} ${unlocked ? '✅' : '🔒'}
        </div>
        <div style="font-size: 12px; color: #666; margin: 2px 0;">
          ${achievement.description}
        </div>
        <div style="font-size: 11px; color: #888;">
          Reward: ${Array.isArray(achievement.reward) ? `${achievement.reward[0]} coins + ${achievement.reward.slice(1).join(', ')} skin${achievement.reward.length > 2 ? 's' : ''}` : `${achievement.reward} coins`}
        </div>
      </div>`;
  });
  
  shopSection.innerHTML = html;
}

function awardRoundXP(weaponKey, winnerBall = null) {
  const roundDuration = Math.floor((Date.now() - roundStartTime) / 1000);
  let multiplier = 1;
  
  // 2x for Modifiers gamemode
  if (selectedGamemode === 'modifiers') {
    multiplier = 2;
  }
  // 1.5x if Rusted weapon is one of the balls
  else if (balls && balls.length > 0 && (balls.some(b => b.weapon === 'rusted') || (winnerBall && winnerBall.weapon === 'rusted'))) {
    multiplier = 1.5;
  }
  
  // 1.1x bonus for clutch wins (winner has less than 25% health)
  if (winnerBall && winnerBall.health <= winnerBall.maxHealth * 0.25) {
    multiplier *= 1.1;
  }
  
  const xpAmount = Math.floor(roundDuration * multiplier);
  const coinAmount = Math.floor(roundDuration * 2 * multiplier);
  
  addWeaponXP(weaponKey, xpAmount);
  addCoins(coinAmount);
  checkRoundAchievements(roundDuration);
  
  return { xp: xpAmount, coins: coinAmount, duration: roundDuration, multiplier: multiplier };
}

// Funny ball system
let funnyBallTimer = 0;
let funnyBallSpawned = false;
let funnyBall = null;

// Banwave rust ball system
let banwaveTimer = 0;
let banwaveBallSpawned = false;
let banwaveBall = null;

// Dam flooding system
let damFloodTimer = 0;
let damIsFlooded = false;
let damWaterLevel = 0;
let waterDamageTimer = 0;

function createFunnyBall() {
  const funnyWeapons = ['unarmed', 'dummy', 'dagger'];
  const randomWeapon = funnyWeapons[Math.floor(Math.random() * funnyWeapons.length)];
  const gameArea = document.querySelector('.game-area');
  
  funnyBall = {
    element: document.createElement('div'),
    x: Math.random() * 200 + 25,
    y: Math.random() * 200 + 25,
    vx: (Math.random() - 0.5) * 4,
    vy: (Math.random() - 0.5) * 4,
    weapon: randomWeapon,
    health: 50,
    maxHealth: 50,
    color: '#ff69b4',
    size: 15,
    isFunny: true,
    name: 'Funny Ball',
    damageBonus: 0,
    hitCount: 0
  };
  
  // Create funny ball visual element
  funnyBall.element.style.cssText = `
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: linear-gradient(45deg, #ff69b4, #ff1493, #ff69b4);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    font-size: 12px;
    left: ${funnyBall.x}px;
    top: ${funnyBall.y}px;
    border: 2px solid #ff1493;
    box-shadow: 0 0 10px rgba(255, 105, 180, 0.8);
    animation: funnyBounce 1s ease-in-out infinite;
  `;
  
  funnyBall.element.textContent = ':)';
  
  // Add funny ball animation CSS
  if (!document.getElementById('funny-animation')) {
    const style = document.createElement('style');
    style.id = 'funny-animation';
    style.textContent = `
      @keyframes funnyBounce {
        0%, 100% { transform: scale(1) rotate(0deg); }
        50% { transform: scale(1.1) rotate(5deg); }
      }
    `;
    document.head.appendChild(style);
  }
  
  gameArea.appendChild(funnyBall.element);
  funnyBallSpawned = true;
  console.log('🎉 Funny ball has joined the fight!');
}

function updateFunnyBallTimer(deltaTime) {
  if (selectedMap === 'edgeCity' && !funnyBallSpawned) {
    funnyBallTimer += deltaTime;
    const timeUntilFunny = maps.edgeCity.event.timeUntilFunny;
    
    if (funnyBallTimer >= timeUntilFunny) {
      createFunnyBall();
    }
  }
}

function resetFunnyBall() {
  funnyBallTimer = 0;
  funnyBallSpawned = false;
  if (funnyBall && funnyBall.element) {
    funnyBall.element.remove();
  }
  funnyBall = null;
}

function createBanwaveBall() {
  const gameArea = document.querySelector('.game-area');
  
  banwaveBall = {
    element: document.createElement('div'),
    x: Math.random() * 200 + 25,
    y: Math.random() * 200 + 25,
    vx: (Math.random() - 0.5) * 6,
    vy: (Math.random() - 0.5) * 6,
    weapon: 'rusted',
    health: weapons.rusted.health,
    maxHealth: weapons.rusted.health,
    size: 15,
    isBanwave: true,
    name: 'Rust Ball',
    damageBonus: 0,
    hitCount: 0
  };
  
  banwaveBall.element.style.cssText = `
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: linear-gradient(45deg, #783a11ff, #b96127ff);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    font-size: 12px;
    left: ${banwaveBall.x}px;
    top: ${banwaveBall.y}px;
    border: 3px solid #b96127;
    box-shadow: 0 0 15px rgba(185, 97, 39, 0.7);
  `;
  
  banwaveBall.element.textContent = 'R';
  
  gameArea.appendChild(banwaveBall.element);
  banwaveBallSpawned = true;
  console.log('⚠️ Banwave rust ball has spawned!');
}

function resetBanwaveBall() {
  banwaveTimer = 0;
  banwaveBallSpawned = false;
  if (banwaveBall && banwaveBall.element) {
    banwaveBall.element.remove();
  }
  banwaveBall = null;
}

// Dam flooding system
function updateDamFlooding(deltaTime) {
  if (selectedMap === 'dam') {
    damFloodTimer += deltaTime;
    const floodInterval = maps.dam.event.floodInterval;
    const floodDuration = maps.dam.event.floodDuration;
    
    const cycleTime = damFloodTimer % (floodInterval + floodDuration);
    
    if (cycleTime >= floodInterval && !damIsFlooded) {
      damIsFlooded = true;
      console.log('💧 Dam is flooding with dirty water!');
    } else if (cycleTime < floodInterval && damIsFlooded) {
      damIsFlooded = false;
      damWaterLevel = 0;
      console.log('🌊 Water is draining from the dam!');
      unlockAchievement('waterSurvivor');
    }
    
    // Animate water level
    if (damIsFlooded) {
      damWaterLevel = Math.min(1, (cycleTime - floodInterval) / 2);
    }
  }
}

function drawDamWater() {
  if (selectedMap === 'dam' && damIsFlooded && damWaterLevel > 0) {
    const gameArea = document.querySelector('.game-area');
    let waterElement = document.getElementById('damWater');
    
    if (!waterElement) {
      waterElement = document.createElement('div');
      waterElement.id = 'damWater';
      waterElement.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 25px;
        width: 200px;
        background: linear-gradient(180deg, ${maps.dam.event.waterColor}dd, ${maps.dam.event.waterColor}ff);
        border-top: 2px solid #3a3a1a;
        z-index: 1;
        animation: waterWave 2s ease-in-out infinite;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
      `;
      gameArea.appendChild(waterElement);
      
      // Add wave animation CSS
      if (!document.getElementById('water-animation')) {
        const style = document.createElement('style');
        style.id = 'water-animation';
        style.textContent = `
          @keyframes waterWave {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(1.02); }
          }
          @keyframes bubble {
            0% { transform: translateY(0) scale(0.5); opacity: 0.7; }
            50% { opacity: 1; }
            100% { transform: translateY(-20px) scale(1); opacity: 0; }
          }
        `;
        document.head.appendChild(style);
      }
    }
    
    const waterHeight = 180 * damWaterLevel;
    waterElement.style.height = waterHeight + 'px';
    
    // Add bubbles effect
    if (Math.random() < 0.1) {
      const bubble = document.createElement('div');
      bubble.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255,255,255,0.6);
        border-radius: 50%;
        left: ${Math.random() * 190}px;
        bottom: 0;
        animation: bubble 2s linear;
        pointer-events: none;
      `;
      waterElement.appendChild(bubble);
      setTimeout(() => bubble.remove(), 2000);
    }
  } else {
    // Remove water when not flooded
    const waterElement = document.getElementById('damWater');
    if (waterElement) waterElement.remove();
  }
}

function resetDamFlooding() {
  damFloodTimer = 0;
  damIsFlooded = false;
  damWaterLevel = 0;
  waterDamageTimer = 0;
  
  // Reset water damage state for all balls
  balls.forEach(ball => {
    ball.inWater = false;
    ball.waterDamageTimer = 0;
  });
  
  // Remove modifier water
  const modifierWater = document.getElementById('modifierWater');
  if (modifierWater) modifierWater.remove();
}

// Health display system
function drawHealthBar(ctx, ball) {
  const barWidth = 30;
  const barHeight = 4;
  const barX = ball.x - barWidth / 2;
  const barY = ball.y - ball.size - 10;
  
  const healthPercent = ball.health / ball.maxHealth;
  const healthColor = healthPercent > 0.6 ? '#4CAF50' : healthPercent > 0.3 ? '#FF9800' : '#F44336';
  
  // Background bar
  ctx.fillStyle = '#333';
  ctx.fillRect(barX, barY, barWidth, barHeight);
  
  // Health bar
  ctx.fillStyle = healthColor;
  ctx.fillRect(barX, barY, barWidth * healthPercent, barHeight);
  
  // Health text
  ctx.fillStyle = '#000';
  ctx.font = '8px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(`${Math.ceil(ball.health)}/${ball.maxHealth}`, ball.x, barY - 2);
}

function displayAllHealth(ctx, balls) {
  balls.forEach(ball => {
    if (ball.health > 0) {
      drawHealthBar(ctx, ball);
    }
  });
  
  // Also draw funny ball health if it exists
  if (funnyBall && funnyBall.health > 0) {
    drawHealthBar(ctx, funnyBall);
  }
}

// Cached references
const shopSection = document.getElementById("shopSection");
const shopInfoSection = document.getElementById("shopInfoSection");
const shopButton = document.getElementById("shopButton");
const mapButton = document.getElementById("mapButton");
const gamemodeButton = document.getElementById("gamemodeButton");
const settingsButton = document.getElementById("settingsButton");

// Opens detailed info for selected weapon
function showWeaponInfo(weaponKey) {
  const weapon = weapons[weaponKey];
  if (!weapon) return;

  // Build skins HTML with previews and descriptions
  const skinsHTML = weapon.skins?.length
    ? weapon.skins.map((skin, index) => {
        const skinColor = weapon.color[index] || weapon.color[0];
        const weaponLevel = playerData.weaponLevels[weaponKey] || 1;
        const cost = weapon.skinCost ? weapon.skinCost[index] : skinCosts[index] || 0;
        const isUnlocked = playerData.unlockedSkins[weaponKey].includes(index);
        const isMastery = cost === 'mastery';
        const masteryLocked = isMastery && weaponLevel < maxWeaponLevel;
        
        let originClass = '';
        
        if ((weaponKey === 'sword' && (skin === 'Golden' || skin === 'Netherite' || skin === 'Ruby')) || (weaponKey === 'nuke' && (skin === 'TNT')) || (weaponKey === 'being' && (skin === 'Command Block')) || (weaponKey === 'builder' && (skin === 'Iron Pickaxe')) || (weaponKey === 'spear' && (skin === 'Trident'))) {
          originClass = 'minecraft';
        } else if ((weaponKey === 'builder' && (skin === 'Artful' || skin === 'Swapful')) || (weaponKey === 'sword' && (skin === 'Clawsguy' || skin === 'Pursuer')) || (weaponKey === 'cloner' && skin === 'Devesto') || (weaponKey === 'firingRange' && skin === 'Killdroid') || (weaponKey === 'revolver' && skin === 'Gunslinger') || (weaponKey === 'broadcast' && skin === 'Badware') || (weaponKey === 'unarmed' && skin === 'Civilian') || (weaponKey === 'angryBall' && skin === 'Harken')) {
          originClass = 'dieOfDeath';
        } else if ((weaponKey === 'cloner' && skin === 'Develesto')){
          originClass = 'liveOfLife';
        } else if ((weaponKey === 'revolver' && (skin === 'Chicago' || skin === 'Moscow')) || (weaponKey === 'cloner' && skin === 'Shadow Clones')) {
          originClass = 'itemAsylum';
        } else if ((weaponKey === 'hallucination' && skin === 'Noli') || (weaponKey === 'dagger' && skin === 'Two Time') || (weaponKey === 'revolver' && skin === 'Chance') || (weaponKey === 'broadcast' && skin === 'Veeronica')) {
          originClass = 'forsaken';
        } else if ((weaponKey === 'sword' && skin === 'Freesmart') || (weaponKey === 'giant' && skin === 'Spongy')) {
          originClass = 'bfdi';
        } else if ((weaponKey === 'offenderStaff' && skin === 'Vine Staff')) {
          originClass = 'somethingEvil';
        } else {
          originClass = 'original';
        }
        
        const originText = {
          minecraft: 'Originates from Minecraft!',
          dieOfDeath: 'Originates from Die of Death!',
          liveOfLife: 'Originates from Live of Life!',
          itemAsylum: 'Originates from Item Asylum!',
          forsaken: 'Originates from Forsaken!',
          bfdi: 'Originates from Batlle For Dream Island!',
          somethingEvil: 'Originates from Something Evil Will Happen!',
          original: 'Original'
        };
        
        const borderRadius = weaponKey === 'being' ? '15%' : originClass === 'minecraft' ? '0%' : '50%';
        
        const isMinecraft = ['Golden', 'Netherite', 'Ruby', 'TNT', 'Command Block', 'Iron Pickaxe', 'Trident'].includes(skin);
        const isLevel10Locked = cost === 'level10' && weaponLevel < 10;
        
        let priceText = '';
        if (isMinecraft) {
          priceText = 'Temporarily Disabled';
        } else if (masteryLocked) {
          priceText = 'Reach Level 20';
        } else if (isLevel10Locked) {
          priceText = 'Reach Level 10';
        } else if (cost === 'achievement' && !isUnlocked) {
          priceText = 'Achievement Only';
        } else if (!isUnlocked && parseInt(cost) >= 0 && !isNaN(parseInt(cost))) {
          priceText = cost === '0' ? 'Free' : `${cost} coins`;
        } else if (parseInt(cost) === 0 || cost === 'achievement' || cost === 'level10' || cost === 'mastery') {
          priceText = isUnlocked ? 'Owned' : 'Free';
        } else {
          priceText = 'Owned';
        }
        
        return `
          <div class="skin-card ${originClass} ${masteryLocked ? 'mastery-locked' : ''}" onclick="showSkinPreview('${weaponKey}', ${index})">
            <div class="skin-preview" style="background: ${skinColor}; border-radius: ${borderRadius};"></div>
            <div class="skin-info">
              <h5>${skin} ${isMastery ? '🏆' : ''}</h5>
              <p>${originText[originClass]}</p>
              <p class="skin-price">${priceText}</p>
            </div>
          </div>
        `;
      }).join("")
    : "<p>No skins available</p>";

  // Set info content with consistent styling
  const weaponLevel = playerData.weaponLevels[weaponKey] || 1;
  const weaponXP = playerData.weaponXP[weaponKey] || 0;
  const maxed = weaponLevel >= maxWeaponLevel;
  
  const isUnlocked = playerData.unlockedWeapons.includes(weaponKey);
  const shop = weaponShop[weaponKey];
  let lockedText = '';
  
  if (!isUnlocked && shop) {
    if (shop.cost === 'achievement') {
      lockedText = '<p style="color: #ff0000; font-weight: bold; font-size: 14px;">🔒 LOCKED! (Achievement Required)</p>';
    } else {
      const canAfford = playerData.coins >= shop.cost;
      lockedText = `<p style="color: ${canAfford ? '#ff9800' : '#ff0000'}; font-weight: bold; font-size: 14px;">🔒 LOCKED! (Cost: ${shop.cost} coins)</p>`;
    }
  }
  
  shopInfoSection.innerHTML = `
    <style>
      .shop-info-content { padding: 15px; }
      .xp-info { background: #f0f8ff; padding: 8px; margin: 10px 0; border-radius: 4px; }
      .skin-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 8px; margin: 10px 0; }
      .skin-card { background: #f5f5f5; border: 2px solid #ddd; padding: 8px; cursor: pointer; transition: all 0.2s; }
      .skin-card:hover { background: #e6f3ff; border-color: #4CAF50; }
      .skin-card.mastery-locked { opacity: 0.5; border-color: #999; }
      .skin-card.minecraft { border-color: #8dca8f; }
      .skin-card.minecraft:hover { border-color: #6ba86f; background: #f0fff0; }
      .skin-card.dieOfDeath { border-color: #ffc0c0; }
      .skin-card.dieOfDeath:hover { border-color: #ff9999; background: #fff5f5; }
      .skin-card.liveOfLife { border-color: #003f3f; }
      .skin-card.liveOfLife:hover { border-color: #006666; background: #f5feffff; }
      .skin-card.itemAsylum { border-color: #f0ee57; }
      .skin-card.itemAsylum:hover { border-color: #e6e040; background: #fffef0; }
      .skin-card.forsaken { border-color: #b884da; }
      .skin-card.forsaken:hover { border-color: #a066c7; background: #f8f5ff; }
      .skin-card.bfdi { border-color: #0080ff; }
      .skin-card.bfdi:hover { border-color: #005cb8ff; background: #dbedffff; }
      .skin-card.somethingEvil { border-color: #ff69b4; }
      .skin-card.somethingEvil:hover { border-color: #ff1493; background: #ffe6f2; }
      .skin-card.original { border-color: #ddd; }
      .skin-card.original:hover { border-color: #4CAF50; background: #e6f3ff; }
      .skin-preview { width: 25px; height: 25px; margin: 0 auto 5px; }
      .skin-info h5 { margin: 0 0 3px; font-size: 13px; }
      .skin-info p { margin: 0; font-size: 11px; color: #666; }
      .skin-price { font-weight: bold; color: #2196F3; }
      .shop-buttons { margin-top: 15px; }
      .shop-buttons .button { margin: 0 5px 5px 0; }
    </style>
    <div class="shop-info-content">
      <h3>${weapon.name}</h3>
      ${lockedText}
      <p><strong>Damage:</strong> ${weapon.damage || weapon.baseDamage || 'Variable'}</p>
      ${isUnlocked ? `<div class="xp-info">
        <p><strong>Level:</strong> ${weaponLevel}/${maxWeaponLevel} ${maxed ? '🏆 MAXED' : ''}</p>
        ${!maxed ? `<p><strong>XP:</strong> ${weaponXP}/${xpPerWeaponLevel}</p>` : ''}
      </div>` : ''}
      <p id="abilityText">${weapon.ability}</p>
      
      ${isUnlocked ? `<div id="skinsSection" style="display:none;">
        <div class="skin-grid">
          ${skinsHTML}
        </div>
      </div>` : ''}

      <div class="shop-buttons">
        ${isUnlocked ? '<button class="button" id="equipButton">Equip Default</button>' : ''}
        ${isUnlocked ? '<button class="button" id="toggleViewButton">View Skins</button>' : ''}
        ${!isUnlocked && shop && shop.cost !== 'achievement' ? `<button class="button" id="buyButton" ${playerData.coins < shop.cost ? 'disabled' : ''}>Buy (${shop.cost} coins)</button>` : ''}
        <button class="button" id="closeButton">Close</button>
      </div>
    </div>
  `;

  shopInfoSection.style.display = "inline-block";

  // Attach button logic AFTER content is added
  const toggleButton = document.getElementById("toggleViewButton");
  const closeButton = document.getElementById("closeButton");
  const equipButton = document.getElementById("equipButton");
  const abilityText = document.getElementById("abilityText");
  const skinsSection = document.getElementById("skinsSection");

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      const showingSkins = skinsSection.style.display === "block";
      skinsSection.style.display = showingSkins ? "none" : "block";
      abilityText.style.display = showingSkins ? "block" : "none";
      toggleButton.textContent = showingSkins ? "View Skins" : "View Info";
    });
  }

  closeButton.addEventListener("click", () => {
    shopInfoSection.style.display = "none";
  });

  if (equipButton) {
    equipButton.addEventListener("click", () => {
      equipWeapon(weaponKey);
    });
  }

  const buyButton = document.getElementById("buyButton");
  if (buyButton) {
    buyButton.addEventListener("click", () => {
      if (buyWeapon(weaponKey)) {
        alert(`${weapons[weaponKey].name} purchased!`);
        generateShopHTML();
        showWeaponInfo(weaponKey);
      }
    });
  }
}

// Show skin preview
function showSkinPreview(weaponKey, skinIndex) {
  const weapon = weapons[weaponKey];
  const skinName = weapon.skins[skinIndex];
  const skinColor = weapon.color[skinIndex] || weapon.color[0];
  const isUnlocked = playerData.unlockedSkins[weaponKey].includes(skinIndex);
  const cost = weapon.skinCost ? weapon.skinCost[skinIndex] : skinCosts[skinIndex];
  const weaponLevel = playerData.weaponLevels[weaponKey] || 1;
  const isMastery = cost === 'mastery';
  const isAchievementOnly = cost === 'achievement';
  const isLevel10 = cost === 'level10';
  const borderRadius = weaponKey === 'being' ? '15%' : '50%';
  
  let originClass = 'Original';
  if ((weaponKey === 'sword' && ['Golden', 'Netherite', 'Ruby'].includes(skinName)) || 
      (weaponKey === 'nuke' && skinName === 'TNT') || 
      (weaponKey === 'being' && skinName === 'Command Block') || 
      (weaponKey === 'builder' && skinName === 'Iron Pickaxe') || 
      (weaponKey === 'spear' && skinName === 'Trident')) {
    originClass = 'Minecraft';
  } else if ((weaponKey === 'builder' && ['Artful', 'Swapful'].includes(skinName)) || 
             (weaponKey === 'sword' && ['Clawsguy', 'Pursuer'].includes(skinName)) || 
             (weaponKey === 'cloner' && skinName === 'Devesto')) {
    originClass = 'Die of Death';
  }
  
  let statusText = '';
  if (isMastery && weaponLevel < maxWeaponLevel) {
    statusText = `<p style="color: #ff9800;">🔒 Reach Level ${maxWeaponLevel} to unlock</p>`;
  } else if (isLevel10 && weaponLevel < 10) {
    statusText = '<p style="color: #ff9800;">🔒 Reach Level 10 to unlock</p>';
  } else if (isAchievementOnly && !isUnlocked) {
    statusText = '<p style="color: #ff0000;">🔒 Achievement Required</p>';
  } else if (!isUnlocked && parseInt(cost) >= 0 && !isNaN(parseInt(cost))) {
    const canAfford = playerData.coins >= parseInt(cost);
    statusText = cost === '0' ? '<p style="color: #4CAF50;">💰 Free</p>' : `<p style="color: ${canAfford ? '#4CAF50' : '#ff0000'};">💰 ${cost} coins</p>`;
  } else if (isUnlocked) {
    statusText = '<p style="color: #4CAF50;">✅ Owned</p>';
  }
  
  const skinPreviewDiv = document.createElement('div');
  skinPreviewDiv.id = 'skinPreview';
  skinPreviewDiv.className = 'shop-info-section';
  skinPreviewDiv.style.cssText = `
    display: inline-block;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
  `;
  
  skinPreviewDiv.innerHTML = `
    <div style="padding: 15px; text-align: center;">
      <h3>${skinName} ${isMastery ? '🏆' : ''}</h3>
      <div style="width: 80px; height: 80px; background: ${skinColor}; border-radius: ${borderRadius}; margin: 15px auto; border: 2px solid #333;"></div>
      <p><strong>Origin:</strong> ${originClass}</p>
      ${statusText}
      <div style="margin-top: 15px;">
        ${isUnlocked ? `<button class="button" onclick="equipSkinFromPreview('${weaponKey}', ${skinIndex})">Equip</button>` : ''}
        ${!isUnlocked && parseInt(cost) >= 0 && !isNaN(parseInt(cost)) && playerData.coins >= parseInt(cost) ? `<button class="button" onclick="buySkinFromPreview('${weaponKey}', ${skinIndex})">Buy</button>` : ''}
        <button class="button" onclick="closeSkinPreview()">Close</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(skinPreviewDiv);
}

function equipSkinFromPreview(weaponKey, skinIndex) {
  const weapon = weapons[weaponKey];
  const skinName = weapon.skins[skinIndex];
  const isMinecraft = ['Golden', 'Netherite', 'Ruby', 'TNT', 'Command Block', 'Iron Pickaxe', 'Trident'].includes(skinName);
  
  if (isMinecraft) {
    alert('This Minecraft skin is temporarily disabled and will be fixed later.');
    return;
  }
  
  selectSkin(weaponKey, skinIndex);
  closeSkinPreview();
}

function buySkinFromPreview(weaponKey, skinIndex) {
  const weapon = weapons[weaponKey];
  const skinName = weapon.skins[skinIndex];
  const isMinecraft = ['Golden', 'Netherite', 'Ruby', 'TNT', 'Command Block', 'Iron Pickaxe', 'Trident'].includes(skinName);
  
  if (isMinecraft) {
    alert('This Minecraft skin is temporarily disabled and will be fixed later.');
    return;
  }
  
  if (buySkin(weaponKey, skinIndex)) {
    alert(`${skinName} skin purchased!`);
    closeSkinPreview();
    showWeaponInfo(weaponKey);
  }
}

function closeSkinPreview() {
  const preview = document.getElementById('skinPreview');
  if (preview) preview.remove();
}

// Show hitmarker
function showHitmarker(x, y, damage) {
  const hitmarker = document.createElement('div');
  hitmarker.style.cssText = `
    position: absolute;
    left: ${x}px;
    top: ${y - 20}px;
    color: #ff0000;
    font-weight: bold;
    font-size: 14px;
    pointer-events: none;
    z-index: 100;
    animation: hitmarkerFade 1s ease-out forwards;
  `;
  hitmarker.textContent = `-${Math.floor(damage)}`;
  
  if (!document.querySelector('#hitmarker-style')) {
    const style = document.createElement('style');
    style.id = 'hitmarker-style';
    style.textContent = `
      @keyframes hitmarkerFade {
        0% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-30px); }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.querySelector('.game-area').appendChild(hitmarker);
  setTimeout(() => hitmarker.remove(), 1000);
}

// Generate maps HTML
function generateMapsHTML() {
  const mapCards = Object.keys(maps).map(mapKey => {
    const map = maps[mapKey];
    const isSelected = selectedMap === mapKey;
    
    return `
      <div class="map-card ${isSelected ? 'selected' : ''}" data-map="${mapKey}">
        <div class="map-preview" style="background: ${map.background};"></div>
        <div class="map-info">
          <h4>${map.name}</h4>
          <p>${map.description}</p>
        </div>
      </div>
    `;
  }).join('');
  
  shopSection.innerHTML = `
    <style>
      .map-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; padding: 10px; }
      .map-card { background: #f9f9f9; border: 2px solid #ddd; padding: 10px; cursor: pointer; transition: all 0.2s; }
      .map-card:hover { background: #e6f3ff; border-color: #4CAF50; }
      .map-card.selected { border-color: #2196F3; background: #e3f2fd; }
      .map-preview { width: 60px; height: 60px; margin: 0 auto 8px; border: 1px solid #999; }
      .map-info h4 { margin: 0 0 5px; color: #333; }
      .map-info p { margin: 0; font-size: 12px; color: #666; }
    </style>
    <h1>Select Map</h1>
    <div class="map-grid">
      ${mapCards}
    </div>
  `;
  
  // Re-attach map card listeners
  document.querySelectorAll(".map-card").forEach(card => {
    card.addEventListener("click", () => {
      selectedMap = card.getAttribute("data-map");
      generateMapsHTML(); // Refresh to show selection
    });
  });
}

// Generate gamemodes HTML
function generateGamemodesHTML() {
  const gamemodes = {
    classic: { name: "Classic", description: "Standard 2-ball battle" },
    survival: { name: "Survival", description: "8 balls vs 1 evil ball" },
    teams: { name: "Teams", description: "Both sides have equal amounts of balls!" },
    modifiers: { name: "Modifiers", description: "Random modifier each round!" },
    corrosion: { name: "Corrosion", description: "There's a chance that one of the balls are rusty!" }
  };
  
  const gamemodeCards = Object.keys(gamemodes).map(key => {
    const mode = gamemodes[key];
    const isSelected = selectedGamemode === key;
    
    return `
      <div class="gamemode-card ${isSelected ? 'selected' : ''}" data-gamemode="${key}">
        <h4>${mode.name}</h4>
        <p>${mode.description}</p>
      </div>
    `;
  }).join('');
  
  shopSection.innerHTML = `
    <style>
      .gamemode-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; padding: 10px; }
      .gamemode-card { background: #f9f9f9; border: 2px solid #ddd; padding: 15px; cursor: pointer; transition: all 0.2s; }
      .gamemode-card:hover { background: #e6f3ff; border-color: #4CAF50; }
      .gamemode-card.selected { border-color: #2196F3; background: #e3f2fd; }
      .gamemode-card h4 { margin: 0 0 8px; color: #333; }
      .gamemode-card p { margin: 0; font-size: 12px; color: #666; }
    </style>
    <h1>Select Gamemode</h1>
    <div class="gamemode-grid">
      ${gamemodeCards}
    </div>
  `;
  
  document.querySelectorAll(".gamemode-card").forEach(card => {
    card.addEventListener("click", () => {
      selectedGamemode = card.getAttribute("data-gamemode");
      generateGamemodesHTML();
    });
  });
}

// Generate settings HTML
function generateSettingsHTML() {
  const modifierOptions = Object.keys(modifiers).map(key => {
    const modifier = modifiers[key];
    const selected = selectedModifier === key ? 'selected' : '';
    return `<option value="${key}" ${selected}>${modifier.name}</option>`;
  }).join('');
  
  shopSection.innerHTML = `
    <style>
      .settings-container { padding: 20px; }
      .settings-section { margin: 20px 0; border: 1px solid #ddd; padding: 15px; }
      .settings-section h3 { margin: 0 0 10px; color: #333; }
      .setting-row { margin: 10px 0; display: flex; align-items: center; gap: 10px; }
      .setting-row label { min-width: 120px; }
      .setting-row input, .setting-row select { width: 120px; padding: 5px; }
      .setting-row input[type="checkbox"] { width: auto; }
      .modifier-description { font-size: 11px; color: #666; margin-left: 130px; margin-top: -5px; }
    </style>
    <h1>Game Settings</h1>
    <div class="settings-container">
      <div class="settings-section">
        <h3>Survival Mode</h3>
        <div class="setting-row">
          <label>Good Balls:</label>
          <input type="number" id="goodBallsInput" value="${survivalSettings.goodBalls}" min="1" max="15">
        </div>
        <div class="setting-row">
          <label>Evil Balls:</label>
          <input type="number" id="evilBallsInput" value="${survivalSettings.evilBalls}" min="1" max="5">
        </div>
      </div>
      
      <div class="settings-section">
        <h3>Classic Mode</h3>
        <div class="setting-row">
          <label>Modifier:</label>
          <select id="modifierSelect" onchange="updateModifierDescription()">
            ${modifierOptions}
          </select>
        </div>
        <div class="modifier-description" id="modifierDescription">${modifiers[selectedModifier].description}</div>
      </div>
      
      <div class="settings-section">
        <h3>General Settings</h3>
        <div class="setting-row">
          <label>Game Speed:</label>
          <select id="gameSpeedSelect">
            <option value="0.5">Slow (0.5x)</option>
            <option value="1" selected>Normal (1x)</option>
            <option value="1.5">Fast (1.5x)</option>
            <option value="2">Very Fast (2x)</option>
          </select>
        </div>
        <div class="setting-row">
          <label>Show Health:</label>
          <input type="checkbox" id="showHealthCheck" checked>
        </div>
        <div class="setting-row">
          <label>Auto Restart:</label>
          <input type="checkbox" id="autoRestartCheck">
        </div>
        <div class="setting-row">
          <label>Show Hitboxes:</label>
          <input type="checkbox" id="showHitboxesCheck">
        </div>
        <div class="setting-row">
          <label>Show Hitmarkers:</label>
          <input type="checkbox" id="showHitmarkersCheck" checked>
        </div>
      </div>
      
      <div class="settings-section">
        <h3>Data Management</h3>
        <div class="setting-row">
          <button class="button" onclick="exportData()">Export Data</button>
          <button class="button" onclick="importData()">Import Data</button>
        </div>
      </div>
      
      <div class="setting-row">
        <button class="button" onclick="applySettings()">Apply Settings</button>
        <button class="button" onclick="resetSettings()">Reset to Default</button>
      </div>
    </div>
  `;
}

function updateModifierDescription() {
  const modifierSelect = document.getElementById('modifierSelect');
  const modifierDescription = document.getElementById('modifierDescription');
  if (modifierSelect && modifierDescription) {
    const selectedKey = modifierSelect.value;
    modifierDescription.textContent = modifiers[selectedKey].description;
  }
}

function applySettings() {
  const goodBalls = parseInt(document.getElementById('goodBallsInput').value);
  const evilBalls = parseInt(document.getElementById('evilBallsInput').value);
  const gameSpeed = parseFloat(document.getElementById('gameSpeedSelect').value);
  const showHealth = document.getElementById('showHealthCheck').checked;
  const autoRestart = document.getElementById('autoRestartCheck').checked;
  const showHitboxes = document.getElementById('showHitboxesCheck').checked;
  const showHitmarkers = document.getElementById('showHitmarkersCheck').checked;
  const modifier = document.getElementById('modifierSelect').value;
  
  if (goodBalls >= 1 && goodBalls <= 15 && evilBalls >= 1 && evilBalls <= 5) {
    survivalSettings.goodBalls = goodBalls;
    survivalSettings.evilBalls = evilBalls;
    gameSettings.speed = gameSpeed;
    gameSettings.showHealth = showHealth;
    gameSettings.autoRestart = autoRestart;
    gameSettings.showHitboxes = showHitboxes;
    gameSettings.showHitmarkers = showHitmarkers;
    selectedModifier = modifier;
    alert('Settings applied!');
  }
}

function resetSettings() {
  survivalSettings = { goodBalls: 8, evilBalls: 1 };
  gameSettings = { speed: 1, showHealth: true, autoRestart: false, showHitboxes: false, showHitmarkers: true };
  selectedModifier = 'normal';
  generateSettingsHTML();
  alert('Settings reset to default!');
}

function exportData() {
  const exportJSON = JSON.stringify(playerData, null, 2);
  const textarea = document.createElement('textarea');
  textarea.value = exportJSON;
  textarea.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80%; height: 60%; z-index: 10000; padding: 10px; font-family: monospace;';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  alert('Data copied to clipboard! Save it somewhere safe.');
  textarea.remove();
}

function importData() {
  const importJSON = prompt('Paste your exported JSON data here:');
  if (importJSON) {
    try {
      const imported = JSON.parse(importJSON);
      playerData = { ...playerData, ...imported };
      savePlayerData();
      alert('Data imported successfully!');
      generateShopHTML();
    } catch (e) {
      alert('Invalid JSON data. Please check and try again.');
    }
  }
}


// Toggle shop/maps/gamemodes open/close
const achievementsButton = document.getElementById("achievementsButton");
if (shopButton && mapButton && gamemodeButton && shopSection && shopInfoSection && settingsButton && achievementsButton) {
  shopButton.addEventListener("click", () => {
    const isOpen = shopSection.style.display === "block";
    shopSection.style.display = isOpen ? "none" : "block";
    shopInfoSection.style.display = "none";
    shopButton.textContent = isOpen ? "Shop" : "Close Shop";
    if (!isOpen) generateShopHTML();
  });
  
  mapButton.addEventListener("click", () => {
    const isOpen = shopSection.style.display === "block";
    shopSection.style.display = isOpen ? "none" : "block";
    shopInfoSection.style.display = "none";
    mapButton.textContent = isOpen ? "Maps" : "Close Maps";
    if (!isOpen) generateMapsHTML();
  });
  
  gamemodeButton.addEventListener("click", () => {
    const isOpen = shopSection.style.display === "block";
    shopSection.style.display = isOpen ? "none" : "block";
    shopInfoSection.style.display = "none";
    gamemodeButton.textContent = isOpen ? "Gamemodes" : "Close Gamemodes";
    if (!isOpen) generateGamemodesHTML();
  });
  
  settingsButton.addEventListener("click", () => {
    const isOpen = shopSection.style.display === "block";
    shopSection.style.display = isOpen ? "none" : "block";
    shopInfoSection.style.display = "none";
    settingsButton.textContent = isOpen ? "Settings" : "Close Settings";
    if (!isOpen) generateSettingsHTML();
  });
  
  achievementsButton.addEventListener("click", () => {
    const isOpen = shopSection.style.display === "block";
    shopSection.style.display = isOpen ? "none" : "block";
    shopInfoSection.style.display = "none";
    achievementsButton.textContent = isOpen ? "Achievements" : "Close Achievements";
    if (!isOpen) showAchievements();
  });
}



// Game state
let gameRunning = false;
let balls = [];
let equippedWeapons = { left: null, right: null };
let equippedSkins = { left: 0, right: 0 };

// Create fighting balls
function createFightingBalls() {
  const gameArea = document.querySelector(".game-area");
  if (!gameArea) return;
  
  // Apply selected map
  const currentMap = maps[selectedMap];
  gameArea.style.backgroundColor = currentMap.background;
  
  // Apply map size
  const mapSize = currentMap.mapSize || 250;
  gameArea.style.width = mapSize + 'px';
  gameArea.style.height = mapSize + 'px';
  
  // Clear existing obstacles
  document.querySelectorAll('.map-obstacle').forEach(obs => obs.remove());
  
  // Add map obstacles
  currentMap.obstacles.forEach(obstacle => {
    const obsElement = document.createElement('div');
    obsElement.className = 'map-obstacle';
    obsElement.style.cssText = `
      position: absolute;
      left: ${obstacle.x}px;
      top: ${obstacle.y}px;
      width: ${obstacle.width}px;
      height: ${obstacle.height}px;
      background: ${obstacle.backgroundColor || '#808080'};
      ${obstacle.text ? `
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${obstacle.fontSize || '10px'};
        color: ${obstacle.color || 'black'};
        font-weight: bold;
      ` : ''}
    `;
    if (obstacle.text) {
      obsElement.textContent = obstacle.text;
    }
    gameArea.appendChild(obsElement);
  });
  
  // Add map decorations (otherDetails)
  if (currentMap.otherDetails) {
    currentMap.otherDetails.forEach(detail => {
      const detailElement = document.createElement('div');
      detailElement.className = 'map-decoration';
      detailElement.style.cssText = `
        position: absolute;
        left: ${detail.x}px;
        top: ${detail.y}px;
        width: ${detail.width}px;
        height: ${detail.height}px;
        background: ${detail.backgroundColor || '#808080'};
        pointer-events: none;
        z-index: 0;
        ${detail.text ? `
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: ${detail.fontSize || '10px'};
          color: ${detail.color || 'black'};
          font-weight: bold;
        ` : ''}
      `;
      if (detail.text) {
        detailElement.textContent = detail.text;
      }
      gameArea.appendChild(detailElement);
    });
  }
  
  const ownedWeapons = playerData.unlockedWeapons;
  balls = [];
  
  if (selectedGamemode === 'classic' || selectedGamemode === 'modifiers') {
    // Classic/Modifiers: Create two balls with equipped weapons or random owned
    let equalWeapon = null;
    if (currentModifier === 'equality') {
      equalWeapon = ownedWeapons[Math.floor(Math.random() * ownedWeapons.length)];
    }
    
    for (let i = 0; i < 2; i++) {
      const side = i === 0 ? 'left' : 'right';
      const weaponKey = equalWeapon || equippedWeapons[side] || ownedWeapons[Math.floor(Math.random() * ownedWeapons.length)];
      const weapon = weapons[weaponKey];
      let skinIndex;
      if (equippedWeapons[side]) {
        skinIndex = equippedSkins[side];
      } else {
        const ownedSkins = playerData.unlockedSkins[weaponKey] || [0];
        skinIndex = ownedSkins[Math.floor(Math.random() * ownedSkins.length)];
      }
      createBall(i, weaponKey, weapon, skinIndex, i === 0 ? 20 : 180, 100, i === 0 ? 3 : -3);
    }
  } else if (selectedGamemode === 'survival') {
    // Survival: good balls + evil balls
    let equalWeapon = null;
    if (currentModifier === 'equality') {
      equalWeapon = ownedWeapons[Math.floor(Math.random() * ownedWeapons.length)];
    }
    
    for (let i = 0; i < survivalSettings.goodBalls; i++) {
      const weaponKey = equalWeapon || ownedWeapons[Math.floor(Math.random() * ownedWeapons.length)];
      const weapon = weapons[weaponKey];
      const ownedSkins = playerData.unlockedSkins[weaponKey] || [0];
      const randomSkin = ownedSkins[Math.floor(Math.random() * ownedSkins.length)];
      const cols = Math.ceil(Math.sqrt(survivalSettings.goodBalls));
      const x = 20 + (i % cols) * (210 / cols);
      const y = 20 + Math.floor(i / cols) * 40;
      createBall(i, weaponKey, weapon, randomSkin, x, y, (Math.random() - 0.5) * 4, false);
    }
    // Evil balls
    for (let i = 0; i < survivalSettings.evilBalls; i++) {
      const evilWeaponKey = equalWeapon || ownedWeapons[Math.floor(Math.random() * ownedWeapons.length)];
      const evilWeapon = weapons[evilWeaponKey];
      const ownedEvilSkins = playerData.unlockedSkins[evilWeaponKey] || [0];
      const evilSkin = ownedEvilSkins[Math.floor(Math.random() * ownedEvilSkins.length)];
      const x = 125 + (i - survivalSettings.evilBalls/2) * 40;
      const y = 125;
      createBall(survivalSettings.goodBalls + i, evilWeaponKey, evilWeapon, evilSkin, x, y, 0, true);
    }
  } else if (selectedGamemode === 'teams') {
    // Teams: 2v2 (or more, equal teams)
    const ballsPerTeam = 2;
    let equalWeapon = null;
    if (currentModifier === 'equality') {
      equalWeapon = ownedWeapons[Math.floor(Math.random() * ownedWeapons.length)];
    }
    
    // Team 1 (left side)
    for (let i = 0; i < ballsPerTeam; i++) {
      const weaponKey = equalWeapon || ownedWeapons[Math.floor(Math.random() * ownedWeapons.length)];
      const weapon = weapons[weaponKey];
      const ownedSkins = playerData.unlockedSkins[weaponKey] || [0];
      const randomSkin = ownedSkins[Math.floor(Math.random() * ownedSkins.length)];
      const x = 30;
      const y = 80 + i * 60;
      const ball = createBall(i, weaponKey, weapon, randomSkin, x, y, 3, false);
      balls[balls.length - 1].team = 'team1';
    }
    
    // Team 2 (right side)
    for (let i = 0; i < ballsPerTeam; i++) {
      const weaponKey = equalWeapon || ownedWeapons[Math.floor(Math.random() * ownedWeapons.length)];
      const weapon = weapons[weaponKey];
      const ownedSkins = playerData.unlockedSkins[weaponKey] || [0];
      const randomSkin = ownedSkins[Math.floor(Math.random() * ownedSkins.length)];
      const x = 190;
      const y = 80 + i * 60;
      const ball = createBall(ballsPerTeam + i, weaponKey, weapon, randomSkin, x, y, -3, false);
      balls[balls.length - 1].team = 'team2';
    }
  } else if (selectedGamemode === 'corrosion') {
    // Corrosion: 2 balls + 1 rust ball
    let equalWeapon = null;
    if (currentModifier === 'equality') {
      equalWeapon = ownedWeapons[Math.floor(Math.random() * ownedWeapons.length)];
    }
    
    // Ball 1 (left)
    const weapon1Key = equalWeapon || ownedWeapons[Math.floor(Math.random() * ownedWeapons.length)];
    const weapon1 = weapons[weapon1Key];
    const skin1 = (playerData.unlockedSkins[weapon1Key] || [0])[Math.floor(Math.random() * (playerData.unlockedSkins[weapon1Key] || [0]).length)];
    createBall(0, weapon1Key, weapon1, skin1, 30, 125, 3, false);
    balls[0].team = 'player';
    
    // Ball 2 (right)
    const weapon2Key = equalWeapon || ownedWeapons[Math.floor(Math.random() * ownedWeapons.length)];
    const weapon2 = weapons[weapon2Key];
    const skin2 = (playerData.unlockedSkins[weapon2Key] || [0])[Math.floor(Math.random() * (playerData.unlockedSkins[weapon2Key] || [0]).length)];
    createBall(1, weapon2Key, weapon2, skin2, 190, 125, -3, false);
    balls[1].team = 'player';
    
    // Rust ball (center) - more powerful and faster
    const rustSkin = (playerData.unlockedSkins['rusted'] || [0])[0];
    createBall(2, 'rusted', weapons.rusted, rustSkin, 125, 125, 4, false);
    balls[2].team = 'rust';
    balls[2].health = weapons.rusted.health;
    balls[2].maxHealth = weapons.rusted.health;
    balls[2].vy = (Math.random() - 0.5) * 5;
    balls[2].element.textContent = Math.ceil(balls[2].health);
    balls[2].element.style.border = '3px solid #b96127';
    balls[2].element.style.boxShadow = '0 0 15px rgba(185, 97, 39, 0.7)';
  }
}

// Helper function to create individual ball
function createBall(index, weaponKey, weapon, skinIndex, x, y, vx, isEvil = false) {
  const gameArea = document.querySelector(".game-area");
  
  const ball = {
    element: document.createElement("div"),
    weaponElement: document.createElement("div"),
    x: x,
    y: y,
    vx: vx,
    vy: (Math.random() - 0.5) * 3,
    health: isEvil ? 1000 : (weaponKey === 'being' ? weapon.health : weaponKey === 'angryBall' ? weapon.health : 100),
    maxHealth: isEvil ? 1000 : (weaponKey === 'being' ? weapon.health : weaponKey === 'angryBall' ? weapon.health : 100),
    weapon: weaponKey,
    side: index,
    damageBonus: 0,
    hitCount: 0,
    spinAngle: 0,
    spinSpeed: weaponKey === 'dagger' ? 8 : weaponKey === 'revolver' ? 2 : weaponKey === 'builder' ? 4 : weaponKey === 'being' ? 1 : weaponKey === 'spear' ? 3 : 5,
    spearLength: weaponKey === 'spear' ? 30 : undefined,
    bullets: [],
    walls: [],
    lastWallTime: 0,
    constructionSigns: [],
    lastSignTime: 0,
    tvs: [],
    lastTvTime: 0,
    speedBoostTimer: 0,
    skinIndex: skinIndex,
    nukeTimer: weaponKey === 'nuke' ? 30 : 0,
    clones: [],
    powerTime: weaponKey === 'being' ? 0 : undefined,
    regenTimer: weaponKey === 'being' ? 0 : undefined,
    isEvil: isEvil,
    team: isEvil ? 'evil' : 'good',
    isSlowed: false,
    originalSpeed: { vx: vx, vy: (Math.random() - 0.5) * 3 },
    angerMeter: weaponKey === 'angryBall' ? 0 : undefined,
    isAngry: weaponKey === 'angryBall' ? false : undefined,
    arrows: weaponKey === 'angryBall' ? [] : undefined,
    bowArrows: weaponKey === 'bow' ? [] : undefined,
    bowArrowCount: weaponKey === 'bow' ? 1 : undefined,
    lastBowShot: weaponKey === 'bow' ? 0 : undefined,
    isCaptured: false,
    potions: weaponKey === 'healer' ? [] : undefined,
    lastPotionTime: weaponKey === 'healer' ? 0 : undefined,
    healTimer: weaponKey === 'healer' ? 0 : undefined,
    isRusted: false,
    rustTimer: 0,
    rustDamageTimer: 0
  };
  
  let ballColor = weapon.color[skinIndex] || weapon.color[0];
  
  // Handle special color generation
  if (ballColor === 'redToPink') {
    // Generate random color from red to pink spectrum
    const hue = Math.floor(Math.random() * 61); // 0-60 degrees (red to pink)
    const saturation = 70 + Math.floor(Math.random() * 31); // 70-100%
    const lightness = 45 + Math.floor(Math.random() * 21); // 45-65%
    ballColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  
  // Special Prism Blaster animation
  if (weaponKey === 'revolver' && skinIndex === 9) {
    ballColor = '#ffffff';
    ball.element.style.animation = 'prismPulse 2s ease-in-out infinite';
    ball.element.style.boxShadow = '0 0 20px rgba(255,255,255,0.8), inset 0 0 20px rgba(255,0,255,0.3)';
  }
  
  // Iron Fist mastery effects
  if (weaponKey === 'unarmed' && skinIndex === 7) {
    ball.element.style.border = '2px solid #c0c0c0';
    ball.element.style.boxShadow = '0 0 15px rgba(192,192,192,0.6), inset 0 0 10px rgba(44,44,44,0.4)';
  }
  
  ball.originalColor = ballColor; // Store original color
  
  ball.element.style.cssText = `
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: ${weaponKey === 'being' ? '15%' : '50%'};
    background: ${ballColor};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    font-size: 12px;
    left: ${ball.x}px;
    top: ${ball.y}px;
    ${weaponKey === 'being' ? 'border: 2px solid #ffd700; box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);' : ''}
    ${isEvil ? 'border: 3px solid #ff0000; box-shadow: 0 0 15px rgba(255, 0, 0, 0.7);' : ''}
  `;
  
  // Blue Screened emoticon (Broadcast skin 5)
  if (weaponKey === 'broadcast' && skinIndex === 5) {
    ball.element.textContent = ':)';
  } else {
    ball.element.textContent = weapon.name.charAt(0);
  }
  
  // Create weapon visual with image (hide for unarmed, dummy, nuke, cloner, being, firingRange, hallucination, bomber, giant)
  if (weaponKey !== 'unarmed' && weaponKey !== 'dummy' && weaponKey !== 'nuke' && weaponKey !== 'cloner' && weaponKey !== 'being' && weaponKey !== 'hallucination' && weaponKey !== 'bomber' && weaponKey !== 'giant' && weaponKey !== 'broadcast' && weaponKey !== 'rusted') {
    const skinName = weapon.skins[skinIndex].toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
    const defaultName = weapon.skins[0].toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
    
    // Try to load specific skin image, fallback to default if it fails
    const testImg = new Image();
    testImg.onload = () => {
      ball.weaponElement.style.backgroundImage = `url('ball/${weaponKey}_${skinName}.png')`;
    };
    testImg.onerror = () => {
      ball.weaponElement.style.backgroundImage = `url('ball/${weaponKey}_${defaultName}.png')`;
    };
    testImg.src = `ball/${weaponKey}_${skinName}.png`;
    
    const weaponWidth = weaponKey === 'spear' ? 30 : 30;
    const weaponHeight = weaponKey === 'spear' ? ball.spearLength || 30 : 30;
    
    ball.weaponElement.style.cssText = `
      position: absolute;
      width: ${weaponWidth}px;
      height: ${weaponHeight}px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      transform-origin: center;
    `;
    gameArea.appendChild(ball.weaponElement);
  }
  
  gameArea.appendChild(ball.element);
  balls.push(ball);
}

// Add CSS animation
const style = document.createElement("style");
style.textContent = `
  .game-area { position: relative; }
  @keyframes bounce {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  @keyframes prismPulse {
    0% { background: linear-gradient(45deg, #ff0000, #ff7f00); }
    16% { background: linear-gradient(45deg, #ff7f00, #ffff00); }
    33% { background: linear-gradient(45deg, #ffff00, #00ff00); }
    50% { background: linear-gradient(45deg, #00ff00, #0000ff); }
    66% { background: linear-gradient(45deg, #0000ff, #4b0082); }
    83% { background: linear-gradient(45deg, #4b0082, #9400d3); }
    100% { background: linear-gradient(45deg, #9400d3, #ff0000); }
  }
`;
document.head.appendChild(style);

// Create bullet function
function createBullet(ball, startX, startY) {
  const bullet = {
    element: document.createElement('div'),
    x: startX,
    y: startY,
    vx: Math.cos(ball.spinAngle * Math.PI / 180) * 4,
    vy: Math.sin(ball.spinAngle * Math.PI / 180) * 4
  };
  
  // Get bullet color based on weapon and skin
  const weaponData = weapons[ball.weapon];
  let bulletColor = weaponData.bulletColor ? weaponData.bulletColor[ball.skinIndex] || weaponData.bulletColor[0] : '#ffff00';
  
  // Special Prism Blaster bullets
  if (ball.weapon === 'revolver' && ball.skinIndex === 9) {
    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    bulletColor = colors[Math.floor(Math.random() * colors.length)];
  }
  
  bullet.element.style.cssText = `
    position: absolute;
    width: 8px;
    height: 8px;
    background: ${bulletColor};
    border-radius: 50%;
    left: ${bullet.x}px;
    top: ${bullet.y}px;
    box-shadow: 0 0 4px ${bulletColor};
  `;
  
  document.querySelector('.game-area').appendChild(bullet.element);
  ball.bullets.push(bullet);
}

// Create wall function
function createWall(ball, startX, startY) {
  const currentTime = Date.now();
  if (currentTime - ball.lastWallTime < 3000) return; // 3 second cooldown
  
  const wall = {
    element: document.createElement('div'),
    x: startX,
    y: startY
  };
  
  // Get wall color based on ball's skin
  const weaponData = weapons[ball.weapon];
  let wallColor = weaponData.wallcolor[ball.skinIndex] || weaponData.wallcolor[0];
  
  // Generate random color for Painter skin
  if (wallColor === 'random') {
    wallColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  
  wall.element.style.cssText = `
    position: absolute;
    width: 24px;
    height: 16px;
    background: ${wallColor};
    left: ${wall.x}px;
    top: ${wall.y}px;
  `;
  
  document.querySelector('.game-area').appendChild(wall.element);
  ball.walls.push(wall);
  ball.lastWallTime = currentTime;
}

// Create construction sign function
function createConstructionSign(ball, startX, startY) {
  const currentTime = Date.now();
  if (currentTime - ball.lastSignTime < 5000) return; // 5 second cooldown
  
  const sign = {
    element: document.createElement('div'),
    x: startX,
    y: startY,
    rotation: 0,
    createdTime: currentTime
  };
  
  // Get construction sign color based on ball's skin
  const weaponData = weapons[ball.weapon];
  let signColor = weaponData.constructionColor[ball.skinIndex] || weaponData.constructionColor[0];
  
  // Generate random color for Painter skin
  if (signColor === 'random') {
    signColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  
  sign.element.style.cssText = `
    position: absolute;
    width: 20px;
    height: 20px;
    background: ${signColor};
    left: ${sign.x}px;
    top: ${sign.y}px;
    transform-origin: center;
  `;
  const skinName = weaponData.skins[ball.skinIndex];
  if (skinName === 'Artful') {
    sign.element.textContent = '♫';
    sign.element.style.border = '2px solid #c2c2c2ff';
  } else if (skinName === 'Intelligence') {
    sign.element.textContent = '💡';
    sign.element.style.border = '2px solid #0c7d9c';
  } else if (skinName === 'Iron Pickaxe') {
    sign.element.textContent = '⛏️';
    sign.element.style.border = '2px solid #343432';
  } else if (skinName === 'Architect') {
    sign.element.textContent = '$:)';
    sign.element.style.border = '2px solid #002082';
  } else {
    sign.element.textContent = '⚠';
    sign.element.style.border = '2px solid #000';
  }
  sign.element.style.fontSize = '12px';
  sign.element.style.textAlign = 'center';
  sign.element.style.lineHeight = '16px';
  
  document.querySelector('.game-area').appendChild(sign.element);
  ball.constructionSigns.push(sign);
  ball.lastSignTime = currentTime;
}

// Create angry arrow function
function createAngryArrow(ball) {
  // Find target ball
  const targetBall = balls.find(b => b !== ball);
  if (!targetBall) return;
  
  const dx = targetBall.x - ball.x;
  const dy = targetBall.y - ball.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  const arrow = {
    element: document.createElement('div'),
    x: ball.x,
    y: ball.y,
    vx: (dx / distance) * 6,
    vy: (dy / distance) * 6,
    returning: false,
    capturedBall: null
  };
  
  arrow.element.style.cssText = `
    position: absolute;
    width: 20px;
    height: 4px;
    background: #8B4513;
    left: ${arrow.x}px;
    top: ${arrow.y}px;
    transform: rotate(${Math.atan2(dy, dx) * 180 / Math.PI}deg);
    transform-origin: center;
  `;
  
  document.querySelector('.game-area').appendChild(arrow.element);
  ball.arrows.push(arrow);
}

// Create healer potion function
function createHealerPotion(ball) {
  const currentTime = Date.now();
  if (currentTime - ball.lastPotionTime < weapons.healer.potionCooldown * 1000) return;
  
  // Find target ball (good or evil)
  const targetBalls = balls.filter(b => b !== ball);
  if (targetBalls.length === 0) return;
  
  const targetBall = targetBalls[Math.floor(Math.random() * targetBalls.length)];
  const isGoodPotion = targetBall.team === 'good';
  
  const dx = targetBall.x - ball.x;
  const dy = targetBall.y - ball.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  const potion = {
    element: document.createElement('div'),
    x: ball.x,
    y: ball.y,
    vx: (dx / distance) * 4,
    vy: (dy / distance) * 4,
    isGood: isGoodPotion,
    target: targetBall
  };
  
  const potionColor = isGoodPotion ? '#48bb78' : '#e74c3c';
  const potionSymbol = isGoodPotion ? '+' : '-';
  
  potion.element.style.cssText = `
    position: absolute;
    width: 12px;
    height: 12px;
    background: ${potionColor};
    border-radius: 50%;
    left: ${potion.x}px;
    top: ${potion.y}px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    color: white;
    font-weight: bold;
  `;
  
  potion.element.textContent = potionSymbol;
  
  document.querySelector('.game-area').appendChild(potion.element);
  ball.potions.push(potion);
  ball.lastPotionTime = currentTime;
}

// Create firing range bullet function
function createFiringRangeBullet(ball, startX, startY) {
  const currentTime = Date.now();
  if (currentTime - (ball.lastFiringTime || 0) < 2000) return; // 2 second cooldown
  
  const bullet = {
    element: document.createElement('div'),
    x: startX,
    y: startY,
    vx: Math.cos(ball.spinAngle * Math.PI / 180) * 8,
    vy: Math.sin(ball.spinAngle * Math.PI / 180) * 8,
    damage: weapons.firingRange.damage + ball.damageBonus,
    owner: ball
  };
  
  // Get bullet color based on skin
  const bulletColor = weapons.firingRange.bulletColor[ball.skinIndex] || weapons.firingRange.bulletColor[0];
  
  bullet.element.style.cssText = `
    position: absolute;
    width: 40px;
    height: 8px;
    background: ${bulletColor};
    border-radius: 4px;
    left: ${bullet.x}px;
    top: ${bullet.y}px;
    transform: rotate(${ball.spinAngle}deg);
    transform-origin: center;
    box-shadow: 0 0 5px ${bulletColor};
  `;
  
  document.querySelector('.game-area').appendChild(bullet.element);
  if (!ball.firingBullets) ball.firingBullets = [];
  ball.firingBullets.push(bullet);
  ball.lastFiringTime = currentTime;
}

// Create TV function
function createTV(ball, startX, startY) {
  const currentTime = Date.now();
  if (currentTime - ball.lastTvTime < 8000) return; // 8 second cooldown
  
  const tv = {
    element: document.createElement('div'),
    x: startX,
    y: startY,
    health: weapons.broadcast.tvHealth,
    maxHealth: weapons.broadcast.tvHealth,
    createdTime: currentTime,
    drainTimer: 0
  };
  
  // Get TV border color based on ball's skin
  const weaponData = weapons[ball.weapon];
  const tvBorderColor = weaponData.tvColor[ball.skinIndex] || weaponData.tvColor[0];
  
  tv.element.style.cssText = `
    position: absolute;
    width: 25px;
    height: 20px;
    background: #333;
    border: 2px solid ${tvBorderColor};
    left: ${tv.x}px;
    top: ${tv.y}px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: ${tvBorderColor};
  `;
  tv.element.textContent = '📺';
  
  document.querySelector('.game-area').appendChild(tv.element);
  ball.tvs.push(tv);
  ball.lastTvTime = currentTime;
}

// TV explosion function
function explodeTV(tv, owner) {
  // Create explosion animation
  const explosion = document.createElement('div');
  explosion.style.cssText = `
    position: absolute;
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, #ff4500, #ff8c00, transparent);
    border-radius: 50%;
    left: ${tv.x - 20}px;
    top: ${tv.y - 20}px;
    animation: explode 0.5s ease-out;
    pointer-events: none;
  `;
  
  // Add explosion animation CSS if not exists
  if (!document.querySelector('#explosion-style')) {
    const style = document.createElement('style');
    style.id = 'explosion-style';
    style.textContent = `
      @keyframes explode {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(2); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.querySelector('.game-area').appendChild(explosion);
  
  // Damage nearby enemies
  balls.forEach(ball => {
    if (ball !== owner) {
      const distance = Math.sqrt((ball.x - tv.x) ** 2 + (ball.y - tv.y) ** 2);
      if (distance < 60) {
        ball.health -= 25;
        ball.element.textContent = Math.max(0, ball.health);
      }
    }
  });
  
  // Remove TV and explosion
  tv.element.remove();
  setTimeout(() => explosion.remove(), 500);
}

// Select skin function
function selectSkin(weaponKey, skinIndex) {
  const isUnlocked = playerData.unlockedSkins[weaponKey].includes(skinIndex);
  const weapon = weapons[weaponKey];
  const cost = weapon.skinCost ? weapon.skinCost[skinIndex] : skinCosts[skinIndex];
  const weaponLevel = playerData.weaponLevels[weaponKey] || 1;
  const isMastery = cost === 'mastery';
  const isAchievementOnly = cost === 'achievement';
  const isLevel10 = cost === 'level10';
  
  // Block mastery skins until level 20
  if (isMastery && weaponLevel < maxWeaponLevel) {
    alert(`Reach Level ${maxWeaponLevel} to unlock the mastery skin!`);
    return;
  }
  
  // Block level 10 skins if not level 10
  if (isLevel10 && weaponLevel < 10) {
    alert(`Reach Level 10 with ${weapon.name} to unlock this skin!`);
    return;
  }
  
  // Auto-unlock level 10 skin if level 10 reached
  if (isLevel10 && weaponLevel >= 10 && !isUnlocked) {
    playerData.unlockedSkins[weaponKey].push(skinIndex);
    savePlayerData();
    alert(`${weapon.skins[skinIndex]} skin unlocked for reaching Level 10!`);
  }
  
  // Block achievement-only skins if not unlocked
  if (isAchievementOnly && !isUnlocked) {
    alert(`This skin can only be unlocked through achievements!`);
    return;
  }
  
  if (!isUnlocked && cost && parseInt(cost) > 0) {
    if (buySkin(weaponKey, skinIndex)) {
      const skinName = weapon.skins[skinIndex];
      alert(`${skinName} skin purchased for ${cost} coins!`);
    } else {
      alert(`Need ${cost} coins to buy this skin.`);
    }
    return;
  }
  
  // Check if skin is unlocked before equipping
  if (!isUnlocked) {
    return;
  }
  
  if (selectedGamemode === 'survival') {
    const skinName = weapons[weaponKey].skins[skinIndex];
    alert(`${weapons[weaponKey].name} (${skinName}) added to survival weapon pool!`);
  } else {
    const side = prompt("Which side? (left/right)")?.toLowerCase();
    if (side === 'left' || side === 'right') {
      equippedWeapons[side] = weaponKey;
      equippedSkins[side] = skinIndex;
      const skinName = weapons[weaponKey].skins[skinIndex];
      alert(`${weapons[weaponKey].name} (${skinName}) equipped to ${side} side!`);
    } else {
      alert("Please enter 'left' or 'right'");
    }
  }
}

// Equip weapon function
function equipWeapon(weaponKey) {
  if (selectedGamemode === 'survival') {
    // In survival mode, just add to weapon pool
    alert(`${weapons[weaponKey].name} added to survival weapon pool!`);
  } else {
    const side = prompt("Which side? (left/right)")?.toLowerCase();
    if (side === 'left' || side === 'right') {
      equippedWeapons[side] = weaponKey;
      equippedSkins[side] = 0; // Default skin
      alert(`${weapons[weaponKey].name} equipped to ${side} side!`);
    } else {
      alert("Please enter 'left' or 'right'");
    }
  }
}

// Generate shop HTML
function generateShopHTML() {
  const allWeapons = Object.keys(weapons).filter(weaponKey => {
    // Hide healer weapon unless in survival gamemode
    if (weaponKey === 'healer' && selectedGamemode !== 'survival') return false;
    return true;
  });
  
  const weaponCards = allWeapons.map(weaponKey => {
    const weapon = weapons[weaponKey];
    const ballColor = weapon.color[0];
    const isSpecial = ['being', 'hallucination'].includes(weaponKey);
    const isUnlocked = playerData.unlockedWeapons.includes(weaponKey);
    const shop = weaponShop[weaponKey];
    const weaponLevel = playerData.weaponLevels[weaponKey] || 1;
    const weaponXP = playerData.weaponXP[weaponKey] || 0;
    const nextLevelXP = weaponLevel * 50;
    
    let statusText = '';
    if (!isUnlocked && shop) {
      const canBuy = playerData.coins >= shop.cost;
      statusText = `<p class="cost ${canBuy ? 'affordable' : 'expensive'}">Cost: ${shop.cost} coins</p>`;
    } else if (isUnlocked) {
      const maxed = weaponLevel >= maxWeaponLevel;
      statusText = maxed ? 
        `<p class="level maxed">Lv${weaponLevel} MAX 🏆</p>` :
        `<p class="level">Lv${weaponLevel} | XP: ${weaponXP}/${xpPerWeaponLevel}</p>`;
    }
    
    return `
      <div class="weapon-card ${isSpecial ? 'special' : 'main'} ${!isUnlocked ? 'locked' : ''}" data-weapon="${weaponKey}">
        <div class="ball-preview" style="background: ${ballColor}; border-radius: ${weaponKey === 'being' ? '15%' : '50%'};"></div>
        <div class="weapon-info">
          <h4>${weapon.name} ${!isUnlocked ? '🔒' : ''}</h4>
          <p class="damage">Damage: ${weapon.damage || weapon.baseDamage || 'Variable'}</p>
          ${statusText}
        </div>
      </div>
    `;
  }).join('');
  
  shopSection.innerHTML = `
    <style>
      .player-stats { background: #e8f4fd; padding: 10px; margin-bottom: 15px; border-radius: 5px; }
      .weapon-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; padding: 10px; }
      .weapon-card { background: #f9f9f9; border: 2px solid #ddd; padding: 10px; cursor: pointer; transition: all 0.2s; }
      .weapon-card:hover { background: #e6f3ff; border-color: #4CAF50; }
      .weapon-card.locked { opacity: 0.6; border-color: #999; }
      .weapon-card.special { border-color: #ff6b6b; }
      .weapon-card.special:hover { border-color: #ff4757; }
      .ball-preview { width: 30px; height: 30px; margin: 0 auto 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 12px; }
      .weapon-info h4 { margin: 0 0 5px; color: #333; }
      .weapon-info .damage { margin: 0; font-size: 12px; color: #666; }
      .weapon-info .cost.affordable { color: #4CAF50; font-weight: bold; }
      .weapon-info .cost.expensive { color: #f44336; }
      .weapon-info .level { color: #2196F3; font-size: 11px; }
    </style>
    <h1>Weapon Shop</h1>
    <div class="player-stats">
      <p><strong>Player Level:</strong> ${playerData.playerLevel} | <strong>Coins:</strong> ${playerData.coins} | <strong>Total XP:</strong> ${playerData.totalXP}</p>
    </div>
    <div class="weapon-grid">
      ${weaponCards}
    </div>
  `;
  
  // Re-attach weapon card listeners
  document.querySelectorAll(".weapon-card").forEach(card => {
    card.addEventListener("click", () => {
      const weaponKey = card.getAttribute("data-weapon");
      const isUnlocked = playerData.unlockedWeapons.includes(weaponKey);
      
      if (!isUnlocked && weaponShop[weaponKey] && weaponShop[weaponKey].cost !== 'achievement' && playerData.coins >= weaponShop[weaponKey].cost) {
        if (buyWeapon(weaponKey)) {
          alert(`${weapons[weaponKey].name} purchased!`);
          generateShopHTML();
          showWeaponInfo(weaponKey);
        }
      } else {
        showWeaponInfo(weaponKey);
      }
    });
  });
}

// Initialize fighting balls on page load
document.addEventListener("DOMContentLoaded", () => {
  loadPlayerData();
  generateShopHTML();
  settingsButton.style.display = 'inline-flex'; // Always show settings
  achievementsButton.style.display = 'inline-flex'; // Always show achievements
  document.getElementById('startGame').addEventListener('click', () => {
    createFightingBalls();
    startGame();
  });
});

let gameStartTime = 0;

function updateGameStatus() {
  const statusDiv = document.getElementById('gameStatus');
  if (selectedGamemode === 'survival') {
    if (!statusDiv) return;
    const evilBall = balls.find(ball => ball.isEvil);
    const timeLeft = Math.max(0, 300 - Math.floor((Date.now() - gameStartTime) / 1000));
    if (!evilBall) return;
  
    statusDiv.style.display = 'block';
    statusDiv.innerHTML = `
    <p>Evil Ball Health: ${Math.ceil(evilBall.health)}</p>
    <p>Good Balls Remaining: ${balls.filter(ball => !ball.isEvil).length}</p>
    <p>Good: ${balls.filter(ball => !ball.isEvil).map(ball => `${weapons[ball.weapon].name} (${weapons[ball.weapon].skins[ball.skinIndex]})`).join(', ')}</p>
    <p>Evil: ${balls.filter(ball => ball.isEvil).map(ball => `${weapons[ball.weapon].name} (${weapons[ball.weapon].skins[ball.skinIndex]})`).join(', ')}</p>
    <p>${timeLeft} seconds left</p>
  `;
  
  if (timeLeft <= 0) {
    alert('Good Balls Win! Time is up!');
    gameRunning = false;
    statusDiv.style.display = 'none';
  }
  } else if (selectedGamemode === 'teams') {
    if (!statusDiv || balls.length < 2) return;
    
    statusDiv.style.display = 'block';
    const team1Balls = balls.filter(b => b.team === 'team1');
    const team2Balls = balls.filter(b => b.team === 'team2');
    
    statusDiv.innerHTML = `
      <p><strong>Team 1:</strong> ${team1Balls.map(b => `${weapons[b.weapon].name} (${Math.ceil(b.health)} HP)`).join(', ')}</p>
      <p><strong>Team 2:</strong> ${team2Balls.map(b => `${weapons[b.weapon].name} (${Math.ceil(b.health)} HP)`).join(', ')}</p>
      <p>Map: ${maps[selectedMap].name}</p>
    `;
  } else if (selectedGamemode === 'corrosion') {
    if (!statusDiv || balls.length < 2) return;
    
    statusDiv.style.display = 'block';
    const playerBalls = balls.filter(b => b.team === 'player');
    const rustBall = balls.find(b => b.team === 'rust');
    
    statusDiv.innerHTML = `
      <p><strong>Players:</strong> ${playerBalls.map(b => `${weapons[b.weapon].name} (${Math.ceil(b.health)} HP)`).join(', ')}</p>
      ${rustBall ? `<p style="color: #b96127; font-weight: bold;">Rust Ball: ${Math.ceil(rustBall.health)} HP</p>` : ''}
      <p>Map: ${maps[selectedMap].name}</p>
    `;
  } else if (selectedGamemode === 'classic' || selectedGamemode === 'modifiers') {
    if (!statusDiv || balls.length < 2) return;
    
    function getAbilityStatus(ball) {
      const weapon = weapons[ball.weapon];
      const baseDamage = weapon.damage || weapon.baseDamage || 0;
      const currentDamage = baseDamage + ball.damageBonus;
      
      switch (ball.weapon) {
        case 'sword':
          return `Damage: ${currentDamage} (increases every hit)`;
        case 'dagger':
          return `Spin Speed: ${ball.spinSpeed} (increases every hit)`;
        case 'spear':
          return `Damage: ${currentDamage} (increases every hit)`;
        case 'revolver':
          return `Damage: ${Math.floor(currentDamage * 1.5)} (triple shot)`;
        case 'unarmed':
          const speed = Math.sqrt(ball.vx ** 2 + ball.vy ** 2);
          return `Speed Damage: ${Math.floor(speed * 3) + 5} (speed-based)`;
        case 'dummy':
          return ``;
        case 'builder':
          return `Damage: ${currentDamage} (places walls)`;
        case 'nuke':
          return `Timer: ${Math.ceil(ball.nukeTimer)}s (explodes when 0)`;
        case 'cloner':
          return `Clones: ${ball.clones.length} (creates copies)`;
        case 'being':
          const powerLevel = Math.min(ball.powerTime / 10, 1);
          const isActivated = ball.health <= weapon.healthForActivate;
          return `Power: ${Math.floor(powerLevel * 100)}% ${isActivated ? '(ACTIVATED)' : ''}`;
        case 'giant':
          const size = parseInt(ball.element.style.width) || 30;
          return `Size: ${size}px (grows every hit)`;
        case 'offenderStaff':
          return `Damage: ${currentDamage} (heals self)`;
        case 'firingRange':
          return `Damage: ${currentDamage} (long range)`;
        case 'bomber':
          return `Damage: ${currentDamage} (explosive bombs)`;
        case 'hallucination':
          return `Damage: ${currentDamage} (confuses opponent)`;
        case 'broadcast':
          const baseDamage = weapons.broadcast.damage + ball.damageBonus;
          const boostDamage = ball.speedBoostTimer > 0 ? weapons.broadcast.damageBoost : 0;
          const totalDamage = baseDamage + boostDamage;
          const boostStatus = ball.speedBoostTimer > 0 ? ` BOOSTED (${Math.ceil(ball.speedBoostTimer)}s)` : '';
          return `Damage: ${totalDamage} | TVs: ${ball.tvs.length}${boostStatus}`;
        case 'angryBall':
          const angerPercent = Math.floor((ball.angerMeter / weapons.angryBall.angerThreshold) * 100);
          const angerStatus = ball.isAngry ? ' ANGRY!' : '';
          return `Anger: ${angerPercent}%${angerStatus} | Arrows: ${ball.arrows ? ball.arrows.length : 0}`;
        default:
          return `Damage: ${currentDamage}`;
      }
    }
    
    statusDiv.style.display = 'block';
    function getMapEventStatus() {
      const currentMap = maps[selectedMap];
      if (!currentMap.event) return '';
      
      if (selectedMap === 'edgeCity') {
        if (funnyBallSpawned) return ' | Funny Ball Active!';
        const timeLeft = Math.max(0, currentMap.event.timeUntilFunny - funnyBallTimer);
        return ` | Funny Ball in: ${Math.ceil(timeLeft)}s`;
      }
      
      if (selectedMap === 'dam') {
        const floodInterval = currentMap.event.floodInterval;
        const floodDuration = currentMap.event.floodDuration;
        const cycleTime = damFloodTimer % (floodInterval + floodDuration);
        
        if (damIsFlooded) {
          const drainTime = Math.max(0, (floodInterval + floodDuration) - cycleTime);
          return ` | Water drains in: ${Math.ceil(drainTime)}s`;
        } else {
          const floodTime = Math.max(0, floodInterval - cycleTime);
          return ` | Flood in: ${Math.ceil(floodTime)}s`;
        }
      }
      
      return '';
    }
    
    function getModifierStatus() {
      if (selectedGamemode === 'modifiers') {
        return `<p><strong>Modifier:</strong> ${modifiers[currentModifier].name} - ${modifiers[currentModifier].description}</p>`;
      }
      return '';
    }
    
    statusDiv.innerHTML = `
      <p>Left: ${weapons[balls[0].weapon].name} (${weapons[balls[0].weapon].skins[balls[0].skinIndex]}) - ${getAbilityStatus(balls[0])}</p>
      <p>Right: ${weapons[balls[1].weapon].name} (${weapons[balls[1].weapon].skins[balls[1].skinIndex]}) - ${getAbilityStatus(balls[1])}</p>
      <p>Map: ${maps[selectedMap].name}${getMapEventStatus()}</p>
      ${getModifierStatus()}
    `;
    
    // Add anger meter display if angry ball exists
    const angryBall = balls.find(ball => ball.weapon === 'angryBall');
    if (angryBall) {
      const ballColor = weapons.angryBall.color[angryBall.skinIndex] || weapons.angryBall.color[0];
      const emoji = angryBall.isAngry ? '>:(' : ':)';
      const angerMeter = Math.floor(angryBall.angerMeter);
      
      statusDiv.innerHTML += `<p style="color: ${ballColor}; font-weight: bold;">${emoji} ${angerMeter}/100</p>`;
    }
  }
}

// Start the game
function startGame() {
  gameRunning = true;
  roundStartTime = Date.now();
  const startGameBtn = document.getElementById('startGame')
  const settingsButton = document.getElementById('settingsButton')
  const buttonContainer = document.getElementById('buttonContainer');
  const vsDisplay = document.getElementById('vsDisplay');
  
  // Hide all buttons and show VS display
  buttonContainer.style.display = 'none';
  vsDisplay.style.display = 'block';
  
  // Hide shop sections
  shopSection.style.display = 'none';
  shopInfoSection.style.display = 'none';
  
  // Select random modifier for Modifiers gamemode
  if (selectedGamemode === 'modifiers') {
    const modifierKeys = Object.keys(modifiers).filter(key => key !== 'normal');
    currentModifier = modifierKeys[Math.floor(Math.random() * modifierKeys.length)];
    console.log(`🎲 Random modifier selected: ${modifiers[currentModifier].name}`);
  } else {
    currentModifier = selectedModifier;
  }
  
  // Update VS display
  updateVSDisplay();
  
  // Initialize game status
  if (selectedGamemode === 'survival') {
    gameStartTime = Date.now();
  }
  updateGameStatus();
  
  gameLoop();
}

// Main game loop
function gameLoop() {
  if (!gameRunning) return;
  
  // Update map events
  updateFunnyBallTimer(0.016);
  updateDamFlooding(0.016);
  drawDamWater();
  
  // Update modifier-specific events
  if (currentModifier === 'funnyBall' && !funnyBallSpawned) {
    funnyBallTimer += 0.016;
    if (funnyBallTimer >= 5) { // Spawn after 5 seconds in modifier mode
      createFunnyBall();
    }
  }
  
  if (currentModifier === 'banwave' && !banwaveBallSpawned) {
    banwaveTimer += 0.016;
    if (banwaveTimer >= 8) { // Spawn after 8 seconds
      createBanwaveBall();
    }
  }
  
  if (currentModifier === 'damFlood') {
    damFloodTimer += 0.016;
    const floodInterval = 10;
    const floodDuration = 20;
    const cycleTime = damFloodTimer % (floodInterval + floodDuration);
    
    if (cycleTime >= floodInterval && !damIsFlooded) {
      damIsFlooded = true;
      console.log('💧 Modifier flood activated!');
    } else if (cycleTime < floodInterval && damIsFlooded) {
      damIsFlooded = false;
      damWaterLevel = 0;
      console.log('🌊 Modifier flood draining!');
    }
    
    if (damIsFlooded) {
      damWaterLevel = Math.min(1, (cycleTime - floodInterval) / 2);
    }
    
    // Draw modifier water on any map
    if (damIsFlooded && damWaterLevel > 0) {
      const gameArea = document.querySelector('.game-area');
      let waterElement = document.getElementById('modifierWater');
      
      if (!waterElement) {
        waterElement = document.createElement('div');
        waterElement.id = 'modifierWater';
        waterElement.style.cssText = `
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(180deg, #4a4a2add, #4a4a2aff);
          border-top: 2px solid #3a3a1a;
          z-index: 1;
          animation: waterWave 2s ease-in-out infinite;
        `;
        gameArea.appendChild(waterElement);
      }
      
      const waterHeight = 180 * damWaterLevel;
      waterElement.style.height = waterHeight + 'px';
    } else {
      const waterElement = document.getElementById('modifierWater');
      if (waterElement) waterElement.remove();
    }
  }
  
  // Update banwave ball if it exists
  if (banwaveBall && banwaveBallSpawned) {
    banwaveBall.x += banwaveBall.vx;
    banwaveBall.y += banwaveBall.vy;
    
    // Bounce off walls
    const currentMap = maps[selectedMap];
    const mapSize = currentMap.mapSize || 250;
    const boundary = mapSize - 30;
    if (banwaveBall.x <= 0 || banwaveBall.x >= boundary) banwaveBall.vx *= -1;
    if (banwaveBall.y <= 0 || banwaveBall.y >= boundary) banwaveBall.vy *= -1;
    
    // Keep in bounds
    banwaveBall.x = Math.max(0, Math.min(boundary, banwaveBall.x));
    banwaveBall.y = Math.max(0, Math.min(boundary, banwaveBall.y));
    
    // Update position
    banwaveBall.element.style.left = banwaveBall.x + 'px';
    banwaveBall.element.style.top = banwaveBall.y + 'px';
    
    // Check collisions with other balls
    balls.forEach(ball => {
      const distance = Math.sqrt((banwaveBall.x - ball.x) ** 2 + (banwaveBall.y - ball.y) ** 2);
      if (distance < 30) {
        // Apply rust damage and effect
        const damage = weapons.rusted.damage;
        ball.health -= damage;
        ball.element.textContent = Math.max(0, ball.health);
        
        // Apply rust effect
        ball.isRusted = true;
        ball.rustTimer = weapons.rusted.rustDuration;
        ball.originalSpeed = { vx: ball.vx, vy: ball.vy };
        ball.vx *= (1 - weapons.rusted.speedReduction);
        ball.vy *= (1 - weapons.rusted.speedReduction);
        ball.element.style.filter = 'sepia(100%) saturate(200%) hue-rotate(15deg)';
        
        // Bounce away
        const dx = ball.x - banwaveBall.x;
        const dy = ball.y - banwaveBall.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 0) {
          ball.vx += (dx / dist) * 3;
          ball.vy += (dy / dist) * 3;
          banwaveBall.vx -= (dx / dist) * 2;
          banwaveBall.vy -= (dy / dist) * 2;
        }
        
        // Check for death
        if (ball.health <= 0) {
          const index = balls.indexOf(ball);
          if (index > -1) {
            balls.splice(index, 1);
            ball.element.remove();
            if (ball.weaponElement) ball.weaponElement.remove();
          }
          
          // Check if game should end
          if (balls.length === 1) {
            gameRunning = false;
            setTimeout(() => {
              const roundDuration = Math.floor((Date.now() - roundStartTime) / 1000);
              const xpAmount = roundDuration;
              const coinAmount = roundDuration * 2;
              alert(`${weapons[balls[0].weapon].name} survived the banwave!\n\nRewards: +${xpAmount} XP, +${coinAmount} Coins (${roundDuration}s)`);
              checkBanwaveWin();
              cleanupGame();
            }, 500);
          }
        }
      }
    });
  }
  
  // Update funny ball if it exists (from map event or modifier)
  if (funnyBall && funnyBallSpawned) {
    funnyBall.x += funnyBall.vx;
    funnyBall.y += funnyBall.vy;
    
    // Bounce off walls
    const currentMap = maps[selectedMap];
    const mapSize = currentMap.mapSize || 250;
    const boundary = mapSize - 30;
    if (funnyBall.x <= 0 || funnyBall.x >= boundary) funnyBall.vx *= -1;
    if (funnyBall.y <= 0 || funnyBall.y >= boundary) funnyBall.vy *= -1;
    
    // Keep in bounds
    funnyBall.x = Math.max(0, Math.min(boundary, funnyBall.x));
    funnyBall.y = Math.max(0, Math.min(boundary, funnyBall.y));
    
    // Update position
    funnyBall.element.style.left = funnyBall.x + 'px';
    funnyBall.element.style.top = funnyBall.y + 'px';
    
    // Check collisions with other balls
    balls.forEach(ball => {
      const distance = Math.sqrt((funnyBall.x - ball.x) ** 2 + (funnyBall.y - ball.y) ** 2);
      if (distance < 30) {
        // Funny ball deals random damage between 5-15
        const damage = Math.floor(Math.random() * 11) + 5;
        ball.health -= damage;
        ball.element.textContent = Math.max(0, ball.health);
        
        // Bounce away
        const dx = ball.x - funnyBall.x;
        const dy = ball.y - funnyBall.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 0) {
          ball.vx += (dx / dist) * 3;
          ball.vy += (dy / dist) * 3;
          funnyBall.vx -= (dx / dist) * 2;
          funnyBall.vy -= (dy / dist) * 2;
        }
        
        // Check for death
        if (ball.health <= 0) {
          if (selectedGamemode === 'survival') {
            const index = balls.indexOf(ball);
            if (index > -1) {
              balls.splice(index, 1);
              ball.element.remove();
              if (ball.weaponElement) ball.weaponElement.remove();
            }
          } else {
            gameRunning = false;
            setTimeout(() => {
              const roundDuration = Math.floor((Date.now() - roundStartTime) / 1000);
              const xpAmount = roundDuration;
              const coinAmount = roundDuration * 2;
              alert(`${weapons[ball.weapon].name} (${weapons[ball.weapon].skins[ball.skinIndex]}) was defeated by the Funny Ball! :D\n\nRewards: +${xpAmount} XP, +${coinAmount} Coins (${roundDuration}s)`);
              cleanupGame();
            }, 500);
          }
        }
      }
    });
  }
  
  // Update ball positions and weapons
  balls.forEach(ball => {
    // Update angry ball mechanics
    if (ball.weapon === 'angryBall') {
      // Anger increases from opponent actions (handled in increaseAngerFromAction function)
      // No longer increases from movement alone
      
      // Check if angry
      ball.isAngry = ball.angerMeter >= weapons.angryBall.angerThreshold;
      
      // Visual anger effect
      if (ball.isAngry) {
        ball.element.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.8)';
      } else {
        ball.element.style.boxShadow = '';
      }
      
      // Shoot arrow every 3 seconds if no arrow exists
      if (!ball.lastArrowTime) ball.lastArrowTime = 0;
      ball.lastArrowTime += 0.016;
      
      if (ball.lastArrowTime >= 3 && ball.arrows.length === 0) {
        createAngryArrow(ball);
        ball.lastArrowTime = 0;
      }
      
      // Update bow arrows
      if (ball.weapon === 'bow') {
        ball.lastBowShot += 0.016;
        
        if (ball.lastBowShot >= weapons.bow.shootInterval) {
          for (let i = 0; i < ball.bowArrowCount; i++) {
            const targetBall = balls.find(b => b !== ball);
            if (targetBall) {
              const dx = targetBall.x - ball.x;
              const dy = targetBall.y - ball.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              const arrow = {
                element: document.createElement('div'),
                x: ball.x,
                y: ball.y,
                vx: (dx / distance) * 5,
                vy: (dy / distance) * 5
              };
              
              const arrowColor = weapons.bow.arrowColor[ball.skinIndex] || weapons.bow.arrowColor[0];
              arrow.element.style.cssText = `
                position: absolute;
                width: 15px;
                height: 3px;
                background: ${arrowColor};
                left: ${arrow.x}px;
                top: ${arrow.y}px;
                transform: rotate(${Math.atan2(dy, dx) * 180 / Math.PI}deg);
                transform-origin: center;
                pointer-events: none;
              `;
              
              document.querySelector('.game-area').appendChild(arrow.element);
              ball.bowArrows.push(arrow);
            }
          }
          ball.lastBowShot = 0;
        }
        
        ball.bowArrows.forEach((arrow, index) => {
          arrow.x += arrow.vx;
          arrow.y += arrow.vy;
          arrow.element.style.left = arrow.x + 'px';
          arrow.element.style.top = arrow.y + 'px';
          
          balls.forEach(targetBall => {
            if (targetBall !== ball) {
              const distance = Math.sqrt((arrow.x - targetBall.x) ** 2 + (arrow.y - targetBall.y) ** 2);
              if (distance < 20) {
                targetBall.health -= weapons.bow.damage;
                targetBall.element.textContent = Math.max(0, targetBall.health);
                
                if (gameSettings.showHitmarkers) {
                  showHitmarker(targetBall.x, targetBall.y, weapons.bow.damage);
                }
                
                arrow.element.remove();
                ball.bowArrows.splice(index, 1);
                
                if (targetBall.health <= 0) {
                  if (selectedGamemode === 'survival') {
                    const ballIndex = balls.indexOf(targetBall);
                    if (ballIndex > -1) {
                      balls.splice(ballIndex, 1);
                      targetBall.element.remove();
                      if (targetBall.weaponElement) targetBall.weaponElement.remove();
                    }
                  } else {
                    gameRunning = false;
                    setTimeout(() => {
                      const roundDuration = Math.floor((Date.now() - roundStartTime) / 1000);
                      const xpAmount = roundDuration;
                      const coinAmount = roundDuration * 2;
                      alert(`${weapons[ball.weapon].name} (${weapons[ball.weapon].skins[ball.skinIndex]}) shot down ${weapons[targetBall.weapon].name} (${weapons[targetBall.weapon].skins[targetBall.skinIndex]})!\n\nRewards: +${xpAmount} XP, +${coinAmount} Coins (${roundDuration}s)`);
                      checkBattleWin();
                      cleanupGame();
                    }, 500);
                  }
                }
              }
            }
          });
          
          if (arrow.x < -50 || arrow.x > 300 || arrow.y < -50 || arrow.y > 300) {
            arrow.element.remove();
            ball.bowArrows.splice(index, 1);
          }
        });
      }
      
      // Update arrows
      if (ball.arrows) {
        ball.arrows.forEach((arrow, index) => {
          arrow.x += arrow.vx;
          arrow.y += arrow.vy;
          arrow.element.style.left = arrow.x + 'px';
          arrow.element.style.top = arrow.y + 'px';
          
          // Check collision with other balls
          if (!arrow.returning) {
            balls.forEach(targetBall => {
              if (targetBall !== ball) {
                const distance = Math.sqrt((arrow.x - targetBall.x) ** 2 + (arrow.y - targetBall.y) ** 2);
                if (distance < 25) {
                  // Deal damage and heal both balls
                  let damage = weapons.angryBall.damage * weapons.angryBall.arrowDamage;
                  if (ball.isAngry) damage *= weapons.angryBall.angerBoost;
                  
                  targetBall.health -= damage;
                  ball.health = Math.min(ball.maxHealth, ball.health + weapons.angryBall.arrowHeal);
                  targetBall.health = Math.min(targetBall.maxHealth, targetBall.health + weapons.angryBall.arrowHeal);
                  
                  // Flash green on heal
                  ball.element.style.background = '#00ff00';
                  targetBall.element.style.background = '#00ff00';
                  setTimeout(() => { ball.element.style.background = ball.originalColor; targetBall.element.style.background = targetBall.originalColor; }, 200);
                  
                  // Update display
                  targetBall.element.textContent = Math.max(0, targetBall.health);
                  ball.element.textContent = Math.ceil(ball.health);
                  
                  // Start returning to user
                  arrow.returning = true;
                  arrow.capturedBall = targetBall;
                  targetBall.isCaptured = true;
                  arrow.element.style.background = '#FFD700'; // Gold color when returning
                  
                  // Visual effect for captured ball
                  targetBall.element.style.border = '2px solid #FFD700';
                  targetBall.element.style.boxShadow = '0 0 10px rgba(255, 215, 0, 0.8)';
                }
              }
            });
          } else {
            // Arrow is returning - move toward user ball
            const dx = ball.x - arrow.x;
            const dy = ball.y - arrow.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 20) {
              // Arrow reached user - remove it and release captured ball
              arrow.element.remove();
              if (arrow.capturedBall) {
                arrow.capturedBall.isCaptured = false;
                // Remove captured visual effects
                arrow.capturedBall.element.style.border = '';
                arrow.capturedBall.element.style.boxShadow = '';
              }
              ball.arrows.splice(index, 1);
            } else {
              // Update arrow direction to user
              arrow.vx = (dx / distance) * 8;
              arrow.vy = (dy / distance) * 8;
              
              // Pull captured ball along with arrow
              if (arrow.capturedBall && arrow.capturedBall.isCaptured) {
                const pullStrength = 0.3;
                arrow.capturedBall.vx += arrow.vx * pullStrength;
                arrow.capturedBall.vy += arrow.vy * pullStrength;
                
                // Keep captured ball near arrow
                const ballToArrowDx = arrow.x - arrow.capturedBall.x;
                const ballToArrowDy = arrow.y - arrow.capturedBall.y;
                const ballToArrowDist = Math.sqrt(ballToArrowDx * ballToArrowDx + ballToArrowDy * ballToArrowDy);
                
                if (ballToArrowDist > 30) {
                  arrow.capturedBall.x += (ballToArrowDx / ballToArrowDist) * 2;
                  arrow.capturedBall.y += (ballToArrowDy / ballToArrowDist) * 2;
                }
              }
            }
          }
          
          // Remove arrows that go off screen
          if (arrow.x < -50 || arrow.x > 300 || arrow.y < -50 || arrow.y > 300) {
            arrow.element.remove();
            ball.arrows.splice(index, 1);
          }
        });
      }
    }
    
    // Update rust effects
    if (ball.isRusted && ball.rustTimer > 0) {
      ball.rustTimer -= 0.016;
      ball.rustDamageTimer += 0.016;
      
      if (ball.rustDamageTimer >= 1) {
        ball.health -= weapons.rusted.rustDamage;
        ball.element.textContent = Math.max(0, ball.health);
        ball.rustDamageTimer = 0;
        ball.element.style.filter = 'sepia(100%) saturate(200%) hue-rotate(15deg)';
      }
      
      if (ball.rustTimer <= 0) {
        ball.isRusted = false;
        ball.vx = ball.originalSpeed.vx;
        ball.vy = ball.originalSpeed.vy;
        ball.element.style.filter = '';
      }
    }
    
    // Update healer mechanics
    if (ball.weapon === 'healer' && selectedGamemode === 'survival') {
      ball.healTimer += 0.016;
      
      // Passive healing every 2 seconds
      if (ball.healTimer >= 2) {
        balls.forEach(otherBall => {
          if (otherBall.team === 'good') {
            const distance = Math.sqrt((ball.x - otherBall.x) ** 2 + (ball.y - otherBall.y) ** 2);
            if (distance < weapons.healer.healRadius) {
              otherBall.health = Math.min(otherBall.maxHealth, otherBall.health + 15);
              otherBall.element.textContent = Math.ceil(otherBall.health);
            }
          }
        });
        ball.healTimer = 0;
      }
      
      // Throw potions every 4 seconds
      if (!ball.lastPotionCheck) ball.lastPotionCheck = 0;
      ball.lastPotionCheck += 0.016;
      
      if (ball.lastPotionCheck >= 4 && Math.random() < 0.3) {
        createHealerPotion(ball);
        ball.lastPotionCheck = 0;
      }
      
      // Update potions
      if (ball.potions) {
        ball.potions.forEach((potion, index) => {
          potion.x += potion.vx;
          potion.y += potion.vy;
          potion.element.style.left = potion.x + 'px';
          potion.element.style.top = potion.y + 'px';
          
          // Check collision with target ball
          const distance = Math.sqrt((potion.x - potion.target.x) ** 2 + (potion.y - potion.target.y) ** 2);
          if (distance < 20) {
            if (potion.isGood && potion.target.team === 'good') {
              // Good potion heals good ball
              potion.target.health = Math.min(potion.target.maxHealth, potion.target.health + weapons.healer.healHealth);
              potion.target.element.textContent = Math.ceil(potion.target.health);
              // Flash green on heal
              potion.target.element.style.background = '#00ff00';
              setTimeout(() => { potion.target.element.style.background = potion.target.originalColor; }, 200);
            } else if (!potion.isGood && potion.target.team === 'evil') {
              // Bad potion slows evil ball
              potion.target.vx *= (1 - weapons.healer.slowness);
              potion.target.vy *= (1 - weapons.healer.slowness);
              potion.target.isSlowed = true;
              setTimeout(() => {
                if (potion.target.isSlowed) {
                  potion.target.vx /= (1 - weapons.healer.slowness);
                  potion.target.vy /= (1 - weapons.healer.slowness);
                  potion.target.isSlowed = false;
                }
              }, weapons.healer.slowDuration * 1000);
            }
            
            // Remove potion
            potion.element.remove();
            ball.potions.splice(index, 1);
          }
          
          // Remove potions that go off screen
          if (potion.x < -20 || potion.x > 270 || potion.y < -20 || potion.y > 270) {
            potion.element.remove();
            ball.potions.splice(index, 1);
          }
        });
      }
    }
    
    ball.x += ball.vx;
    ball.y += ball.vy;
    
    // Bounce off walls
    const currentMap = maps[selectedMap];
    const mapSize = currentMap.mapSize || 250;
    const boundary = mapSize - 30;
    if (ball.x <= 0 || ball.x >= boundary) ball.vx *= -1;
    if (ball.y <= 0 || ball.y >= boundary) ball.vy *= -1;
    
    // Check collision with map obstacles
    currentMap.obstacles.forEach(obstacle => {
      if (ball.x + 15 > obstacle.x && ball.x - 15 < obstacle.x + obstacle.width &&
          ball.y + 15 > obstacle.y && ball.y - 15 < obstacle.y + obstacle.height) {
        // Simple bounce off obstacle
        const centerX = obstacle.x + obstacle.width / 2;
        const centerY = obstacle.y + obstacle.height / 2;
        if (Math.abs(ball.x - centerX) > Math.abs(ball.y - centerY)) {
          ball.vx *= -1;
        } else {
          ball.vy *= -1;
        }
      }
    });
    
    // Keep in bounds
    ball.x = Math.max(0, Math.min(boundary, ball.x));
    ball.y = Math.max(0, Math.min(boundary, ball.y));
    
    // Check water damage on Dam map or Dam Flood modifier
    const isInWater = (selectedMap === 'dam' && damIsFlooded && damWaterLevel > 0) || 
                     (currentModifier === 'damFlood' && damIsFlooded && damWaterLevel > 0);
    
    if (isInWater) {
      const waterHeight = 180 * damWaterLevel;
      const waterTop = 250 - waterHeight;
      
      // Check if ball is in water
      const inWaterArea = selectedMap === 'dam' ? 
        (ball.x >= 25 && ball.x <= 225 && ball.y >= waterTop) : 
        (ball.y >= waterTop);
      
      if (inWaterArea) {
        if (!ball.inWater) {
          ball.inWater = true;
          ball.waterDamageTimer = 0;
        }
        
        ball.waterDamageTimer += 0.016;
        
        // Deal 1 damage per second
        if (ball.waterDamageTimer >= 1) {
          ball.health -= maps.dam.event.waterDamage;
          ball.element.textContent = Math.max(0, ball.health);
          ball.waterDamageTimer = 0;
          
          // Visual effect for water damage
          ball.element.style.filter = 'hue-rotate(120deg)';
          setTimeout(() => {
            ball.element.style.filter = '';
          }, 200);
          
          // Check for death from water damage
          if (ball.health <= 0) {
            if (selectedGamemode === 'survival') {
              const index = balls.indexOf(ball);
              if (index > -1) {
                balls.splice(index, 1);
                ball.element.remove();
                if (ball.weaponElement) ball.weaponElement.remove();
              }
            } else {
              gameRunning = false;
              setTimeout(() => {
                const roundDuration = Math.floor((Date.now() - roundStartTime) / 1000);
                const xpAmount = roundDuration;
                const coinAmount = roundDuration * 2;
                const deathMessage = currentModifier === 'damFlood' ? 
                  `${weapons[ball.weapon].name} (${weapons[ball.weapon].skins[ball.skinIndex]}) drowned in the modifier flood!` :
                  `${weapons[ball.weapon].name} (${weapons[ball.weapon].skins[ball.skinIndex]}) drowned in dirty water!`;
                alert(`${deathMessage}\n\nRewards: +${xpAmount} XP, +${coinAmount} Coins (${roundDuration}s)`);
                cleanupGame();
              }, 500);
            }
          }
        }
      } else {
        ball.inWater = false;
      }
    } else {
      ball.inWater = false;
    }
    
    // Update ball position
    ball.element.style.left = ball.x + 'px';
    ball.element.style.top = ball.y + 'px';
    
    // Show hitboxes
    if (gameSettings.showHitboxes) {
      if (!ball.hitboxElement) {
        ball.hitboxElement = document.createElement('div');
        const weapon = weapons[ball.weapon];
        const skinName = weapon.skins[ball.skinIndex];
        const isMinecraft = ['Golden', 'Netherite', 'Ruby', 'TNT', 'Command Block', 'Iron Pickaxe', 'Trident'].includes(skinName);
        const borderRadius = ball.weapon === 'being' || isMinecraft ? '15%' : '50%';
        ball.hitboxElement.style.cssText = `
          position: absolute;
          border: 2px solid #ff0000;
          border-radius: ${borderRadius};
          pointer-events: none;
          z-index: 10;
        `;
        document.querySelector('.game-area').appendChild(ball.hitboxElement);
      }
      ball.hitboxElement.style.left = ball.x + 'px';
      ball.hitboxElement.style.top = ball.y + 'px';
      ball.hitboxElement.style.width = '30px';
      ball.hitboxElement.style.height = '30px';
      ball.hitboxElement.style.display = 'block';
    } else if (ball.hitboxElement) {
      ball.hitboxElement.style.display = 'none';
    }
    
    // Powerful Being special mechanics
    if (ball.weapon === 'being') {
      ball.powerTime += 0.016; // Increase power over time
      ball.regenTimer += 0.016;
      
      // Health regeneration every 0.5 seconds
      if (ball.regenTimer >= 0.5) {
        ball.health = Math.min(ball.maxHealth, ball.health + weapons.being.healthRegen);
        ball.regenTimer = 0;
      }
      
      ball.element.textContent = Math.ceil(ball.health);
      
      // Check if activated (health below threshold)
      const isActivated = ball.health <= weapons.being.healthForActivate;
      
      // Visual power indicator
      const powerLevel = Math.min(ball.powerTime / 10, 1);
      const glowIntensity = isActivated ? 0.8 + powerLevel * 0.2 : 0.3 + powerLevel * 0.7;
      const glowColor = isActivated ? 'rgba(255, 0, 0, ' : 'rgba(255, 215, 0, ';
      ball.element.style.boxShadow = `0 0 ${10 + powerLevel * 20}px ${glowColor}${glowIntensity})`;
      ball.element.style.borderColor = isActivated ? '#ff0000' : `hsl(${45 + powerLevel * 15}, 100%, ${50 + powerLevel * 30}%)`;
    }
    
    // Update weapon spinning and rotation (skip for unarmed, dummy, nuke, cloner, being, hallucination, bomber, giant)
    let weaponX, weaponY;
    if (ball.weapon !== 'unarmed' && ball.weapon !== 'dummy' && ball.weapon !== 'nuke' && ball.weapon !== 'cloner' && ball.weapon !== 'being' && ball.weapon !== 'hallucination' && ball.weapon !== 'bomber' && ball.weapon !== 'giant') {
      ball.spinAngle += ball.spinSpeed;
      weaponX = ball.x + 15 + Math.cos(ball.spinAngle * Math.PI / 180) * 25;
      weaponY = ball.y + 15 + Math.sin(ball.spinAngle * Math.PI / 180) * 25;
      ball.weaponElement.style.left = weaponX + 'px';
      ball.weaponElement.style.top = weaponY + 'px';
      ball.weaponElement.style.transform = `rotate(${ball.spinAngle}deg)`;
      
      // Revolver bullet shooting
      if (ball.weapon === 'revolver' && ball.spinAngle % 120 < ball.spinSpeed) {
        createBullet(ball, weaponX, weaponY);
        increaseAngerFromAction(ball, 'special');
      }
      
      // Builder wall placement
      if (ball.weapon === 'builder' && ball.spinAngle % 90 < ball.spinSpeed) {
        createWall(ball, weaponX, weaponY);
        increaseAngerFromAction(ball, 'ability');
      }
      
      // Builder construction sign placement
      if (ball.weapon === 'builder' && ball.spinAngle % 180 < ball.spinSpeed) {
        createConstructionSign(ball, weaponX, weaponY);
        increaseAngerFromAction(ball, 'ability');
      }
      
      // Broadcast TV placement
      if (ball.weapon === 'broadcast' && ball.spinAngle % 120 < ball.spinSpeed) {
        createTV(ball, weaponX, weaponY);
      }
      
      // Firing Range bullet shooting
      if (ball.weapon === 'firingRange' && ball.spinAngle % 180 < ball.spinSpeed) {
        createFiringRangeBullet(ball, weaponX, weaponY);
        increaseAngerFromAction(ball, 'special');
      }
    }
    
    // Update bullets
    ball.bullets.forEach((bullet, index) => {
      bullet.x += bullet.vx;
      bullet.y += bullet.vy;
      bullet.element.style.left = bullet.x + 'px';
      bullet.element.style.top = bullet.y + 'px';
      
      // Remove bullets that go off screen
      if (bullet.x < 0 || bullet.x > 250 || bullet.y < 0 || bullet.y > 250) {
        bullet.element.remove();
        ball.bullets.splice(index, 1);
      }
    });
    
    // Update firing range bullets
    if (ball.firingBullets) {
      ball.firingBullets.forEach((bullet, index) => {
        bullet.x += bullet.vx;
        bullet.y += bullet.vy;
        bullet.element.style.left = bullet.x + 'px';
        bullet.element.style.top = bullet.y + 'px';
        
        // Check collision with other balls
        balls.forEach(targetBall => {
          if (targetBall !== bullet.owner) {
            const distance = Math.sqrt((bullet.x - targetBall.x) ** 2 + (bullet.y - targetBall.y) ** 2);
            if (distance < 25) {
              targetBall.health -= bullet.damage;
              targetBall.element.textContent = Math.max(0, targetBall.health);
              
              // Remove bullet after hit
              bullet.element.remove();
              ball.firingBullets.splice(index, 1);
              
              // Check for death
              if (targetBall.health <= 0) {
                if (selectedGamemode === 'survival') {
                  const ballIndex = balls.indexOf(targetBall);
                  if (ballIndex > -1) {
                    balls.splice(ballIndex, 1);
                    targetBall.element.remove();
                    if (targetBall.weaponElement) targetBall.weaponElement.remove();
                  }
                } else {
                  gameRunning = false;
                  setTimeout(() => {
                    const roundDuration = Math.floor((Date.now() - roundStartTime) / 1000);
                    const xpAmount = roundDuration;
                    const coinAmount = roundDuration * 2;
                    alert(`${weapons[ball.weapon].name} (${weapons[ball.weapon].skins[ball.skinIndex]}) sniped ${weapons[targetBall.weapon].name} (${weapons[targetBall.weapon].skins[targetBall.skinIndex]})!\n\nRewards: +${xpAmount} XP, +${coinAmount} Coins (${roundDuration}s)`);
                    cleanupGame();
                  }, 500);
                }
              }
            }
          }
        });
        
        // Remove bullets that go off screen
        if (bullet.x < -50 || bullet.x > 300 || bullet.y < -50 || bullet.y > 300) {
          bullet.element.remove();
          ball.firingBullets.splice(index, 1);
        }
      });
    }
    
    // Update nuke timer
    if (ball.weapon === 'nuke' && ball.nukeTimer > 0) {
      ball.nukeTimer -= 0.016; // Roughly 60fps
      ball.element.textContent = Math.ceil(ball.nukeTimer);
      if (ball.nukeTimer <= 0) {
        // Nuke explodes - everyone dies
        gameRunning = false;
        setTimeout(() => {
          const roundDuration = Math.floor((Date.now() - roundStartTime) / 1000);
          const xpAmount = roundDuration;
          const coinAmount = roundDuration * 2;
          alert(`Nuke exploded! Everyone dies!\n\nRewards: +${xpAmount} XP, +${coinAmount} Coins (${roundDuration}s)`);
          cleanupGame();
        }, 100);
        return;
      }
    }
    
    // Update construction signs
    ball.constructionSigns.forEach((sign, index) => {
      sign.rotation += 5; // Spin the sign
      sign.element.style.transform = `rotate(${sign.rotation}deg)`;
      
      // Remove sign after 10 seconds
      if (Date.now() - sign.createdTime > 10000) {
        sign.element.remove();
        ball.constructionSigns.splice(index, 1);
      }
    });
    
    // Update TVs
    ball.tvs.forEach((tv, index) => {
      tv.drainTimer += 0.016;
      
      // Drain health from nearby enemies every second
      if (tv.drainTimer >= 1) {
        balls.forEach(enemyBall => {
          if (enemyBall !== ball) {
            const tvDistance = Math.sqrt((enemyBall.x - tv.x) ** 2 + (enemyBall.y - tv.y) ** 2);
            if (tvDistance < 50) {
              enemyBall.health -= weapons.broadcast.tvDrainage;
              enemyBall.element.textContent = Math.max(0, enemyBall.health);
              
              // Damage TV when draining
              tv.health -= 5;
              if (tv.health <= 0) {
                explodeTV(tv, ball);
                ball.tvs.splice(index, 1);
              }
            }
          }
        });
        tv.drainTimer = 0;
      }
      
      // Remove TV after 15 seconds
      if (Date.now() - tv.createdTime > 15000) {
        tv.element.remove();
        ball.tvs.splice(index, 1);
      }
    });
    
    // Update speed boost timer
    if (ball.speedBoostTimer > 0) {
      ball.speedBoostTimer -= 0.016;
      if (ball.speedBoostTimer <= 0) {
        // Remove speed boost
        ball.vx *= 0.8; // Return to 80% of boosted speed (back to normal)
        ball.vy *= 0.8;
      }
    }
    
    // Update clones
    ball.clones.forEach((clone, index) => {
      clone.x += clone.vx;
      clone.y += clone.vy;
      
      // Bounce off walls
      if (clone.x <= 0 || clone.x >= 220) clone.vx *= -1;
      if (clone.y <= 0 || clone.y >= 220) clone.vy *= -1;
      
      // Keep in bounds
      clone.x = Math.max(0, Math.min(220, clone.x));
      clone.y = Math.max(0, Math.min(220, clone.y));
      
      // Update position
      clone.element.style.left = clone.x + 'px';
      clone.element.style.top = clone.y + 'px';
      
      // Check clone collision with enemy balls
      balls.forEach(enemyBall => {
        if (enemyBall !== ball) {
          const cloneDistance = Math.sqrt((clone.x - enemyBall.x) ** 2 + (clone.y - enemyBall.y) ** 2);
          if (cloneDistance < 25) {
            enemyBall.health -= 20;
            enemyBall.element.textContent = Math.max(0, enemyBall.health);
            
            // Remove clone after dealing damage
            clone.element.remove();
            ball.clones.splice(index, 1);
            
            if (enemyBall.health <= 0) {
              // Check Very Specific Achievement
              if (selectedGamemode === 'corrosion' && selectedMap === 'theHQ' &&
                  ball.weapon === 'cloner' && ball.skinIndex === 5 &&
                  enemyBall.weapon === 'dummy' && enemyBall.skinIndex === 6) {
                unlockAchievement('verySpecificAchievement');
              }
              if (selectedGamemode === 'survival') {
                // Remove dead ball from game
                const index = balls.indexOf(enemyBall);
                if (index > -1) {
                  balls.splice(index, 1);
                  enemyBall.element.remove();
                  if (enemyBall.weaponElement) enemyBall.weaponElement.remove();
                }
                
                // Check win conditions
                const goodAlive = balls.filter(b => b.team === 'good').length;
                const evilAlive = balls.filter(b => b.team === 'evil').length;
                
                if (goodAlive === 0) {
                  gameRunning = false;
                  setTimeout(() => {
                    alert('Evil wins! All good balls eliminated!');
                    cleanupGame();
                  }, 500);
                } else if (evilAlive === 0) {
                  gameRunning = false;
                  setTimeout(() => {
                    alert('Good wins! All evil balls eliminated!');
                    cleanupGame();
                  }, 500);
                }
              } else {
                gameRunning = false;
                setTimeout(() => {
                  const roundDuration = Math.floor((Date.now() - roundStartTime) / 1000);
                  const xpAmount = roundDuration;
                  const coinAmount = roundDuration * 2;
                  alert(`${weapons[ball.weapon].name} (${weapons[ball.weapon].skins[ball.skinIndex]})'s clone eliminated ${weapons[enemyBall.weapon].name} (${weapons[enemyBall.weapon].skins[enemyBall.skinIndex]})!\n\nRewards: +${xpAmount} XP, +${coinAmount} Coins (${roundDuration}s)`);
                  cleanupGame();
                }, 500);
              }
            }
          }
        }
      });
    });
  });
  
  // Update game status
  updateGameStatus();
  
  // Check collisions
  if (balls.length >= 2) {
    // Check collisions between all balls
    for (let i = 0; i < balls.length; i++) {
      for (let j = i + 1; j < balls.length; j++) {
        const ball1 = balls[i];
        const ball2 = balls[j];
        
        // Skip collision if both are good balls in survival mode
        if (selectedGamemode === 'survival' && ball1.team === 'good' && ball2.team === 'good') continue;
        // Skip collision if both are evil balls in survival mode
        if (selectedGamemode === 'survival' && ball1.team === 'evil' && ball2.team === 'evil') continue;
        // Skip collision if same team in teams mode
        if (selectedGamemode === 'teams' && ball1.team === ball2.team) continue;
        // In corrosion mode, rust ball attacks everyone
        if (selectedGamemode === 'corrosion' && ball1.team === 'player' && ball2.team === 'player') continue;
        
        const ballDistance = Math.sqrt((ball1.x - ball2.x) ** 2 + (ball1.y - ball2.y) ** 2);
        
        // Ball-to-ball collision for unarmed, dummy, being, and angryBall
        if (ballDistance < 30) {
          if (ball1.weapon === 'unarmed' || ball1.weapon === 'dummy' || ball1.weapon === 'being' || ball1.weapon === 'angryBall') {
            handleWeaponHit(ball1, ball2);
          }
          if (ball2.weapon === 'unarmed' || ball2.weapon === 'dummy' || ball2.weapon === 'being' || ball2.weapon === 'angryBall') {
            handleWeaponHit(ball2, ball1);
          }
        }
        
        // Weapon-to-ball collision for armed weapons
        if (ball1.weapon !== 'unarmed' && ball1.weapon !== 'dummy' && ball1.weapon !== 'being') {
          const weapon1X = ball1.x + 15 + Math.cos(ball1.spinAngle * Math.PI / 180) * 25;
          const weapon1Y = ball1.y + 15 + Math.sin(ball1.spinAngle * Math.PI / 180) * 25;
          const w1ToBall2 = Math.sqrt((weapon1X - ball2.x - 15) ** 2 + (weapon1Y - ball2.y - 15) ** 2);
          
          if (w1ToBall2 < 25) {
            handleWeaponHit(ball1, ball2);
          }
        }
        
        if (ball2.weapon !== 'unarmed' && ball2.weapon !== 'dummy' && ball2.weapon !== 'being') {
          const weapon2X = ball2.x + 15 + Math.cos(ball2.spinAngle * Math.PI / 180) * 25;
          const weapon2Y = ball2.y + 15 + Math.sin(ball2.spinAngle * Math.PI / 180) * 25;
          const w2ToBall1 = Math.sqrt((weapon2X - ball1.x - 15) ** 2 + (weapon2Y - ball1.y - 15) ** 2);
          
          if (w2ToBall1 < 25) {
            handleWeaponHit(ball2, ball1);
          }
        }
      }
    }
    
    // Check TV collisions for teleportation
    balls.forEach(ball => {
      if (ball.weapon === 'broadcast') {
        ball.tvs.forEach((tv, index) => {
          const tvDistance = Math.sqrt((ball.x - tv.x) ** 2 + (ball.y - tv.y) ** 2);
          if (tvDistance < 30) {
            // Explode the TV being touched
            explodeTV(tv, ball);
            
            // Teleport to random TV or random location if no other TVs
            if (ball.tvs.length > 1) {
              const otherTvs = ball.tvs.filter(t => t !== tv);
              const targetTv = otherTvs[Math.floor(Math.random() * otherTvs.length)];
              ball.x = targetTv.x;
              ball.y = targetTv.y;
            } else {
              ball.x = Math.random() * 200 + 25;
              ball.y = Math.random() * 200 + 25;
            }
            
            // Remove the exploded TV from array
            ball.tvs.splice(index, 1);
            
            // Apply speed boost
            ball.vx *= 1.25;
            ball.vy *= 1.25;
            ball.speedBoostTimer = 10; // 10 seconds
            increaseAngerFromAction(ball, 'teleport');
          }
        });
      }
    });
    
    // Check construction sign collisions
    balls.forEach(ball => {
      let inSlowZone = false;
      
      balls.forEach(otherBall => {
        if (ball !== otherBall) {
          otherBall.constructionSigns.forEach(sign => {
            const signDistance = Math.sqrt((ball.x - sign.x) ** 2 + (ball.y - sign.y) ** 2);
            if (signDistance < 40) { // 40px radius
              inSlowZone = true;
            }
          });
        }
      });
      
      // Apply or remove slow effect
      if (inSlowZone && !ball.isSlowed) {
        ball.vx *= 0.5; // Slow to 50% speed
        ball.vy *= 0.5;
        ball.isSlowed = true;
      } else if (!inSlowZone && ball.isSlowed) {
        ball.vx *= 2; // Restore to normal speed
        ball.vy *= 2;
        ball.isSlowed = false;
      }
    });
    
    // Check wall collisions
    balls.forEach(ball => {
      balls.forEach(otherBall => {
        if (ball !== otherBall) {
          otherBall.walls.forEach((wall, wallIndex) => {
            const wallDistance = Math.sqrt((ball.x - wall.x) ** 2 + (ball.y - wall.y) ** 2);
            if (wallDistance < 20) {
              ball.health -= 20;
              ball.element.textContent = Math.max(0, ball.health);
              
              // Remove the wall that dealt damage
              wall.element.remove();
              otherBall.walls.splice(wallIndex, 1);
              
              if (ball.health <= 0) {
                if (selectedGamemode === 'survival') {
                  // Remove dead ball from game
                  const index = balls.indexOf(ball);
                  if (index > -1) {
                    balls.splice(index, 1);
                    ball.element.remove();
                    if (ball.weaponElement) ball.weaponElement.remove();
                  }
                  
                  // Check win conditions
                  const goodAlive = balls.filter(b => b.team === 'good').length;
                  const evilAlive = balls.filter(b => b.team === 'evil').length;
                  
                  if (goodAlive === 0) {
                    gameRunning = false;
                    setTimeout(() => {
                      alert('Evil wins! All good balls eliminated!');
                      cleanupGame();
                    }, 500);
                  } else if (evilAlive === 0) {
                    gameRunning = false;
                    setTimeout(() => {
                      alert('Good wins! All evil balls eliminated!');
                      cleanupGame();
                    }, 500);
                  }
                } else {
                  gameRunning = false;
                  setTimeout(() => {
                    const roundDuration = Math.floor((Date.now() - roundStartTime) / 1000);
                    const xpAmount = roundDuration;
                    const coinAmount = roundDuration * 2;
                    alert(`${weapons[ball.weapon].name} (${weapons[ball.weapon].skins[ball.skinIndex]}) was crushed by ${weapons[otherBall.weapon].name} (${weapons[otherBall.weapon].skins[otherBall.skinIndex]})'s wall!\n\nRewards: +${xpAmount} XP, +${coinAmount} Coins (${roundDuration}s)`);
                    cleanupGame();
                  }, 500);
                }
              }
            }
          });
        }
      });
    });
  }
  
  requestAnimationFrame(gameLoop);
}

// Death messages
function getDeathMessage(attacker, defender) {
  const attackerSkin = weapons[attacker.weapon].skins[attacker.skinIndex];
  const defenderSkin = weapons[defender.weapon].skins[defender.skinIndex];
  
  // Die of Death skins
  const dieOfDeathSkins = ['Artful', 'Swapful', 'Clawsguy', 'Pursuer', 'Devesto', 'Killdroid', 'Gunslinger', 'Badware', 'Civilian', 'Harken'];
  const minecraftSkins = ['Ruby', 'Golden', 'Netherite', 'TNT', 'Command Block', 'Iron Pickaxe', 'Trident'];
  const itemAsylumSkins = ['Chicago', 'Moscow', 'Shadow Clones'];
  
  // Low health clutch message (attacker has less than 25% health)
  if (attacker.health <= attacker.maxHealth * 0.25) {
    return `${weapons[attacker.weapon].name} (${attackerSkin}) clutched against ${weapons[defender.weapon].name} (${defenderSkin}) with only ${attacker.health} HP left!`;
  }
  
  // Special messages
  if (dieOfDeathSkins.includes(attackerSkin) && dieOfDeathSkins.includes(defenderSkin)) {
    return `${weapons[defender.weapon].name} (${defenderSkin}) died of death by ${weapons[attacker.weapon].name} (${attackerSkin})`;
  }
  if (minecraftSkins.includes(attackerSkin) && minecraftSkins.includes(defenderSkin)) {
    return `${weapons[defender.weapon].name} (${defenderSkin}) was slained by ${weapons[attacker.weapon].name} (${attackerSkin})`;
  }
  if (itemAsylumSkins.includes(attackerSkin) && itemAsylumSkins.includes(defenderSkin)) {
    return `${weapons[attacker.weapon].name} (${attackerSkin}) put ${weapons[defender.weapon].name} (${defenderSkin}) in the femur breaker`;
  }
  
  // Random death messages
  const messages = [
    `${weapons[attacker.weapon].name} (${attackerSkin}) defeated ${weapons[defender.weapon].name} (${defenderSkin})!`,
    `${weapons[defender.weapon].name} (${defenderSkin}) was eliminated by ${weapons[attacker.weapon].name} (${attackerSkin})!`,
    `${weapons[attacker.weapon].name} (${attackerSkin}) destroyed ${weapons[defender.weapon].name} (${defenderSkin})!`,
    `${weapons[defender.weapon].name} (${defenderSkin}) fell to ${weapons[attacker.weapon].name} (${attackerSkin})!`,
    `${weapons[attacker.weapon].name} (${attackerSkin}) obliterated ${weapons[defender.weapon].name} (${defenderSkin})!`,
    `${weapons[defender.weapon].name} (${defenderSkin}) got desimated by ${weapons[attacker.weapon].name} (${attackerSkin})!`
  ];
  
  return messages[Math.floor(Math.random() * messages.length)];
}

// Create clone function
function createClone(cloner, target) {
  const clone = {
    element: document.createElement('div'),
    x: target.x + 40,
    y: target.y,
    vx: (Math.random() - 0.5) * 4,
    vy: (Math.random() - 0.5) * 4,
    health: 50 + cloner.hitCount * 10,
    weapon: target.weapon,
    isClone: true
  };
  
  clone.element.style.cssText = `
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${weapons[target.weapon].color[0]};
    opacity: 0.7;
    left: ${clone.x}px;
    top: ${clone.y}px;
  `;
  
  document.querySelector('.game-area').appendChild(clone.element);
  cloner.clones.push(clone);
}

// Update VS display
function updateVSDisplay() {
  const vsDisplay = document.getElementById('vsDisplay');
  if (selectedGamemode === 'classic' || selectedGamemode === 'modifiers') {
    if (balls.length >= 2) {
      const leftBall = balls[0];
      const rightBall = balls[1];
      const leftWeapon = weapons[leftBall.weapon];
      const rightWeapon = weapons[rightBall.weapon];
      const leftSkin = leftWeapon.skins[leftBall.skinIndex];
      const rightSkin = rightWeapon.skins[rightBall.skinIndex];
      const leftColor = leftWeapon.color[leftBall.skinIndex] || leftWeapon.color[0];
      const rightColor = rightWeapon.color[rightBall.skinIndex] || rightWeapon.color[0];
      
      vsDisplay.innerHTML = `<span style="color: ${leftColor};">${leftWeapon.name} (${leftSkin})</span> <span style="color: #e74c3c;">VS</span> <span style="color: ${rightColor};">${rightWeapon.name} (${rightSkin})</span>`;
    }
  } else if (selectedGamemode === 'survival') {
    const goodCount = balls.filter(b => !b.isEvil).length;
    const evilCount = balls.filter(b => b.isEvil).length;
    vsDisplay.innerHTML = `<span style="color: #27ae60;">${goodCount} Good Balls</span> <span style="color: #e74c3c;">VS</span> <span style="color: #c0392b;">${evilCount} Evil Ball${evilCount !== 1 ? 's' : ''}</span>`;
  }
}

// Cleanup game function
function cleanupGame() {
  // Award XP for round completion
  const winnerBall = balls.length > 0 ? balls[0] : null;
  balls.forEach(ball => {
    awardRoundXP(ball.weapon, winnerBall);
  });
  
  // Clean up all ball elements
  const allBalls = [...balls];
  allBalls.forEach(ball => {
    if (ball.bullets) ball.bullets.forEach(bullet => bullet.element.remove());
    if (ball.firingBullets) ball.firingBullets.forEach(bullet => bullet.element.remove());
    if (ball.arrows) ball.arrows.forEach(arrow => arrow.element.remove());
    if (ball.bowArrows) ball.bowArrows.forEach(arrow => arrow.element.remove());
    if (ball.walls) ball.walls.forEach(wall => wall.element.remove());
    if (ball.constructionSigns) ball.constructionSigns.forEach(sign => sign.element.remove());
    if (ball.tvs) ball.tvs.forEach(tv => tv.element.remove());
    if (ball.clones) ball.clones.forEach(clone => clone.element.remove());
    if (ball.potions) ball.potions.forEach(potion => potion.element.remove());
    if (ball.hitboxElement) ball.hitboxElement.remove();
    ball.element.remove();
    if (ball.weaponElement) ball.weaponElement.remove();
  });
  
  // Clear balls array
  balls = [];
  
  // Clean up any remaining game elements
  document.querySelectorAll('.map-obstacle').forEach(obs => obs.remove());
  document.querySelectorAll('.map-decoration').forEach(dec => dec.remove());
  
  // Clean up any stray elements from teams/corrosion modes
  const gameArea = document.querySelector('.game-area');
  if (gameArea) {
    // Remove any remaining ball elements
    gameArea.querySelectorAll('div[style*="position: absolute"]').forEach(el => {
      if (el.className !== 'map-obstacle' && el.className !== 'map-decoration' && el.id !== 'gameCanvas') {
        el.remove();
      }
    });
  }
  
  // Reset funny ball, banwave ball, and dam flooding
  resetFunnyBall();
  resetBanwaveBall();
  resetDamFlooding();
  
  // Clean up banwave elements (placeholder for future implementation)
  document.querySelectorAll('.banwave-ball').forEach(ball => ball.remove());
  
  // Show buttons again and hide VS display
  const buttonContainer = document.getElementById('buttonContainer');
  const vsDisplay = document.getElementById('vsDisplay');
  const settingsButton = document.getElementById('settingsButton');
  
  buttonContainer.style.display = 'block';
  vsDisplay.style.display = 'none';
  
  // Reset button text
  shopButton.textContent = 'Shop';
  mapButton.textContent = 'Maps';
  gamemodeButton.textContent = 'Gamemodes';
  settingsButton.textContent = 'Settings';
  document.getElementById('achievementsButton').textContent = 'Achievements';
  gameStatus.innerHTML = '';
  settingsButton.style.display = 'inline-flex';
  document.getElementById('achievementsButton').style.display = 'inline-flex';
}

// Increase anger meter for angry balls when opponent performs actions
function increaseAngerFromAction(actionBall, actionType = 'attack') {
  balls.forEach(ball => {
    if (ball.weapon === 'angryBall' && ball !== actionBall) {
      const angerIncrease = {
        'attack': 20,
        'ability': 25,
        'special': 30,
        'teleport': 15,
        'heal': 10
      };
      
      ball.angerMeter = Math.min(weapons.angryBall.angerThreshold, ball.angerMeter + (angerIncrease[actionType] || 15));
    }
  });
}

// Handle weapon hit
function handleWeaponHit(attacker, defender) {
  // Increase anger from attack action
  increaseAngerFromAction(attacker, 'attack');
  
  // Calculate weapon-specific damage
  let damage = weapons[attacker.weapon].damage + attacker.damageBonus;
  
  // Apply weapon special abilities
  if (attacker.weapon === 'sword') {
    attacker.damageBonus += 5; // Stacking damage
    increaseAngerFromAction(attacker, 'ability');
  } else if (attacker.weapon === 'dagger') {
    attacker.spinSpeed += 2; // Faster spinning
    increaseAngerFromAction(attacker, 'ability');
  } else if (attacker.weapon === 'revolver') {
    damage *= 1.5; // Triple shot effect
    increaseAngerFromAction(attacker, 'special');
  } else if (attacker.weapon === 'unarmed') {
    // Speed-based damage
    const speed = Math.sqrt(attacker.vx ** 2 + attacker.vy ** 2);
    damage = Math.floor(speed * 3) + 5;
    // Increase max speed
    const maxSpeed = 6 + attacker.hitCount * 0.5;
    attacker.vx = Math.sign(attacker.vx) * Math.min(Math.abs(attacker.vx) * 1.1, maxSpeed);
    attacker.vy = Math.sign(attacker.vy) * Math.min(Math.abs(attacker.vy) * 1.1, maxSpeed);
  } else if (attacker.weapon === 'dummy') {
    // Dummy does no damage
    damage = 0;
  } else if (attacker.weapon === 'builder') {
    // Builder normal damage
    damage = weapons[attacker.weapon].damage;
  } else if (attacker.weapon === 'cloner') {
    // Cloner creates clone of defender
    createClone(attacker, defender);
    increaseAngerFromAction(attacker, 'special');
    damage = 0; // No direct damage
  } else if (attacker.weapon === 'being') {
    // Powerful Being damage scales with time and activation
    const isActivated = attacker.health <= weapons.being.healthForActivate;
    const powerLevel = Math.min(attacker.powerTime / 10, 1);
    const baseDamage = weapons.being.baseDamage;
    const fullDamage = weapons.being.fullDamage;
    damage = baseDamage + (fullDamage - baseDamage) * powerLevel;
    if (isActivated) damage *= 2; // Double damage when activated
  } else if (attacker.weapon === 'spear') {
    // Spear increases damage and length every hit
    attacker.damageBonus += 3;
    attacker.spearLength = (attacker.spearLength || 30) + 5;
    if (attacker.weaponElement) {
      attacker.weaponElement.style.height = attacker.spearLength + 'px';
    }
  } else if (attacker.weapon === 'firingRange') {
    // Firing Range shoots bullets (handled separately)
    damage = weapons[attacker.weapon].damage;
  } else if (attacker.weapon === 'hallucination') {
    // Hallucination confuses opponent (visual effect only for now)
    damage = weapons[attacker.weapon].damage;
  } else if (attacker.weapon === 'bomber') {
    // Bomber drops explosive bombs
    damage = weapons[attacker.weapon].damage;
  } else if (attacker.weapon === 'giant') {
    // Giant increases size and decreases speed every hit
    const sizeIncrease = weapons.giant.sizeIncrease;
    const speedDecrease = weapons.giant.speedDecrease;
    
    // Increase ball size
    const currentSize = parseInt(attacker.element.style.width) || 30;
    const newSize = Math.min(currentSize + sizeIncrease * 30, 60); // Max 60px
    attacker.element.style.width = newSize + 'px';
    attacker.element.style.height = newSize + 'px';
    
    // Decrease speed
    attacker.vx *= (1 - speedDecrease);
    attacker.vy *= (1 - speedDecrease);
    
    damage = weapons[attacker.weapon].damage;
  } else if (attacker.weapon === 'offenderStaff') {
    // Offender Staff shoots vine and heals user
    attacker.health = Math.min(attacker.maxHealth, attacker.health + weapons.offenderStaff.damage);
    attacker.element.textContent = Math.ceil(attacker.health);
    // Flash green on heal
    attacker.element.style.background = '#106e10ff';
    if (attacker.weapon === 'broadcast' && attacker.skinIndex === 5) attacker.element.textContent = ':D';
    setTimeout(() => { 
      attacker.element.style.background = attacker.originalColor;
      if (attacker.weapon === 'broadcast' && attacker.skinIndex === 5) attacker.element.textContent = ':)';
    }, 200);
    increaseAngerFromAction(attacker, 'heal');
    damage = weapons[attacker.weapon].damage;
  } else if (attacker.weapon === 'broadcast') {
    // Broadcast damage with boost
    const baseDamage = weapons[attacker.weapon].damage;
    const boostDamage = attacker.speedBoostTimer > 0 ? weapons.broadcast.damageBoost : 0;
    damage = baseDamage + boostDamage + attacker.damageBonus;
  } else if (attacker.weapon === 'angryBall') {
    // Angry ball damage with anger boost
    damage = weapons.angryBall.damage;
    if (attacker.isAngry) {
      damage *= weapons.angryBall.angerBoost;
    }
  } else if (attacker.weapon === 'bow') {
    damage = weapons.bow.damage;
    attacker.bowArrowCount++;
  } else if (attacker.weapon === 'healer') {
    // Healer heals good balls and damages evil balls
    if (selectedGamemode === 'survival') {
      if (defender.team === 'good') {
        // Heal good balls
        defender.health = Math.min(defender.maxHealth, defender.health + weapons.healer.healHealth);
        attacker.health = Math.min(attacker.maxHealth, attacker.health + weapons.healer.healHealth);
        // Flash green on heal
        defender.element.style.background = '#106e10ff';
        attacker.element.style.background = '#106e10ff';
        if (defender.weapon === 'broadcast' && defender.skinIndex === 5) defender.element.textContent = ':D';
        if (attacker.weapon === 'broadcast' && attacker.skinIndex === 5) attacker.element.textContent = ':D';
        setTimeout(() => { 
          defender.element.style.background = defender.originalColor; 
          attacker.element.style.background = attacker.originalColor;
          if (defender.weapon === 'broadcast' && defender.skinIndex === 5) defender.element.textContent = ':)';
          if (attacker.weapon === 'broadcast' && attacker.skinIndex === 5) attacker.element.textContent = ':)';
        }, 200);
        damage = 0; // No damage to good balls
        increaseAngerFromAction(attacker, 'heal');
      } else {
        // Damage evil balls
        damage = weapons.healer.damage;
      }
    } else {
      damage = weapons.healer.damage;
    }
  } else if (attacker.weapon === 'rusted') {
    damage = weapons.rusted.damage;
    // Heal attacker when corroding
    attacker.health = Math.min(attacker.maxHealth, attacker.health + damage);
    attacker.element.textContent = Math.ceil(attacker.health);
    attacker.element.style.background = '#106e10ff';
    if (attacker.weapon === 'broadcast' && attacker.skinIndex === 5) attacker.element.textContent = ':D';
    setTimeout(() => { 
      attacker.element.style.background = attacker.originalColor;
      if (attacker.weapon === 'broadcast' && attacker.skinIndex === 5) attacker.element.textContent = ':)';
    }, 200);
    // Apply rust effect
    defender.isRusted = true;
    defender.rustTimer = weapons.rusted.rustDuration;
    defender.originalSpeed = { vx: defender.vx, vy: defender.vy };
    defender.vx *= (1 - weapons.rusted.speedReduction);
    defender.vy *= (1 - weapons.rusted.speedReduction);
    // Visual rust effect
    defender.element.style.filter = 'sepia(100%) saturate(200%) hue-rotate(15deg)';
  }
  
  attacker.hitCount++;
  defender.health -= damage;
  
  // Flash red on damage
  if (damage > 0) {
    defender.element.style.background = '#8e0404ff';
    // Blue Screened damage emoticon
    if (defender.weapon === 'broadcast' && defender.skinIndex === 5) {
      defender.element.textContent = 'X(';
    }
    setTimeout(() => { 
      defender.element.style.background = defender.originalColor;
      // Restore emoticon after flash
      if (defender.weapon === 'broadcast' && defender.skinIndex === 5) {
        if (defender.health <= 0) defender.element.textContent = 'XP';
        else if (defender.health <= defender.maxHealth * 0.25) defender.element.textContent = ':(';
        else if (defender.health <= defender.maxHealth * 0.5) defender.element.textContent = ':|';
        else defender.element.textContent = ':)';
      }
    }, 200);
  }
  
  // Show hitmarker
  if (gameSettings.showHitmarkers && damage > 0) {
    showHitmarker(defender.x, defender.y, damage);
  }
  
  // Bounce balls apart
  const dx = defender.x - attacker.x;
  const dy = defender.y - attacker.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance > 0) {
    defender.vx += (dx / distance) * 2;
    defender.vy += (dy / distance) * 2;
    attacker.vx -= (dx / distance) * 2;
    attacker.vy -= (dy / distance) * 2;
  }
  
  // Update health display
  defender.element.textContent = Math.max(0, defender.health);
  
  // Blue Screened emoticon update
  if (defender.weapon === 'broadcast' && defender.skinIndex === 5) {
    if (defender.health <= 0) defender.element.textContent = 'XP';
    else if (defender.health <= defender.maxHealth * 0.25) defender.element.textContent = ':(';
    else if (defender.health <= defender.maxHealth * 0.5) defender.element.textContent = ':|';
    else defender.element.textContent = ':)';
  }
  
  // Update game status
  if (selectedGamemode === 'survival' || selectedGamemode === 'teams' || selectedGamemode === 'corrosion') {
    updateGameStatus();
  }
  
  // Check for death
  if (defender.health <= 0) {
    if (selectedGamemode === 'survival' || selectedGamemode === 'teams' || selectedGamemode === 'corrosion') {
      // Remove dead ball from game
      const index = balls.indexOf(defender);
      if (index > -1) {
        balls.splice(index, 1);
        defender.element.remove();
        if (defender.weaponElement) defender.weaponElement.remove();
      }
      
      updateGameStatus();
      
      // Check win conditions
      if (selectedGamemode === 'survival') {
        const goodAlive = balls.filter(b => b.team === 'good').length;
        const evilAlive = balls.filter(b => b.team === 'evil').length;
        
        if (goodAlive === 0) {
          gameRunning = false;
          setTimeout(() => {
            alert('Evil wins! All good balls eliminated!');
            cleanupGame();
          }, 500);
        } else if (evilAlive === 0) {
          gameRunning = false;
          setTimeout(() => {
            alert('Good wins! All evil balls eliminated!');
            cleanupGame();
          }, 500);
        }
      } else if (selectedGamemode === 'teams') {
        const team1Alive = balls.filter(b => b.team === 'team1').length;
        const team2Alive = balls.filter(b => b.team === 'team2').length;
        
        if (team1Alive === 0) {
          gameRunning = false;
          setTimeout(() => {
            alert('Team 2 wins!');
            cleanupGame();
          }, 500);
        } else if (team2Alive === 0) {
          gameRunning = false;
          setTimeout(() => {
            alert('Team 1 wins!');
            cleanupGame();
          }, 500);
        }
      } else if (selectedGamemode === 'corrosion') {
        const playerAlive = balls.filter(b => b.team === 'player').length;
        const rustAlive = balls.filter(b => b.team === 'rust').length;
        
        if (playerAlive === 0) {
          gameRunning = false;
          setTimeout(() => {
            alert('Rust ball wins! All players corroded!');
            cleanupGame();
          }, 500);
        } else if (rustAlive === 0) {
          gameRunning = false;
          setTimeout(() => {
            alert('Players win! Rust ball destroyed!');
            cleanupGame();
          }, 500);
        }
      }
    } else {
      gameRunning = false;
      setTimeout(() => {
        const rewards = awardRoundXP(attacker.weapon, attacker);
        const multiplierText = rewards.multiplier > 1 ? ` (${rewards.multiplier}x multiplier)` : '';
        alert(`${getDeathMessage(attacker, defender)}\n\nRewards: +${rewards.xp} XP, +${rewards.coins} Coins${multiplierText} (${rewards.duration}s)`);
        checkBanwaveWin();
        cleanupGame();
      }, 500);
    }
    return;
  }
}