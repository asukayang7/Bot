let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'JadiBot'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo mypren ๐
*MAAF KAK FITUR JADIBOT TIDAK ADA DI DALAM FITUR KAMI*
โฉยป *Kalau kakak mau jadi bot silahkan jasa run aja kak*
          
โโโโใ ฤฑll *HARGA* llฤฑ ใโโ๊ฅ
โ *1 BULAN* 15.000
โ *2 BULAN:* 25.000
โ *PERMANEN:* 30.000
โโโโโโโโโโโโโโโโโโโ๊ฅ
โโโโใ ฤฑll *PAYMENT* llฤฑ ใโโ๊ฅ
โ *DANA:* ${dana}
โ *GOPAY:* ${gopay}
โ *OVO:* ${pulsa}
โโโโโโโโโโโโโโโโโโโ๊ฅ
โโโใ ฤฑll *RULES* llฤฑ ใโ๊ฅ
โ *Dana yang sudah masuk tidak bisa di kembalikan*
โ *Kalau akunmu ke banned bukan urusan saya*
โโโโโโโโโโโ๊ฅ
Jika anda berminat hubungi nomor di bawah!!
โฉยป *jangan lupa donasi kak* ยซโจ
Terimakasih yang sudah mendonasikan untuk bot

Contact person jasa run:
wa.me/${numberowner} (Owner)

*Follow Instagram ku juga kak๐ผ*`
  conn.send2ButtonImg(m.chat, fla + teks, anu, instagram, 'Donasi', '.donasi', 'SewaBot', '.sewazifa', m) 
}
handler.help = ['jadibot']
handler.tags = ['info']
handler.command = /^(jadibot)$/i

module.exports = handler
