const EDITION={"edition": "first-take-2026-week-11", "week": 11, "nextWeek": 12, "issuePath": "2026/week-11/", "teams": [{"id": 8, "name": "Glock Purdy", "manager": "Ameed", "record": "8–3", "pf": "1,695.96", "allplay": "75–24", "playoff": "Clinched", "score": "166.60", "opponent": "COKEHEADS", "oppScore": "123.54", "result": "WIN", "nextOpponent": "Cold Rome", "chapter": 3, "game": "ameed-cho", "intro": "You lead the league and you’ve clinched a seat. The bye is next."}, {"id": 3, "name": "ivan1265", "manager": "Ivan", "record": "8–3", "pf": "1,644.20", "allplay": "66–33", "playoff": "Clinched", "score": "146.30", "opponent": "Glen Burnie Goons", "oppScore": "110.48", "result": "WIN", "nextOpponent": "imalik", "chapter": 2, "game": "ivan-kamar", "intro": "Croskey-Merritt joined the lineup and you clinched a seat."}, {"id": 1, "name": "Cold Rome", "manager": "Farhan", "record": "7–4", "pf": "1,503.30", "allplay": "58–41", "playoff": 98.69, "score": "127.30", "opponent": "imalik", "oppScore": "90.40", "result": "WIN", "nextOpponent": "Glock Purdy", "chapter": 4, "game": "farhan-ibrahim", "intro": "Dak gave you 35.90. Ameed will ask for more."}, {"id": 4, "name": "AsianPersuasion", "manager": "Rob", "record": "7–4", "pf": "1,436.68", "allplay": "49–50", "playoff": 82.14, "score": "150.36", "opponent": "Voltron Fc", "oppScore": "120.76", "result": "WIN", "nextOpponent": "Rock for brains", "chapter": 5, "game": "rob-vi", "intro": "Lamb and Pickens put up 54.00. Eight wins clinch."}, {"id": 7, "name": "Rock for brains", "manager": "Gianni", "record": "6–5", "pf": "1,487.80", "allplay": "48–51", "playoff": 66.57, "score": "123.06", "opponent": "WITERALLY GWIDDYIN ON EM🫨", "oppScore": "146.16", "result": "LOSS", "nextOpponent": "AsianPersuasion", "chapter": 1, "game": "raif-gianni", "intro": "The matchup you called free cost you a seed. Pickens is next."}, {"id": 6, "name": "Glen Burnie Goons", "manager": "Kamar", "record": "5–6", "pf": "1,479.70", "allplay": "51–48", "playoff": 63.96, "score": "110.48", "opponent": "ivan1265", "oppScore": "146.30", "result": "LOSS", "nextOpponent": "WITERALLY GWIDDYIN ON EM🫨", "chapter": 2, "game": "ivan-kamar", "intro": "Sixth by 35.30 PF. Now take the spoiler seriously."}, {"id": 5, "name": "Voltron Fc", "manager": "Vi", "record": "5–6", "pf": "1,444.40", "allplay": "49–50", "playoff": 78.8, "score": "120.76", "opponent": "AsianPersuasion", "oppScore": "150.36", "result": "LOSS", "nextOpponent": "COKEHEADS", "chapter": 5, "game": "rob-vi", "intro": "Hall gave you 19.00. Beat Cho and keep the race in your hands."}, {"id": 10, "name": "COKEHEADS", "manager": "Cho", "record": "4–7", "pf": "1,419.86", "allplay": "44–55", "playoff": 9.83, "score": "123.54", "opponent": "Glock Purdy", "oppScore": "166.60", "result": "LOSS", "nextOpponent": "Voltron Fc", "chapter": 3, "game": "ameed-cho", "intro": "Coleman did his part. You need to beat Vi."}, {"id": 9, "name": "imalik", "manager": "Ibrahim", "record": "3–8", "pf": "1,317.86", "allplay": "30–69", "playoff": 0.01, "score": "90.40", "opponent": "Cold Rome", "oppScore": "127.30", "result": "LOSS", "nextOpponent": "ivan1265", "chapter": 4, "game": "farhan-ibrahim", "intro": "Cook and Montgomery gave you 32.60. Get to six wins first."}, {"id": 2, "name": "WITERALLY GWIDDYIN ON EM🫨", "manager": "Raif", "record": "2–9", "pf": "1,256.46", "allplay": "25–74", "playoff": "Eliminated", "score": "146.16", "opponent": "Rock for brains", "oppScore": "123.06", "result": "WIN", "nextOpponent": "Glen Burnie Goons", "chapter": 1, "game": "raif-gianni", "intro": "Your season was over. Gianni’s free win was just getting started."}], "chapters": ["The free win", "They traded the alibi", "One star versus a lineup", "The Dak bailout", "Rob got the points", "Sixth is a tiebreaker", "Six seats, four claims", "Say free win again"], "pickLabels": {"pick-1": "Farhan wins", "pick-8": "Ameed wins", "pick-4": "Rob wins", "pick-7": "Gianni wins", "pick-5": "Vi wins", "pick-10": "Cho wins", "pick-6": "Kamar wins", "pick-2": "Raif wins", "pick-3": "Ivan wins", "pick-9": "Ibrahim wins"}};
const mode=document.getElementById('mode'),desk=document.getElementById('team-desk'),choices=document.getElementById('team-choices'),ticket=document.getElementById('personal-ticket'),invite=document.getElementById('ticket-invite');
const STORE='sundaypaper:'+EDITION.edition+':';
const readStore=(key)=>{try{return localStorage.getItem(STORE+key)}catch{return null}};
const writeStore=(key,value)=>{try{localStorage.setItem(STORE+key,value);return true}catch{return false}};
const safe=(value)=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const phone=matchMedia('(max-width:850px)');
const phoneMenu=document.querySelector('.phone-chapters'),phoneTools=document.querySelector('.phone-tools');
const featureNav=document.querySelector('.edition-entry');
const featureHome=document.createComment('Edition links'),deskHome=document.createComment('Team desk');
featureNav.before(featureHome);desk.before(deskHome);
const autoOpened=new Set(),phoneOpened=new Set();
document.querySelectorAll('.story-details').forEach(panel=>panel.open=false);
function setReading(reading){
 reading=reading&&!phone.matches;
 document.body.classList.toggle('reading',reading);
 mode.setAttribute('aria-pressed',String(reading));mode.textContent=reading?'Design view':'Articles';
 if(reading){document.querySelectorAll('.story-details').forEach(panel=>{if(!panel.open)autoOpened.add(panel.id);panel.open=true;});}
 else{for(const id of autoOpened)document.getElementById(id).open=false;autoOpened.clear();}
 if(phone.matches)document.querySelectorAll('.story-details').forEach(panel=>panel.open=true);
}
function syncPhoneLayout(){
 document.body.classList.toggle('immersive',phone.matches);
 if(phone.matches){
  phoneTools.append(featureNav,desk);
  document.querySelectorAll('.story-details').forEach(panel=>{if(!panel.open||autoOpened.has(panel.id))phoneOpened.add(panel.id);panel.open=true;});
 }else{
  featureHome.after(featureNav);deskHome.after(desk);
  for(const id of phoneOpened)if(!document.body.classList.contains('reading'))document.getElementById(id).open=false;
  phoneOpened.clear();phoneMenu.open=false;
 }
}
function closePhoneContents(){if(phone.matches)phoneMenu.open=false;}
function openStory(num,anchor){
 closePhoneContents();
 beginReading(document.getElementById('page-'+String(num).padStart(2,'0')));
 const panel=document.getElementById('story-'+String(num).padStart(2,'0'));panel.open=true;
 const target=(anchor&&document.getElementById(anchor))||panel;
 target.tabIndex=-1;target.focus({preventScroll:true});target.scrollIntoView({block:'start'});
}
function openPrintedPage(num){
 closePhoneContents();
 beginReading(document.getElementById('page-'+String(num).padStart(2,'0')));
 const page=document.getElementById('page-'+String(num).padStart(2,'0'));
 const figure=page.querySelector('.artwork');
 figure.tabIndex=-1;figure.focus({preventScroll:true});figure.scrollIntoView({block:'start'});
}
document.querySelectorAll('.story-details').forEach(panel=>panel.addEventListener('toggle',()=>{panel.querySelector('.story-action').textContent=panel.open?'Story open':'Full story';panel.querySelector('.story-chevron').textContent=panel.open?'−':'＋';}));
document.querySelectorAll('[data-close-story]').forEach(button=>button.addEventListener('click',()=>{const panel=document.getElementById('story-'+button.dataset.closeStory);panel.open=false;panel.closest('article').scrollIntoView({block:'start'});panel.querySelector('summary').focus({preventScroll:true});}));
syncPhoneLayout();
setReading(false); // Desktop starts with the designed issue; phones read the open paper.
document.querySelector('.edition-primary').addEventListener('click',event=>{if(!phone.matches){event.preventDefault();openStory(1);}});
mode.addEventListener('click',()=>{setReading(!document.body.classList.contains('reading'));const current=document.querySelector('nav a[aria-current="true"]');if(current)document.querySelector(current.getAttribute('href')).scrollIntoView({block:'start'});});
function renderTicket(id){const t=EDITION.teams.find(t=>t.id===Number(id));if(!t)return;ticket.hidden=false;choices.hidden=true;invite.innerHTML=`Your Week ${EDITION.week} receipt <span aria-hidden="true">↗</span>`;ticket.innerHTML=`<span class="ticket-owner">${safe(t.manager)} · Week ${EDITION.week} receipt</span><h2>${safe(t.name)}</h2><div class="ticket-record">${safe(t.record)} · ${safe(t.pf)} PF</div><div class="ticket-score">${safe(t.score)} <span>/ ${safe(t.result)}</span></div><p>Opponent: ${safe(t.opponent)}, ${safe(t.oppScore)}.</p><p class="ticket-metrics">ALL-PLAY ${safe(t.allplay)}<br>PLAYOFF SCENARIO ${typeof t.playoff==="number"?t.playoff+"%":safe(t.playoff)}</p><p><b>Next:</b> ${safe(t.nextOpponent)} · Week ${EDITION.nextWeek}</p><p>${safe(t.intro)}</p><a href="#page-${String(t.chapter).padStart(2,'0')}" data-story="${safe(t.game)}">Read your game story →</a><a href="#page-${String(t.chapter).padStart(2,'0')}" data-design="true">See the designed recap →</a><button type="button" id="change-team">Choose another team</button><p class="ticket-note">All-play is a hypothetical score comparison. <a href="methodology.html">Read the model assumptions</a>.</p>`;writeStore('team',String(t.id));ticket.querySelector('[data-story]').addEventListener('click',event=>{event.preventDefault();setReading(false);openStory(t.chapter,t.game);});ticket.querySelector('[data-design]').addEventListener('click',event=>{setReading(false);if(phone.matches){event.preventDefault();openPrintedPage(t.chapter);}});document.getElementById('change-team').addEventListener('click',()=>{ticket.hidden=true;choices.hidden=false;invite.innerHTML="Pull your team's ticket <span aria-hidden='true'>↗</span>";});}
document.querySelectorAll('[data-team]').forEach(button=>button.addEventListener('click',()=>renderTicket(button.dataset.team)));
const savedTeam=EDITION.teams.find(t=>t.id===Number(readStore('team')));if(savedTeam){renderTicket(savedTeam.id);desk.open=false;invite.innerHTML='Back for '+safe(savedTeam.name)+'? <span aria-hidden="true">↗</span>';}
const resume=document.getElementById('resume'),desktopResume=document.getElementById('desktop-resume');
const savedChapter=Number(readStore('chapter'));
const chapterForTarget=target=>target?.closest('.page')||target?.querySelector?.('.page');
const initialTarget=location.hash&&document.getElementById(decodeURIComponent(location.hash.slice(1)));
let readingIntent=Boolean(initialTarget),scrollIntent=false;
function hideResume(){resume.hidden=true;desktopResume.hidden=true;}
if(!initialTarget&&savedChapter>1&&savedChapter<=EDITION.chapters.length){
 for(const link of [resume,desktopResume]){link.hidden=false;link.href='#page-'+String(savedChapter).padStart(2,'0');link.textContent='Continue at '+EDITION.chapters[savedChapter-1]+' →';}
}
function beginReading(target){
 readingIntent=true;hideResume();
 const page=chapterForTarget(target);if(page)writeStore('chapter',String(Number(page.id.slice(-2))));
}
function ignoresReadingIntent(target){return target instanceof Element&&Boolean(target.closest('dialog,input,textarea,select,[contenteditable="true"]'));}
// A passive landing must not replace yesterday's checkpoint with the cover.
// Only navigation or an actual reading gesture authorizes subsequent writes.
document.addEventListener('click',event=>{
 const link=event.target.closest('a[href^="#"]');
 if(!link||ignoresReadingIntent(link)||link.hasAttribute('data-open-team'))return;
 const target=document.getElementById(link.hash.slice(1));if(target)beginReading(target);
});
document.addEventListener('wheel',event=>{
 if(!ignoresReadingIntent(event.target)&&!event.target.closest('.phone-chapters,.sidebar')&&event.deltaY!==0)scrollIntent=true;
},{passive:true});
document.addEventListener('touchmove',event=>{
 if(!ignoresReadingIntent(event.target)&&!event.target.closest('.phone-chapters,.sidebar'))scrollIntent=true;
},{passive:true});
document.addEventListener('keydown',event=>{
 if(ignoresReadingIntent(event.target)||event.target.closest('button,summary,a'))return;
 if(['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(event.key))scrollIntent=true;
});
// Pointer dragging the root scrollbar is also an intentional reading scroll.
document.addEventListener('pointerdown',event=>{
 if(event.target===document.documentElement&&event.clientX>=document.documentElement.clientWidth)scrollIntent=true;
});
addEventListener('scroll',()=>{
 if(scrollIntent){beginReading();scrollIntent=false;}
 if(readingIntent)syncCurrentChapter();
},{passive:true});
const links=[...document.querySelectorAll('.chapter-links a[data-page]')];
const chapterPages=[...document.querySelectorAll('.page')];
const nativeChapters=CSS.supports('scroll-target-group: auto')&&CSS.supports('selector(:target-current)');
let currentChapter;
function setCurrentChapter(page,fallback=false){
 const num=Number(page.id.slice(-2));
 for(const link of links){const active=link.hash==='#'+page.id;link.classList.toggle('chapter-fallback',fallback&&active);if(active)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current');}
 if(readingIntent)writeStore('chapter',String(num));
 if(currentChapter===num)return;
 currentChapter=num;
 document.getElementById('chapter-position').textContent=String(num).padStart(2,'0')+' / 08 · '+EDITION.chapters[num-1];
}
function syncCurrentChapter(){
 // Contents expansion and modal inspection are UI, not a new reading position.
 // In particular, WebKit scroll anchoring can move the page while the menu opens.
 if((phone.matches&&phoneMenu.open)||document.getElementById('page-inspector')?.open)return;
 // Hidden desktop navigation and closed phone details have no rendered native markers.
 const marker=nativeChapters&&links.find(link=>link.getClientRects().length&&link.matches(':target-current'));
 if(marker){setCurrentChapter(document.getElementById(marker.hash.slice(1)));return;}
 const readingLine=parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||100;
 let page=chapterPages[0];
 for(const candidate of chapterPages){const margin=parseFloat(getComputedStyle(candidate).scrollMarginTop)||0;if(candidate.getBoundingClientRect().top>readingLine+margin+1)break;page=candidate;}
 setCurrentChapter(page,true);
}
// The observer covers unsupported browsers and the closed phone chapter menu.
const observer=new IntersectionObserver(syncCurrentChapter,{rootMargin:'-100px 0px -65% 0px',threshold:[0,.05,.15,.3,.5,.75,1]});
chapterPages.forEach(page=>observer.observe(page));
document.addEventListener('scrollend',syncCurrentChapter);
addEventListener('resize',syncCurrentChapter);
addEventListener('load',syncCurrentChapter);
document.querySelector('.phone-chapters').addEventListener('toggle',()=>requestAnimationFrame(syncCurrentChapter));
document.querySelectorAll('.phone-chapters .chapter-links a').forEach(link=>link.addEventListener('click',()=>link.closest('details').open=false));
requestAnimationFrame(syncCurrentChapter);
function imageFailed(img){
 const page=img.closest('.page');if(page)page.classList.add('image-failed');
 const msg=document.createElement('p');msg.className='error';msg.textContent='This page image could not load. The story is available below.';
 img.replaceWith(msg);
}
document.querySelectorAll('.artwork img').forEach(img=>{
 img.addEventListener('error',()=>imageFailed(img),{once:true});
 if(img.complete&&img.naturalWidth===0)imageFailed(img);
});
const inspector=document.getElementById('page-inspector');
if(typeof inspector?.showModal==='function'){
 const canvas=inspector.querySelector('.inspector-canvas'),size=document.getElementById('inspector-size');
 const help=document.getElementById('inspector-help'),status=document.getElementById('inspector-status');
 const image=document.createElement('img');image.decoding='async';canvas.append(image);
 function setFullSize(full){
  canvas.classList.toggle('fit-page',!full);size.setAttribute('aria-pressed',String(full));size.textContent=full?'Fit page':'Full size';
  help.textContent=full?'Full size. Scroll to inspect the page in any direction.':'Fit to view. Choose Full size to read the original labels.';
  canvas.scrollTo(0,0);
 }
 image.addEventListener('load',()=>{status.textContent='';image.hidden=false;});
 image.addEventListener('error',()=>{image.hidden=true;status.textContent='The full-resolution page could not load. Close to keep reading, or try the original PNG link.';});
 function inspectPage(event){
  if(event instanceof MouseEvent&&(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey))return;
  const trigger=event.currentTarget,num=Number(trigger.dataset.inspectPage);
  const original=document.querySelector('#page-'+String(num).padStart(2,'0')+' .artwork > a');
  event.preventDefault();
  document.getElementById('inspector-title').textContent='Page '+String(num).padStart(2,'0')+' · '+EDITION.chapters[num-1];
  document.getElementById('inspector-original').href=original.href;
  image.hidden=true;status.textContent='Loading the original page…';image.alt='Full-resolution page '+num+' · '+EDITION.chapters[num-1];
  setFullSize(true);image.src=original.href;
  // Safari pointer activation need not focus a button. Establish the visible
  // invoker first so the native dialog can return focus to that exact control.
  trigger.focus({preventScroll:true});inspector.showModal();canvas.scrollTo(0,0);
 }
 document.querySelectorAll('[data-inspect-page]').forEach(trigger=>{
  trigger.addEventListener('click',inspectPage);trigger.setAttribute('aria-haspopup','dialog');
  if(trigger.tagName==='BUTTON')trigger.hidden=false;
 });
 document.querySelectorAll('.inspect-fallback').forEach(link=>link.hidden=true);
 size.addEventListener('click',()=>setFullSize(canvas.classList.contains('fit-page')));
 if(!('closedBy' in HTMLDialogElement.prototype)){
  const outside=event=>{const r=inspector.getBoundingClientRect();return event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom;};
  let pressedOutside=false;
  inspector.addEventListener('pointerdown',event=>{pressedOutside=outside(event);});
  inspector.addEventListener('pointerup',event=>{if(pressedOutside&&outside(event))inspector.close();pressedOutside=false;});
 }
 inspector.addEventListener('close',()=>{inspector.returnValue='';});
}
const form=document.getElementById('pick-form'),status=document.getElementById('pick-status'),copy=document.getElementById('copy-pick'),reason=document.getElementById('reason'),fallback=document.getElementById('copy-fallback');
// The edition config owns all prediction wording.
const labels=EDITION.pickLabels;
function currentPick(){const checked=form.querySelector('input[name="upset"]:checked');return checked&&labels[checked.value]?{key:checked.value,reason:reason.value.slice(0,180)}:null;}
function takeText(pick){return `My First Take $2026 Week ${EDITION.nextWeek} call: ${labels[pick.key]}.`+(pick.reason.trim()?' '+pick.reason.trim():'')+` Results and records through Week ${EDITION.week}. Read the issue: ${new URL(EDITION.issuePath,'https://sundaypaper.me/')}`;}
try{const saved=JSON.parse(readStore('pick')||'null');if(saved&&labels[saved.key]){form.querySelector('input[value="'+saved.key+'"]').checked=true;reason.value=typeof saved.reason==='string'?saved.reason.slice(0,180):'';copy.disabled=false;status.textContent=`Your saved Week ${EDITION.nextWeek} call: `+labels[saved.key]+'. Change it any time.';}}catch{}
form.addEventListener('change',()=>{copy.disabled=!currentPick();fallback.hidden=true;});
form.addEventListener('submit',event=>{event.preventDefault();const pick=currentPick();if(!pick){status.textContent=`Choose a Week ${EDITION.nextWeek} call first.`;return;}const saved=writeStore('pick',JSON.stringify(pick));status.textContent=saved?'Your pick is saved on this browser. Change it any time.':'Your pick is kept for this visit.';copy.disabled=false;});
copy.addEventListener('click',async()=>{const pick=currentPick();if(!pick)return;const text=takeText(pick);try{await navigator.clipboard.writeText(text);status.textContent='Your take is copied. Bring the receipt to the chat.';}catch{fallback.hidden=false;fallback.value=text;fallback.focus();fallback.select();status.textContent='Select and copy your take below.';}});

phone.addEventListener('change',()=>{syncPhoneLayout();setReading(false);requestAnimationFrame(syncCurrentChapter);});
const receiptIssuePath=EDITION.issuePath;
const receiptIssueLabel=`Sunday Paper · First Take $2026 · Week ${EDITION.week}`;

// Receipt links preserve the artwork and open only the related native story.
document.querySelectorAll('[data-receipt-story]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();setReading(false);openStory(Number(link.dataset.receiptChapter),link.dataset.receiptStory);}));
document.querySelectorAll('[data-copy-receipt]').forEach(button=>{button.hidden=false;button.addEventListener('click',async()=>{
 const card=button.closest('.receipt'),status=card.querySelector('.receipt-copy-status'),fallback=card.querySelector('.receipt-copy-fallback');
 const quote=card.querySelector('blockquote').innerText;
 const permanent=new URL(receiptIssuePath,'https://sundaypaper.me/');permanent.hash=card.id;
 const text=receiptIssueLabel+'\n'+card.querySelector('h3').textContent+':\n“'+quote+'”\n'+card.querySelector('.receipt-status').textContent+'\n'+card.querySelector('.receipt-result').textContent+'\n'+card.querySelector('.receipt-response').textContent+'\n'+card.querySelector('.receipt-date').textContent+'\n'+permanent.href;
 button.disabled=true;
 try{if(!navigator.clipboard)throw new Error('Clipboard unavailable');await navigator.clipboard.writeText(text);fallback.hidden=true;status.textContent='Receipt copied. You choose where to share it.';}
 catch{fallback.hidden=false;const field=fallback.querySelector('textarea');field.value=text;field.focus();field.select();status.textContent='Copy the receipt from the field below.';}
 finally{button.disabled=false;}
});});

document.body.classList.add('section-index-ready');
document.querySelector('[data-open-team]').addEventListener('click',event=>{event.preventDefault();if(phone.matches)phoneMenu.open=true;desk.open=true;invite.scrollIntoView({block:'nearest'});invite.focus({preventScroll:true});});
document.querySelector('[data-open-playoffs]').addEventListener('click',event=>{event.preventDefault();setReading(false);openStory(7);});

phoneMenu.addEventListener('click',event=>{
 const link=event.target.closest('a[href^="#"]');
 if(link&&!link.hasAttribute('data-open-team'))closePhoneContents();
});


const playoffFilm = document.getElementById('playoff-film');
const filmPlay = document.getElementById('play-film');
if (playoffFilm && filmPlay) {
  filmPlay.hidden = false;
  filmPlay.addEventListener('click', () => {
    playoffFilm.focus({preventScroll: true});
    playoffFilm.play().catch(() => { filmPlay.hidden = true; });
  });
  playoffFilm.addEventListener('play', () => { filmPlay.hidden = true; });
  playoffFilm.addEventListener('ended', () => { filmPlay.hidden = false; });
}
