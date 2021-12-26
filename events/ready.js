const client = require('../index')
const prefix = process.env.PREFIX
console.log("vjp")
const activities_list = [
    "Đổi token cc",// ghi vào cho vui <3
    "Bot by Floppa and Lucius",
]; // creates an arraylist containing phrases you want your bot to switch through.
console.log("mai")
client.on('ready', () => {

      console.log(`${client.user.tag} is online`)

    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index], { type: 'PLAYING' }); // sets bot's activities to one of the phrases in the arraylist.
    }, 1000); //  mnnnnnnnnnnnnnnnnnn45
});