// Journal prompts grouped by mood. When "random" is selected we pull from
// every category flattened together.

export const MOODS = [
  { id: "creative", label: "Creative" },
  { id: "happy", label: "Happy" },
  { id: "sad", label: "Sad" },
  { id: "enraged", label: "Enraged" },
  { id: "nostalgic", label: "Nostalgic" },
  { id: "melancholic", label: "Melancholic" },
  { id: "grief", label: "In grief" },
];

export const RANDOM_MOOD = { id: "random", label: "Give me anything" };

// A small, companion-style headline the prompt view uses above the paper.
export const MOOD_HEADLINES = {
  creative: "A spark for your creative mind:",
  happy: "Here's a prompt to sit with the joy:",
  sad: "Here's a prompt to soak in the sadness:",
  enraged: "Here's a prompt to let the fire speak:",
  nostalgic: "Here's a prompt for the wistful wanderer:",
  melancholic: "Here's a prompt for the quiet blue:",
  grief: "Here's a gentle prompt for today:",
  random: "Because you're up for anything... here's today's prompt:",
};

export const PROMPTS = {
  creative: [
    "Invent a small ritual you'd perform before starting any creative work.",
    "Describe an object from your childhood as if it were a character.",
    "Write a scene set entirely inside a single color.",
    "What would your hands make if they never got tired?",
    "Imagine a museum of feelings. Which room do you visit first?",
    "Describe a sound you've never heard but desperately want to.",
    "If your current mood were a building, what would it look like?",
  ],
  happy: [
    "What small thing today felt disproportionately good?",
    "Describe a moment this week you'd press pause on and live in forever.",
    "Who or what made you feel seen lately?",
    "What's something you're quietly proud of?",
    "List five tiny luxuries that cost almost nothing.",
    "Describe happiness as a weather pattern.",
    "What would you tell last year's version of you right now?",
  ],
  sad: [
    "What is the sadness trying to show you?",
    "Write a letter to the part of yourself that's hurting.",
    "Describe a color that matches how today feels.",
    "What comfort, however small, is available to you right now?",
    "If your sadness had a shape, what would you do with it?",
    "Whose voice would you want beside you at this moment, and why?",
    "What do you need to let go of, even just a little?",
  ],
  enraged: [
    "Write everything you wish you'd said, without editing.",
    "What boundary is your anger pointing at?",
    "Describe the anger as a creature. What does it want?",
    "Whose expectation are you no longer willing to carry?",
    "If this anger were heat, what would it cook, and what would it burn?",
    "What old story is this rage actually finishing?",
    "Write a letter you'll never send to the person you're angriest at.",
  ],
  nostalgic: [
    "What smell transports you somewhere? Describe the place.",
    "Write about a song that belongs to a specific summer of your life.",
    "Which version of yourself do you miss the most?",
    "Describe a room from a house you no longer live in.",
    "What tradition from your past would you want to resurrect?",
    "Who would you text right now if time didn't matter?",
    "Write about a meal that tastes like a memory.",
  ],
  melancholic: [
    "What quiet ache have you been carrying?",
    "Describe the feeling of rain through a window.",
    "What beautiful thing makes you a little sad?",
    "Write about something ending that you haven't fully mourned.",
    "Describe a goodbye that still lingers.",
    "What would it look like to honor this sadness instead of fix it?",
    "Write a love letter to a season that's leaving.",
  ],
  grief: [
    "What do you wish you could tell them today?",
    "Describe a small object that holds their presence for you.",
    "What did they teach you, even without trying?",
    "Write about a sound, smell, or place that brings them back.",
    "What part of them lives in how you move through the world?",
    "If grief had a room in you, how would you furnish it?",
    "What do you want to keep? What is okay to soften?",
  ],
};

// Helper: get a pool of prompts for a given mood id ("random" = all).
export function getPromptPool(moodId) {
  if (!moodId || moodId === "random") {
    return Object.values(PROMPTS).flat();
  }
  return PROMPTS[moodId] ?? [];
}

// Get a random prompt, optionally avoiding the current one so two
// consecutive pulls don't repeat the same string.
export function getRandomPrompt(moodId, avoid) {
  const pool = getPromptPool(moodId);
  if (pool.length === 0) return "";
  if (pool.length === 1) return pool[0];
  let next = pool[Math.floor(Math.random() * pool.length)];
  let safety = 0;
  while (next === avoid && safety < 8) {
    next = pool[Math.floor(Math.random() * pool.length)];
    safety += 1;
  }
  return next;
}
