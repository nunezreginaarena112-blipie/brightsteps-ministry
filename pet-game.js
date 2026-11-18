let gentlePetCount=0;
const lambReactions=['The lamb likes your gentle touch!','That feels cozy!','Baa, thank you!','You are a kind friend!','The lamb feels loved!'];
function petGameView(){gentlePetCount=0;return [
'<section class="pet-game"><div class="pet-intro"><span class="eyebrow">A LITTLE BREAK</span><h2>Pet the friendly lamb</h2><p>Tap the lamb gently five times. Watch it wiggle and make it feel loved!</p></div>',
'<div class="pet-meadow"><div class="pet-sparkle sparkle-one">✦</div><div class="pet-sparkle sparkle-two">✧</div>',
'<svg id="lambArt" class="lamb-art" viewBox="0 0 340 300" role="img" aria-label="A fluffy white lamb smiling in a sunny meadow">',
'<ellipse cx="170" cy="265" rx="118" ry="16" fill="#a6c895"/><path d="M37 254Q86 225 129 249T219 247T305 251V300H37Z" fill="#b9d8a6"/>',
'<path d="M129 213l-7 45M207 214l8 44" stroke="#765748" stroke-width="14" stroke-linecap="round"/><path d="M119 253h10M209 253h10" stroke="#765748" stroke-width="8" stroke-linecap="round"/>',
'<ellipse cx="170" cy="169" rx="95" ry="69" fill="#fffdf5" stroke="#e5ddcf" stroke-width="4"/>',
'<g fill="#fffdf5" stroke="#e5ddcf" stroke-width="4"><circle cx="108" cy="134" r="31"/><circle cx="141" cy="111" r="34"/><circle cx="179" cy="104" r="35"/><circle cx="216" cy="119" r="32"/><circle cx="238" cy="151" r="30"/><circle cx="224" cy="185" r="31"/><circle cx="184" cy="203" r="32"/><circle cx="143" cy="201" r="32"/><circle cx="108" cy="181" r="29"/></g>',
'<path d="M131 141Q170 117 210 143L220 177Q206 215 169 218Q132 211 120 180Z" fill="#f2c6a8" stroke="#dca98c" stroke-width="4"/>',
'<path d="M130 145Q108 129 104 110Q132 111 145 136M204 140Q224 121 243 121Q237 145 215 155" fill="#e6ad94" stroke="#c98d76" stroke-width="4" stroke-linejoin="round"/>',
'<ellipse cx="151" cy="169" rx="5" ry="7" fill="#55463e"/><ellipse cx="190" cy="169" rx="5" ry="7" fill="#55463e"/><ellipse cx="171" cy="184" rx="8" ry="6" fill="#8b6253"/><path d="M158 196Q171 208 184 196" fill="none" stroke="#9a6658" stroke-width="4" stroke-linecap="round"/>',
'<circle cx="137" cy="185" r="8" fill="#efa99a" opacity=".55"/><circle cx="204" cy="185" r="8" fill="#efa99a" opacity=".55"/></svg>',
'<div class="pet-grass">✿　🌱　✿　🌼　✿</div></div>',
'<div class="pet-controls"><p id="petMessage" class="pet-message" aria-live="polite">Your gentle pets: 0 of 5</p><div id="petProgress" class="pet-progress" aria-label="0 of 5 pets">♡ ♡ ♡ ♡ ♡</div>',
'<button class="primary pet-button" type="button" data-pet-lamb>♡ Pet the lamb</button><p class="pet-kindness">Gentle hands make kind friends.</p></div></section>'
].join('')}
document.addEventListener('click',e=>{const button=e.target.closest('[data-pet-lamb]');if(!button)return;gentlePetCount=gentlePetCount>=5?1:gentlePetCount+1;const message=document.getElementById('petMessage');const progress=document.getElementById('petProgress');const lamb=document.getElementById('lambArt');if(!message||!progress||!lamb)return;message.textContent=gentlePetCount===5?'You made the lamb feel so loved! Play again any time.':lambReactions[gentlePetCount-1];progress.textContent=Array.from({length:5},(_,i)=>i<gentlePetCount?'♥':'♡').join(' ');progress.setAttribute('aria-label',gentlePetCount+' of 5 pets');lamb.classList.remove('pet-bounce');void lamb.offsetWidth;lamb.classList.add('pet-bounce');button.textContent=gentlePetCount===5?'♡ Pet again':'♡ Pet the lamb';});