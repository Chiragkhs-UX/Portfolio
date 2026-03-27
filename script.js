// ── DECK DATA ────────────────────────────────────────────────────────────
var charche_data = [
  {ico:'📚', cat:'Book', title:'The Design of Everyday Things', body:'Don Norman changed how I see doors. Literally. If you work in product, this is not optional.'},
  {ico:'🎙️', cat:'Podcast', title:'How I Built This — Guy Raz', body:'Every founder story is a masterclass in persistence. Eastern Express commute approved.'},
  {ico:'🛠️', cat:'Tool', title:'Figma Variables & Tokens', body:'Once you go semantic tokens, you never go back. Start with color and spacing. Thank me later.'},
  {ico:'🧠', cat:'Mental Model', title:'Second-order thinking', body:'Before shipping, ask: what happens next? Then what? Most UX failures skip exactly this step.'},
  {ico:'☕', cat:'Café', title:'Café Madras, Matunga', body:'Filter coffee, bun maska, no WiFi. The best design thinking happens without a screen.'},
  {ico:'📱', cat:'App', title:'Perplexity for research', body:'I use it before every sprint to collapse the blank-page problem. Prompt well, think harder.'},
  {ico:'🎨', cat:'Principle', title:'The Dribbble → reality gap', body:'Beautiful shots don\'t always make great products. Study flows and decisions, not screens.'},
  {ico:'🏃', cat:'Habit', title:'Walk before big decisions', body:'A long drive or an evening with the baby resets everything. The best clarity does not come from a desk.'},
];

// Colleague + ADPlist reviews
var reco_data = [
  {
    name:'Swati Sharma', role:'UX Researcher (Freelance) & Credit Officer, State Bank of India', avatar:'SS',
    rel:'ADPlist · Dec 27, 2023',
    quote:'I had an amazing session with Chirag. He is not only very practical and very knowledgeable but is very keen on sharing it too. Wonderful mentor with actionable insights.',
    tags:['Actionable insights','Practical','ADPlist']
  },
  {
    name:'Aashish Chamoli', role:'Product Design Intern, Magicpin', avatar:'AC',
    rel:'ADPlist · May 18, 2023',
    quote:'Chirag is a great mentor. He listened to my queries very carefully and gave me actionable insights. I\'ll highly recommend him.',
    tags:['Actionable insights','Mentorship','ADPlist']
  },
  {
    name:'Rhythm Gauba', role:'Product Designer, Axis - Freecharge', avatar:'RG',
    rel:'ADPlist · May 05, 2023',
    quote:'Chirag is a great mentor! He was extremely approachable and answered all questions with clarity. He is super passionate about what he does and the conversation was enriching and valuable.',
    tags:['Clarity','Passion','ADPlist']
  },
  {
    name:'Bhagya N M', role:'UI UX Designer, Fresher', avatar:'BN',
    rel:'ADPlist · April 20, 2023',
    quote:'It was a wonderful session with Chirag. He cleared every question I asked and reviewed my portfolio.',
    tags:['Portfolio review','Clarity','ADPlist']
  },
  {
    name:'Vaibhav Kaushik', role:'Founding UX Designer, Caffeine UX Studio', avatar:'VK',
    rel:'ADPlist · March 24, 2023',
    quote:'He explained everything through real experiences which made it very easy to understand.',
    tags:['Storytelling','Clarity','ADPlist']
  },
  {
    name:'Suchira Dhar', role:'UX Designer, Lane 4 Solution', avatar:'SD',
    rel:'ADPlist · October 27, 2022',
    quote:'My first session on ADP went really well! Thanks for the amazing mentorship.',
    tags:['Mentorship','ADPlist']
  },
  {
    name:'Varun S Acharya', role:'Senior Product Designer, MPL', avatar:'VA',
    rel:'ADPlist · September 04, 2022',
    quote:'He explained everything in detail and shared valuable insights on personal and professional growth.',
    tags:['Storytelling','Growth','ADPlist']
  },
  {
    name:'Ugashanth', role:'Product Designer, Fiverr', avatar:'UG',
    rel:'ADPlist · September 01, 2022',
    quote:'He is very approachable and kind. I got a lot of valuable advice.',
    tags:['Approachable','ADPlist']
  },
  {
    name:'Devang Varia', role:'LinkedIn Recommendation', avatar:'DV',
    rel:'LinkedIn',
    quote:'Chirag impressed with strong user empathy, work ethic, and ability to turn complex problems into intuitive designs.',
    tags:['User empathy','Design leadership','LinkedIn']
  },
  {
    name:'Mohit Ajwani', role:'LinkedIn Recommendation', avatar:'MA',
    rel:'LinkedIn',
    quote:'Delivers high-quality work quickly, explains decisions well, and is great to collaborate with.',
    tags:['Collaboration','Quality','LinkedIn']
  },
  {
    name:'Tom Hoang', role:'LinkedIn Recommendation', avatar:'TH',
    rel:'LinkedIn',
    quote:'Strong in design thinking, UX, and a very supportive teammate.',
    tags:['Design thinking','UX','LinkedIn']
  },
];
var memory_data = [
  {year:'2013', place:'Isobar India · Dadar', title:'Where the hunger started',
   photo:'./assets/images/isobar-2013.jpeg',
   text:'Fresh out of college, surrounded by people who cared about craft. I learned that great design is invisible — and great teams are loudly honest.',
   tags:['First job','Agency life','Brand design']},
  {year:'2016', place:'Oyster Living · Borivali', title:'Growth is a design problem too',
   photo:'./assets/images/oyster-2016.jpeg',
   text:'Took my design skills into growth. Learned that UX and business metrics aren\'t opposites — the best ones move together. Real estate taught me to design for trust at first glance.',
   tags:['Growth design','Real estate','UX']},
  {year:'2019', place:'Drip Capital · Andheri', title:'Fintech is just trust, designed',
   photo:'./assets/images/drip-2019.jpeg',
   text:'Every pixel on a B2B finance screen carries weight. Users are CFOs and trade managers — unforgiving, time-poor. I got very good at removing friction from complex flows.',
   tags:['Fintech','B2B','Trade finance']},
  {year:'2021', place:'Axis Bank–Freecharge · Dadar', title:'Leading the room',
   photo:'./assets/images/axis-2021.jpeg',
   text:'First time owning a design system at bank scale. 240M+ customers, 100+ designers. Clarity is kindness — both in UI and in how you run a team.',
   tags:['Leadership','Design systems','Banking']},
  {year:'2025', place:'Ventura Securities · Thane', title:'Senior means responsible',
   photo:'./assets/images/ventura-2025.jpeg',
   text:'Shaping product direction, not just design. Trading, wealth, options strategies. The most senior I\'ve been — and the most ownership I\'ve held.',
   tags:['Product strategy','Wealth tech','Current']},
];

// Education deck data
var edu_data = [
  {
    inst:'Deakin University', logo:'🎓',
    degree:'Post Graduate in Communication Design',
    spec:'Digital & Design Thinking',
    period:'Jun 2018 – Jul 2019',
    note:'Bridged design craft with strategic thinking — shaping how I approach both visual and systems-level problems.',
    tags:['PG Design','Digital','Design Thinking']
  },
  {
    inst:'ICFAI University (IBS)', logo:'🏛️',
    degree:'Post Graduate Program in Management (PGDM)',
    spec:'Marketing & Strategy',
    period:'Jun 2014 – May 2016',
    note:'Built the business lens I use every day as a product designer — understanding what drives decisions beyond the interface.',
    tags:['PGDM','Management','Strategy']
  },
  {
    inst:'ICFAI University (IBS)', logo:'🏛️',
    degree:'Bachelors in Business Management (BBA)',
    spec:'Marketing',
    period:'Jun 2011 – May 2014',
    note:'Where it started. Understanding markets, people, and why things get bought — the earliest seeds of user thinking.',
    tags:['BBA','Business','Marketing']
  },
  {
    inst:'IDC – IIT Bombay (CEP)', logo:'⚙️',
    degree:'Design Thinking Workshop',
    spec:'Upholding User Needs & Aspiration for Innovations',
    period:'Jan 2020',
    note:'Spent a week with India\'s finest design thinkers. Came back with sharper questions, not just better answers.',
    tags:['Design Thinking','IIT Bombay','Innovation']
  },
  {
    inst:'Academy XI – Melbourne', logo:'🇦🇺',
    degree:'User Experience Design',
    spec:'UX Foundations',
    period:'2018',
    note:'International perspective on UX craft — challenged my Mumbai-centric assumptions and sharpened my global product lens.',
    tags:['UX Design','Australia','International']
  },
  {
    inst:'The Interaction Design Foundation', logo:'🌐',
    degree:'Multiple Courses',
    spec:'IxDF Certified',
    period:'Aug 2018 – ongoing',
    note:'The go-to resource for staying sharp. Courses on research, information architecture, psychology of design, and more.',
    tags:['IxDF','Research','Continuous learning']
  },
];

window.activeDeck = null;
var activeDeck = window.activeDeck;

function openCombined() {
  var combined=[];
  for(var i=0;i<reco_data.length;i++) combined.push({_type:'reco',data:reco_data[i]});
  for(var i=0;i<charche_data.length;i++) combined.push({_type:'charche',data:charche_data[i]});
  buildDeck('charche-deck','charche-cards',combined,'combined');
  showDeck('charche-deck');
}
function openCharche(){
  buildDeck('charche-deck','charche-cards',reco_data,'charche');
  showDeck('charche-deck');
}
function openReco(){openCombined();}
function openMemory() {
  buildDeck('memory-deck','memory-cards',memory_data,'memory');
  showDeck('memory-deck');
}
function openEdu() {
  buildDeck('edu-deck','edu-cards',edu_data,'edu');
  showDeck('edu-deck');
}
function showDeck(id) {
  activeDeck = id; window.activeDeck = id;
  document.getElementById('deck-backdrop').classList.add('show');
  document.getElementById(id).classList.add('show');
  var ab = document.getElementById('action-bar');
  if(ab) { ab.style.opacity='0'; ab.style.pointerEvents='none'; }
}
function closeDeck(id) {
  if(!id) return;
  var el = document.getElementById(id);
  if(el) el.classList.remove('show');
  document.getElementById('deck-backdrop').classList.remove('show');
  var ab = document.getElementById('action-bar');
  if(ab) { ab.style.opacity='1'; ab.style.pointerEvents='all'; }
  activeDeck = null; window.activeDeck = null;
}
// keydown handled in main script
document.addEventListener('click', function(e) {
  if(activeDeck && e.target.id==='deck-backdrop') closeDeck(activeDeck);
});

function buildDeck(deckId, cardsId, data, type) {
  var container = document.getElementById(cardsId);
  // Clear only flip-cards, preserve the count badge
  container.querySelectorAll('.flip-card').forEach(function(c){c.remove();});
  // Update or create count badge
  var badge = container.querySelector('.deck-count');
  if(!badge) {
    badge = document.createElement('div');
    badge.className = 'deck-count';
    container.appendChild(badge);
  }
  badge.textContent = data.length;

  data.forEach(function(d, i) {
    var card = document.createElement('div');
    card.className = 'flip-card';
    card.dataset.idx = i;
    card.style.zIndex = data.length - i;
    if(type==='charche') {
      var initials = d.avatar || (d.name ? d.name.split(' ').map(function(w){return w[0];}).join('') : '?');
      card.innerHTML =
        '<div class="card-face card-front" style="justify-content:space-between;">' +
          '<div style="font-family:var(--serif);font-size:52px;color:rgba(200,134,74,0.22);line-height:1;margin-bottom:-8px;">\u201c</div>' +
          '<div style="font-family:var(--serif);font-style:italic;font-size:clamp(13px,1.45vw,16px);line-height:1.8;color:rgba(255,252,245,0.88);flex:1;overflow:hidden;">'+(d.quote||d.body||'')+'</div>' +
          '<div style="border-top:1px solid rgba(255,255,255,0.08);padding-top:14px;margin-top:14px;display:flex;align-items:center;gap:12px;">' +
            '<div style="width:36px;height:36px;border-radius:50%;background:rgba(200,134,74,0.15);border:1px solid rgba(200,134,74,0.3);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:10px;color:var(--accent);flex-shrink:0;">'+(initials)+'</div>' +
            '<div>' +
              '<div style="font-family:var(--serif);font-size:15px;font-weight:400;color:rgba(255,252,245,0.95);line-height:1.2;">'+(d.name||d.title||'')+'</div>' +
              '<div style="font-family:var(--mono);font-size:7px;letter-spacing:.15em;text-transform:uppercase;color:rgba(232,224,208,0.38);margin-top:3px;">'+(d.role||d.cat||'')+'</div>' +
              '<div style="font-family:var(--mono);font-size:6.5px;letter-spacing:.12em;text-transform:uppercase;color:rgba(232,224,208,0.22);margin-top:1px;">'+(d.rel||'')+'</div>' +
            '</div>' +
          '</div>' +
          '<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:10px;">'+(d.tags||[]).map(function(t){return'<span style="padding:2px 8px;border:1px solid rgba(255,255,255,0.07);border-radius:20px;font-family:var(--mono);font-size:6px;letter-spacing:.12em;text-transform:uppercase;color:rgba(232,224,208,0.28);">'+t+'</span>';}).join('')+'</div>' +
        '</div>';
} else if(type==='reco') {
      card.innerHTML =
        '<div class="card-face card-front reco-front">' +
          '<div class="reco-avatar">'+d.avatar+'</div>' +
          '<div class="reco-name">'+d.name+'</div>' +
          '<div class="reco-role">'+d.role+'</div>' +
          '<div class="reco-rel">'+d.rel+'</div>' +
          '<div class="cc-flip-hint">tap to read</div>' +
        '</div>' +
        '<div class="card-face card-back reco-back">' +
          '<div class="reco-quote">"'+d.quote+'"</div>' +
          '<div class="reco-name-sm">— '+d.name+'</div>' +
          '<div class="mc-tags" style="margin-top:12px">'+d.tags.map(function(t){return'<span class="mc-tag">'+t+'</span>';}).join('')+'</div>' +
          '<div class="cc-next" onclick="nextCardSwipe(event,\''+deckId+'\')">Next →</div>' +
        '</div>';
    } else if(type==='memory') {
      card.innerHTML =
        '<div class="card-face card-front mem-photo-front">' +
          (d.photo ? '<div class="mem-full-photo" style="background-image:url(\''+d.photo+'\')"></div>' : '<div class="mem-full-photo mem-no-photo"></div>') +
          '<div class="mem-photo-overlay"></div>' +
          '<div class="mem-photo-label">' +
            '<div class="mem-photo-year">'+d.year+'</div>' +
            '<div class="mem-photo-title">'+d.title+'</div>' +
          '</div>' +
          '<div class="cc-flip-hint" style="position:absolute;bottom:14px;right:16px;z-index:3">tap to read</div>' +
        '</div>' +
        '<div class="card-face card-back">' +
          '<div class="mc-year" style="font-size:28px;margin-bottom:4px">'+d.year+'</div>' +
          '<div class="mc-place">'+d.place+'</div>' +
          '<div class="mc-back-text">'+d.text+'</div>' +
          '<div class="mc-tags" style="margin-top:12px">'+d.tags.map(function(t){return'<span class="mc-tag">'+t+'</span>';}).join('')+'</div>' +
          '<div class="cc-next" onclick="nextCardSwipe(event,\''+deckId+'\')">Next chapter →</div>' +
        '</div>';
    } else if(type==='edu') {
      card.innerHTML =
        '<div class="card-face card-front edu-front">' +
          '<div class="edu-logo">'+d.logo+'</div>' +
          '<div class="edu-inst">'+d.inst+'</div>' +
          '<div class="edu-degree">'+d.degree+'</div>' +
          '<div class="edu-spec">'+d.spec+'</div>' +
          '<div class="edu-period">'+d.period+'</div>' +
          '<div class="cc-flip-hint">tap to read</div>' +
        '</div>' +
        '<div class="card-face card-back edu-back">' +
          '<div class="edu-inst">'+d.inst+'</div>' +
          '<div class="edu-note">'+d.note+'</div>' +
          '<div class="mc-tags" style="margin-top:auto">'+d.tags.map(function(t){return'<span class="mc-tag">'+t+'</span>';}).join('')+'</div>' +
          '<div class="cc-next" onclick="nextCardSwipe(event,\''+deckId+'\')">Next →</div>' +
        '</div>';
    } else {
      card.innerHTML =
        '<div class="card-face card-front">' +
          '<div class="mc-year">'+d.year+'</div>' +
          '<div class="mc-place">'+d.place+'</div>' +
          '<div class="mc-title">'+d.title+'</div>' +
          '<div class="mc-tags">'+d.tags.map(function(t){return'<span class="mc-tag">'+t+'</span>';}).join('')+'</div>' +
        '</div>' +
        '<div class="card-face card-back">' +
          '<div class="mc-place">'+d.place+'</div>' +
          '<div class="mc-back-text">'+d.text+'</div>' +
          '<div class="cc-next" onclick="nextCardSwipe(event,\''+deckId+'\')">Next chapter →</div>' +
        '</div>';
    }
    // Click to flip top card only
    card.addEventListener('click', function(e) {
      if(e.target.classList.contains('cc-next')) return;
      var topCards = container.querySelectorAll('.flip-card:not(.swiping-left)');
      if(topCards.length > 0 && topCards[0] === card) card.classList.toggle('flipped');
    });
    // Drag-to-swipe
    addDragSwipe(card, deckId, container);
    container.appendChild(card);
  });

  // Dots — placed on the deck container, not the cards container
  var deck = document.getElementById(deckId);
  // Remove old nav
  ['deck-dots','deck-nav'].forEach(function(cn){
    var old = deck.querySelector('.'+cn); if(old) old.remove();
  });
  // Arrow nav
  var nav = document.createElement('div');
  nav.className = 'deck-nav';
  var btnPrev = document.createElement('button');
  btnPrev.className = 'deck-arrow';
  btnPrev.innerHTML = '&#8592;';
  btnPrev.title = 'Previous';
  btnPrev.onclick = function(e){ e.stopPropagation(); prevCard(deckId); };
  var counter = document.createElement('div');
  counter.className = 'deck-counter';
  counter.id = deckId+'-counter';
  counter.textContent = '1 / '+data.length;
  var btnNext = document.createElement('button');
  btnNext.className = 'deck-arrow';
  btnNext.innerHTML = '&#8594;';
  btnNext.title = 'Next';
  btnNext.onclick = function(e){ e.stopPropagation(); nextCard(deckId); };
  nav.appendChild(btnPrev);
  nav.appendChild(counter);
  nav.appendChild(btnNext);
  deck.appendChild(nav);
  // Dots
  var dots = document.createElement('div');
  dots.className = 'deck-dots';
  data.forEach(function(_,i) {
    var dot = document.createElement('div');
    dot.className = 'deck-dot'+(i===0?' active':'');
    dot.onclick = function(){ goToCard(deckId,i); };
    dots.appendChild(dot);
  });
  deck.appendChild(dots);
  updateDots(deckId, container); // set initial stack;
}

function addDragSwipe(card, deckId, container) {
  var startX=0, startY=0, dragging=false, moved=false;
  function onDown(e) {
    var topCards = container.querySelectorAll('.flip-card:not(.swiping-left)');
    if(!topCards.length || topCards[0] !== card) return;
    startX = e.type==='touchstart' ? e.touches[0].clientX : e.clientX;
    startY = e.type==='touchstart' ? e.touches[0].clientY : e.clientY;
    dragging=true; moved=false;
    card.style.transition='none';
  }
  function onMove(e) {
    if(!dragging) return;
    var cx = e.type==='touchmove' ? e.touches[0].clientX : e.clientX;
    var cy = e.type==='touchmove' ? e.touches[0].clientY : e.clientY;
    var dx=cx-startX, dy=cy-startY;
    if(Math.abs(dx)>6) moved=true;
    if(moved) {
      card.style.transform='rotate('+Math.min(Math.max(dx*0.05,-18),18)+'deg) translateX('+dx*0.4+'px) translateY('+(dy*0.15)+'px)';
      card.style.opacity = Math.max(0.4, 1-Math.abs(dx)/320);
      if(e.cancelable) e.preventDefault();
    }
  }
  function onUp(e) {
    if(!dragging) return;
    dragging=false;
    var ex = e.type==='touchend' ? (e.changedTouches[0]||{}).clientX : e.clientX;
    var dx = (ex||startX) - startX;
    card.style.transition='';
    card.style.opacity='';
    if(moved && Math.abs(dx)>80) {
      nextCardSwipe(null, deckId);
    } else {
      card.style.transform='';
    }
  }
  card.addEventListener('mousedown', onDown);
  card.addEventListener('touchstart', onDown, {passive:true});
  // Use card's parent container for move/up instead of document to reduce listener count
  card.addEventListener('mousemove', onMove);
  card.addEventListener('mouseup', onUp);
  card.addEventListener('mouseleave', onUp);
  card.addEventListener('touchmove', onMove, {passive:false});
  card.addEventListener('touchend', onUp);
}

function nextCardSwipe(e, deckId) {
  if(e) e.stopPropagation();
  var cid = deckId==='charche-deck'?'charche-cards':deckId==='edu-deck'?'edu-cards':'memory-cards';
  var container = document.getElementById(cid);
  var cards = container.querySelectorAll('.flip-card:not(.swiping-left)');
  if(!cards.length) return;
  var top = cards[0];
  top.classList.remove('flipped');
  top.style.transform='';
  top.classList.add('swiping-left');
  setTimeout(function() {
    top.classList.remove('swiping-left','flipped');
    top.style.transform='';
    container.appendChild(top);
    updateDots(deckId, container);
  }, 420);
}
function nextCard(deckId) { nextCardSwipe(null, deckId); }
function prevCard(deckId) {
  var cid = deckId==='charche-deck'?'charche-cards':deckId==='edu-deck'?'edu-cards':'memory-cards';
  var container = document.getElementById(cid);
  var cards = container.querySelectorAll('.flip-card');
  if(!cards.length) return;
  var last = cards[cards.length-1];
  var firstCard = cards[0];
  container.insertBefore(last, firstCard);
  updateDots(deckId, container);
}
function goToCard(deckId, idx) {
  var cid = deckId==='charche-deck'?'charche-cards':deckId==='edu-deck'?'edu-cards':'memory-cards';
  var container = document.getElementById(cid);
  var cards = container.querySelectorAll('.flip-card');
  if(!cards.length) return;
  var cur = parseInt(cards[0].dataset.idx);
  var data = deckId==='charche-deck'?(window._activeCharcheDeck||charche_data):deckId==='edu-deck'?edu_data:memory_data;
  var steps = (idx - cur + data.length) % data.length;
  var i=0; function step(){if(i>=steps)return;i++;nextCard(deckId);setTimeout(step,120);} step();
}
function updateDots(deckId, container) {
  var cards = container.querySelectorAll('.flip-card:not(.swiping-left)');
  var top = cards.length>0 ? parseInt(cards[0].dataset.idx) : 0;
  var total = container.querySelectorAll('.flip-card').length;
  document.querySelectorAll('#'+deckId+' .deck-dot').forEach(function(d,i){
    d.classList.toggle('active', i===top);
  });
  var counter = document.getElementById(deckId+'-counter');
  if(counter) counter.textContent = (top+1)+' / '+total;
  // Re-apply stack offsets in JS so they're independent of DOM order
  var allCards = container.querySelectorAll('.flip-card');
  var transforms = [
    'rotate(0deg) translateY(0px)',
    'rotate(-2deg) translateY(8px)',
    'rotate(2deg) translateY(16px)',
    'rotate(-1deg) translateY(22px)',
  ];
  allCards.forEach(function(card, i) {
    card.style.transform = transforms[Math.min(i, transforms.length-1)];
    card.style.zIndex = allCards.length - i;
    card.style.background = '#1a140e'; // force solid bg on every reorder
  });
}


// ── MAP & INTERACTIONS ──────────────────────────────────────────────────

const locs = [
  { id:'chembur', name:'Home', sub:'Eastern Suburbs · Home base since 2014', type:'home', color:'#c8864a', icon:'🏡', lat:19.0626, lng:72.8993,
    quote:'"Design teaches you to observe. Fatherhood teaches you why it matters."',
    stats:[{num:'1',label:'Kid'},{num:'∞',label:'Chai cups'}],
    day:[{t:'Evening',a:'Reach home, take care of the baby',n:'Switch off from work. Most important part of the day.'},{t:'Weekends',a:'Baby duty, then the mall',n:'Observe how families navigate spaces. Unintentional UX research.'},{t:'Holidays',a:'Full-time dad',n:'No half-measures. Baby gets everything.'},{t:'Late nights',a:'Read articles when there is time',n:'Design, fintech, product — whatever caught my eye during the week.'},{t:'Always',a:'Observe people everywhere',n:'Malls, commutes, queues — watching how people behave is the real brief.'}],
    projects:[{title:'Father · Home',year:'Ongoing',desc:'[Placeholder] A personal note about family life and what fatherhood has taught him about design and empathy.',tags:['Family','Life','Empathy']},{title:'Personal Design Practice',year:'2020–',desc:'[Placeholder] Side projects and explorations done from home.',tags:['Side projects','Exploration']}]
  },
  { id:'dadar', name:'Axis Bank–Freecharge', sub:'Dadar · Mar 2021 – Dec 2024', type:'work', color:'#6aa3d4', icon:'🏦', lat:19.0178, lng:72.8478,
    quote:'"Banking at scale is humbling. Every decision touches 240 million people."',
    stats:[{num:'3.5',label:'Years'},{num:'240M+',label:'Customers'},{num:'100+',label:'Designers supported'}],
    day:[{t:'9:00',a:'Harbour line commute',n:'Podcasts and people-watching from Chembur.'},{t:'10:00',a:'Design system syncs & sprint reviews',n:'Aligning across Axis Design Lab.'},{t:'13:00',a:'Irani café lunch run',n:'Best bun maska in the city, two lanes away.'},{t:'15:00',a:'Design audits & stakeholder reviews',n:'Ensuring quality and alignment at scale.'},{t:'19:00',a:'Harbour line back to Chembur',n:'Long commute — time to decompress and plan the next day.'}],
    projects:[{title:'Investment Journeys & Digital Onboarding',year:'2021–2023',desc:'Led the redesign of investment journeys, PFM tools, and digital onboarding flows for Axis Bank banking products — including a major revamp of the Axis Securities trading platform.',tags:['Product Design','Investment UX','Onboarding']},{title:'Subzero 1.0 — Axis Bank Design System',year:'2022',desc:'Spearheaded creation of Axis Bank\'s design system (Subzero 1.0), supporting 100+ designers and developers. Established governance, component libraries, and accessibility standards.',tags:['Design Systems','Accessibility','Scale']}]
  },
  { id:'andheri', name:'Drip Capital', sub:'Andheri · Jun 2019 – Mar 2021', type:'work', color:'#6aa3d4', icon:'💱', lat:19.1136, lng:72.8697,
    quote:'"B2B design is a different animal. Your user is a CFO with zero patience."',
    stats:[{num:'2',label:'Years'},{num:'1',label:'Design system built'},{num:'3',label:'Core products'}],
    day:[{t:'9:30',a:'Western Express Highway to Andheri',n:'Long drive. Good time to think through the day.'},{t:'10:30',a:'Product & design syncs',n:'Tight loops with PM and engineering.'},{t:'13:30',a:'Lunch at Veera Desai',n:''},{t:'15:00',a:'User research sessions',n:'Watching trade finance managers use the product.'},{t:'19:00',a:'Drive back to Chembur',n:'Ideas get noted at traffic signals.'}],
    projects:[{title:'End-to-End Product Design — Trade Finance Suite',year:'2019–2021',desc:'Owned end-to-end product design for Drip Capital\'s suite — delivering consistent, intuitive experiences for trade finance solutions across multiple product lines.',tags:['B2B','Product Design','Trade Finance']},{title:'Tradehub — B2B Cross-Border Marketplace',year:'2020',desc:'Designed the MVP of Tradehub, a B2B cross-border marketplace simplifying procurement and wholesale management for global SMEs. Partnered with PMs and Engineers in an agile environment.',tags:['Marketplace','Global SMEs','MVP']}]
  },
  { id:'thane', name:'Ventura Securities', sub:'Thane · Jan 2025 – Present', type:'work', color:'#f4a637', icon:'📈', lat:19.2183, lng:72.9781,
    quote:'"At this level, design is strategy. Every call shapes the product roadmap."',
    stats:[{num:'Head of',label:'Product Design'},{num:'5',label:'Products'}],
    day:[{t:'8:30',a:'Eastern Express Highway to Thane',n:'Long drive. Podcasts on strategy and market trends.'},{t:'10:00',a:'Cross-functional leadership sessions',n:'Design vision, strategy, and roadmap alignment.'},{t:'13:00',a:'Working lunch — design critiques',n:'Feedback culture built here.'},{t:'15:00',a:'AI workflow explorations',n:'Integrating AI into prototyping and decision-making.'},{t:'19:30',a:'Drive back to Chembur',n:'Eastern Express in the evening. Long but predictable.'}],
    projects:[{title:'Trading & Options UX — Ventura Platform',year:'2025',desc:'Driving design vision and strategy for Ventura\'s trading and investing products. Simplified options strategies and trader journeys (MTF, alerts, orders, portfolio) to improve usability and engagement.',tags:['Trading UX','Options','Wealth Tech']},{title:'Ventura Design Library',year:'2025',desc:'Laid the foundation for Ventura\'s Design Library — ensuring consistency, accessibility, and scalability across all products. Integrated AI into design workflows for faster prototyping and insights.',tags:['Design System','AI Workflows','Accessibility']}]
  },
  { id:'borivali', name:'Oyster Living', sub:'Borivali · Apr 2016 – Jul 2018', type:'work', color:'#6aa3d4', icon:'🏠', lat:19.2307, lng:72.8567,
    quote:'"Real estate is about dreaming. My job was to make the dream feel real on-screen."',
    stats:[{num:'2',label:'Years'},{num:'3',label:'Products'},{num:'↑',label:'Lead conversion'}],
    day:[{t:'8:00',a:'Western Express Highway to Borivali',n:'Early start — highway is clear before 8.'},{t:'9:30',a:'Marketing & product syncs',n:'Aligning design with growth goals.'},{t:'13:00',a:'Working lunch — campaign reviews',n:''},{t:'15:00',a:'UX improvements & responsiveness work',n:'Bridging marketing design with product thinking.'},{t:'19:00',a:'Drive back to Chembur',n:'Evening traffic on Western Express. Good for unwinding.'}],
    projects:[{title:'Digital Touchpoints — Oyster Living',year:'2016–2018',desc:'Improved digital product touchpoints (website, campaigns, lead-gen flows) through UX enhancements, responsiveness, and SEO-driven design. Introduced real-time chat and engagement features.',tags:['Growth Design','Lead Gen','Real Estate']},{title:'User Engagement & Conversion',year:'2017',desc:'Increased user interaction and lead conversion by collaborating with cross-functional teams to align marketing design with business growth goals.',tags:['Conversion','CRO','UX']}]
  }
];

const timeCfg = {
  all:       { overlay:'transparent',               ghost:'Mumbai',    sky:'transparent',skyOpacity:0,
    vignette:'radial-gradient(ellipse 80% 72% at 50% 52%,transparent 0%,transparent 38%,rgba(14,10,6,.45) 62%,rgba(10,7,4,.92) 100%)',
    tileFilter:'saturate(0.6) brightness(1.0) sepia(0.25) contrast(1.05)',
    toastIco:'🗺️',toastLabel:'Overview',toastSub:'The full picture' },

  morning:   { overlay:'rgba(255,160,60,0.06)',     ghost:'सुबह',     sky:'linear-gradient(to bottom,rgba(255,140,30,0.22) 0%,rgba(255,180,80,0.08) 50%,transparent 100%)',skyOpacity:1,
    vignette:'radial-gradient(ellipse 80% 72% at 50% 52%,transparent 0%,transparent 35%,rgba(28,14,4,.48) 60%,rgba(20,8,2,.92) 100%)',
    tileFilter:'saturate(0.75) brightness(1.15) sepia(0.35) hue-rotate(5deg) contrast(0.98)',
    toastIco:'🌅',toastLabel:'Morning',toastSub:'Creta warming up' },

  afternoon: { overlay:'rgba(200,220,255,0.04)',    ghost:'दोपहर',    sky:'linear-gradient(to bottom,rgba(80,130,200,0.10) 0%,transparent 50%)',skyOpacity:1,
    vignette:'radial-gradient(ellipse 80% 72% at 50% 52%,transparent 0%,transparent 40%,rgba(6,10,18,.42) 65%,rgba(4,7,14,.88) 100%)',
    tileFilter:'saturate(0.55) brightness(1.08) sepia(0.18) contrast(1.02)',
    toastIco:'☀️',toastLabel:'Afternoon',toastSub:'Figma is open' },

  evening:   { overlay:'rgba(180,55,10,0.14)',      ghost:'शाम',      sky:'linear-gradient(to bottom,rgba(200,70,15,0.32) 0%,rgba(240,120,30,0.16) 45%,transparent 100%)',skyOpacity:1,
    vignette:'radial-gradient(ellipse 80% 72% at 50% 52%,transparent 0%,transparent 28%,rgba(40,10,2,.58) 56%,rgba(26,4,1,.96) 100%)',
    tileFilter:'saturate(0.7) brightness(0.78) sepia(0.55) hue-rotate(3deg) contrast(1.05)',
    toastIco:'🌆',toastLabel:'Evening',toastSub:'Chai no. 4' },

  night:     { overlay:'rgba(4,3,22,0.50)',         ghost:'रात',      sky:'linear-gradient(to bottom,rgba(4,2,20,0.80) 0%,rgba(10,5,38,0.50) 60%,transparent 100%)',skyOpacity:1,
    vignette:'radial-gradient(ellipse 80% 72% at 50% 52%,transparent 0%,transparent 22%,rgba(4,2,14,.72) 50%,rgba(1,1,6,.98) 100%)',
    tileFilter:'saturate(0.1) brightness(0.35) hue-rotate(200deg) contrast(1.15)',
    toastIco:'🌙',toastLabel:'Night',toastSub:'Dad mode on' },
};
const DEFAULT_CENTER=[19.13,72.905], DEFAULT_ZOOM=12;
let map,cretaMarker,driving=false,currentLoc=null,currentPanelLoc=null,panelOpen=false,introGone=false,curTime='all',toastTimer=null;
const pinMarkers={};
const CRETA_IMG=`./assets/images/creta-car.png`;

const map_=L.map('map',{center:DEFAULT_CENTER,zoom:DEFAULT_ZOOM,zoomControl:false,attributionControl:false,dragging:true,scrollWheelZoom:true,minZoom:11,maxZoom:16,maxBounds:[[18.85,72.70],[19.40,73.10]],maxBoundsViscosity:0.6});
map=map_;
// Fit map to show all pin locations with padding
const pinBounds = L.latLngBounds(locs.map(l=>[l.lat,l.lng]));
map.fitBounds(pinBounds, {padding:[80,80]});
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{subdomains:'abcd',maxZoom:20,attribution:''}).addTo(map);

function makeHeroPin(loc){
  const tc=`is-${loc.type}`;
  const currentClass=loc.id==='thane'?' is-current':''; const html=`<div class="hero-pin-wrap ${tc}${currentClass}" style="--bubble-color:${loc.color};--bubble-glow:${loc.color}55"><div class="hero-bubble"><div class="bubble-bg"></div><div class="bubble-ring"></div><div class="bubble-inner"></div><div class="bubble-pulse"></div><div class="bubble-pulse2"></div><div class="bubble-icon">${loc.icon}</div></div><div class="pin-stem"></div><div class="pin-label"><div class="pin-label-name">${loc.name}</div><div class="pin-label-sub">${loc.type==='home'?'Home':loc.type==='work'?'Workplace':loc.type==='education'?'Education':'Life spot'}</div></div></div>`;
  const sz=loc.type==='home'?[130,115]:[110,96];
  return L.divIcon({html,className:'',iconSize:sz,iconAnchor:[sz[0]/2,sz[1]*.54]});
}
locs.forEach(loc=>{
  const m=L.marker([loc.lat,loc.lng],{icon:makeHeroPin(loc),zIndexOffset:loc.type==='home'?200:100}).addTo(map);
  m.on('mouseover',e=>showTooltip(loc,e.originalEvent));
  m.on('mousemove',e=>moveTooltip(e.originalEvent));
  m.on('mouseout',()=>hideTooltip());
  m.on('click',()=>handlePinClick(loc));
  pinMarkers[loc.id]=m;
});

function cretaSVG(d=false){const dp=d?`<div style="position:absolute;top:50%;left:90%;transform:translateY(-50%);display:flex;flex-direction:column;gap:5px;margin-left:2px;"><div style="width:5px;height:3px;border-radius:1px;background:#f9c84a;box-shadow:0 0 6px #f9c84a;animation:dipper-blink .55s ease-in-out infinite alternate;"></div><div style="width:5px;height:3px;border-radius:1px;background:#f9c84a;box-shadow:0 0 6px #f9c84a;animation:dipper-blink .55s ease-in-out infinite alternate .1s;"></div></div>`:'';return `<div style="position:relative;display:inline-block;"><img src="${CRETA_IMG}" width="60" height="45" style="display:block;filter:drop-shadow(0 3px 8px rgba(0,0,0,.6));"/>${dp}</div>`;}
function makeCretaIcon(a,d=false){return L.divIcon({html:`<div style="transform:rotate(${a}deg);transform-origin:center center;">${cretaSVG(d)}</div>`,className:'',iconSize:[60,45],iconAnchor:[30,22]});}
function spawnCreta(loc){currentLoc=loc;cretaMarker=L.marker([loc.lat,loc.lng],{icon:makeCretaIcon(0),interactive:false,zIndexOffset:1000}).addTo(map);}
function driveTo(from,to,cb){if(!cretaMarker){spawnCreta(from);}driving=true;const DUR=1800,t0=performance.now();let lLat=from.lat,lLng=from.lng;function ease(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}function step(now){const raw=Math.min((now-t0)/DUR,1),t=ease(raw);const lat=from.lat+(to.lat-from.lat)*t,lng=from.lng+(to.lng-from.lng)*t;const dLat=lat-lLat,dLng=lng-lLng;let a=0;if(Math.abs(dLat)>1e-8||Math.abs(dLng)>1e-8)a=Math.atan2(-dLat,dLng)*180/Math.PI;cretaMarker.setLatLng([lat,lng]);cretaMarker.setIcon(makeCretaIcon(a,true));if(raw>.05&&raw<.95){const pt=map.latLngToContainerPoint([lat,lng]);spawnTrail(pt.x,pt.y);}lLat=lat;lLng=lng;if(raw<1)requestAnimationFrame(step);else{cretaMarker.setLatLng([to.lat,to.lng]);cretaMarker.setIcon(makeCretaIcon(a,false));driving=false;currentLoc=to;cb&&cb();}}requestAnimationFrame(step);}
let trailCD=0;
function spawnTrail(x,y){const now=Date.now();if(now-trailCD<150)return;trailCD=now;const el=document.createElement('div');el.className='creta-trail';const s=6+Math.random()*4;el.style.cssText=`width:${s}px;height:${s}px;left:${x-s/2}px;top:${y-s/2}px;position:fixed;z-index:4000;`;document.body.appendChild(el);setTimeout(()=>el.remove(),600);}

const ttEl=document.getElementById('tooltip');
function showTooltip(loc,e){const labels={home:'🏠 Home',work:'💼 Workplace',life:'✨ Life spot',education:'🎓 Education'};document.getElementById('tt-type').textContent=labels[loc.type]||labels['life'];document.getElementById('tt-type').style.color=loc.color;document.getElementById('tt-name').textContent=loc.name;document.getElementById('tt-sub').textContent=loc.sub;posTooltip(e);ttEl.classList.add('show');document.getElementById('cur').classList.add('big');}
function moveTooltip(e){posTooltip(e);}
function posTooltip(e){const m=18,w=200,h=110;let x=e.clientX+m,y=e.clientY+m;if(x+w>window.innerWidth)x=e.clientX-w-m;if(y+h>window.innerHeight)y=e.clientY-h-m;ttEl.style.left=x+'px';ttEl.style.top=y+'px';}
function hideTooltip(){ttEl.classList.remove('show');document.getElementById('cur').classList.remove('big');}

function handlePinClick(loc){if(driving)return;hideTooltip();const from=currentLoc||locs[0];if(from.id===loc.id){doOpenPanel(loc);return;}if(panelOpen){document.getElementById('panel').classList.remove('open');panelOpen=false;}driveTo(from,loc,()=>setTimeout(()=>doOpenPanel(loc),200));}

function doOpenPanel(loc){
  map.flyTo([loc.lat,loc.lng],13,{duration:0.8,easeLinearity:.3,animate:true});
  Object.values(pinMarkers).forEach(m=>{const el=m.getElement();if(!el)return;const w=el.querySelector('.hero-pin-wrap');if(w)w.classList.remove('active');});
  const am=pinMarkers[loc.id];if(am){const el=am.getElement();if(el){const w=el.querySelector('.hero-pin-wrap');if(w)w.classList.add('active');}}
  const labels={home:'🏠 Home',work:'💼 Workplace',life:'✨ Life spot',education:'🎓 Education'};
  document.getElementById('panel-bar').style.background=loc.color;
  document.getElementById('ph-eyebrow').style.color=loc.color;
  document.getElementById('ph-eyebrow').textContent=labels[loc.type];
  document.getElementById('ph-name').textContent=loc.name;
  document.getElementById('ph-sub').textContent=loc.sub;
  document.getElementById('ph-stats').innerHTML=(loc.stats||[]).map(s=>`<div class="p-stat"><div class="p-stat-num" style="color:${loc.color}">${s.num}</div><div class="p-stat-label">${s.label}</div></div>`).join('');
  const dayHTML=loc.day.map(d=>`<div class="tl-row"><div class="tl-t">${d.t}</div><div class="tl-dot" style="background:${loc.color};color:${loc.color}"></div><div><div class="tl-a">${d.a}</div>${d.n?`<div class="tl-n">${d.n}</div>`:''}</div></div>`).join('');
  const logoMap={'axisbank.com':'Axis Bank','dripcapital.com':'Drip Capital','venturasecurities.com':'Ventura Securities','oyster.com':'Oyster Living','isobar.com':'Isobar'};
const locLogos={'dadar':'https://logo.clearbit.com/axisbank.com','andheri':'https://logo.clearbit.com/dripcapital.com','thane':'https://logo.clearbit.com/venturasecurities.com','borivali':'https://logo.clearbit.com/oyster.com','chembur':null,'matunga':null};
const logoUrl=locLogos[loc.id]||null;
const logoHtml=logoUrl?`<div class="proj-logo-wrap"><img src="${logoUrl}" class="proj-logo" onerror="this.parentElement.style.display='none'"></div>`:'';
const projHTML=loc.projects.map(p=>`<div class="proj"><div class="proj-header">${logoHtml}<div class="proj-header-text"><div class="proj-title">${p.title}</div><div class="proj-year" style="color:${loc.color}88">${p.year||''}</div></div></div><div class="proj-body"><div class="proj-desc">${p.desc}</div><div class="proj-tags">${p.tags.map(t=>`<span class="proj-tag">${t}</span>`).join('')}</div></div></div>`).join('');
  document.getElementById('panel-body').innerHTML=`<div class="panel-section"><div class="p-quote" style="border-left:2px solid ${loc.color}">${loc.quote}</div></div><div class="panel-section"><div class="p-sec">A day here</div><div class="timeline">${dayHTML}</div></div><div class="panel-section"><div class="p-sec">Work from this chapter</div><div class="projects">${projHTML}</div></div>`;
  document.getElementById('panel-body').scrollTop=0;
  document.getElementById('panel').classList.add('open');
  document.getElementById('hint').style.opacity='0';
  document.getElementById('nav-arrows').classList.add('visible');
  panelOpen=true;currentPanelLoc=loc;
  // Prevent map jump on panel open
  setTimeout(()=>map&&map.invalidateSize({pan:false}),50);
}

function closePanel(){document.getElementById('panel').classList.remove('open');document.getElementById('hint').style.opacity='';document.getElementById('nav-arrows').classList.remove('visible');Object.values(pinMarkers).forEach(m=>{const el=m.getElement();if(!el)return;const w=el.querySelector('.hero-pin-wrap');if(w)w.classList.remove('active');});panelOpen=false;currentPanelLoc=null;map.flyToBounds(L.latLngBounds(locs.map(l=>[l.lat,l.lng])),{padding:[80,80],duration:1.0,easeLinearity:.3});}
function navPin(dir){if(driving)return;const idx=locs.findIndex(l=>l.id===(currentPanelLoc||currentLoc||locs[0]).id);handlePinClick(locs[(idx+dir+locs.length)%locs.length]);}

// keydown handled below
document.getElementById('map').addEventListener('click',()=>{if(panelOpen)closePanel();});

function setTime(t){curTime=t;const cfg=timeCfg[t];document.getElementById('time-overlay').style.background=cfg.overlay;const sky=document.getElementById('sky');sky.style.background=cfg.sky;sky.style.opacity=cfg.skyOpacity;document.getElementById('vignette').style.background=cfg.vignette;document.getElementById('ghost').textContent=cfg.ghost;document.querySelectorAll('.tbtn').forEach(b=>b.classList.toggle('on',b.dataset.t===t));styleTiles();showModeToast(cfg);}
function showModeToast(cfg){const t=document.getElementById('mode-toast');t.innerHTML=`<span class="toast-ico">${cfg.toastIco}</span><span class="toast-label">${cfg.toastLabel}</span><span class="toast-sub">— ${cfg.toastSub}</span>`;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2800);}
function styleTiles(){const f=timeCfg[curTime].tileFilter;document.querySelectorAll('.leaflet-tile').forEach(tile=>{tile.style.filter=f;tile.style.transition='filter 1.5s ease';});map.off('tileload',styleTiles);map.on('tileload',styleTiles);}

function backToLanding(){
  document.getElementById('intro').classList.remove('gone');
  document.getElementById('map-ui').classList.remove('visible');
  document.getElementById('hud').classList.remove('visible');
  var ab=document.getElementById('action-bar');
  if(ab){ab.style.opacity='0';}
  if(panelOpen){document.getElementById('panel').classList.remove('open');panelOpen=false;}
  if(window.activeDeck)closeDeck(window.activeDeck);
  introGone=false;
}
function enterPortfolio(){
  setTimeout(function(){
    var ab = document.getElementById('action-bar');
    if(ab){ ab.style.opacity='1'; ab.style.pointerEvents='all'; }
  }, 1800);document.getElementById('intro').classList.add('gone');document.getElementById('map-ui').classList.add('visible');introGone=true;styleTiles();spawnCreta(locs[0]);setTimeout(()=>document.getElementById('hud').classList.add('visible'),1800);}

const curEl=document.getElementById('cur'),ringEl=document.getElementById('cur-ring');
let rx=window.innerWidth/2,ry=window.innerHeight/2;
let _curRaf=false;
document.addEventListener('mousemove',e=>{
  if(_curRaf)return; _curRaf=true;
  requestAnimationFrame(()=>{
    curEl.style.transform=`translate(${e.clientX-5}px,${e.clientY-5}px)`;
    rx+=(e.clientX-rx)*.1; ry+=(e.clientY-ry)*.1;
    ringEl.style.transform=`translate(${rx-16}px,${ry-16}px)`;
    _curRaf=false;
  });
});
document.addEventListener('mouseover',e=>{if(e.target.closest('button,#panel-close,#enter-btn,.hud-link'))curEl.classList.add('big');});
document.addEventListener('mouseout',e=>{if(e.target.closest('button,#panel-close,#enter-btn,.hud-link'))curEl.classList.remove('big');});

// ── PROFILE CARD ──────────────────────────────────────────────────────────
let profileCardOpen = false;
function toggleProfileCard(){
  profileCardOpen = !profileCardOpen;
  document.getElementById('profile-card').classList.toggle('open', profileCardOpen);
}
// Close on outside click
document.addEventListener('click', e => {
  if(profileCardOpen &&
     !e.target.closest('#nameplate') &&
     !e.target.closest('#profile-card')){
    profileCardOpen = false;
    document.getElementById('profile-card').classList.remove('open');
  }
});


// ── QUOTE LOADER ──────────────────────────────────────────────────────────
(function(){
  var quotes = [
    "Apart from empathy, humility is also a trait of a good designer.",
    "Mistakes we make in our projects become a good part of our portfolio. The perfect part is a myth — imperfection is perfection.",
    "When design wants to please everyone, it pleases no one.",
    "Not all drop-offs mean rejection.\nSometimes they mean “I’ll come back to this.”",
    "Good design solves problems.\nGreat design becomes a memory."
  ];
  var qIdx = Math.floor(Math.random() * quotes.length);
  var q = quotes[qIdx];
  var el = document.getElementById('ql-text');
  el.innerHTML = q.split('\n').map(function(line){ return '<span style="display:block">' + line + '</span>'; }).join('');
  var dots = document.getElementById('ql-dots');
  for(var i=0;i<quotes.length;i++){
    var d = document.createElement('div');
    d.className = 'ql-dot' + (i===qIdx?' active':'');
    dots.appendChild(d);
  }
  setTimeout(function(){
    var loader = document.getElementById('quote-loader');
    if(loader){loader.classList.add('gone');loader.style.display='none';}
  }, 2200);
})();

// ── UNIFIED KEYBOARD HANDLER ─────────────────────────────────────────────
document.addEventListener('keydown', function(e) {
  if(window.activeDeck) {
    if(e.key==='ArrowRight'){ e.preventDefault(); e.stopImmediatePropagation(); nextCard(window.activeDeck); return; }
    if(e.key==='ArrowLeft'){  e.preventDefault(); e.stopImmediatePropagation(); prevCard(window.activeDeck); return; }
    if(e.key==='Escape'){     e.preventDefault(); closeDeck(window.activeDeck); return; }
    e.preventDefault(); return;
  }
  if(!introGone) return;
  if(e.key==='ArrowRight'){ e.preventDefault(); navPin(1); }
  if(e.key==='ArrowLeft'){  e.preventDefault(); navPin(-1); }
  if(e.key==='Escape' && panelOpen) closePanel();
});
</script>