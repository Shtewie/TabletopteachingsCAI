// ═══════════════════════════════════════════════════════════════
// ADVENTURES DATA — everything on the /adventures/ page comes from
// this file. Edit the text below to update campaigns; no other
// files need to change.
//
// TO ADD A NEW CAMPAIGN: copy one of the objects below (from the
// opening { to the closing },), paste it into the ADVENTURES array,
// and change its "slug" to something new and unique (lowercase,
// dashes instead of spaces).
//
// TO REMOVE A CAMPAIGN: delete its whole { ... }, block below.
//
// Notes:
//  - "tone" picks the colour theme. Choose one of:
//    quest-1 (blue), quest-2 (purple), quest-3 (green),
//    quest-4 (orange), quest-5 (pink), quest-6 (indigo)
//  - In "world", add the newest session at the BOTTOM of the list.
//  - In "objectives", "skill" must be exactly "Reading", "Writing"
//    or "Social". Flip "done" to true once the party has achieved it.
//  - Keep all commas — each field is separated by a comma.
// ═══════════════════════════════════════════════════════════════

const ADVENTURES = [
  {
    slug: "lantern-marsh",
    name: "The Lantern Marsh",
    tagline: "A soggy mystery with very polite frogs",
    tone: "quest-3",
    group: "Ages 8–10 · Party of 4",
    sessions: "Session 6 of 10",
    blurb:
      "The marsh lanterns have gone out one by one, and the frogfolk of Reedhome need heroes small enough to sneak through the reeds and brave enough to ask the right questions.",
    world: [
      {
        session: "Session 1",
        title: "Arrival at Reedhome",
        body: "The party met Mayor Bulrush and learned the lanterns keep the mist-things away. They were each given a reed charm.",
      },
      {
        session: "Session 3",
        title: "The Sunken Library",
        body: "Under the water sat a library of waterproof books. The heroes read three clues aloud to open the door.",
      },
      {
        session: "Session 5",
        title: "The Lamplighter's Letter",
        body: "A half-burnt letter revealed the old lamplighter did not vanish — she is hiding. The party wrote a reply and sent it by heron.",
      },
      {
        session: "Session 6",
        title: "Into the Deep Reeds",
        body: "Currently exploring the deep reeds, following heron tracks toward a hidden houseboat.",
      },
    ],
    characters: [
      { name: "Pipwick Marsh", player: "Player A", role: "Halfling Ranger", note: "Keeps a field journal of every animal the party meets." },
      { name: "Sir Bramble", player: "Player B", role: "Tortle Paladin", note: "Has sworn an oath to never let a friend go hungry." },
      { name: "Nettle", player: "Player C", role: "Goblin Artificer", note: "Built a lantern that only lights when someone tells the truth." },
      { name: "Moss", player: "Player D", role: "Frogfolk Bard", note: "Composes a short rhyme at the end of every session." },
    ],
    objectives: [
      { label: "Read a short passage aloud to the group", skill: "Reading", done: true },
      { label: "Find key details in a written clue", skill: "Reading", done: true },
      { label: "Write an in-character letter", skill: "Writing", done: true },
      { label: "Describe a place using three senses", skill: "Writing", done: false },
      { label: "Take turns without interrupting", skill: "Social", done: true },
      { label: "Negotiate a plan the whole party agrees on", skill: "Social", done: false },
    ],
  },
  {
    slug: "clockwork-caravan",
    name: "The Clockwork Caravan",
    tagline: "Inventors, deserts and one very lost robot",
    tone: "quest-4",
    group: "Ages 10–12 · Party of 5",
    sessions: "Session 4 of 8",
    blurb:
      "A travelling caravan of tinkerers rolls across the Amber Waste. Its engine is failing, its map is wrong, and the only one who remembers the way is a rusted automaton who speaks in riddles.",
    world: [
      {
        session: "Session 1",
        title: "Hired at Brasswell",
        body: "The party joined the caravan as guards and were each handed a toolbelt and a job title.",
      },
      {
        session: "Session 2",
        title: "The Riddle of Cog",
        body: "Cog the automaton would only answer questions asked politely and precisely. The party wrote their questions down first.",
      },
      {
        session: "Session 4",
        title: "Sandstorm Council",
        body: "Currently sheltering from a storm and debating whether to trust the merchant Halba.",
      },
    ],
    characters: [
      { name: "Zia Sparkwrench", player: "Player E", role: "Gnome Inventor", note: "Draws a diagram of every machine she meets." },
      { name: "Ordo", player: "Player F", role: "Dragonborn Fighter", note: "Appointed caravan captain by unanimous vote." },
      { name: "Little Fen", player: "Player G", role: "Human Scout", note: "Keeps the party's map and updates it each session." },
      { name: "Marbleye", player: "Player H", role: "Warforged Cleric", note: "Collects sayings and writes them on their own arm." },
      { name: "Tamsin", player: "Player I", role: "Tiefling Rogue", note: "Negotiated the party's pay up by two gold each." },
    ],
    objectives: [
      { label: "Read instructions and follow them in order", skill: "Reading", done: true },
      { label: "Skim a document for one specific fact", skill: "Reading", done: true },
      { label: "Write clear questions before asking them", skill: "Writing", done: true },
      { label: "Keep a written session log", skill: "Writing", done: false },
      { label: "Give a teammate a compliment in character", skill: "Social", done: true },
      { label: "Disagree respectfully during a group decision", skill: "Social", done: false },
    ],
  },
  {
    slug: "starlit-academy",
    name: "The Starlit Academy",
    tagline: "School for young wizards, monsters in the hallways",
    tone: "quest-2",
    group: "Ages 9–11 · Party of 4",
    sessions: "Session 2 of 12",
    blurb:
      "Term has just begun at an academy that floats above the clouds. There are classes to attend, friends to make, and something scratching behind the observatory wall.",
    world: [
      {
        session: "Session 1",
        title: "Sorting Day",
        body: "Each hero chose a study house and wrote their own school motto.",
      },
      {
        session: "Session 2",
        title: "The Scratching Wall",
        body: "Currently investigating strange noises in the observatory after curfew.",
      },
    ],
    characters: [
      { name: "Ives Quill", player: "Player J", role: "Apprentice Wizard", note: "Takes notes in every class, magical or not." },
      { name: "Bo Tumble", player: "Player K", role: "Apprentice Monk", note: "Elected class representative in session one." },
      { name: "Wren", player: "Player L", role: "Apprentice Druid", note: "Adopted a school owl named Professor." },
      { name: "Ash Vell", player: "Player M", role: "Apprentice Sorcerer", note: "Wrote the house motto the whole group voted for." },
    ],
    objectives: [
      { label: "Read a short story and retell it", skill: "Reading", done: true },
      { label: "Sound out unfamiliar words with support", skill: "Reading", done: false },
      { label: "Write a motto or short creative line", skill: "Writing", done: true },
      { label: "Write a character backstory paragraph", skill: "Writing", done: false },
      { label: "Introduce yourself to a new group", skill: "Social", done: true },
      { label: "Ask a quieter player for their idea", skill: "Social", done: false },
    ],
  },
];

// Colour tone used for each learning skill badge — edit if you want
// Reading / Writing / Social to use different quest colours.
const SKILL_TONE = {
  Reading: "quest-1",
  Writing: "quest-5",
  Social: "quest-3",
};
