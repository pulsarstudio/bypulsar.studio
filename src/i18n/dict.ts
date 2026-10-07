// All public copy in three languages. Keys are flat dot-notation
// strings; markup uses [data-i18n="key"] for plain text and
// [data-i18n-html="key"] for translations that contain inline HTML
// (e.g. the Intro paragraph with <span class="intro-emph"> highlights).
//
// Keep keys stable — the runtime in Layout.astro looks them up by
// exact string match.

export type Locale = "en" | "es" | "fr";

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALES: Array<{ code: Locale; label: string; abbr: string }> = [
  { code: "en", label: "English", abbr: "EN" },
  { code: "es", label: "Español", abbr: "ES" },
  { code: "fr", label: "Français", abbr: "FR" },
];

type Dict = Record<string, string>;

export const en: Dict = {
  // Nav
  "nav.services": "Services",
  "nav.work": "Work",
  "nav.cadence": "Cadence",
  "nav.team": "Team",
  "nav.contact": "Contact",
  "nav.home": "Home",

  // Hero
  "hero.services.0": "Branding & creative direction",
  "hero.services.1": "Web design & development",
  "hero.services.2": "Mobile apps · Flutter",
  "hero.services.3": "Cadence — our SaaS",
  "hero.tagline": "Design and code for brands in motion.",
  "hero.description": "One signal, two operators. Design and code for the clubs, gyms and communities that move.",
  "hero.cta": "Book a call",

  // Intro
  "intro.bright": "We're Pulsar.",
  "intro.tagline": "Design and code for brands in motion.",
  "intro.sub.html": "One signal, two operators. Design and code for the <span class=\"intro-emph\">clubs</span>, <span class=\"intro-emph\">gyms</span> and <span class=\"intro-emph\">communities</span> that move.",
  "intro.cta": "Book a call",

  // Services section
  "services.eyebrow": "What we ship",
  "services.title": "services.",
  "services.subtitle": "Mix what fits — each service stands on its own.",
  "services.categories.label": "Categories",
  "services.cta": "Get started",
  "services.external.cadence": "Visit cadence.club",

  // Service items
  "services.cadence.title": "Cadence",
  "services.cadence.lead": "Our SaaS for active communities. A professional site your team runs by chat — no CMS, no admin panels, no admin training. Multi-tenant, with events, gallery, store and Cadence AI built in. The flagship product everything else plugs into.",
  "services.cadence.cta": "See Cadence",

  "services.brand.title": "Brand identity",
  "services.brand.lead": "A complete visual identity your members can spot from across the floor — logo, palette, typography, brand manual, applications across digital and print. We start with discovery (what makes your space yours), build the system, and ship a manual you can hand to anyone. Designed to scale: works on a flyer, a Story, a t-shirt or a competition wall.",

  "services.web.title": "Website",
  "services.web.lead": "Custom website design + development for your studio, club or community. Built for speed, SEO and real conversions — booking, story, programs, contact, all in one place. Astro or Next on the front, Sanity or your CMS of choice for content, deployed on Vercel or Firebase. Optimized for Core Web Vitals from launch, accessible by default, owned by you, no template lock-in.",

  "services.app.title": "Mobile app",
  "services.app.lead": "A real iOS and Android app in your community's hand in weeks, not months. Built on Flutter (one codebase, both stores) + Supabase (auth, database, storage, realtime). Bookings, training programs, member content, push notifications — focused MVP scope, shipped to TestFlight and Play Console in 14–28 days.",

  "services.media.title": "Photo & video",
  "services.media.lead": "Phone snaps amplified into pro-grade material that doesn't look stock. AI-enhanced photos for class menus and IG carousels, event identity kits people actually screenshot (poster + Stories templates + flyer + email banner), and promo videos that move — slideshow, kinetic-text or generative — sized for every channel. All on-brand, fast turnaround.",

  "services.shop.title": "Online store",
  "services.shop.lead": "A Shopify store ready to sell your merch, class packs and event tickets — without a weekend lost to tech setup. We configure payments, set up your first 10 products, install a theme that matches your brand identity (or custom-build one), connect inventory and shipping, and hand it over with a 30-min walkthrough. From zero to first sale in days.",

  // Cadence section
  "cadence.eyebrow": "our SaaS",
  "cadence.lead": "Our SaaS for active communities. A professional site you run by chat — no CMS, no panels.",
  "cadence.cta": "How Cadence works",
  "cadence.feature.0": "Multi-tenant",
  "cadence.feature.1": "Events",
  "cadence.feature.2": "Gallery",
  "cadence.feature.3": "Store",
  "cadence.feature.4": "Cadence AI",
  "cadence.privacy": "Privacy policy",

  // Cadence page (/cadence)
  "cadence.page.services": "One of the services we ship at Pulsar Studio.",
  "cadence.page.services.link": "See them all",
  "cadence.page.how.title": "how it works.",
  "cadence.page.how.0.title": "By chat",
  "cadence.page.how.0.body": "Tell Cadence what changed — a new event, last Sunday's photos, a session that's full — and it updates the club's site. Every change shows up as a plan first and goes live only when someone on the team approves it. It also drafts the club's messages, in the club's own voice.",
  "cadence.page.how.1.title": "Phone and web",
  "cadence.page.how.1.body": "The Cadence app for iOS and Android, and Cadence on the web. Same club, same conversations.",
  "cadence.page.how.2.title": "By invitation",
  "cadence.page.how.2.body": "Access is by invitation: we create the account for each person on a club's team. There is no sign-up.",
  "cadence.page.support.title": "support.",
  "cadence.page.support.body": "Questions, something not working, or a request about your data or your account: write to us.",
  "cadence.page.privacy.body": "What Cadence collects, which AI providers it uses and how to delete your account.",

  // Cadence privacy policy (/cadence/legal)
  "cadence.legal.eyebrow": "Cadence · app and web",
  "cadence.legal.title": "privacy.",
  "cadence.legal.lead": "What the Cadence app and Cadence on the web collect, why, who it goes to, and how to see it or have it deleted.",
  "cadence.legal.version": "Version",
  "cadence.legal.updated": "Last updated",
  "cadence.legal.toc": "On this page",
  "cadence.legal.who.title": "who we are.",
  "cadence.legal.who.body.html": "<p>Cadence is a service of Pulsar Studio, a design and code studio in Madrid, Spain. For the data described here, the controller is:</p>",
  "cadence.legal.who.controller": "Controller",
  "cadence.legal.who.contact": "Contact",
  "cadence.legal.scope.title": "who uses cadence.",
  "cadence.legal.scope.body.html": "<p>Cadence is used by the staff of the clubs that work with us: the adults who run a club's site and messages. Their accounts are created by Cadence; there is no sign-up.</p><p>The people who sign up to a club's events are covered by that club's own privacy policy, not by this one.</p>",
  "cadence.legal.data.title": "what we collect.",
  "cadence.legal.data.body.html": "<p>Only what Cadence needs to work:</p><ul><li><strong>Account.</strong> Your email and name. Your password is handled by Firebase Authentication, from Google: Cadence never sees it.</li><li><strong>Access.</strong> Which clubs you can open, and your role in each.</li><li><strong>Conversations.</strong> Your messages, the drafts Cadence writes and the plans you approve.</li><li><strong>Photos and videos you attach.</strong> Stored in your club's own database and storage, on Google Cloud in the Madrid region (europe-southwest1).</li><li><strong>Preferences.</strong> Your language, the AI model you choose and your custom instructions.</li><li><strong>Your own AI key, if you add one.</strong> Encrypted with AES-256-GCM and never shown in full again.</li><li><strong>Usage.</strong> Monthly counts of requests and tokens per AI provider, so we know what the service costs.</li><li><strong>Change history.</strong> Who changed what, so any change can be undone.</li><li><strong>Problems and ideas you send us.</strong> Your message, up to 5 photos and, if you leave the box ticked, diagnostics: device, app version and recent errors, with keys and tokens removed.</li><li><strong>AI consent.</strong> The version you accepted and when.</li></ul>",
  "cadence.legal.purposes.title": "why we use it.",
  "cadence.legal.purposes.body.html": "<p>To run Cadence, keep it secure, help you when you ask for support and know what the service costs.</p><ul><li><strong>Contract.</strong> Running the service is part of our agreement with your club and with you (article 6.1.b GDPR).</li><li><strong>Legitimate interest.</strong> Security and diagnostics keep Cadence working and safe (article 6.1.f GDPR).</li></ul>",
  "cadence.legal.ai.title": "ai providers.",
  "cadence.legal.ai.body.html": "<p>To work, Cadence sends your messages, photos and videos to an AI model:</p><ul><li><strong>Google (Gemini API)</strong>, by default.</li><li><strong>Anthropic or OpenAI</strong>, only if you add your own key. The terms of your account with them then apply.</li></ul><p>The app asks for your permission before your first message. You can withdraw it at any time in Preferences.</p><p>Today the default runs on Google's free Gemini tier. Under its terms, Google may use what it receives to improve its products, and people may review it. Keep sensitive personal information out of your messages and attachments.</p>",
  "cadence.legal.providers.title": "other providers.",
  "cadence.legal.providers.body.html": "<ul><li><strong>Google Cloud and Firebase.</strong> Hosting, database, storage and sign-in.</li><li><strong>Shopify.</strong> Only for clubs with a store, for their product data.</li></ul><p>No advertising, no tracking, no selling of data, no profiling.</p>",
  "cadence.legal.transfers.title": "transfers.",
  "cadence.legal.transfers.body.html": "<p>Google, Anthropic and OpenAI are US companies. When your data reaches them, the transfer relies on the EU-US Data Privacy Framework or on standard contractual clauses.</p>",
  "cadence.legal.retention.title": "how long we keep it.",
  "cadence.legal.retention.body.html": "<ul><li>While your club uses Cadence, or until you ask us to delete it.</li><li>Conversations can be archived, but there is no delete button today: to delete them, ask us by email.</li><li>Your own AI key is removed at once when you remove it.</li></ul>",
  "cadence.legal.rights.title": "your rights.",
  "cadence.legal.rights.body.html": "<p>You can ask us to access, correct or erase your data, to restrict or object to how we use it, and to receive it in a portable format. You can also withdraw your AI consent at any time in Preferences.</p><p>Accounts are not created in the app, so they are not deleted there either: to delete yours, ask us by email.</p>",
  "cadence.legal.rights.write": "To exercise any of these rights, write to",
  "cadence.legal.rights.complaint.html": "<p>If you think we have not handled your data properly, you can complain to the Spanish data protection authority (AEPD, <a href=\"https://www.aepd.es\" target=\"_blank\" rel=\"noopener\">aepd.es</a>).</p>",
  "cadence.legal.security.title": "security.",
  "cadence.legal.security.body.html": "<ul><li>Every connection uses HTTPS.</li><li>Your own AI keys are encrypted at rest.</li><li>Each club's data lives in its own database and storage.</li><li>Every change to a club's content is logged.</li></ul>",
  "cadence.legal.changes.title": "changes.",
  "cadence.legal.changes.body.html": "<p>The version and date at the top of this page say which version you are reading. If the AI providers change, the app asks for your permission again.</p>",

  // Studio (team) section
  "work.eyebrow": "Selected work",
  "work.title": "work.",
  "work.pattone.client": "Club Randonneurs · Madrid",
  "work.pattone.lead": "A real running crew with events and collabs, but no identity or system holding it together. We built its visual language, a site designed for whoever lands on it, and a platform the club updates by chat.",
  "work.pexter.client": "Pet care · US",
  "work.pexter.lead": "A storefront that makes dog waste gear feel like a brand, plus AI product compositions built from existing photos — the brand's personality, no new shoot.",
  "studio.eyebrow": "the team",
  "studio.title.bright": "two of us.",
  "studio.title.fade": "one signal — engineering and creative direction tuned to the same frequency.",
  "studio.mission.title": "Let's tune in",
  "studio.mission.body": "If your brand has signal, we'll amplify it. Small team, full bandwidth — no handoffs, no middle layer.",
  "studio.mission.cta": "Book a call",
  "studio.team.alex.role": "Engineering",
  "studio.team.alex.bio": "8 years building in Flutter and mobile. Architecture, apps and SaaS platforms.",
  "studio.team.ela.role": "Creative direction",
  "studio.team.ela.bio": "Branding, visual identity and content. Tunes the signal.",
  "studio.team.atPulsar": "at pulsar",

  // Footer
  "footer.cta": "Discovery call",
  "footer.nav.label": "Navigation",
  "footer.social.label": "Social",
  "footer.home": "Home",
  "footer.location": "Madrid · Spain",

  // Consent banner
  "consent.text": "We use cookies to understand how the site works and make it better. Accept or reject — it won't affect navigation.",
  "consent.accept": "Accept",
  "consent.reject": "Reject",

  // Language switcher
  "lang.label": "Language",
};

export const es: Dict = {
  "nav.services": "Servicios",
  "nav.work": "Proyectos",
  "nav.cadence": "Cadence",
  "nav.team": "Equipo",
  "nav.contact": "Contacto",
  "nav.home": "Inicio",

  "hero.services.0": "Branding y dirección creativa",
  "hero.services.1": "Diseño y desarrollo web",
  "hero.services.2": "Apps móviles · Flutter",
  "hero.services.3": "Cadence — nuestro SaaS",
  "hero.tagline": "Diseño y código para marcas en movimiento.",
  "hero.description": "Una señal, dos operadores. Diseño y código para los clubs, gimnasios y comunidades que se mueven.",
  "hero.cta": "Reservar llamada",

  "intro.bright": "Somos Pulsar.",
  "intro.tagline": "Diseño y código para marcas en movimiento.",
  "intro.sub.html": "Una señal, dos operadores. Diseño y código para los <span class=\"intro-emph\">clubs</span>, <span class=\"intro-emph\">gimnasios</span> y <span class=\"intro-emph\">comunidades</span> que se mueven.",
  "intro.cta": "Reservar llamada",

  "services.eyebrow": "Lo que entregamos",
  "services.title": "servicios.",
  "services.subtitle": "Combina lo que necesites — cada servicio funciona por sí solo.",
  "services.categories.label": "Categorías",
  "services.cta": "Empezar",
  "services.external.cadence": "Visita cadence.club",

  "services.cadence.title": "Cadence",
  "services.cadence.lead": "Nuestro SaaS para comunidades activas. Una web profesional que tu equipo gestiona por chat — sin CMS, sin paneles de admin, sin formación. Multi-tenant, con eventos, galería, tienda y Cadence AI integrado. El producto principal al que se conecta todo lo demás.",
  "services.cadence.cta": "Ver Cadence",

  "services.brand.title": "Identidad de marca",
  "services.brand.lead": "Una identidad visual completa que tus miembros reconocen al instante — logo, paleta, tipografía, manual de marca, aplicaciones digitales e impresas. Empezamos con discovery (qué hace único tu espacio), construimos el sistema y entregamos un manual que puedes dar a cualquiera. Diseñado para escalar: funciona en un flyer, una Story, una camiseta o una pared de competición.",

  "services.web.title": "Sitio web",
  "services.web.lead": "Diseño y desarrollo web a medida para tu estudio, club o comunidad. Construido para velocidad, SEO y conversión real — booking, tu historia, programas, contacto, todo en un solo lugar. Astro o Next en el front, Sanity o tu CMS preferido para contenido, deploy en Vercel o Firebase. Optimizado para Core Web Vitals desde el día uno, accesible por defecto, propio sin lock-in de plantilla.",

  "services.app.title": "App móvil",
  "services.app.lead": "Una app real para iOS y Android en manos de tu comunidad en semanas, no meses. Construida en Flutter (un código, ambas tiendas) + Supabase (auth, base de datos, storage, realtime). Reservas, programas de entrenamiento, contenido para miembros, push notifications — alcance MVP enfocado, publicado en TestFlight y Play Console en 14–28 días.",

  "services.media.title": "Foto y video",
  "services.media.lead": "Fotos del móvil amplificadas a material profesional que no parece de stock. Fotos mejoradas con IA para menús de clases y carruseles de IG, kits de identidad de evento que la gente sí captura (póster + plantillas de Stories + flyer + banner de email), y videos promocionales que se mueven — slideshow, kinetic-text o generativos — adaptados a cada canal. Todo on-brand, entrega rápida.",

  "services.shop.title": "Tienda online",
  "services.shop.lead": "Una tienda Shopify lista para vender tu merchandising, packs de clases y entradas a eventos — sin perder un fin de semana en setup técnico. Configuramos los pagos, montamos tus primeros 10 productos, instalamos un theme alineado con tu identidad (o lo construimos a medida), conectamos inventario y envíos, y te lo entregamos con un walkthrough de 30 min. De cero a primera venta en días.",

  "cadence.eyebrow": "nuestro SaaS",
  "cadence.lead": "Nuestro SaaS para comunidades activas. Una web profesional que se gestiona por chat — sin CMS, sin paneles.",
  "cadence.cta": "Cómo funciona Cadence",
  "cadence.feature.0": "Multi-tenant",
  "cadence.feature.1": "Eventos",
  "cadence.feature.2": "Galería",
  "cadence.feature.3": "Tienda",
  "cadence.feature.4": "Cadence AI",
  "cadence.privacy": "Política de privacidad",

  "cadence.page.services": "Uno de los servicios que hacemos en Pulsar Studio.",
  "cadence.page.services.link": "Verlos todos",
  "cadence.page.how.title": "cómo funciona.",
  "cadence.page.how.0.title": "Por chat",
  "cadence.page.how.0.body": "Cuéntale a Cadence qué cambió — un evento nuevo, las fotos del domingo, una sesión que ya está llena — y actualiza la web del club. Cada cambio aparece primero como un plan y solo se publica cuando alguien del equipo lo aprueba. También redacta los mensajes del club, con la voz del club.",
  "cadence.page.how.1.title": "Móvil y web",
  "cadence.page.how.1.body": "La app de Cadence para iOS y Android, y Cadence en la web. El mismo club, las mismas conversaciones.",
  "cadence.page.how.2.title": "Por invitación",
  "cadence.page.how.2.body": "El acceso es por invitación: creamos la cuenta de cada persona del equipo de un club. No hay registro.",
  "cadence.page.support.title": "soporte.",
  "cadence.page.support.body": "¿Dudas, algo que no funciona o una petición sobre tus datos o tu cuenta? Escríbenos.",
  "cadence.page.privacy.body": "Qué recoge Cadence, qué proveedores de IA usa y cómo borrar tu cuenta.",

  "cadence.legal.eyebrow": "Cadence · app y web",
  "cadence.legal.title": "privacidad.",
  "cadence.legal.lead": "Qué recogen la app de Cadence y Cadence en la web, para qué, a quién llega y cómo verlo o pedir que se borre.",
  "cadence.legal.version": "Versión",
  "cadence.legal.updated": "Última actualización",
  "cadence.legal.toc": "En esta página",
  "cadence.legal.who.title": "quiénes somos.",
  "cadence.legal.who.body.html": "<p>Cadence es un servicio de Pulsar Studio, un estudio de diseño y código en Madrid. El responsable de los datos que describe esta política es:</p>",
  "cadence.legal.who.controller": "Responsable",
  "cadence.legal.who.contact": "Contacto",
  "cadence.legal.scope.title": "quién usa cadence.",
  "cadence.legal.scope.body.html": "<p>Usa Cadence el equipo de los clubs que trabajan con nosotros: las personas adultas que llevan la web y los mensajes de un club. Sus cuentas las crea Cadence; no hay registro.</p><p>Las personas que se inscriben en los eventos de un club están cubiertas por la política de privacidad de ese club, no por esta.</p>",
  "cadence.legal.data.title": "qué recogemos.",
  "cadence.legal.data.body.html": "<p>Solo lo que Cadence necesita para funcionar:</p><ul><li><strong>Cuenta.</strong> Tu email y tu nombre. Tu contraseña la gestiona Firebase Authentication, de Google: Cadence nunca la ve.</li><li><strong>Acceso.</strong> Qué clubs puedes abrir y tu rol en cada uno.</li><li><strong>Conversaciones.</strong> Tus mensajes, los borradores que escribe Cadence y los planes que apruebas.</li><li><strong>Fotos y vídeos que adjuntas.</strong> Se guardan en la base de datos y el almacenamiento propios de tu club, en Google Cloud, región de Madrid (europe-southwest1).</li><li><strong>Preferencias.</strong> Tu idioma, el modelo de IA que eliges y tus instrucciones personalizadas.</li><li><strong>Tu propia clave de IA, si añades una.</strong> Cifrada con AES-256-GCM y nunca se vuelve a mostrar completa.</li><li><strong>Uso.</strong> Recuentos mensuales de peticiones y tokens por proveedor de IA, para saber cuánto cuesta el servicio.</li><li><strong>Historial de cambios.</strong> Quién cambió qué, para poder deshacer cualquier cambio.</li><li><strong>Problemas e ideas que nos envías.</strong> Tu mensaje, hasta 5 fotos y, si dejas la casilla marcada, diagnósticos: dispositivo, versión de la app y errores recientes, sin claves ni tokens.</li><li><strong>Consentimiento de IA.</strong> La versión que aceptaste y cuándo.</li></ul>",
  "cadence.legal.purposes.title": "para qué lo usamos.",
  "cadence.legal.purposes.body.html": "<p>Para hacer funcionar Cadence, mantenerlo seguro, ayudarte cuando pides soporte y saber cuánto cuesta el servicio.</p><ul><li><strong>Contrato.</strong> Prestar el servicio forma parte de nuestro acuerdo con tu club y contigo (artículo 6.1.b del RGPD).</li><li><strong>Interés legítimo.</strong> La seguridad y los diagnósticos mantienen Cadence funcionando y seguro (artículo 6.1.f del RGPD).</li></ul>",
  "cadence.legal.ai.title": "proveedores de ia.",
  "cadence.legal.ai.body.html": "<p>Para funcionar, Cadence envía tus mensajes, fotos y vídeos a un modelo de IA:</p><ul><li><strong>Google (Gemini API)</strong>, por defecto.</li><li><strong>Anthropic u OpenAI</strong>, solo si añades tu propia clave. Entonces se aplican los términos de tu cuenta con ellos.</li></ul><p>La app te pide permiso antes de tu primer mensaje. Puedes retirarlo cuando quieras en Preferencias.</p><p>Hoy el modelo por defecto funciona con el nivel gratuito de Gemini de Google. Según sus términos, Google puede usar lo que recibe para mejorar sus productos, y puede revisarlo una persona. No pongas información personal sensible en tus mensajes ni en lo que adjuntas.</p>",
  "cadence.legal.providers.title": "otros proveedores.",
  "cadence.legal.providers.body.html": "<ul><li><strong>Google Cloud y Firebase.</strong> Alojamiento, base de datos, almacenamiento e inicio de sesión.</li><li><strong>Shopify.</strong> Solo para los clubs con tienda, para los datos de sus productos.</li></ul><p>Sin publicidad, sin rastreo, sin venta de datos, sin perfiles.</p>",
  "cadence.legal.transfers.title": "transferencias.",
  "cadence.legal.transfers.body.html": "<p>Google, Anthropic y OpenAI son empresas de Estados Unidos. Cuando tus datos llegan a ellas, la transferencia se ampara en el Marco de Privacidad de Datos UE-EE. UU. o en cláusulas contractuales tipo.</p>",
  "cadence.legal.retention.title": "cuánto tiempo lo guardamos.",
  "cadence.legal.retention.body.html": "<ul><li>Mientras tu club use Cadence, o hasta que nos pidas borrarlo.</li><li>Las conversaciones se pueden archivar, pero hoy no hay botón de borrar: para borrarlas, pídenoslo por email.</li><li>Tu propia clave de IA se elimina en el momento en que la quitas.</li></ul>",
  "cadence.legal.rights.title": "tus derechos.",
  "cadence.legal.rights.body.html": "<p>Puedes pedirnos acceder a tus datos, corregirlos o borrarlos, limitar cómo los usamos u oponerte a ello, y recibirlos en un formato portable. También puedes retirar tu consentimiento de IA cuando quieras en Preferencias.</p><p>Las cuentas no se crean en la app, así que tampoco se borran ahí: para borrar la tuya, pídenoslo por email.</p>",
  "cadence.legal.rights.write": "Para ejercer cualquiera de estos derechos, escribe a",
  "cadence.legal.rights.complaint.html": "<p>Si crees que no hemos tratado bien tus datos, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD, <a href=\"https://www.aepd.es\" target=\"_blank\" rel=\"noopener\">aepd.es</a>).</p>",
  "cadence.legal.security.title": "seguridad.",
  "cadence.legal.security.body.html": "<ul><li>Todas las conexiones usan HTTPS.</li><li>Tus claves de IA se guardan cifradas.</li><li>Los datos de cada club viven en su propia base de datos y su propio almacenamiento.</li><li>Cada cambio en el contenido de un club queda registrado.</li></ul>",
  "cadence.legal.changes.title": "cambios.",
  "cadence.legal.changes.body.html": "<p>La versión y la fecha de arriba indican qué versión estás leyendo. Si cambian los proveedores de IA, la app vuelve a pedirte permiso.</p>",

  "work.eyebrow": "Trabajo seleccionado",
  "work.title": "proyectos.",
  "work.pattone.client": "Club Randonneurs · Madrid",
  "work.pattone.lead": "Una comunidad de running real, con eventos y colaboraciones, pero sin identidad ni sistema que lo reuniera todo. Construimos su lenguaje visual, una web pensada desde quien la visita y una plataforma que el club actualiza por chat.",
  "work.pexter.client": "Productos para mascotas · EE. UU.",
  "work.pexter.lead": "Una tienda que convierte accesorios para perros en marca, y composiciones de producto con IA a partir de fotos existentes: la personalidad de la marca, sin un shooting nuevo.",
  "studio.eyebrow": "el equipo",
  "studio.title.bright": "somos dos.",
  "studio.title.fade": "una señal — ingeniería y dirección creativa sintonizadas en la misma frecuencia.",
  "studio.mission.title": "Sintonicemos",
  "studio.mission.body": "Si tu marca tiene señal, la amplificamos. Equipo pequeño, ancho de banda completo — sin handoffs, sin capa intermedia.",
  "studio.mission.cta": "Reservar llamada",
  "studio.team.alex.role": "Ingeniería",
  "studio.team.alex.bio": "8 años construyendo en Flutter y mobile. Arquitectura, apps y plataformas SaaS.",
  "studio.team.ela.role": "Dirección creativa",
  "studio.team.ela.bio": "Branding, identidad visual y contenido. Sintoniza la señal.",
  "studio.team.atPulsar": "en pulsar",

  "footer.cta": "Discovery call",
  "footer.nav.label": "Navegación",
  "footer.social.label": "Social",
  "footer.home": "Inicio",
  "footer.location": "Madrid · España",

  "consent.text": "Usamos cookies para entender cómo funciona el sitio y mejorarlo. Acepta o rechaza — no afecta la navegación.",
  "consent.accept": "Aceptar",
  "consent.reject": "Rechazar",

  "lang.label": "Idioma",
};

export const fr: Dict = {
  "nav.services": "Services",
  "nav.cadence": "Cadence",
  "nav.team": "Équipe",
  "nav.work": "Projets",
  "nav.contact": "Contact",
  "nav.home": "Accueil",

  "hero.services.0": "Branding & direction créative",
  "hero.services.1": "Design et développement web",
  "hero.services.2": "Apps mobiles · Flutter",
  "hero.services.3": "Cadence — notre SaaS",
  "hero.tagline": "Design et code pour les marques en mouvement.",
  "hero.description": "Un signal, deux opérateurs. Design et code pour les clubs, salles et communautés qui bougent.",
  "hero.cta": "Réserver un appel",

  "intro.bright": "Nous sommes Pulsar.",
  "intro.tagline": "Design et code pour les marques en mouvement.",
  "intro.sub.html": "Un signal, deux opérateurs. Design et code pour les <span class=\"intro-emph\">clubs</span>, <span class=\"intro-emph\">salles</span> et <span class=\"intro-emph\">communautés</span> qui bougent.",
  "intro.cta": "Réserver un appel",

  "services.eyebrow": "Ce qu'on livre",
  "services.title": "services.",
  "services.subtitle": "Combinez selon vos besoins — chaque service fonctionne seul.",
  "services.categories.label": "Catégories",
  "services.cta": "Commencer",
  "services.external.cadence": "Voir cadence.club",

  "services.cadence.title": "Cadence",
  "services.cadence.lead": "Notre SaaS pour les communautés actives. Un site professionnel que votre équipe gère par chat — pas de CMS, pas de panneaux d'admin, pas de formation. Multi-tenant, avec événements, galerie, boutique et Cadence AI intégré. Le produit phare auquel tout le reste se connecte.",
  "services.cadence.cta": "Voir Cadence",

  "services.brand.title": "Identité de marque",
  "services.brand.lead": "Une identité visuelle complète que vos membres reconnaissent au premier coup d'œil — logo, palette, typographie, charte graphique, applications digitales et imprimées. On commence par un discovery (ce qui rend votre espace unique), on construit le système, et on livre une charte que vous pouvez confier à n'importe qui. Conçu pour scaler : fonctionne sur un flyer, une Story, un t-shirt ou un mur de compétition.",

  "services.web.title": "Site web",
  "services.web.lead": "Design et développement web sur mesure pour votre studio, club ou communauté. Construit pour la vitesse, le SEO et la conversion réelle — réservation, votre histoire, programmes, contact, tout au même endroit. Astro ou Next côté front, Sanity ou le CMS de votre choix pour le contenu, déploiement sur Vercel ou Firebase. Optimisé pour les Core Web Vitals dès le lancement, accessible par défaut, à vous, sans dépendance de template.",

  "services.app.title": "App mobile",
  "services.app.lead": "Une vraie app iOS et Android dans la main de votre communauté en quelques semaines, pas en mois. Construite sur Flutter (un seul codebase, les deux stores) + Supabase (auth, base de données, storage, temps réel). Réservations, programmes d'entraînement, contenu membres, notifications push — scope MVP focalisé, livré sur TestFlight et Play Console en 14–28 jours.",

  "services.media.title": "Photo et vidéo",
  "services.media.lead": "Photos de téléphone amplifiées en matériel pro qui ne sent pas le stock. Photos améliorées par IA pour les menus de cours et les carrousels Instagram, kits d'identité d'événement que les gens screenshotent (poster + templates Stories + flyer + bannière email), et vidéos promo qui bougent — slideshow, kinetic-text ou génératif — adaptées à chaque canal. Tout on-brand, livraison rapide.",

  "services.shop.title": "Boutique en ligne",
  "services.shop.lead": "Une boutique Shopify prête à vendre votre merch, vos packs de cours et vos billets d'événements — sans y perdre un week-end de setup technique. On configure les paiements, on installe vos 10 premiers produits, on monte un theme aligné avec votre identité (ou on en construit un sur mesure), on connecte stock et expédition, et on vous remet le tout avec un walkthrough de 30 min. De zéro à première vente en quelques jours.",

  "cadence.eyebrow": "notre SaaS",
  "cadence.lead": "Notre SaaS pour les communautés actives. Un site professionnel géré par chat — pas de CMS, pas de panneaux.",
  "cadence.cta": "Comment marche Cadence",
  "cadence.feature.0": "Multi-tenant",
  "cadence.feature.1": "Événements",
  "cadence.feature.2": "Galerie",
  "cadence.feature.3": "Boutique",
  "cadence.feature.4": "Cadence AI",
  "cadence.privacy": "Politique de confidentialité",

  "cadence.page.services": "L'un des services que nous livrons chez Pulsar Studio.",
  "cadence.page.services.link": "Tous les voir",
  "cadence.page.how.title": "comment ça marche.",
  "cadence.page.how.0.title": "Par chat",
  "cadence.page.how.0.body": "Dites à Cadence ce qui a changé — un nouvel événement, les photos de dimanche, une séance complète — et il met à jour le site du club. Chaque changement apparaît d'abord sous forme de plan et n'est publié que lorsqu'un membre de l'équipe l'approuve. Il rédige aussi les messages du club, avec la voix du club.",
  "cadence.page.how.1.title": "Mobile et web",
  "cadence.page.how.1.body": "L'app Cadence pour iOS et Android, et Cadence sur le web. Le même club, les mêmes conversations.",
  "cadence.page.how.2.title": "Sur invitation",
  "cadence.page.how.2.body": "L'accès se fait sur invitation : nous créons le compte de chaque personne de l'équipe d'un club. Il n'y a pas d'inscription.",
  "cadence.page.support.title": "assistance.",
  "cadence.page.support.body": "Une question, quelque chose qui ne marche pas, ou une demande sur vos données ou votre compte : écrivez-nous.",
  "cadence.page.privacy.body": "Ce que Cadence collecte, quels fournisseurs d'IA il utilise et comment supprimer votre compte.",

  "cadence.legal.eyebrow": "Cadence · app et web",
  "cadence.legal.title": "confidentialité.",
  "cadence.legal.lead": "Ce que l'app Cadence et Cadence sur le web collectent, pourquoi, à qui ces données sont transmises, et comment les consulter ou les faire supprimer.",
  "cadence.legal.version": "Version",
  "cadence.legal.updated": "Dernière mise à jour",
  "cadence.legal.toc": "Sur cette page",
  "cadence.legal.who.title": "qui sommes-nous.",
  "cadence.legal.who.body.html": "<p>Cadence est un service de Pulsar Studio, un studio de design et de code basé à Madrid. Le responsable du traitement des données décrites ici est :</p>",
  "cadence.legal.who.controller": "Responsable du traitement",
  "cadence.legal.who.contact": "Contact",
  "cadence.legal.scope.title": "qui utilise cadence.",
  "cadence.legal.scope.body.html": "<p>Cadence est utilisé par l'équipe des clubs qui travaillent avec nous : les adultes qui gèrent le site et les messages d'un club. Leurs comptes sont créés par Cadence ; il n'y a pas d'inscription.</p><p>Les personnes qui s'inscrivent aux événements d'un club relèvent de la politique de confidentialité de ce club, pas de celle-ci.</p>",
  "cadence.legal.data.title": "ce que nous collectons.",
  "cadence.legal.data.body.html": "<p>Seulement ce dont Cadence a besoin pour fonctionner :</p><ul><li><strong>Compte.</strong> Votre email et votre nom. Votre mot de passe est géré par Firebase Authentication, de Google : Cadence ne le voit jamais.</li><li><strong>Accès.</strong> Les clubs que vous pouvez ouvrir et votre rôle dans chacun.</li><li><strong>Conversations.</strong> Vos messages, les brouillons rédigés par Cadence et les plans que vous approuvez.</li><li><strong>Photos et vidéos que vous joignez.</strong> Stockées dans la base de données et le stockage propres à votre club, sur Google Cloud, région de Madrid (europe-southwest1).</li><li><strong>Préférences.</strong> Votre langue, le modèle d'IA choisi et vos instructions personnalisées.</li><li><strong>Votre propre clé d'IA, si vous en ajoutez une.</strong> Chiffrée avec AES-256-GCM et plus jamais affichée en entier.</li><li><strong>Usage.</strong> Le nombre mensuel de requêtes et de tokens par fournisseur d'IA, pour savoir ce que coûte le service.</li><li><strong>Historique des changements.</strong> Qui a changé quoi, pour pouvoir annuler n'importe quel changement.</li><li><strong>Problèmes et idées que vous nous envoyez.</strong> Votre message, jusqu'à 5 photos et, si vous laissez la case cochée, des diagnostics : appareil, version de l'app et erreurs récentes, sans clés ni tokens.</li><li><strong>Consentement IA.</strong> La version acceptée et sa date.</li></ul>",
  "cadence.legal.purposes.title": "pourquoi nous les utilisons.",
  "cadence.legal.purposes.body.html": "<p>Pour faire fonctionner Cadence, le sécuriser, vous aider quand vous demandez de l'assistance et savoir ce que coûte le service.</p><ul><li><strong>Contrat.</strong> Fournir le service fait partie de notre accord avec votre club et avec vous (article 6.1.b du RGPD).</li><li><strong>Intérêt légitime.</strong> La sécurité et les diagnostics permettent à Cadence de fonctionner en toute sécurité (article 6.1.f du RGPD).</li></ul>",
  "cadence.legal.ai.title": "fournisseurs d'ia.",
  "cadence.legal.ai.body.html": "<p>Pour fonctionner, Cadence envoie vos messages, photos et vidéos à un modèle d'IA :</p><ul><li><strong>Google (Gemini API)</strong>, par défaut.</li><li><strong>Anthropic ou OpenAI</strong>, uniquement si vous ajoutez votre propre clé. Les conditions de votre compte chez eux s'appliquent alors.</li></ul><p>L'app vous demande votre autorisation avant votre premier message. Vous pouvez la retirer à tout moment dans les Préférences.</p><p>Aujourd'hui, le modèle par défaut fonctionne sur l'offre gratuite de Gemini de Google. Selon ses conditions, Google peut utiliser ce qu'il reçoit pour améliorer ses produits, et des personnes peuvent le relire. Ne mettez pas d'informations personnelles sensibles dans vos messages ni dans vos pièces jointes.</p>",
  "cadence.legal.providers.title": "autres fournisseurs.",
  "cadence.legal.providers.body.html": "<ul><li><strong>Google Cloud et Firebase.</strong> Hébergement, base de données, stockage et connexion.</li><li><strong>Shopify.</strong> Uniquement pour les clubs qui ont une boutique, pour leurs données produits.</li></ul><p>Pas de publicité, pas de suivi, pas de vente de données, pas de profilage.</p>",
  "cadence.legal.transfers.title": "transferts.",
  "cadence.legal.transfers.body.html": "<p>Google, Anthropic et OpenAI sont des entreprises américaines. Lorsque vos données leur parviennent, le transfert repose sur le cadre de protection des données UE-États-Unis (Data Privacy Framework) ou sur des clauses contractuelles types.</p>",
  "cadence.legal.retention.title": "durée de conservation.",
  "cadence.legal.retention.body.html": "<ul><li>Tant que votre club utilise Cadence, ou jusqu'à ce que vous nous demandiez de les supprimer.</li><li>Les conversations peuvent être archivées, mais il n'y a pas de bouton de suppression aujourd'hui : pour les supprimer, demandez-le-nous par email.</li><li>Votre propre clé d'IA est supprimée dès que vous la retirez.</li></ul>",
  "cadence.legal.rights.title": "vos droits.",
  "cadence.legal.rights.body.html": "<p>Vous pouvez nous demander d'accéder à vos données, de les rectifier ou de les effacer, d'en limiter l'utilisation ou de vous y opposer, et de les recevoir dans un format portable. Vous pouvez aussi retirer votre consentement IA à tout moment dans les Préférences.</p><p>Les comptes ne sont pas créés dans l'app, ils n'y sont donc pas supprimés non plus : pour supprimer le vôtre, demandez-le-nous par email.</p>",
  "cadence.legal.rights.write": "Pour exercer l'un de ces droits, écrivez à",
  "cadence.legal.rights.complaint.html": "<p>Si vous estimez que nous n'avons pas traité vos données correctement, vous pouvez déposer une réclamation auprès de l'autorité espagnole de protection des données (AEPD, <a href=\"https://www.aepd.es\" target=\"_blank\" rel=\"noopener\">aepd.es</a>).</p>",
  "cadence.legal.security.title": "sécurité.",
  "cadence.legal.security.body.html": "<ul><li>Toutes les connexions passent par HTTPS.</li><li>Vos propres clés d'IA sont stockées chiffrées.</li><li>Les données de chaque club vivent dans sa propre base de données et son propre stockage.</li><li>Chaque changement du contenu d'un club est enregistré.</li></ul>",
  "cadence.legal.changes.title": "modifications.",
  "cadence.legal.changes.body.html": "<p>La version et la date en haut de cette page indiquent quelle version vous lisez. Si les fournisseurs d'IA changent, l'app vous redemande votre autorisation.</p>",

  "work.eyebrow": "Travaux choisis",
  "work.title": "projets.",
  "work.pattone.client": "Club Randonneurs · Madrid",
  "work.pattone.lead": "Une vraie communauté de running, avec événements et collaborations, mais sans identité ni système pour tout réunir. Nous avons créé son langage visuel, un site pensé pour ceux qui le visitent et une plateforme que le club met à jour par chat.",
  "work.pexter.client": "Produits pour animaux · US",
  "work.pexter.lead": "Une boutique qui fait des accessoires pour chiens une vraie marque, et des compositions produit par IA à partir de photos existantes : la personnalité de la marque, sans nouveau shooting.",
  "studio.eyebrow": "l'équipe",
  "studio.title.bright": "nous sommes deux.",
  "studio.title.fade": "un signal — ingénierie et direction créative accordées sur la même fréquence.",
  "studio.mission.title": "Mettons-nous sur la même fréquence",
  "studio.mission.body": "Si votre marque a un signal, on l'amplifie. Petite équipe, bande passante totale — pas de handoffs, pas de couche intermédiaire.",
  "studio.mission.cta": "Réserver un appel",
  "studio.team.alex.role": "Ingénierie",
  "studio.team.alex.bio": "8 ans à construire en Flutter et mobile. Architecture, apps et plateformes SaaS.",
  "studio.team.ela.role": "Direction créative",
  "studio.team.ela.bio": "Branding, identité visuelle et contenu. Accorde le signal.",
  "studio.team.atPulsar": "chez pulsar",

  "footer.cta": "Discovery call",
  "footer.nav.label": "Navigation",
  "footer.social.label": "Social",
  "footer.home": "Accueil",
  "footer.location": "Madrid · Espagne",

  "consent.text": "Nous utilisons des cookies pour comprendre comment le site fonctionne et l'améliorer. Acceptez ou rejetez — cela n'affectera pas la navigation.",
  "consent.accept": "Accepter",
  "consent.reject": "Rejeter",

  "lang.label": "Langue",
};

export const dict: Record<Locale, Dict> = { en, es, fr };
