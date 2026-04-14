const fs = require('fs');

const d = {
  en: {
    whyUs: {
      p1_title: "Direct Gateway to Excellence",
      p1_desc: "We are your on-ground partner with deep roots in both African and Asian markets.",
      p2_title: "Cost-Effective Solutions",
      p2_desc: "Optimized logistics and partnerships that lower costs for medical and educational pursuits.",
      p3_title: "Reliable Support Network",
      p3_desc: "Dedicated account managers providing 24/7 assistance across time zones.",
      p4_title: "Verified Partnerships",
      p4_desc: "We only work with top-tier accredited hospitals and universities.",
    },
    countries: {
      title: "Our Operational Network",
      subtitle: "We provide comprehensive coverage across major Asian and African hubs with localized expertise in every region.",
      view_all: "View All Countries",
      services_available: "Services Available"
    },
    cta: {
      badge: "Connect with Global Experts",
      title: "Ready to Bridge Your Future Today?",
      subtitle: "Schedule a free consultation with our regional partners and start your journey towards excellence across Africa and Asia.",
      btn_start: "Get Started Now",
      btn_whatsapp: "Contact on WhatsApp"
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Real stories from individuals and business leaders who trust us with their global aspirations."
    },
    footer: {
      desc: "Connecting Africa and Asia through excellence in global services. Your trusted partner for medical, education, business, and logistics across borders.",
      quick_links: "Quick Links",
      policies: "Policies",
      contact_info: "Contact Info",
      made_with: "Made with excellence for Africa",
      rights: "All rights reserved."
    }
  },
  fr: {
    whyUs: {
      p1_title: "Passerelle Directe vers l'Excellence",
      p1_desc: "Nous sommes votre partenaire de terrain avec de profondes racines sur les marchés africains et asiatiques.",
      p2_title: "Solutions Économiques",
      p2_desc: "Logistique et partenariats optimisés réduisant les coûts pour vos projets médicaux et éducatifs.",
      p3_title: "Réseau de Support Fiable",
      p3_desc: "Gestionnaires de comptes dédiés offrant une assistance 24/7 sur tous les fuseaux horaires.",
      p4_title: "Partenariats Vérifiés",
      p4_desc: "Nous travaillons uniquement avec des hôpitaux et universités accrédités de premier plan."
    },
    countries: {
      title: "Notre Réseau Opérationnel",
      subtitle: "Nous offrons une couverture complète des principaux hubs d'Asie et d'Afrique grâce à notre expertise locale.",
      view_all: "Voir Tous Les Pays",
      services_available: "Services Disponibles"
    },
    cta: {
      badge: "Connectez-vous Aux Experts",
      title: "Prêt à Bâtir Votre Avenir Aujourd'hui?",
      subtitle: "Réservez une consultation gratuite avec nos partenaires régionaux et entamez votre parcours vers l'excellence.",
      btn_start: "Commencer Maintenant",
      btn_whatsapp: "Contacter sur WhatsApp"
    },
    testimonials: {
      title: "Ce Que Disent Nos Clients",
      subtitle: "Histoires vraies de particuliers et chefs d'entreprises qui nous confient leurs aspirations mondiales."
    },
    footer: {
      desc: "Connecter l'Afrique et l'Asie par l'excellence des services mondiaux. Votre partenaire de confiance transfrontalier.",
      quick_links: "Raccourcis",
      policies: "Politiques",
      contact_info: "Coordonnées",
      made_with: "Conçu avec excellence pour l'Afrique",
      rights: "Tous droits réservés."
    }
  },
  pt: {
    whyUs: {
      p1_title: "Porta Direta para a Excelência",
      p1_desc: "Somos seu parceiro local com raízes profundas nos mercados africano e asiático.",
      p2_title: "Soluções Econômicas",
      p2_desc: "Logística otimizada e parcerias que reduzem custos em projetos médicos e educacionais.",
      p3_title: "Rede de Suporte Confiável",
      p3_desc: "Gerentes dedicados fornecendo assistência 24/7 em diferentes fusos horários.",
      p4_title: "Parcerias Verificadas",
      p4_desc: "Trabalhamos apenas com hospitais e universidades de primeira linha."
    },
    countries: {
      title: "A Nossa Rede Operacional",
      subtitle: "Fornecemos cobertura abrangente nos principais centros da Ásia e África com experiência local.",
      view_all: "Ver Todos Os Países",
      services_available: "Serviços Disponíveis"
    },
    cta: {
      badge: "Conecte-se com Especialistas",
      title: "Pronto para Construir Seu Futuro Hoje?",
      subtitle: "Agende uma consultoria grátis com nossos parceiros regionais e inicie sua jornada para a excelência.",
      btn_start: "Começar Agora",
      btn_whatsapp: "Contate no WhatsApp"
    },
    testimonials: {
      title: "O Que Nossos Clientes Dizem",
      subtitle: "Histórias reais de indivíduos e líderes empresariais que confiam em nós."
    },
    footer: {
      desc: "Conectar a África e a Ásia através da excelência em serviços globais. O seu parceiro de confiança mundial.",
      quick_links: "Links Rápidos",
      policies: "Políticas",
      contact_info: "Contato",
      made_with: "Criado com excelência para a África",
      rights: "Todos os direitos reservados."
    }
  }
};

['en', 'fr', 'pt'].forEach(lang => {
  let p = `messages/${lang}.json`;
  let file = JSON.parse(fs.readFileSync(p, 'utf8'));
  
  if (!file.whyUs) file.whyUs = {};
  Object.assign(file.whyUs, d[lang].whyUs);
  
  file.countries_section = d[lang].countries;
  file.cta_section = d[lang].cta;
  file.testimonials = d[lang].testimonials;
  file.footer = d[lang].footer;
  
  fs.writeFileSync(p, JSON.stringify(file, null, 2));
});
console.log("Locales written!");
