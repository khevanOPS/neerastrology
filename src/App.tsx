import { useEffect, useMemo, useState } from 'react';
import type { ComponentType } from 'react';
import {
  Sparkles,
  Star,
  Phone,
  Mail,
  MapPin,
  Facebook,
  MessageCircle,
  ChevronRight,
  Menu,
  X,
  Clock,
  Award,
  Users,
  Globe,
  ArrowRight,
  CalendarDays,
  MoonStar,
  BookOpen,
  Expand,
  HeartHandshake,
  Baby,
  House,
  Gem,
  ScrollText,
  Images,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type Language = 'en' | 'fr' | 'hi';
type ServiceItem = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  details: string | string[];
  image: string;
};

type GalleryItem = {
  title: string;
  description: string;
  image: string;
};

const PERSON_NAME = 'Neerunjun Motah';
const PERSON_NAME_VARIANTS = [PERSON_NAME, 'नीरुंजुन मोटाह'];

function renderNameLockedText(text: string) {
  const matchedName = PERSON_NAME_VARIANTS.find((variant) => text.includes(variant));

  if (!matchedName) {
    return text;
  }

  const [beforeName, ...rest] = text.split(matchedName);

  return (
    <>
      {beforeName}
      <span lang="en" translate="no" className="notranslate">
        {PERSON_NAME}
      </span>
      {rest.join(PERSON_NAME)}
    </>
  );
}

type Translation = {
  nav: { home: string; about: string; services: string; gallery: string; calendar: string; contact: string };
  common: {
    whatsapp: string;
    chatOnWhatsApp: string;
    exploreServices: string;
    onlineConsultation: string;
    contactUs: string;
    askOnWhatsApp: string;
    learnMore: string;
    close: string;
    readMore: string;
    readLess: string;
    enquireOnWhatsApp: string;
    languageLabel: string;
    callNow: string;
  };
  brand: { title: string; subtitle: string };
  hero: { badge: string; titleLine1: string; titleLine2: string; description: string };
  about: {
    badge: string;
    heading: string;
    subheading: string;
    intro1: string;
    intro2: string;
    tags: string[];
    features: string[];
    guruTitle: string;
    guruIntro: string;
    guruParagraphs: string[];
    yearsExperience: string;
  };
  services: {
    badge: string;
    heading: string;
    description: string;
    items: ServiceItem[];
  };
  gallery: {
    badge: string;
    heading: string;
    description: string;
    items: GalleryItem[];
  };
  calendar: {
    badge: string;
    heading: string;
    description: string;
    highlightsTitle: string;
    highlightsSubtitle: string;
    highlights: string[];
    helpTitle: string;
    helpDescription: string;
  };
  contact: {
    badge: string;
    heading: string;
    description: string;
    officeTitle: string;
    phoneTitle: string;
    emailTitle: string;
    hoursTitle: string;
    followUs: string;
    startTitle: string;
    startDescription: string;
    languages: string;
    onlineTitle: string;
    onlineText1: string;
    onlineText2: string;
    onlineText3: string;
    onlineText4: string;
    address2Title: string;
    workingHoursText: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    services: string;
    rights: string;
    tagline: string;
    creditsLine1: string;
    creditsLine2: string;
  };
};

const translations: Record<Language, Translation> = {
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', gallery: 'Gallery', calendar: 'Calendar', contact: 'Contact' },
    common: {
      whatsapp: 'WhatsApp',
      chatOnWhatsApp: 'Chat on WhatsApp',
      exploreServices: 'Explore Services',
      onlineConsultation: 'Online Consultation by WhatsApp & Email',
      contactUs: 'Contact Us',
      askOnWhatsApp: 'Ask on WhatsApp',
      learnMore: 'Learn more',
      close: 'Close',
      readMore: 'Read more',
      readLess: 'Read less',
      enquireOnWhatsApp: 'Enquire on WhatsApp',
      languageLabel: 'Language',
      callNow: 'Call Now',
    },
    brand: { title: 'Neer Astrology', subtitle: 'Neer Jyotish' },
    hero: {
      badge: 'Vedic Astrology Expert',
      titleLine1: 'Find peace of mind and',
      titleLine2: 'know yourself better',
      description:
        "Guiding you through life's journey with ancient Vedic wisdom and celestial insights. Discover your true path with personalized astrological readings.",
    },
    about: {
      badge: 'About Neer Jyotish',
      heading: 'Meet Your Guru',
      subheading: PERSON_NAME,
      intro1:
        `With decades of experience in Vedic astrology, numerology, gemology and vastu, ${PERSON_NAME} has guided individuals and families seeking clarity in marriage, timing, remedies, prosperity, health and spiritual balance.`,
      intro2:
        'Each consultation is designed to be practical, personal and spiritually grounded, blending traditional wisdom with real-life decision-making for clients in Mauritius and abroad.',
      tags: ['Vedic Astrology', 'Numerology', 'Gemology', 'Vastu Shastra', 'Horoscope Matching'],
      features: ['Certified Astrologer', '10,000+ Happy Clients', 'Global Consultations', 'Personalised Guidance'],
      guruTitle: 'Message from the Guru',
      guruIntro: '',
      guruParagraphs: [
        'Astrology is an art of interpreting the reputed esoteric influences of stars and planets on human affairs. It has its origin in the Vedas and is studied across the world. Knowledge is power, and astrology acts like a master key to the lock of truth. When we understand the indications of destiny and recognise the pitfalls ahead, we can choose wiser actions and avoid unnecessary suffering. To be forewarned is to be forearmed.',
        'Astrology indicates the pattern on which life is built. The stars and planets may suggest what is likely to come to pass, yet with intelligence and free will one can alter the natural course of events. The wise person cooperates with planetary energies and, by doing so, adds to personal happiness, efficiency and usefulness in the world.',
        'Astrology points out the weak spots in our character and helps explain why success may not arrive in certain areas of life. It gives a forewarning when suffering may arise through weakness or when misfortune may be approaching. It shows the best, shortest and safest path toward a goal. It offers solutions to problems and reveals our physical, mental and spiritual tendencies and possibilities.',
        'Astrology makes it possible to analyse and diagnose ourselves. With its help, together with intelligence and free will, we can avert dangers and convert opportunities to our advantage. It opens valuable fields of knowledge, expands consciousness and helps us become masters of circumstance rather than victims of it.',
        'Our ancient sages studied astrology deeply and framed rules to predict personal matters, diseases, weather conditions, calamities, coronations, wars, rainfall, earthquakes and many other events. Their principles continue to remain relevant and cannot be easily dismissed.',
        'Even modern public figures have quietly turned to astrology before major decisions. Astrology is as important to human life as psychology, because it complements the understanding of the conscious and subconscious mind and offers a guideline toward harmony of body, mind and spirit.',
      ],
      yearsExperience: 'Years of experience',
    },
    services: {
      badge: 'Our Services',
      heading: 'Clear guidance, practical remedies and personal care',
      description:
        'A carefully structured range of astrology services for life decisions, compatibility, remedies, timing, naming and online consultations for clients in Mauritius and abroad.',
      items: [
        {
          icon: Star,
          title: 'Kundli Reading',
          description: 'A clear reading of your birth chart to understand personality, timing, karmic patterns and life direction.',
          details:
            'A personalised birth chart consultation covering your major planetary influences, strengths, challenges, important timing cycles and practical guidance for life, relationships, work and spiritual direction.',
          image: '/kundali.jpg',
        },
        {
          icon: ScrollText,
          title: 'General Predictions (Janam Kundli)',
          description:
            'Life predictions and chart analysis covering personality, education, finance, marriage, children, travel and more. (20 pages PDF)',
          details:
            'Regarding Life, General Characteristics, Specific Characteristics, Physical Appearance, Educations, Finance & wealth, Health, Diseases, Family, Enemies, Friendship, Love, Marriage, Life Partner, Children, Social life, foreign travels, vehicles, Profits & Losses, Lucky Stones, Lucky Numbers, Personalised car plate number, Days, favorable colors and all aspects of Planets in the Birth Chart are predicted for every individual Etc. (20 pages PDF)',
          image: '/predictions.jpg',
        },
        {
          icon: ScrollText,
          title: 'Yearly Predictions (Vaarshik Phal)',
          description:
            'Birthday to next Birthday. Aspects of Planets in 12 houses during the year regarding Wealth, Health, Diseases, Finance, Income & Expenses, Business, Trade, Accidents, Job Success, Love, Marriage, Enemies, Travels etc. (9 pages PDF)',
          details:
            'Birthday to next Birthday yearly reading covering the aspects of planets in the 12 houses regarding wealth, health, diseases, finance, income and expenses, business, trade, accidents, job success, love, marriage, enemies and travels. (9 pages PDF)',
          image: '/predictions1.jpg',
        },
        {
          icon: HeartHandshake,
          title: 'Kundli Milan',
          description:
            'Love and marriage compatibility guidance to evaluate harmony, temperament and long-term relationship potential. (6 pages PDF)',
          details: [
            'KUNDLI MATCHING (KUNDLI MILAN)',
            'Love at first sight or love alone is not enough to build a good marriage. The character, temperament and charts of future partners should also be matched. Astrology and proper match-making can help verify long-term harmony.',
            'This guidance is useful for those who want to complete a match-making before marriage, or for those who want a clearer look at their future married life.',
            'Fail or Succeed',
            'Astrology helps assess sentimental, emotional and conjugal life with your partner: tenderness, tolerance, trust, romance, excitement and affection, but also confrontation, aggression, impulsiveness, impatience, infidelity, disagreements, arguments, sadness or love life shaken by intense scenes.',
            'In love and compatibility analysis, this reading helps you understand what the stars may hold for your relationship and how to avoid separation, breakup or even divorce after marriage.',
            'LOVE & MARRIAGE COMPATIBILITY (KUNDALI MATCHING)',
            'Kundli matching has long been considered one of the most important aspects of Indian marriage. Even if some modern views dismiss it, astrology continues to provide a strong foundation showing that horoscope matching remains a useful step before marriage, including in love marriages.',
            'Horoscope matching can indicate many aspects of married life and help avert future problems. Vedic astrology strongly recommends matching horoscopes to avoid major issues later.',
            'One key reason for kundli matching is to understand the mental and physical compatibility of the couple. This includes attitude, mindset, temper and behaviour, which form the basis of a successful marriage. Physical attraction is also considered to judge the level of mutual desirability for a lasting relationship.',
            'Kundli matching is also used to check whether the movement of planets in one person’s horoscope may hinder or harm the other person’s career growth and progress. Bhakoot, the seventh guna, reflects this influence.',
            'Charts are also matched to reduce the negative impact of dashas on marriage and on the couple’s future. Planetary positions at birth may create periods such as Mangal Dasha or Shani Dasha, which can lead to marital difficulties. Through kundli matching, these can be detected and astrologers may recommend suitable pujas as remedies.',
            'It can also help predict the health and happiness of future children. Nadi, the eighth guna in the kundli, is important for indicating childbirth-related possibilities and concerns. Since the well-being of children is central to a healthy family life, Kundli Milan remains valuable.',
            'Kundali Milan is equally important in love marriages. Although couples may fear negative findings, the process can actually help prevent later problems. Matching also offers solutions through pujas and remedial guidance, helping strengthen the bond.',
            'Lastly, kundli matching can help finalise marriages where every other factor appears suitable, but horoscope concerns remain. In such cases, experienced astrologers may recommend specific astrological upayas to reduce negative effects in the matching charts.',
          ],
          image: '/kundali-matching-real.jpg',
        },
        {
          icon: Users,
          title: 'Matrimonial Services',
          description:
            'Thoughtful matchmaking support for boys, girls and divorcees seeking a suitable life partner with astrological guidance.',
          details:
            'Personalised matrimonial support for boys, girls and divorcees with horoscope-guided compatibility insights, family-oriented advice and a practical approach to finding a suitable life partner.',
          image: '/matrimonial.jpg',
        },
        {
          icon: Baby,
          title: 'Naming by Birth Star (Nakshatra Naamkaran)',
          description:
            'Naming guidance for newborn babies using birth details, panchaang and planetary positions. (3 pages PDF)',
          details:
            'Regarding Birth Details, Panchaang, Sadesati and Ascendant (Lagna) chart with planets positions and 5 names of Newborn Baby etc. (3 pages PDF)',
          image: '/baby.jpg',
        },
        {
          icon: House,
          title: 'Vastu Consultation',
          description:
            'Residential and commercial vastu guidance based on balancing the five natural elements.',
          details:
            'Consultation on residential or commercial properties based on ancient Indian architectural principles to balance the five natural elements (earth, water, fire, air, space).',
          image: '/vastu.jpg',
        },
        {
          icon: Baby,
          title: 'Parenthood Journey',
          description: 'Support for couples seeking spiritual guidance on conception and family planning.',
          details: 'Conceive your choice child according to Indian Astrology.',
          image: '/choice-child.jpg',
        },
        {
          icon: Clock,
          title: 'Muhurta',
          description:
            'Auspicious timings for marriages, purchases, travel, business, surgery, engagements and other important events.',
          details:
            "Fixing Auspicious time (Muhurtha) for marriages, engagements, constructions, purchases, businesses, surgery, travelling's etc.",
          image: '/muhurta.jpg',
        },
        {
          icon: MoonStar,
          title: 'Special Prayers',
          description: 'Targeted pujas to reduce difficult planetary influences and restore balance.',
          details: 'AGAINST NEGATIVE INFLUENCES OF PLANETS:- MANGAL, RAHU, SHANI, MULA AND KAAL SARPA PUJAS.',
          image: '/special-prayers-real.jpg',
        },
        {
          icon: Gem,
          title: 'Personalised Talisman',
          description:
            'Purpose-based talismans for protection, studies, marriage, business, childbirth, safety and success in life.',
          details:
            '01. For the safety of drivers & passengers against accidents. 02. For the development of skill and intellect of low achievers. 03. For the success in exams. 04. For the success in love & marriage. 05. For the attraction of opposite sex. 06. For self protection against evils. 07. For the protection of houses against evils. 08. For sexual vigour (MEN). 09. For the success of small or big business. 10. For pregnant woman to have good delivery. 11. For couples having problems to get children. 12. For the prevention against premature death and other useful talismans for happiness & success in life.',
          image: '/talisman.avif',
        },
      ],
    },
    gallery: {
      badge: 'Photo Highlights',
      heading: 'Special Pujas',
      description:
        'Tap or click any photo to open it full screen.',
      items: [
        { title: 'Blessings & Ritual Presence', description: 'Moments from spiritual and consultation settings.', image: '/gallery-1.jpg' },
        { title: 'Manglik Dosha', description: 'Information visual related to Manglik considerations.', image: '/gallery-2.jpg' },
        { title: 'Kaal Sarp Dosha', description: 'Reference image connected to Kaal Sarp remedies.', image: '/gallery-3.jpg' },
        { title: 'Delay in Marriage', description: 'A remedy-oriented visual for marriage timing concerns.', image: '/gallery-4.jpg' },
        { title: 'Pitra Dosha', description: 'Visual information related to ancestral influences.', image: '/gallery-5.jpg' },
        { title: 'Guru Presence', description: 'Another customer-provided photo included in the site gallery.', image: '/gallery-6.jpg' },
        { title: 'Pregnancy Related Reading', description: 'Reference image connected to family and parenthood guidance.', image: '/gallery-8.jpg' },
        { title: 'Special Puja Chart', description: 'A customer-provided astrology chart reference connected to special pujas and life readings.', image: '/special-puja-chart.jpg' },
      ],
    },
    calendar: {
      badge: 'Hindu Lunar Calendar 2026',
      heading: 'Plan vrats, festivals and sacred timings with clarity',
      description:
        'This Hindu Lunar Calendar is a practical visual guide for 2026, bringing together important tithis, ekadashi dates, purnima, amavasya and major Hindu festivals. It helps families, devotees and astrology clients stay aligned with meaningful spiritual dates throughout the year.',
      highlightsTitle: 'Why this calendar matters',
      highlightsSubtitle: 'A practical spiritual reference for everyday use',
      highlights: [
        'Includes lunar months, tithis, purnima and amavasya timings.',
        'Useful for vrat, puja planning, auspicious observances and family rituals.',
        'A practical year view for Mauritius-based timing with Hindu festival references.',
      ],
      helpTitle: 'Need help choosing the right date?',
      helpDescription:
        'We can guide you on the best dates for puja, marriage discussions, travel, new beginnings and important family observances according to your chart and the lunar calendar.',
    },
    contact: {
      badge: 'Get in Touch',
      heading: 'Begin Your Journey',
      description: 'Ready to discover your cosmic path? Reach out for personalised consultations, remedies and spiritual guidance.',
      officeTitle: 'Office Address',
      phoneTitle: 'Phone',
      emailTitle: 'Email',
      hoursTitle: 'Working Hours',
      followUs: 'Follow Us',
      startTitle: 'Start Your Journey',
      startDescription: 'Connect with us on WhatsApp or by phone for quick guidance and consultation booking.',
      languages: 'Languages: English, French, Hindi, Bhojpuri & Creole',
      onlineTitle: 'Online consultation by WhatsApp & Email',
      onlineText1: 'Online Consultations / Pujas via WhatsApp possible, including for people living abroad.',
      onlineText2: 'Please provide Birth Details: ID Name, Date, Time and Place of Birth.',
      onlineText3: 'Please call or WhatsApp 57934613 for more details and information.',
      onlineText4: 'Juice payment / Bank transfer available.',
      address2Title: 'Residential Address',
      workingHoursText: 'Monday - Sunday: 9:00 AM - 8:00 PM',
    },
    footer: {
      description: 'Guiding destiny through ancient Vedic wisdom with consultations, remedies, naming, matchmaking and calendar-based spiritual timing.',
      quickLinks: 'Quick Links',
      services: 'Popular Services',
      rights: '© 2026 Neer Astrology. All rights reserved.',
      tagline: 'Designed for cosmic guidance, clarity and spiritual timing.',
      creditsLine1: 'Website developed and hosted by KPM Studios.',
      creditsLine2: 'Visit us at www.kpmstudios.com',
    },
  },
  fr: {
    nav: { home: 'Accueil', about: 'À propos', services: 'Services', gallery: 'Galerie', calendar: 'Calendrier', contact: 'Contact' },
    common: {
      whatsapp: 'WhatsApp',
      chatOnWhatsApp: 'Discuter sur WhatsApp',
      exploreServices: 'Découvrir les services',
      onlineConsultation: 'Consultation en ligne par WhatsApp et e-mail',
      contactUs: 'Nous contacter',
      askOnWhatsApp: 'Demander sur WhatsApp',
      learnMore: 'En savoir plus',
      close: 'Fermer',
      readMore: 'Lire plus',
      readLess: 'Lire moins',
      enquireOnWhatsApp: 'Demander sur WhatsApp',
      languageLabel: 'Langue',
      callNow: 'Appeler maintenant',
    },
    brand: { title: 'Neer Astrology', subtitle: 'Neer Jyotish' },
    hero: {
      badge: 'Expert en astrologie védique',
      titleLine1: 'Retrouvez la paix intérieure et',
      titleLine2: 'apprenez à mieux vous connaître',
      description:
        'Nous vous guidons dans le parcours de la vie grâce à la sagesse védique ancienne et aux connaissances célestes. Découvrez votre vraie voie grâce à des consultations astrologiques personnalisées.',
    },
    about: {
      badge: 'À propos de Neer Jyotish',
      heading: 'Rencontrez votre Guru',
      subheading: PERSON_NAME,
      intro1:
        `Avec plusieurs décennies d’expérience en astrologie védique, numérologie, gemmologie et vastu, ${PERSON_NAME} accompagne des personnes et des familles à la recherche de clarté pour le mariage, le bon moment, les remèdes, la prospérité, la santé et l’équilibre spirituel.`,
      intro2:
        'Chaque consultation est pensée pour être pratique, personnelle et enracinée dans la tradition, en associant la sagesse ancestrale à des décisions concrètes pour les clients à Maurice et à l’étranger.',
      tags: ['Astrologie védique', 'Numérologie', 'Gemmologie', 'Vastu Shastra', 'Compatibilité astrologique'],
      features: ['Astrologue certifié', '10 000+ clients satisfaits', 'Consultations mondiales', 'Conseils personnalisés'],
      guruTitle: 'Message du Guru',
      guruIntro: '',
      guruParagraphs: [
        'L’astrologie est l’art d’interpréter les influences ésotériques des étoiles et des planètes sur les affaires humaines. Elle trouve son origine dans les Védas et elle est aujourd’hui étudiée à travers le monde. La connaissance est une force, et l’astrologie agit comme une clé maîtresse qui ouvre la vérité. Lorsque nous comprenons les indications du destin et les dangers possibles à venir, nous pouvons faire de meilleurs choix et éviter des souffrances inutiles. Être averti, c’est être préparé.',
        'L’astrologie indique la structure sur laquelle la vie est bâtie. Les étoiles et les planètes peuvent suggérer ce qui est susceptible d’arriver, mais grâce à l’intelligence et au libre arbitre, il est possible de modifier le cours naturel des événements. La personne sage coopère avec les énergies planétaires et accroît ainsi son bonheur, son efficacité et son utilité dans le monde.',
        'L’astrologie met en lumière les faiblesses de notre caractère et explique parfois pourquoi la réussite tarde dans certains domaines de la vie. Elle nous avertit lorsqu’une souffrance peut naître de nos propres fragilités ou lorsqu’un revers risque d’approcher. Elle montre le chemin le plus court, le plus sûr et le plus juste vers un objectif. Elle apporte des solutions et révèle nos tendances physiques, mentales et spirituelles.',
        'L’astrologie permet de nous analyser et de nous diagnostiquer. Avec son aide, ainsi qu’avec l’intelligence et le libre arbitre, nous pouvons éviter les dangers et transformer les opportunités en avantages. Elle ouvre de vastes champs de connaissance, élargit la conscience et nous aide à devenir maîtres des circonstances plutôt que victimes.',
        'Nos anciens sages ont étudié l’astrologie en profondeur et ont établi des règles pour prédire les affaires personnelles, les maladies, le climat, les calamités, les couronnements, les guerres, les pluies, les tremblements de terre et bien d’autres événements. Leurs principes restent pertinents encore aujourd’hui.',
        'Même des figures publiques modernes ont discrètement consulté l’astrologie avant de prendre de grandes décisions. L’astrologie est aussi importante pour la vie humaine que la psychologie, car elle complète la compréhension du conscient et du subconscient et offre une direction vers l’harmonie du corps, de l’esprit et de l’âme.',
      ],
      yearsExperience: 'Années d’expérience',
    },
    services: {
      badge: 'Nos services',
      heading: 'Orientation claire, remèdes pratiques et accompagnement personnel',
      description:
        'Une gamme structurée de services astrologiques pour les décisions de vie, la compatibilité, les remèdes, les moments favorables, le choix des noms et les consultations en ligne pour les clients à Maurice et à l’étranger.',
      items: [
        {
          icon: Star,
          title: 'Lecture de Kundli',
          description: 'Une lecture claire de votre thème natal pour comprendre la personnalité, le timing et la direction de vie.',
          details:
            'Une consultation personnalisée du thème natal couvrant les principales influences planétaires, les forces, les défis, les périodes importantes et des conseils pratiques pour la vie, les relations, le travail et l’orientation spirituelle.',
          image: '/kundali.jpg',
        },
        {
          icon: ScrollText,
          title: 'Prédictions générales (Janam Kundli)',
          description:
            'Analyse détaillée de la vie et du thème natal concernant la personnalité, l’éducation, les finances, le mariage, les enfants, les voyages et plus encore. (PDF 20 pages)',
          details:
            'Concernant la vie, les caractéristiques générales et spécifiques, l’apparence physique, les études, les finances et richesses, la santé, les maladies, la famille, les ennemis, l’amitié, l’amour, le mariage, le partenaire, les enfants, la vie sociale, les voyages à l’étranger, les véhicules, les profits et pertes, les pierres, numéros de chance, numéro de plaque personnalisé, jours, couleurs favorables et tous les aspects des planètes du thème natal. (PDF 20 pages)',
          image: '/predictions.jpg',
        },
        {
          icon: ScrollText,
          title: 'Prédictions annuelles (Vaarshik Phal)',
          description:
            'D’un anniversaire au suivant. Aspects des planètes dans les 12 maisons pendant l’année concernant richesse, santé, maladies, finances, revenus et dépenses, affaires, commerce, accidents, réussite professionnelle, amour, mariage, ennemis, voyages, etc. (PDF 9 pages)',
          details:
            'Lecture annuelle d’un anniversaire au suivant couvrant les aspects des planètes dans les 12 maisons concernant la richesse, la santé, les maladies, les finances, les revenus et dépenses, les affaires, le commerce, les accidents, la réussite professionnelle, l’amour, le mariage, les ennemis et les voyages. (PDF 9 pages)',
          image: '/predictions1.jpg',
        },
        {
          icon: HeartHandshake,
          title: 'Kundli Milan',
          description:
            'Étude de compatibilité amoureuse et matrimoniale pour évaluer l’harmonie, le tempérament et le potentiel durable. (PDF 6 pages)',
          details: [
            'KUNDLI MATCHING (KUNDLI MILAN)',
            'Le coup de foudre ou l’amour seul ne suffit pas pour construire un bon mariage. Le caractère, le tempérament et les thèmes astraux des futurs partenaires doivent aussi être étudiés. L’astrologie et la compatibilité permettent de vérifier l’harmonie durable.',
            'Cette étude est utile pour les personnes qui souhaitent faire un matching avant le mariage, ou pour celles qui veulent mieux comprendre leur future vie conjugale.',
            'Échec ou réussite',
            'L’astrologie aide à analyser la vie sentimentale, affective et conjugale avec votre partenaire: tendresse, tolérance, confiance, romantisme, excitation et affection, mais aussi confrontation, agressivité, impulsivité, impatience, infidélité, désaccords, disputes, tristesse ou scènes violentes dans la relation.',
            'En amour, cette compatibilité permet de savoir ce que les astres réservent à votre relation et d’éviter la séparation, la rupture ou même le divorce après le mariage.',
            'COMPATIBILITÉ AMOUR & MARIAGE (KUNDALI MATCHING)',
            'Le kundli matching est considéré depuis longtemps comme l’un des aspects les plus importants des mariages indiens. Même si certains courants modernes en minimisent l’importance, l’astrologie continue d’offrir une base solide montrant que la comparaison des horoscopes reste utile, même dans les mariages d’amour.',
            'La comparaison des horoscopes permet de prévoir de nombreux aspects de la vie conjugale et d’éviter certains problèmes. L’astrologie védique recommande fortement cette étape pour prévenir des difficultés majeures dans le futur.',
            'Une première raison est de vérifier la compatibilité mentale et physique du couple. Cela inclut l’attitude, l’état d’esprit, le tempérament et le comportement, qui constituent la base d’un mariage réussi. L’attirance physique est aussi prise en compte afin d’évaluer le potentiel d’une relation durable.',
            'Le kundli matching sert aussi à vérifier si le mouvement des planètes dans le thème de l’un peut freiner ou nuire à la carrière et à l’évolution de l’autre. Bhakoot, le septième guna, reflète cet effet.',
            'Les thèmes sont également comparés afin de réduire l’impact négatif des dashas sur le mariage et l’avenir du couple. Certaines positions planétaires à la naissance peuvent créer des périodes comme Mangal Dasha ou Shani Dasha, sources de difficultés conjugales. Grâce au matching, ces influences peuvent être détectées et des pujas adaptées peuvent être conseillées.',
            'Cette analyse permet aussi de prévoir la santé et le bonheur des futurs enfants. Nadi, le huitième guna du kundli, aide à indiquer les possibilités liées à la naissance et les difficultés éventuelles. Pour une famille heureuse et équilibrée, cet aspect est important.',
            'Le Kundali Milan est également important dans les mariages d’amour. Même si les couples redoutent parfois un résultat négatif, cette démarche peut au contraire aider à éviter des problèmes futurs. Comme l’astrologie propose aussi des solutions par les pujas et remèdes, cela peut renforcer le lien.',
            'Enfin, le kundli matching peut aider à finaliser des mariages où tous les autres éléments semblent favorables mais où l’horoscope soulève encore une réserve. Dans ces cas, des astrologues expérimentés peuvent recommander des upayas spécifiques pour réduire les effets négatifs des thèmes.',
          ],
          image: '/kundali-matching-real.jpg',
        },
        {
          icon: Users,
          title: 'Services matrimoniaux',
          description:
            'Accompagnement réfléchi pour garçons, filles et divorcés à la recherche d’un partenaire compatible avec l’aide de l’astrologie.',
          details:
            'Un accompagnement matrimonial personnalisé pour garçons, filles et divorcés avec des indications de compatibilité astrologique, des conseils adaptés à la famille et une approche concrète pour trouver un partenaire approprié.',
          image: '/matrimonial.jpg',
        },
        {
          icon: Baby,
          title: 'Nom selon l’étoile de naissance (Nakshatra Naamkaran)',
          description:
            'Conseils de prénom pour nouveau-né à partir des données de naissance, du panchaang et des positions planétaires. (PDF 3 pages)',
          details:
            'Concernant les détails de naissance, le panchaang, la sadesati, l’ascendant (Lagna), la position des planètes et 5 propositions de prénoms pour le nouveau-né. (PDF 3 pages)',
          image: '/baby.jpg',
        },
        {
          icon: House,
          title: 'Consultation Vastu',
          description:
            'Conseils vastu pour habitations et locaux commerciaux basés sur l’équilibre des cinq éléments naturels.',
          details:
            'Consultation pour biens résidentiels ou commerciaux basée sur les principes architecturaux indiens anciens afin d’équilibrer les cinq éléments naturels (terre, eau, feu, air, espace).',
          image: '/vastu.jpg',
        },
        {
          icon: Baby,
          title: 'Parcours vers la parentalité',
          description: 'Accompagnement spirituel pour les couples souhaitant une conception et une vie familiale harmonieuse.',
          details: 'Concevoir l’enfant de votre choix selon l’astrologie indienne.',
          image: '/choice-child.jpg',
        },
        {
          icon: Clock,
          title: 'Muhurta',
          description:
            'Moments favorables pour mariages, achats, voyages, affaires, chirurgie, fiançailles et autres événements importants.',
          details:
            'Fixation d’un moment auspicieux (Muhurtha) pour mariages, fiançailles, constructions, achats, activités commerciales, chirurgie, voyages, etc.',
          image: '/muhurta.jpg',
        },
        {
          icon: MoonStar,
          title: 'Prières spéciales',
          description: 'Pujas ciblées pour réduire les influences planétaires difficiles et rétablir l’équilibre.',
          details: 'CONTRE LES INFLUENCES NÉGATIVES DES PLANÈTES : PUJAS MANGAL, RAHU, SHANI, MULA ET KAAL SARPA.',
          image: '/special-prayers-real.jpg',
        },
        {
          icon: Gem,
          title: 'Talisman personnalisé',
          description:
            'Talismans selon le besoin pour la protection, les études, le mariage, les affaires, l’accouchement, la sécurité et la réussite.',
          details:
            '01. Sécurité des conducteurs et passagers contre les accidents. 02. Développement des compétences et de l’intellect des faibles performeurs. 03. Réussite aux examens. 04. Réussite en amour et mariage. 05. Attraction du sexe opposé. 06. Protection contre les énergies négatives. 07. Protection de la maison contre les influences négatives. 08. Vigueur sexuelle (HOMMES). 09. Réussite d’une petite ou grande entreprise. 10. Bon accouchement pour les femmes enceintes. 11. Aide pour les couples ayant des difficultés à avoir des enfants. 12. Prévention contre la mort prématurée et autres talismans utiles pour le bonheur et le succès.',
          image: '/talisman.avif',
        },
      ],
    },
    gallery: {
      badge: 'Galerie photos',
      heading: 'Special Pujas',
      description:
        'Touchez ou cliquez sur une photo pour l’ouvrir en plein écran.',
      items: [
        { title: 'Bénédictions & présence spirituelle', description: 'Moments issus de contextes spirituels et de consultation.', image: '/gallery-1.jpg' },
        { title: 'Manglik Dosha', description: 'Visuel d’information lié aux considérations Manglik.', image: '/gallery-2.jpg' },
        { title: 'Kaal Sarp Dosha', description: 'Image de référence liée aux remèdes Kaal Sarp.', image: '/gallery-3.jpg' },
        { title: 'Retard de mariage', description: 'Visuel orienté remèdes pour les questions de timing du mariage.', image: '/gallery-4.jpg' },
        { title: 'Pitra Dosha', description: 'Visuel d’information lié aux influences ancestrales.', image: '/gallery-5.jpg' },
        { title: 'Présence du Guru', description: 'Autre photo fournie par le client et ajoutée au site.', image: '/gallery-6.jpg' },
        { title: 'Lecture liée à la grossesse', description: 'Image liée à la famille et à l’accompagnement vers la parentalité.', image: '/gallery-8.jpg' },
        { title: 'Schéma de puja spéciale', description: 'Image de référence fournie par le client pour les pujas spéciales et les lectures astrologiques.', image: '/special-puja-chart.jpg' },
      ],
    },
    calendar: {
      badge: 'Calendrier lunaire hindou 2026',
      heading: 'Planifiez les vrats, festivals et moments sacrés avec clarté',
      description:
        'Ce calendrier lunaire hindou est un guide visuel pratique pour 2026, regroupant les tithis importantes, les dates d’ekadashi, la purnima, l’amavasya et les principaux festivals hindous. Il aide les familles, les dévots et les clients en astrologie à rester alignés avec les dates spirituelles essentielles tout au long de l’année.',
      highlightsTitle: 'Pourquoi ce calendrier est utile',
      highlightsSubtitle: 'Une référence spirituelle pratique au quotidien',
      highlights: [
        'Inclut les mois lunaires, tithis, horaires de purnima et d’amavasya.',
        'Utile pour les vrats, la planification des pujas, les observances auspicieuses et les rituels familiaux.',
        'Vue annuelle pratique avec références de timing pour Maurice et les festivals hindous.',
      ],
      helpTitle: 'Besoin d’aide pour choisir la bonne date ?',
      helpDescription:
        'Nous pouvons vous guider vers les meilleures dates pour une puja, des discussions de mariage, un voyage, un nouveau départ ou des observances familiales importantes selon votre thème et le calendrier lunaire.',
    },
    contact: {
      badge: 'Contact',
      heading: 'Commencez votre parcours',
      description: 'Prêt à découvrir votre voie cosmique ? Contactez-nous pour des consultations personnalisées, des remèdes et des conseils spirituels.',
      officeTitle: 'Adresse du bureau',
      phoneTitle: 'Téléphone',
      emailTitle: 'Email',
      hoursTitle: 'Heures de consultation',
      followUs: 'Suivez-nous',
      startTitle: 'Commencez votre parcours',
      startDescription: 'Contactez-nous sur WhatsApp ou par téléphone pour une réponse rapide et la réservation d’une consultation.',
      languages: 'Langues : anglais, français, hindi, bhojpuri & créole',
      onlineTitle: 'Consultation en ligne par WhatsApp et e-mail',
      onlineText1: 'Consultations / Pujas en ligne via WhatsApp possibles, y compris pour les personnes vivant à l’étranger.',
      onlineText2: 'Veuillez fournir les détails de naissance : nom sur la pièce d’identité, date, heure et lieu de naissance.',
      onlineText3: 'Veuillez appeler ou envoyer un WhatsApp au 57934613 pour plus de détails et d’informations.',
      onlineText4: 'Paiement Juice / virement bancaire disponible.',
      address2Title: 'Adresse résidentielle',
      workingHoursText: 'Lundi - Dimanche : 9:00 AM - 8:00 PM',
    },
    footer: {
      description: 'Nous guidons le destin grâce à la sagesse védique ancienne avec consultations, remèdes, choix du nom, compatibilité et calendrier spirituel.',
      quickLinks: 'Liens rapides',
      services: 'Services populaires',
      rights: '© 2026 Neer Astrology. Tous droits réservés.',
      tagline: 'Conçu pour l’orientation cosmique, la clarté et le bon timing spirituel.',
      creditsLine1: 'Site web développé et hébergé par KPM Studios.',
      creditsLine2: 'Visitez-nous sur www.kpmstudios.com',
    },
  },
  hi: {
    nav: { home: 'होम', about: 'परिचय', services: 'सेवाएं', gallery: 'गैलरी', calendar: 'कैलेंडर', contact: 'संपर्क' },
    common: {
      whatsapp: 'व्हाट्सऐप',
      chatOnWhatsApp: 'व्हाट्सऐप पर चैट करें',
      exploreServices: 'सेवाएं देखें',
      onlineConsultation: 'व्हाट्सऐप और ईमेल द्वारा ऑनलाइन परामर्श',
      contactUs: 'संपर्क करें',
      askOnWhatsApp: 'व्हाट्सऐप पर पूछें',
      learnMore: 'और जानें',
      close: 'बंद करें',
      readMore: 'और पढ़ें',
      readLess: 'कम पढ़ें',
      enquireOnWhatsApp: 'व्हाट्सऐप पर पूछताछ करें',
      languageLabel: 'भाषा',
      callNow: 'अभी कॉल करें',
    },
    brand: { title: 'Neer Astrology', subtitle: 'Neer Jyotish' },
    hero: {
      badge: 'वैदिक ज्योतिष विशेषज्ञ',
      titleLine1: 'मन की शांति पाएँ और',
      titleLine2: 'खुद को बेहतर जानें',
      description:
        'प्राचीन वैदिक ज्ञान और ग्रह-नक्षत्रों की समझ के साथ जीवन यात्रा में आपका मार्गदर्शन। व्यक्तिगत ज्योतिषीय परामर्श से अपना सही मार्ग जानें।',
    },
    about: {
      badge: 'Neer Jyotish के बारे में',
      heading: 'अपने गुरु से मिलें',
      subheading: PERSON_NAME,
      intro1:
        `वैदिक ज्योतिष, अंकशास्त्र, रत्नशास्त्र और वास्तु में दशकों के अनुभव के साथ ${PERSON_NAME} ने विवाह, सही समय, उपाय, समृद्धि, स्वास्थ्य और आध्यात्मिक संतुलन की तलाश करने वाले लोगों और परिवारों का मार्गदर्शन किया है।`,
      intro2:
        'हर परामर्श व्यावहारिक, व्यक्तिगत और आध्यात्मिक रूप से संतुलित रखा जाता है, ताकि पारंपरिक ज्ञान को वास्तविक जीवन के निर्णयों से जोड़ा जा सके, चाहे ग्राहक मॉरिशस में हों या विदेश में।',
      tags: ['वैदिक ज्योतिष', 'अंकशास्त्र', 'रत्नशास्त्र', 'वास्तु शास्त्र', 'कुंडली मिलान'],
      features: ['प्रमाणित ज्योतिषी', '10,000+ संतुष्ट ग्राहक', 'वैश्विक परामर्श', 'व्यक्तिगत मार्गदर्शन'],
      guruTitle: 'गुरु का संदेश',
      guruIntro: '',
      guruParagraphs: [
        'ज्योतिष मानव जीवन पर ग्रहों और नक्षत्रों के गूढ़ प्रभावों को समझने की कला है। इसका मूल वेदों में है और आज इसे विश्वभर में अध्ययन किया जाता है। ज्ञान शक्ति है, और ज्योतिष सत्य के ताले की मास्टर चाबी की तरह काम करता है। जब हम भाग्य के संकेतों और आगे आने वाली कठिनाइयों को समझते हैं, तब हम बेहतर निर्णय ले सकते हैं और अनावश्यक दुख से बच सकते हैं।',
        'ज्योतिष जीवन की उस संरचना को दिखाता है जिस पर हमारा जीवन बना है। ग्रह और नक्षत्र यह संकेत दे सकते हैं कि क्या होने की संभावना है, फिर भी बुद्धि और स्वतंत्र इच्छा से इंसान घटनाओं की दिशा बदल सकता है।',
        'ज्योतिष हमारे स्वभाव की कमजोरियों को उजागर करता है और यह समझने में मदद करता है कि जीवन के कुछ क्षेत्रों में सफलता क्यों नहीं मिल रही। यह संभावित दुख और कठिनाइयों की पूर्व चेतावनी देता है और लक्ष्य तक पहुँचने का अधिक सुरक्षित मार्ग दिखाता है।',
        'ज्योतिष की सहायता से हम स्वयं का विश्लेषण कर सकते हैं। बुद्धि और स्वतंत्र इच्छा के साथ मिलकर यह हमें खतरों से बचने और अवसरों को लाभ में बदलने में मदद करता है।',
        'हमारे प्राचीन ऋषियों ने ज्योतिष का गहन अध्ययन किया और व्यक्तिगत जीवन, रोग, मौसम, आपदाओं, युद्ध, वर्षा, भूकंप और अनेक घटनाओं की भविष्यवाणी के नियम स्थापित किए। उनके सिद्धांत आज भी प्रासंगिक हैं।',
        'आधुनिक सार्वजनिक जीवन के कई लोग भी बड़े निर्णयों से पहले चुपचाप ज्योतिष की सलाह लेते रहे हैं। ज्योतिष मानव जीवन में उतना ही महत्वपूर्ण है जितना मनोविज्ञान, क्योंकि यह शरीर, मन और आत्मा के संतुलन की दिशा देता है।',
      ],
      yearsExperience: 'वर्षों का अनुभव',
    },
    services: {
      badge: 'हमारी सेवाएं',
      heading: 'स्पष्ट मार्गदर्शन, व्यावहारिक उपाय और व्यक्तिगत देखभाल',
      description:
        'जीवन के निर्णयों, अनुकूलता, उपायों, शुभ समय, नामकरण और ऑनलाइन परामर्श के लिए सावधानी से तैयार की गई ज्योतिषीय सेवाओं की श्रृंखला।',
      items: [
        {
          icon: Star,
          title: 'कुंडली रीडिंग',
          description: 'आपकी जन्म कुंडली का स्पष्ट अध्ययन, जिससे व्यक्तित्व, समय, कर्म पैटर्न और जीवन दिशा समझी जा सके।',
          details:
            'व्यक्तिगत जन्म कुंडली परामर्श जिसमें प्रमुख ग्रह प्रभाव, शक्तियां, चुनौतियां, महत्वपूर्ण समय चक्र और जीवन, संबंध, कार्य और आध्यात्मिक दिशा के लिए व्यावहारिक मार्गदर्शन शामिल है।',
          image: '/kundali.jpg',
        },
        {
          icon: ScrollText,
          title: 'सामान्य भविष्यवाणी (जनम कुंडली)',
          description:
            'व्यक्तित्व, शिक्षा, धन, विवाह, संतान, यात्रा और अन्य विषयों पर विस्तृत जीवन भविष्यवाणी और कुंडली विश्लेषण। (20 पेज PDF)',
          details:
            'जीवन, सामान्य गुण, विशेष गुण, शारीरिक रूप, शिक्षा, धन-संपत्ति, स्वास्थ्य, रोग, परिवार, शत्रु, मित्रता, प्रेम, विवाह, जीवनसाथी, संतान, सामाजिक जीवन, विदेश यात्रा, वाहन, लाभ-हानि, शुभ रत्न, भाग्यशाली अंक, व्यक्तिगत कार प्लेट नंबर, दिन, अनुकूल रंग और जन्म कुंडली में ग्रहों के सभी पहलुओं का विस्तृत अध्ययन। (20 पेज PDF)',
          image: '/predictions.jpg',
        },
        {
          icon: ScrollText,
          title: 'वार्षिक भविष्यवाणी (वार्षिक फल)',
          description:
            'जन्मदिन से अगले जन्मदिन तक। वर्ष के दौरान 12 भावों में ग्रहों के प्रभाव: धन, स्वास्थ्य, रोग, वित्त, आय और व्यय, व्यापार, कारोबार, दुर्घटनाएं, नौकरी में सफलता, प्रेम, विवाह, शत्रु, यात्राएं आदि। (9 पेज PDF)',
          details:
            'जन्मदिन से अगले जन्मदिन तक की वार्षिक रीडिंग, जिसमें 12 भावों में ग्रहों के प्रभावों के आधार पर धन, स्वास्थ्य, रोग, वित्त, आय और व्यय, व्यापार, कारोबार, दुर्घटनाएं, नौकरी में सफलता, प्रेम, विवाह, शत्रु और यात्राओं का विश्लेषण शामिल है। (9 पेज PDF)',
          image: '/predictions1.jpg',
        },
        {
          icon: HeartHandshake,
          title: 'कुंडली मिलान',
          description:
            'प्रेम और विवाह अनुकूलता का मार्गदर्शन, जिससे सामंजस्य, स्वभाव और लंबे संबंध की संभावना का आकलन किया जा सके। (6 पेज PDF)',
          details: [
            'KUNDLI MATCHING (KUNDLI MILAN)',
            'पहली नजर का प्यार या केवल प्रेम एक अच्छे विवाह के लिए पर्याप्त नहीं होता। भावी जीवनसाथियों के स्वभाव, चरित्र और कुंडलियों का मिलान भी आवश्यक है। ज्योतिष और उचित मैच-मेकिंग से दीर्घकालिक सामंजस्य की पुष्टि की जा सकती है।',
            'यह उन लोगों के लिए उपयोगी है जो विवाह से पहले मैच-मेकिंग करवाना चाहते हैं या भविष्य के वैवाहिक जीवन की झलक समझना चाहते हैं।',
            'असफलता या सफलता',
            'ज्योतिष आपके भावनात्मक, प्रेमपूर्ण और दांपत्य जीवन का आकलन करने में मदद करता है: कोमलता, सहनशीलता, विश्वास, रोमांस, आकर्षण और प्रेम, साथ ही टकराव, आक्रामकता, आवेग, अधीरता, बेवफाई, मतभेद, झगड़े, दुख और संबंधों में तीव्र तनाव भी।',
            'प्रेम और अनुकूलता विश्लेषण से यह जाना जा सकता है कि सितारे आपके संबंध के लिए क्या संकेत दे रहे हैं और विवाह के बाद अलगाव, ब्रेकअप या तलाक जैसी स्थितियों से कैसे बचा जा सकता है।',
            'LOVE & MARRIAGE COMPATIBILITY (KUNDALI MATCHING)',
            'कुंडली मिलान भारतीय विवाहों में लंबे समय से सबसे महत्वपूर्ण चरणों में से एक माना जाता है। कुछ आधुनिक विचार इसे महत्व न दें, फिर भी ज्योतिष के पास ऐसा मजबूत आधार है जो दिखाता है कि प्रेम विवाहों में भी कुंडली मिलान उपयोगी रहता है।',
            'कुंडली मिलान से वैवाहिक जीवन के कई पहलुओं का पूर्व अनुमान लगाया जा सकता है और समस्याओं को टाला जा सकता है। वैदिक ज्योतिष भविष्य की बड़ी कठिनाइयों से बचने के लिए इसे दृढ़ता से सुझाता है।',
            'इसका एक प्रमुख उद्देश्य जोड़े की मानसिक और शारीरिक अनुकूलता को समझना है। इसमें सोच, स्वभाव, व्यवहार और दृष्टिकोण शामिल हैं, जो सफल विवाह की बुनियाद हैं। शारीरिक आकर्षण का भी आकलन किया जाता है।',
            'कुंडली मिलान यह भी देखने में मदद करता है कि एक व्यक्ति की कुंडली में ग्रहों की चाल दूसरे व्यक्ति के करियर विकास और प्रगति में बाधा तो नहीं बन रही। भकूट, जो सातवां गुण है, इस प्रभाव को दर्शाता है।',
            'विवाह और दांपत्य भविष्य पर दशाओं के नकारात्मक प्रभाव को कम करने के लिए भी कुंडलियों का मिलान किया जाता है। जन्म के समय ग्रहों की स्थिति मंगल दशा या शनि दशा जैसी स्थितियां बना सकती है। ऐसे प्रभावों को पहचानकर ज्योतिषी उपयुक्त पूजा और उपाय बताते हैं।',
            'कुंडली मिलान से भावी संतान के स्वास्थ्य और सुख का भी अनुमान लगाया जा सकता है। कुंडली का आठवां गुण नाड़ी, संतान संबंधी संकेतों और संभावित समस्याओं को दिखाने में सहायक है।',
            'प्रेम विवाहों में भी कुंडली मिलान महत्वपूर्ण है। यद्यपि कुछ जोड़े नकारात्मक परिणाम के डर से इसे टालना चाहते हैं, वास्तव में यह भविष्य की समस्याओं को रोकने में मदद कर सकता है। पूजा और उपाय संबंध को और मजबूत बनाने में सहायक होते हैं।',
            'अंत में, जहां अन्य सभी पहलू विवाह के लिए अनुकूल हों लेकिन कुंडली को लेकर संदेह हो, वहां अनुभवी ज्योतिषी विशेष उपाय सुझा सकते हैं ताकि नकारात्मक प्रभाव कम किए जा सकें।',
          ],
          image: '/kundali-matching-real.jpg',
        },
        {
          icon: Users,
          title: 'विवाह परामर्श सेवाएं',
          description:
            'लड़कों, लड़कियों और तलाकशुदा व्यक्तियों के लिए उपयुक्त जीवनसाथी खोजने हेतु ज्योतिषीय मार्गदर्शन के साथ विचारपूर्ण सहायता।',
          details:
            'लड़कों, लड़कियों और तलाकशुदा लोगों के लिए व्यक्तिगत विवाह परामर्श, जिसमें कुंडली आधारित अनुकूलता, परिवार-केंद्रित सलाह और उपयुक्त जीवनसाथी खोजने का व्यावहारिक दृष्टिकोण शामिल है।',
          image: '/matrimonial.jpg',
        },
        {
          icon: Baby,
          title: 'जन्म नक्षत्र के अनुसार नामकरण',
          description:
            'नवजात शिशु के लिए जन्म विवरण, पंचांग और ग्रह स्थितियों के आधार पर नाम रखने का मार्गदर्शन। (3 पेज PDF)',
          details:
            'जन्म विवरण, पंचांग, साढ़ेसाती, लग्न कुंडली, ग्रह स्थिति और नवजात शिशु के लिए 5 नामों के सुझाव आदि। (3 पेज PDF)',
          image: '/baby.jpg',
        },
        {
          icon: House,
          title: 'वास्तु परामर्श',
          description:
            'घर और व्यावसायिक स्थानों के लिए पांच प्राकृतिक तत्वों के संतुलन पर आधारित वास्तु मार्गदर्शन।',
          details:
            'प्राचीन भारतीय वास्तु सिद्धांतों के आधार पर आवासीय या व्यावसायिक संपत्तियों के लिए परामर्श, जिससे पृथ्वी, जल, अग्नि, वायु और आकाश का संतुलन स्थापित हो।',
          image: '/vastu.jpg',
        },
        {
          icon: Baby,
          title: 'मातृत्व-पितृत्व यात्रा',
          description: 'गर्भधारण और परिवार नियोजन के लिए आध्यात्मिक मार्गदर्शन चाहने वाले दंपतियों के लिए सहायता।',
          details: 'भारतीय ज्योतिष के अनुसार अपनी पसंद की संतान प्राप्ति के लिए मार्गदर्शन।',
          image: '/choice-child.jpg',
        },
        {
          icon: Clock,
          title: 'मुहूर्त',
          description:
            'विवाह, खरीदारी, यात्रा, व्यापार, सर्जरी, सगाई और अन्य महत्वपूर्ण कार्यों के लिए शुभ समय।',
          details:
            'विवाह, सगाई, निर्माण, खरीदारी, व्यवसाय, सर्जरी, यात्रा आदि के लिए शुभ समय (मुहूर्त) निर्धारण।',
          image: '/muhurta.jpg',
        },
        {
          icon: MoonStar,
          title: 'विशेष पूजाएं',
          description: 'कठिन ग्रह प्रभावों को कम करने और संतुलन बहाल करने के लिए लक्षित पूजाएं।',
          details: 'ग्रहों के नकारात्मक प्रभावों के विरुद्ध: मंगल, राहु, शनि, मूल और काल सर्प पूजाएं।',
          image: '/special-prayers-real.jpg',
        },
        {
          icon: Gem,
          title: 'व्यक्तिगत ताबीज',
          description:
            'सुरक्षा, पढ़ाई, विवाह, व्यापार, संतान, सुरक्षित प्रसव और जीवन की सफलता के लिए उद्देश्य-आधारित ताबीज।',
          details:
            '01. ड्राइवर और यात्रियों की सुरक्षा। 02. कम उपलब्धि वाले बच्चों की बुद्धि और कौशल विकास। 03. परीक्षाओं में सफलता। 04. प्रेम और विवाह में सफलता। 05. विपरीत लिंग का आकर्षण। 06. बुरी शक्तियों से सुरक्षा। 07. घर की रक्षा। 08. यौन शक्ति (पुरुष)। 09. छोटे या बड़े व्यवसाय में सफलता। 10. गर्भवती महिलाओं के सुरक्षित प्रसव हेतु। 11. संतान प्राप्ति में कठिनाई वाले दंपतियों के लिए। 12. अकाल मृत्यु की रोकथाम और जीवन में सुख-सफलता हेतु अन्य उपयोगी ताबीज।',
          image: '/talisman.avif',
        },
      ],
    },
    gallery: {
      badge: 'फोटो हाइलाइट्स',
      heading: 'विशेष पूजाएं',
      description:
        'किसी भी फोटो को पूरा देखने के लिए टैप या क्लिक करें।',
      items: [
        { title: 'आशीर्वाद और आध्यात्मिक उपस्थिति', description: 'आध्यात्मिक और परामर्श के क्षण।', image: '/gallery-1.jpg' },
        { title: 'मांगलिक दोष', description: 'मांगलिक विचारों से जुड़ी जानकारीपूर्ण छवि।', image: '/gallery-2.jpg' },
        { title: 'काल सर्प दोष', description: 'काल सर्प उपायों से संबंधित संदर्भ छवि।', image: '/gallery-3.jpg' },
        { title: 'विवाह में देरी', description: 'विवाह के समय संबंधी चिंताओं के लिए उपाय-आधारित दृश्य।', image: '/gallery-4.jpg' },
        { title: 'पितृ दोष', description: 'पितृ प्रभावों से जुड़ी जानकारीपूर्ण छवि।', image: '/gallery-5.jpg' },
        { title: 'गुरु उपस्थिति', description: 'ग्राहक द्वारा दी गई एक अन्य फोटो।', image: '/gallery-6.jpg' },
        { title: 'गर्भावस्था संबंधी रीडिंग', description: 'परिवार और मातृत्व-पितृत्व मार्गदर्शन से जुड़ी छवि।', image: '/gallery-8.jpg' },
        { title: 'विशेष पूजा चार्ट', description: 'विशेष पूजाओं और ज्योतिषीय रीडिंग से जुड़ी ग्राहक द्वारा दी गई संदर्भ छवि।', image: '/special-puja-chart.jpg' },
      ],
    },
    calendar: {
      badge: 'हिंदू चंद्र कैलेंडर 2026',
      heading: 'व्रत, त्योहार और पवित्र समय स्पष्टता के साथ योजना बनाएं',
      description:
        'यह हिंदू चंद्र कैलेंडर 2026 के लिए एक व्यावहारिक दृश्य मार्गदर्शिका है, जिसमें महत्वपूर्ण तिथियां, एकादशी, पूर्णिमा, अमावस्या और प्रमुख हिंदू त्योहार शामिल हैं। यह परिवारों, भक्तों और ज्योतिष परामर्श लेने वालों को पूरे वर्ष महत्वपूर्ण आध्यात्मिक तिथियों के साथ जुड़े रहने में मदद करता है।',
      highlightsTitle: 'यह कैलेंडर क्यों महत्वपूर्ण है',
      highlightsSubtitle: 'दैनिक उपयोग के लिए एक व्यावहारिक आध्यात्मिक संदर्भ',
      highlights: [
        'चंद्र मास, तिथि, पूर्णिमा और अमावस्या के समय शामिल हैं।',
        'व्रत, पूजा योजना, शुभ पालन और पारिवारिक अनुष्ठानों के लिए उपयोगी।',
        'मॉरिशस आधारित समय और हिंदू त्योहारों के साथ पूरे वर्ष का व्यावहारिक दृश्य।',
      ],
      helpTitle: 'सही तारीख चुनने में मदद चाहिए?',
      helpDescription:
        'हम आपकी कुंडली और चंद्र कैलेंडर के अनुसार पूजा, विवाह चर्चा, यात्रा, नई शुरुआत और महत्वपूर्ण पारिवारिक अवसरों के लिए सर्वोत्तम तिथियां चुनने में मार्गदर्शन कर सकते हैं।',
    },
    contact: {
      badge: 'संपर्क करें',
      heading: 'अपनी यात्रा शुरू करें',
      description: 'क्या आप अपना सही आध्यात्मिक मार्ग जानना चाहते हैं? व्यक्तिगत परामर्श, उपाय और मार्गदर्शन के लिए हमसे संपर्क करें।',
      officeTitle: 'कार्यालय पता',
      phoneTitle: 'फोन',
      emailTitle: 'ईमेल',
      hoursTitle: 'कार्य समय',
      followUs: 'हमें फॉलो करें',
      startTitle: 'अपनी यात्रा शुरू करें',
      startDescription: 'तेज़ मार्गदर्शन और परामर्श बुकिंग के लिए व्हाट्सऐप या फोन पर संपर्क करें।',
      languages: 'भाषाएं: अंग्रेजी, फ्रेंच, हिंदी, भोजपुरी और क्रियोल',
      onlineTitle: 'व्हाट्सऐप और ईमेल द्वारा ऑनलाइन परामर्श',
      onlineText1: 'व्हाट्सऐप के माध्यम से ऑनलाइन परामर्श / पूजा संभव है, विदेश में रहने वालों के लिए भी।',
      onlineText2: 'कृपया जन्म विवरण दें: आईडी नाम, जन्म तिथि, समय और स्थान।',
      onlineText3: 'अधिक जानकारी के लिए 57934613 पर कॉल करें या व्हाट्सऐप करें।',
      onlineText4: 'जूस पेमेंट / बैंक ट्रांसफर उपलब्ध।',
      address2Title: 'आवासीय पता',
      workingHoursText: 'सोमवार - रविवार: 9:00 AM - 8:00 PM',
    },
    footer: {
      description: 'प्राचीन वैदिक ज्ञान के माध्यम से परामर्श, उपाय, नामकरण, मैचमेकिंग और शुभ समय मार्गदर्शन द्वारा जीवन को दिशा देना।',
      quickLinks: 'त्वरित लिंक',
      services: 'लोकप्रिय सेवाएं',
      rights: '© 2026 Neer Astrology. सर्वाधिकार सुरक्षित।',
      tagline: 'आध्यात्मिक मार्गदर्शन, स्पष्टता और सही समय के लिए तैयार किया गया।',
      creditsLine1: 'वेबसाइट KPM Studios द्वारा विकसित और होस्ट की गई है।',
      creditsLine2: 'हमसे www.kpmstudios.com पर मिलें',
    },
  },
};

function SectionBadge({ icon: Icon, label }: { icon: ComponentType<{ className?: string }>; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-[#C4705A]/10 px-5 py-2.5">
      <Icon className="h-4 w-4 text-[#C4705A]" />
      <span className="text-base font-medium text-[#C4705A]">{label}</span>
    </div>
  );
}

function ImageLightbox({
  item,
  onClose,
}: {
  item: { title: string; image: string; description?: string } | null;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = item ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [item]);

  if (!item) return null;
  const showGalleryMeta = !item.image.startsWith('/gallery-');
  const lightboxGridClass = showGalleryMeta ? 'lg:grid-cols-[1.2fr_0.8fr]' : 'lg:grid-cols-1';

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm" onClick={onClose}>
      <div className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] bg-[#FFF9F1] shadow-[0_32px_90px_rgba(0,0,0,0.42)]" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label={translations.en.common.close}
          className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#E6D5C2] bg-white text-[#8F5F2E] shadow-md transition hover:bg-[#FFF8F0]"
        >
          <X className="h-6 w-6" />
        </button>
        <div className={`grid max-h-[92vh] items-stretch ${lightboxGridClass}`}>
          <div className="flex max-h-[92vh] items-center justify-center bg-[#F8F1E8] p-4">
            <img src={item.image} alt={item.title} className="max-h-[82vh] w-auto max-w-full rounded-2xl object-contain" />
          </div>
          {showGalleryMeta ? (
            <div className="overflow-y-auto p-6 sm:p-8">
              <h3 className="text-3xl font-serif text-[#3D3D3D] sm:text-4xl">{item.title}</h3>
              {item.description ? <p className="mt-4 text-lg leading-8 text-[#6B6B6B]">{item.description}</p> : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function Navigation({ lang, onLanguageChange }: { lang: Language; onLanguageChange: (lang: Language) => void }) {
  const t = translations[lang];
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.calendar, href: '#calendar' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#FAF7F2]/96 shadow-sm backdrop-blur-md' : 'bg-[#FAF7F2]/82 backdrop-blur-sm'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3 lg:py-4">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#C4705A]/10 lg:h-12 lg:w-12">
              <Sparkles className="h-5 w-5 text-[#C4705A] lg:h-6 lg:w-6" />
            </div>
            <div className="min-w-0">
              <h1 className="font-serif text-[1.65rem] leading-[0.92] tracking-[-0.04em] text-[#5B371A] drop-shadow-[0_1px_0_rgba(255,248,239,0.9)] sm:text-[1.95rem] lg:text-[2.35rem]">
                {t.brand.title}
              </h1>
              <p className="text-sm font-medium text-[#8E6B47] sm:text-base lg:text-lg">{t.brand.subtitle}</p>
            </div>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="relative text-base font-medium text-[#6B6B6B] transition-colors duration-300 hover:text-[#C4705A]">
                {link.name}
              </a>
            ))}
            <label className="flex items-center rounded-full border border-[#D7C4AE] bg-white/82 px-4 py-2.5 text-[#8F5F2E] shadow-sm backdrop-blur-md">
              <select
                value={lang}
                onChange={(event) => onLanguageChange(event.target.value as Language)}
                aria-label={t.common.languageLabel}
                className="bg-transparent text-base font-medium outline-none"
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="hi">Hindi</option>
              </select>
            </label>
            <a href="https://wa.me/23057934613" target="_blank" rel="noopener noreferrer">
              <Button className="min-h-[54px] rounded-full bg-[#25D366] px-6 py-4 text-base font-medium text-white shadow-[0_12px_30px_rgba(37,211,102,0.22)] hover:bg-[#1EBE5A]">
                <MessageCircle className="h-5 w-5" />
                <span>{t.common.whatsapp}</span>
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <label className="flex min-w-0 items-center rounded-full border border-[#D7C4AE] bg-[#FFF9F1] px-3 py-2 text-[#8F5F2E] shadow-[0_6px_18px_rgba(91,55,26,0.08)]">
              <select
                value={lang}
                onChange={(event) => onLanguageChange(event.target.value as Language)}
                aria-label={t.common.languageLabel}
                className="max-w-[96px] bg-transparent text-sm font-semibold outline-none"
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="hi">Hindi</option>
              </select>
            </label>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E3D2BD] bg-[#FFF9F1] text-[#C4705A] shadow-[0_6px_18px_rgba(91,55,26,0.08)]"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden px-2 pb-3">
            <div className="overflow-hidden rounded-[2rem] border border-[#E3D2BD] bg-gradient-to-b from-[#FCF6EE] to-[#F6EBDD] py-4 shadow-[0_22px_55px_rgba(91,55,26,0.16)] backdrop-blur-sm">
              <div className="space-y-1 px-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block rounded-2xl px-4 py-3.5 text-lg text-[#6B6B6B] transition hover:bg-white/55 hover:text-[#C4705A]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="mt-4 space-y-3 px-5">
                <a href="https://wa.me/23057934613" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="min-h-[56px] w-full rounded-full bg-[#25D366] px-6 py-4 text-base font-medium text-white shadow-[0_14px_34px_rgba(37,211,102,0.24)] hover:bg-[#1EBE5A]">
                    <MessageCircle className="h-5 w-5" />
                    <span>{t.common.chatOnWhatsApp}</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSection({ lang }: { lang: Language }) {
  const t = translations[lang];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#FBF5EC] pt-24">
      <div className="absolute inset-0">
        <img src="/hero-vedic-mandala-clean.png" alt="Soft ivory and gold Vedic astrology mandala" className="h-full w-full scale-[1.03] object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(251,245,236,0.58),rgba(251,245,236,0.26),rgba(251,245,236,0.56))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,250,243,0.6)_0%,rgba(255,250,243,0.36)_26%,rgba(255,250,243,0.12)_48%,rgba(255,250,243,0)_70%)]" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute text-[#C79A58]/45"
            style={{
              left: `${(i * 9 + 7) % 100}%`,
              top: `${(i * 13 + 9) % 100}%`,
              fontSize: `${16 + (i % 4) * 8}px`,
              animation: `float-soft ${5 + (i % 3)}s ease-in-out ${i * 0.25}s infinite`,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B37A] bg-[#FFF7EB]/85 px-5 py-2.5 shadow-[0_10px_30px_rgba(216,179,122,0.14)]">
            <Sparkles className="h-4 w-4 text-[#B98745]" />
            <span className="text-base font-medium uppercase tracking-[0.24em] text-[#A06E34]">{t.hero.badge}</span>
          </div>

          <h1 className="font-serif text-5xl leading-[0.95] text-[#5B371A] drop-shadow-[0_1px_0_rgba(255,248,239,0.9)] sm:text-6xl lg:text-[5.15rem]">
            {t.hero.titleLine1}
            <br />
            {t.hero.titleLine2}
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-xl leading-8 text-[#704A24] sm:text-[1.4rem] sm:leading-9">
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a href="#services">
              <Button className="min-h-[58px] rounded-full bg-[#B98745] px-8 py-4 text-base font-medium text-white shadow-[0_12px_30px_rgba(185,135,69,0.22)] hover:bg-[#A57437]">
                <span>{t.common.exploreServices}</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <a href="#online-consultation">
              <Button className="min-h-[58px] rounded-full bg-[#C4705A] px-8 py-4 text-base font-medium text-white shadow-[0_12px_30px_rgba(196,112,90,0.22)] hover:bg-[#A85D48]">
                <Phone className="h-5 w-5" />
                <span>{t.common.onlineConsultation}</span>
              </Button>
            </a>
            <a href="https://wa.me/23057934613" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="min-h-[58px] rounded-full border border-[#25D366] bg-white/92 px-8 py-4 text-base font-medium text-[#128C7E] shadow-[0_10px_28px_rgba(37,211,102,0.14)] hover:bg-[#F1FFF5]">
                <MessageCircle className="h-5 w-5" />
                <span>{t.common.chatOnWhatsApp}</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ lang }: { lang: Language }) {
  const t = translations[lang];
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="relative bg-[#F5EDE4] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-[1.12fr_0.88fr]">
              <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-lg">
                <img src="/astrologer-real.jpg" alt={`${PERSON_NAME} portrait`} className="h-[520px] w-full rounded-[1.5rem] object-cover object-top" />
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:mt-16">
                <div className="overflow-hidden rounded-[1.8rem] bg-white p-3 shadow-lg">
                  <img src="/1edited_photo_v2.jpg" alt={`${PERSON_NAME} portrait`} className="h-[250px] w-full rounded-[1.35rem] object-cover object-center" />
                </div>
                <div className="rounded-[1.8rem] bg-white p-6 shadow-lg">
                  <div className="text-4xl font-serif text-[#C4705A]">20+</div>
                  <div className="mt-1 text-lg text-[#6B6B6B]">{t.about.yearsExperience}</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionBadge icon={Award} label={t.about.badge} />
            <h2 className="mt-6 text-5xl font-serif text-[#3D3D3D] lg:text-[3.55rem]">{t.about.heading}</h2>
            <p className="notranslate mt-3 text-3xl font-serif text-[#C4705A]" lang="en" translate="no">{t.about.subheading}</p>
            <p className="mt-6 text-lg leading-8 text-[#6B6B6B] sm:text-xl">{renderNameLockedText(t.about.intro1)}</p>
            <p className="mt-5 text-lg leading-8 text-[#6B6B6B] sm:text-xl">{t.about.intro2}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {t.about.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[#E5DDD4] bg-white px-4 py-2.5 text-base text-[#6B6B6B]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {t.about.features.map((feature, index) => {
                const icons = [Award, Users, Globe, Clock];
                const Icon = icons[index] ?? Sparkles;
                return (
                  <div key={feature} className="flex items-center gap-3 rounded-2xl bg-white/75 p-4 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C4705A]/10">
                      <Icon className="h-5 w-5 text-[#C4705A]" />
                    </div>
                    <span className="text-lg text-[#3D3D3D]">{feature}</span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        <Card className="mt-12 rounded-[2rem] border border-[#E5DDD4] bg-[#FFF9F1] shadow-sm">
          <CardContent className="p-7 sm:p-8 lg:p-10">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-[#C4705A]/10">
                <BookOpen className="h-5 w-5 text-[#C4705A]" />
              </div>
              <div>
                <h3 className="text-3xl font-serif text-[#3D3D3D]">{t.about.guruTitle}</h3>
                <p className="mt-2 text-lg leading-8 text-[#6B6B6B]">{t.about.guruIntro}</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-lg leading-8 text-[#6B6B6B]">
              {(expanded ? t.about.guruParagraphs : t.about.guruParagraphs.slice(0, 2)).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <button type="button" onClick={() => setExpanded((value) => !value)} className="mt-6 inline-flex items-center text-base font-medium text-[#C4705A]">
              {expanded ? t.common.readLess : t.common.readMore}
              <ChevronRight className={`ml-1 h-4 w-4 transition-transform ${expanded ? 'rotate-90' : ''}`} />
            </button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function ServicesSection({ lang }: { lang: Language }) {
  const t = translations[lang];
  const services = t.services.items;
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const selectedServiceDetails = selectedService ? (Array.isArray(selectedService.details) ? selectedService.details : [selectedService.details]) : [];

  useEffect(() => {
    document.body.style.overflow = selectedService ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedService]);

  return (
    <>
      <section id="services" className="relative bg-[#FAF7F2] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <SectionBadge icon={Sparkles} label={t.services.badge} />
            <h2 className="mt-6 text-5xl font-serif text-[#3D3D3D] lg:text-[3.55rem]">{t.services.heading}</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6B6B6B] sm:text-xl">{t.services.description}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="group overflow-hidden rounded-[1.8rem] border border-[#E5DDD4] bg-white/75 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-56 overflow-hidden bg-[#F5EDE4]">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-sm">
                      <Icon className="h-5 w-5 text-[#C4705A]" />
                    </div>
                  </div>
                  <CardContent className="p-6 text-left">
                    <h3 className="mb-3 text-[1.7rem] font-serif leading-tight text-[#3D3D3D] transition-colors group-hover:text-[#C4705A]">{service.title}</h3>
                    <p className="min-h-[110px] text-base leading-7 text-[#6B6B6B]">{service.description}</p>
                    <button type="button" onClick={() => setSelectedService(service)} className="mt-5 inline-flex items-center gap-1 text-base font-medium text-[#C4705A]">
                      <span>{t.common.learnMore}</span>
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {selectedService && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#2B1A0D]/52 px-4 py-4 backdrop-blur-sm" onClick={() => setSelectedService(null)}>
          <div className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-[2rem] border border-[#E5D0B3] bg-[#FFF9F1] shadow-[0_30px_80px_rgba(64,37,12,0.24)]" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              aria-label={t.common.close}
              className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#E6D5C2] bg-white text-[#8F5F2E] shadow-md transition hover:bg-[#FFF8F0]"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
              <div className="h-[280px] bg-[#F5EDE4] lg:sticky lg:top-0 lg:h-[520px]">
                <img src={selectedService.image} alt={selectedService.title} className="h-full w-full object-cover object-center" />
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#C4705A]/10">
                  <selectedService.icon className="h-6 w-6 text-[#C4705A]" />
                </div>
                <h3 className="text-3xl font-serif text-[#3D3D3D] sm:text-4xl">{selectedService.title}</h3>
                <div className="mt-4 space-y-4 text-lg leading-8 text-[#6B6B6B]">
                  {selectedServiceDetails.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch">
                  <a
                    href={`https://wa.me/23057934613?text=${encodeURIComponent(`Hello Guru, I would like to enquire about ${selectedService.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full sm:w-auto"
                  >
                    <Button className="min-h-[56px] w-full rounded-full bg-[#25D366] px-7 py-4 text-base font-medium text-white shadow-[0_12px_30px_rgba(37,211,102,0.22)] hover:bg-[#1EBE5A] sm:w-auto">
                      <MessageCircle className="h-5 w-5" />
                      <span>{t.common.enquireOnWhatsApp}</span>
                    </Button>
                  </a>
                  <Button type="button" variant="outline" onClick={() => setSelectedService(null)} className="min-h-[56px] rounded-full border border-[#C9A26A] bg-[#FFF9F1] px-7 py-4 text-base font-medium text-[#8F5F2E] hover:bg-[#FFF2DE]">
                    <X className="h-5 w-5" />
                    <span>{t.common.close}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function GallerySection({ lang, onOpenImage }: { lang: Language; onOpenImage: (item: { title: string; image: string; description?: string }) => void }) {
  const t = translations[lang];

  return (
    <section id="gallery" className="relative bg-[#FFF8F2] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <SectionBadge icon={Images} label={t.gallery.badge} />
          <h2 className="mt-6 text-5xl font-serif text-[#3D3D3D] lg:text-[3.55rem]">{t.gallery.heading}</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6B6B6B] sm:text-xl">{t.gallery.description}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {t.gallery.items.map((item) => (
            <Card key={item.title} className="overflow-hidden rounded-[1.8rem] border border-[#E5DDD4] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <button type="button" onClick={() => onOpenImage(item)} className="block w-full text-left">
                <div className="relative h-64 overflow-hidden bg-[#F2E7D9]">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#8F5F2E] shadow-sm">
                    <Expand className="h-4 w-4" />
                  </div>
                </div>
                <CardContent className="hidden" />
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HinduCalendarSection({ lang, onOpenImage }: { lang: Language; onOpenImage: (item: { title: string; image: string; description?: string }) => void }) {
  const t = translations[lang];

  return (
    <section id="calendar" className="relative bg-[#F5EDE4] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <SectionBadge icon={CalendarDays} label={t.calendar.badge} />
          <h2 className="mt-6 text-5xl font-serif text-[#3D3D3D] lg:text-[3.55rem]">{t.calendar.heading}</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6B6B6B] sm:text-xl">{t.calendar.description}</p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="overflow-hidden rounded-[2rem] border border-[#E5DDD4] bg-white shadow-sm">
            <button type="button" onClick={() => onOpenImage({ title: t.calendar.badge, image: '/hindu-lunar-calendar-2026.jpeg', description: t.calendar.description })} className="block w-full text-left">
              <img src="/hindu-lunar-calendar-2026.jpeg" alt={t.calendar.badge} className="h-auto w-full bg-white object-contain" />

            </button>
          </Card>

          <div className="space-y-6">
            <Card className="rounded-[2rem] border border-[#E5DDD4] bg-white/80 shadow-sm backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C4705A]/10">
                    <MoonStar className="h-6 w-6 text-[#C4705A]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-[#3D3D3D]">{t.calendar.highlightsTitle}</h3>
                    <p className="text-base text-[#9B9B9B]">{t.calendar.highlightsSubtitle}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {t.calendar.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Sparkles className="mt-1 h-4 w-4 flex-shrink-0 text-[#C4705A]" />
                      <p className="text-lg leading-8 text-[#6B6B6B]">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border border-[#E5DDD4] bg-[#FFF8F2] shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-[#3D3D3D]">{t.calendar.helpTitle}</h3>
                <p className="mt-3 text-lg leading-8 text-[#6B6B6B]">{t.calendar.helpDescription}</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href="https://wa.me/23057934613" target="_blank" rel="noopener noreferrer">
                    <Button className="min-h-[52px] rounded-full bg-[#25D366] px-6 py-3 text-base font-medium text-white shadow-[0_10px_28px_rgba(37,211,102,0.2)] hover:bg-[#1EBE5A]">
                      <MessageCircle className="h-5 w-5" />
                      <span>{t.common.askOnWhatsApp}</span>
                    </Button>
                  </a>
                  <a href="#online-consultation">
                    <Button variant="outline" className="min-h-[52px] rounded-full border border-[#C4705A] px-6 py-3 text-base font-medium text-[#C4705A] hover:bg-[#C4705A]/10">
                      <Mail className="h-5 w-5" />
                      <span>{t.common.contactUs}</span>
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ lang }: { lang: Language }) {
  const t = translations[lang];

  return (
    <section id="contact" className="relative bg-[#FAF7F2] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <SectionBadge icon={Phone} label={t.contact.badge} />
            </div>
            <h2 className="mx-auto mt-6 max-w-[10ch] text-5xl font-serif text-[#3D3D3D] lg:mx-0 lg:max-w-none lg:text-[3.55rem]">{t.contact.heading}</h2>
            <p className="mx-auto mt-5 max-w-[28rem] text-lg leading-8 text-[#6B6B6B] sm:text-xl lg:mx-0">{t.contact.description}</p>

            <div className="mx-auto mt-10 max-w-[32rem] space-y-6 lg:mx-0 lg:max-w-none">
              <div className="flex items-start gap-4 rounded-[1.6rem] bg-white/70 p-5 text-left shadow-sm">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#C4705A]/10">
                  <MapPin className="h-5 w-5 text-[#C4705A]" />
                </div>
                <div>
                  <h4 className="mb-1 text-xl font-medium text-[#3D3D3D]">{t.contact.officeTitle}</h4>
                  <p className="text-lg leading-8 text-[#6B6B6B]">Flat Bunjun No.5, 84 Route Royale,<br />Belle-Rose, Quatre-Bornes, Mauritius</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-[1.6rem] bg-white/70 p-5 text-left shadow-sm">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#C4705A]/10">
                  <MapPin className="h-5 w-5 text-[#C4705A]" />
                </div>
                <div>
                  <h4 className="mb-1 text-xl font-medium text-[#3D3D3D]">{t.contact.address2Title}</h4>
                  <p className="text-lg leading-8 text-[#6B6B6B]">Daisy Lane 72444, Palma, Quatre-Bornes, Mauritius</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[1.6rem] bg-white/70 p-5 text-left shadow-sm">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#C4705A]/10">
                  <Phone className="h-5 w-5 text-[#C4705A]" />
                </div>
                <div>
                  <h4 className="mb-1 text-xl font-medium text-[#3D3D3D]">{t.contact.phoneTitle}</h4>
                  <p className="text-lg leading-8 text-[#6B6B6B]">+230 57934613<br />+230 57192207</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[1.6rem] bg-white/70 p-5 text-left shadow-sm">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#C4705A]/10">
                  <Mail className="h-5 w-5 text-[#C4705A]" />
                </div>
                <div>
                  <h4 className="mb-1 text-xl font-medium text-[#3D3D3D]">{t.contact.emailTitle}</h4>
                  <p className="text-lg leading-8 text-[#6B6B6B]">neerasho19@gmail.com<br />neer1360@gmail.com<br />neerunjunmotah19@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[1.6rem] bg-white/70 p-5 text-left shadow-sm">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#C4705A]/10">
                  <Clock className="h-5 w-5 text-[#C4705A]" />
                </div>
                <div>
                  <h4 className="mb-1 text-xl font-medium text-[#3D3D3D]">{t.contact.hoursTitle}</h4>
                  <p className="text-lg leading-8 text-[#6B6B6B]">{t.contact.workingHoursText}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-4 text-lg font-medium text-[#3D3D3D]">{t.contact.followUs}</p>
              <div className="flex justify-center gap-4 lg:justify-start">
                <a href="https://www.facebook.com/neerunjun.motah" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2]/10 transition-colors hover:bg-[#1877F2]/20">
                  <Facebook className="h-5 w-5 text-[#1877F2]" />
                </a>
                <a href="https://wa.me/23057934613" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10 transition-colors hover:bg-[#25D366]/20">
                  <MessageCircle className="h-5 w-5 text-[#25D366]" />
                </a>
              </div>
            </div>
          </div>

          <div id="online-consultation" className="flex items-center scroll-mt-28">
            <Card className="w-full rounded-[2rem] border border-[#E5DDD4] bg-white p-8 shadow-sm">
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#C4705A]/10">
                  <MessageCircle className="h-10 w-10 text-[#C4705A]" />
                </div>
                <h3 className="text-3xl font-serif text-[#3D3D3D]">{t.contact.startTitle}</h3>
                <p className="mt-2 text-lg leading-8 text-[#6B6B6B]">{t.contact.startDescription}</p>
              </div>

              <div className="space-y-4">
                <a href="https://wa.me/23057934613" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="min-h-[58px] w-full rounded-full bg-[#25D366] px-6 py-4 text-base font-medium text-white shadow-[0_12px_30px_rgba(37,211,102,0.22)] hover:bg-[#1EBE5A]">
                    <MessageCircle className="h-5 w-5" />
                    <span>{t.common.chatOnWhatsApp}</span>
                  </Button>
                </a>
                <a href="tel:+23057934613" className="block">
                  <Button variant="outline" className="min-h-[58px] w-full rounded-full border border-[#C4705A] bg-white px-6 py-4 text-base font-medium text-[#C4705A] hover:bg-[#FFF5F0]">
                    <Phone className="h-5 w-5" />
                    <span>{t.common.callNow}</span>
                  </Button>
                </a>
              </div>

              <Card className="mt-8 rounded-[1.6rem] border border-[#EAD5BD] bg-[#FFF8F0] shadow-none">
                <CardContent className="p-6">
                  <h4 className="text-2xl font-serif text-[#3D3D3D]">{t.contact.onlineTitle}</h4>
                  <div className="mt-4 space-y-3 text-lg leading-8 text-[#6B6B6B]">
                    <p>{t.contact.onlineText1}</p>
                    <p>{t.contact.onlineText2}</p>
                    <p>{t.contact.onlineText3}</p>
                    <p>{t.contact.onlineText4}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 border-t border-[#E5DDD4] pt-8">
                <p className="text-center text-base text-[#9B9B9B]">{t.contact.languages}</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ lang }: { lang: Language }) {
  const t = translations[lang];
  const serviceList = useMemo(() => t.services.items.slice(0, 5).map((item) => item.title), [t.services.items]);

  return (
    <footer className="relative bg-[#3D3D3D]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C4705A]/20">
                <Sparkles className="h-5 w-5 text-[#C4705A]" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-white sm:text-3xl">{t.brand.title}</h3>
                <p className="text-base text-[#CBBBAE]">{t.brand.subtitle}</p>
              </div>
            </div>
            <p className="mb-4 max-w-xl text-base leading-7 text-[#CBBBAE]">{t.footer.description}</p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/neerunjun.motah" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="https://wa.me/23057934613" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xl font-medium text-white">{t.footer.quickLinks}</h4>
            <ul className="space-y-2.5">
              {[
                { href: '#home', label: t.nav.home },
                { href: '#about', label: t.nav.about },
                { href: '#services', label: t.nav.services },
                { href: '#gallery', label: t.nav.gallery },
                { href: '#calendar', label: t.nav.calendar },
                { href: '#contact', label: t.nav.contact },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-base text-[#CBBBAE] transition-colors hover:text-[#F2D0AF]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xl font-medium text-white">{t.footer.services}</h4>
            <ul className="space-y-2.5">
              {serviceList.map((service) => (
                <li key={service}>
                  <span className="text-base text-[#CBBBAE]">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
          <div className="text-center md:max-w-[520px] md:text-left">
            <p className="text-base text-[#CBBBAE]">{t.footer.tagline}</p>
            <p className="mt-3 text-base text-[#CBBBAE] md:text-left">{t.footer.rights}</p>
          </div>
          <div className="text-center md:text-right">
            <div className="space-y-1 text-sm text-[#CBBBAE]">
              <p>{t.footer.creditsLine1}</p>
              <p>{t.footer.creditsLine2}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [lang, setLang] = useState<Language>('en');
  const [lightboxItem, setLightboxItem] = useState<{ title: string; image: string; description?: string } | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Navigation lang={lang} onLanguageChange={setLang} />
      <HeroSection lang={lang} />
      <AboutSection lang={lang} />
      <ServicesSection lang={lang} />
      <GallerySection lang={lang} onOpenImage={setLightboxItem} />
      <HinduCalendarSection lang={lang} onOpenImage={setLightboxItem} />
      <ContactSection lang={lang} />
      <Footer lang={lang} />
      <ImageLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </div>
  );
}

export default App;
