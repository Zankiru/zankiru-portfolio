   const DATA = {
      freq: [
        {sig:'QD',        trans:'Once daily'},
        {sig:'BID',       trans:'Two times a day'},
        {sig:'TID',       trans:'Three times a day'},
        {sig:'QID',       trans:'Four times a day'},
        {sig:'QOD',       trans:'Every other day'},
        {sig:'QAM',       trans:'Every morning'},
        {sig:'QPM',       trans:'Every Evening'},
        {sig:'AM',        trans:'In the morning'},
        {sig:'PM',        trans:'In the evening'},
        {sig:'QN',        trans:'Every night'},
        {sig:'HS',        trans:'At bedtime'},
        {sig:'Q2H',       trans:'Every 2 hours'},
        {sig:'Q3-4H',     trans:'Every 3-4 hours'},
        {sig:'Q4H',       trans:'Every 4 hours'},
        {sig:'Q4-6H',     trans:'Every 4-6 hours'},
        {sig:'Q6H',       trans:'Every 6 hours'},
        {sig:'Q6-8H',     trans:'Every 6-8 hours'},
        {sig:'Q8H',       trans:'Every 8 hours'},
        {sig:'Q12H',      trans:'Every 12 hours'},
        {sig:'Q24H',      trans:'Every 24 hours'},
        {sig:'QW',        trans:'Every week'},
        {sig:'QM',        trans:'Every month'},
      ],
      combo: [
        {sig:'1QD',       trans:'Take 1 tablet by mouth once daily'},
        {sig:'1QOD',      trans:'Take one tablet by mouth every other day'},
        {sig:'1BID',      trans:'Take one tablet by mouth two times a day'},
        {sig:'2BID',      trans:'Take 2 tablets by mouth twice daily'},
        {sig:'1TID',      trans:'Take one tablet by mouth three times a day'},
        {sig:'1TID',      trans:'Take 1 tablet by mouth three times daily'},
        {sig:'1QID',      trans:'Take one tablet by mouth four times a day'},
        {sig:'1HS',       trans:'Take one tablet by mouth at bedtime'},
        {sig:'1Q3-4H',    trans:'Take one tablet by mouth every 3 to 4 hours'},
        {sig:'1Q4H',      trans:'Take one tablet by mouth every 4 hours'},
        {sig:'1Q4-6H',    trans:'Take one tablet by mouth every 4-6 hours'},
        {sig:'1Q6H',      trans:'Take one tablet by mouth every 6 hours'},
        {sig:'1Q6-8H',    trans:'Take one tablet by mouth every 6-8 hours'},
        {sig:'1Q8H',      trans:'Take one capsule every 8 hours'},
        {sig:'1Q12H',     trans:'Take one tablet by mouth every 12 hours'},
        {sig:'1Q24H',     trans:'Take one tablet by mouth every 24 hours'},
        {sig:'1QW',       trans:'Take one capsule by mouth every week'},
        {sig:'1QM',       trans:'Take one tablet by mouth every month'},
        {sig:'1TSPQD',    trans:'Take 5ml by mouth once daily'},
        {sig:'1TSPBID',   trans:'Take 5ml by mouth two times a day'},
        {sig:'1SSTSPQD',  trans:'Take 7.5ml by mouth once daily'},
        {sig:'SSTSPQD',   trans:'Take 2.5ml by mouth once daily'},
        {sig:'1ENQD',     trans:'Spray one into each nostril once daily'},
        {sig:'2ENQD',     trans:'Spray two into each nostril twice a day'},
        {sig:'1ADQD',     trans:'Instill one drop into the right ear once daily'},
        {sig:'1ALQD',     trans:'Instill one drop into the left ear once daily'},
        {sig:'1AUQD',     trans:'Instill one drop into both ears once daily'},
        {sig:'1OUQD',     trans:'Instill one drop into each eye once daily'},
        {sig:'1OUBID',    trans:'Instill one drop into each eye two times a day'},
        {sig:'2STAT',     trans:'Take two tablets by mouth now, then'},
        {sig:'2TSPQD',    trans:'Take 10ml by mouth once daily'},
        {sig :'1TSPQID',  trans:'Take 5ml by mouth four times a day'},
        {sig :'1TSPQ6H',  trans:'Take 5ml by mouth every 6 hours'},
        {sig:'1TSPQ8H',   trans:'Take 5ml by mouth every 8 hours'},
        {sig:'1QD AC',    trans:'Take one tablet by mouth one time daily before ameal'},
        {sig:'1QD PC',    trans:'Take one tablet by mouth one time daily after a meal'},
        {sig:'1QD WF',    trans:'Take one tablet by mouth one time daily with food'},
        {sig:'1QD WW',    trans:'Take one tablet by mouth one time daily with a full glass of water'},
        {sig:'2QD WM',    trans:'Take two tablets by mouth one time daily with meals'}
      ],
      route: [
        {sig:'PO',        trans:'By mouth'},
        {sig:'SL',        trans:'Under the tongue'},
        {sig:'IM',        trans:'Intramuscularly'},
        {sig:'SQ',        trans:'Under the skin'},
        {sig:'INJ',       trans:'Inject'},
        {sig:'EN',        trans:'Each Nostril'},
        {sig:'AD',        trans:'Right Ear'},
        {sig:'AL',        trans:'Left Ear'},
        {sig:'AU',        trans:'Both Ears'},
        {sig:'OD',        trans:'Right Eye'},
        {sig:'OS',        trans:'Left Eye'},
        {sig:'OU',        trans:'Both eyes'},
        {sig:'AA',        trans:'Affected area'},
      ],
      prn: [
        {sig:'PRN',       trans:'As needed'},
        {sig:'P',         trans:'For pain'},
        {sig:'NA',        trans:'For Nausea'},
        {sig:'VO',        trans:'For Vomiting'},
        {sig:'NV',        trans:'For Nausea / Vomiting'},
        {sig:'DZ',        trans:'For Dizziness'},
        {sig:'DI',        trans:'For Diarrhea'},
        {sig:'SOB',       trans:'For Shortness of breath'},
        {sig:'WH',        trans:'For Wheezing'},
        {sig:'CG',        trans:'For Cough'},
        {sig:'BP',        trans:'For Blood Pressure'},
        {sig:'CONS',      trans:'For constipation'},
        {sig:'UTI',       trans:'For Urinary Tract Infection'},
      ],
      special: [
        {sig:'AC',        trans:'Before meals'},
        {sig:'PC',        trans:'After meals'},
        {sig:'WF',        trans:'With food'},
        {sig:'WW',        trans:'With a full glass of water'},
        {sig:'AAA',       trans:'Apply to the affected area'},
        {sig:'ATL',       trans:'Apply a thin layer'},
        {sig:'TAD',       trans:'Take as directed'},
        {sig:'UAD',       trans:'Use as directed'},
        {sig:'UD',        trans:'As directed'},
        {sig:'UG',        trans:'Until gone'},
        {sig:'UF',        trans:'Until finished'},
        {sig:'UC',        trans:'Until completed'},
        {sig:'DC',        trans:'Discontinue'},
        {sig:'STAT',      trans:'Now'},
        {sig:'SS',        trans:'One-half'},
        {sig:'U',         trans:'Units'},
        {sig:'MEDROL',    trans:'Take as directed on package'},
        {sig:'DRM',       trans:'Discard remainder of medication'},
      ],
      duration: [
        {sig:'X1W',       trans:'For 1 week'},
        {sig:'X2W',       trans:'For 2 weeks'},
        {sig:'X7',        trans:'For 7 days.'},
        {sig:'X10',       trans:'For 10 days.'},
        {sig:'X30',       trans:'For 30 days.'},
        {sig:'X60',       trans:'For 60 days.'},
        {sig:'X90',       trans:'For 90 days.'},
        {sig:'X1M',       trans:'For 1 month'}
      ]
    };

    // Flatten all sigs with category tag
    const ALL = Object.entries(DATA).flatMap(([cat, items]) =>
      items.map(d => ({...d, cat}))
    );

    const CAT_LABELS = {
      freq: 'Frequency', combo: 'Combo Sigs', route: 'Route',
      prn: 'PRN / Condition', special: 'Special', duration: 'Duration'
    };

    let activeCat = 'freq';
    let selectedMatch = null;

    const input      = document.getElementById('sig-input');
    const clearBtn   = document.getElementById('clear-btn');
    const resultCard = document.getElementById('result-card');
    const resultText = document.getElementById('result-text');
    const matchList  = document.getElementById('match-list');
    const browseGrid = document.getElementById('browse-grid');
    const catTabs    = document.getElementById('cat-tabs');

    // --- SEARCH ---
    input.addEventListener('input', () => {
      const q = input.value.trim().toUpperCase();
      clearBtn.classList.toggle('visible', q.length > 0);

      if (!q) {
        resetResult();
        matchList.innerHTML = '';
        return;
      }

      // Exact match first
      const exact = ALL.find(d => d.sig === q);
      if (exact) {
        showResult(exact.trans);
        matchList.innerHTML = '';
        return;
      }

      // Partial matches — starts with query
      const starts = ALL.filter(d => d.sig.startsWith(q));
      // Also contains query
      const contains = ALL.filter(d => !d.sig.startsWith(q) && d.sig.includes(q));
      const matches = [...starts, ...contains].slice(0, 12);

      if (matches.length === 1) {
        showResult(matches[0].trans);
        matchList.innerHTML = '';
      } else if (matches.length > 1) {
        resetResult();
        renderMatches(matches);
      } else {
        resetResult();
        matchList.innerHTML = `<div class="no-match">No sig found for "<strong>${q}</strong>" — check spelling or add it to the data.</div>`;
      }
    });

    // TAB key cycles through match list
    input.addEventListener('keydown', e => {
      const items = matchList.querySelectorAll('.match-item');
      if (!items.length) return;
      if (e.key === 'Tab') {
        e.preventDefault();
        let idx = [...items].findIndex(el => el.classList.contains('selected'));
        idx = (idx + 1) % items.length;
        items.forEach(el => el.classList.remove('selected'));
        items[idx].classList.add('selected');
        const sig = items[idx].dataset.sig;
        const match = ALL.find(d => d.sig === sig);
        if (match) showResult(match.trans);
      }
      if (e.key === 'Escape') {
        clearInput();
      }
    });

    clearBtn.addEventListener('click', clearInput);

    function clearInput() {
      input.value = '';
      clearBtn.classList.remove('visible');
      resetResult();
      matchList.innerHTML = '';
      input.focus();
    }

    function showResult(trans) {
      resultText.textContent = trans;
      resultCard.classList.add('has-result');
    }

    function resetResult() {
      resultText.textContent = '';
      resultCard.classList.remove('has-result');
    }

    function renderMatches(matches) {
      matchList.innerHTML = matches.map(d => `
        <div class="match-item" data-sig="${d.sig}" onclick="pickMatch('${d.sig.replace(/'/g,"\\'")}')">
          <span class="match-sig">${d.sig}</span>
          <span class="match-trans">${d.trans}</span>
          <span class="match-cat cat-${d.cat}">${CAT_LABELS[d.cat]}</span>
        </div>
      `).join('');
    }

    window.pickMatch = function(sig) {
      const match = ALL.find(d => d.sig === sig);
      if (!match) return;
      input.value = sig;
      clearBtn.classList.add('visible');
      showResult(match.trans);
      matchList.innerHTML = '';
      input.focus();
    };

    // --- BROWSE ---
    function buildCatTabs() {
      catTabs.innerHTML = Object.entries(CAT_LABELS).map(([key, label]) =>
        `<button class="cat-tab${key === activeCat ? ' active' : ''}" onclick="switchCat('${key}')">${label}</button>`
      ).join('');
    }

    function buildBrowse(cat) {
      browseGrid.innerHTML = DATA[cat].map(d => `
        <div class="browse-item" onclick="pickMatch('${d.sig.replace(/'/g,"\\'")}')">
          <span class="browse-sig">${d.sig}</span>
          <span class="browse-trans">${d.trans}</span>
        </div>
      `).join('');
    }

    window.switchCat = function(cat) {
      activeCat = cat;
      buildCatTabs();
      buildBrowse(cat);
    };

    // Init
    buildCatTabs();
    buildBrowse(activeCat);
    input.focus();
