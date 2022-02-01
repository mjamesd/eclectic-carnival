// USERS ====================================================
const users = [
  {
    username: `mark`,
    email: `mark@example.com`,
  },
  {
    username: `hilary`,
    email: `hilary@example.org`,
  },
  {
    username: `leon`,
    email: `leon@example.net`,
  },
];

// THOUGHTS ====================================================
const thoughts = [
  {
    thoughtText: "Stargate is soooooo cooooool.",
    username: "mark",
    reactions: [
      {
        reactionBody: "You watch too much!",
        username: "hilary"
      },
      {
        reactionBody: "I want to watch with you, dad!",
        username: "leon"
      },
    ],
  },
  {
    thoughtText: "My favorite sandwich is a reuben.",
    username: "mark",
    reactions: [
      {
        reactionBody: "I want your food!",
        username: "leon"
      },
    ],
  },
  {
    thoughtText: "Buffy is soooooo cooooool.",
    username: "hilary",
    reactions: [
      {
        reactionBody: "We need more content!",
        username: "mark"
      },
      {
        reactionBody: "I want to watch with you, mommy!",
        username: "leon"
      },
    ],
  },
  {
    thoughtText: "My favorite sandwich is a club.",
    username: "hilary",
    reactions: [
      {
        reactionBody: "psh, typical",
        username: "mark"
      },
    ],
  },
  {
    thoughtText: "Twinkle Twinkle Little Star is soooooo cooooool.",
    username: "leon",
    reactions: [
      {
        reactionBody: "I love you! ♥ ♥ ♥",
        username: "hilary"
      },
      {
        reactionBody: "I love you! <3 <3 <3",
        username: "mark"
      },
    ],
  },
  {
    thoughtText: "My favorite sandwich is sunbutter and jelly.",
    username: "leon",
    reactions: [
      {
        reactionBody: "It's so yummy!",
        username: "leon"
      },
      {
        reactionBody: "I ate the other half.",
        username: "mark"
      },
    ],
  },
];

// Export the functions for use in seed.js =====================
module.exports = { users, thoughts };