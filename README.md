Live Cricket 🏏 Score Api
====================
# Getting Started

Put match ID in get_score(ID).
Get match ID from cricbuzz today match url.\n- example: https://www.cricbuzz.com/live-cricket-scores/56192
so match ID is 56192 !

## Install using npm:

``` bash
npm install cric-live-score
```

## Example usage

```javascript
const get_score = require('cric-live-score')
await get_score('56192')
.then(res =>{
console.log(res)
})

```

## Output

```output

/*
{
  status: true,
  creator: 'SafwanGanz',
  github: 'https://github.com/SafwanGanz',
  result: {
    title: 'South Africa vs West Indies, 2nd Test',
    update: 'Day 1: Stumps',
    current: 'RSA - 311/7 (89.2)',
    batsman: 'Heinrich Klaasen*',
    batsmanrun: '17(43)',
    ballsfaced: '(43)',
    fours: '1',
    sixes: '0',
    sr: '39.53',
    batsmantwo: 'Bowling',
    batsmantworun: 'O',
    batsmantwoballsfaced: 'Data Not Found',
    batsmantwofours: 'M',
    batsmantwosixes: '7.2',
    batsmantwosr: 'W',
    bowler: 'Jason Holder',
    bowlerover: '16',
    bowlerruns: '39',
    bowlerwickets: '1',
    bowlermaiden: '5',
    bowlertwo: 'Data Not Found',
    bowletworover: 'Data Not Found',
    bowlertworuns: 'Data Not Found',
    bowlertwowickets: 'Data Not Found',
    bowlertwomaiden: 'Data Not Found',
    partnership: '2(8)',
    recentballs: '... 0 4 0 W | 0 0 1 0 0 1 | 0 W',
    lastwicket: 'Simon Harmer c Joshua Da Silva b Mayers 1(5) - 311/7 in 89.2 ov.',
    runrate: 'CRR:  3.48',
    commentary: "17:03 Local Time, 15:03 GMT, 20:33 IST: The Windies finally reaped some rewards for their hard work in the field today. They'll feel a lot better heading into the change room after that last session. South Africa were in a dominant position heading into it having lost just two wickets and it looked like they'd continue to batter a weary looking Windies bowling attack. The visitors, however, did not let that happen. Holder trapped Bavuma lbw before Motie bowled a peach to send de Zorzi packing. There was a relative period of stability after the set batters were dismissed but Rickleton threw it away after chasing a wide one. The Windies went on to find some late success as they managed to scalp two more right towards the end of play. After dominating the majority of the day, the Proteas will feel a little disappointed with how things stand at the end of the day. They'd have hoped to end the day having lost at least a couple of wickets fewer. That's all there is for today, do join us back for all the action tomorrow.89.2 Mayers to Harmer, out Caught by Joshua Da Silva!! Edged and gone! Good length delivery just outside off, perfect in-between length that has the batter caught on the crease, Harmer pushes at it away from his body and gets a healthy edge through to the keeper who makes no mistake. The Windies will be bouyed by that as they head off as it'll also be stumps. Harmer c Joshua Da Silva b Mayers 1(5)  Mayers to Harmer, THATS OUT!! Caught!! 89.1 Mayers to Harmer, no run, full and sliding down the leg-side, Harmer looks to glance it fine and misses RSA: 311-6 after 89 overs88.6 Holder to Harmer, 1 run, length delivery on middle, Harmer looks to defend and gets beaten on the inside edge before getting struck on the pad 88.5 Holder to Harmer, no run, full on off, Harmer prods forward and knocks it towards mid-on 88.4 Holder to Harmer, no run, full and just outside off, Harmer shuffles across before shouldering arms 88.3 Holder to Klaasen, 1 run, full on off, Klaasen prods forward and knocks it towards point for a single 88.2 Holder to Klaasen, no run, length delivery on off, Klaasen gets on top of the bounce and knocks back 88.1 Holder to Klaasen, no run, length delivery on middle, Klaasen defended back towards the bowler Simon Harmer, right handed bat, comes to the creaseRSA: 309-6 after 88 overs87.6 Mayers to Mulder, out Bowled!! Gone! Length delivery on off, shapes back in beautifully and goes straight through the gate. Mulder didn't know much about that one, was caught in his crease and it nipped back in, snuck through the gap between bat-pad and hit the top of off. So some success late in the day for the Windies. Mulder b Mayers 12(30) [4s-1]  Mayers to Mulder, THATS OUT!! Bowled!! 87.5 Mayers to Mulder, no run, length delivery on middle, pushed towards mid-wicket off the backfoot 87.4 Mayers to Mulder, FOUR, full and just outside off, Mulder pushes at it from his crease and gets a thick outside edge that flies past gully for four 87.3 Mayers to Mulder, no run, length delivery just outside off, keeps a touch low as Mulder shuffles across looking to defend 87.2 Mayers to Mulder, no run, pitched up full on off, driven straight to mid-off 87.1 Mayers to Mulder, no run, full and shaping back in from outside off, Mulder is right behind it in defence Kyle Mayers [6.0-0-20-0] is back into the attackRSA: 305-5 after 87 overs86.6 Holder to Klaasen, 2 runs, length delivery on middle, clipped away towards deep square leg for a couple "
  }
}
*/

```
## Sources

cricbuzz

## License

MIT

