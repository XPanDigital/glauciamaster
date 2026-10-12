const booking='https://www.fresha.com/pt-PT/a/glaucia-lourenco-master-guimaraes-rua-arqueologo-mario-cardoso-371-zj106o9a';
document.querySelectorAll('.booking').forEach(a=>{a.href=booking;a.target='_blank';a.rel='noopener'});
document.querySelectorAll('.maps').forEach(a=>a.href='https://www.google.com/maps/place/Gl%C3%A1ucia+Louren%C3%A7o+Master/@41.4476769,-8.3064456,822m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd24efa6ee9f1f1f:0xc1a2340afc2b3795!8m2!3d41.4476769!4d-8.3064456!16s%2Fg%2F11n4xpx694');
const menu=document.querySelector('.menu'),nav=document.querySelector('#nav');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu');menu.textContent='☰'}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');menu.textContent=open?'×':'☰'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
document.querySelectorAll('.swatches button').forEach((b,i)=>b.addEventListener('click',()=>{document.querySelectorAll('.swatches button').forEach(s=>{s.classList.remove('selected');s.setAttribute('aria-pressed','false')});b.classList.add('selected');b.setAttribute('aria-pressed','true');document.querySelector('#color-study').style.setProperty('--nail',b.dataset.color);document.querySelector('#mood').textContent=b.dataset.mood;document.querySelector('#color-name').textContent=`0${i+1} / ${b.dataset.name.toUpperCase()}`}));document.querySelector('#year').textContent=new Date().getFullYear();

