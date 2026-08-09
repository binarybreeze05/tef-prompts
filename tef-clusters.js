/* TEF practice-order — cluster grouping / filtering overlay.
   One file drives all ten practice pages. It auto-detects Section A (78 ads)
   vs Section B (81 ads) by counting section.topic elements, then lets you
   regroup the ads by any of 10 clustering methodologies and filter to a
   single cluster. Ads are addressed by their practice-order badge number,
   which is identical across the FR / EN / images variants.
   Cluster + methodology names are English by design.

   The four ecrite pages (72 / 73 prompts) have no cluster methodologies, so
   they get a toolbar with just the practice order and the difficulty order.

   Difficulty order is read straight from the DOM: every item prints its
   source rank as "· was #N" in span.orig, and ascending N reproduces the
   difficulty-ranked list exactly. Nothing is hardcoded here, so the two
   orderings can never drift apart.

   Coverage order is the one ordering that cannot be derived from the DOM, so
   it lives in its own data file, tef-coverage.js, keyed by the same badge
   numbers. That file is ~300 KB of per-item rationale, so it is NOT loaded
   with the page — it is fetched lazily the first time the reader actually
   picks "Coverage order" from the dropdown. Nothing else on the page changes
   if the fetch fails; the option just reports that it could not load. */

var TEF_CLUSTERS = {
  A: {
    total: 78,
    label: "Section A · 78 ads (phone to gather information)",
    methods: [
      { id:"A1", name:"Transaction type", desc:"What actually changes hands — a product, a course place, a rental, a quote, a paid gig.",
        clusters:[
          ["Retail / online purchase",[12,31,44,20]],
          ["Recurring delivery / subscription",[16,76]],
          ["Course / training enrolment",[2,23,11,52,36,46,64,58,61,66,53,78,74,29]],
          ["Membership / club",[6,26,39,49,56]],
          ["Equipment / space rental",[5,17,34,68,77,50]],
          ["Bespoke service on a quote",[4,25,38,18,48,55,43,9,30,13,75]],
          ["Single-visit booked experience / ticket",[1,70,22,67,69,45,35,63,57,65,60,40,27,7,42,73,3,54,24,37,47,59,62,8,41,51,28,19]],
          ["Travel package purchase",[14,72]],
          ["Property rental",[21]],
          ["Paid gig (you earn)",[10,32,71]],
          ["Volunteering (give time)",[15,33]]
        ]},
      { id:"A2", name:"Setting (where it happens)", desc:"The place the offer unfolds — drives access, transport, weather and equipment questions.",
        clusters:[
          ["At your home / your event",[9,30,13,75,23,16,76,43,4,25,38,18]],
          ["A fixed indoor venue",[2,64,58,36,46,61,66,49,26,39,24,62,54,51,28,7,50,35,57,63,48,56,20,41,8]],
          ["Outdoors on land",[40,27,60,65,6,37,3,59,19,55,53,67,69]],
          ["In the air",[1,70]],
          ["On or under water",[5,22,42,29,73,77,68]],
          ["Mountains & snow",[11,78,74,52,45]],
          ["Online / remote",[12,31,44]],
          ["Off-site, in transit or variable location",[14,72,47,21,17,34,10,32,71,15,33]]
        ]},
      { id:"A3", name:"Price & payment model", desc:"How the money works — free, a ticket, a subscription, a devis, a course fee, or they pay you.",
        clusters:[
          ["Free / non-monetary",[15,33,56]],
          ["You get paid",[10,32,71]],
          ["Per-person ticket / entry fee",[1,70,22,67,69,45,68,35,63,57,65,60,40,27,7,42,73,3,54,24,37,47,59,62,8,41,51,28,19]],
          ["Membership / subscription fee",[6,26,39,49]],
          ["Per-session / course fee",[2,23,11,52,36,46,64,58,61,66,53,78,74,29]],
          ["Bespoke quote (devis)",[4,25,38,18,48,55,43,9,30,13,75]],
          ["Rental fee (per period)",[5,17,34,77,50]],
          ["Retail / unit price",[12,31,44,20,16,76]],
          ["Package price (forfait) / lease",[14,72,21]]
        ]},
      { id:"A4", name:"Target audience", desc:"The intended customer — changes age limits, family rates, levels and access.",
        clusters:[
          ["Children & families",[28,48,55,62,61,65,57,60,19,40]],
          ["General public / all ages",[3,54,59,47,63,8,41,24,37,6,49,42,73,35,45,67,69,51,39,20,56,5,26,77]],
          ["Adults only (age / licence / alcohol)",[70,1,22,68,58,46,31,21,72,14]],
          ["Learners by level",[2,23,11,78,74,52,64,53,36,29,66,27,7]],
          ["Households needing a service",[9,30,43,16,76,12,44,13,75,50]],
          ["Occasion / party organisers",[4,25,38,18,17,34]],
          ["People looking to earn or help",[10,32,71,15,33]]
        ]},
      { id:"A5", name:"Time commitment / duration", desc:"How much calendar it eats — a slot, a day, a stay, or an ongoing thing.",
        clusters:[
          ["A few hours (single session / half-day)",[1,70,22,67,69,45,68,35,63,57,65,60,40,27,7,3,54,62,24,37,47,51,28,48,55,73,77,5]],
          ["A full day out",[42,59]],
          ["A weekend, stay or multi-day trip",[19,74,11,78,52,14,72,8,41]],
          ["Recurring over weeks",[2,23,36,46,64,58,61,66,53,29,6,26,39,49,56]],
          ["A quick one-off transaction",[12,31,44,20,18,17,34,21]],
          ["A scheduled service job / delivery",[9,30,43,13,75,16,76,4,25,38,50]],
          ["Flexible, on your own availability",[10,32,71,15,33]]
        ]},
      { id:"A6", name:"Season & weather dependence", desc:"When in the year it can happen and whether rain kills it.",
        clusters:[
          ["Winter / snow-dependent",[11,78,74,45]],
          ["Warm-season & fair-weather outdoor",[5,22,29,73,77,68,42,1,70,40,27,60,65,67,69,52,6,37,3,59,19,55,53]],
          ["Year-round indoor (weather-proof)",[2,23,64,58,36,46,61,66,63,57,7,50,54,62,49,26,39,51,28,35]],
          ["Date-fixed / seasonal events",[8,41,24,20,56]],
          ["Weather-independent (services, retail, online, gigs)",[9,30,43,13,75,16,76,12,31,44,21,17,34,18,4,25,38,48,14,72,47,10,32,71,15,33]]
        ]},
      { id:"A7", name:"Core motivation / benefit", desc:"The need the caller is trying to satisfy — the emotional pay-off, not the object.",
        clusters:[
          ["Thrill & sensation",[1,70,22,67,69,45,68,35]],
          ["Learn a skill",[2,23,36,46,64,58,52,11,78,29,53,66,61,27,7,50]],
          ["Relax, escape & discovery",[73,47,3,54,62,59,60,40,19,14,72,74,42,24,37,8,41,51,28,63,57,65,5,77]],
          ["Celebrate an occasion",[4,25,38,18,48,55,17,34]],
          ["Convenience — get a chore done",[9,30,43,13,75,16,76,12,31,21]],
          ["Save or make money",[44,20,56,10,32,71]],
          ["Belong, socialise & give back",[6,26,39,49,15,33]]
        ]},
      { id:"A8", name:"Physical intensity & risk", desc:"How much body (and safety) is on the line — decides how loud the safety/level questions are.",
        clusters:[
          ["High-adrenaline / safety-critical",[1,70,22,68,67,69,45,52,35]],
          ["Active but moderate",[11,78,74,29,53,65,57,60,6,37,64,2,58,63,40,5,77]],
          ["Hands-on / manual",[7,50,36,46,27,23]],
          ["Passive / spectator",[3,54,62,59,24,47,8,41,51,28,42,73,19]],
          ["Sedentary / transactional",[12,31,44,20,21,17,34,18,9,30,43,13,75,16,76,4,25,38,48,55,14,72,10,32,71,15,33,49,26,39,61,66,56]]
        ]},
      { id:"A9", name:"Booking & access mechanism", desc:"How you get in — reserve, drop in, phone for a visit, sign up online, enrol, or apply.",
        clusters:[
          ["Reserve a dated slot",[1,70,22,68,67,69,45,42,73,77,5,3,54,62,59,37,47,24,28,8,41,51,27,40,60,48,55,19,7]],
          ["Drop in during opening hours",[63,35,57,65,20,56,6,49]],
          ["Phone to schedule a service visit",[9,30,43,13,75,16,76,4,25,38,18,17,34,50]],
          ["Buy / sign up online",[12,31,44,14,72,21]],
          ["Enrol / register (course or club)",[2,23,11,78,74,52,36,46,64,58,61,66,53,29,26,39]],
          ["Apply & be selected",[10,32,71,15,33]]
        ]},
      { id:"A10", name:"Question-set family (this file's order)", desc:"The ~10 questions the call re-uses. This is the taxonomy the practice order already follows.",
        clusters:[
          ["Active adventure & leisure",[1,22,35,45,52,57,60,63,65,67,68,69,70]],
          ["Courses & lessons",[2,23,36,46,53,58,61,64,66]],
          ["Tours & guided visits",[3,24,37,47,54,59,62]],
          ["Events & parties",[4,25,38,48,55]],
          ["Boat & water outings",[5,29,42,73,77]],
          ["Clubs & associations",[6,26,39,49,56]],
          ["Workshops & hands-on",[7,27,40,50]],
          ["Shows & cultural events",[8,28,41,51]],
          ["At-home services",[9,30,43]],
          ["Paid missions & testers",[10,32,71]],
          ["Winter-sports schools",[11,74,78]],
          ["Online commercial services",[12,31,44]],
          ["Pet-sitting",[13,75]],
          ["Travel & trips",[14,72]],
          ["Volunteering",[15,33]],
          ["Meal delivery",[16,76]],
          ["Object rental",[17,34]],
          ["Bespoke gift",[18]],
          ["Unusual overnight",[19]],
          ["One-off sale",[20]],
          ["Housing rental",[21]]
        ]}
    ]
  },
  B: {
    total: 81,
    label: "Section B · 81 ads (pitch to a friend)",
    methods: [
      { id:"B1", name:"The friend's likely objection", desc:"The wall you must get past — ads sit together when the same rebuttal knocks the objection down.",
        clusters:[
          ["“It's a scam / it won't really pay”",[2,42,65,31,11,78,48,22,54,35,68]],
          ["“I don't have the time”",[1,21,34,62,63,53,47,41,60,12]],
          ["“I'd be too shy / judged”",[5,64,45,38,40,27,57,7,72,51,10,73,17,74]],
          ["“I'm not fit / not skilled enough”",[26,39,52,46,30,28,25,13,76,77,8,81,20]],
          ["“It's dangerous / scary”",[6,66]],
          ["“That's disgusting / too weird”",[19,49]],
          ["“It's too expensive / not worth it”",[9,29,75,43,23,55,3,36,61,33,18,80,70]],
          ["“I don't need it / it won't work”",[32,14,15,79,4,37,50,56,67,24,44]],
          ["“That's not a real holiday”",[16,71]],
          ["“That's a big responsibility”",[58,69,59]]
        ]},
      { id:"B2", name:"Reward the friend gets", desc:"The pay-off you dangle to close — grouped by the carrot, not the activity.",
        clusters:[
          ["Money / income",[2,42,65,22,54,48,35,59]],
          ["Free travel or free access",[31,11,78,68,69,7,72,62]],
          ["Health & wellbeing",[14,32,61,36,77]],
          ["Confidence & self-expression",[5,64,45,38,40,27,57]],
          ["Thrill, adventure & escape",[6,66,46,49,26,39,52,3,23,55,43,19,33,18,80,70]],
          ["Feel-good — help others / a cause",[1,21,34,41,47,53,58,60,30,10,73,16,71,13,76]],
          ["Learn a skill / creative hobby",[8,81,28,25]],
          ["Save money / smart & sharing",[4,37,50,56,67,24,44,15,79,9,29,75]],
          ["Social connection & belonging",[12,17,20,51,74,63]]
        ]},
      { id:"B3", name:"Who benefits (self / others / planet / community)", desc:"Whose interest the pitch leans on — sets whether your line is “you'll love it” or “it's the right thing”.",
        clusters:[
          ["Mostly you (self-interest)",[2,42,65,22,54,48,35,59,31,11,78,68,7,72,6,66,46,49,26,39,52,3,23,55,43,19,33,18,80,70,14,32,61,36,77,8,81,28,25,5,64,45,38,57,9,29,75,44,15,79]],
          ["Others (solidarity / charity)",[1,21,34,41,53,58,10,73,16,71,62,63]],
          ["The planet (ecological pitch)",[4,37,50,24,67,56,13,76,30,47]],
          ["The community / neighbourhood",[17,20,12,74,51,69,27,40,60]]
        ]},
      { id:"B4", name:"Level of commitment asked", desc:"How much the friend signs up for — an evening, a trip, a weekly habit, or a months-long duty.",
        clusters:[
          ["One-off event / outing",[10,73,30,45,38,17,60,62,33,24,56,67,19,18,80,6,66,35]],
          ["A trip / holiday / stay",[3,23,55,43,26,39,52,46,49,36,61,16,71,70]],
          ["Recurring membership / weekly activity",[20,51,25,5,64,57,12,63,13,76,8,81,28,77,32]],
          ["Ongoing responsibility",[58,14,11,78,68,69,7,40,27,72,21,34,1,53,41,47,59]],
          ["Flexible, do-it-when-you-want",[2,65,42,31,22,54,48,4,37,50,44,15,79]],
          ["Book a one-off paid service",[9,29,75,74]]
        ]},
      { id:"B5", name:"The friend's profile / hook in the prompt", desc:"The “you tell a friend who…” tag the scenario hands you — same hook, same opening move.",
        clusters:[
          ["Wants money / a job",[2,22,35,37,40,42,54,65]],
          ["Wants to travel / take a holiday",[3,11,16,23,31,36,39,43,46,49,55,66,70,71,72,78,80]],
          ["Loves sport / wants to be active",[6,26,30,48,52,59,73,77]],
          ["Loves animals",[1,58]],
          ["Wants to save money / shop / sell",[4,15,24,44,56,67]],
          ["Looking for a new hobby / free time to fill",[5,10,20,21,25,27,28,34,45,50,53,57,63,64,68]],
          ["Culture & learning",[7,8,17,33,38,51,79,81]],
          ["Likes cooking / is hosting",[9,12,29,62,74,75]],
          ["Has a wellbeing goal (stress, screens, diet)",[14,32,61]],
          ["New in town / knows the city / civic",[18,47,60,69]],
          ["Other niche hooks (vehicle, DIY, green, foodie)",[13,76,41,19]]
        ]},
      { id:"B6", name:"Setting (where it happens)", desc:"The place the activity lives — a screen, a home, the outdoors, or the neighbourhood.",
        clusters:[
          ["Online / remote (from a screen)",[2,4,8,15,31,32,37,42,44,50,65,77,79,81]],
          ["At home (yours or a host's)",[9,14,29,74,75,12,58]],
          ["Outdoors & in nature",[3,6,16,18,23,26,30,33,36,39,41,43,46,49,52,55,61,66,70,71,80,20,11,78]],
          ["In the city — halls, clubs, venues, streets",[1,5,7,10,13,17,19,21,24,25,27,28,34,35,38,40,45,47,48,51,53,54,56,57,59,60,62,63,64,67,68,69,72,73,76,22]]
        ]},
      { id:"B7", name:"How the offer works (the “catch”)", desc:"The mechanism — ads sit together when the same “here's how it works, here's why it's legit” applies.",
        clusters:[
          ["Get paid for doing a task",[2,22,35,42,48,54,59,65]],
          ["A perk in exchange for a responsibility",[7,11,31,40,62,68,69,72,78]],
          ["Join a group / association",[1,12,17,20,21,27,34,41,47,51,53,60,63]],
          ["Attend a one-off scheduled event",[10,19,24,30,33,38,45,56,67,73]],
          ["Sell, swap or rent through a platform",[4,37,44,50]],
          ["Learn a skill (from beginner)",[5,8,13,25,28,57,64,76,81]],
          ["Do a service / health thing online",[15,32,77,79]],
          ["Buy a trip / experience",[3,6,16,18,23,26,36,39,43,46,49,52,55,61,66,70,71,80]],
          ["Foster / adopt or host at home",[9,14,29,58,74,75]]
        ]},
      { id:"B8", name:"Emotional register of your pitch", desc:"The tone you'd adopt — dare them, soothe them, appeal to conscience, wallet, curiosity, or belonging.",
        clusters:[
          ["Adrenaline / dare",[6,66,46,49,26,39,52,30,45,3,23,43,70]],
          ["Calm & wellbeing",[14,32,61,36,77,55]],
          ["Warm-glow / do good",[1,10,21,34,41,47,53,58,60,62,73,13,76,16,71]],
          ["Smart & thrifty",[2,4,15,22,31,37,42,44,48,50,54,56,65,67,24,79,9,29,75,11,78,59]],
          ["Novelty / curiosity",[5,7,8,18,19,25,27,28,38,40,51,57,72,80,81,33,68,69,35]],
          ["Conviviality / belonging",[12,17,20,63,64,74]]
        ]},
      { id:"B9", name:"Type of organisation behind it", desc:"Who is on the other end — a business, charity, peer platform, public body, or recruiter.",
        clusters:[
          ["For-profit business",[3,6,8,9,15,18,19,23,24,26,28,29,32,36,39,43,44,46,49,52,55,56,61,64,66,70,75,77,80,81]],
          ["Non-profit / association / charity",[1,5,10,12,13,14,16,20,21,25,30,33,34,38,41,45,47,51,53,57,58,60,71,73,76]],
          ["Peer-to-peer platform",[4,11,37,50,54,74]],
          ["Public / civic institution or programme",[7,17,27,40,62,63,67,69,72,79]],
          ["Income opportunity / recruiter",[2,22,31,35,42,48,59,65,68,78]]
        ]},
      { id:"B10", name:"Persuasion-routine family (this file's order)", desc:"The argument stock & closing move you re-use. This is the taxonomy the practice order already follows.",
        clusters:[
          ["Volunteering / solidarity",[1,21,34,41,47,53,58,60,62,63]],
          ["Earn money",[2,22,35,42,48,54,59,65,68]],
          ["Travel / escape",[3,23,36,43,49,55,61,70]],
          ["Resale / sharing economy",[4,24,37,44,50,56,67]],
          ["Creative workshop",[5,25,38,45,51,57,64]],
          ["Adventure / sport",[6,26,39,46,52,66]],
          ["Civic / cultural role",[7,27,40,69,72]],
          ["Learn a skill",[8,28,77,81]],
          ["Chef / caterer at home",[9,29,75]],
          ["Charity event",[10,30,73]],
          ["Travel for free",[11,31,78]],
          ["Cook & share",[12,74]],
          ["Shared DIY workshop",[13,76]],
          ["Wellbeing / health",[14,32]],
          ["Handy online service",[15,79]],
          ["Heritage-restoration holiday",[16,71]],
          ["Cultural / social event",[17,33]],
          ["City tours",[18,80]],
          ["Leisure club",[20]],
          ["Unusual restaurant",[19]]
        ]}
    ]
  }
};

if (typeof module !== "undefined" && module.exports) { module.exports = TEF_CLUSTERS; }

if (typeof document !== "undefined") (function(){
  function init(){
    var sections = Array.prototype.slice.call(document.querySelectorAll("section.topic"));
    if (!sections.length) return;
    var pack = (sections.length === 78) ? TEF_CLUSTERS.A
             : (sections.length === 81) ? TEF_CLUSTERS.B
             : null;
    var unit = pack ? "ads" : "prompts";
    if (!pack) pack = { total: sections.length, label: "", methods: [] };

    // Coverage order keys the same four content sets by the same head-count.
    // The three EO-A pages all report 78, the three EO-B pages 81, and the
    // ecrite pairs 72 / 73 — so one key serves every variant of a set.
    var covKey = (sections.length === 78) ? "A"
               : (sections.length === 81) ? "B"
               : (sections.length === 72) ? "EA"
               : (sections.length === 73) ? "EB"
               : null;

    // Map badge number -> section
    var byNum = {};
    sections.forEach(function(s){
      var b = s.querySelector(".badge");
      var n = b ? parseInt((b.textContent||"").trim(), 10) : NaN;
      if (!isNaN(n)) byNum[n] = s;
    });

    // Difficulty order: each item prints its source rank in span.orig —
    // "· was #21" on the EN pages, "· n° d'origine 21" on the FR ones. Take the
    // last run of digits so both wordings parse (note the FR "n°" carries no
    // digit of its own). Only offered when every item carries a rank, so a
    // partial list can never silently drop items.
    var ranked = sections.map(function(s){
      var o = s.querySelector(".orig");
      var d = o ? (o.textContent || "").match(/\d+/g) : null;
      return { el: s, rank: d ? parseInt(d[d.length - 1], 10) : NaN };
    }).filter(function(r){ return !isNaN(r.rank); })
      .sort(function(a, b){ return a.rank - b.rank; });
    var hasDifficulty = (ranked.length === sections.length);

    // Flow = day-bars + sections, in document order. Wrap them so we can reorder cleanly.
    var flow = Array.prototype.slice.call(document.querySelectorAll(".daybar, section.topic"));
    if (!flow.length) return;
    var parent = flow[0].parentNode;
    var wrap = document.createElement("div");
    wrap.id = "tef-flow";
    parent.insertBefore(wrap, flow[0]);
    flow.forEach(function(el){ wrap.appendChild(el); });
    var daybars = flow.filter(function(el){ return el.classList.contains("daybar"); });
    var original = flow.slice();

    injectStyle();
    var ui = buildToolbar();
    parent.insertBefore(ui.bar, wrap);

    var state = { methodId: "default", filter: null };

    ui.select.addEventListener("change", function(){
      state.methodId = ui.select.value;
      state.filter = null;
      if (state.methodId === "coverage" && !window.TEF_COVERAGE) loadCoverage(render);
      else render();
    });

    // Lazy-load tef-coverage.js. Called at most once; concurrent callers queue
    // on the same script element rather than injecting a second copy.
    var covLoad = null;
    function loadCoverage(done){
      if (window.TEF_COVERAGE) return done();
      ui.desc.textContent = "Loading the coverage data…";
      if (!covLoad){
        covLoad = document.createElement("script");
        covLoad.src = "tef-coverage.js";
        covLoad.setAttribute("data-tef-coverage", "1");
        document.head.appendChild(covLoad);
      }
      covLoad.addEventListener("load", function(){ done(); });
      covLoad.addEventListener("error", function(){
        state.coverageFailed = true;
        done();
      });
    }

    function currentMethod(){
      if (state.methodId === "default") return null;
      for (var i=0;i<pack.methods.length;i++) if (pack.methods[i].id === state.methodId) return pack.methods[i];
      return null;
    }

    // Coverage mode injects nodes into and between the sections. Every other
    // mode starts by taking them back out, so switching modes is idempotent.
    function clearCoverage(){
      document.body.classList.remove("tef-mode-coverage");
      wrap.querySelectorAll(".tef-milestone, .tef-caps").forEach(function(n){ n.remove(); });
      sections.forEach(function(s){
        s.querySelectorAll(".tef-cov-note, .tef-covrank").forEach(function(n){ n.remove(); });
      });
    }

    function render(){
      wrap.querySelectorAll(".tef-cluster-head").forEach(function(h){ h.remove(); });
      if (state.methodId !== "coverage") clearCoverage();

      if (state.methodId === "coverage"){ renderCoverage(); return; }

      // Difficulty order is a flat sort, not a grouping: no cluster heads, no chips.
      if (state.methodId === "difficulty"){
        document.body.classList.add("tef-mode-cluster");   // parks the day-bars
        sections.forEach(function(s){ s.style.display=""; });
        ranked.forEach(function(r){ wrap.appendChild(r.el); });
        daybars.forEach(function(d){ wrap.appendChild(d); });
        ui.desc.textContent = "Sequenced by the difficulty ranking, rank 1 first. "
          + "The origin number printed on each item is its difficulty rank.";
        ui.summary.textContent = "Difficulty order · " + pack.total + " " + unit;
        ui.chips.innerHTML = "";
        return;
      }

      var m = currentMethod();
      if (!m){
        document.body.classList.remove("tef-mode-cluster");
        sections.forEach(function(s){ s.style.display=""; });
        original.forEach(function(el){ wrap.appendChild(el); });
        ui.summary.textContent = "Original practice order · " + pack.total + " " + unit;
        ui.chips.innerHTML = "";
        ui.desc.textContent = "";
        return;
      }
      document.body.classList.add("tef-mode-cluster");
      sections.forEach(function(s){ s.style.display="none"; });
      m.clusters.forEach(function(cl){
        var name = cl[0], nums = cl[1];
        if (state.filter && name !== state.filter) return;
        var members = nums.map(function(n){ return byNum[n]; }).filter(Boolean);
        var head = document.createElement("div");
        head.className = "tef-cluster-head";
        head.innerHTML = '<span class="tef-ch-name"></span><span class="tef-ch-count"></span>';
        head.querySelector(".tef-ch-name").textContent = name;
        head.querySelector(".tef-ch-count").textContent = members.length + (members.length===1?" ad":" ads");
        wrap.appendChild(head);
        members.forEach(function(s){ s.style.display=""; wrap.appendChild(s); });
      });
      // Park hidden sections + all day-bars at the end (invisible in cluster mode).
      sections.forEach(function(s){ if (s.style.display==="none") wrap.appendChild(s); });
      daybars.forEach(function(d){ wrap.appendChild(d); });

      ui.desc.textContent = m.desc;
      ui.summary.textContent = m.name + " · " + m.clusters.length + " clusters · " + pack.total + " " + unit
        + (state.filter ? "  (filtered)" : "");
      buildChips(m);
    }

    // Coverage order: a flat sort like difficulty, but each item also carries
    // its rank, the two cumulative coverage readings, and the reason it sits
    // where it sits — plus milestone banners at the ranks where the coverage
    // curve changes shape.
    function renderCoverage(){
      var pk = window.TEF_COVERAGE && covKey ? window.TEF_COVERAGE[covKey] : null;
      if (!pk){
        ui.desc.textContent = state.coverageFailed
          ? "Could not load tef-coverage.js — the other orderings still work."
          : "No coverage data for this list.";
        ui.summary.textContent = "Coverage order unavailable";
        return;
      }
      clearCoverage();
      document.body.classList.add("tef-mode-cluster");    // parks the day-bars
      document.body.classList.add("tef-mode-coverage");
      sections.forEach(function(s){ s.style.display = ""; });

      var milestones = {};
      (pk.milestones || []).forEach(function(ms){ milestones[ms.after_rank] = ms; });
      var total = pk.order.length;

      // The behaviour caps go first and stay first. They fire on what you do,
      // not on how good your French is, and no amount of coverage protects
      // against them — so they sit above the list rather than inside one item.
      if (pk.caps && pk.caps.length){
        var caps = document.createElement("div");
        caps.className = "tef-caps";
        var ch = document.createElement("div");
        ch.className = "tef-caps-head";
        ch.textContent = "Before anything else — these cap you on behaviour, not on level";
        caps.appendChild(ch);
        var cl = document.createElement("ul");
        pk.caps.forEach(function(c){
          var li = document.createElement("li");
          // **bold** and *italic* only — the strings are ours, not user input.
          li.innerHTML = String(c)
            .replace(/[<>&]/g, function(m){ return {"<":"&lt;",">":"&gt;","&":"&amp;"}[m]; })
            .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
            .replace(/\*(.+?)\*/g, "<i>$1</i>");
          cl.appendChild(li);
        });
        caps.appendChild(cl);
        wrap.appendChild(caps);
      }

      pk.order.forEach(function(o){
        var s = byNum[o.badge];
        if (!s) return;
        wrap.appendChild(s);

        var head = s.querySelector(".topic-head");
        if (head){
          var chip = document.createElement("span");
          chip.className = "tef-covrank";
          chip.innerHTML = '<b></b><i></i>';
          chip.querySelector("b").textContent = "#" + o.rank;
          chip.querySelector("i").textContent = "of " + total;
          head.appendChild(chip);
        }

        var note = document.createElement("div");
        note.className = "tef-cov-note";
        note.innerHTML =
            '<div class="tef-cov-why"></div>'
          + '<div class="tef-cov-meters">'
          +   '<span class="tef-cov-m"><em>Pool covered</em>'
          +     '<span class="tef-cov-bar"><i></i></span><b></b></span>'
          +   '<span class="tef-cov-m"><em>Language machinery</em>'
          +     '<span class="tef-cov-bar tef-cov-bar-l"><i></i></span><b></b></span>'
          + '</div>';
        note.querySelector(".tef-cov-why").textContent = o.why || "";
        // Projected floor: what stopping here is worth. It steps at the
        // milestones rather than moving per item, because a per-item NCLC
        // delta would be false precision — one ad out of 78 does not move a band.
        if (o.floor){
          var fl = document.createElement("span");
          fl.className = "tef-cov-floor";
          fl.innerHTML = '<em>Stop here</em><b></b>';
          fl.querySelector("b").textContent = o.floor;
          note.querySelector(".tef-cov-meters").appendChild(fl);
        }
        var meters = note.querySelectorAll(".tef-cov-m");
        meters[0].querySelector("i").style.width = (o.cum_pool || 0) + "%";
        meters[0].querySelector("b").textContent = (o.cum_pool || 0) + "%";
        meters[1].querySelector("i").style.width = (o.cum_lang || 0) + "%";
        meters[1].querySelector("b").textContent = (o.cum_lang || 0) + "%";
        s.appendChild(note);

        var ms = milestones[o.rank];
        if (ms){
          var band = document.createElement("div");
          band.className = "tef-milestone";
          band.innerHTML = '<div class="tef-ms-kicker"><span></span><b></b></div>'
                         + '<div class="tef-ms-head"></div><p class="tef-ms-body"></p>';
          band.querySelector(".tef-ms-kicker span").textContent =
            "After " + o.rank + " item" + (o.rank === 1 ? "" : "s") + " · "
            + (o.cum_pool || 0) + "% of the pool covered";
          if (ms.band) band.querySelector(".tef-ms-kicker b").textContent = ms.band;
          band.querySelector(".tef-ms-head").textContent = ms.headline || "";
          band.querySelector(".tef-ms-body").textContent = ms.body || "";
          wrap.appendChild(band);
        }
      });

      // Anything the coverage list doesn't name (shouldn't happen — the data
      // is checked against the badge set) is parked at the end, still visible.
      var placed = {};
      pk.order.forEach(function(o){ placed[o.badge] = 1; });
      sections.forEach(function(s){
        var b = s.querySelector(".badge");
        var n = b ? parseInt((b.textContent || "").trim(), 10) : NaN;
        if (!placed[n]) wrap.appendChild(s);
      });
      daybars.forEach(function(d){ wrap.appendChild(d); });

      ui.desc.textContent = pk.blurb || "";
      ui.summary.textContent = "Coverage order · " + total + " " + unit;
      ui.chips.innerHTML = "";
    }

    function buildChips(m){
      ui.chips.innerHTML = "";
      var all = document.createElement("button");
      all.className = "tef-chip tef-chip-all" + (state.filter ? "" : " on");
      all.textContent = "All clusters";
      all.addEventListener("click", function(){ state.filter = null; render(); window.scrollTo({top:0,behavior:"smooth"}); });
      ui.chips.appendChild(all);
      m.clusters.forEach(function(cl){
        var name = cl[0], count = cl[1].length;
        var c = document.createElement("button");
        c.className = "tef-chip" + (state.filter===name ? " on" : "");
        var s1 = document.createElement("span"); s1.textContent = name;
        var s2 = document.createElement("b"); s2.textContent = count;
        c.appendChild(s1); c.appendChild(s2);
        c.addEventListener("click", function(){
          state.filter = (state.filter===name) ? null : name;
          render();
          window.scrollTo({top:0,behavior:"smooth"});
        });
        ui.chips.appendChild(c);
      });
    }

    function buildToolbar(){
      var bar = document.createElement("div");
      bar.className = "tef-clusterbar";
      var row = document.createElement("div"); row.className = "tef-row";
      var lab = document.createElement("label"); lab.className = "tef-lab";
      lab.textContent = pack.methods.length ? "Sort / group by" : "Sort by";
      var sel = document.createElement("select"); sel.className = "tef-select";
      var optD = document.createElement("option"); optD.value="default"; optD.textContent="Practice order (default)";
      sel.appendChild(optD);
      if (hasDifficulty){
        var optDiff = document.createElement("option");
        optDiff.value = "difficulty"; optDiff.textContent = "Difficulty order (rank #1 first)";
        sel.appendChild(optDiff);
      }
      if (covKey){
        var optCov = document.createElement("option");
        optCov.value = "coverage";
        optCov.textContent = "Coverage order (most score per hour first)";
        sel.appendChild(optCov);
      }
      pack.methods.forEach(function(m){
        var o = document.createElement("option"); o.value=m.id; o.textContent = m.id + " · " + m.name; sel.appendChild(o);
      });
      lab.setAttribute("for","tef-select"); sel.id="tef-select";
      var summary = document.createElement("span"); summary.className="tef-summary";
      summary.textContent = "Original practice order · " + pack.total + " " + unit;
      row.appendChild(lab); row.appendChild(sel); row.appendChild(summary);
      var desc = document.createElement("div"); desc.className="tef-desc";
      var chips = document.createElement("div"); chips.className="tef-chips";
      bar.appendChild(row); bar.appendChild(desc); bar.appendChild(chips);
      return { bar:bar, select:sel, summary:summary, desc:desc, chips:chips };
    }

    function injectStyle(){
      if (document.getElementById("tef-cluster-style")) return;
      var css = ""
      + ".tef-clusterbar{position:sticky;top:0;z-index:50;background:#ffffff;"
      + "border:1px solid var(--line,#e4e7ec);border-radius:12px;padding:.6rem .8rem;margin:0 0 1rem;"
      + "box-shadow:0 2px 10px rgba(16,24,40,.06)}"
      + ".tef-row{display:flex;align-items:center;gap:.55rem;flex-wrap:wrap}"
      + ".tef-lab{font-weight:700;font-size:.85rem;color:var(--ink,#1f2328)}"
      + ".tef-select{font:inherit;font-size:.9rem;padding:.3rem .5rem;border:1px solid var(--line,#e4e7ec);"
      + "border-radius:8px;background:#fff;color:var(--ink,#1f2328);max-width:100%}"
      + ".tef-summary{font-size:.83rem;color:var(--muted,#5b6470);margin-left:auto}"
      + ".tef-desc{font-size:.83rem;color:var(--muted,#5b6470);margin:.35rem 0 0}"
      + ".tef-desc:empty{display:none}"
      + ".tef-chips{display:flex;flex-wrap:wrap;gap:.35rem;margin:.55rem 0 0}"
      + ".tef-chips:empty{display:none}"
      + ".tef-chip{font:inherit;font-size:.8rem;cursor:pointer;border:1px solid var(--line,#e4e7ec);"
      + "background:#f6f8fb;color:#374151;border-radius:999px;padding:.2rem .6rem;display:inline-flex;"
      + "align-items:center;gap:.35rem;line-height:1.5}"
      + ".tef-chip b{background:#e5eaf1;color:#1f2937;border-radius:999px;padding:0 .4rem;font-size:.76rem}"
      + ".tef-chip:hover{border-color:var(--accent,#2563eb)}"
      + ".tef-chip.on{background:var(--accent,#2563eb);color:#fff;border-color:var(--accent,#2563eb)}"
      + ".tef-chip.on b{background:rgba(255,255,255,.25);color:#fff}"
      + ".tef-chip-all{font-weight:700}"
      + ".tef-cluster-head{display:flex;align-items:baseline;justify-content:space-between;gap:1rem;"
      + "margin:1.8rem 0 .2rem;padding:.5rem .95rem;border-radius:10px;background:#111827;color:#fff}"
      + ".tef-cluster-head:first-child{margin-top:.4rem}"
      + ".tef-ch-name{font-weight:700;font-size:1rem}"
      + ".tef-ch-count{font-weight:500;font-size:.8rem;opacity:.9;white-space:nowrap}"
      + ".tef-mode-cluster .daybar{display:none}"

      // --- coverage order -------------------------------------------------
      + ".tef-covrank{margin-left:auto;flex:none;display:inline-flex;align-items:baseline;gap:.3rem;"
      + "background:#111827;color:#fff;border-radius:999px;padding:.15rem .6rem;white-space:nowrap}"
      + ".tef-covrank b{font-size:.9rem;font-weight:700}"
      + ".tef-covrank i{font-style:normal;font-size:.68rem;opacity:.75}"
      + ".tef-cov-note{margin:.9rem 0 0;padding:.7rem .85rem;border-radius:10px;"
      + "background:#f6f8fb;border:1px solid var(--line,#e4e7ec)}"
      + ".tef-cov-why{font-size:.9rem;color:#344054;line-height:1.55}"
      + ".tef-cov-meters{display:flex;flex-wrap:wrap;gap:.4rem 1.4rem;margin:.6rem 0 0}"
      + ".tef-cov-m{display:flex;align-items:center;gap:.45rem;font-size:.74rem;color:var(--muted,#5b6470)}"
      + ".tef-cov-m em{font-style:normal;text-transform:uppercase;letter-spacing:.05em;font-weight:600}"
      + ".tef-cov-m b{font-size:.78rem;color:var(--ink,#1f2328);min-width:2.2rem}"
      + ".tef-cov-bar{display:block;width:88px;height:6px;border-radius:999px;background:#dfe4ec;overflow:hidden}"
      + ".tef-cov-bar i{display:block;height:100%;background:var(--accent,#2563eb)}"
      + ".tef-cov-bar-l i{background:#b4341f}"
      + ".tef-cov-floor{display:inline-flex;align-items:center;gap:.4rem;font-size:.74rem;"
      + "color:var(--muted,#5b6470)}"
      + ".tef-cov-floor em{font-style:normal;text-transform:uppercase;letter-spacing:.05em;font-weight:600}"
      + ".tef-cov-floor b{font-size:.78rem;color:#0f7a44;background:#e8f5ee;border:1px solid #cbe7d8;"
      + "border-radius:999px;padding:.05rem .5rem;white-space:nowrap}"
      + ".tef-caps{margin:.2rem 0 1.4rem;padding:.8rem 1rem;border-radius:12px;"
      + "background:#fdf3f1;border:1px solid #f0cfc7;border-left:3px solid var(--obj,#b4341f)}"
      + ".tef-caps-head{font-weight:700;font-size:.86rem;color:var(--obj,#b4341f);"
      + "margin-bottom:.4rem}"
      + ".tef-caps ul{margin:0;padding-left:1.1rem}"
      + ".tef-caps li{font-size:.86rem;line-height:1.55;color:#4a3a36;margin:.25rem 0}"
      + ".tef-caps li b{color:#7a2415}"

      + ".tef-milestone{margin:1.8rem 0 .4rem;padding:.85rem 1.1rem;border-radius:12px;"
      + "background:#111827;color:#fff}"
      + ".tef-ms-kicker{display:flex;align-items:center;gap:.5rem;flex-wrap:wrap;"
      + "text-transform:uppercase;letter-spacing:.07em;font-size:.66rem;margin-bottom:.3rem}"
      + ".tef-ms-kicker span{opacity:.7}"
      + ".tef-ms-kicker b{letter-spacing:.04em;background:#0f7a44;color:#fff;border-radius:999px;"
      + "padding:.1rem .55rem;font-size:.68rem}"
      + ".tef-ms-kicker b:empty{display:none}"
      + ".tef-ms-head{font-weight:700;font-size:1.02rem;line-height:1.35}"
      + ".tef-ms-body{margin:.45rem 0 0;font-size:.87rem;line-height:1.6;opacity:.92}"
      + "@media (max-width:520px){.tef-cov-bar{width:56px}}"

      + "@media print{.tef-clusterbar{position:static}}";
      var st = document.createElement("style");
      st.id = "tef-cluster-style";
      st.textContent = css;
      document.head.appendChild(st);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
