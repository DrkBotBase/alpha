const fs = require('fs')
const chalk = require('chalk')
const  { indonesia, english, spanyol} = require(`./language`)

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': '7oLa62wq',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read message
global.autobio = false 
global.userRegister = false 

//language
//Available in indonesia , english & spanyol 
//You can request others language 
global.language = spanyol  //change indonesia to english if you don't understand the language used by the bot


// Other
// Other
global.botname = "BOT-MD" //namabot kalian

global.ownername= "All Rights Reserved | BOT-MD" //nama kalian
global.myweb ="https://dylan-rest.herokuapp.com" //bebas asal jan hapus
global.groupBot = "https://chat.whatsapp.com/GxjXaj3SxNDAWh8oMQ5bkg" //bebas asal jan hapus
global.myweb2 = "https://dylan-rest.herokuapp.com" //bebas
global.email = "" //bebas
global.region = "Spanyol" //bebas
global.timezone = 'America/Bogota' //  timezone wib
global.premium = ['17054132366'] //premium user
global.owner = ["573508770421"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "17054132366" // nomor wa kalian
global.ownernomerr = "+17054132366" //nmr wa kalian
global.thumbnail = "./image/bot.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/bot.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.packname = '© All Rights Reserved | BOT-MD' //sticker wm ubah
global.author = 'Team' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'
global.multiplier = 69
global.limitawal = {
    premium: "Infinity",
    free: 50
}

global.adventureRPG = 'https://telegra.ph/file/30bef343159005b622ced.jpg'
global.bankRPG = 'https://telegra.ph/file/1ee3e007de22f6add4a31.jpg'
global.bansosRPG = 'https://telegra.ph/file/646af753f38fbf7bbbccc.jpg'
global.bansosRPG_ = 'https://telegra.ph/file/ba18a18aac022170c8056.jpg'
global.berburuRPG = 'https://telegra.ph/file/95a202f631ab7172c3f25.jpg'
global.inventoryRPG = 'https://telegra.ph/file/82b21932692f82fce8664.jpg'
global.cooldownRPG = 'https://telegra.ph/file/5e1e191a47028d9648ffa.jpg'
global.dailyRPG = 'https://telegra.ph/file/17e857848a3afdb1c4fd8.jpg'
global.hourlyRPG = 'https://telegra.ph/file/bcabf71c0f56207d1629e.jpg'
global.kandangRPG = 'https://telegra.ph/file/89c3b3ec69d373da8f64b.jpg'
global.kolamRGP = 'https://telegra.ph/file/0bc07117c78b2c9674b7d.jpg'
global.mancingRPG = 'https://telegra.ph/file/1420d26b7f04f84993225.jpg'
global.monthlyRPG = 'https://telegra.ph/file/7eadf65b95d9f7a3ecb46.jpg'
global.weeklyRPG = 'https://telegra.ph/file/ffc85895d14db97931f0f.jpg'

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['.']
global.sp = '⭔'
global.mess = {
    sukses: 'Selesai, Kak~',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '[!] Sedang Di Proses',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
