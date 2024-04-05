const { Client, Intents } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const readline = require('readline-sync');
const m = require("moment-duration-format");
const exp = require('express'); 
const s = exp();

const client = new Client({
  checkUpdate: false
});

s.all('/', (req, res) => { 
  res.send("Ready Dek") 
 })

s.listen(8081, () => { 
  console.log("Port : 8081") 
 })

client.on('ready', async () => {

        if (global.dataWeather && global.dataWeather.current_weather) {
          global.temp = global.dataWeather.current_weather.temperature;
          global.wind = global.dataWeather.current_weather.windspeed

        } else {
          global.temp = 25
          global.wind = 3.5
        }

 const num = parseFloat((Math.random() * 0.2 + 0.1 + Number.EPSILON).toFixed(1));
        const operator = Math.random() < 0.3 ? '+' : '-';

  setInterval(() => {
    const moment = require('moment');
    const created = moment().format('YYYY-MM-DD HH:mm:ss ');
    const change = ['https://cdn.discordapp.com/attachments/1222986989926613043/1225741957985337434/nasna.gif?ex=66223c27&is=660fc727&hm=6a1dc247214b98bd70f8295be4d9baea2c94b67b87e5739888429a9c55620817&']; //รูปใหญ่
     //const poop = ['https://cdn.discordapp.com/attachments/1114551993499918438/1122462459710681170/1095697715238797403.gif','https://cdn.discordapp.com/attachments/1114551993499918438/1122462460817977395/1095697740543049819.gif','https://cdn.discordapp.com/attachments/1114551993499918438/1122462460125921341/1095697719189844048.gif','https://cdn.discordapp.com/attachments/1114551993499918438/1116029023957561425/1110570045454696509.gif']; // รูปเล็ก
    const change2 = [' ']; // ชื่อสลับ
    const yyyt = ['Facebook']; // ชื่อ button1
    const ddds = ['https://www.facebook.com/sirasit.lasama.1']; // ลิ้ง button1

   const iooi = ['Instagram']; // ชื่อ button 2
   const iiio = ['https://www.instagram.com/s1ras1t/']; // ลิ้ง button 2
   const tyyy = yyyt[Math.floor(Math.random()*yyyt.length)]; // ชื่อ button 2
   const sddd = ddds[Math.floor(Math.random()*ddds.length)]; // ลิ้ง button 2
   const oooi = 
iiio[Math.floor(Math.random()*iiio.length)]; // button 1 ใส่ลิ้ง
    const ioii =
iooi[Math.floor(Math.random()*iooi.length)]; // button 1 ใส่ชื่อ
    //const popp =
//poop[Math.floor(Math.random()*poop.length)]; // รูปเล็ก
    const ssss = 
change[Math.floor(Math.random()*change.length)]; // รูปใหญ่
    const dwada = change2[Math.floor(Math.random()*change2.length)]; // ชื่อสลับคำ
    const r = new Discord.RichPresence()
      .setApplicationId('1112701450150232085')
      .setType('STREAMING')
      .setURL('https://www.youtube.com/watch?v=yFg7_bjl2-k')
      .setState(`🍃 : ${global.wind} Km/h | 🌡 : ${global.temp} C°`)
      .setName(`RobShop`)
      .setDetails(`​`)
      //.setAssetsSmallImage(`${popp}`) 
.setAssetsLargeImage(`${ssss}`)
.setAssetsLargeText(`（  ${getTime()} ） • （ ${moment().format('DD/MM/YYYY')} ）`)
.setAssetsSmallText(`ping : ${Math.round(client.ws.ping)}`)
.addButton(`${ioii}`,`${oooi}`)  

      .addButton(`${tyyy}`,`${sddd}`)
//.setStartTimestamp("1672545600" || Date.now())
//.setEndTimestamp("1704077999" || Date.now())
    client.user.setActivity(r);
  }, 8*1000); // อัพเดท ทุกๆ 7 วินาที
  console.log(`${client.user.username} Is Ready!`)
});


client.login(process.env.token)



   let endTime = new Date().setHours(24 + 6, 0, 0, 0), //nextMidnight
  today = new Date().setHours(0, 0, 0, 0), //lastMidnight
  dayCount = Math.floor( 
    (today - new Date(2023, 0).getTime()) / (24 * 60 * 60 * 1000) 
  )

var date = new Date().getDate() + "/"+ (new Date().getMonth()+1)  + "/" + new Date().getFullYear();
    var time = new Date().getHours() + ":"+ new Date().getMinutes();

let options = {
    timeZone: 'Asia/Bangkok',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  };

  function getDate() {
    return (new Date()).toLocaleString([], options).split(" ")[0].replaceAll(",", "");
  }
  function getTime() {
    return (new Date()).toLocaleString([], options).split(" ")[1].replaceAll(",", "");
          }