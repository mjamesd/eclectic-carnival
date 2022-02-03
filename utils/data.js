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
const thoughts = [];
// We don't want to seed the Thoughts collection because we
// need to insert each Thought's ID into the user's User document

// Export the functions for use in seed.js =====================
module.exports = { users, thoughts };