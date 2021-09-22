export const supportedLanguge = [
  // Perm Menu

  {
    name: "English",
    abbreviation: "EN",
  },
  {
    name: "العربية",
    abbreviation: "AR",
  },
  {
    name: "Català",
    abbreviation: "CA",
  },
  {
    name: "简体中文",
    abbreviation: "ZH-CN",
  },
  {
    name: "繁體中文",
    abbreviation: "ZH-TW",
  },
  {
    name: "Čeština",
    abbreviation: "CS",
  },
  {
    name: "Dansk",
    abbreviation: "DA",
  },
  {
    name: "Deutsch",
    abbreviation: "DE",
  },
  {
    name: "Nederlands",
    abbreviation: "NL",
  },
  {
    name: "Filipino",
    abbreviation: "FIL",
  },
  {
    name: "Suomalainen",
    abbreviation: "FI",
  },
  {
    name: "Français",
    abbreviation: "FR",
  },
  {
    name: "Ελληνικά",
    abbreviation: "EL",
  },
  {
    name: "हिंदी",
    abbreviation: "HI",
  },
  {
    name: "Magyar",
    abbreviation: "HU",
  },
  {
    name: "Bahasa Indonesia",
    abbreviation: "ID",
  },
  {
    name: "Italiano",
    abbreviation: "IT",
  },
  {
    name: "日本語",
    abbreviation: "JA",
  },
  {
    name: "한국어",
    abbreviation: "KO",
  },
  {
    name: "Português",
    abbreviation: "PT-BR",
  },
  {
    name: "Română",
    abbreviation: "RO",
  },
  {
    name: "Русский",
    abbreviation: "RU",
  },
  {
    name: "Српски",
    abbreviation: "SR",
  },
  {
    name: "Español",
    abbreviation: "ES-ES",
  },
  {
    name: "Svenska",
    abbreviation: "SV-SE",
  },
  {
    name: "தமிழ்",
    abbreviation: "TA",
  },
  {
    name: "Türkçe",
    abbreviation: "TR",
  },
  {
    name: "Українська",
    abbreviation: "UK",
  },
  {
    name: "Tiếng Việt",
    abbreviation: "VI",
  },
];

export const navContent = [
  {
    nav: "Space Trade",
    contents: [
      {
        link: "/aggregation",
        content: "Aggregation Protocol",
      },
      {
        link: "/liquidity",
        content: "Liquidity Protocol",
      },
      {
        link: "/limit",
        content: "Limit Order Protocol",
      },
      {
        link: "/derivative",
        content: "Derivative Protocol",
      },
    ],
  },
  {
    nav: "Governance",
    contents: [
      {
        link: "/token",
        content: "FBS Token",
      },
      {
        link: "/dao",
        content: "Space Dao",
      },
      {
        link: "",
        content: "Pools",
        disable: true,
      },
      {
        link: "",
        content: "Farming",
        disable: true,
      },
      {
        link: "",
        content: "Stacking",
        disable: true,
      },
    ],
  },
  {
    nav: "Developers",
    contents: [
      {
        link: "",
        content: "Documentation",
      },
      {
        link: "",
        content: "Whitepaper",
        disable: true,
      },
      {
        link: "",
        content: "Github",
      },
      {
        link: "",
        content: "Audits",
        disable: true,
      },
      {
        link: "",
        content: "Bug bounty",
        disable: true,
      },
    ],
  },
  {
    nav: "Self-custody",
    link: "/selfcustody",
    contents: [
      {
        link: "/bridge",
        content: "Bridge Space",
      },
      {
        link: "/mobile-wallet",
        content: "Mobile wallet",
      },
      {
        link: "/smart-contract",
        content: "Smart contract wallet",
      },
      {
        link: "/assets",
        content: "Asset management",
      },
    ],
  },
  {
    nav: "API",
    disable: true,
    link: "/API",
    contents: [
      // {
      //   link: "",
      //   content: "Term of Use",
      // },
      // {
      //   link: "",
      //   content: "Privacy Policy",
      // },
    ],
  },
  {
    nav: "More",
    contents: [
      {
        link: "/about",
        content: "About",
      },
      {
        link: "",
        content: "Blog",
      },
      {
        link: "",
        content: "Help Center",
      },
    ],
  },
];
