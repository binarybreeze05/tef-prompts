/* TEF practice-order — Coverage order data.
   Ranks every prompt/ad by how much of the REST of its list you can answer
   once you own this one, weighted by what the TEF rubrics actually score.
   Loaded lazily by tef-clusters.js the first time "Coverage order" is picked.

   Keys: A = EO Section A (78 ads) · B = EO Section B (81 ads)
         EA = ecrite Section A (72) · EB = ecrite Section B (73)
   Items are addressed by badge number, identical across FR / EN / images. */

var TEF_COVERAGE = {
 "A": {
  "set": "EO_A",
  "blurb": "Ranked by how much of the remaining 78 ads each one teaches you to answer. Drill top-down. “Stop here” is an oral Section A score, not your reported NCLC — this section is ⅓ of the oral composite, and no ordering of prompts can move the language criteria that cap the composite.",
  "caps": [
   "**Ask, don't answer.** Spend more time answering than asking and A1 caps at 5 whatever your French is like — the biggest single exposure in the section.",
   "**Vous, from the first word to the last.** Systematic *tutoiement* caps A4 at 4 and drags A1 and A3 down half a level each.",
   "**Around ten questions.** That is the stated target for A1 at 7."
  ],
  "start_band": "Oral Section A ≈ 5.1",
  "milestones": [
   {
    "after_rank": 7,
    "headline": "Seven calls in and the entire question machine is built",
    "band": "Oral Section A ≈ 6.2",
    "body": "All sixteen Tier L moves are now in your mouth — the conditionnel de politesse, three rotating question frames, embedded questions, falloir + subjonctif, the si-hypothetical, reformulation-to-confirm, and the commercial vocabulary that replaces your calques — and 61% of the pool is assemblable from them. That supports A2 (15%) at 7–8 and A4 (10%) at 7, the two criteria where closed questions and an unstable vous were costing you most. The condition attached is the one you cannot argue with: §7.3's ceiling takes min(LEX, SYN, PHON) across both sections, so these forms only raise your score if the same grammar comes out in Section B — §11's table puts language at 5.5 with task at 7 at 441, which is NCLC 6.6. What is still missing is breadth: fourteen of the twenty-one ad families have not been touched, and the drag rule punishes exactly that kind of gap."
   },
   {
    "after_rank": 12,
    "headline": "Three quarters of the pool, and A1's full eighteen-block checklist is yours",
    "band": "Oral Section A ≈ 6.5",
    "body": "Twelve drills, 75% coverage, and every checklist block installed: money, time, booking, cancellation, eligibility, safety, kit, place, group, content, food and lodging, formula comparison, paperwork, remote process, commitment and next step. You can now put roughly ten relevant questions with audible thematic grouping into any ad in this pool, which is A1 (25%) at 7–8 and, with the follow-up moves from ranks 2 and 4, A3 (20%) at 7 — together with A2 at 15% and A4 at 10% that is the whole 70% task half of Section A. The honest part is §11's arithmetic: task criteria at 7 across both sections with language sitting at 5.5 still lands at 441, which is NCLC 6.6, not 7. Nine families remain untouched and the language work now has to move to Section B, which carries two thirds of the composite."
   },
   {
    "after_rank": 21,
    "headline": "Every ad type rehearsed once — Section A is no longer what is holding you back",
    "band": "Oral Section A ≈ 7.0",
    "body": "Twenty-one drills, one clean archetype per family, and 86% of the pool assemblable. That breadth is not cosmetic: §7.3's drag rule takes 0.5 to 1.0 levels off the composite for every criterion sitting two or more levels below it, so an ordering that left a whole ad type unrehearsed would be actively costing you points, and there is now no such gap across A1 (25%), A2 (15%), A3 (20%) and A4 (10%). Your floor goal — NCLC 5, +22 points on /699 — is reachable on half a level of language alone according to §11, and that half-level is precisely what ranks 1 to 7 installed. NCLC 7 needs language near 6.5 with task near 7.5, and no amount of further Section A drilling supplies the language half of that."
   },
   {
    "after_rank": 34,
    "headline": "91% covered — from here you are buying fluency, not range",
    "band": "Oral Section A ≈ 7.3",
    "body": "Thirty-four drills and 91% of the pool. All 34 components in the inventory have been installed and most have now been rehearsed two or three times on unrelated topics, which is the difference the rubric is actually measuring: A2 at 6 is knowing inversion, A2 at 7 is producing it under pressure without a restart. Nothing new enters the inventory after this rank — the remaining 44 items add topic vocabulary, not technique. If the seven days are tight, stop Section A here and move the hours to Section B: §7.2 weights it two thirds of the composite, and §11 shows that the language criteria it shares with Section A are what the ceiling is built from."
   },
   {
    "after_rank": 50,
    "headline": "96% — the remaining 28 ads are variations you can already improvise",
    "band": "Oral Section A ≈ 7.4",
    "body": "Fifty drills, 96% coverage, and the last sixteen of them moved that number by one point in total. Section A is covered as thoroughly as this pool allows across A1 (25%), A2 (15%), A3 (20%) and A4 (10%); what remains is topic nouns, not question technique. The language criteria — A5, A6 and A7 at 10% each, and the min() over them that sets your ceiling — will not move further from Section A practice, because five minutes of questioning simply does not expose the lexical and syntactic range that ten minutes of argument does. Twenty-eight items are left in the list and not one of them is worth an hour that Section B could use."
   },
   {
    "after_rank": 68,
    "headline": "The last ten are duplicates — drill them only with hours you cannot use elsewhere",
    "band": "Oral Section A ≈ 7.4",
    "body": "Sixty-eight drills, 98% coverage. Each of the final ten shares between 76% and 100% of its components with an ad you have already run, and three of them are component-for-component identical to an earlier item: the bungee jump at rank 78 is the dog sled at rank 37 with different nouns. Section A now supports 7 to 8 on A1, A2, A3 and A4, which is everything the section can give you; the binding constraint is the language ceiling, min(LEX, SYN, PHON) + 1.5, and that is set jointly by both sections. Record yourself running rank 1 again and count the fillers — §6.4 shows a hesitation ratio inside the 'fluid' range on a delivery that was still NCLC 4–5 — before you spend a minute on any of these ten."
   }
  ],
  "df_order": [1,12,3,2,8,7,9,38,6,42,11,32,13,17,16,14,33,18,20,19,21,22,5,10,31,29,63,64,34,30,15,56,46,4,43,50,45,28,35,23,36,58,57,54,51,49,40,27,59,37,48,60,53,26,47,73,24,65,66,39,52,68,25,75,67,41,61,44,77,62,69,74,71,72,76,55,78,70],
  "order": [
   {
    "rank": 1,
    "badge": 22,
    "cum_pool": 29,
    "cum_lang": 25,
    "floor": "Oral Section A ≈ 5.1",
    "why": "This is the call that builds the machine all seventy-seven others run on: « Je voudrais des renseignements sur… » to open, then three frames rotating — « Est-ce que l'équipement est fourni ? », « Combien de temps dure la sortie ? », « Quel niveau faut-il avoir ? » — with vous held from the first word to the last. The ad hands you eleven of the eighteen checklist blocks on one page (safety rules, the machine, the course of your choice, sea/lake/river, the rates), so a single drill puts 29% of the pool within reach. A2 is 15% and the rubric is blunt: ten well-pronounced closed questions read as B1 however fluent you sound — rotating three frames instead of leaning on est-ce que is the one change that takes A2 from 5 to 7."
   },
   {
    "rank": 2,
    "badge": 31,
    "cum_pool": 35,
    "cum_lang": 44,
    "floor": "Oral Section A ≈ 5.1",
    "why": "Here you build the two forms that separate A2 at 7 from A2 at 8: the embedded question, « Je voudrais savoir quels documents il faut fournir », and the subjunctive after falloir, « Est-ce qu'il faudrait que je me déplace en agence ? ». It is also the first call where you read an answer back — « Donc si je comprends bien, il n'y a aucuns frais de tenue de compte, c'est bien ça ? » — which is A3's level-7 descriptor word for word, and A3 is 20%, the criterion your July transcript leaked most. Nine later ads reuse the embedded frame and five reuse the subjunctive; the four new checklist blocks it opens (cancellation, paperwork, remote process, next step) are the ones a leisure ad never forces you to invent."
   },
   {
    "rank": 3,
    "badge": 3,
    "cum_pool": 43,
    "cum_lang": 62,
    "floor": "Oral Section A ≈ 5.1",
    "why": "A castle with guided tours, children's workshops, a restaurant and a shop is four separate topics in one call, so this is where you stop firing questions in a row and start signposting: « Et concernant les ateliers… », « Justement, à ce sujet… », « Juste une dernière chose, si vous permettez… ». It also forces the comparative probe — « Par rapport à la visite libre, qu'est-ce que la visite guidée apporte ? » — which seventeen later ads can reuse verbatim and which sits in A1's 11–12 band. Audible thematic blocks are exactly what A1 at 8 asks for, and A1 is 25%, the heaviest criterion in the section."
   },
   {
    "rank": 4,
    "badge": 2,
    "cum_pool": 50,
    "cum_lang": 69,
    "floor": "Oral Section A ≈ 5.1",
    "why": "Every line of this ad is a claim with no content behind it — flexible schedules, different types of dances, warm atmosphere — so the answers you get will be vague, and vague answers are where you must ask « Qu'entendez-vous exactement par horaires flexibles ? » rather than nodding and moving on. That move is the 5→7 line on A3 (20%): at 5 you can ask for a word to be repeated, at 7 you can ask for a meaning to be clarified. It also opens the group block that twenty-four later ads need, and it is the archetype of Courses & lessons, the second-largest family here with eight more siblings behind it."
   },
   {
    "rank": 5,
    "badge": 42,
    "cum_pool": 54,
    "cum_lang": 88,
    "floor": "Oral Section A ≈ 5.1",
    "why": "Mid-May to mid-October, one departure at 9 h, the whole day: this is the ad that makes you say numbers, times and dates aloud without stumbling, and it is the only one that hands you a natural contingency — « Et s'il n'y a pas de baleines ce jour-là, est-ce que la sortie est remboursée ? », « Si je devais annuler la veille, qu'est-ce qui se passerait ? ». That si-clause is SYN at 8 and A1 at 8 in one sentence, and seven later ads can carry it across unchanged. It also installs « À partir de quelle heure… ? » and « En quoi consiste la sortie ? » — prepositional interrogatives, which the rubric lists among the level-8 forms and which nothing before this point forced."
   },
   {
    "rank": 6,
    "badge": 7,
    "cum_pool": 58,
    "cum_lang": 94,
    "floor": "Oral Section A ≈ 5.1",
    "why": "Small groups, tools provided, bring your own objects to recycle — this ad is built to make you use the pronouns you currently drop: « Qu'est-ce qui est fourni exactement ? », « Il faut en apporter combien ? », « Ce dont j'ai besoin, c'est quoi ? ». Your July transcript shows « combien des entretiens » and « je fais du souci » — the same class of error, and six later ads give you the reps to kill it. It is cheap in time and it lifts SYN — 10% of the section by itself, and one of the three criteria the ceiling takes a minimum over, so it costs you far more than 10% when it is the lowest of the three."
   },
   {
    "rank": 7,
    "badge": 30,
    "cum_pool": 61,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 5.1",
    "why": "This is where you stop saying « comment vous facturez pour ça » and start saying the actual words: « Est-ce que vous établissez un devis gratuit ? », « Le déplacement est en supplément ? », « Quelles sont les conditions de résiliation ? ». §6.4 of the rubric lists your calques by name and puts them at LEX 5, not 6 — LEX is 10% of the section and one of the three criteria the ceiling takes a minimum over. Nine later ads pay a price, take a deposit or run on a contract, so this vocabulary is reused across the money block for the rest of the pool, and it completes the Tier L inventory at 100%."
   },
   {
    "rank": 8,
    "badge": 38,
    "cum_pool": 65,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 6.2",
    "why": "The language work is finished; this is the first of fourteen calls that widen the topic surface instead. A converted bus with cocktails, buffets and entertainment is a capacity-and-catering call — « Le bus peut accueillir combien de personnes ? », « Le buffet est compris dans le tarif ou en supplément ? » — and it is the cleanest of the five Events & parties ads, which lets the memorised answer transfer to four siblings. Four points of pool coverage for one 20-minute drill is the best rate left on the board."
   },
   {
    "rank": 9,
    "badge": 6,
    "cum_pool": 68,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 6.2",
    "why": "Clubs and associations run on a different question set from commercial ads: there is no price list, there is a membership. « Comment est-ce qu'on adhère ? », « La cotisation est annuelle ? », « Est-ce qu'on peut venir essayer une sortie avant de s'inscrire ? » — the commitment block, which twenty-two later items across four families reuse. It buys three points of pool coverage, and the commitment block it opens feeds A1 at 25% — drill it once and the Reading Club, the Media Library, the choir and the clothes swap all become variations you can improvise."
   },
   {
    "rank": 10,
    "badge": 8,
    "cum_pool": 71,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 6.2",
    "why": "Two days, artists from all over the world, a 1-day or 2-day pass, catering and camping on site: this is the ad where the comparison question earns its keep — « Par rapport au pass une journée, qu'est-ce que le pass deux jours change concrètement ? ». Nothing new goes into the inventory here, but it opens Shows & cultural events, a four-ad family, and it is the richest of the four, so the answer transfers down to the theatre, the radio recording and the culinary expo. Three points of coverage, and it is a genuine rehearsal of the A1 progression from general to specific rather than a new component."
   },
   {
    "rank": 11,
    "badge": 11,
    "cum_pool": 73,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 6.2",
    "why": "Ski school splits its offer twice over — teenagers versus adults, medium versus long stays, several accommodation options — so it is the archetype of the whole packages-and-lodging shape and the best of the three Snow-sports ads. « Quelle est la différence entre le séjour moyen et le séjour long ? », « L'hébergement est compris ou il faut le réserver à part ? » sit straight on top of what rank 3 installed. It adds two points of pool coverage and it makes ranks 72 and 77 redundant in advance, which is worth more than the two points suggest."
   },
   {
    "rank": 12,
    "badge": 32,
    "cum_pool": 75,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 6.2",
    "why": "Being paid rather than paying flips the whole call: you are no longer a customer, you are applying, and the questions change to obligations. « Combien de programmes faut-il regarder par mois ? », « Les chèques-cadeaux, ils représentent quelle somme ? », « Est-ce qu'il y a un engagement de durée ? ». Paid gigs & testers is a three-ad family and this is its cleanest instance; it also rehearses the commitment block that Volunteering and Clubs reuse. Two points of coverage — the running total reaches 75% — and it removes the risk of freezing on the one ad type where you cannot fall back on price and schedule."
   },
   {
    "rank": 13,
    "badge": 13,
    "cum_pool": 77,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 6.5",
    "why": "In-home care or a host family, competent staff, care guaranteed — a service call about something you care about, which is the one context where the contingency question sounds natural rather than rehearsed. « Si mon chat tombait malade pendant mon absence, vous feriez quoi ? », « Quelle est la différence exacte entre la garde à domicile et la famille d'accueil ? ». It is the fuller of the two Pet care ads, so rank 64 becomes optional the moment this one is drilled, and it lands the pool figure at 77%."
   },
   {
    "rank": 14,
    "badge": 17,
    "cum_pool": 78,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 6.5",
    "why": "Costume rental is the deposit call: « Il faut verser une caution ? », « Elle est de combien ? », « Qu'est-ce qui se passe si le costume est abîmé ? » — the commercial vocabulary from rank 7 applied to an object you take away and bring back. Two points of coverage, one new family opened, and the answer covers the vintage-car rental at rank 29 almost word for word. Drill it while the caution/dépôt de garantie pair is still fresh from Green Corners."
   },
   {
    "rank": 15,
    "badge": 16,
    "cum_pool": 80,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 6.5",
    "why": "Choose your breakfast, choose your day and time, they deliver: a four-question call that you should be able to run in ninety seconds, which makes it the right item to practise pace on rather than range. « Vous livrez dans quel secteur ? », « Il faut commander la veille ? », « On peut composer soi-même le panier ? ». Food delivery is a two-ad family and this is the fuller of the pair — two points of pool coverage, and it retires rank 75 in advance."
   },
   {
    "rank": 16,
    "badge": 14,
    "cum_pool": 81,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 6.5",
    "why": "Three hundred destinations, packages for all budgets, stays from five to thirty days — the ad is a menu, so the call has to narrow before it can be useful, and that narrowing is precisely what A1 at 7 means by a funnel. Open wide (« Vous pourriez me présenter les formules en quelques mots ? »), then close down to a budget, a duration and a departure date. One point of pool coverage and one more family opened; its real value is that it is the last item in the order that still teaches you something about how to structure five minutes."
   },
   {
    "rank": 17,
    "badge": 33,
    "cum_pool": 82,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 6.5",
    "why": "A laptop in exchange for one hour of volunteering a week is a conditional bargain, and bargains are where the hypothetical belongs: « Et si une semaine je ne peux pas venir, qu'est-ce qui se passe ? », « L'ordinateur, il faut le rendre quand on arrête ? ». Nothing new enters the inventory, but Volunteering is the seventeenth of twenty-one families and this is its richer ad. One point of coverage, twenty minutes of work, a running total of 82% — and one whole ad type you have never rehearsed taken off the risk list."
   },
   {
    "rank": 18,
    "badge": 18,
    "cum_pool": 83,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 6.5",
    "why": "This is the only ad in the pool where you have to give information rather than only take it — they need details about the person receiving the song — so it forces the reversal: « De quelles informations avez-vous besoin exactement ? », « En quoi consiste chaque formule ? ». No family behind it, so it buys one point and nothing more, but it is a shape that appears nowhere else in seventy-eight items and freezing on it in the exam would cost you the A1 and A3 marks for the whole five minutes. Twenty minutes of insurance."
   },
   {
    "rank": 19,
    "badge": 20,
    "cum_pool": 84,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 6.5",
    "why": "A one-off charity sale has no schedule, no levels and no booking — the standard checklist collapses and you have to build the call out of dates, place, brands, prices and payment. « La vente dure combien de jours ? », « Vous acceptez la carte ? », « Les bénéfices vont à quelle association ? ». One point of coverage; the reason it is at 19 and not at 60 is that it is the only ad where most of your prepared blocks do not apply, and that is exactly the situation that produces silence."
   },
   {
    "rank": 20,
    "badge": 19,
    "cum_pool": 85,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 6.5",
    "why": "Sleeping in a cabin facing the lions is a stay, not an activity, so the lodging and meals block runs the call: « La cabine, elle fait combien de couchages ? », « Les repas sont compris ? », « Les enfants sont acceptés à partir de quel âge ? ». One point of pool coverage and no siblings, but it is the only overnight-stay ad in the pool and the accommodation vocabulary is otherwise touched only by the ski school. Cheap, distinct, and it takes the running total to 85%."
   },
   {
    "rank": 21,
    "badge": 21,
    "cum_pool": 86,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 6.5",
    "why": "The apartment ad is the administrative call: « Les charges sont comprises dans le loyer ? », « Il faut constituer un dossier avec un garant ? », « À partir de quand est-il disponible ? », and it ends with the only genuinely concrete next step in the pool — « Est-ce qu'on pourrait convenir d'une visite cette semaine ? ». Closing a call with an appointment rather than a thank-you is an A4 level-8 move, and A4 is 10% with a hard cap attached to it. This is the twenty-first item and the twenty-first family: every ad type in the pool has now been rehearsed at least once, which is what the drag rule in §7.3 is actually asking for."
   },
   {
    "rank": 22,
    "badge": 1,
    "cum_pool": 86,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.0",
    "why": "Paragliding is the archetype this whole set was built around, and it sits at rank 22 rather than rank 1 only because the jet-ski ad at rank 1 is the same call with a licence question bolted on — the two share 93% of their components. Drill it anyway: « Exceptional rates » is the exact trap §6.4 uses as its calibration example, and asking « Quels sont ces tarifs exceptionnels ? » is a question, not a follow-up, so the answer you get is where A3 is actually won. It moves the pool figure by less than a point, but it is the cleanest twenty minutes of A1 rehearsal in the Adventure family and eleven siblings still sit behind it."
   },
   {
    "rank": 23,
    "badge": 5,
    "cum_pool": 87,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.0",
    "why": "Electric boats, with or without a guide, on lake, river or sea — the choice architecture makes the comparison and the permit questions land naturally: « Il faut que j'aie un permis ? », « Avec guide, ça coûte combien de plus ? ». Everything here was installed by rank 7, so it buys one point of coverage; what it buys beyond that is a second rep of the trade-off probe on a completely different topic, which is how a memorised move becomes an available one. Boating is a five-ad family and this is its most complete instance."
   },
   {
    "rank": 24,
    "badge": 10,
    "cum_pool": 87,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.0",
    "why": "Missions near where you live, paid according to the job, based on your availability: the questions are about terms, not about a product — « Comment est-ce que la rémunération est calculée ? », « Il y a un minimum de missions par mois ? », « Il faut signer un contrat ? ». Rank 12 already opened this family, so the marginal coverage is under a point. Take it anyway if paid-work ads worry you, because it and the TV-testers ad are the two most different-sounding items in the whole pool."
   },
   {
    "rank": 25,
    "badge": 12,
    "cum_pool": 88,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.0",
    "why": "Four numbered steps, a prescription to send, secure payment, satisfied-or-refunded: the process call, where the value is in ordering your questions along the steps rather than around a checklist. « Il faut envoyer l'ordonnance avant ou après le paiement ? », « Le remboursement sous 48 heures couvre les frais de retour ? ». One point of coverage. Its real use is as a second rep of the commercial vocabulary from rank 7, on a transaction where you never see the seller."
   },
   {
    "rank": 26,
    "badge": 29,
    "cum_pool": 88,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.0",
    "why": "Experienced instructors, reliable equipment, guarantees for your safety, day and night sailing: the safety block gets its fullest workout here, and it is a block you can otherwise be lazy about. « Les moniteurs sont diplômés d'État ? », « Vous êtes combien par bateau ? », « L'assurance est incluse dans le forfait ? ». Under a point of new coverage — this is a rehearsal item, and at rank 26 rehearsal is what is left to buy."
   },
   {
    "rank": 27,
    "badge": 63,
    "cum_pool": 89,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.0",
    "why": "Indoor and outdoor courses, private hire for an event, open all year: mini-golf is the low-stakes end of the Adventure family and a good place to work on pace rather than range, because the content is trivially easy and the delivery is the only thing that can go wrong. « Le prêt du matériel est compris ? », « On peut privatiser une piste pour un anniversaire ? ». Half a point of coverage, and PHON is 10% and sits inside the ceiling min() — a clean, quick, filler-free run of ten questions here is worth more than a new topic."
   },
   {
    "rank": 28,
    "badge": 64,
    "cum_pool": 89,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.0",
    "why": "More than twenty combat sports taught by recognised experts, with an open invitation to come and be advised: the levels-and-trial call, already built by rank 4. « Est-ce qu'on peut faire un cours d'essai ? », « Il faut un certificat médical ? », « Les cours sont par niveau ou par discipline ? ». Under a point of pool movement. Worth the twenty minutes only because Courses & lessons is a nine-ad family and this is its most open-ended ad — the one where the examiner will improvise most."
   },
   {
    "rank": 29,
    "badge": 34,
    "cum_pool": 90,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.0",
    "why": "Vintage cars with or without a driver, for weddings and professional events: this is the costume rental at rank 14 with a bigger deposit and a licence attached. « Quelle est la caution ? », « Avec chauffeur, le tarif change comment ? », « Il faut un permis particulier pour ces modèles ? ». One point of coverage. It closes the Object rentals family, so after this you never need to think about deposits again."
   },
   {
    "rank": 30,
    "badge": 9,
    "cum_pool": 90,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.0",
    "why": "Repair, spare parts, bodywork, annual servicing, and a loan car while yours is in the garage — a service call with a real contingency in it: « Si la réparation prend plus longtemps que prévu, la voiture de courtoisie reste disponible ? », « Vous faites un devis avant d'intervenir ? ». Everything it uses is already installed, so the coverage gain is under a point. It is here rather than at 60 because the at-home-service shape (coverage area, appointment window, guarantee on the work) appears in three ads and this is the one that states it most fully."
   },
   {
    "rank": 31,
    "badge": 15,
    "cum_pool": 90,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.0",
    "why": "An association that lends toys, offering volunteers varied activities and flexible hours — two vague phrases, which is your cue: « Qu'entendez-vous par activités variées ? », « Combien d'heures par semaine attendez-vous de nous ? ». Rank 17 already opened Volunteering, so this adds a fraction of a point. Drill it as a five-minute pure-A3 exercise: no new content at all, just follow-ups on whatever the examiner improvises."
   },
   {
    "rank": 32,
    "badge": 56,
    "cum_pool": 91,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.0",
    "why": "Bring your clothes and swap them, every Wednesday evening, free: no price to ask about, which quietly removes your safest three questions and forces you onto the rest of the checklist. « Il faut être adhérent pour participer ? », « On peut apporter combien de vêtements ? », « Ça se passe où exactement ? ». Under a point of coverage, with the total at 91%. It is worth doing precisely because the money block is unavailable — the exam version of this is the ad where your prepared opening does not fit."
   },
   {
    "rank": 33,
    "badge": 46,
    "cum_pool": 91,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.0",
    "why": "Alone or in a group, professional facilitators, the gestures and the words: an oenology course is the group-size call and it comes with an age constraint most ads do not have. « En groupe, vous êtes combien maximum ? », « Il y a un âge minimum pour participer à la dégustation ? ». Well under a point of new coverage at rank 33. Take it as a second Courses rep on a topic where the vocabulary is unfamiliar — that is what makes it useful, not the checklist."
   },
   {
    "rank": 34,
    "badge": 4,
    "cum_pool": 91,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.0",
    "why": "Personalised decorations, buffets, music of your choice, afternoon or evening, at a venue or at home: the most configurable ad in the pool, and therefore the best place to rehearse the comparison probe a second time. « Par rapport à la formule de base, la formule complète comprend quoi exactement ? ». Rank 8 already opened Events & parties, so the coverage gain rounds to zero. Its value is one clean rep of a 25%-criterion move on an ad where the options are genuinely open-ended."
   },
   {
    "rank": 35,
    "badge": 43,
    "cum_pool": 92,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.3",
    "why": "No geographic limit, several packages, payment facilities, packing included: the removals call is the densest commercial-vocabulary ad in the pool — devis, assurance, supplément d'étage, facilités de paiement — all of which you installed at rank 7 and none of which is new here. Zero measurable pool movement at rank 35. It earns its place as a vocabulary maintenance rep: say those five words out loud in a real sentence once more and they stop being flashcards."
   },
   {
    "rank": 36,
    "badge": 50,
    "cum_pool": 92,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.3",
    "why": "Repair your own car with the tools and the professionals on hand: the participatory garage combines the workshop kit block with a membership, which is an unusual pairing. « Il faut adhérer à l'association pour utiliser l'atelier ? », « Les outils sont tous fournis ou il faut en apporter ? ». No measurable coverage gain. Do it if you want a third rep of en/y — « Il faut en apporter ? » — otherwise it is fully covered by ranks 6 and 9."
   },
   {
    "rank": 37,
    "badge": 45,
    "cum_pool": 92,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.3",
    "why": "Drive your own dog team, all surfaces, reservation recommended before your stay: at 93% component overlap with the jet-ski call at rank 1, this is a transfer test rather than a new drill. Run it cold, without re-reading your notes, and see whether the ten questions come out in the same order and with the same three frames rotating. It gains you nothing on the coverage number and everything on whether rank 1 actually stuck."
   },
   {
    "rank": 38,
    "badge": 28,
    "cum_pool": 93,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.3",
    "why": "A children's show with a snack afterwards, a possible tour of the theatre and group rates: the one ad in the family where you are asking on behalf of a child, which changes the age and suitability questions. « À partir de quel âge le spectacle est adapté ? », « Le tarif groupe s'applique à partir de combien d'enfants ? ». Under a point at rank 38. Second Shows rep; the family has two ads left after it and both are thinner than this one."
   },
   {
    "rank": 39,
    "badge": 35,
    "cum_pool": 93,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.3",
    "why": "Varied schedules, discount possible, beginners accepted — three vague promises and no phone number, only a website, which makes the closing question unusual: « Est-ce qu'on peut réserver par téléphone ou uniquement en ligne ? ». Clarifying « réduction possible » is a straight repeat of the rank 4 move. Coverage gain rounds to zero; this is a rep of A3 on an ad engineered to give you vague answers."
   },
   {
    "rank": 40,
    "badge": 23,
    "cum_pool": 93,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.3",
    "why": "Lessons at your home, on the days and times of your choice, adapted to your age, level and musical taste: an at-home course, so the logistics questions from rank 7 meet the level questions from rank 4. « Il faut avoir sa propre guitare ? », « Vous vous déplacez dans quel secteur ? », « Les cours durent combien de temps ? ». No measurable pool movement at rank 40. A twenty-minute maintenance run, nothing more."
   },
   {
    "rank": 41,
    "badge": 36,
    "cum_pool": 94,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.3",
    "why": "Classes with a chef, varied cuisines, visits to specialist shops, tastings: four content strands, which makes it a good second workout for the thematic transitions from rank 3 — « Et concernant les visites de boutiques… », « Pour en revenir aux cours eux-mêmes… ». Zero net coverage. Take it if your signposting still sounds bolted-on; A1 at 8 requires audible blocks and this is the ad most likely to expose whether you have them."
   },
   {
    "rank": 42,
    "badge": 58,
    "cum_pool": 94,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.3",
    "why": "Experienced instructors, relaxed atmosphere, training at your own pace, attractive prices: getting a motorcycle licence is the paperwork call inside a course ad. « Il faut que j'aie déjà le permis voiture ? », « Le code est compris dans le tarif ? », « En combien de temps on passe l'examen en moyenne ? ». Under a point of coverage at rank 42. Its one distinct feature is that the outcome is an exam date, which nothing else in the pool has."
   },
   {
    "rank": 43,
    "badge": 57,
    "cum_pool": 94,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.3",
    "why": "Bubble football with family, friends or colleagues, professional supervision, contact by website only: a group-and-supervision call with no phone number, which is a small but real oddity worth having met once. « On peut venir à combien ? », « L'encadrement est assuré par des professionnels diplômés ? ». No measurable coverage gain at rank 43 — the total holds at 94%. Twenty minutes, and only if the Adventure family still feels less than automatic."
   },
   {
    "rank": 44,
    "badge": 54,
    "cum_pool": 94,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.3",
    "why": "Guided tour of the hives, workshops for children, tasting, shop: the honey museum is the castle at rank 3 in miniature and shares most of its structure. « La visite guidée dure combien de temps ? », « L'atelier enfants est à partir de quel âge ? », « La dégustation est comprise dans le billet ? ». Coverage moves by a fraction of a point. Use it as a timed run of the four-block transition pattern rather than as new content."
   },
   {
    "rank": 45,
    "badge": 51,
    "cum_pool": 95,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.3",
    "why": "Attend a radio recording, meet celebrities, ask your questions, win gifts: an event with free entry and a registration process, so the money block shrinks to nothing and the registration block carries the call. « Comment est-ce qu'on s'inscrit ? », « Il y a un tirage au sort ou c'est premier arrivé ? », « L'enregistrement dure combien de temps ? ». Half a point at rank 45. A short, easy rep on a family you have already covered twice."
   },
   {
    "rank": 46,
    "badge": 49,
    "cum_pool": 95,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.3",
    "why": "Loans of books and other documents, lectures and workshops, memberships for everyone: the library is the clubs call with municipal paperwork attached — « Il faut un justificatif de domicile pour s'inscrire ? », « L'adhésion est gratuite pour tout le monde ? ». Nothing new enters at rank 46. Its one asset is that the answers will be dull and administrative, which is good practice for holding the conversation together when there is nothing exciting to react to."
   },
   {
    "rank": 47,
    "badge": 40,
    "cum_pool": 95,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.3",
    "why": "Pick your own fruit, vegetables and flowers, depending on the season, easy access, competitive prices: a seasonal, per-kilo call — « Le tarif est au kilo ou à l'entrée ? », « Qu'est-ce qu'on peut cueillir en ce moment ? », « Il faut apporter ses propres paniers ? ». Under half a point of coverage at rank 47. The « il faut en apporter » pronoun rep is the only reason it sits ahead of the last thirty."
   },
   {
    "rank": 48,
    "badge": 27,
    "cum_pool": 95,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.3",
    "why": "Discover bees and help preserve them over a half-day: short, single-block and completely predictable, which is why it is at 48 and not at 8. « La demi-journée commence à quelle heure ? », « Une combinaison de protection est fournie ? », « C'est accessible aux enfants ? ». Coverage moves by a fraction of a point. Worth twenty minutes only as a speed run — ten questions in five minutes with no restarts."
   },
   {
    "rank": 49,
    "badge": 59,
    "cum_pool": 95,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.3",
    "why": "A hundred and twenty hectares, fifteen hundred animals, guided tours and children's workshops, reservation depending on the season: this is the honey museum at rank 44 and the castle at rank 3 recombined. « La visite dure combien de temps à pied ? », « Il faut réserver en haute saison ? ». No measurable pool movement. It stays ahead of the tail only because Tours & guided visits is a seven-ad family and repetition inside the biggest families is where the last real transfer lives."
   },
   {
    "rank": 50,
    "badge": 37,
    "cum_pool": 96,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.3",
    "why": "Explore the city by bike, guided tours on request, reservation recommended, bike rental on the same call: two services in one, which is the only structural interest left here. « La location du vélo est comprise dans la visite ? », « Le parcours fait combien de kilomètres ? », « C'est adapté à quelqu'un qui n'a pas fait de vélo depuis longtemps ? ». Half a point at rank 50 — you are now past the point where new topics teach you anything, and into pure repetition."
   },
   {
    "rank": 51,
    "badge": 48,
    "cum_pool": 96,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Four packages, activities from age two, groups of eight children minimum, invitation cards, catering: dense on paper, but every one of those questions was built at ranks 3, 4 and 8. « Le forfait comprend le goûter ? », « Huit enfants minimum, c'est ferme ? ». Coverage gain is a fraction of a point. Do it as a comparison-probe rep if the four-package structure appeals; skip it without regret if time is short."
   },
   {
    "rank": 52,
    "badge": 60,
    "cum_pool": 96,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Treetop courses, a GPS rally and children's games in a nature park: a bundle of activities you have already rehearsed asking about individually. « Les parcours sont adaptés à partir de quel âge ? », « On peut faire les trois activités dans la journée ? ». No measurable movement on the coverage number at rank 52. This is the sixth Adventure ad in the order and the family is long since automatic."
   },
   {
    "rank": 53,
    "badge": 53,
    "cum_pool": 96,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Riding lessons and hacks, discovery and improvement at any age, various lesson packages, qualified instructors, supervised activities: the equestrian centre is the martial arts ad at rank 28 with horses. « Les cours sont collectifs ou individuels ? », « L'équipement est prêté pour le premier cours ? ». Zero net coverage at rank 53. A maintenance rep on the level-and-package pattern, nothing more."
   },
   {
    "rank": 54,
    "badge": 26,
    "cum_pool": 96,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "One Monday a month, 7 p.m. to 9 p.m., a book chosen by the club, an aperitif: the times and dates are the only thing here that is not already in your hands, and you drilled saying those aloud at rank 5. « C'est quel lundi exactement ? », « Il faut acheter le livre soi-même ? ». Under half a point. Note the ad gives an email and no phone number, which makes the closing move slightly odd — that is the only surprise left in it."
   },
   {
    "rank": 55,
    "badge": 47,
    "cum_pool": 96,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Several departures a day, numerous tours, a restaurant on board, an accommodation package: it is the castle at rank 3 and the ski school at rank 11 fused, and it shares 88% of its components with the castle. « Le forfait avec hébergement revient à combien ? », « Le repas à bord est compris ? ». Coverage moves by a fraction of a point at rank 55. Only worth the time if trains and timetables are a vocabulary gap you actually feel."
   },
   {
    "rank": 56,
    "badge": 73,
    "cum_pool": 97,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Cruise the canals in a licence-free boat with exceptional special offers: three-quarters of this call is the small-boat rental at rank 23, and the licence question was already answered there. « Sans permis, il y a une limite de puissance ? », « L'offre spéciale, elle court jusqu'à quand ? ». Under half a point of coverage. Low-yield — drill it only if the Boating family is the one that still makes you hesitate."
   },
   {
    "rank": 57,
    "badge": 24,
    "cum_pool": 97,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Night visit, unique exhibitions, lectures until midnight, a bar-restaurant, unprecedented prices: the component set is identical to the culinary expo at rank 66, and 93% shared with the open-air concert at rank 10. « Les conférences sont comprises dans le billet ? », « Ça ferme vraiment à minuit ? ». No measurable movement at rank 57. A pleasant twenty minutes with no measurable return."
   },
   {
    "rank": 58,
    "badge": 65,
    "cum_pool": 97,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Learn to rollerblade as a family or with friends, equipment provided, group outings, discounts: 92% shared with the lamp workshop at rank 6 in structure, and nothing in it is new. « Les protections sont fournies aussi ? », « La réduction s'applique à partir de combien de personnes ? ». Coverage moves by less than a point at rank 58. Reps only — you are buying fluency here, not range."
   },
   {
    "rank": 59,
    "badge": 66,
    "cum_pool": 97,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Digital tools for beginners: basic concepts, camera and video calls, administrative websites, social networks. The four content strands make it a decent transitions rep, and the beginner framing makes « C'est vraiment adapté à quelqu'un qui part de zéro ? » natural. Under a point of coverage at rank 59. Take it if administrative and technology vocabulary is thin; otherwise it is fully covered by ranks 4 and 28."
   },
   {
    "rank": 60,
    "badge": 39,
    "cum_pool": 97,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "An international choir bringing together music from every country, with the promise of improving your foreign languages: joining, rehearsals, level, fees — the walking-club call from rank 9, 92% shared. « Il faut passer une audition ? », « On répète combien de fois par mois ? ». Coverage moves by a fraction of a point. It closes out Clubs & associations, and after it that family has nothing left to teach you."
   },
   {
    "rank": 61,
    "badge": 52,
    "cum_pool": 97,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Youth and adults, experienced instructors, according to your level and fitness, in complete safety, booking Monday to Friday 9–12 and 2–6: the opening hours are the only detail you have not already met, and you drilled reading times aloud at rank 5. « Il faut une condition physique particulière ? », « Vous prêtez le matériel d'escalade ? ». No measurable pool movement at rank 61. Pure rehearsal."
   },
   {
    "rank": 62,
    "badge": 68,
    "cum_pool": 97,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Numerous destinations, professional guides, panoramic view, easy to pilot: an underwater scooter is a jet ski underwater, and the two share 93% of their components. « C'est accessible sans savoir plonger ? », « La sortie dure combien de temps ? ». Under a point of coverage at rank 62. Low-yield; the only case for it is that « Fun guaranteed! » is another vague claim to practise clarifying."
   },
   {
    "rank": 63,
    "badge": 25,
    "cum_pool": 97,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Weddings, birthdays, cocktail parties, choose your musical package and book it: the orchestra hire is the Faites la fête call at rank 34 with 93% of the same components. « Le forfait couvre combien d'heures de musique ? », « Vous vous déplacez à quelle distance ? ». Coverage moves by a fraction of a point at rank 63. Skip it unless you want one more rep of the package-comparison probe."
   },
   {
    "rank": 64,
    "badge": 75,
    "cum_pool": 98,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Cat-sitting at your home while you travel, with a website and no phone number in the ad. Every question in it was built at rank 13, and the two ads share 76% of their components. « Vous passez combien de fois par jour ? », « Il faut vous laisser les clés à l'avance ? ». Under half a point of coverage at rank 64 — low-yield, and safe to skip if the day is running short."
   },
   {
    "rank": 65,
    "badge": 67,
    "cum_pool": 98,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Drivers of all levels, varied trails, experienced instructors, competitive rates: the quad bike shares 93% of its components with the jet ski at rank 1, which means you already know every question in it. « Il faut le permis pour conduire un quad ? », « Les trajets sont accompagnés ? ». Coverage moves by a fraction of a point at rank 65. Low-yield — a warm-up run, not a study session."
   },
   {
    "rank": 66,
    "badge": 41,
    "cum_pool": 98,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "A week celebrating the culinary arts: chef meetings, workshops, tastings, a competition. Its component set is identical to the museum Nocturne at rank 57 — same blocks, same order, same questions with different nouns. « Le concours est ouvert au public ? », « Les ateliers sont sur inscription ? ». No measurable coverage gain at rank 66 — low-yield, and worth drilling only if food vocabulary is a gap you can name."
   },
   {
    "rank": 67,
    "badge": 61,
    "cum_pool": 98,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Different levels, small groups, very low prices, guaranteed progress, for a child's homework: the component set is identical to the walking club at rank 9, which is not obvious from the topic and is entirely true of the call. « Les groupes font combien d'élèves ? », « Sur quelles matières vous intervenez ? ». Coverage does not measurably move at rank 67. Low-yield and safe to skip."
   },
   {
    "rank": 68,
    "badge": 44,
    "cum_pool": 98,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Send us your unworn jewellery, secure shipping, fast offer, satisfied or refunded within 48 hours: component-for-component identical to the online glasses purchase at rank 25, just running in the other direction. « L'expédition est à votre charge ? », « L'offre est valable combien de temps ? ». No measurable coverage gain at rank 68. Low-yield — skip it before you skip a night's sleep."
   },
   {
    "rank": 69,
    "badge": 77,
    "cum_pool": 98,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Boats for two to ten people, safety equipment provided, half-day or full-day, no licence needed. You have drilled this call twice already — at rank 23 and at rank 56 — and there is nothing in it that either of those did not cover. It is worth well under a point of coverage at rank 69, which makes it low-yield and entirely safe to skip. If you drill it at all, do it as a two-minute skim of the question list, not a full run."
   },
   {
    "rank": 70,
    "badge": 62,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "A children's discovery workshop at the natural history museum, with qualified facilitators and small school supplies to bring. Rank 44's honey museum and rank 3's castle between them cover every question in it; the marginal coverage here is under a point at rank 70. Low-yield, and safe to skip. The one line worth stealing is « Il faut apporter quoi exactement comme fournitures ? », which you can attach to any workshop ad in ten seconds."
   },
   {
    "rank": 71,
    "badge": 69,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Rugged tracks, a fleet of fifty vehicles, all levels, families welcome, twenty minutes from home. This is the quad bike at rank 65 and the jet ski at rank 1 wearing a third costume — you have run this exact call twice. It buys a fraction of a point of coverage at rank 71 and nothing else. Low-yield: skip it, and spend the twenty minutes recording yourself doing rank 1 again and counting the fillers instead."
   },
   {
    "rank": 72,
    "badge": 74,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Skiing and snowboarding, experienced instructors, beginner or advanced courses, a safe and fun environment. Rank 11 covered every question in this ad with a fuller version of the same offer, and the two share 80% of their components. A fraction of a point of coverage at rank 72. Low-yield and safe to skip — the ski vocabulary is already in your hands from rank 11."
   },
   {
    "rank": 73,
    "badge": 71,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Become a food-product tester: you choose the products, home delivery, a gift card in return for your opinion. It is the TV-testers ad from rank 12 with a different reward, sharing 85% of its components, and rank 24's mystery shopper covered the pay-and-obligations questions in more depth than this one requires. Under half a point of coverage at rank 73. Low-yield — skip it."
   },
   {
    "rank": 74,
    "badge": 72,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "The first airline offering personalised fares, ten dream destinations, book quickly. Rank 16's travel agency handled destinations, budgets, durations and booking in a call with more to ask about, and this one adds only a passport-and-visa question. It is worth a fraction of a point at rank 74. Low-yield and safe to skip; if you want the flight vocabulary, read the question list and move on."
   },
   {
    "rank": 75,
    "badge": 76,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Filled picnic baskets to take away or delivered, compose your own menu, a launch offer. This is the breakfast delivery from rank 15 with a different meal — 86% shared components, and the delivery-area, ordering and pricing questions are word-for-word transferable. Coverage does not measurably move at rank 75. Low-yield: skip it."
   },
   {
    "rank": 76,
    "badge": 55,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Celebrate your birthday at the zoo: animal discovery, team games, a snack, gifts, group rates, all ages. Rank 51's Ludiversaire is the same children's-party call with more structure, and the two share 88% of their components; rank 20's zoo stay already gave you the animal vocabulary. A fraction of a point at rank 76. Low-yield and safe to skip."
   },
   {
    "rank": 77,
    "badge": 78,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Snowboard courses at the same school as rank 11 — literally the same advertisement with one word changed, courses for teenagers and adults, medium and long stays, numerous accommodation options. The two share 88% of their components and rank 72 covered the remainder. It is worth well under a point of coverage at rank 77. Low-yield: skip it outright."
   },
   {
    "rank": 78,
    "badge": 70,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Oral Section A ≈ 7.4",
    "why": "Welcome by the team, fitting of the cord and the safety harness, a fifty-metre jump, attractive prices. Its component set is identical to the dog sled at rank 37, and it is the twelfth Adventure ad in an order that made that family automatic by rank 22. It closes the coverage figure at 100% and adds nothing you have not said out loud several times — the lowest-yield item in the set. Rank 78 because by now you have already built every part of this answer: it costs twenty minutes, buys you well under a point, and should be skipped before you skip sleep."
   }
  ]
 },
 "B": {
  "set": "EO_B",
  "blurb": "Ranked by how much of the remaining 81 ads each one teaches you to argue. Drill top-down. “Stop here” is an oral Section B score, not your reported NCLC — this section is ⅔ of the oral composite, and no ordering of prompts can move the language criteria that cap the composite.",
  "caps": [
   "**Tu, not vous.** Systematic *vouvoiement* caps B5 at 4 and pulls B4 down — persuading a friend in *vous* reads as situationally wrong.",
   "**Never drop the goal.** Accept the refusal or drift into chat and B4 caps at 5, B3 at 6. The instruction is *convaincre*.",
   "**Don't read the ad.** Lifting its wording pins B1 at 5; reformulating costs nothing and the criterion is 12%."
  ],
  "start_band": "Oral Section B ≈ 4.6",
  "milestones": [
   {
    "after_rank": 3,
    "headline": "Three items in, and 39% of the pool is already assemblable",
    "band": "Oral Section B ≈ 5.0",
    "body": "Three ads have installed 14 of the 17 grammar moves, 9 of the 18 objection families and 12 of the 17 argument families, which puts 39% of the set within reach. That covers the machinery behind B1 12%, B2 13% and B5 10% and the opening of B3 20% and B4 18%. On the rubric's own numbers this is the half-level of language that takes you from 365 to about 392 — over the NCLC 5 line at 387 — but only if the conditionnel and the connectors are in your mouth rather than on your screen. B3 and B4 are still sitting at 5: you have the frames, not yet the developed arguments."
   },
   {
    "after_rank": 7,
    "headline": "All 17 grammar moves are now built — this is the entry ticket, not the destination",
    "band": "Oral Section B ≈ 5.5",
    "body": "Seven items put cum_lang at 100% and coverage at 67%: every argument family, all six closing moves and the conditionnel, the subjunctive, si + imparfait, the concession–refutation frame and the past-tense anecdote have each been produced at least once. Installed is not reliable, but if these hold under pressure they lift LEX, SYN and PHON towards 5.5, and §11 is explicit that all three must reach 5.5 before NCLC 7 is reachable at all, because the ceiling is min(LEX, SYN, PHON) + 1.5. Language at 5.5 with the task unchanged is 403, still NCLC 5.5. What is missing is the task half: 2 objection families and 5 lexical fields are still unbuilt."
   },
   {
    "after_rank": 13,
    "headline": "Whole inventory installed — 18 objection families, 18 lexical fields, nothing left",
    "band": "Oral Section B ≈ 6.6",
    "body": "Thirteen items reach 77% coverage and complete every component in the model: 17 argument families feeding B3 at 20%, all 18 objection families feeding B4 at 18%, six closing moves, and all 18 lexical fields feeding B6 at 9%. This is the coverage that supports task criteria around 7 across both sections — which the rubric computes at 441, NCLC 6.6, with language at 5.5. It is not NCLC 7 and no amount of further ad-drilling makes it so: 456 is the line, and the 15 points between 441 and it come from language at 6.5 with task at 7.5, which the rubric computes at 464. From here the work is repetition for reliability, not new content."
   },
   {
    "after_rank": 22,
    "headline": "Second pass done on every heavy component — this is where the drag rule stops biting",
    "band": "Oral Section B ≈ 6.7",
    "body": "At 85% coverage every criterion has been rehearsed at least twice, which matters because the drag rule costs 0.5 to 1.0 levels for any criterion sitting two or more levels below your composite, and a single untouched criterion is worth more damage than three extra ads are worth in gain. B3 at 20% and B4 at 18% have both had every family run twice, and B1 at 12% has had eleven different documents reformulated rather than read. The remaining 59 items add 15 points of coverage between them. If your recordings still show fillers and restarts at the density of the drill transcripts, stop drilling ads and work on delivery — B8 is 9% and it sits inside the ceiling."
   },
   {
    "after_rank": 40,
    "headline": "92% covered; from here every item is a variation on something you own",
    "band": "Oral Section B ≈ 6.8",
    "body": "Forty items give 92% coverage and every one of the remaining 41 reuses an answer you have already written. The gains from here are 1 point at a time and they are reps, not range: what they buy is speed of assembly under the ten-minute clock, which shows up as B2 13% and B8 9% rather than as B3 or B4. Judge the value by the recording, not by the count — if you can produce four developed arguments and four targeted refusals on an unseen ad without preparation, the pool has done its work. If you cannot, the fix is at ranks 1 to 13, not at rank 41."
   },
   {
    "after_rank": 66,
    "headline": "The last 15 are near-duplicates — stop here unless you have time you cannot spend better",
    "band": "Oral Section B ≈ 6.8",
    "body": "At 97% coverage the remaining 15 items move the number by three points in total, and 12 of them move it by nothing at all. Every objection family has been answered between four and twelve times, every lexical field has been used, and the marginal return on ad number 67 is smaller than the return on one more recorded run of rank 1 with the transcript in front of you. The honest advice at this point is the rubric's own priority list: get the conditionnel reliable, count the silence in your recordings, and answer the objection you were given rather than the one you prepared. Those three are worth more than the rest of this list combined."
   }
  ],
  "df_order": [30,32,27,29,31,60,3,11,50,9,80,28,10,7,1,42,79,61,67,40,33,71,66,38,68,70,13,58,19,49,14,39,48,63,36,46,24,45,59,57,51,37,25,64,15,23,4,35,41,18,55,22,54,2,52,69,56,43,44,72,34,5,62,53,26,47,17,78,6,21,65,73,74,76,20,16,81,12,8,77,75],
  "order": [
   {
    "rank": 1,
    "badge": 30,
    "cum_pool": 16,
    "cum_lang": 65,
    "floor": "Oral Section B ≈ 4.6",
    "why": "This is the ad that forces more machinery than any other in the set, which is why it opens the list. Its figures argue for you — 135 km, two days, teams of five, free registration — so a claim stops being « c'est bien » and becomes a reason with evidence attached, which is the entire 5→7 move on B3 at 20%. The refusal it provokes is the hardest one in the pool, « 135 km, je ne tiendrai jamais », and you beat it with « et si on faisait juste la première journée ensemble ? » instead of restating the cause: that swap alone is B4, 18%. Eleven other ads sit close enough that this answer carries over nearly intact."
   },
   {
    "rank": 2,
    "badge": 32,
    "cum_pool": 25,
    "cum_lang": 71,
    "floor": "Oral Section B ≈ 4.6",
    "why": "Every other ad in the pool offers your friend something pleasant; this one tells him his eating is a problem, so the resistance comes back flat — « je ne veux pas me priver, c'est pas mon truc ». A firm « non » that ends the line of attack is exactly what pins B4 at 5, and the counter here is to reframe rather than repeat: « justement, ce n'est pas un régime, tu manges ce que tu aimes, mais autrement ». That reframe is the NCLC 8 descriptor on a criterion worth 18%, and you build it once, here, at rank 2 of 81."
   },
   {
    "rank": 3,
    "badge": 27,
    "cum_pool": 39,
    "cum_lang": 82,
    "floor": "Oral Section B ≈ 4.6",
    "why": "Rank 3 installs the two grammar moves the first two ads never needed: the subjunctive after a real trigger — « il faudrait que tu voies l'ambiance » — and mise en relief, « ce qui est génial, c'est que tu choisis tes sujets ». Both sit inside min(LEX, SYN, PHON), and SYN is your lowest criterion at 3.5, so this is ceiling work, not decoration. It also gives you the aptitude compliment, « toi, avec ta voix et tes idées, tu serais parfait », which is a different argument from « tu aimes ça » and shows up in 14 more ads. Thirteen other items are close enough to reuse the whole answer."
   },
   {
    "rank": 4,
    "badge": 29,
    "cum_pool": 49,
    "cum_lang": 88,
    "floor": "Oral Section B ≈ 5.0",
    "why": "Four objections you have not met yet arrive together here: the twenty-meal card you cannot commit to, the allergy in the family, « je préfère cuisiner moi-même », and the anniversary offer that expires. Answering all four in one ten-minute run is what B4 at 18% actually measures, and the deadline gives you a natural close — « la carte anniversaire, c'est maintenant ou plein tarif ». The ad is also 36 words long, so you have to invent the detail it withholds; 15 other thin ads in this set demand the same thing. Comparatives get built here too: « c'est franchement moins cher qu'un resto pour quatre »."
   },
   {
    "rank": 5,
    "badge": 31,
    "cum_pool": 58,
    "cum_lang": 94,
    "floor": "Oral Section B ≈ 5.0",
    "why": "This is where « si on postulait tous les deux, on partirait peut-être ensemble » enters your mouth — si + imparfait → conditionnel, the hypothetical the rubric names at NCLC 8 and which your profile currently has at zero. The offer is also too good to be true, so the objection is « c'est louche, personne ne paye des gens à voyager », and next to it « les nouveautés culinaires, ça me dégoûte » — a repulsion refusal that 6 more ads reuse. Two whole vocabulary fields land at the same time, le séjour and le petit boulot, which between them cover 28 of the 81 ads."
   },
   {
    "rank": 6,
    "badge": 60,
    "cum_pool": 62,
    "cum_lang": 94,
    "floor": "Oral Section B ≈ 5.0",
    "why": "Your friend has just moved to town, so the objection writes itself — « je ne connais personne là-bas » — and the answer is to turn it round: that is precisely the reason to go. Rank 6 also gives you the close that uses his own words back at him, « tu me répètes depuis deux semaines que tu ne connais personne ici », which is B4 and B5 at once, 28% between them. Volunteering is the largest family in the set with 10 items, and this is the entry point to it, along with the vocabulary of a fête and of supervising children."
   },
   {
    "rank": 7,
    "badge": 3,
    "cum_pool": 67,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 5.0",
    "why": "The past-tense anecdote is the last grammar move on the list, and it lands here: « l'année dernière j'ai fait une descente comme ça, il pleuvait le matin et on a fini par se baigner ». Passé composé and imparfait alternating inside one example is what converts a reason into development — the difference between B3 at 5 and B3 at 7, and B3 is 20%. This also installs « on le ferait ensemble », the shared-experience argument that 10 more ads use, and it completes 17 of 17 grammar moves after seven items."
   },
   {
    "rank": 8,
    "badge": 11,
    "cum_pool": 69,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 5.5",
    "why": "The house-sitting ad produces a refusal nothing before it could: « en vacances je veux me reposer, pas arroser le jardin de quelqu'un d'autre ». Next to it sits « et si je casse quelque chose ? », which you answer with guarantees rather than reassurance — the NCLC 7 line on B4, 18%. Only 3 ads carry the working-holiday objection and 7 carry the what-if-it-goes-wrong one, so this is the cheapest place to build both. The animal vocabulary you pick up here serves 7 more items."
   },
   {
    "rank": 9,
    "badge": 37,
    "cum_pool": 72,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 5.5",
    "why": "One thing is new at rank 9 and it is lexical: d'occasion, troquer, entre particuliers, une bonne affaire, mettre en location. Seven ads in the pool are built on that field and you cannot argue about any of them without it — B6 is 9% and it sits inside the min() that sets your whole ceiling. Coverage moves from 69 to 72 here, which is the point where the front of the list starts to flatten."
   },
   {
    "rank": 10,
    "badge": 48,
    "cum_pool": 73,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 5.5",
    "why": "Read the prompt again: your friend likes sport, and the ad recruits people to teach DIY, gardening and cooking. Building the bridge out loud — « je sais, ce n'est pas du sport, mais tu entraînes déjà ton équipe le samedi, c'est exactement ça » — is what B1 rewards at 12%, because it selects for this listener instead of reciting the ad. Four ads in the set are deliberately mismatched like this, and the exam pairs prompt and document the same way. Ten more items reuse the answer."
   },
   {
    "rank": 11,
    "badge": 47,
    "cum_pool": 75,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 5.5",
    "why": "City vocabulary arrives here and nowhere earlier: le quartier, se déplacer, à deux pas, en transport en commun, les embouteillages. Five ads depend on it, and the ideological refusal that comes with this one — « militer, ça ne sert à rien » — is the flat « non » in its most stubborn form, worth practising on a criterion carrying 18%. Coverage steps to 75 with an item you can drill in twenty minutes."
   },
   {
    "rank": 12,
    "badge": 28,
    "cum_pool": 76,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 5.5",
    "why": "Gardening and tools are their own vocabulary — semer, tailler, l'outillage, réparer soi-même — and 5 ads need it. The objection is the one that never gets answered properly: « je n'ai pas la main verte », which is competence, not interest, and the response has to be evidence rather than encouragement. Take the ad's own promise of chemical-free growing and turn it into a consequence: « dans six mois tu manges tes propres tomates »."
   },
   {
    "rank": 13,
    "badge": 57,
    "cum_pool": 77,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 5.5",
    "why": "This closes the inventory. Concours, jury, recueil, publication, lire à voix haute — the last vocabulary field in the set, shared by 4 ads, and after this item every argument family, all 18 objection families, all six closing moves and all 17 grammar moves have been built at least once. From rank 14 onward you are no longer installing anything; you are making it reliable, which is a different kind of work and, per the rubric, the harder half."
   },
   {
    "rank": 14,
    "badge": 62,
    "cum_pool": 78,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.6",
    "why": "The bridge move gets its second run and the gap is wider this time: your friend cooks, the ad wants museum stewards. Say it out loud — « je sais que les musées c'est pas ton truc, mais tu cherches des idées toute l'année, et là tu as un an d'entrée libre » — and B1 leaves the band where nothing is selected for the listener, 12% of the section. Of all 81 items this one has the widest reach: 17 other ads are close enough to take the answer whole."
   },
   {
    "rank": 15,
    "badge": 1,
    "cum_pool": 79,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.6",
    "why": "The cleanest volunteering archetype in the set, and volunteering is the biggest family with 10 items, 6 of them still ahead of you. Nothing is new, but two things get their second exposure in a combination you have not had: altruism as an argument and « nettoyer les enclos, très peu pour moi » as a refusal. Keep the answer short and reusable — it is the template you will paste onto ranks 31, 34, 49, 61 and 64."
   },
   {
    "rank": 16,
    "badge": 42,
    "cum_pool": 80,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.6",
    "why": "The practice site opens with this one, and by the coverage model it belongs at 16 — every part of it is already built. What it still earns is the most suspicious objection in the pool, « c'est une pyramide, ton truc », plus the awkwardness of selling to your own friends, and 16 other ads sit close enough to reuse the answer. Rehearse the concession that survives it: « c'est vrai que ça ressemble à ça, sauf que tu n'achètes aucun stock ». Coverage 80."
   },
   {
    "rank": 17,
    "badge": 77,
    "cum_pool": 82,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.6",
    "why": "Four course-and-platform ads share one refusal — « je vais tenir deux semaines et abandonner » — and this is the item that puts it in front of you again with a sport skin on it. Your counter is scheduling, not willpower: « on se cale trois séances par semaine et je te réveille ». Coverage moves 80 → 82, the largest single step left in the list."
   },
   {
    "rank": 18,
    "badge": 39,
    "cum_pool": 82,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.6",
    "why": "Skiing brings three objections in one ten-minute conversation — never done it, afraid of falling, the gear costs a fortune — and answering all three without repeating yourself is exactly what separates B4 at 5 from B4 at 7. The reduced offer is right there in the ad: beginner courses, so « on prend deux jours de cours et on verra ». Five more adventure ads reuse this shape."
   },
   {
    "rank": 19,
    "badge": 56,
    "cum_pool": 83,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.6",
    "why": "A wardrobe clear-out earns money, empties the flat and helps a charity, which lets you build three arguments on three different dimensions instead of three versions of one — the explicit NCLC 7 requirement on B3, 20%. The sign-up-fast line gives you your deadline close for the second time. Four resale ads still ahead of you take this answer directly."
   },
   {
    "rank": 20,
    "badge": 69,
    "cum_pool": 83,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.6",
    "why": "Your friend already knows the city, so the aptitude argument is the whole pitch: « toi tu connais tous les raccourcis, tu serais parfait pour ça ». That is the compliment-as-argument you built at rank 3, and here it is the load-bearing move rather than a decoration. Eight items ahead of you reuse it; coverage stays at 83, so treat this as a twenty-minute run, not an hour."
   },
   {
    "rank": 21,
    "badge": 64,
    "cum_pool": 84,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.6",
    "why": "A shy friend and a theatre class about shyness is the purest reframe in the pool: the objection and the offer are the same thing. « C'est justement pour ça que c'est fait — les groupes sont petits et la première séance est gratuite » is the NCLC 8 line on B4, 18%, and this is your second chance to build it after rank 2. Seven more items reuse the answer, and the free first session hands you the trial close for nothing."
   },
   {
    "rank": 22,
    "badge": 16,
    "cum_pool": 85,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.6",
    "why": "The heritage stay is the practice site's number 2 and it lands at 22 here because the objection it owns — « en vacances je veux me reposer » — was already installed at rank 8. What it still adds is the combination: a dormitory, physical work, a site far from home, all defended in one conversation. Three items reuse the answer, coverage moves to 85, and it takes half an hour."
   },
   {
    "rank": 23,
    "badge": 6,
    "cum_pool": 85,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.7",
    "why": "Skydiving is the purest fear objection in the set, but the fear family was installed at rank 1, so the marginal value is intensity rather than novelty. Drill it for the response quality: concede the fear fully, then produce the evidence — « les moniteurs sautent en tandem avec toi, ils ont des milliers de sauts » — because B4 at 7 wants reassurance with proof, not « t'inquiète ». Twenty minutes, coverage unchanged at 85."
   },
   {
    "rank": 24,
    "badge": 38,
    "cum_pool": 86,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.7",
    "why": "A writing contest with a jury, prizes and a tour gives you an argument ladder your friend can climb: it starts as a hobby and ends as a stage. The refusal is stage fright plus « je ne gagnerai jamais », and the answer separates the two — you do not have to win to be read. 9 items ahead of you reuse this, and the coverage number moves one point, to 86."
   },
   {
    "rank": 25,
    "badge": 68,
    "cum_pool": 86,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.7",
    "why": "The prompt on this one is broken — it announces a theatre workshop and shows you a job chaperoning teenagers abroad. Talk about what is actually on the page, bridge it to the friend in one sentence, and you have practised the exact recovery you would need if the examiner's document surprised you. 8 items reuse it and the responsibility objection, « je ne veux pas être responsable d'ados », gets its second run."
   },
   {
    "rank": 26,
    "badge": 43,
    "cum_pool": 87,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.7",
    "why": "The cruise hands you a −50% group rate, which is the strongest opportunity-cost argument in the pool and the natural home of « si on ne réserve pas cette semaine, c'est plein tarif ». Set that against a refusal you should practise, « les croisières c'est pas mon truc, c'est de l'usine flottante », because a taste refusal on a luxury product is harder than it looks. Eight items ahead reuse this; coverage 87."
   },
   {
    "rank": 27,
    "badge": 25,
    "cum_pool": 87,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.7",
    "why": "Crafts for everyone is the mid-sized workshop archetype and 3 of its 7 siblings are still ahead of you. It repeats nothing you cannot already say, but the beginner objection is at its most literal here — « je suis nul de mes mains » — and the ad answers it for you with advice for beginners and a year-end exhibition. Consequence framing costs nothing to add: « dans un an tu exposes »."
   },
   {
    "rank": 28,
    "badge": 58,
    "cum_pool": 87,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.7",
    "why": "Ten months with a puppy you then hand over is the most emotionally loaded commitment in the pool, and « je vais m'attacher et ça va me démolir » is not answered by logistics. Concede it, then convert: the attachment is the point, and it is what makes the dog work later. Coverage stays at 87 — take this one for the quality of the refutation, not for its reach, and give it thirty minutes."
   },
   {
    "rank": 29,
    "badge": 44,
    "cum_pool": 88,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.7",
    "why": "Renting clothes for a party puts three objections in a row that all sound like one: it is too expensive, someone else has worn them, and what if they never arrive. Keeping them separate and answering each on its own terms is what B4 measures at 18%; collapsing them into one reassurance is what NCLC 5 sounds like. The ad's refund clause is your evidence, and 8 items ahead of you reuse the answer."
   },
   {
    "rank": 30,
    "badge": 49,
    "cum_pool": 88,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.7",
    "why": "Sleeping in a cabin surrounded by wolves is a 26-word ad, so most of the answer has to come out of your own head — that is the thin-ad expansion skill, and 16 items in this set demand it. Fear and comfort both arrive at once, and the family angle gives you an argument the adventure ads do not have. Coverage is unmoved at 88; budget twenty-five minutes."
   },
   {
    "rank": 31,
    "badge": 21,
    "cum_pool": 89,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.7",
    "why": "Leading reading and computer workshops for older people gives you a competence objection with a twist — « je ne suis pas prof, je n'ai aucune légitimité » — and the answer is scope, not confidence: you play chess, you do not teach. 4 volunteering siblings are still ahead of you and they all reuse this. One point of coverage, half an hour."
   },
   {
    "rank": 32,
    "badge": 61,
    "cum_pool": 89,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.7",
    "why": "Your friend lives on his screens and the ad asks him to give them up, so the refusal is practical rather than emotional: « j'ai besoin de mon téléphone pour le travail ». That is the third genuinely reluctant listener in the set after ranks 2 and 21, and the negotiated close is the one that works — « deux jours, pas plus, et tu gardes ton téléphone dans le coffre ». Five items ahead of you take the same shape."
   },
   {
    "rank": 33,
    "badge": 9,
    "cum_pool": 89,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.7",
    "why": "Booking a chef for your friend's dinner party runs on convenience, but the objection is money and it is legitimate: a chef at home costs more than cooking. Concede the price and move the ground — « oui c'est plus cher, mais tu passes la soirée avec tes invités au lieu d'être en cuisine » — which is B3's different-dimensions requirement doing real work at 20%. Only one sibling is left in this family; coverage 89."
   },
   {
    "rank": 34,
    "badge": 63,
    "cum_pool": 90,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.7",
    "why": "Reading aloud in a library is the third of the shy-friend items and by now you should be able to build the whole answer in the ninety seconds before you speak. What it earns is the pairing of two arguments that pull in opposite directions: it is useful to others, and it is good for you. Seven items ahead of you reuse this; the coverage figure moves one point to 90."
   },
   {
    "rank": 35,
    "badge": 36,
    "cum_pool": 90,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.7",
    "why": "An eco-bubble in the countryside is the getaway argument at its thinnest — 32 words, most of it adjectives — so the work is all yours. Turn « ressourcez-vous » into something concrete a friend would recognise: no phone signal, a real bed, and back on Sunday night. Only one item ahead of you is close to it, and coverage does not move, so this is a thirty-minute exercise in expansion rather than a coverage gain."
   },
   {
    "rank": 36,
    "badge": 46,
    "cum_pool": 90,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.7",
    "why": "Sled dogs give you cold, price, fear of the animals and the beginner problem in a single 35-word ad. The value here is speed of assembly, not novelty: you should be able to produce four developed arguments and four targeted answers without preparation, because that is the exam's actual demand under a ten-minute clock. Four items ahead still reuse this; coverage holds at 90."
   },
   {
    "rank": 37,
    "badge": 24,
    "cum_pool": 91,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.7",
    "why": "A thrift shop for a friend who loves clothes is the disgust objection in its most everyday form — « des vêtements déjà portés, non merci » — and it is worth more than it looks because the reflex answer, « mais c'est lavé », is bare reassurance. Give it evidence and a value frame instead. Coverage steps to 91; three resale siblings remain."
   },
   {
    "rank": 38,
    "badge": 45,
    "cum_pool": 91,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.7",
    "why": "Seven rehearsals is a commitment objection hiding inside a fun proposal, and your friend will find it before you do. The reduced offer is the natural counter — « viens à la première, si ça te plaît pas tu laisses tomber » — and it is the move the rubric names verbatim at NCLC 7 on B4, 18%. Two workshop siblings are left; coverage is flat at 91."
   },
   {
    "rank": 39,
    "badge": 59,
    "cum_pool": 91,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.7",
    "why": "Leading activities at a holiday centre is a paid job with responsibility attached, so the objection is the pay-versus-what-it-costs-me calculation. Answer it with the training and the CV line rather than the salary, because that is an argument on a second dimension and B3 pays 20% for exactly that. Six items ahead reuse the answer; twenty-five minutes."
   },
   {
    "rank": 40,
    "badge": 10,
    "cum_pool": 92,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.7",
    "why": "A charity dance evening is the last of the three charity items and the reach is better than the pool figure suggests — 12 ads sit close to it. The distance objection is unusually concrete here (one venue, one night a month), and the pressure close fits it perfectly: « je nous inscris, tu me diras non demain ». Coverage 92."
   },
   {
    "rank": 41,
    "badge": 51,
    "cum_pool": 92,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Learning the dances of the world and teaching your own is an argument about identity, which is a different lever from novelty or usefulness. 5 items ahead of you reuse it, and the shy-friend objection returns in a form where the answer is participation rather than performance. One point of coverage for half an hour of work."
   },
   {
    "rank": 42,
    "badge": 50,
    "cum_pool": 92,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Swapping services with strangers raises a trust objection with a twist — nobody is taking your money, they are coming to your flat. Separate the two worries and answer them separately; merging them is what NCLC 5 does. Seven items ahead of you reuse the answer, and coverage stays at 92, so keep this one short."
   },
   {
    "rank": 43,
    "badge": 13,
    "cum_pool": 93,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "The community garage is where « et si je bousille les freins ? » lives, and the correct answer is not confidence but supervision: professionals are on site, that is the whole point of the place. This is the second of only two DIY items, and 2 items still ahead reuse it. Thirty minutes, one point of coverage."
   },
   {
    "rank": 44,
    "badge": 33,
    "cum_pool": 93,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "An open-air festival with a four-day pass and day tickets hands you the reduced offer in its cleanest form: « si quatre jours c'est trop, on prend juste le samedi ». Set it against crowds and camping and you have a full B4 run in ten minutes on a criterion worth 18%. Five items ahead reuse this; coverage 93."
   },
   {
    "rank": 45,
    "badge": 15,
    "cum_pool": 94,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Buying medicine online is the one item where you should not oversell, and that is why it is worth drilling: « je préfère mon pharmacien » is a reasonable position and the honest answer concedes ground before it argues. Diplomatic pressure without pushiness is the NCLC 8 line on B4 and this is the ad that tests it. Six items ahead reuse the answer; coverage steps to 94."
   },
   {
    "rank": 46,
    "badge": 23,
    "cum_pool": 94,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "A camper van is the third vehicle-based getaway and it repeats nothing structural, but the objection set is specific: driving something that size, sleeping in it, and what happens if you scratch it. Answer the third one with the rental guarantee rather than optimism. Three items ahead reuse the answer; coverage holds at 94."
   },
   {
    "rank": 47,
    "badge": 4,
    "cum_pool": 94,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Venteco is the practice site's dead last item and it lands at 47 here because the marketplace vocabulary it needs was installed at rank 9. It is 29 words long, so nearly everything you say has to be invented — good expansion practice, and 4 resale items still take the answer. Twenty minutes, no coverage gain."
   },
   {
    "rank": 48,
    "badge": 35,
    "cum_pool": 94,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Photographers looking for hand models is odd enough that the suspicion objection is genuinely earned, and « mes mains sont moches » is a self-image refusal you have not answered in this exact form. Thirteen items sit close to this one, which is high for rank 48. Coverage does not move, so cap it at half an hour."
   },
   {
    "rank": 49,
    "badge": 41,
    "cum_pool": 94,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Picking up litter on mountain trails at seven in the morning combines an early start, physical effort and mild disgust, all of which your friend will raise. The picnic at noon is your concession-and-convert: « c'est vrai que 7 h c'est tôt, mais tu finis à midi avec un pique-nique et tout l'après-midi libre ». Two volunteering siblings are left; coverage 94."
   },
   {
    "rank": 50,
    "badge": 18,
    "cum_pool": 95,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Guided bike tours for a friend who just moved to town is the city-tour archetype, and the city vocabulary you installed at rank 11 does most of the work. Coverage ticks to 95. Keep it to twenty minutes and spend the time you save on rereading your rank 1 answer aloud."
   },
   {
    "rank": 51,
    "badge": 55,
    "cum_pool": 95,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "A horse-drawn caravan through French villages is a strong story-value argument with a weak practical case — it is slow, basic and you have never handled a horse. That mismatch is useful: it forces you to concede more than you would like and still close. Three items ahead reuse it; coverage is flat at 95."
   },
   {
    "rank": 52,
    "badge": 22,
    "cum_pool": 95,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Small gardening jobs at private homes is the physical-effort objection at its most literal, and « c'est mal payé pour du travail dur » right behind it. 4 items ahead still reuse this answer. Coverage does not move, so twenty minutes is the right budget."
   },
   {
    "rank": 53,
    "badge": 54,
    "cum_pool": 95,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Setting your own rates for errands is the flexibility argument in its purest form, and the objection follows automatically: if you set the rates, is there any real money in it? Give a number rather than a reassurance — that is B3 support at 20% and it costs one sentence. Five items ahead reuse this; coverage 95."
   },
   {
    "rank": 54,
    "badge": 2,
    "cum_pool": 95,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Paid surveys is one of two nearly identical survey ads and this is the one to drill, since 15 items sit close to it. The privacy line in the ad is your evidence against « ils vont revendre mes données », which is the trust objection you have already beaten twice. No coverage gain, twenty minutes."
   },
   {
    "rank": 55,
    "badge": 52,
    "cum_pool": 95,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "An equestrian weekend puts fear, price, competence and an animal allergy in one 40-word ad. Nothing is new, but the density is good practice for the ten-minute clock, and three items ahead still take the answer. Coverage stays at 95."
   },
   {
    "rank": 56,
    "badge": 40,
    "cum_pool": 95,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Becoming a photo reporter for the city magazine is a competition rather than a job, which is exactly the objection your friend will raise — « je gagne quoi, en fait ? ». The free transit pass and the training are your concrete answers, and 13 items sit close to this one. Coverage does not move, so half an hour is the ceiling."
   },
   {
    "rank": 57,
    "badge": 67,
    "cum_pool": 96,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "A neighbourhood garage sale is the last of seven resale items and every part of the answer is built. Drill it only if you want the reps: earning money, clearing the flat, and the effort objection that comes with carrying boxes. Coverage moves to 96, which is the last meaningful step in the tail."
   },
   {
    "rank": 58,
    "badge": 70,
    "cum_pool": 96,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Renting a boat without a licence is the third vehicle-rental getaway in the pool and its objections — can I steer it, is it safe, is it expensive — are ones you have answered five times by now. 2 items ahead reuse it. This is a twenty-minute consolidation run, not a new build."
   },
   {
    "rank": 59,
    "badge": 19,
    "cum_pool": 96,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "The insect restaurant is the most distinctive ad in the set and it still sits at 59, because the disgust objection was installed at rank 5 and the ecology and food vocabulary at ranks 1 and 4. What it is worth is the extreme case: if you can hold a persuasive line on eating crickets, the softer refusals stop frightening you. Half an hour, and coverage does not move."
   },
   {
    "rank": 60,
    "badge": 72,
    "cum_pool": 96,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Sitting on the jury for metro musicians is the fifth civic-role item and the mismatch with a friend who travels often gives the bridge move its fourth outing. Only 1 item ahead of you reuses it. Everything else here you have said before in a different costume, so keep it to twenty-five minutes."
   },
   {
    "rank": 61,
    "badge": 34,
    "cum_pool": 96,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Downtown volunteering with a few hours a week is the ninth of ten volunteering items and the flattest of them. Its one merit is the objection « je ne vois pas ce que ça change », which is efficacy rather than time or money, and it deserves a real answer. Coverage holds at 96; twenty minutes is enough."
   },
   {
    "rank": 62,
    "badge": 5,
    "cum_pool": 96,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "The theatre workshop is the archetype of a seven-item family whose siblings you have all already drilled, which is why it arrives at 62 rather than in the first ten. Nothing here is new. Run it once for fluency and stop — the coverage number does not move."
   },
   {
    "rank": 63,
    "badge": 7,
    "cum_pool": 97,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Becoming a film critic for a year gives you a commitment objection and free tickets as the payoff, and by rank 63 you can build both without preparation. It is the last of the five civic-role items and it takes the answer you wrote at rank 3 almost unchanged. One point of coverage, half an hour at most."
   },
   {
    "rank": 64,
    "badge": 53,
    "cum_pool": 97,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Volunteering at a toy library is the last of the 10 volunteering items and there is nothing in it you have not already said four times. Its flexible schedule answers the time objection for you. Twenty minutes if you want the reps, and no loss if you skip it."
   },
   {
    "rank": 65,
    "badge": 26,
    "cum_pool": 97,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "A tailor-made sporty weekend is the vaguest ad in the adventure family — the whole point is that you choose — so the work is invention rather than persuasion. Coverage does not move and neither does anything else, and with 1 sibling left in the family this is the definition of optional."
   },
   {
    "rank": 66,
    "badge": 80,
    "cum_pool": 97,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "The tuk-tuk tour of Brussels is a near-copy of the bike tour you drilled at rank 50, with the same city vocabulary and the same objections. Coverage is flat at 97 and no item ahead of you depends on it. Fifteen minutes, or skip it and reread your top five answers instead."
   },
   {
    "rank": 67,
    "badge": 17,
    "cum_pool": 97,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "The neighbourhood 5-to-7 is the second of two social-event items and its siblings are done. The shy-friend objection appears for the sixth time here, and if you cannot answer it fluently by now, go back to rank 21 rather than drilling this. No coverage gain."
   },
   {
    "rank": 68,
    "badge": 78,
    "cum_pool": 98,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Accompanying children on your own trips carries a responsibility objection you have already answered at ranks 25 and 28, in a family whose other two items are behind you. One item ahead reuses it. This is consolidation only — twenty minutes, and it is the first item on the list that costs more than it returns."
   },
   {
    "rank": 69,
    "badge": 66,
    "cum_pool": 98,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Free fall is a near-identical twin of the skydiving ad at rank 23, down to the tandem option and the professional team. There is nothing here you have not built. Fifteen minutes for the reps if you have them spare; skip it without a second thought if you do not."
   },
   {
    "rank": 70,
    "badge": 14,
    "cum_pool": 98,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Adopting a cat to fight stress is genuinely distinctive — the fifteen-year commitment, the allergy, the scientific claim to relay — but all three moves were installed by rank 8, so it lands at 70. Coverage does not move. Drill it only if the health-and-wellbeing angle still feels shaky after ranks 2 and 32."
   },
   {
    "rank": 71,
    "badge": 65,
    "cum_pool": 98,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "MonOpinion is the second paid-survey ad and it is functionally the same document as rank 54, with the same trust objection and the same pay question. One item ahead reuses it. Low-yield: fifteen minutes, or skip it."
   },
   {
    "rank": 72,
    "badge": 73,
    "cum_pool": 98,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "A Zumba fundraiser is a copy of the charity dance evening at rank 40 with a different soundtrack. Every argument and every objection is already yours. This is safe to skip — the coverage figure stays at 98 either way."
   },
   {
    "rank": 73,
    "badge": 74,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Hosting travellers for a meal at home duplicates the community-kitchen and local-guide answers you have already written, with a trust objection you beat at ranks 2, 42 and 54. It moves coverage one point, to 99. Fifteen minutes if you want it; it is not worth an hour."
   },
   {
    "rank": 74,
    "badge": 76,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Rank 74 because the DIY space is the same document as the community garage you drilled at rank 43 — tools, a workspace, membership, training. Nothing new, no coverage gain, and one item ahead of you that already has its answer. Low-yield: skip it before you skip sleep."
   },
   {
    "rank": 75,
    "badge": 20,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "The walking club is the only member of its family and nothing else in the set resembles it, yet every component of its answer — health, small groups, a membership fee, the will-I-keep-going objection — is already built. Coverage stays at 99 whether you drill it or not. Safe to skip; if you do run it, cap it at fifteen minutes."
   },
   {
    "rank": 76,
    "badge": 71,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "This is the second heritage-restoration ad and it is a near-copy of the one at rank 22, right down to the tents and the two-week stay. The practice site had it at 3; by the coverage model it earns nothing at all. Low-yield and safe to skip."
   },
   {
    "rank": 77,
    "badge": 81,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "A third online-course ad after ranks 17 and 12, with the same free-trial argument and the same « je vais abandonner » objection. Two items ahead of you already share its answer, and the coverage figure does not move. Low-yield: skip it unless everything above is done."
   },
   {
    "rank": 78,
    "badge": 12,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "The community kitchen duplicates the meal-sharing answer from rank 73 and the workshop-sociability answer from rank 41. It nudges coverage to 100, which is a bookkeeping event rather than a gain. Genuinely low-yield: skip it and use the time to record yourself on rank 1."
   },
   {
    "rank": 79,
    "badge": 8,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Language courses by telephone is the fourth and last course ad, and by now you can produce its four objections — price, time, level, and giving up — from memory. Nothing new, no coverage movement. Safe to skip; there is more value in a second pass over ranks 1 to 7."
   },
   {
    "rank": 80,
    "badge": 79,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "The digital library repeats the online-pharmacy answer from rank 45, including « je préfère un vrai livre », which is the same refusal as « je préfère mon pharmacien ». The single item still ahead of you already has its answer. Low-yield: skip it."
   },
   {
    "rank": 81,
    "badge": 75,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Oral Section B ≈ 6.8",
    "why": "Rank 81 because by now you have built every part of this answer three times over — the personal chef is the third caterer ad after ranks 4 and 33, with the same price objection and the same stranger-in-my-kitchen worry. Drilling it costs twenty minutes and buys you nothing measurable. Skip it before you skip sleep."
   }
  ]
 },
 "EA": {
  "set": "EE_A",
  "blurb": "Ranked by how much of the remaining 72 fait-divers each one teaches you to continue. Drill top-down. “Stop here” is a written Section A score, not your reported NCLC — this section is 35% of the written composite, and no ordering of prompts can move the language criteria that cap the composite.",
  "caps": [
   "**Continue, don't summarise.** Restating the opening instead of continuing it caps the whole section at 5, whatever the French is like.",
   "**Third person. No « je ».** A personal narrative caps A5 at 4, drags A1 down half a level, and costs a further 0.25 off the composite.",
   "**Several paragraphs.** One unbroken block caps A3 at 5. That is two keystrokes."
  ],
  "start_band": "Written Section A ≈ 5.9",
  "milestones": [
   {
    "after_rank": 2,
    "headline": "Two answers in, and the three caps that were costing you a whole band are gone",
    "band": "Written Section A ≈ 6.4",
    "body": "Coverage is only 11%, but the number that matters is which criteria are no longer capped: A3 (12%) is off the single-block cap of 5, A1 (14%) is off the summarising cap that holds NCLC_A at 5 whatever your French is like, and A5 (9%) is off the first-person cap of 4 that also drags A1 and subtracts a further 0.25 from the composite. On the rubric's own arithmetic, clearing those three and taking A2 from 5 to 7 moves NCLC_A from about 5.92 to about 6.67 — roughly +13 points on the /699 scale, when NCLC 6 is 4 points away at 379. What is not fixed is lexique and syntaxe, which sit inside NCLC_EE ≤ min(LEX, SYN) + 1.5 and gate everything above."
   },
   {
    "after_rank": 6,
    "headline": "Every grammatical move Section A tests has now been on your page at least once",
    "band": "Written Section A ≈ 6.7",
    "body": "cum_lang is 100% and cum_pool is 36% after six answers. You have installed the passé composé / imparfait alternation, the plus-que-parfait for anteriority, participe passé agreement, the press passive, attribution, quoted speech, the conditionnel of unverified information, reference chains, relatives and fronted participles, restriction, nominalisation and the grammatical homophones — A6 (11%), A7 (14%) and A8 (10%) are 35% of Section A between them and they sit inside both language ceilings. Installed is not the same as automatic: everything from rank 7 on is repetition, and repetition is what turns a phrase you recognise into one you produce under a 25-minute clock with no spellchecker."
   },
   {
    "after_rank": 9,
    "headline": "Half the pool is answerable and the inventory is complete — from here it is reps",
    "band": "Written Section A ≈ 6.8",
    "body": "Coverage 50%, language 100%, and rank 9 installs the last new component in the whole set; each of the remaining 63 prompts is a recombination of machinery you already hold. That supports a Section A around NCLC 6.5–7 on the content criteria — A1 14%, A2 21%, A3 12%, A4 9%, A5 9% — but only if lexique and syntaxe hold at 6.5 or better, because §12 states that with all three language criteria at 5.0 NCLC 7 is unreachable at any level of content quality. Section B is still untouched and carries 65% of the composite."
   },
   {
    "after_rank": 18,
    "headline": "Two thirds covered — the honest stopping point for a 7-day plan",
    "band": "Written Section A ≈ 7.0",
    "body": "cum_pool 67% after 18 answers. You now write a Section A that answers all six questions, paragraphs itself, attributes its facts and closes on an outcome, which is the NCLC 7 descriptor on A2 (21%) and A3 (12%). On the model in §7 that is worth roughly +0.38 levels on the composite from Section A alone — about 18 points on /699 — so it clears NCLC 6 at 379 with margin and does not on its own reach NCLC 7 at 428. The remaining 54 items add 33 points of coverage between them; Section B and grammatical spelling are now the better use of your hours."
   },
   {
    "after_rank": 30,
    "headline": "Coverage 79% — from here every extra answer buys you about one point",
    "band": "Written Section A ≈ 7.1",
    "body": "Thirty answers, 79% of the pool, and the curve has flattened: ranks 31 to 72 add 21 points of coverage between them, under half a point each. Every family has been written at least twice and every lexical field at least twice, which is the exposure at which A6 (11%) stops being a lookup and starts being a choice. If your accords, your -é / -er endings and your accents are still unreliable, stop drilling prompts here — grammatical spelling is counted ×3 in §6.3, carries 10% of each section directly, and caps the composite at ORTH + 2.0."
   },
   {
    "after_rank": 46,
    "headline": "91% covered; the rest of this list is insurance, not instruction",
    "band": "Written Section A ≈ 7.3",
    "body": "Coverage 91% after 46 answers, with the last new component installed all the way back at rank 9. Everything from here is a third or fourth exposure to scaffolds you can already reproduce — worth something for speed inside the 25-minute allowance, worth nothing for range. Section A's content criteria, 65% of the section, are as covered as this pool can make them; your remaining ceiling is min(LEX, SYN) + 1.5, and no further fait divers will move it. Spend the last days on Section B's three developed arguments and on a five-minute proofreading routine."
   },
   {
    "after_rank": 64,
    "headline": "Everything below this line is a duplicate you have already written",
    "band": "Written Section A ≈ 7.4",
    "body": "Coverage 99%, and the last eight items add 1 point between them. Six of the eight are flagged in the source as exact or near duplicates, and the other two are fully recombinable from answers you wrote in the first fifteen ranks. Skip them without hesitation: Section B carries 65% of the composite against Section A's 35%, and NCLC 7 at 428 needs 53 points that no additional fait divers can supply on its own. Read these eight, plan each in four minutes, and put the hours into argument development and accords."
   }
  ],
  "order": [
   {
    "rank": 1,
    "badge": 1,
    "cum_pool": 5,
    "cum_lang": 44,
    "floor": "Written Section A ≈ 5.9",
    "why": "One answer here breaks all three of Section A's caps at once: three paragraphs instead of a block, so A3 stops being pinned at 5; a first sentence that advances the story instead of restating it, without which NCLC_A cannot exceed 5 whatever your French is like; and neutral third person, since a first-person narrative caps A5 at 4, drags A1 down half a level and costs another 0.25 off the composite. The prompt also hands you the plus-que-parfait for nothing — « le canapé qu'il avait acheté la veille » is already in the opening — and 34 of the remaining 71 prompts need that same tense to mark anteriority. Between A1 at 14%, A3 at 12%, A5 at 9% and A7 at 14%, this single 25-minute answer touches 49% of Section A's marks. Start here tonight."
   },
   {
    "rank": 2,
    "badge": 2,
    "cum_pool": 11,
    "cum_lang": 62,
    "floor": "Written Section A ≈ 5.9",
    "why": "Attribution is the move §12 names explicitly as the 5→7 step in Section A, and this rescue is where you build it: « selon les pompiers », « d'après un témoin », « a indiqué la direction ». The same frame gives you the four press collocations that appear word for word in the rubric's own NCLC 7 anchor — « les secours sont intervenus », « aucun blessé n'est à déplorer », « sain et sauf », « pris en charge » — and 16 later prompts reuse them unchanged. A5 is 9% and A2 is 21%; attribution feeds both in one sentence, which makes it the cheapest two-criterion move in the set."
   },
   {
    "rank": 3,
    "badge": 30,
    "cum_pool": 21,
    "cum_lang": 75,
    "floor": "Written Section A ≈ 6.4",
    "why": "A three-item family at rank 3 looks like a mistake until you see what it forces. This is the only prompt where direct quoted speech lands naturally with full French punctuation — « Il fallait faire quelque chose », a expliqué le brigadier — guillemets, comma inside, inverted incise and all, and it is worth points on A2 (21%) for illustration, A5 (9%) for register and A8 (10%) for punctuation simultaneously. It also builds your reference chains, l'homme → le sans-abri → l'intéressé → ce dernier, which is exactly what separates A4 at 5 from A4 at 7; 17 later prompts need them. Biggest single jump in coverage anywhere in the list: +10 points."
   },
   {
    "rank": 4,
    "badge": 35,
    "cum_pool": 28,
    "cum_lang": 88,
    "floor": "Written Section A ≈ 6.4",
    "why": "Nominalisation enters your writing here — « la coupure », « en raison d'une défaillance », « à la suite de l'intervention » — and it is the A6 marker that moves lexique from *courant* to *varié*, which is the 5→6 line in §11. The unmasked culprit also forces the conditionnel of unverified information, « l'homme aurait agi par vengeance », an NCLC 8 feature on A5 that almost nobody writing at band 6 puts on the page. Sixteen later prompts reuse the nominalisation and 21 reuse the institutional response; A6 (11%) and A7 (14%) both sit inside the min(LEX,SYN)+1.5 ceiling that gates your entire EE score."
   },
   {
    "rank": 5,
    "badge": 5,
    "cum_pool": 31,
    "cum_lang": 94,
    "floor": "Written Section A ≈ 6.4",
    "why": "Watch what the animal does to your sentences: le singe → l'animal → le primate → la bête, and now you can write a fronted participle — « Alertés par les cris, les employés se sont précipités » — and a relative with *dont*. That participial and relative machinery is A7 (14%) and A4 (9%) at the same time, and only two other prompts in all 72 push you into it, which is why a five-item family outranks several bigger ones here. It also opens the animal-and-zoo lexical field that six later prompts sit inside."
   },
   {
    "rank": 6,
    "badge": 40,
    "cum_pool": 36,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 6.4",
    "why": "Restriction and negation land here — « aucune fraude n'a été constatée », « seuls trois étudiants ont été sanctionnés », « sans que personne s'en aperçoive » — and 14 later prompts want them. More importantly this answer completes the Tier L inventory: after six prompts, 100% of the grammatical machinery Section A tests has been on your page at least once. A7 is 14% and A6 is 11%, and from this point you are writing inside the language ceiling rather than under it."
   },
   {
    "rank": 7,
    "badge": 28,
    "cum_pool": 42,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 6.7",
    "why": "The timeline recap — « les faits remontent à 1990 », « tout a commencé lorsque » — is what lets a fait divers reach backwards without losing its reader, and ten later prompts need it. Paired with the plus-que-parfait from rank 1, it is precisely what A3's NCLC 7 descriptor means by chronology that is explicit and controlled, including anteriority. A3 is 12%, and this is the half of it that paragraphing alone does not buy; coverage moves 6 points to 42%."
   },
   {
    "rank": 8,
    "badge": 59,
    "cum_pool": 47,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 6.7",
    "why": "You still cannot name a stranger the way French press does, and this is the prompt that makes you: « un homme d'une trentaine d'années », « l'individu », « le conducteur », « la victime ». Thirteen later prompts have an unnamed protagonist and every one of them needs that repertoire, which feeds A2's *qui* (21%) and A6's precision (11%) together. The vehicle-and-transport field it opens covers 14 more items in the set."
   },
   {
    "rank": 9,
    "badge": 43,
    "cum_pool": 50,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 6.7",
    "why": "The last new component in the whole inventory: the source who will not talk — « contactés, les organisateurs n'ont pas souhaité s'exprimer ». Only five later prompts want it, but it is the small move that makes a text read as reporting rather than storytelling, and A5 is 9%. Half the pool — 50% — is now answerable, and from rank 10 onward nothing installs anything new; everything that follows is repetition, which is what turns a phrase you recognise into one you can produce under a 25-minute clock."
   },
   {
    "rank": 10,
    "badge": 29,
    "cum_pool": 54,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 6.8",
    "why": "First pure-consolidation item, and it earns its slot with the biggest transfer step left in the list: +4 points of coverage in one answer, to 54%. The confinement frame recombines machinery you already own — secours, an institutional statement, the technical failure, the sober aftermath — into a shape three prompts in this set share. Drill it as a timed 25-minute run rather than a vocabulary exercise; the value from here is speed, not range."
   },
   {
    "rank": 11,
    "badge": 54,
    "cum_pool": 57,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 6.8",
    "why": "The largest family in the set has 9 members and you have written exactly one of them. This one recombines the discovery reveal with a police perimeter, an expert valuation and two unnamed minors, which is the precise combination four of its siblings use. +3 points of coverage, to 57%, and it is the last Surprising-discovery prompt that moves the number by more than one."
   },
   {
    "rank": 12,
    "badge": 22,
    "cum_pool": 59,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 6.8",
    "why": "Six prompts here are travel mishaps and the mid-air diversion is their densest instance: an airline statement, a medical reason, a technical constraint, a compensation gesture. Nothing new is installed, but the recombination is worth 2 points and it drills the *pourquoi* that A2 — 21%, the heaviest criterion in Section A — is entirely about. Write it to 110 words, not 85: the floor is 80 and §7.3 gives no reward for sitting on it."
   },
   {
    "rank": 13,
    "badge": 34,
    "cum_pool": 60,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 6.8",
    "why": "A tense rescue inside a zoo, which puts the animal field and the emergency field in one answer and closes on a safety measure. One point of coverage, because rank 2 gave you the secours vocabulary and rank 5 gave you the animal lexis. Take it as a speed drill: 25 minutes including a five-minute reread hunting accords and accents, which is where A8's 10% actually lives."
   },
   {
    "rank": 14,
    "badge": 17,
    "cum_pool": 61,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 6.8",
    "why": "The only human-interest-secret prompt in the pool, so nothing transfers to it and nothing transfers from it. What makes it worth a slot is that the numbers *are* the story — 105 ans, 106 ans, plus de 80 ans de mariage, un record homologué — and practising figures as content rather than decoration is A2's specificity requirement in its purest form at 21%. One point of coverage, high insurance value if it appears on 16 August."
   },
   {
    "rank": 15,
    "badge": 41,
    "cum_pool": 63,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 6.8",
    "why": "Break-in, arrest, unnamed suspect, security footage, a motive quote: five scaffolds you own, arranged the way all four Clever-ruse prompts arrange them. Two points of coverage. What earns it the slot over its siblings is the ending — garde à vue and comparution are a genuine outcome, not a punchline, and A3 (12%) grades whether your text ends or merely stops."
   },
   {
    "rank": 16,
    "badge": 25,
    "cum_pool": 65,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 6.8",
    "why": "The valuation beat gets its second run here — « estimée à 20 000 dollars », « une expertise a établi » — and a second run is what converts a phrase you recognise into one you produce. Insurance and liability give you administrative follow-up without a police station, a variation five prompts in the set need. Two points, to 65%; A2 is 21% and A6 is 11%."
   },
   {
    "rank": 17,
    "badge": 36,
    "cum_pool": 66,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 6.8",
    "why": "The value here is structural rather than lexical: the opening supplies no incident at all, so you invent the *quoi* as well as the *comment*. That is harder than it looks and it is exactly what A2 rewards at 21% — development and specificity, not event count. One point of coverage; treat it as a stress test of the three-paragraph shape under time."
   },
   {
    "rank": 18,
    "badge": 57,
    "cum_pool": 67,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 6.8",
    "why": "Weather is the one lexical field you have touched only once, at rank 2, and this is where it becomes usable: les intempéries, une averse soudaine, la houle, la terrasse évacuée. One point of pool coverage — but a second exposure to a field is worth more than the number says, because A6 (11%) is judged on whether the word is *juste*, not on whether you found one. Two paragraphs and a closing line is enough."
   },
   {
    "rank": 19,
    "badge": 39,
    "cum_pool": 69,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.0",
    "why": "Municipal authority, a refusal to comment, a photograph as evidence: the civic-administrative variant of the fait divers, and two points of coverage say it is not interchangeable with what you have already written. Register discipline is the real exercise — an artist provoking the authorities is the prompt most likely to tempt you into opinion, and any authorial comment drops A5 (9%) onto its NCLC 5 descriptor. Write it flat."
   },
   {
    "rank": 20,
    "badge": 64,
    "cum_pool": 70,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.0",
    "why": "A quoted line from a child inside a police operation is an awkward combination on purpose: the speech has to stay in guillemets while the narration around it stays neutral. That contrast is worth one rehearsal because it is where most candidates' third person slips, and A5 carries 9%. One point of coverage, to 70%."
   },
   {
    "rank": 21,
    "badge": 48,
    "cum_pool": 71,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.0",
    "why": "A near-miss story, so the counterfactual gets its second outing — « sans l'intervention des passants, l'animal n'aurait pas survécu » — and the conditionnel passé is genuine A7 evidence at 14%. Passers-by, a police report and an animal-welfare aftermath are all already yours, recombined. One point."
   },
   {
    "rank": 22,
    "badge": 63,
    "cum_pool": 72,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.0",
    "why": "The only prompt that stacks a road accident, a structural failure and a discovery inside one event, which forces you to hierarchise rather than list. Choosing which of the three gets the most space is the 7→8 move on A2, and A2 is 21% of the section. One point of coverage; worth the 25 minutes for the ordering practice alone."
   },
   {
    "rank": 23,
    "badge": 32,
    "cum_pool": 73,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.0",
    "why": "Two-item family, third outing for the media field: des vues, des partages, les internautes, une chaîne l'a contactée. The reason to write it is the time compression — « quelques jours plus tard » has to carry the whole middle of the story — which is a temporal-marker problem, and A4 is 9%. One point of coverage."
   },
   {
    "rank": 24,
    "badge": 4,
    "cum_pool": 74,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.0",
    "why": "The travel-mishap archetype arrives at rank 24 because its five siblings have already taught you everything it teaches. What it still adds is the unreachable source aimed at a platform rather than a person, plus a consequence that lands on the family and on the town at once — consequence at more than one level is the NCLC 9–10 descriptor on A2. One point, to 74%."
   },
   {
    "rank": 25,
    "badge": 23,
    "cum_pool": 75,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.0",
    "why": "Comic prompts are the trap: the funnier the story, the harder A5's neutrality is to hold, and a single exclamation mark or aside puts you straight back on the NCLC 5 descriptor. Write this one the way a zoo press office would — a statement, a measure taken, a figure — and the register discipline is the whole exercise. One point of coverage; A5 is 9% and it is judged in your first line."
   },
   {
    "rank": 26,
    "badge": 18,
    "cum_pool": 76,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.0",
    "why": "The oddest prompt in the pool and the only one of its kind, which is why it sits at 26 rather than 65: nothing else in the set prepares you for an official ceremony, a minister's words and a sense of injustice, all in press register. It leans on the conditionnel of unverified information and on refusing to editorialise, both A5 at 9%. One point of coverage and pure insurance against a bad draw."
   },
   {
    "rank": 27,
    "badge": 6,
    "cum_pool": 77,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.0",
    "why": "The revenge template that ranks 8 and 21 already built, in its cleanest form: a wrong, a plan, a payback, a public reaction. One point of coverage, because every component is yours by now. The one thing to practise is the ending — a fait divers closes on an outcome or a status, never on a moral, and this prompt is engineered to beg for a moral."
   },
   {
    "rank": 28,
    "badge": 60,
    "cum_pool": 78,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.0",
    "why": "Figures do the entire job here: 210 km/h, un retrait de permis, une amende, une comparution. Quantified detail is the cheapest reliable way to move A2 off 5, and A2 is 21% of Section A. Unnamed driver, gendarmerie and judicial follow-up all reach their third exposure, which is where they stop needing thought. One point."
   },
   {
    "rank": 29,
    "badge": 14,
    "cum_pool": 78,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.0",
    "why": "Zero points of new coverage — the first item in the list that moves the number not at all — because rank 1 built this exact story with a sofa instead of a pavement, down to the valuation and the restitution. Drill it only if you want one more rehearsal of those two beats. If a day runs short, this is the first honest place to cut."
   },
   {
    "rank": 30,
    "badge": 55,
    "cum_pool": 79,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.0",
    "why": "The maritime rescue is the last rescue variant with anything left in it: weather, a search operation, a medical check, and a protagonist with a name, an age and a nationality. One point of coverage, and the third and final outing for the weather field — the exposure at which a lexical field stops being something you have to look up. A6 is 11%."
   },
   {
    "rank": 31,
    "badge": 46,
    "cum_pool": 80,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.1",
    "why": "Eighty per cent of the pool is answerable after this one. Camera, recognition, recapture: the crime family's most mechanical instance, every beat of it something you have now written twice. One point of coverage, and the exercise is speed rather than discovery — aim for 20 minutes plus a 5-minute proofread."
   },
   {
    "rank": 32,
    "badge": 26,
    "cum_pool": 81,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.1",
    "why": "A small story with no authority, no police and no casualty, which is unusual in this set and worth one run: you have to carry 100 words on mechanism and reaction alone, with nothing institutional to lean on. That is A2's *comment* stripped bare, and A2 is 21%. One point of coverage."
   },
   {
    "rank": 33,
    "badge": 62,
    "cum_pool": 82,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.1",
    "why": "Search operation, school, police, parents, a safe outcome — rank 10's shape with a different institution behind it. One point. Write this one in 20 minutes rather than 25: by now the three-paragraph frame should be automatic, and the minutes you save belong to the reread."
   },
   {
    "rank": 34,
    "badge": 50,
    "cum_pool": 82,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.1",
    "why": "No movement on coverage at all. The airport-security-camera frame is rank 31's with a costume inside it, and everything it needs you had installed by rank 8. Keep it as a warm-up if you want something light; skip it without regret when the schedule is tight."
   },
   {
    "rank": 35,
    "badge": 52,
    "cum_pool": 83,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.1",
    "why": "The planned-escape shape with an elderly protagonist and a family conflict instead of a crime, which changes the register problem entirely: no police, no enquiry, and a real pull toward sympathy. Holding neutral third person with no institution to quote is a genuine A5 exercise, and A5 is 9%. One point of coverage."
   },
   {
    "rank": 36,
    "badge": 58,
    "cum_pool": 84,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.1",
    "why": "Deliberately vague — a strange visitor, unspecified — so the whole answer is invention, and it is the last animal prompt with a point of coverage in it. Use it to rehearse the anaphora chain one final time: l'animal → le rapace → l'oiseau → il. A4 is 9% and that chain is most of what it measures."
   },
   {
    "rank": 37,
    "badge": 8,
    "cum_pool": 85,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.1",
    "why": "A light domestic story with no institution, which makes the closing genuinely hard: there is no enquiry to open and no measure to announce, so the outcome has to be a status. Practising that ending once is worth the slot, because A3 (12%) distinguishes a text that ends from one that merely stops. One point, to 85%."
   },
   {
    "rank": 38,
    "badge": 44,
    "cum_pool": 86,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.1",
    "why": "The largest family's sixth member. Everything it forces — the valuation, the expert, the plus-que-parfait for what the seller had hidden — you built at rank 1 and rehearsed at rank 16. One point of coverage, and past this line every Surprising-discovery prompt is consolidation only."
   },
   {
    "rank": 39,
    "badge": 24,
    "cum_pool": 86,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.1",
    "why": "Nothing new and no coverage gained. Residents woken, firefighters called, a suspect freed and then arrested: three scaffolds you have each written twice already. It is a pleasant story and a fast one — take it as a timed 20-minute rep, or leave it out and lose nothing."
   },
   {
    "rank": 40,
    "badge": 47,
    "cum_pool": 87,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.1",
    "why": "The complaint-and-compensation shape, the one commercial variant in the travel family: a refusal, a gesture, a dissatisfied guest quoted. 1 point of coverage, to 87%. Its real use is the ending, because a partial refund is a proper outcome and it teaches you to close on a fact rather than on a feeling."
   },
   {
    "rank": 41,
    "badge": 15,
    "cum_pool": 88,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.1",
    "why": "The mix-up prompt, and its entire interest sits in the cause: you have to explain how the confusion happened, which is *pourquoi* with no accident to hide behind. A2 is 21% and *pourquoi* is the question band-5 scripts leave unanswered most often. One point, and a fast write once you have planned it."
   },
   {
    "rank": 42,
    "badge": 31,
    "cum_pool": 88,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.1",
    "why": "Zero coverage gained — this is rank 1's story with a canvas instead of banknotes, right down to the expert and the estimate. Write it only if you want a third valuation rep. If you are choosing what to cut on day six, cut this before you cut a single Section B essay."
   },
   {
    "rank": 43,
    "badge": 61,
    "cum_pool": 89,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.1",
    "why": "The most open prompt in the entire set — a bottle containing what? — so you supply the whole event yourself. 1 point of coverage, to 89%, and its value is invention speed: under exam conditions the expensive minutes are the ones before you start writing. Set a two-minute planning limit and go."
   },
   {
    "rank": 44,
    "badge": 38,
    "cum_pool": 90,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.1",
    "why": "A twenty-year timeline compressed into 100 words, which is the timeline recap doing real work: « les faits remontent aux années 2000 », « devenu depuis ». Ninety per cent of the pool is now answerable. A3 is 12% and controlled chronology is precisely what it measures."
   },
   {
    "rank": 45,
    "badge": 37,
    "cum_pool": 90,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.1",
    "why": "No gain. Firefighters plus unusual animals is rank 2 and rank 5 stitched together, and both scaffolds are at three exposures already. Low-yield by construction — keep it in reserve for a day when you want a 20-minute rep and nothing more demanding."
   },
   {
    "rank": 46,
    "badge": 3,
    "cum_pool": 91,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.1",
    "why": "Labelled the crime archetype, and it sits at 46 because five crime prompts have already taught you every beat it contains: the alarm raised, the enquiry, the mechanism, the judicial follow-up. One point of coverage, to 91%. That said, it is the cleanest single instance of the shape, so if you want exactly one crime rehearsal in your final two days, make it this one."
   },
   {
    "rank": 47,
    "badge": 53,
    "cum_pool": 92,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.3",
    "why": "Almost nothing happens in this opening, and that is the difficulty: you have to build a search, a worry and a resolution out of a walk. One point of coverage and a real test of whether you can produce 100 words of genuinely new information, since the producer states plainly that recopying the opening earns nothing. Ninety-two per cent covered."
   },
   {
    "rank": 48,
    "badge": 16,
    "cum_pool": 92,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.3",
    "why": "No coverage movement. The comic child-and-police shape is ranks 3 and 20 recombined, and its own exact twin sits at rank 72. The only thing it drills that nothing else does is keeping a straight face in French, which matters for A5's 9% but does not justify a fresh 25-minute slot at this stage."
   },
   {
    "rank": 49,
    "badge": 33,
    "cum_pool": 93,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.3",
    "why": "Third and last outing for the medical field — le bloc opératoire, une radiographie, le patient s'est rétabli — attached to a discovery that ends in a hospital rather than a police station. One point of coverage. Do it if that vocabulary still feels shaky; skip it if ranks 2 and 13 left it solid."
   },
   {
    "rank": 50,
    "badge": 9,
    "cum_pool": 93,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.3",
    "why": "Zero gain. Ranks 15 and 35 already wrote the plan–execution–failure arc, and the prison setting adds a lexical wrinkle rather than a component. Nicely shaped and completely redundant, which at rank 50 means: pleasant, optional, and cheaper to skip than to schedule."
   },
   {
    "rank": 51,
    "badge": 20,
    "cum_pool": 94,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.3",
    "why": "The child-hero variant, and the last rescue prompt worth a point. It stacks the counterfactual, the official recognition and the school field in one answer, a combination the other six rescues never make. One point of coverage, to 94%, in about 20 minutes."
   },
   {
    "rank": 52,
    "badge": 45,
    "cum_pool": 94,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.3",
    "why": "No gain — seven rescue prompts is more than any component inventory can absorb, and this is the seventh. The unexpected reaction is a good hook and it needs the twist component you installed at rank 1. Optional from here; nothing in it will change your Section A score."
   },
   {
    "rank": 53,
    "badge": 42,
    "cum_pool": 95,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.3",
    "why": "One point, and the pool crosses 95%. Presents, a list of names, a stranger under a tree: the entire prompt is a *pourquoi* waiting to be answered, which is still the highest-value question inside A2 at 21%. If you drill it, spend the time on the explanation and not on the scene."
   },
   {
    "rank": 54,
    "badge": 51,
    "cum_pool": 95,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.3",
    "why": "No movement. Institutional response, solidarity, official recognition — three components, all at three exposures already. This is the rank at which the honest instruction changes: read the prompt, plan the three paragraphs in your head in 90 seconds, and move on. Full writes have stopped buying coverage."
   },
   {
    "rank": 55,
    "badge": 13,
    "cum_pool": 96,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.3",
    "why": "The prize archetype at rank 55, because rank 9 took its distinctive component and rank 40 took its commercial ending. One point of coverage. What it still teaches is a dispute with a real amount attached — 3 millions de dollars — and figures remain the cheapest specificity A2 recognises at 21%."
   },
   {
    "rank": 56,
    "badge": 7,
    "cum_pool": 96,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.3",
    "why": "Zero gain despite the archetype label. Neighbours, a mayor and a planning dispute were all written at rank 19 against municipal authorities, and rank 4 supplied the nominalisation that carries them. Skippable. If you do write it, use it purely to practise the mayor's quoted statement, which is A5 (9%) and A2 (21%) in one sentence."
   },
   {
    "rank": 57,
    "badge": 19,
    "cum_pool": 97,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.3",
    "why": "1 point, and it is the eighth of 9 discovery prompts. The perimeter, the expert and the enquiry have each been written three times by now. 97% of the pool is answerable, which is the real message of this rank: what remains is insurance, not instruction."
   },
   {
    "rank": 58,
    "badge": 10,
    "cum_pool": 97,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.3",
    "why": "No coverage gain. This is the emotional one, and the discipline it teaches — reporting a reunion without adjectival excess — you already practised at ranks 3 and 20. Low-yield. Its only claim on your time is that it is easy to over-write, and one rehearsal of restraint is not wasted if you genuinely have the hour."
   },
   {
    "rank": 59,
    "badge": 12,
    "cum_pool": 97,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.3",
    "why": "Nothing gained. Rank 3 built this family's entire machinery — the quote, the solidarity aftermath, the reference chain — and this is the same story relocated to a kitchen. Genuinely optional: 25 minutes for zero points of coverage is a bad trade on day six of seven."
   },
   {
    "rank": 60,
    "badge": 65,
    "cum_pool": 98,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.3",
    "why": "Flagged in the source as the least representative member of a saturated nine-item family, and it earns exactly one point. The police contact and the valuation are your third and fourth exposures to both. Low-yield and safe to skip: if you have already written four discovery prompts, put the 25 minutes into Section B, which carries 65% of the composite against Section A's 35%."
   },
   {
    "rank": 61,
    "badge": 68,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.3",
    "why": "One point, and the pool reaches 99%. It is flagged as a near-duplicate of the postal case at rank 64 and the model agrees. Low-yield and safe to skip; the only reason it is not last is that filming as evidence gets a useful third rep here, and evidence is real A2 illustration at 21%."
   },
   {
    "rank": 62,
    "badge": 11,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.3",
    "why": "Zero gain, archetype label notwithstanding: ranks 10 and 33 covered the confinement family and rank 4 gave you the technical failure. Low-yield and safe to skip. If you want one last rep of « une panne » and « le syndic a indiqué », it is a clean 20 minutes — otherwise leave it alone."
   },
   {
    "rank": 63,
    "badge": 49,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.3",
    "why": "No coverage gain whatsoever — 0 points. Theft, recognition, confrontation and restitution are 4 components, each already written three times over. Low-yield and safe to skip. On a seven-day plan this is a prompt to read and plan mentally, never one to write out in full."
   },
   {
    "rank": 64,
    "badge": 56,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.3",
    "why": "Nothing gained. The enquiry is handed to you in the opening line — « une enquête a été ouverte » — so even the press formula is supplied rather than practised. Low-yield and safe to skip. The figure 24 000 is the only thing worth borrowing, and you can borrow it without writing the piece."
   },
   {
    "rank": 65,
    "badge": 21,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.4",
    "why": "This is the rank at which the curve reaches 100%: every prompt in the set is now assemblable from what you have rehearsed. The hacker story is a good one and it is worth exactly 1 point, which tells you what you need to know — low-yield, and safe to skip. Everything below this line is a rerun of something you already own."
   },
   {
    "rank": 66,
    "badge": 66,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.4",
    "why": "0 points of coverage, on a family the source itself marks saturated at 9 members. Low-yield and safe to skip. Reading it and planning the three paragraphs in your head takes four minutes and captures essentially all of the residual value."
   },
   {
    "rank": 67,
    "badge": 27,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.4",
    "why": "No gain. It is rank 15's break-in with a lighter tone and no burglary charge, and every component in it stands at three or more exposures. Low-yield and safe to skip. If you write it anyway, cap it at 20 minutes and spend the reread on accords and accents — that reread is worth more than the answer is."
   },
   {
    "rank": 68,
    "badge": 67,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.4",
    "why": "Flagged in the source as a near-duplicate of the rank-12 diversion, and the model agrees: 0 points. Low-yield and safe to skip. The in-flight medical emergency is one sentence you can graft onto the answer you already own."
   },
   {
    "rank": 69,
    "badge": 70,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.4",
    "why": "An exact duplicate of rank 3, word for word in what it demands of you. Zero coverage, zero new machinery. Low-yield and safe to skip — skip it before you skip sleep, and before you skip a single Section B argument, because Section B carries 65% of the composite."
   },
   {
    "rank": 70,
    "badge": 72,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.4",
    "why": "The same library prompt as rank 10 with two words changed. Nothing to install, nothing to cover, 0 points. Low-yield and safe to skip outright: if it comes up on 16 August you will write rank 10's answer from memory, which is the entire point of having drilled it."
   },
   {
    "rank": 71,
    "badge": 69,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.4",
    "why": "A near-duplicate of the rank-55 lottery dispute, flagged as such in the source, and worth 0 points of coverage. Low-yield and safe to skip. The exchange offered in place of the prize is a one-line variation on a refusal you have already written twice."
   },
   {
    "rank": 72,
    "badge": 71,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Written Section A ≈ 7.4",
    "why": "Last for a simple reason: it is an exact duplicate of rank 48, which was itself worth 0 points. Nothing here is new — not a component, not a lexical field, not a structure — so it is the definition of low-yield and it is entirely safe to skip. If you have reached rank 65 with time to spare, the highest-value use of 25 minutes is a Section B essay or a targeted proofreading drill on accords, -é/-er and accents, not this."
   }
  ]
 },
 "EB": {
  "set": "EE_B",
  "blurb": "Ranked by how much of the remaining 73 affirmations each one teaches you to argue. Drill top-down. “Stop here” is a written Section B score, not your reported NCLC — this section is 65% of the written composite, and no ordering of prompts can move the language criteria that cap the composite.",
  "caps": [
   "**Three arguments, each developed.** Fewer than three caps B2 at 6; three stated once and never developed is B2 = 5 regardless of the quality of your French.",
   "**Delete the template.** Generic introductions and conclusions are struck before scoring — they earn nothing and their words don't count toward the 200.",
   "**Not all present indicative.** A Section B with no *conditionnel* and no *subjonctif* cannot exceed 6 on B7 however clean it is."
  ],
  "start_band": "Written Section B ≈ 6.0",
  "milestones": [
   {
    "after_rank": 4,
    "headline": "Four prompts in, you own 88% of the grammar that gates the whole score",
    "band": "Written Section B ≈ 6.5",
    "body": "Four essays cover only 16% of the pool, but they install fourteen of the sixteen language components: the conditional, si + imparfait, the subjunctive after « bien que », the concession frame, the connector set beyond mais/donc, and grammatical spelling. That matters more than the coverage number, because NCLC_EE ≤ min(LEX, SYN) + 1.5 — until those move, B2 at 24% and B3 at 14% cannot pay out. You are 4 points from NCLC 6 and this block alone should clear it. NCLC 7 is a different bill: §12's table needs LEX, SYN and ORTH at 6.5–7, which means executing these accurately rather than merely knowing them."
   },
   {
    "after_rank": 8,
    "headline": "Eight of the eleven families now have a skeleton you can adapt cold",
    "band": "Written Section B ≈ 6.6",
    "body": "Coverage is 33% and the eight largest families each have an archetype behind them. B1 (12%) and B3 (14%) are effectively solved: your own reformulation, a scoped position, deliberate paragraph order, and a conclusion that follows from the argument instead of restating the opening. What is not solved is B2 at 24% — the banks have arrived, but the illustration still has to be specific enough that it could not be moved to another argument, and that is a writing habit rather than a list. Nothing in this block touches orthographe, which sits under the ORTH + 2.0 ceiling, so keep the accord and accent drill running in parallel."
   },
   {
    "after_rank": 14,
    "headline": "All eleven family archetypes done: 47% of the pool, 94% of the language",
    "band": "Written Section B ≈ 6.8",
    "body": "Fourteen essays and every family in the set has a memorised model. On the rubric's own arithmetic this is where a flat NCLC 6 profile becomes secure — B1, B2, B3 and B4 are 60% of Section B between them and all four now have their machinery installed. NCLC 7 does not follow from it: §12 shows a candidate with everything improved and language merely acceptable landing near 405, still inside band 6. The remaining 23 points to 428 come from LEX, SYN and ORTH, so accords and accents are now the binding constraint, not argument-building."
   },
   {
    "after_rank": 21,
    "headline": "Language inventory complete — all 16 components, 65% of the pool covered",
    "band": "Written Section B ≈ 7.0",
    "body": "The past hypothetical at rank 21 closes the Tier L list, so every structure Section B actually tests is now in your writing: both si systems, the subjunctive after concessive triggers, nominalisation, hedging, and the full range of marqueurs de relation. B7 is 12% and its genre note says a Section B written entirely in the present indicative cannot exceed NCLC 6 — you are clear of that cap outright. From here the score turns on accuracy under time pressure rather than on knowing more forms: §6.3 counts a wrong participe passé three times as heavily as a misspelt noun, and the e-TEF has no spellchecker. Coverage 65%, language 100%."
   },
   {
    "after_rank": 34,
    "headline": "Content inventory closed at 88% — the curve flattens from here",
    "band": "Written Section B ≈ 7.2",
    "body": "All 44 argument banks and all 12 structural moves are installed; no prompt below this rank teaches a new component. The remaining 39 items add between 0 and 2 points of coverage each. B2 at 24% now has three to four genuinely distinct dimensions available on every subject in the pool, which is the NCLC 7 descriptor met on the heaviest criterion in the test. Whether that converts is a language question: at content 7 with LEX/SYN/ORTH at 6.5–7 this is a 428–437 profile; with the same content and language at 5.5 it lands near 400 and stays in band 6."
   },
   {
    "after_rank": 47,
    "headline": "Past here, drilling costs more sleep than it buys points",
    "band": "Written Section B ≈ 7.3",
    "body": "Coverage is 98%. The 26 prompts below this line are recombinations of essays you have already written, and each moves the pool by 0 or 1 point. With seven days to 16 August, the honest trade is to stop adding subjects and spend the time on the two things that still move the number: five minutes of checklist proofreading per script — plurals, participes passés, accents, sentence-final punctuation — which §12 says removes 3–4 weighted errors per 100 words and is worth a full band on B8, and timed 250-word writes at 35 minutes. Writing is the cheaper of your two productive skills to push to NCLC 7 (428 in EE against 456 in EO), so protect the accuracy, not the topic list."
   }
  ],
  "order": [
   {
    "rank": 1,
    "badge": 1,
    "cum_pool": 1,
    "cum_lang": 25,
    "floor": "Written Section B ≈ 6.0",
    "why": "Start here, because this is the prompt that installs the skeleton every other answer in the set hangs on: your own one-line reformulation of the affirmation instead of a memorised opening, one paragraph per argument, and claim → reason → illustration. §7.3(d) strikes any introduction or conclusion that would fit an unrelated subject before B1, B2 and B3 are scored at all — the rubric's Example 4 loses 54 points and a full NCLC band to exactly that. It also starts the two drills running underneath everything else: the conditional (« il faudrait que les États imposent… », « une telle mesure permettrait de… ») and grammatical spelling, which §6.3 weights ×3 and §12 calls the highest-value item on the whole list. Nineteen of the remaining 72 prompts need that conditional, and B2 on its own is 24% of Section B."
   },
   {
    "rank": 2,
    "badge": 2,
    "cum_pool": 4,
    "cum_lang": 56,
    "floor": "Written Section B ≈ 6.0",
    "why": "This is the nuance engine, and it is second for that reason alone. « Si l'on supprimait les notes, les élèves perdraient… » gives you si + imparfait → conditionnel; « bien que la compétition soit excessive » gives you the subjunctive; « certes … mais » gives you the concession–refutation frame — and B7's genre note says a Section B written entirely in the present indicative cannot exceed NCLC 6 however clean it is. It also opens the abolish-and-ban architecture and the most profitable single move in the pool, réguler plutôt qu'interdire, which 25 later prompts reuse almost verbatim. B3 is 14% and B7 is 12%, and this one essay moves both."
   },
   {
    "rank": 3,
    "badge": 3,
    "cum_pool": 8,
    "cum_lang": 75,
    "floor": "Written Section B ≈ 6.0",
    "why": "Third, because it turns a sweeping claim into an arguable one: separating what the affirmation states from what it quietly assumes — « les réseaux ne détruisent pas le lien social, ils en déplacent le lieu » — is the B1 move at NCLC 9–10, and B1 is 12%. It also stops you repeating the subject noun, since « ce phénomène » and « une telle évolution » are the B4 descriptor at NCLC 7, and it brings the abstract press lexis B6 measures at 12%. Twenty-nine later prompts rest on the same premise-contesting shape and 18 need the definitional move that arrives with it. Hedging comes free — « rien ne permet d'affirmer que » — and protects your register score too."
   },
   {
    "rank": 4,
    "badge": 4,
    "cum_pool": 16,
    "cum_lang": 88,
    "floor": "Written Section B ≈ 6.0",
    "why": "Horizon affirmations are their own genre and this is the clean one: you have to project rather than describe, so « d'ici vingt ans », « à terme » and « on assistera à » enter the text alongside the futur simple. Comparison and proportion come with them — « de moins en moins », « au détriment de » — and 22 of the remaining prompts need that machinery. Coverage jumps 8 points here, the largest single-item jump anywhere in the order. It also closes the language inventory at 88%: four essays, fourteen of the sixteen components that sit inside the min(LEX, SYN) + 1.5 ceiling."
   },
   {
    "rank": 5,
    "badge": 10,
    "cum_pool": 22,
    "cum_lang": 88,
    "floor": "Written Section B ≈ 6.5",
    "why": "Work is a family of four and this is its cleanest entry point. The affirmation is an absolute value judgement, so you cannot answer it without first naming what counts as work — emploi salarié or activité utile — and that architecture recurs in 10 later prompts. It opens the employment bank, which 17 prompts below it reuse, and the work-and-private-life bank; both feed B2 at 24%. Six points of pool coverage for one 250-word essay."
   },
   {
    "rank": 6,
    "badge": 6,
    "cum_pool": 28,
    "cum_lang": 88,
    "floor": "Written Section B ≈ 6.5",
    "why": "Comparison across time is its own architecture: « moins qu'avant » has to be made explicit and bounded before you can argue with it at all. Twelve later prompts are comparative or hierarchical in exactly this way, and the family-and-tradition bank you build here serves seven more. Scoping the claim — « en partie, et surtout dans les grandes villes » — is the literal NCLC 7 wording on B1, which carries 12%. Another 6 points of coverage."
   },
   {
    "rank": 7,
    "badge": 8,
    "cum_pool": 32,
    "cum_lang": 88,
    "floor": "Written Section B ≈ 6.5",
    "why": "The ban template appears in its purest form here: a protection claim against a liberty claim, with a real question about who would enforce it. Liberty-versus-protection sits behind 9 later prompts and minors' autonomy behind 3 more. Because réguler plutôt qu'interdire is already yours from rank 2, this one is fast — you are attaching content to a structure you own rather than building one. Raising the counter-argument and answering it is what moves B2 from 7 to 8, and B2 is 24%."
   },
   {
    "rank": 8,
    "badge": 5,
    "cum_pool": 33,
    "cum_lang": 88,
    "floor": "Written Section B ≈ 6.5",
    "why": "Health is a seven-prompt family and this is its archetype. It installs the nutrition bank, the consumption-and-prices bank and the inequality-of-means bank — that last one returns in 12 later prompts, because a large share of this pool eventually turns on who can afford the thing being demanded. The sweeping-premise shape from rank 3 transfers straight in, so your work here is content, not architecture. Coverage moves only 1 point; the three banks are worth considerably more than that point suggests."
   },
   {
    "rank": 9,
    "badge": 37,
    "cum_pool": 40,
    "cum_lang": 88,
    "floor": "Written Section B ≈ 6.6",
    "why": "An odd-looking affirmation carrying three banks that nothing before it supplies: teaching tools and pedagogy, the dematerialisation of everyday infrastructure, and the digital divide. Between them those three reappear in 13 later prompts — the smartphone, contactless-menu, distance-learning and free-books items are all downstream of this one. Coverage moves 7 points, the second-largest jump in the set. Drill it despite the strange wording; the machinery is what you are buying, not the subject."
   },
   {
    "rank": 10,
    "badge": 20,
    "cum_pool": 41,
    "cum_lang": 94,
    "floor": "Written Section B ≈ 6.6",
    "why": "Heritage and restitution appear exactly once in this pool, and this is it — no other prompt will teach you « les œuvres acquises pendant la période coloniale, aujourd'hui conservées à Paris, … ». That fronted participial and apposition is the last sentence-level component you are missing, and B4's NCLC 8 descriptor is precisely cohesion working inside the sentence rather than only between sentences. It also brings civic-rights arguments and the international-comparison bank, which is the cheapest route to the named illustration B2 rewards at 8. Language coverage reaches 94% here."
   },
   {
    "rank": 11,
    "badge": 11,
    "cum_pool": 44,
    "cum_lang": 94,
    "floor": "Written Section B ≈ 6.6",
    "why": "Two banks land at this rank and nowhere earlier: personal data and the attention economy, and the celebrity-and-spectacle bank. Four prompts sit downstream of each, including the money-in-sport and talent-and-fame items much further along. Everything structural is already yours, so this is a 30-minute drill that buys 3 points of coverage. B2 is 24%, and two fresh dimensions is two of the three or four genuinely distinct arguments the NCLC 7 descriptor demands."
   },
   {
    "rank": 12,
    "badge": 51,
    "cum_pool": 45,
    "cum_lang": 94,
    "floor": "Written Section B ≈ 6.6",
    "why": "School authority and the passage-to-adulthood bank arrive together here and carry five later prompts between them. The affirmation is a false dichotomy, which makes it the cleanest place to practise refusing the terms of the question outright — « la discipline ne s'apprend pas dans un lieu, mais dans une cohérence entre les deux ». That is B1 at 12% and the difference between a 7 and a 9 on it. One point of pool coverage, two banks, forty minutes."
   },
   {
    "rank": 13,
    "badge": 9,
    "cum_pool": 46,
    "cum_lang": 94,
    "floor": "Written Section B ≈ 6.6",
    "why": "The canonical « X est inutile » affirmation, and the only prompt that installs the value-of-creation bank. Answering it forces you to name the criterion before you judge — utile pour qui, mesuré comment — and you then reuse that on the drawing-and-music, musical-instrument and sport-competition prompts. It is cheap now: the definitional move came at rank 3 and the concession frame at rank 2, so you are filling in content only. One point of coverage and one clean B2 dimension."
   },
   {
    "rank": 14,
    "badge": 7,
    "cum_pool": 47,
    "cum_lang": 94,
    "floor": "Written Section B ≈ 6.6",
    "why": "This closes the set of eleven family archetypes — after it, every family in the pool has a memorised skeleton you can adapt under time pressure. It brings the guidance-and-diploma bank, reused by the career-paths and experience-versus-diplomas prompts later on. The affirmation invites a bounded position rather than a flat refusal, and « sauf lorsque le poste suppose une expérience longue et non transférable » is exactly the NCLC 7 wording on B1. Coverage stands at 47% and language at 94%."
   },
   {
    "rank": 15,
    "badge": 45,
    "cum_pool": 50,
    "cum_lang": 94,
    "floor": "Written Section B ≈ 6.8",
    "why": "Transport and mobility is a bank of its own, and this is the representative worth owning. The ban architecture is already built, so you are attaching new content to it: congestion, commerce de proximité, and those with no alternative. Three points of coverage, and the effet pervers — a ban that simply pushes traffic onto the ring road — is the consequence chain B2 rewards at NCLC 8. Roughly forty minutes' work."
   },
   {
    "rank": 16,
    "badge": 63,
    "cum_pool": 54,
    "cum_lang": 94,
    "floor": "Written Section B ≈ 6.8",
    "why": "Language and identity is the last cultural bank in the pool, and it feeds the mother-tongue, handwriting and death-of-print prompts downstream. This is also the rare affirmation you probably agree with, which makes it the right place to practise holding a position without drifting into the general theme — the exact B1 failure at NCLC 5. Four points of coverage. Make the conclusion open onto a condition instead of restating your opening; B3 is 14% and that single habit is worth a band on it."
   },
   {
    "rank": 17,
    "badge": 57,
    "cum_pool": 57,
    "cum_lang": 94,
    "floor": "Written Section B ≈ 6.8",
    "why": "Consumption, waste and individual eco-gestures is the bank here, and the showers-versus-baths prompt at rank 60 depends entirely on it. Nominalisation earns its keep on this subject — « la surproduction textile », « l'allongement de la durée d'usage » — which is the NCLC 8 lexical descriptor and B6 at 12%. Three points of coverage on a subject where concrete illustrations are unusually easy to find. Use one figure: B2 at 8 wants a number, not an impression."
   },
   {
    "rank": 18,
    "badge": 48,
    "cum_pool": 61,
    "cum_lang": 94,
    "floor": "Written Section B ≈ 6.8",
    "why": "Animals and biodiversity is what you are here for, and it also serves the zoos prompt and both vegetarian items further down. Everything else — obligation architecture, feasibility, the third way — you already own from ranks 1, 2 and 7, so this drills in half the usual time. Four points of coverage, the largest remaining single-item gain in the order. The bounded position writes itself: « à condition qu'une alternative équilibrée soit garantie », subjunctive included."
   },
   {
    "rank": 19,
    "badge": 36,
    "cum_pool": 62,
    "cum_lang": 94,
    "floor": "Written Section B ≈ 6.8",
    "why": "Privacy, surveillance and consent enter the inventory here, and only the video-surveillance prompt at rank 57 reuses them. The metaphor is the interesting part: deciding whether « marchandise » is literal or figurative before you answer is the NCLC 9–10 move on B1, which carries 12%. Nominalisation and abstract lexis do heavy lifting on this subject, so it doubles as a B6 rehearsal. One point of coverage — take it for the B1 practice rather than the content."
   },
   {
    "rank": 20,
    "badge": 34,
    "cum_pool": 64,
    "cum_lang": 94,
    "floor": "Written Section B ≈ 6.8",
    "why": "Food autonomy and crisis is the last environmental bank and the last of the 44 argument banks to arrive anywhere in this order. The horizon shape from rank 4 returns with its projection markers — « à terme », « nous devrons » — so this consolidates the futur rather than teaching new grammar. Two points of coverage. After this the content inventory is complete and everything below is rehearsal."
   },
   {
    "rank": 21,
    "badge": 18,
    "cum_pool": 65,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 6.8",
    "why": "One thing only, and it is worth the hour. « Si l'on avait su, on aurait profité autrement » is si + plus-que-parfait → conditionnel passé, the NCLC 8 descriptor on B7 and the sixteenth and final component of the language inventory. Nothing else in the pool forces it except the life-is-short prompt at rank 68, which you will not reach. Language coverage hits 100% here, and B7 is 12% sitting inside the ceiling that caps every other criterion."
   },
   {
    "rank": 22,
    "badge": 55,
    "cum_pool": 68,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.0",
    "why": "Nothing new is installed — every bank and every move this needs is yours by rank 21. What it buys is 3 points of pool coverage, because it sits close to five other school-and-time prompts that become writable once you have written this one. Forty minutes, and the best remaining use of forty minutes on this list. B2 at 24% rewards the trade-off framing here: time at school weighed against time for everything else."
   },
   {
    "rank": 23,
    "badge": 29,
    "cum_pool": 69,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.0",
    "why": "The ageing-and-autonomy bank is the only new thing here, and exactly 1 later prompt reuses it. The obligation architecture — who is bound, at whose cost, with what exception — was built at rank 2, so this is content only. Coverage moves 1 point. Worth doing if you want the elderly-and-technology angle secure; skippable if the week is tight."
   },
   {
    "rank": 24,
    "badge": 12,
    "cum_pool": 71,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.0",
    "why": "Everything here assembles from parts you own: the equity bank from rank 8, the ecology banks from rank 1, the premise-contesting shape from rank 3. Two points of coverage, and the value is rehearsal speed rather than new machinery. The affirmation rewards a bounded agreement — « en partie, et c'est précisément l'argument pour une transition financée » — which is B1 at 12%. Half an hour."
   },
   {
    "rank": 25,
    "badge": 24,
    "cum_pool": 72,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.0",
    "why": "A provocative premise that you should refuse politely rather than angrily, which is the whole of B5: only 6%, but its NCLC 7 descriptor says disagreement stated with tact. No new components and 1 point of coverage. The discipline bank came at rank 12 and hedging at rank 3, so this is a thirty-minute write. Do it for the register practice, not the subject."
   },
   {
    "rank": 26,
    "badge": 25,
    "cum_pool": 73,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.0",
    "why": "Dependence on digital infrastructure is already yours from rank 9, and the absolute-claim shape from rank 5. One point of coverage. What is genuinely useful here is the si-hypothetical stress test — « si le réseau tombait pendant une semaine, … » — which exercises B7 at 12% on a subject where the consequences almost write themselves."
   },
   {
    "rank": 27,
    "badge": 16,
    "cum_pool": 76,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.0",
    "why": "The negative construction is the reason to drill this: « il n'est pas nécessaire que l'on soit végétarien » forces the subjunctive after a negated evaluative, a trigger you have not yet written even though the mood was installed at rank 2. Three points of coverage — it unlocks the cafeteria and duplicate-vegetarian prompts sitting behind it. Everything else is content you own; thirty minutes."
   },
   {
    "rank": 28,
    "badge": 26,
    "cum_pool": 79,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.0",
    "why": "Who pays is the question this affirmation cannot dodge, and the financing bank is rank 1's — so this is a straight application. Three points of coverage, joint-largest of anything remaining. Keep the third way in view: subventionné rather than gratuit, the move 25 prompts in this set share. B2 is 24%, and a costed argument is by definition a developed one."
   },
   {
    "rank": 29,
    "badge": 23,
    "cum_pool": 80,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.0",
    "why": "The obligation architecture meets the economic bank, and you own both; nothing new is installed here. One point of coverage. The real difficulty is proportionality — a small firm and a multinational cannot carry the same charge — and stating precisely how far the affirmation holds is the NCLC 8 descriptor on B1. Fast to write, and a clean rehearsal of « il faudrait que les entreprises contribuent à hauteur de leurs émissions »."
   },
   {
    "rank": 30,
    "badge": 56,
    "cum_pool": 81,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.0",
    "why": "Lost manual skills came at rank 4 with the handwriting angle, so nothing new arrives here. One point of coverage. Its use is the concrete illustration B2 demands at NCLC 7 — an example specific enough that it could not be transplanted to a different argument, which is the literal wording of the descriptor. Half an hour, and skip it before you skip a language drill."
   },
   {
    "rank": 31,
    "badge": 64,
    "cum_pool": 83,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.0",
    "why": "A hierarchy claim, and you own the comparative architecture from rank 6 and the diploma bank from rank 14. Two points of coverage. This is the prompt where a flat refusal reads worst: the honest answer is scoped — « selon le métier visé » — and that is what B1 rewards at 7 and above. Worth one pass for the scoping practice."
   },
   {
    "rank": 32,
    "badge": 27,
    "cum_pool": 85,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.0",
    "why": "Public health against commercial freedom, with all four banks already in hand. Two points of coverage. The reason it earns rank 32 rather than rank 60 is that it is the cleanest place to rehearse the two-branch consequence with a semicolon and a colon — « soit une hausse du prix, soit un appauvrissement de l'offre » — which is B8 punctuation and B4 cohesion at once, 20% between them. Forty minutes."
   },
   {
    "rank": 33,
    "badge": 28,
    "cum_pool": 87,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.0",
    "why": "The affirmation is literally a si-clause, which makes it the natural place to rehearse the hypothetical system under pressure. One point of coverage and no new banks. Social pressure and inequality of means are both installed; what you are practising is refusing a cruel premise courteously, B5 at 6%. Half an hour, and genuinely optional."
   },
   {
    "rank": 34,
    "badge": 54,
    "cum_pool": 88,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.0",
    "why": "Animal welfare arrived at rank 18 and the ban architecture at rank 2, so this assembles from parts. One point of coverage. It is the best remaining place to raise a counter-argument and answer it cleanly, because conservation programmes give you a genuine reason to hesitate — and that move is what separates B2 at 7 from B2 at 8, on 24% of the section. Coverage stands at 88% once it is done."
   },
   {
    "rank": 35,
    "badge": 19,
    "cum_pool": 90,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.2",
    "why": "Civic rights and minors' autonomy are both installed; nothing new here. Two points of coverage. The value is a bounded position on a subject where most candidates give a flat yes or no — « à condition qu'une éducation civique obligatoire l'accompagne » puts you in NCLC 7 territory on B1, 12%. Thirty-five minutes."
   },
   {
    "rank": 36,
    "badge": 62,
    "cum_pool": 91,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.2",
    "why": "A fatalist premise, and refusing it is the entire task. One point of coverage, nothing installed. It does bridge the ecology and health banks, which is useful if you want a fourth argument dimension available on either subject — B2 at NCLC 7 asks for three to four genuinely distinct ones. Optional, but short."
   },
   {
    "rank": 37,
    "badge": 70,
    "cum_pool": 92,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.2",
    "why": "The first of four death-of-print near-duplicates, and the only one worth writing. One point of coverage. Rank 4 already gave you the whole book-and-reading argument set; what this adds is the comparison against a rival medium, which takes twenty minutes to graft on. The three remaining print prompts add nothing at all after it."
   },
   {
    "rank": 38,
    "badge": 13,
    "cum_pool": 92,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.2",
    "why": "Zero new components and zero points of coverage — the pedagogy bank came at rank 9 and the digital divide with it. It is on the list because distance learning is a common real-exam subject and worth one confident rehearsal, not because it teaches you anything. Twenty-five minutes. If your accents and participes passés are not clean yet, do those instead."
   },
   {
    "rank": 39,
    "badge": 14,
    "cum_pool": 92,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.2",
    "why": "Nothing new, no coverage gain. The addiction bank and the sweeping-premise shape both came at rank 3, and this is that essay with the age of the subject changed. Its single merit is speed of preparation — fifteen minutes to adapt. Low yield."
   },
   {
    "rank": 40,
    "badge": 33,
    "cum_pool": 94,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.2",
    "why": "Two points of coverage and no new machinery. The celebrity-and-spectacle bank from rank 11 carries most of it, and the economic angle is the one you used on advertising. It is a good subject for the named illustration B2 wants at NCLC 8: one club, one transfer figure, one competition. Otherwise low priority."
   },
   {
    "rank": 41,
    "badge": 53,
    "cum_pool": 95,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.2",
    "why": "An equivalence claim — « aussi efficace que » — and comparison has been yours since rank 6. One point of coverage, nothing installed. It is the only prompt in the pool where a safety argument is natural, so take one pass if you want that dimension available. Otherwise skip it; the yield is a single point."
   },
   {
    "rank": 42,
    "badge": 17,
    "cum_pool": 95,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.2",
    "why": "No coverage gain and no new components. What it offers is a subject where the honest answer is a partial one, and « en partie, mais à condition de ne pas confondre confort et enfermement » is a sentence worth having in your fingers — B1 at 12%, subjunctive included. Twenty-five minutes. Low yield, but the cheapest remaining B1 rehearsal."
   },
   {
    "rank": 43,
    "badge": 35,
    "cum_pool": 95,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.2",
    "why": "Nothing new, and coverage does not move. Every part is built: obligation architecture from rank 2, the school banks from ranks 2 and 12, feasibility from rank 1. Worth one rehearsal only if teacher evaluation strikes you as a likely subject; otherwise it is thirty minutes better spent on the accent palette. Low yield."
   },
   {
    "rank": 44,
    "badge": 47,
    "cum_pool": 95,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.2",
    "why": "Zero new components, zero points. The definitional move from rank 3 does all the work here — deciding what « une vraie amitié » means settles the essay before you write an argument. Fifteen minutes if you want it, and its near-twin at rank 71 adds nothing on top. Safe to skip."
   },
   {
    "rank": 45,
    "badge": 40,
    "cum_pool": 97,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.2",
    "why": "Two points of coverage and no new machinery. The coming-of-age bank came at rank 12 and inequality of means at rank 8; this essay is those two plus a bounded position. It is the last item on the list that moves coverage by more than one point. Thirty minutes, and after it the returns are genuinely flat."
   },
   {
    "rank": 46,
    "badge": 44,
    "cum_pool": 98,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.2",
    "why": "One point of coverage. The « de moins en moins » construction has been yours since rank 4 and the spectacle bank since rank 11, so nothing here is new. Its only real use is as a timed rehearsal — 35 minutes, 250 words, no notes. Skip it before you skip a proofreading pass."
   },
   {
    "rank": 47,
    "badge": 15,
    "cum_pool": 98,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.2",
    "why": "No coverage gain and no new components. Rank 4 built the projection apparatus and rank 30 the manual-skills angle; this is a recombination of the two. Twenty minutes to adapt an essay you already have. Low yield — the honest reason it is not at rank 65 is that handwriting is a plausible exam subject, nothing more."
   },
   {
    "rank": 48,
    "badge": 21,
    "cum_pool": 98,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "Nothing installed, and coverage does not move. Telework came at rank 5 and inequality of means at rank 8; the question mark in the affirmation is the only thing that differs. Twenty-five minutes. Low yield, worth it only if telework feels likely to you."
   },
   {
    "rank": 49,
    "badge": 30,
    "cum_pool": 98,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "Zero new components. Minors' autonomy arrived at rank 7 and the family bank at rank 12, and this is those two on a smaller subject. Its one virtue is that the bounded position is obvious — « à condition que la somme reste modeste et l'usage discuté » — so it makes a fast subjunctive rehearsal. Otherwise skip."
   },
   {
    "rank": 50,
    "badge": 39,
    "cum_pool": 98,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "No new machinery, no coverage gain. The obligation architecture makes this easy to attack on feasibility — who checks, and what follows if you do not — but that is rank 1's move, not this prompt's. Twenty-five minutes. Genuinely optional at this depth."
   },
   {
    "rank": 51,
    "badge": 46,
    "cum_pool": 98,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "Nothing new, and coverage stays put. Classroom technology, the digital divide and the third way were all installed by rank 12. It is a clean subject for one more rehearsal of the effet pervers, which B2 rewards on 24% of the section — but that is the entire case for it. Low yield."
   },
   {
    "rank": 52,
    "badge": 50,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "One point of coverage and no new components. The transport ban came at rank 15 and international comparison at rank 10, so the only fresh element is the « tant que » scope, which takes five minutes to add to an essay you have. Twenty minutes in total. Skip it if you are tired."
   },
   {
    "rank": 53,
    "badge": 52,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "No coverage movement, nothing installed. Screen time, addiction and réguler plutôt qu'interdire were all built by rank 7. A limit rather than an outright ban does make the third way slightly easier to argue, which is mildly useful practice. Low yield — skip it before you skip sleep."
   },
   {
    "rank": 54,
    "badge": 31,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "Zero new components. Rank 13 gave you the value-of-creation bank and the definitional move on « inutile », and this is that essay pointed at school. Twenty minutes to adapt. Low yield."
   },
   {
    "rank": 55,
    "badge": 32,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "Nothing new and no coverage gain. The compulsory-X architecture came at rank 2 and telework at rank 5, so this is an assembly job. It does make a decent last timed rehearsal of « il faudrait que le télétravail soit encouragé plutôt qu'imposé », which is the third way compressed into one clause. Otherwise safe to skip."
   },
   {
    "rank": 56,
    "badge": 38,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "No new machinery, no coverage movement. The ban architecture, the addiction bank and the marché noir counter-argument are all yours by rank 18. Twenty minutes, justified only because the effet pervers is unusually vivid here and the illustration writes itself. Low yield at this depth."
   },
   {
    "rank": 57,
    "badge": 41,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "Nothing installed and coverage flat. Surveillance and privacy came at rank 19, proportionality at rank 7. The « y compris au domicile » clause is a gift for the bounded position, since it lets you accept the principle and refuse the extension — B1 at 12%. Otherwise low yield."
   },
   {
    "rank": 58,
    "badge": 58,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "Zero new components. Language and identity arrived at rank 16 and the false-dichotomy refusal at rank 12, and this combines the two. Twenty minutes. Low yield and safe to skip."
   },
   {
    "rank": 59,
    "badge": 59,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "No coverage gain and nothing new. Dematerialisation came at rank 9 with the digital divide attached, so the exclusion argument is already written in your head. Fifteen minutes. Low yield — one of the safest items on the whole list to drop."
   },
   {
    "rank": 60,
    "badge": 60,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "Nothing installed, and coverage does not move. The individual-gestures bank came at rank 17, and the useful argument — that individual gestures are not where the tonnage is — is the premise refusal you learned at rank 3. Fifteen minutes. Low yield."
   },
   {
    "rank": 61,
    "badge": 65,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "An outlier with almost no transfer, and it arrives pre-scoped: the affirmation already contains « ça dépend », so the usual B1 nuance move is done for you. No new components and no coverage gain. Its one merit is being the easiest prompt in the set to take a genuinely nuanced position on, which makes it a decent confidence exercise the night before. Otherwise skip it."
   },
   {
    "rank": 62,
    "badge": 71,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "A death-of-print near-duplicate. Nothing new and no coverage movement — ranks 4 and 37 built every part of this one. Fifteen minutes to adapt if you want it. Low yield and safe to skip."
   },
   {
    "rank": 63,
    "badge": 22,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "Zero new components and zero coverage gain. Celebrity and merit came at rank 11, and the definitional move on « talent » at rank 3. Twenty minutes. Low yield — drop it without hesitation if the week gets tight."
   },
   {
    "rank": 64,
    "badge": 42,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "Nothing installed and coverage flat. The compulsory architecture is rank 2's and the arts bank is rank 13's, so this is a straight recombination with no new French in it at all. Fifteen minutes. Low yield, safe to skip."
   },
   {
    "rank": 65,
    "badge": 43,
    "cum_pool": 99,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "No new components and no coverage movement. Stress and rhythm came at rank 2, the health-policy bank at rank 1, and the sweeping premise is refused the way you learned at rank 3. Twenty minutes if you want one last work-family rehearsal. Low yield and safe to skip."
   },
   {
    "rank": 66,
    "badge": 49,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "Rank 66 because every part of this is already built: the ban architecture, the ageing bank from rank 23, and the courteous refusal of a patronising premise from rank 25. Pool coverage reaches 100% here, but that is arithmetic rather than progress — the last point comes from drilling the item, not from learning anything in it. Fifteen minutes for one point. Skip it before you skip sleep."
   },
   {
    "rank": 67,
    "badge": 61,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "Nothing new and no coverage gain; guidance and diplomas came at rank 14. The affirmation is vague enough that the real work is deciding what it means, and you learned that at rank 3. Twenty minutes for nothing you do not already own. Low yield — skip."
   },
   {
    "rank": 68,
    "badge": 66,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "An existential outlier with the lowest transfer in the set. The past hypothetical it might once have taught you was installed at rank 21, so nothing here is new and coverage does not move. Twenty minutes for zero machinery. Skip this one."
   },
   {
    "rank": 69,
    "badge": 67,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "A near-duplicate of the prompt at rank 7, with the same banks and the same architecture. No new components, no coverage gain. Handed this in the real exam, you would write your rank-7 essay with two nouns changed. Skip it."
   },
   {
    "rank": 70,
    "badge": 68,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "The third transport ban in the set and the least distinctive of them. Ranks 15 and 52 already contain every argument, every connector and the whole third-way move this needs. Nothing new, no coverage gain. Skip it."
   },
   {
    "rank": 71,
    "badge": 69,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "The mirror of the prompt at rank 44 — same banks, same definitional move, comparative rather than negative. Zero new components and zero coverage movement. Ten minutes to flip the essay you already have. Skip it."
   },
   {
    "rank": 72,
    "badge": 72,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "The fourth and last death-of-print variant. Ranks 4, 37 and 62 have already built the projection markers, the reading bank and the writing bank; this one merely stacks two predictions into a single sentence. No new components, no coverage gain. Skip it."
   },
   {
    "rank": 73,
    "badge": 73,
    "cum_pool": 100,
    "cum_lang": 100,
    "floor": "Written Section B ≈ 7.3",
    "why": "This is the same affirmation as rank 27, word for word apart from « en bonne santé » for « en santé ». There is nothing to install, nothing to cover, and no reason at all to write it twice. It is 73rd for the honest reason that it is a duplicate. Skip it."
   }
  ]
 }
};

if (typeof window !== "undefined") window.TEF_COVERAGE = TEF_COVERAGE;
