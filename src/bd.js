// Define the recipient and the message content
const recipient = "Dear Instructor and Mentor,";
const message = `
🎉🎉 *Happy Birthday* 🎉🎉

_${recipient}_,

Today marks another year of your amazing journey, and I'm so grateful for all the knowledge and wisdom you've shared with me. 🙏✨

On this special day, I wish you endless joy, success, and good health. May your path continue to inspire, and your days be filled with happiness. 🌟

Thank you for being such an incredible mentor and guide. Wishing you a year filled with blessings and achievements. 🎂🎁

🎊 *Happy Birthday once again!* 🎊
`;

// Generate WhatsApp share link
const encodedMessage = encodeURIComponent(message);
const whatsappLink = `https://wa.me/?text=${encodedMessage}`;

console.log(`Send this link via WhatsApp: ${whatsappLink}`);
