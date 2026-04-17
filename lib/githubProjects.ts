export interface GitHubProject {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  readmePreview?: string;
}

export const githubProjects: GitHubProject[] = [
    {
  id: 1,
  name: "rivonix-eventflow",
  description: "Production-ready event system & state management for Unity. Revolutionizes how Unity games handle communication between components, eliminates spaghetti code, and promotes clean, maintainable architecture.",
  html_url: "https://github.com/ritheshrao197/rivonix-eventflow",
  topics: ["unity", "event-driven", "csharp", "architecture", "state-management"],
  readmePreview: "EventBus.Trigger(new PlayerDamagedEvent { damage = 10 }); // Any system can listen without the player knowing. Built for performance and developer experience – eliminates tight coupling and promotes clean architecture.",
},
  {
    id: 2       ,
    name: "YesCheff!",
    description: "Fast-paced 3D cooking game where players move around a kitchen, grab ingredients, prepare them at various stations, and fulfill customer orders within a time limit.",
    html_url: "https://github.com/ritheshrao197/YesCheff-",
    topics: ["unity", "game-development", "csharp", "event-driven", "state-machine"],
    readmePreview: "Event-driven architecture, state machine game loop, data-driven design with ScriptableObjects, and an AES-encrypted save system for high scores.",
  },
  {
    id: 3,
    name: "Jurassic World (Unity)",
    description: "Turn-based dinosaur battle game built in Unity 2022.3.62f3. Features ability system, status effects, turn order based on speed, and event-driven UI.",
    html_url: "https://github.com/ritheshrao197/jurassic-world",
    topics: ["unity", "turn-based", "rpg", "csharp", "event-bus"],
    readmePreview: "BattleCoordinator drives turn loop, CombatUnit with stat blocks, ability/status effect system, ServiceLocator for DI, and ScriptableObject data.",
  },
  {
    id: 4,
    name: "DiceRoll – Spirit Cards",
    description: "Unity prototype where the player rolls a 3D die, updates a score equation, and triggers spirit card effects based on the result.",
    html_url: "https://github.com/ritheshrao197/DiceRoll",
    topics: ["unity", "prototype", "dice", "event-driven"],
    readmePreview: "Physics-based dice rolling, event-driven architecture, ScriptableObject cards, and debug panel for forced results.",
  },
  {
    id: 5           ,
    name: "Caliberly_CardMatch",
    description: "Memory matching card game – test your recall by flipping pairs of cards.",
    html_url: "https://github.com/ritheshrao197/Caliberly_CardMatch",
    topics: ["unity", "card-game", "memory-match"],
    readmePreview: "Simple card matching mechanics with timer and move counter.",
  },
  {
    id: 6,
    name: "Tic-tak-toe",
    description: "Classic Tic‑Tac‑Toe game with clean UI and two‑player mode.",
    html_url: "https://github.com/ritheshrao197/Tic-tak-toe",
    topics: ["unity", "tic-tac-toe", "local-multiplayer"],
    readmePreview: "Minimal implementation of the classic game with win detection and reset.",
  },
  {
    id: 7,
    name: "Card-Duel",
    description: "Turn‑based card dueling game where players battle using custom decks and abilities.",
    html_url: "https://github.com/ritheshrao197/Card-Duel",
    topics: ["unity", "card-game", "turn-based", "strategy"],
    readmePreview: "Card system, mana/energy management, and AI opponent.",
  },
];