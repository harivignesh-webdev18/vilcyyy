const $=id=>document.getElementById(id);
const gate=$('gate'), site=$('site'), pass=$('pass'), error=$('error'), cat=$('cat');
function unlock(){if(pass.value==='1404'){gate.classList.add('hidden');site.classList.remove('hidden');window.scrollTo(0,0);startHearts();}else{error.textContent='Oops! That is not our secret password.';cat.classList.remove('hidden');pass.value='';pass.focus();}}
$('unlock').addEventListener('click',unlock);pass.addEventListener('keydown',e=>{if(e.key==='Enter')unlock();});
const song=$('song'), music=$('musicToggle');
async function toggleMusic(){if(song.paused){try{await song.play();music.textContent='♫ Pause our song';}catch(e){music.textContent='Tap to play ♫';}}else{song.pause();music.textContent='♫ Play our song';}}
music.addEventListener('click',toggleMusic);
$('cakeBtn').addEventListener('click',()=>{$('cakeBtn').classList.add('out');$('cakeMessage').textContent='Wish made! May all your dreams come true, Vilcyyy! 💗';burst();});
function burst(){for(let i=0;i<30;i++){const h=document.createElement('span');h.className='float-heart';h.textContent=['♥','♡','✦','💗'][i%4];h.style.left=Math.random()*100+'%';h.style.fontSize=(12+Math.random()*20)+'px';h.style.animationDuration=(4+Math.random()*4)+'s';$('hearts').appendChild(h);setTimeout(()=>h.remove(),8000);}}
function startHearts(){burst();setInterval(()=>{if(!site.classList.contains('hidden'))burst();},6500);}
$('again').addEventListener('click',()=>{site.classList.add('hidden');gate.classList.remove('hidden');pass.value='';error.textContent='';cat.classList.add('hidden');window.scrollTo(0,0);});
