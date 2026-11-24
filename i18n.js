(function () {
  var STORAGE_KEY = 'stepvault_site_lang';

  var TRANSLATIONS = {
    en: {
      page_title_home: 'StepVault — Local SOP & Step-by-Step Guide Recorder',
      page_title_privacy: 'Privacy Policy — StepVault',
      page_title_terms: 'Terms & Refund Policy — StepVault',
      brand_sub: 'Local SOP & Guide Recorder',
      legal_header_brand: 'StepVault — Local SOP & Guide Recorder',
      nav_pill: '100% Local Vault',
      nav_how: 'How It Works',
      nav_why_pro: 'Why Pro',
      nav_pricing: 'Pricing',
      nav_faq: 'FAQ',
      nav_cta: 'Get Pro — €19',

      hero_pill: 'Chrome, Edge, Brave & Firefox • Zero Cloud Uploads • No Subscriptions',
      hero_title: 'Turn any browser workflow into a clean, redacted SOP in 60 seconds.',
      hero_subtitle:
        'Click through your task once. <strong>StepVault</strong> automatically captures smart-cropped screenshots, writes step instructions in English or Italian, pixelates sensitive PII on your device, and exports client-ready <strong>PDF, HTML &amp; Markdown</strong> guides.',
      hero_cta_primary: 'Buy Pro Lifetime License — €19',
      hero_cta_secondary: 'See How It Works',
      hero_trust:
        'Pay once, own forever • Up to 3 browsers per key • 14-day money-back guarantee via Polar.sh',

      mock_accent: 'Accent:',
      mock_autoblur: 'Auto-Blur All PII (4 detected)',
      mock_export: 'Export (PDF / HTML / ZIP / MD)',
      mock_step_title: 'Click the "Export CSV Report" button',
      mock_tip:
        '<strong>Tip:</strong> Double-check the quarterly billing filter before downloading the ledger.',
      mock_customer: 'Customer:',

      how_eyebrow: 'How StepVault Works',
      how_title: 'From live browser clicks to polished documentation in 4 steps',
      how_lead:
        'No video editing, no manual screenshot cropping, and no uploading confidential client screens to third-party servers.',
      how_1_title: 'Hit Record',
      how_1_body:
        'Open the StepVault popup on any web app, choose <strong>English or Italian</strong> step descriptions, and perform your procedure as usual.',
      how_2_title: 'Auto-Capture & Mask',
      how_2_body:
        'Clicks, form inputs, and dropdowns are captured across tabs. Passwords and API tokens are masked at source (<code>••••••••</code>) while a floating Shadow-DOM HUD tracks progress without appearing in your shots.',
      how_3_title: 'Polish & Redact',
      how_3_body:
        'Open the full-tab Local Editor to reorder steps, add <strong>Tip / Warning / Info</strong> callouts, switch between Smart Zoom Crop and Full Viewport, and pixelate sensitive areas.',
      how_4_title: 'Flatten & Share',
      how_4_body:
        'Redactions are permanently baked into exported JPEG pixels so hidden data can never be recovered. Export to branded <strong>PDF, offline HTML, ZIP, or Markdown</strong> in one click.',

      feat_eyebrow: 'Local-First Engine',
      feat_title: 'Built for privacy-conscious teams, agencies & consultants',
      feat_lead:
        'Document internal ERPs, banking portals, AWS/Cloud consoles, healthcare systems, and client admin panels with complete GDPR peace of mind.',
      feat_1_title: 'Smart Zoom Crop & Click Rings',
      feat_1_body:
        'Automatically frames the action around every click with numbered badges and highlight rings — or switch any step to full-screen view non-destructively.',
      feat_2_title: 'Deep Local PII Detection',
      feat_2_body:
        'Scans visible text and inputs on-device for <strong>Emails, IBANs, Luhn-verified Credit Cards, Tax IDs, Phone Numbers, JWTs, and API Keys</strong>.',
      feat_3_title: 'EN & IT Step Generation',
      feat_3_body:
        'Extracts accessible labels, button names, placeholders, and select options to write clear instructions automatically in English or Italian.',
      feat_4_title: 'Interactive Canvas Annotator',
      feat_4_body:
        'Draw custom <strong>Pixelate Blur</strong>, <strong>Solid Blackout</strong>, or <strong>Highlight</strong> boxes directly on any screenshot with instant undo.',
      feat_5_title: 'Section Headers & Callouts',
      feat_5_body:
        'Break complex SOPs into logical sections and attach highlighted Tip, Warning, or Info banners so teammates never miss critical prerequisites.',
      feat_6_title: '100% Offline IndexedDB Vault',
      feat_6_body:
        'Guides live inside your browser\'s local IndexedDB storage with full <code>.stepvault.json</code> backup and restore — zero accounts, zero telemetry.',

      pro_eyebrow: 'Why StepVault Pro',
      pro_title:
        'Everything you need to deliver client-ready SOPs — for less than one month of a cloud tool',
      pro_lead:
        'StepVault Free lets you record and copy text steps forever. Upgrading to <strong>StepVault Pro (€19 one-time)</strong> turns your browser into a complete, white-label documentation studio.',
      pro_1_title: 'Branded A4 PDF & Standalone HTML',
      pro_1_body:
        'Generate print-ready A4 PDFs complete with dark cover headers, numbered visual steps, color-coded callouts, and page footers — or export a <strong>single offline <code>.html</code> file</strong> clients can open in any browser without accounts or logins.',
      pro_1_note: '✓ Ready to send to clients, new hires, or compliance auditors immediately',
      pro_2_title: '1-Click Auto-Blur All PII',
      pro_2_body:
        'Recording a 20-step billing or CRM workflow? Instead of manually blurring customer emails, IBANs, and keys screenshot by screenshot, click <strong>Auto-Blur All PII</strong> once to redact the entire guide simultaneously.',
      pro_2_note: '✓ Saves 15–30 minutes of tedious manual redaction per guide',
      pro_3_title: 'Notion, GitHub & Confluence ZIP Bundles',
      pro_3_body:
        'Export a structured <code>.zip</code> containing <code>guide.md</code>, <code>guide.html</code>, and cleanly numbered <code>images/step-01.jpg</code> files — or a single self-contained <code>.md</code> file with embedded images for wikis and Git repos.',
      pro_3_note: '✓ Zero vendor lock-in — your docs live wherever your team works',
      pro_4_title: 'Custom Company & Agency Branding',
      pro_4_body:
        'Replace the default StepVault label with your own <strong>company, agency, or department name</strong> across PDF cover headers, page footers, and HTML hero banners, paired with your brand\'s accent color.',
      pro_4_note: '✓ Deliver polished handover manuals under your own brand identity',

      cmp_col_1: 'What matters',
      cmp_col_2: 'StepVault Pro',
      cmp_col_3: 'Cloud SOP SaaS (Scribe, Tango…)',
      cmp_col_4: 'Manual Screenshots + Docs',
      cmp_r1_c1: '<strong>Cost over 2 years</strong>',
      cmp_r1_c2: '€19 once (€0/yr after)',
      cmp_r1_c3: '€550 – €840+ per user',
      cmp_r1_c4: '€0 (costs hours of your time)',
      cmp_r2_c1: '<strong>Where screenshots go</strong>',
      cmp_r2_c2: '100% local in your browser',
      cmp_r2_c3: 'Uploaded to external vendor cloud',
      cmp_r2_c4: 'Local, scattered on desktop',
      cmp_r3_c1: '<strong>GDPR &amp; client NDA safety</strong>',
      cmp_r3_c2: 'Zero cloud DPA needed',
      cmp_r3_c3: 'Requires vendor review & DPA',
      cmp_r3_c4: 'High risk of forgetting a blur',
      cmp_r4_c1: '<strong>Sensitive PII redaction</strong>',
      cmp_r4_c2: '1-click Auto-Blur + flattened pixels',
      cmp_r4_c3: 'Paid add-on tier (often €30+/mo)',
      cmp_r4_c4: 'Manual box-by-box in image editor',
      cmp_r5_c1: '<strong>Time to create a 15-step SOP</strong>',
      cmp_r5_c2: '~1 minute',
      cmp_r5_c3: '~2 minutes (requires cloud sync)',
      cmp_r5_c4: '35 – 45 minutes',
      cmp_r6_c1: '<strong>Offline access &amp; file ownership</strong>',
      cmp_r6_c2: 'Full PDF, HTML, MD & ZIP files',
      cmp_r6_c3: 'Hosted links break if you cancel',
      cmp_r6_c4: 'Manual Word / Google Doc',

      price_eyebrow: 'Pricing',
      price_title: 'Pay once, own it forever',
      price_lead:
        'One saved afternoon of manual screenshot editing already pays for StepVault Pro several times over.',
      free_tier: 'StepVault Free',
      free_amount: '€0 <span>forever</span>',
      free_desc: 'Ideal for personal notes & testing the local recorder.',
      free_f1: 'Unlimited local guide recording (EN & IT)',
      free_f2: 'Smart zoom crop & numbered click markers',
      free_f3: 'Manual blur, blackout & highlight canvas tools',
      free_f4: 'Copy step instructions as plain Markdown',
      free_f5: 'Local IndexedDB vault & JSON backup/import',
      free_btn: 'Available for Chrome & Firefox',

      pro_popular: 'Best Value • Lifetime',
      pro_tier: 'StepVault Pro — Lifetime License',
      pro_amount: '€19 <span>one-time</span>',
      pro_desc: 'Full visual export suite & automated PII redaction. No recurring fees.',
      pro_f1: '<strong>Everything in Free</strong>, plus:',
      pro_f2: '<strong>Branded A4 PDF export</strong> with cover &amp; page footers',
      pro_f3: '<strong>Standalone offline HTML</strong> single-file guides',
      pro_f4: '<strong>Markdown + Images (<code>.zip</code>)</strong> &amp; embedded <code>.md</code>',
      pro_f5: '<strong>1-Click Auto-Blur All PII</strong> across every step',
      pro_f6: '<strong>Custom company / agency</strong> header &amp; footer label',
      pro_f7: '<strong>Activate on up to 3 browsers</strong> (switch anytime)',
      pro_f8: '<strong>Lifetime updates</strong> &amp; 14-day refund guarantee',
      pro_btn: 'Buy Pro Lifetime License — €19',
      pro_footnote: 'Instant license key delivery & VAT invoice via Polar.sh',

      faq_eyebrow: 'FAQ',
      faq_title: 'Frequently asked questions',
      faq_q1: 'Is €19 really a one-time payment, with no subscription?',
      faq_a1:
        'Yes. You pay €19 once and receive a permanent Lifetime License key. There are no monthly renewals, per-guide limits, or cloud storage fees — because all processing runs on your own machine.',
      faq_q2: 'Do my screenshots or client data ever touch an external server?',
      faq_a2:
        'Never. Screenshots, DOM labels, PII scans, and PDF/HTML/ZIP exports are processed 100% locally inside your browser and stored in local IndexedDB. The only network request StepVault ever makes is verifying your license key string with Polar.sh.',
      faq_q3: 'Can someone remove the blur or recover redacted text from exported files?',
      faq_a3:
        'No. Before exporting to PDF, HTML, Markdown, or ZIP, StepVault permanently flattens pixelation and solid blackout boxes directly into the JPEG image bitmap. The underlying sensitive pixels are overwritten and cannot be reversed.',
      faq_q4: 'How many devices can I activate, and what if I buy a new computer?',
      faq_a4:
        'Each Pro license key lets you activate up to <strong>3 browser instances simultaneously</strong> (for example, work desktop, laptop, and Firefox). You can click <em>"Deactivate on this browser"</em> anytime inside the extension to free up a slot for a new machine, and your key remains valid for life.',
      faq_q5: 'Does StepVault Pro work offline?',
      faq_a5:
        'Yes. Recording, smart cropping, PII detection, editing, and exporting all work completely offline. Once your license is activated, StepVault keeps Pro unlocked during offline travel or isolated network sessions.',
      faq_q6: 'Can I get a business VAT invoice, and what is the refund policy?',
      faq_a6:
        'Checkout is handled by <strong>Polar.sh</strong> (our Merchant of Record), which automatically provides tax/VAT-compliant invoices for companies and freelancers worldwide. If StepVault Pro doesn\'t fit your workflow, email us within <strong>14 days of purchase</strong> for a full refund.',

      banner_pill: 'Private by Design • Owned Forever',
      banner_title: 'Stop paying €300+/year to upload private workflows to the cloud.',
      banner_body:
        'Get unlimited branded PDF, HTML, ZIP & Markdown SOP exports plus 1-click local PII redaction for a single €19 payment.',
      banner_cta: 'Unlock StepVault Pro — €19 One-Time',

      footer_copy: '© StepVault — Local SOP & Guide Recorder.',
      footer_privacy: 'Privacy Policy',
      footer_terms: 'Terms & Refunds',
      footer_support: 'Contact Support',

      back_home: '← Back to home',
      legal_updated: '<em>Last updated: November 2026</em>',

      priv_h1: 'Privacy Policy',
      priv_s1_h2: 'Local Data Processing',
      priv_s1_p:
        'StepVault is a local-first browser extension. All screenshots, recorded steps, text descriptions, PII detections, and exported files (PDF, HTML, Markdown, ZIP) are processed and stored <strong>exclusively on your device</strong> inside your browser\'s local IndexedDB storage.',
      priv_s2_h2: 'Zero Data Collection',
      priv_s2_li1:
        'We do <strong>not</strong> collect, transmit, or store your browsing history, screenshots, or guide contents on external servers.',
      priv_s2_li2:
        'We do <strong>not</strong> embed analytics, trackers, or third-party advertising scripts.',
      priv_s3_h2: 'License Key Verification',
      priv_s3_p:
        'Checkout and invoicing for StepVault Pro are handled by our Merchant of Record, <strong>Polar.sh</strong>. When activating or verifying a Pro license key, only the license key string and a device label are sent to Polar\'s API to validate activation.',
      priv_s4_h2: 'Contact',
      priv_s4_p:
        'Questions? Contact <a class="accent-link" href="mailto:giuseppecaut57@gmail.com">giuseppecaut57@gmail.com</a>.',

      terms_h1: 'Terms of Service & Refund Policy',
      terms_s1_h2: 'License',
      terms_s1_p:
        'StepVault Free is available free of charge. Purchasing <strong>StepVault Pro — Lifetime License</strong> grants a non-exclusive license to activate Pro features on up to 3 browser instances per license key.',
      terms_s2_h2: 'Billing & Taxes',
      terms_s2_p:
        'Payments and invoicing are processed by our Merchant of Record, <strong>Polar.sh</strong>, which handles payment processing and applicable VAT/sales taxes.',
      terms_s3_h2: 'Refund Policy',
      terms_s3_p:
        'If StepVault Pro does not function as described, you may request a full refund within <strong>14 days of purchase</strong> by contacting <a class="accent-link" href="mailto:giuseppecaut57@gmail.com">giuseppecaut57@gmail.com</a> with your order receipt.',
      terms_s4_h2: 'Local Storage Notice',
      terms_s4_p:
        'Because StepVault stores guides solely in your local browser storage, please export JSON or PDF backups before clearing browser data or uninstalling the extension.',
    },

    it: {
      page_title_home: 'StepVault — Registratore Locale di Guide e Procedure (SOP)',
      page_title_privacy: 'Informativa sulla Privacy — StepVault',
      page_title_terms: 'Termini di Servizio e Rimborsi — StepVault',
      brand_sub: 'Registratore Locale di Guide e SOP',
      legal_header_brand: 'StepVault — Registratore Locale di Guide e SOP',
      nav_pill: '100% Locale',
      nav_how: 'Come Funziona',
      nav_why_pro: 'Perché Pro',
      nav_pricing: 'Prezzi',
      nav_faq: 'FAQ',
      nav_cta: 'Passa a Pro — €19',

      hero_pill: 'Estensione Chrome, Edge, Brave e Firefox • Zero Cloud • Nessun Abbonamento',
      hero_title:
        'Trasforma qualsiasi procedura web in una guida pronta e oscurata in 60 secondi.',
      hero_subtitle:
        'Esegui l\'operazione una sola volta. <strong>StepVault</strong> cattura screenshot ritagliati automaticamente, genera le istruzioni in italiano o inglese, oscura i dati sensibili (PII) sul tuo PC ed esporta guide professionali in <strong>PDF, HTML e Markdown</strong>.',
      hero_cta_primary: 'Acquista Licenza a Vita Pro — €19',
      hero_cta_secondary: 'Scopri Come Funziona',
      hero_trust:
        'Paghi una volta, tuo per sempre • Fino a 3 browser per licenza • Rimborso garantito 14 giorni via Polar.sh',

      mock_accent: 'Colore:',
      mock_autoblur: 'Oscura Tutti i Dati PII (4 rilevati)',
      mock_export: 'Esporta (PDF / HTML / ZIP / MD)',
      mock_step_title: 'Clicca sul pulsante "Export CSV Report"',
      mock_tip:
        '<strong>Consiglio:</strong> Verifica il filtro del trimestre contabile prima di scaricare il report.',
      mock_customer: 'Cliente:',

      how_eyebrow: 'Come Funziona StepVault',
      how_title: 'Dai clic nel browser a una documentazione impeccabile in 4 passaggi',
      how_lead:
        'Niente montaggio video, niente ritagli manuali e nessun caricamento di schermate riservate dei tuoi clienti su server esterni.',
      how_1_title: 'Avvia la Registrazione',
      how_1_body:
        'Apri il popup di StepVault su qualsiasi sito o gestionale, scegli la lingua dei passaggi (<strong>Italiano o Inglese</strong>) e svolgi normalmente la procedura.',
      how_2_title: 'Cattura e Maschera',
      how_2_body:
        'Clic, campi compilati e menu a tendina vengono acquisiti tra le schede. Password e token API sono mascherati alla fonte (<code>••••••••</code>), mentre la barra flottante in Shadow-DOM conta gli step senza mai comparire nelle foto.',
      how_3_title: 'Rifinisci e Oscura',
      how_3_body:
        'Apri l\'Editor Locale a schermo intero per riordinare i passaggi, inserire avvisi <strong>Tip / Warning / Info</strong>, alternare Smart Zoom Crop e vista intera e pixelare i dati sensibili.',
      how_4_title: 'Esporta e Condividi',
      how_4_body:
        'Le censure vengono fuse in modo permanente nei pixel JPEG così nessuno potrà mai rimuoverle. Esporta con un clic in <strong>PDF brandizzato, HTML offline, ZIP o Markdown</strong>.',

      feat_eyebrow: 'Motore 100% Locale',
      feat_title: 'Progettato per team, agenzie, studi e consulenti attenti alla privacy',
      feat_lead:
        'Documenta gestionali ERP, home banking, console AWS/Cloud, portali sanitari e pannelli admin dei clienti nel pieno rispetto del GDPR.',
      feat_1_title: 'Smart Zoom Crop e Indicatori Clic',
      feat_1_body:
        'Inquadra automaticamente l\'azione attorno a ogni clic con badge numerati ed evidenziazione — oppure passa alla schermata intera in qualsiasi momento senza perdere dati.',
      feat_2_title: 'Rilevamento PII Locale Avanzato',
      feat_2_body:
        'Individua direttamente sul dispositivo <strong>Email, IBAN, Carte di Credito (verifica Luhn), Codici Fiscali, Numeri di Telefono, JWT e API Key</strong>.',
      feat_3_title: 'Titoli Automatici in IT e EN',
      feat_3_body:
        'Legge etichette accessibili, testi dei pulsanti, placeholder e opzioni selezionate per scrivere istruzioni chiare in italiano o in inglese.',
      feat_4_title: 'Annotatore Canvas Interattivo',
      feat_4_body:
        'Disegna rettangoli di <strong>Pixelatura (Blur)</strong>, <strong>Oscuramento Nero</strong> o <strong>Evidenziazione</strong> direttamente sugli screenshot con annullamento istantaneo.',
      feat_5_title: 'Sezioni e Avvisi Evidenziati',
      feat_5_body:
        'Suddividi le procedure complesse in sezioni logiche e aggiungi riquadri di Consiglio, Attenzione o Nota per evitare errori operativi.',
      feat_6_title: 'Archivio Offline IndexedDB',
      feat_6_body:
        'Tutte le guide restano salvate nel database locale IndexedDB del browser con backup e ripristino completo <code>.stepvault.json</code> — zero account, zero telemetria.',

      pro_eyebrow: 'Perché Scegliere StepVault Pro',
      pro_title:
        'Tutto ciò che serve per consegnare guide professionali — a meno di un singolo mese di un tool cloud',
      pro_lead:
        'StepVault Free ti permette di registrare e copiare i passaggi testuali gratis per sempre. Con <strong>StepVault Pro (€19 una tantum)</strong> trasformi il browser in uno studio completo di documentazione white-label.',
      pro_1_title: 'PDF A4 Brandizzato e HTML Offline',
      pro_1_body:
        'Genera PDF A4 pronti per la stampa con copertina scura, passaggi numerati, riquadri colorati e piè di pagina — oppure un <strong>singolo file <code>.html</code> offline</strong> apribile da chiunque senza account o login.',
      pro_1_note: '✓ Pronto da inviare subito a clienti, nuovi colleghi o auditor',
      pro_2_title: 'Oscuramento PII Automatico in 1 Clic',
      pro_2_body:
        'Stai documentando una procedura di fatturazione o CRM da 20 passaggi? Invece di censurare a mano email, IBAN e chiavi foto per foto, clicca <strong>Auto-Blur All PII</strong> per oscurare l\'intera guida in un secondo.',
      pro_2_note: '✓ Risparmia 15–30 minuti di oscuramento manuale a ogni guida',
      pro_3_title: 'Pacchetti ZIP per Notion, GitHub e Confluence',
      pro_3_body:
        'Esporta un archivio <code>.zip</code> ordinato con <code>guide.md</code>, <code>guide.html</code> e cartella <code>images/step-01.jpg</code> — oppure un singolo file <code>.md</code> con immagini incorporate per wiki aziendali e repository Git.',
      pro_3_note: '✓ Zero lock-in: la documentazione resta tua su qualsiasi piattaforma',
      pro_4_title: 'Logo Testuale Azienda o Agenzia (White-Label)',
      pro_4_body:
        'Sostituisci la dicitura StepVault con il <strong>nome della tua azienda, studio o agenzia</strong> nell\'intestazione e nel piè di pagina dei PDF e nei banner HTML, abbinato al tuo colore aziendale.',
      pro_4_note: '✓ Consegna manuali operativi curati con la tua identità visiva',

      cmp_col_1: 'Cosa conta davvero',
      cmp_col_2: 'StepVault Pro',
      cmp_col_3: 'SaaS Cloud (Scribe, Tango…)',
      cmp_col_4: 'Screenshot Manuali + Word',
      cmp_r1_c1: '<strong>Costo in 2 anni</strong>',
      cmp_r1_c2: '€19 una volta sola (€0/anno dopo)',
      cmp_r1_c3: '€550 – €840+ per utente',
      cmp_r1_c4: '€0 (ma costa ore del tuo tempo)',
      cmp_r2_c1: '<strong>Dove finiscono gli screenshot</strong>',
      cmp_r2_c2: '100% in locale nel tuo browser',
      cmp_r2_c3: 'Caricati sui server cloud del fornitore',
      cmp_r2_c4: 'In locale, sparsi sul desktop',
      cmp_r3_c1: '<strong>Conformità GDPR e NDA clienti</strong>',
      cmp_r3_c2: 'Nessun DPA cloud necessario',
      cmp_r3_c3: 'Richiede verifica fornitori e DPA',
      cmp_r3_c4: 'Alto rischio di dimenticare dati visibili',
      cmp_r4_c1: '<strong>Oscuramento dati sensibili (PII)</strong>',
      cmp_r4_c2: 'Auto-Blur in 1 clic + pixel fusi',
      cmp_r4_c3: 'Spesso riservato ai piani da €30+/mese',
      cmp_r4_c4: 'Rettangoli disegnati a mano uno a uno',
      cmp_r5_c1: '<strong>Tempo per una guida da 15 step</strong>',
      cmp_r5_c2: '~1 minuto',
      cmp_r5_c3: '~2 minuti (richiede upload cloud)',
      cmp_r5_c4: '35 – 45 minuti',
      cmp_r6_c1: '<strong>Uso offline e proprietà dei file</strong>',
      cmp_r6_c2: 'File PDF, HTML, MD e ZIP completi',
      cmp_r6_c3: 'I link smettono di funzionare se disdici',
      cmp_r6_c4: 'Documento Word / Docs manuale',

      price_eyebrow: 'Prezzi',
      price_title: 'Paghi una volta, è tuo per sempre',
      price_lead:
        'Basta un solo pomeriggio risparmiato rispetto agli screenshot manuali per ripagare StepVault Pro diverse volte.',
      free_tier: 'StepVault Free',
      free_amount: '€0 <span>per sempre</span>',
      free_desc: 'Ideale per appunti personali e per provare il registratore locale.',
      free_f1: 'Registrazione locale illimitata (IT e EN)',
      free_f2: 'Smart zoom crop e indicatori clic numerati',
      free_f3: 'Strumenti manuali di blur, oscuramento ed evidenziazione',
      free_f4: 'Copia dei passaggi come testo Markdown semplice',
      free_f5: 'Archivio locale IndexedDB e backup/import JSON',
      free_btn: 'Disponibile per Chrome e Firefox',

      pro_popular: 'Più Scelto • A Vita',
      pro_tier: 'StepVault Pro — Licenza a Vita',
      pro_amount: '€19 <span>una tantum</span>',
      pro_desc: 'Suite completa di esportazione visiva e oscuramento PII automatico. Zero canoni.',
      pro_f1: '<strong>Tutto ciò che è in Free</strong>, più:',
      pro_f2: '<strong>Esportazione PDF A4 brandizzato</strong> con copertina e piè di pagina',
      pro_f3: '<strong>HTML singolo offline</strong> condivisibile ovunque',
      pro_f4: '<strong>Markdown + Immagini (<code>.zip</code>)</strong> e file <code>.md</code> incorporato',
      pro_f5: '<strong>Auto-Blur di tutti i PII in 1 clic</strong> su tutti gli step',
      pro_f6: '<strong>Intestazione personalizzata</strong> con nome azienda / agenzia',
      pro_f7: '<strong>Attivabile su fino a 3 browser</strong> (spostabile quando vuoi)',
      pro_f8: '<strong>Aggiornamenti a vita</strong> e garanzia rimborso 14 giorni',
      pro_btn: 'Acquista Licenza a Vita Pro — €19',
      pro_footnote: 'Consegna immediata della chiave e fattura IVA tramite Polar.sh',

      faq_eyebrow: 'FAQ',
      faq_title: 'Domande frequenti',
      faq_q1: '€19 è davvero un pagamento unico senza abbonamento?',
      faq_a1:
        'Sì. Paghi €19 una sola volta e ricevi una chiave di licenza valida a vita (Lifetime). Non ci sono canoni mensili, limiti sul numero di guide create o costi cloud — perché tutta l\'elaborazione avviene sul tuo computer.',
      faq_q2: 'I miei screenshot o i dati dei clienti passano mai su un server esterno?',
      faq_a2:
        'Mai. Screenshot, testi estratti, scansione PII ed esportazioni PDF/HTML/ZIP vengono elaborati al 100% localmente nel browser e salvati in IndexedDB. L\'unica richiesta di rete effettuata da StepVault serve esclusivamente a verificare la validità della chiave di licenza con Polar.sh.',
      faq_q3: 'Qualcuno può rimuovere il blur o recuperare i testi oscurati dai file esportati?',
      faq_a3:
        'No. Prima di generare PDF, HTML, Markdown o ZIP, StepVault fonde in modo permanente la pixelatura e i riquadri neri direttamente nella bitmap JPEG dell\'immagine: i pixel originali vengono sovrascritti in modo irreversibile.',
      faq_q4: 'Su quanti dispositivi posso attivare Pro e cosa succede se cambio PC?',
      faq_a4:
        'Ogni chiave Pro consente di attivare fino a <strong>3 istanze browser contemporaneamente</strong> (es. PC ufficio, portatile e Firefox). Puoi cliccare <em>"Deactivate on this browser"</em> in qualsiasi momento nell\'estensione per liberare uno slot e spostarlo sul nuovo computer.',
      faq_q5: 'StepVault Pro funziona anche offline?',
      faq_a5:
        'Sì. Registrazione, ritaglio intelligente, rilevamento PII, modifica ed esportazione funzionano interamente offline. Una volta attivata la licenza, Pro resta disponibile anche quando viaggi o lavori senza connessione.',
      faq_q6: 'Posso ricevere fattura con Partita IVA e come funziona il rimborso?',
      faq_a6:
        'Il pagamento è gestito da <strong>Polar.sh</strong> (Merchant of Record ufficiale), che emette automaticamente fattura conforme per aziende, studi e liberi professionisti. Se StepVault Pro non soddisfa le tue esigenze, puoi richiedere il <strong>rimborso completo entro 14 giorni</strong>.',

      banner_pill: 'Privacy Totale • Tuo Per Sempre',
      banner_title: 'Basta pagare oltre €300/anno per caricare procedure riservate sul cloud.',
      banner_body:
        'Ottieni esportazioni illimitate in PDF, HTML, ZIP e Markdown più l\'oscuramento PII automatico con un unico pagamento da €19.',
      banner_cta: 'Sblocca StepVault Pro — €19 Una Tantum',

      footer_copy: '© StepVault — Registratore Locale di Guide e SOP.',
      footer_privacy: 'Informativa Privacy',
      footer_terms: 'Termini e Rimborsi',
      footer_support: 'Contatta il Supporto',

      back_home: '← Torna alla home',
      legal_updated: '<em>Ultimo aggiornamento: Novembre 2026</em>',

      priv_h1: 'Informativa sulla Privacy',
      priv_s1_h2: 'Elaborazione Locale dei Dati',
      priv_s1_p:
        'StepVault è un\'estensione browser progettata in modalità local-first. Tutti gli screenshot, i passaggi registrati, le descrizioni testuali, i rilevamenti PII e i file esportati (PDF, HTML, Markdown, ZIP) vengono elaborati e archiviati <strong>esclusivamente sul tuo dispositivo</strong> nel database locale IndexedDB del browser.',
      priv_s2_h2: 'Zero Raccolta Dati',
      priv_s2_li1:
        '<strong>Non</strong> raccogliamo, trasmettiamo né salviamo cronologia di navigazione, screenshot o contenuti delle guide su server esterni.',
      priv_s2_li2:
        '<strong>Non</strong> integriamo analytics, traccianti o script pubblicitari di terze parti.',
      priv_s3_h2: 'Verifica della Chiave di Licenza',
      priv_s3_p:
        'Il pagamento e la fatturazione di StepVault Pro sono gestiti dal nostro Merchant of Record, <strong>Polar.sh</strong>. Durante l\'attivazione o la verifica di una licenza Pro, vengono inviati alle API di Polar esclusivamente il codice della chiave e un\'etichetta identificativa dell\'estensione.',
      priv_s4_h2: 'Contatti',
      priv_s4_p:
        'Domande? Scrivici a <a class="accent-link" href="mailto:giuseppecaut57@gmail.com">giuseppecaut57@gmail.com</a>.',

      terms_h1: 'Termini di Servizio e Politica di Rimborso',
      terms_s1_h2: 'Licenza d\'Uso',
      terms_s1_p:
        'StepVault Free è utilizzabile gratuitamente. L\'acquisto di <strong>StepVault Pro — Lifetime License</strong> concede una licenza non esclusiva per attivare le funzionalità Pro su un massimo di 3 istanze browser contemporanee per ciascuna chiave.',
      terms_s2_h2: 'Fatturazione e Imposte',
      terms_s2_p:
        'I pagamenti e la fatturazione sono gestiti dal nostro Merchant of Record, <strong>Polar.sh</strong>, che si occupa dell\'elaborazione del pagamento e dell\'applicazione dell\'IVA o delle imposte previste.',
      terms_s3_h2: 'Politica di Rimborso',
      terms_s3_p:
        'Se StepVault Pro non funziona come descritto, puoi richiedere il rimborso integrale entro <strong>14 giorni dall\'acquisto</strong> scrivendo a <a class="accent-link" href="mailto:giuseppecaut57@gmail.com">giuseppecaut57@gmail.com</a> con la ricevuta dell\'ordine.',
      terms_s4_h2: 'Avviso sull\'Archiviazione Locale',
      terms_s4_p:
        'Poiché StepVault conserva le guide unicamente nello spazio di archiviazione locale del browser, ti consigliamo di esportare copie di backup in JSON o PDF prima di cancellare i dati di navigazione o disinstallare l\'estensione.',
    },
  };

  function detectInitialLanguage() {
    try {
      var params = new URLSearchParams(window.location.search);
      var urlLang = params.get('lang');
      if (urlLang === 'it' || urlLang === 'en') {
        localStorage.setItem(STORAGE_KEY, urlLang);
        return urlLang;
      }
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'it' || saved === 'en') {
        return saved;
      }
    } catch (_e) {
      // Ignore storage restrictions
    }
    var nav = (navigator.language || '').toLowerCase();
    return nav.indexOf('it') === 0 ? 'it' : 'en';
  }

  function applyLanguage(lang) {
    var safeLang = lang === 'it' ? 'it' : 'en';
    var dict = TRANSLATIONS[safeLang];
    if (!dict) return;

    document.documentElement.lang = safeLang;

    var titleKey = document.documentElement.getAttribute('data-title-key');
    if (titleKey && dict[titleKey]) {
      document.title = dict[titleKey];
    }

    var textNodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < textNodes.length; i++) {
      var el = textNodes[i];
      var key = el.getAttribute('data-i18n');
      if (key && dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    }

    var htmlNodes = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < htmlNodes.length; j++) {
      var htmlEl = htmlNodes[j];
      var htmlKey = htmlEl.getAttribute('data-i18n-html');
      if (htmlKey && dict[htmlKey] !== undefined) {
        htmlEl.innerHTML = dict[htmlKey];
      }
    }

    var buttons = document.querySelectorAll('[data-set-lang]');
    for (var k = 0; k < buttons.length; k++) {
      var btn = buttons[k];
      var isActive = btn.getAttribute('data-set-lang') === safeLang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    }

    try {
      localStorage.setItem(STORAGE_KEY, safeLang);
    } catch (_e) {
      // Ignore storage restrictions
    }
  }

  function initI18n() {
    var buttons = document.querySelectorAll('[data-set-lang]');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function (e) {
        var chosen = e.currentTarget.getAttribute('data-set-lang');
        if (chosen === 'en' || chosen === 'it') {
          applyLanguage(chosen);
        }
      });
    }
    applyLanguage(detectInitialLanguage());
  }

  if (typeof window !== 'undefined') {
    window.STEPVAULT_TRANSLATIONS = TRANSLATIONS;
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initI18n);
    } else {
      initI18n();
    }
  }
})();
