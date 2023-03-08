
let fetch = require('node-fetch')
async function get_score(id){
  let json = await (await fetch(`https://hhh-amber.vercel.app/score?url=https://m.cricbuzz.com/cricket-commentary/${id}`)).json()
var resul = {
status: true,
creator: "SafwanGanz",
github: "https://github.com/SafwanGanz",
result: json
}
    return resul
 }
 module.exports = get_score
