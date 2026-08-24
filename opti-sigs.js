   const sigs = [
      {
        code:"1",
        translation:"Take one tablet",
        category:"Dose"
      },
      {
        code:"2",
        translation:"Take two tablets",
        category:"Dose"
      },
      {
        code:"3",
        translation:"Take three tablets",
        category:"Dose"
      },
      {
        code:"4",
        translation:"Take four tablets",
        category:"Dose"
      },
      {
        code:"1SS",
        translation:"Take one and one-half tablets",
        category:"Dose"
      },
      {
        code:"2SS",
        translation:"Take two and one-half tablets",
        category:"Dose"
      },
      {
        code:"QD",        
        translation:"Once daily",
        category:"Frequency"
      },
      {
        code:"BID",       
        translation:"Two times a day",
        category:"Frequency"
      },
      {
        code:"TID",       
        translation:"Three times a day",
        category:"Frequency"
      },
      {
          code:"QID",       
          translation:"Four times a day",
          category:"Frequency"
        },
        {
          code:"QOD",       
          translation:"Every other day",
          category:"Frequency"
        },
        {
          code:"QAM",       
          translation:"Every morning",
          category:"Frequency"
        },
        {
          code:"QPM",       
          translation:"Every evening",
          category:"Frequency"
        },
        {
          code:"AM",        
          translation:"In the morning",
          category:"Frequency"
        },
        {
          code:"PM",        
          translation:"In the evening",
          category:"Frequency"
        },
        {
          code:"QN",        
          translation:"Every night",
          category:"Frequency"
        },
        {
          code:"HS",        
          translation:"At bedtime",
          category:"Frequency"
        },
        {
          code:"Q2H",       
          translation:"Every 2 hours",
          category:"Frequency"
        },
        {
          code:"Q3-4H",     
          translation:"Every 3-4 hours",
          category:"Frequency"
        },
        {
          code:"Q4H",       
          translation:"Every 4 hours",
          category:"Frequency"
        },
        {
          code:"Q4-6H",     
          translation:"Every 4-6 hours",
          category:"Frequency"
        },
        {
          code:"Q6H",       
          translation:"Every 6 hours",
          category:"Frequency"
        },
        {
          code:"Q6-8H",     
          translation:"Every 6-8 hours",
          category:"Frequency"
        },
        {
          code:"Q8H",       
          translation:"Every 8 hours",
          category:"Frequency"
        },
        {
          code:"Q12H",      
          translation:"Every 12 hours",
          category:"Frequency"
        },
        {
          code:"Q24H",      
          translation:"Every 24 hours",
          category:"Frequency"
        },
        {
          code:"QW",        
          translation:"Every week",
          category:"Frequency"
        },
        {
          code:"QM",        
          translation:"Every month",
          category:"Frequency"
        },
        {
        code:"1QD",       
        translation:"Take one tablet by mouth once daily",
        category:"Combo Sigs"
        },
        {
          code:"1QOD",      
          translation:"Take one tablet by mouth every other day",
          category:"Combo Sigs"
        },
        {
          code:"1BID",      
          translation:"Take one tablet by mouth two times a day",
          category:"Combo Sigs"
        },
        {
          code:"1TID",      
          translation:"Take one tablet by mouth three times a day",
          category:"Combo Sigs"
        },
        {
          code:"1QID",      
          translation:"Take one tablet by mouth four times a day",
          category:"Combo Sigs"
        },
        {
          code:"1HS",       
          translation:"Take one tablet by mouth at bedtime",
          category:"Combo Sigs"
        },
        {
          code:"1Q3-4H",    
          translation:"Take one tablet by mouth every 3 to 4 hours",
          category:"Combo Sigs"
        },
        {
          code:"1Q4H",      
          translation:"Take one tablet by mouth every 4 hours",
          category:"Combo Sigs"
        },
        {
          code:"1Q4-6H",    
          translation:"Take one tablet by mouth every 4-6 hours",
          category:"Combo Sigs"
        },
        {
          code:"1Q6H",      
          translation:"Take one tablet by mouth every 6 hours",
          category:"Combo Sigs"
        },
        {
          code:"1Q6-8H",    
          translation:"Take one tablet by mouth every 6-8 hours",
          category:"Combo Sigs"
        },
        {
          code:"1Q8H",      
          translation:"Take one capsule every 8 hours",
          category:"Combo Sigs"
        },
        {
          code:"1Q12H",     
          translation:"Take one tablet by mouth every 12 hours",
          category:"Combo Sigs"
        },
        {
          code:"1Q24H",     
          translation:"Take one tablet by mouth every 24 hours",
          category:"Combo Sigs"
        },
        {
          code:"1QW",       
          translation:"Take one capsule by mouth every week",
          category:"Combo Sigs"
        },
        {
          code:"1QM",       
          translation:"Take one tablet by mouth every month",
          category:"Combo Sigs"
        },
        {
          code:"1TSPQD",    
          translation:"Take 5ml by mouth once daily",
          category:"Combo Sigs"
        },
        {
          code:"1TSPBID",   
          translation:"Take 5ml by mouth two times a day",
          category:"Combo Sigs"
        },
        {
          code:"1SSTSPQD",  
          translation:"Take 7.5ml by mouth once daily",
          category:"Combo Sigs"
        },
        {
          code:"SSTSPQD",   
          translation:"Take 2.5ml by mouth once daily",
          category:"Combo Sigs"
        },
        {
          code:"1ENQD",     
          translation:"Spray one into each nostril once daily",
          category:"Combo Sigs"
        },
        {
          code:"2ENQD",     
          translation:"Spray two into each nostril twice a day",
          category:"Combo Sigs"
        },
        {
          code:"1ADQD",     
          translation:"Instill one drop into the right ear once daily",
          category:"Combo Sigs"
        },
        {
          code:"1ALQD",     
          translation:"Instill one drop into the left ear once daily",
          category:"Combo Sigs"
        },
        {
          code:"1AUQD",     
          translation:"Instill one drop into both ears once daily",
          category:"Combo Sigs"
        },
        {
          code:"1OUQD",     
          translation:"Instill one drop into each eye once daily",
          category:"Combo Sigs"
        },
        {
          code:"1OUBID",    
          translation:"Instill one drop into each eye two times a day",
          category:"Combo Sigs"
        },
        {
          code:"2STAT",     
          translation:"Take two tablets by mouth now, then",
          category:"Combo Sigs"
        },
        {
          code:"2TSPQD",    
          translation:"Take 10ml by mouth once daily",
          category:"Combo Sigs"
        },
        {
          code :"1TSPQID",  
          translation:"Take 5ml by mouth four times a day",
          category:"Combo Sigs"
        },
        {
          code :"1TSPQ6H",  
          translation:"Take 5ml by mouth every 6 hours",
          category:"Combo Sigs"
        },
        {
          code:"1TSPQ8H",   
          translation:"Take 5ml by mouth every 8 hours",
          category:"Combo Sigs"
        },
        {
          code:"1QD AC",    
          translation:"Take one tablet by mouth one time daily before a meal",
          category:"Combo Sigs"
        },
        {
          code:"1QD PC",    
          translation:"Take one tablet by mouth one time daily after a meal",
          category:"Combo Sigs"
        },
        {
          code:"1QD WF",    
          translation:"Take one tablet by mouth one time daily with food",
          category:"Combo Sigs"
        },
        {
          code:"1QD WW",    
          translation:"Take one tablet by mouth one time daily with a full glass of water",
          category:"Combo Sigs"
        },
        {
          code:"2QD WM",    
          translation:"Take two tablets by mouth one time daily with meals",
          category:"Combo Sigs"
        }
      ,
        {
          code:"PO",        
          translation:"By mouth",
          category:"Route"
        },
        {
          code:"SL",        
          translation:"Under the tongue",
          category:"Route"
        },
        {
          code:"IM",        
          translation:"Intramuscularly",
          category:"Route"
        },
        {
          code:"SQ",        
          translation:"Under the skin",
          category:"Route"
        },
        {
          code:"INJ",       
          translation:"Inject",
          category:"Route"
        },
        {
          code:"EN",        
          translation:"Each Nostril",
          category:"Route"
        },
        {
          code:"AD",        
          translation:"Right Ear",
          category:"Route"
        },
        {
          code:"AL",        
          translation:"Left Ear",
          category:"Route"
        },
        {
          code:"AU",        
          translation:"Both Ears",
          category:"Route"
        },
        {
          code:"OD",        
          translation:"Right Eye",
          category:"Route"
        },
        {
          code:"OS",        
          translation:"Left Eye",
          category:"Route"
        },
        {
          code:"OU",        
          translation:"Both eyes",
          category:"Route"
        },
        {
          code:"AA",        
          translation:"Affected area",
          category:"Route"
        },
        {
          code:"PRN",       
          translation:"As needed",
          category:"PRN / Condition"
        },
        {
          code:"P",         
          translation:"For pain",
          category:"PRN / Condition"
        },
        {
          code:"NA",        
          translation:"For Nausea",
          category:"PRN / Condition"
        },
        {
          code:"VO",        
          translation:"For Vomiting",
          category:"PRN / Condition"
        },
        {
          code:"NV",        
          translation:"For Nausea / Vomiting",
          category:"PRN / Condition"
        },
        {
          code:"DZ",        
          translation:"For Dizziness",
          category:"PRN / Condition"
        },
        {
          code:"DI",        
          translation:"For Diarrhea",
          category:"PRN / Condition"
        },
        {
          code:"SOB",       
          translation:"For Shortness of breath",
          category:"PRN / Condition"
        },
        {
          code:"WH",        
          translation:"For Wheezing",
          category:"PRN / Condition"
        },
        {
          code:"CG",        
          translation:"For Cough",
          category:"PRN / Condition"
        },
        {
          code:"BP",        
          translation:"For Blood Pressure",
          category:"PRN / Condition"
        },
        {
          code:"CONS",      
          translation:"For constipation",
          category:"PRN / Condition"
        },
        {
          code:"UTI",       
          translation:"For Urinary Tract Infection",
          category:"PRN / Condition"
        },
        {
          code:"AC",        
          translation:"Before meals",
          category:"Special"
        },
        {
          code:"PC",        
          translation:"After meals",
          category:"Special"
        },
        {
          code:"WF",        
          translation:"With food",
          category:"Special"
        },
        {
          code:"WW",        
          translation:"With a full glass of water",
          category:"Special"
        },
        {
          code:"AAA",       
          translation:"Apply to the affected area",
          category:"Special"
        },
        {
          code:"ATL",       
          translation:"Apply a thin layer",
          category:"Special"
        },
        {
          code:"TAD",       
          translation:"Take as directed",
          category:"Special"
        },
        {
          code:"UAD",       
          translation:"Use as directed",
          category:"Special"
        },
        {
          code:"UD",        
          translation:"As directed",
          category:"Special"
        },
        {
          code:"UG",        
          translation:"Until gone",
          category:"Special"
        },
        {
          code:"UF",        
          translation:"Until finished",
          category:"Special"
        },
        {
          code:"UC",        
          translation:"Until completed",
          category:"Special"
        },
        {
          code:"DC",        
          translation:"Discontinue",
          category:"Special"
        },
        {
          code:"STAT",      
          translation:"Now",
          category:"Special"
        },
        {
          code:"SS",        
          translation:"One-half",
          category:"Special"
        },
        {
          code:"U",         
          translation:"Units",
          category:"Special"
        },
        {
          code:"MEDROL",    
          translation:"Take as directed on package",
          category:"Special"
        },
        {
          code:"DRM",       
          translation:"Discard remainder of medication",
          category:"Special"
        },
        {
          code:"DENT",     
          translation:"Take four tablets (or capsules) by mouth one hour prior to dental appointment",
          category:"Special"
        },
        {
          code:"X1W",       
          translation:"For 1 week",
          category:"Duration"
        },
        {
          code:"X2W",       
          translation:"For 2 weeks",
          category:"Duration"
        },
        {
          code:"X7",        
          translation:"For 7 days.",
          category:"Duration"
        },
        {
          code:"X10",       
          translation:"For 10 days.",
          category:"Duration"
        },
        {
          code:"X30",       
          translation:"For 30 days.",
          category:"Duration"
        },
        {
          code:"X60",       
          translation:"For 60 days.",
          category:"Duration"
        },
        {
          code:"X90",       
          translation:"For 90 days.",
          category:"Duration"
        },
        {
          code:"X1M",       
          translation:"For 1 month",
          category:"Duration"
        }
   ];

// ============================================================
// SIG LOOKUP + MULTI-SIG PARSER
// ============================================================


// ------------------------------------------------------------
// DATA INDEXES
// ------------------------------------------------------------

// Your sigs array is intentionally kept flat:
//
// {
//   code: "BID",
//   translation: "Two times a day",
//   category: "Frequency"
// }
//
// This lets us add new sigs without changing the lookup engine.

const sigMap = new Map();

for (const sig of sigs) {
  const code = sig.code.trim().toUpperCase();

  // If a duplicate code exists, the last entry wins.
  // Remove duplicates from the data when possible.
  sigMap.set(code, {
    ...sig,
    code
  });
}


// All unique categories automatically generated from the data.
const categories = [
  ...new Set(sigs.map(sig => sig.category))
];


// Complete "Combo Sigs" are treated as preferred translations.
const comboSigs = sigs.filter(
  sig => sig.category === "Combo Sigs"
);


// ------------------------------------------------------------
// DOM ELEMENTS
// ------------------------------------------------------------

const input      = document.getElementById("sig-input");
const clearBtn   = document.getElementById("clear-btn");
const resultCard = document.getElementById("result-card");
const resultText = document.getElementById("result-text");
const matchList  = document.getElementById("match-list");
const browseGrid = document.getElementById("browse-grid");
const catTabs    = document.getElementById("cat-tabs");


// ------------------------------------------------------------
// STATE
// ------------------------------------------------------------

let activeCat = categories[0] || "Frequency";


// ------------------------------------------------------------
// SEARCH / INPUT
// ------------------------------------------------------------

input.addEventListener("input", () => {

  const raw = input.value.trim();

  clearBtn.classList.toggle(
    "visible",
    raw.length > 0
  );

  if (!raw) {
    resetResult();
    matchList.innerHTML = "";
    return;
  }

  translateInput(raw);
});


// ------------------------------------------------------------
// MAIN TRANSLATOR
// ------------------------------------------------------------

function translateInput(rawInput) {

  const normalized = normalizeInput(rawInput);


  // ----------------------------------------------------------
  // 1. EXACT COMPLETE SIG
  // ----------------------------------------------------------

  const exact = sigMap.get(normalized);

  if (exact) {

    showResult(exact.translation);

    renderRecognized([
      exact
    ]);

    return;
  }


  // ----------------------------------------------------------
  // 2. TOKENIZE INPUT
  // ----------------------------------------------------------

  const parsed = parseInput(normalized);


  // ----------------------------------------------------------
  // 3. NOTHING RECOGNIZED
  // ----------------------------------------------------------

  if (!parsed.matches.length) {

    resetResult();

    matchList.innerHTML = `
      <div class="no-match">
        No recognizable sig codes found for
        "<strong>${escapeHtml(normalized)}</strong>".
      </div>
    `;

    return;
  }


  // ----------------------------------------------------------
  // 4. SHOW TRANSLATION
  // ----------------------------------------------------------

  const translation = buildTranslation(
    parsed.matches
  );

  showResult(translation);


  // ----------------------------------------------------------
  // 5. SHOW RECOGNIZED COMPONENTS
  // ----------------------------------------------------------

  renderRecognized(
    parsed.matches,
    parsed.unrecognized
  );
}


// ------------------------------------------------------------
// NORMALIZE INPUT
// ------------------------------------------------------------

function normalizeInput(value) {

  return value
    .toUpperCase()
    .replace(/[,\n]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}


// ------------------------------------------------------------
// PARSER
// ------------------------------------------------------------

function parseInput(inputValue) {

  const matches = [];
  const unrecognized = [];


  // ----------------------------------------------------------
  // First try whitespace-separated codes.
  //
  // Example:
  //
  // BID PO PRN P
  // ----------------------------------------------------------

  if (inputValue.includes(" ")) {

    const tokens = inputValue.split(" ");

    for (const token of tokens) {

      const result = parseToken(token);

      matches.push(...result.matches);
      unrecognized.push(...result.unrecognized);
    }

    return {
      matches,
      unrecognized
    };
  }


  // ----------------------------------------------------------
  // No spaces.
  //
  // First check if it is already an exact sig.
  // That was handled before this function.
  //
  // Otherwise attempt to split it into known codes.
  //
  // Example:
  //
  // BIDPOPRNP
  //
  // BID | PO | PRN | P
  // ----------------------------------------------------------

  const result = tokenizeCompact(inputValue);

  return result;
}


// ------------------------------------------------------------
// PARSE INDIVIDUAL TOKEN
// ------------------------------------------------------------

function parseToken(token) {

  const match = sigMap.get(token);

  if (match) {

    return {
      matches: [match],
      unrecognized: []
    };
  }


  // Try breaking a token apart.
  return tokenizeCompact(token);
}


// ------------------------------------------------------------
// COMPACT TOKENIZER
// ------------------------------------------------------------
//
// Uses the longest known code first.
//
// This is important because some codes overlap:
//
// Q
// Q2H
// Q4H
// Q6H
// Q8H
// Q12H
// Q24H
//
// The parser should attempt the most specific/longest code first.
// ------------------------------------------------------------

function tokenizeCompact(value) {

  const matches = [];
  const unrecognized = [];

  let position = 0;


  // Sort longest first.
  const codes = [...sigMap.keys()]
    .sort((a, b) => b.length - a.length);


  while (position < value.length) {

    let found = null;


    for (const code of codes) {

      if (
        value.startsWith(code, position)
      ) {

        found = code;
        break;
      }
    }


    if (found) {

      matches.push(
        sigMap.get(found)
      );

      position += found.length;

    } else {

      // Collect the unknown character.
      unrecognized.push(
        value[position]
      );

      position++;
    }
  }


  return {
    matches,
    unrecognized
  };
}


// ------------------------------------------------------------
// BUILD TRANSLATION
// ------------------------------------------------------------
//
// Stage 3: category-aware sentence construction.
//
// Rather than concatenating each matched sig's dictionary
// definition in whatever order it was typed, the matches are
// grouped by category and walked in canonical clinical order:
//
//   Combo Sigs -> Dose -> Route -> Frequency -> Special
//   -> PRN / Condition -> Duration
//
// "Combo Sigs" sits first because the compact tokenizer can
// greedily match a whole combo code (e.g. "1BID") as a single
// token when parsing unspaced input — that fragment already
// reads like "Take one tablet by mouth two times a day", so it
// belongs at the front of the sentence, same as a standalone
// Dose code would.
//
// Within "PRN / Condition", the "PRN" marker ("As needed") is
// fused with any condition reasons ("For pain") into one clause
// ("as needed for pain"), and multiple reasons are joined with
// proper list grammar ("pain and nausea", "pain, nausea, and
// dizziness").
//
// The final result is passed through .toUpperCase() by
// showResult(), so internal capitalization here doesn't need to
// be perfect — only word order and fusion matter.
// ------------------------------------------------------------

const SENTENCE_ORDER = [
  "Combo Sigs",
  "Dose",
  "Route",
  "Frequency",
  "Special",
  "PRN / Condition",
  "Duration"
];
 
 
function buildTranslation(matches) {
 
  if (!matches.length) {
    return "";
  }
 
 
  // ----------------------------------------------------------
  // If the combination corresponds exactly to an existing
  // Combo Sig, prefer that workplace translation.
  // ----------------------------------------------------------
 
  const codeString = matches
    .map(sig => sig.code)
    .join("");
 
 
  const existingCombo = comboSigs.find(
    sig =>
      sig.code.toUpperCase() === codeString
  );
 
 
  if (existingCombo) {
    return existingCombo.translation;
  }
 
 
  // ----------------------------------------------------------
  // Otherwise, group the matches by category — preserving the
  // order they were typed in within each category — then walk
  // the categories in canonical clinical order.
  // ----------------------------------------------------------
 
  const byCategory = new Map();
 
  for (const sig of matches) {
 
    if (!byCategory.has(sig.category)) {
      byCategory.set(sig.category, []);
    }
 
    byCategory.get(sig.category).push(sig);
  }
 
 
  const clauses = [];
 
  for (const category of SENTENCE_ORDER) {
 
    const group = byCategory.get(category);
 
    if (!group || !group.length) {
      continue;
    }
 
    const clause = buildCategoryClause(category, group);
 
    if (clause) {
      clauses.push(clause);
    }
 
    byCategory.delete(category);
  }
 
 
  // Anything left over — a category not yet added to
  // SENTENCE_ORDER — is appended at the end in typed order so
  // nothing is silently dropped from the translation.
  for (const [, group] of byCategory) {
 
    clauses.push(
      group.map(sig => sig.translation).join(" ")
    );
  }
 
 
  return joinClauses(clauses);
}
 
 
// ------------------------------------------------------------
// BUILD ONE CATEGORY'S CLAUSE
// ------------------------------------------------------------
 
function buildCategoryClause(category, group) {
 
  if (category === "PRN / Condition") {
    return buildPrnClause(group);
  }
 
  // Default: join same-category fragments with "and" so e.g.
  // two Route codes typed together still read naturally.
  return joinFragments(
    group.map(sig => sig.translation)
  );
}
 
 
// ------------------------------------------------------------
// PRN / CONDITION CLAUSE
//
// Fuses the "As needed" marker (code "PRN") with one or more
// condition reasons ("For pain", "For Nausea", ...) into a
// single clause: "As needed for pain and nausea".
// ------------------------------------------------------------
 
function buildPrnClause(group) {
 
  const prn = group.find(sig => sig.code === "PRN");
  const reasons = group.filter(sig => sig.code !== "PRN");
 
  const reasonText = reasons
    .map(sig => stripLeadingFor(sig.translation))
    .filter(Boolean);
 
 
  if (prn && reasonText.length) {
    return `As needed for ${joinList(reasonText)}`;
  }
 
  if (prn) {
    return prn.translation;
  }
 
  // Condition reason(s) typed without an explicit "PRN" marker —
  // still readable on their own ("For pain").
  return joinFragments(
    reasons.map(sig => sig.translation)
  );
}
 
 
function stripLeadingFor(text) {
 
  return text
    .replace(/^For\s+/i, "")
    .trim()
    .toLowerCase();
}
 
 
// ------------------------------------------------------------
// FRAGMENT / LIST JOINING HELPERS
// ------------------------------------------------------------
 
function joinFragments(fragments) {
 
  return fragments
    .filter(Boolean)
    .join(" and ");
}
 
 
function joinList(items) {
 
  if (items.length === 1) {
    return items[0];
  }
 
  if (items.length === 2) {
    return `${items[0]} and ${items[1]}`;
  }
 
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}
 
 
// ------------------------------------------------------------
// JOIN CLAUSES INTO ONE SENTENCE
//
// Each clause's trailing period (some Duration entries have
// one, some don't — see "X7" vs "X1W" in the data) is stripped
// so clauses can be stitched together mid-sentence, then a
// single period is added at the very end.
// ------------------------------------------------------------
 
function joinClauses(clauses) {
 
  const sentence = clauses
    .map(clause => clause.replace(/\.$/, "").trim())
    .filter(Boolean)
    .join(" ");
 
  return sentence ? `${sentence}.` : "";
}

// ------------------------------------------------------------
// RESULT DISPLAY
// ------------------------------------------------------------
 
function showResult(translation) {
 
  resultText.textContent = translation.toUpperCase();
 
  resultCard.classList.add(
    "has-result"
  );
}
 
 
function resetResult() {
 
  resultText.textContent = "";
 
  resultCard.classList.remove(
    "has-result"
  );
}


// ------------------------------------------------------------
// RECOGNIZED COMPONENT DISPLAY
// ------------------------------------------------------------

function renderRecognized(
  matches,
  unrecognized = []
) {

  if (!matches.length && !unrecognized.length) {

    matchList.innerHTML = "";

    return;
  }


  let html = `
    <div class="recognized-header">
      Recognized components
    </div>
  `;


  for (const sig of matches) {

    html += `
      <div
        class="match-item"
        data-code="${escapeHtml(sig.code)}"
        onclick="pickMatch('${escapeJs(sig.code)}')"
      >

        <span class="match-code">
          ${escapeHtml(sig.code)}
        </span>

        <span class="match-trans">
          ${escapeHtml(sig.translation)}
        </span>

        <span class="match-cat">
          ${escapeHtml(sig.category)}
        </span>

      </div>
    `;
  }


  if (unrecognized.length) {

    const unknown = [
      ...new Set(unrecognized)
    ].join(" ");


    html += `
      <div class="no-match">
        Unrecognized input:
        <strong>${escapeHtml(unknown)}</strong>
      </div>
    `;
  }


  matchList.innerHTML = html;
}


// ------------------------------------------------------------
// SELECT A MATCH
// ------------------------------------------------------------

window.pickMatch = function(code) {

  const match = sigMap.get(
    code.toUpperCase()
  );

  if (!match) {
    return;
  }


  input.value = match.code;

  clearBtn.classList.add(
    "visible"
  );


  showResult(
    match.translation
  );


  renderRecognized([
    match
  ]);


  input.focus();
};


// ------------------------------------------------------------
// CATEGORY TABS
// ------------------------------------------------------------

function buildCatTabs() {

  catTabs.innerHTML = categories
    .map(category => {

      const active =
        category === activeCat
          ? " active"
          : "";


      return `
        <button
          class="cat-tab${active}"
          onclick="switchCat('${escapeJs(category)}')"
        >
          ${escapeHtml(category)}
        </button>
      `;
    })
    .join("");
}


// ------------------------------------------------------------
// CATEGORY BROWSER
// ------------------------------------------------------------

function buildBrowse(category) {

  const categorySigs = sigs.filter(
    sig =>
      sig.category === category
  );


  browseGrid.innerHTML =
    categorySigs
      .map(sig => `

        <div
          class="browse-item"
          onclick="pickMatch('${escapeJs(sig.code)}')"
        >

          <span class="browse-code">
            ${escapeHtml(sig.code)}
          </span>

          <span class="browse-trans">
            ${escapeHtml(sig.translation)}
          </span>

        </div>

      `)
      .join("");
}


window.switchCat = function(category) {

  activeCat = category;

  buildCatTabs();

  buildBrowse(category);
};


// ------------------------------------------------------------
// KEYBOARD CONTROLS
// ------------------------------------------------------------

input.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      clearInput();

      return;
    }
  }
);


// ------------------------------------------------------------
// CLEAR
// ------------------------------------------------------------

clearBtn.addEventListener(
  "click",
  clearInput
);


function clearInput() {

  input.value = "";

  clearBtn.classList.remove(
    "visible"
  );

  resetResult();

  matchList.innerHTML = "";

  input.focus();
}


// ------------------------------------------------------------
// HTML / JS ESCAPING
// ------------------------------------------------------------

function escapeHtml(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function escapeJs(value) {

  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'");
}


// ------------------------------------------------------------
// INITIALIZE
// ------------------------------------------------------------

buildCatTabs();

buildBrowse(activeCat);

input.focus();