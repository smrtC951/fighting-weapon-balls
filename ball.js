// Store weapon data
const weapons = {
  sword: {
    name: "Sword",
    ability: "Adds damage every hit.",
    skins: ["Default", "Ruby", "Midnight Steel", "Golden", "Super Sword", "Pursuer", "Clawsguy", "Netherite", "Freesmart"],
    color: ["#500000ff", "#ff0000", "#513b36ff", "#ffd700", "#a57731ff", "#000000ff", "#511300ee", "#4b4b4b", "#ff9999"],
    damage: 15,
    special: "stackDamage"
  },
  dagger: {
    name: "Dagger",
    ability: "Adds spin speed every hit.",
    skins: ["Default", "Shadow Tip", "Aqua Sting", "Two Time", "Rainbow"],
    color: ["#0b0b63ff", "#212221ff", "#006400", "#041228ff", "#ff69b4ff"],
    damage: 10,
    special: "speedBoost"
  },
  spear: {
    name: "Spear",
    ability: "Longer + more damage every hit",
    skins: ["Default", "Harpoon", "Trident", "Ice Spear", "Dragon Spear"],
    color: ["#808080", "#2f4f4fff", "#00ced1ff", "#add8e6ff", "#8b0000ff"],
    damage: 20,
    special: "longerDamage"
  },
  revolver: {
    name: "Revolver",
    ability: "Shoots 3 bullets that adds damage every hit.",
    skins: ["Default", "Chance", "Moscow", "Pistol", "Gunslinger", "Chicago", "Roulette", "Desert Eagle"],
    color: ["#9d4c1dff", "#5f5f89ff", "#8b0000", "#808080", "#53280eff", "#3e3e3eff", "#473d00ff", "#daa520ff"],
    damage: 25,
    special: "tripleDamage"
  },
  unarmed: {
    name: "Unarmed",
    ability: "Damage is equal to speed. Max speed increases every hit.",
    skins: ["Default", "Bareball", "Victim", "Fistful", "Glove", "Boxing Glove"],
    color: ["#808080", "#a9a9a9", "linear-gradient(90deg, #a9a9a9, #511300ee)", "#d2b48cff", "#8b4513", "#ff4500"],
    damage: 5,
    special: "speedBasedDamage"
  },
  dummy: {
    name: "Dummy",
    ability: "Does nothing.",
    skins: ["Default", "ScaleDummy", "TrainingBot"],
    color: ["#808080", "#708090ff", "#a9a9a9"],
    damage: 0,
    special: "none"
  },
  builder: {
    name: "Builder",
    ability: "Main ability is to hit, but it's second ability is placing a wall at the weapon's direction. Deals 20 damage when opponent interacts with wall. Builder also can place down a spinning construction sign that slows down the opponent.",
    skins: ["Default", "Reversed", "Construction Worker", "Intelligence", "Painter", "Swapful", "Artful", "Iron Pickaxe", "Wallmaster"],
    color: ["#e0b979ff", "#8B4513", "#c3a475ff", "#9cd7e8ff", "#e4d4beff", "linear-gradient(45deg, #ff0000, #0000ff)", "#ecd1bbff", "#e4d4beff", "#d2b48cff"],
    wallcolor: ["#8B4513", "#f9dd0bff", "#006400", "#005c76ff", "random", "linear-gradient(45deg, #ff0000, #0000ff)", "#ffffffff", "#CBcdcd", "#A9A9A9"],
    constructionColor: ["#f9dd0bff", "#e0b979ff", "#84760cff", "#00c8ffff", "random", "linear-gradient(45deg, #ff0000, #0000ff)", "#ffffffff", "#848482", "#7c7c7cff"],
    damage: 20,
    speedReduce: '25%',
    special: "placeWall"
  },
  nuke: {
    name: "Nuke",
    ability: "Explodes and instakills every ball when the timer hits 0.",
    skins: ["Default", "Tsar Bomba", "TNT"],
    color: ["#063606ff", "#FF7A00", "#ff4500"],
    damage: 1,
    special: "nukeExplosion"
  },
  cloner: {
    name: "Cloner",
    ability: "Clones the enemy ball every hit. Increases clone's HP every hit.",
    skins: ["Default", "Devesto", "Shadow Clones", "3D Printer"],
    color: ["#5c186aff", "#c11d1dff", "#bcc59eff", "#808080"],
    damage: 25, // Clones only
    special: "cloneEnemy"
  },
  firingRange: {
    name: "Firing Range",
    ability: "Fires a long ranged bullet that deals damage on hit.",
    skins: ["Default", "Sniper", "Laser Gun", "Killdroid"],
    color: ["#13bdc9ff", "#00ffff", "#ff00ffff", "#ba0b0bff"],
    bulletColor: ["#ff0000", "#00ff00", "#0000ffff", "#ba0b0bff"],
    damage: 25,
    cooldown: 2, // Cooldown in seconds
    special: "firingRange"
  },
  bomber: {
    name: "Bomber",
    ability: "Drops bombs that explode after a short time, dealing area damage.",
    skins: ["Default", "Grenade", "TimeBomb", "Cluster Bomb", "Subspace Tripmine", "Molotov"],
    color: ["#37451eff", "#228b22ff", "#909090ff", "#ff8c00ff", "#800080ff", "#ff4500ff"],
    explosionColor: ["#ff4500", "#32cd32", "#e5ff00ff", "#ffa500", "#ff00ffff", "#ff6347"],
    damage: 30,
    bombTimer: Math.floor(Math.random() * 5) + 1, // Time before bomb explodes
    special: "dropBombs"
  },
  giant: {
    name: "Giant",
    ability: "Increases ball & weapon size every hit, but decreases speed",
    skins: ["Default", "Colossal", "Titan", "Gargantuan", "Behemoth", "Spongy"],
    color: ["#556b2fff", "#708090ff", "#2f4f4fff", "#4682b4ff", "#000080ff", "#faca2cff"],
    damage: 15,
    sizeIncrease: 0.1, // Size increase per hit
    speedDecrease: 0.1, // Speed decrease per hit
    special: "sizeSpeedChange"
  },
  offenderStaff: {
    name: "Offender Staff",
    ability: "Shoots a vine from the weapon position that attacks the opponent ball on contact and healing the user ball.",
    skins: ["Default", "Nature's Wrath", "Thorn Whip", "Vine Staff"],
    color: ["#228b22ff", "#32cd32ff", "#006400ff", "#556b2fff"],
    damage: 20, // Also healing amount
    special: "vineAttack"
  },
  broadcast: {
    name: "Broadcast",
    ability: "Places down a TV that drains health and explodes on a radius of the opponent. User ball can teleport to a TV, causing speed increment.",
    skins: ["Default", "Veeronica", "Television", "Badware"],
    color: ["#0bdb99ff", "#ffbedb", "#868686ff", "#00ff62ff"],
    tvColor: ["#0bdb99ff", "#ffbedb", "#868686ff", "#00ff62ff"], // the border colour
    damage: 15,
    health: 90,
    tvHealth: 45,
    tvDrainage: 10, // Per second
    speedBoost: '25%', // Speed increase, meaning 125% for 10 seconds
    damageBoost: 30, // For 10 seconds
    special: "broadcastTv"
  },
  being: {
    name: "Powerful Being",
    ability: "Works differently from other balls. Clock-shaped and will become more powerful over time.",
    skins: ["Default", "Command Block"],
    color: ["#281e04ff", "#f1dc9cff"],
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
    skins: ["Default", "Noli"],
    color: ["#000000ff", "#600a9dff"],
    damage: 15,
    special: "confuseOpponent"
  }
};

const maps = {
  arena: {
    name: "Arena",
    description: "Standard battlefield with no obstacles.",
    background: "#f0f0f0",
    obstacles: []
  },
  maze: {
    name: "Maze",
    description: "Navigate through walls and corridors.",
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
    background: "#d0d0d0",
    obstacles: [
      {x: 90, y: 90, width: 70, height: 70, backgroundColor: "#808080"},
      {x: 110, y: 110, width: 30, height: 30 , backgroundColor: "#606060"}
    ]
  },
  theHQ: {
    name: "The HQ",
    description: "Complex abandoned headquarters with multiple obstacles. Who knows what happened here?",
    background: "#6c6b6bff",
    obstacles: [
      {x: 65, y: 64, width: 120, height: 120, backgroundColor: "#088fc9ff"},
      {x: 80, y: 80, width: 90, height: 90, backgroundColor: "#707070"},
      {x: 100, y: 100, width: 50, height: 50, backgroundColor: "#505050"},
      {x: 115, y: 115, width: 20, height: 20, text: "HQ", fontSize: "8px", color: "#088fc9ff"}
    ]
  },
  baseplate: {
    name: "Baseplate",
    description: "Abandoned baseplate, with broken scripts.",
    background: "#646564ff",
    obstacles: []
  }
};

// Game state
let selectedMap = 'arena';
let selectedGamemode = 'classic';
let survivalSettings = { goodBalls: 8, evilBalls: 1 };
let gameSettings = { speed: 1, showHealth: true, autoRestart: false };

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
        let originClass = '';
        
        if ((weaponKey === 'sword' && (skin === 'Golden' || skin === 'Netherite' || skin === 'Ruby')) || (weaponKey === 'nuke' && (skin === 'TNT')) || (weaponKey === 'being' && (skin === 'Command Block')) || (weaponKey === 'builder' && (skin === 'Iron Pickaxe'))) {
          originClass = 'minecraft';
        } else if ((weaponKey === 'builder' && (skin === 'Artful' || skin === 'Swapful')) || (weaponKey === 'sword' && (skin === 'Clawsguy' || skin === 'Pursuer')) || (weaponKey === 'cloner' && skin === 'Devesto') || (weaponKey === 'firingRange' && skin === 'Killdroid') || (weaponKey === 'revolver' && skin === 'Gunslinger') || (weaponKey === 'broadcast' && skin === 'Badware')) {
          originClass = 'dieOfDeath';
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
          itemAsylum: 'Originates from Item Asylum!',
          forsaken: 'Originates from Forsaken!',
          bfdi: 'Originates from BFDI!',
          somethingEvil: 'Originates from Something Evil Will Happen!',
          original: 'Original'
        };
        
        const borderRadius = weaponKey === 'being' ? '15%' : originClass === 'minecraft' ? '0%' : '50%';
        
        return `
          <div class="skin-card ${originClass}" onclick="selectSkin('${weaponKey}', ${index})">
            <div class="skin-preview" style="background: ${skinColor}; border-radius: ${borderRadius};"></div>
            <div class="skin-info">
              <h5>${skin}</h5>
              <p>${originText[originClass]}</p>
            </div>
          </div>
        `;
      }).join("")
    : "<p>No skins available</p>";

  // Set info content with consistent styling
  shopInfoSection.innerHTML = `
    <style>
      .shop-info-content { padding: 15px; }
      .skin-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 8px; margin: 10px 0; }
      .skin-card { background: #f5f5f5; border: 2px solid #ddd; padding: 8px; cursor: pointer; transition: all 0.2s; }
      .skin-card:hover { background: #e6f3ff; border-color: #4CAF50; }
      .skin-card.minecraft { border-color: #8dca8f; }
      .skin-card.minecraft:hover { border-color: #6ba86f; background: #f0fff0; }
      .skin-card.dieOfDeath { border-color: #ffc0c0; }
      .skin-card.dieOfDeath:hover { border-color: #ff9999; background: #fff5f5; }
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
      .shop-buttons { margin-top: 15px; }
      .shop-buttons .button { margin: 0 5px 5px 0; }
    </style>
    <div class="shop-info-content">
      <h3>${weapon.name}</h3>
      <p><strong>Damage:</strong> ${weapon.damage || weapon.baseDamage || 'Variable'}</p>
      <p id="abilityText">${weapon.ability}</p>
      
      <div id="skinsSection" style="display:none;">
        <div class="skin-grid">
          ${skinsHTML}
        </div>
      </div>

      <div class="shop-buttons">
        <button class="button" id="equipButton">Equip Default</button>
        <button class="button" id="toggleViewButton">View Skins</button>
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

  toggleButton.addEventListener("click", () => {
    const showingSkins = skinsSection.style.display === "block";
    skinsSection.style.display = showingSkins ? "none" : "block";
    abilityText.style.display = showingSkins ? "block" : "none";
    toggleButton.textContent = showingSkins ? "View Skins" : "View Info";
  });

  closeButton.addEventListener("click", () => {
    shopInfoSection.style.display = "none";
  });

  equipButton.addEventListener("click", () => {
    equipWeapon(weaponKey);
  });
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
    survival: { name: "Survival", description: "8 balls vs 1 evil ball" }
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
  shopSection.innerHTML = `
    <style>
      .settings-container { padding: 20px; }
      .settings-section { margin: 20px 0; border: 1px solid #ddd; padding: 15px; }
      .settings-section h3 { margin: 0 0 10px; color: #333; }
      .setting-row { margin: 10px 0; display: flex; align-items: center; gap: 10px; }
      .setting-row label { min-width: 120px; }
      .setting-row input, .setting-row select { width: 80px; padding: 5px; }
      .setting-row input[type="checkbox"] { width: auto; }
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
      </div>
      
      <div class="setting-row">
        <button class="button" onclick="applySettings()">Apply Settings</button>
        <button class="button" onclick="resetSettings()">Reset to Default</button>
      </div>
    </div>
  `;
}

function applySettings() {
  const goodBalls = parseInt(document.getElementById('goodBallsInput').value);
  const evilBalls = parseInt(document.getElementById('evilBallsInput').value);
  const gameSpeed = parseFloat(document.getElementById('gameSpeedSelect').value);
  const showHealth = document.getElementById('showHealthCheck').checked;
  const autoRestart = document.getElementById('autoRestartCheck').checked;
  
  if (goodBalls >= 1 && goodBalls <= 15 && evilBalls >= 1 && evilBalls <= 5) {
    survivalSettings.goodBalls = goodBalls;
    survivalSettings.evilBalls = evilBalls;
    gameSettings.speed = gameSpeed;
    gameSettings.showHealth = showHealth;
    gameSettings.autoRestart = autoRestart;
    alert('Settings applied!');
  }
}

function resetSettings() {
  survivalSettings = { goodBalls: 8, evilBalls: 1 };
  gameSettings = { speed: 1, showHealth: true, autoRestart: false };
  generateSettingsHTML();
  alert('Settings reset to default!');
}


// Toggle shop/maps/gamemodes open/close
if (shopButton && mapButton && gamemodeButton && shopSection && shopInfoSection && settingsButton) {
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
  
  const weaponKeys = Object.keys(weapons);
  balls = [];
  
  if (selectedGamemode === 'classic') {
    // Classic: Create two balls with equipped weapons or random
    for (let i = 0; i < 2; i++) {
      const side = i === 0 ? 'left' : 'right';
      const weaponKey = equippedWeapons[side] || weaponKeys[Math.floor(Math.random() * weaponKeys.length)];
      const weapon = weapons[weaponKey];
      const skinIndex = equippedWeapons[side] ? equippedSkins[side] : 0;
      createBall(i, weaponKey, weapon, skinIndex, i === 0 ? 20 : 180, 100, i === 0 ? 3 : -3);
    }
  } else if (selectedGamemode === 'survival') {
    // Survival: good balls + evil balls
    for (let i = 0; i < survivalSettings.goodBalls; i++) {
      const weaponKey = weaponKeys[Math.floor(Math.random() * weaponKeys.length)];
      const weapon = weapons[weaponKey];
      const randomSkin = Math.floor(Math.random() * weapon.skins.length);
      const cols = Math.ceil(Math.sqrt(survivalSettings.goodBalls));
      const x = 20 + (i % cols) * (210 / cols);
      const y = 20 + Math.floor(i / cols) * 40;
      createBall(i, weaponKey, weapon, randomSkin, x, y, (Math.random() - 0.5) * 4, false);
    }
    // Evil balls
    for (let i = 0; i < survivalSettings.evilBalls; i++) {
      const evilWeaponKey = weaponKeys[Math.floor(Math.random() * weaponKeys.length)];
      const evilWeapon = weapons[evilWeaponKey];
      const evilSkin = Math.floor(Math.random() * evilWeapon.skins.length);
      const x = 125 + (i - survivalSettings.evilBalls/2) * 40;
      const y = 125;
      createBall(survivalSettings.goodBalls + i, evilWeaponKey, evilWeapon, evilSkin, x, y, 0, true);
    }
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
    health: isEvil ? 1000 : (weaponKey === 'being' ? weapon.health : 100),
    maxHealth: isEvil ? 1000 : (weaponKey === 'being' ? weapon.health : 100),
    weapon: weaponKey,
    side: index,
    damageBonus: 0,
    hitCount: 0,
    spinAngle: 0,
    spinSpeed: weaponKey === 'dagger' ? 8 : weaponKey === 'revolver' ? 2 : weaponKey === 'builder' ? 4 : weaponKey === 'being' ? 1 : weaponKey === 'spear' ? 3 : 5,
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
    originalSpeed: { vx: vx, vy: (Math.random() - 0.5) * 3 }
  };
  
  const ballColor = weapon.color[skinIndex] || weapon.color[0];
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
  
  ball.element.textContent = weapon.name.charAt(0);
  
  // Create weapon visual with image (hide for unarmed, dummy, nuke, cloner, being, firingRange, hallucination, bomber, giant)
  if (weaponKey !== 'unarmed' && weaponKey !== 'dummy' && weaponKey !== 'nuke' && weaponKey !== 'cloner' && weaponKey !== 'being' && weaponKey !== 'firingRange' && weaponKey !== 'hallucination' && weaponKey !== 'bomber' && weaponKey !== 'giant' && weaponKey !== 'broadcast') {
    const skinName = weapon.skins[skinIndex].toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
    const defaultName = weapon.skins[0].toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
    
    // Try to load specific skin image, fallback to default if it fails
    const testImg = new Image();
    testImg.onload = () => {
      ball.weaponElement.style.backgroundImage = `url('Icons/ball/${weaponKey}_${skinName}.png')`;
    };
    testImg.onerror = () => {
      ball.weaponElement.style.backgroundImage = `url('Icons/ball/${weaponKey}_${defaultName}.png')`;
    };
    testImg.src = `Icons/ball/${weaponKey}_${skinName}.png`;
    
    ball.weaponElement.style.cssText = `
      position: absolute;
      width: 30px;
      height: 30px;
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
  
  bullet.element.style.cssText = `
    position: absolute;
    width: 3px;
    height: 3px;
    background: yellow;
    border-radius: 50%;
    left: ${bullet.x}px;
    top: ${bullet.y}px;
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

// Equip weapon function
function equipWeapon(weaponKey) {
  const side = prompt("Which side? (left/right)")?.toLowerCase();
  if (side === 'left' || side === 'right') {
    equippedWeapons[side] = weaponKey;
    equippedSkins[side] = 0; // Default skin
    alert(`${weapons[weaponKey].name} equipped to ${side} side!`);
  } else {
    alert("Please enter 'left' or 'right'");
  }
}

// Generate shop HTML
function generateShopHTML() {
  const allWeapons = Object.keys(weapons);
  
  const weaponCards = allWeapons.map(weaponKey => {
    const weapon = weapons[weaponKey];
    const ballColor = weapon.color[0];
    const isSpecial = ['being', 'hallucination'].includes(weaponKey);
    
    return `
      <div class="weapon-card ${isSpecial ? 'special' : 'main'}" data-weapon="${weaponKey}">
        <div class="ball-preview" style="background: ${ballColor}; border-radius: ${weaponKey === 'being' ? '15%' : '50%'};"></div>
        <div class="weapon-info">
          <h4>${weapon.name}</h4>
          <p class="damage">Damage: ${weapon.damage || weapon.baseDamage || 'Variable'}</p>
          <p class="ability">${weapon.ability}</p>
        </div>
      </div>
    `;
  }).join('');
  
  shopSection.innerHTML = `
    <style>
      .weapon-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; padding: 10px; }
      .weapon-card { background: #f9f9f9; border: 2px solid #ddd; padding: 10px; cursor: pointer; transition: all 0.2s; }
      .weapon-card:hover { background: #e6f3ff; border-color: #4CAF50; }
      .weapon-card.special { border-color: #ff6b6b; }
      .weapon-card.special:hover { border-color: #ff4757; }
      .ball-preview { width: 30px; height: 30px; margin: 0 auto 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 12px; }
      .weapon-info h4 { margin: 0 0 5px; color: #333; }
      .weapon-info .damage { margin: 0; font-size: 12px; color: #666; }
      .weapon-info .ability { margin: 5px 0 0; font-size: 11px; color: #888; }
    </style>
    <h1>Weapon Shop</h1>
    <div class="weapon-grid">
      ${weaponCards}
    </div>
  `;
  
  // Re-attach weapon card listeners
  document.querySelectorAll(".weapon-card").forEach(card => {
    card.addEventListener("click", () => {
      const weaponKey = card.getAttribute("data-weapon");
      showWeaponInfo(weaponKey);
    });
  });
}

// Initialize fighting balls on page load
document.addEventListener("DOMContentLoaded", () => {
  generateShopHTML();
  settingsButton.style.display = 'inline-flex'; // Always show settings
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
  } else if (selectedGamemode === 'classic') {
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
        default:
          return `Damage: ${currentDamage}`;
      }
    }
    
    statusDiv.style.display = 'block';
    statusDiv.innerHTML = `
      <p>Left: ${weapons[balls[0].weapon].name} (${weapons[balls[0].weapon].skins[balls[0].skinIndex]}) - ${getAbilityStatus(balls[0])}</p>
      <p>Right: ${weapons[balls[1].weapon].name} (${weapons[balls[1].weapon].skins[balls[1].skinIndex]}) - ${getAbilityStatus(balls[1])}</p>
    `;
  }
}

// Start the game
function startGame() {
  gameRunning = true;
  const startGame = document.getElementById('startGame')
  const settingsButton = document.getElementById('settingsButton')
  startGame.style.display = 'none';
  // Hide shop sections
  shopSection.style.display = 'none';
  shopInfoSection.style.display = 'none';
  
  // Initialize game status
  if (selectedGamemode === 'survival') {
    settingsButton.style.display = 'none';
    gameStartTime = Date.now();
  }
  updateGameStatus();
  
  gameLoop();
}

// Main game loop
function gameLoop() {
  if (!gameRunning) return;
  
  // Update ball positions and weapons
  balls.forEach(ball => {
    ball.x += ball.vx;
    ball.y += ball.vy;
    
    // Bounce off walls
    if (ball.x <= 0 || ball.x >= 220) ball.vx *= -1;
    if (ball.y <= 0 || ball.y >= 220) ball.vy *= -1;
    
    // Check collision with map obstacles
    const currentMap = maps[selectedMap];
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
    ball.x = Math.max(0, Math.min(220, ball.x));
    ball.y = Math.max(0, Math.min(220, ball.y));
    
    // Update ball position
    ball.element.style.left = ball.x + 'px';
    ball.element.style.top = ball.y + 'px';
    
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
    
    // Update weapon spinning and rotation (skip for unarmed, dummy, nuke, cloner, being, firingRange, hallucination, bomber, giant)
    let weaponX, weaponY;
    if (ball.weapon !== 'unarmed' && ball.weapon !== 'dummy' && ball.weapon !== 'nuke' && ball.weapon !== 'cloner' && ball.weapon !== 'being' && ball.weapon !== 'firingRange' && ball.weapon !== 'hallucination' && ball.weapon !== 'bomber' && ball.weapon !== 'giant') {
      ball.spinAngle += ball.spinSpeed;
      weaponX = ball.x + 15 + Math.cos(ball.spinAngle * Math.PI / 180) * 25;
      weaponY = ball.y + 15 + Math.sin(ball.spinAngle * Math.PI / 180) * 25;
      ball.weaponElement.style.left = weaponX + 'px';
      ball.weaponElement.style.top = weaponY + 'px';
      ball.weaponElement.style.transform = `rotate(${ball.spinAngle}deg)`;
      
      // Revolver bullet shooting
      if (ball.weapon === 'revolver' && ball.spinAngle % 120 < ball.spinSpeed) {
        createBullet(ball, weaponX, weaponY);
      }
      
      // Builder wall placement
      if (ball.weapon === 'builder' && ball.spinAngle % 90 < ball.spinSpeed) {
        createWall(ball, weaponX, weaponY);
      }
      
      // Builder construction sign placement
      if (ball.weapon === 'builder' && ball.spinAngle % 180 < ball.spinSpeed) {
        createConstructionSign(ball, weaponX, weaponY);
      }
      
      // Broadcast TV placement
      if (ball.weapon === 'broadcast' && ball.spinAngle % 120 < ball.spinSpeed) {
        createTV(ball, weaponX, weaponY);
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
    
    // Update nuke timer
    if (ball.weapon === 'nuke' && ball.nukeTimer > 0) {
      ball.nukeTimer -= 0.016; // Roughly 60fps
      ball.element.textContent = Math.ceil(ball.nukeTimer);
      if (ball.nukeTimer <= 0) {
        // Nuke explodes - everyone dies
        gameRunning = false;
        setTimeout(() => {
          alert('Nuke exploded! Everyone dies!');
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
                  alert(`${weapons[ball.weapon].name} (${weapons[ball.weapon].skins[ball.skinIndex]})'s clone eliminated ${weapons[enemyBall.weapon].name} (${weapons[enemyBall.weapon].skins[enemyBall.skinIndex]})!`);
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
        
        const ballDistance = Math.sqrt((ball1.x - ball2.x) ** 2 + (ball1.y - ball2.y) ** 2);
        
        // Ball-to-ball collision for unarmed, dummy, and being
        if (ballDistance < 30) {
          if (ball1.weapon === 'unarmed' || ball1.weapon === 'dummy' || ball1.weapon === 'being') {
            handleWeaponHit(ball1, ball2);
          }
          if (ball2.weapon === 'unarmed' || ball2.weapon === 'dummy' || ball2.weapon === 'being') {
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
                    alert(`${weapons[ball.weapon].name} (${weapons[ball.weapon].skins[ball.skinIndex]}) was crushed by ${weapons[otherBall.weapon].name} (${weapons[otherBall.weapon].skins[otherBall.skinIndex]})'s wall!`);
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
  const dieOfDeathSkins = ['Artful', 'Swapful', 'Clawsguy', 'Pursuer', 'Devesto', 'Killdroid', 'Gunslinger', 'Badware'];
  const minecraftSkins = ['Ruby', 'Golden', 'Netherite', 'TNT', 'Command Block', 'Iron Pickaxe'];
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

// Cleanup game function
function cleanupGame() {
  balls.forEach(ball => {
    ball.bullets.forEach(bullet => bullet.element.remove());
    ball.walls.forEach(wall => wall.element.remove());
    ball.constructionSigns.forEach(sign => sign.element.remove());
    ball.tvs.forEach(tv => tv.element.remove());
    ball.clones.forEach(clone => clone.element.remove());
    ball.element.remove();
    if (ball.weapon !== 'unarmed' && ball.weapon !== 'dummy' && ball.weapon !== 'nuke' && ball.weapon !== 'cloner' && ball.weapon !== 'being' && ball.weapon !== 'firingRange' && ball.weapon !== 'hallucination' && ball.weapon !== 'bomber' && ball.weapon !== 'giant') {
      ball.weaponElement.remove();
    }
  });
  const startGame = document.getElementById('startGame')
  const settingsButton = document.getElementById('settingsButton');
  startGame.style.display = 'inline-flex';
  // Show shop sections again
  shopButton.textContent = 'Shop';
  mapButton.textContent = 'Maps';
  gamemodeButton.textContent = 'Gamemodes';
  settingsButton.textContent = 'Settings';
  gameStatus.innerHTML = '';
  settingsButton.style.display = 'inline-flex';
}

// Handle weapon hit
function handleWeaponHit(attacker, defender) {
  // Calculate weapon-specific damage
  let damage = weapons[attacker.weapon].damage + attacker.damageBonus;
  
  // Apply weapon special abilities
  if (attacker.weapon === 'sword') {
    attacker.damageBonus += 5; // Stacking damage
  } else if (attacker.weapon === 'dagger') {
    attacker.spinSpeed += 2; // Faster spinning
  } else if (attacker.weapon === 'revolver') {
    damage *= 1.5; // Triple shot effect
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
    // Spear increases damage every hit
    attacker.damageBonus += 3;
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
    damage = weapons[attacker.weapon].damage;
  } else if (attacker.weapon === 'broadcast') {
    // Broadcast damage with boost
    const baseDamage = weapons[attacker.weapon].damage;
    const boostDamage = attacker.speedBoostTimer > 0 ? weapons.broadcast.damageBoost : 0;
    damage = baseDamage + boostDamage + attacker.damageBonus;
  }
  
  attacker.hitCount++;
  defender.health -= damage;
  
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
  
  // Update game status in survival mode
  if (selectedGamemode === 'survival') {
    updateGameStatus();
  }
  
  // Check for death
  if (defender.health <= 0) {
    if (selectedGamemode === 'survival') {
      // Remove dead ball from game
      const index = balls.indexOf(defender);
      if (index > -1) {
        balls.splice(index, 1);
        defender.element.remove();
        if (defender.weaponElement) defender.weaponElement.remove();
      }
      
      updateGameStatus();
      
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
        alert(getDeathMessage(attacker, defender));
        cleanupGame();
      }, 500);
    }
    return;
  }
}