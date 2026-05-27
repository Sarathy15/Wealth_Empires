/* ═══════════════════════════════════════
   SERVICE DATA
═══════════════════════════════════════ */
const SERVICES = {
  home: {
    breadcrumb: null,
    eyebrow: "India's Premier Business Platform",
    h1: ["Proprietorship", "Registration", "<em>in India</em>"],
    desc: "Register your sole proprietorship firm quickly and legally. Get GST, Udyam, PAN support and complete registration online with expert assistance.",
    price: "₹1,499",
    plans: [
      { name:"Basic", price:"₹1,499", unit:"/month", desc:"Perfect for getting started", features:["Udyam Registration","PAN Application Support","Bank Account Guidance","Basic Compliance Kit"], featured:false },
      { name:"Standard", price:"₹2,999", unit:"/month", desc:"For growing proprietorships", features:["Everything in Basic","GST Registration","Shop & Establishment Licence","Income Tax Filing (ITR)","Dedicated Manager"], featured:true },
      { name:"Premium", price:"₹4,999", unit:"/month", desc:"Full-stack compliance cover", features:["Everything in Standard","Trademark Registration","Monthly GST Returns","TDS Filing & Payroll","Priority Support 24/7"], featured:false }
    ],
    faqs:[
      {q:"What is sole proprietorship registration?",a:"Sole proprietorship registration is the process by which an individual legally establishes a business under their own name or a trade name."},
      {q:"What is meant by a proprietorship firm?",a:"A proprietorship firm is a business owned and managed by a single individual. The owner and the business are considered the same legal entity."},
      {q:"What is the cost of registering a sole proprietorship?",a:"At WealthEmpire, you can start and manage a sole proprietorship from just ₹1,499 per month including Udyam, PAN support, and compliance guidance."},
      {q:"Is GST registration required?",a:"GST is mandatory if your annual turnover exceeds ₹40 lakhs (₹20 lakhs for services), or if you sell on e-commerce platforms."},
      {q:"How long does registration take?",a:"Typically 7–14 working days. Udyam registration is instant; GST takes 5–7 working days on average."},
      {q:"Can a proprietorship be converted?",a:"Yes. As your business grows you can convert your sole proprietorship to a private limited company or LLP to raise funding and limit liability."}
    ],
    related:["OPC Registration","Partnership Firm","Private Limited Company","LLP Registration","GST Registration","Udyam Registration","Shop & Establishment"],
    category:"Startup"
  },
  proprietorship:{
    breadcrumb:["Startup","Proprietorship"],
    eyebrow:"Startup — Sole Proprietorship",
    h1:["Proprietorship","Registration","<em>in India</em>"],
    desc:"Register your sole proprietorship firm quickly and legally. Get GST, Udyam, PAN support and complete registration online with expert CA assistance.",
    price:"₹1,499",
    content:{
      title:"Sole Proprietorship Firm Registration in India",
      intro:"A sole proprietorship firm is the simplest and most popular form of business in India, owned and managed by a single individual. It requires minimal compliance, low investment, and offers complete control to the owner. Whether you are a freelancer, trader, or small business owner, registering a sole proprietorship is the first step towards a legally recognized business identity.",
      sections:[
        {heading:"What is Sole Proprietorship Firm Registration in India?",content:"Sole proprietorship firm registration in India refers to the process by which an individual legally establishes a business under their own name or a trade name. Unlike a private limited company or LLP, a sole proprietorship does not require incorporation under the Companies Act. Instead, it gains legal recognition through registrations such as GST registration, MSME/Udyam registration, or a Shop and Establishment licence. A sole proprietor is personally responsible for all the liabilities and debts of the business. The business and the owner are considered the same legal entity, making it the most straightforward business registration for individuals in India."},
        {heading:"Key Characteristics of Sole Proprietorship in India",items:["Single ownership and full control by one person","No separate legal entity from the owner","Unlimited personal liability","Easy to form with minimal formalities","All profits and losses belong to the owner"]},
        {heading:"What is the Eligibility for Sole Proprietorship Firm Registration in India?",content:"Before registering a sole proprietorship firm in India, it is important to understand the eligibility criteria. The following conditions must be met:",subheading:"Basic Eligibility Criteria in India",items:["The applicant must be an Indian citizen","The applicant must be at least 18 years of age","The applicant must have a valid PAN card","The applicant must not be involved in any illegal business activity","NRIs can also register a sole proprietorship with certain restrictions"]},
        {heading:"Documents Required for Registration",subheading:"Identity & Address Proof Documents",items:["PAN Card of the proprietor","Aadhaar Card / Voter ID / Passport","Passport-size photographs","Business address proof (electricity bill, rent agreement)","Bank account details in the name of the business","Trade name or business name details"]},
        {heading:"Registration Fees & Timeline",content:"The sole proprietorship registration cost in India varies depending on the type of registration chosen. GST registration is free but typically involves a professional fee of ₹500–₹2,000. MSME/Udyam registration is also free with similar professional fees. Shop & Establishment licence costs range from ₹100–₹1,000 with professional fees of ₹1,000–₹3,000. GST registration takes 3–7 working days, while MSME/Udyam registration takes 1–2 working days."}
      ]
    },
    plans:[
      {name:"Basic",price:"₹1,499",unit:"/month",desc:"Perfect for getting started",features:["Udyam Registration","PAN Application Support","Bank Account Guidance","Basic Compliance Kit"],featured:false},
      {name:"Standard",price:"₹2,999",unit:"/month",desc:"For growing proprietorships",features:["Everything in Basic","GST Registration","Shop & Establishment Licence","Income Tax Filing (ITR)","Dedicated Manager"],featured:true},
      {name:"Premium",price:"₹4,999",unit:"/month",desc:"Full-stack compliance cover",features:["Everything in Standard","Trademark Registration","Monthly GST Returns","TDS Filing & Payroll","Priority Support 24/7"],featured:false}
    ],
    faqs:[
      {q:"What is a sole proprietorship?",a:"A business owned and managed by a single individual where the owner and business are the same legal entity."},
      {q:"What registrations does a proprietor need?",a:"Typically Udyam (MSME), GST (if applicable), Shop & Establishment Licence, and a business bank account."},
      {q:"Is proprietorship registration mandatory?",a:"There is no single central registration, but you need at least one govt-issued registration (GST, Udyam, or trade licence) to open a current account."},
      {q:"Can I run a proprietorship without GST?",a:"Yes, if your turnover is below ₹40 lakhs (₹20 lakhs for services) and you don't sell online."},
      {q:"How is a proprietorship taxed?",a:"Income is taxed as personal income of the proprietor at applicable slab rates."},
      {q:"How long does it take?",a:"Udyam registration is instant. Full setup including GST takes 7–14 working days."}
    ],
    related:["Partnership Firm","OPC Registration","Private Limited Company","LLP Registration","GST Registration","Udyam Registration"],
    category:"Startup"
  },
  partnership:{
    breadcrumb:["Startup","Partnership"],
    eyebrow:"Startup — Partnership Firm",
    h1:["Partnership Firm","Registration","<em>in India</em>"],
    desc:"Register your partnership firm under the Indian Partnership Act. Draft a comprehensive partnership deed and get your business legally recognised across India.",
    price:"₹2,999",
    plans:[
      {name:"Basic",price:"₹2,999",unit:"/month",desc:"Essential partnership setup",features:["Partnership Deed Drafting","Firm PAN Application","Udyam Registration","Bank Account Guidance"],featured:false},
      {name:"Standard",price:"₹4,999",unit:"/month",desc:"Registered firm with full compliance",features:["Everything in Basic","Firm Registration Certificate","GST Registration","Income Tax Filing","Dedicated Manager"],featured:true},
      {name:"Premium",price:"₹7,999",unit:"/month",desc:"Full-service partnership management",features:["Everything in Standard","Trademark Registration","Monthly GST Returns","TDS Filing & Payroll","Priority Support 24/7"],featured:false}
    ],
    faqs:[
      {q:"What is a partnership firm?",a:"A partnership is a business arrangement where two or more persons agree to share profits and losses of a business carried on by all or any one of them."},
      {q:"Is registration of a partnership mandatory?",a:"Registration is optional under the Indian Partnership Act but highly recommended as unregistered firms cannot sue partners or third parties."},
      {q:"What is a partnership deed?",a:"A legally binding document outlining the terms of the partnership — profit sharing, roles, capital contributions, and dissolution terms."},
      {q:"How many partners can a firm have?",a:"A minimum of 2 and maximum of 20 partners in a general partnership firm."},
      {q:"How is a partnership taxed?",a:"Partnership firms are taxed at a flat rate of 30% plus surcharge and cess on net business income."},
      {q:"Can a partnership be converted to LLP?",a:"Yes, a registered partnership firm can be converted to an LLP under the LLP Act, 2008."}
    ],
    related:["Proprietorship","LLP Registration","Private Limited Company","GST Registration","Partnership Tax Filing"],
    category:"Startup"
  },
  opc:{
    breadcrumb:["Startup","One Person Company"],
    eyebrow:"Startup — One Person Company",
    h1:["One Person","Company","<em>Registration</em>"],
    desc:"Incorporate a One Person Company (OPC) and enjoy the benefits of a private limited company with single ownership. Ideal for solo entrepreneurs wanting limited liability.",
    price:"₹5,999",
    plans:[
      {name:"Basic",price:"₹5,999",unit:"one-time",desc:"OPC incorporation essentials",features:["DIN & DSC for Director","Name Approval","MOA & AOA Drafting","Certificate of Incorporation"],featured:false},
      {name:"Standard",price:"₹8,999",unit:"one-time",desc:"Complete OPC setup",features:["Everything in Basic","GST Registration","PAN & TAN","Bank Account Support","Dedicated CA Manager"],featured:true},
      {name:"Premium",price:"₹14,999",unit:"one-time",desc:"OPC + Annual Compliance",features:["Everything in Standard","First Year Annual Filing","Income Tax Return","Share Certificate","Trademark Search"],featured:false}
    ],
    faqs:[
      {q:"What is an OPC?",a:"An OPC (One Person Company) is a company that can be formed with just one director and one shareholder who can be the same person."},
      {q:"Who can form an OPC?",a:"Only a natural person who is an Indian citizen and resident in India can form an OPC as a member."},
      {q:"What is the minimum capital required?",a:"There is no minimum paid-up capital requirement for OPC after the Companies Amendment Act."},
      {q:"Can an OPC convert to a Pvt Ltd?",a:"Yes. An OPC can voluntarily convert to a Private Limited Company after 2 years, or mandatorily when turnover exceeds ₹2 crore."},
      {q:"What are the compliance requirements?",a:"Annual returns, financial statements, income tax filings, and board meeting minutes are required every year."},
      {q:"How long does incorporation take?",a:"Typically 7–10 working days subject to MCA processing time."}
    ],
    related:["Proprietorship","Private Limited Company","LLP Registration","OPC Compliance","Company Annual Filing"],
    category:"Startup"
  },
  llp:{
    breadcrumb:["Startup","Limited Liability Partnership"],
    eyebrow:"Startup — LLP Registration",
    h1:["Limited Liability","Partnership","<em>Registration</em>"],
    desc:"Register an LLP and enjoy the flexibility of a partnership with the protection of limited liability. Ideal for professionals, consultants, and small businesses.",
    price:"₹5,499",
    plans:[
      {name:"Basic",price:"₹5,499",unit:"one-time",desc:"LLP incorporation package",features:["DPIN for 2 Partners","Digital Signatures","LLP Agreement Drafting","Certificate of Incorporation"],featured:false},
      {name:"Standard",price:"₹8,499",unit:"one-time",desc:"Full LLP setup",features:["Everything in Basic","GST Registration","PAN & TAN","Bank Account Support","Dedicated Manager"],featured:true},
      {name:"Premium",price:"₹13,999",unit:"one-time",desc:"LLP + Annual Compliance",features:["Everything in Standard","First Year Annual Filing","Income Tax Return","LLP Form 11","Trademark Search"],featured:false}
    ],
    faqs:[
      {q:"What is an LLP?",a:"A Limited Liability Partnership is a hybrid business structure combining features of a partnership and a company with limited liability for partners."},
      {q:"What is the minimum number of partners?",a:"A minimum of 2 designated partners is required. There is no upper limit on the number of partners."},
      {q:"Is LLP suitable for startups?",a:"Yes, especially for professional services like law, accounting, consulting, and architecture firms."},
      {q:"What are the annual compliance requirements?",a:"LLPs must file Form 11 (Annual Return) and Form 8 (Statement of Account & Solvency) every year."},
      {q:"Can an LLP be converted to a company?",a:"Yes, an LLP can be converted to a Private Limited Company under the Companies Act, 2013."},
      {q:"How is an LLP taxed?",a:"LLPs are taxed at 30% plus applicable surcharge and cess, similar to partnership firms."}
    ],
    related:["Partnership Firm","Private Limited Company","OPC Registration","LLP Compliance","LLP Annual Filing","LLP Winding Up"],
    category:"Startup"
  },
  pvtltd:{
    breadcrumb:["Startup","Private Limited Company"],
    eyebrow:"Startup — Private Limited Company",
    h1:["Private Limited","Company","<em>Registration</em>"],
    desc:"Incorporate a Private Limited Company in India — the most preferred structure for startups and growing businesses. Get investor-ready with limited liability and perpetual succession.",
    price:"₹6,999",
    plans:[
      {name:"Basic",price:"₹6,999",unit:"one-time",desc:"Pvt Ltd incorporation",features:["DIN & DSC for 2 Directors","Name Approval (RUN)","MOA & AOA Drafting","Certificate of Incorporation"],featured:false},
      {name:"Standard",price:"₹10,999",unit:"one-time",desc:"Complete Pvt Ltd setup",features:["Everything in Basic","GST Registration","PAN & TAN","INC-20A Filing","Dedicated CA Manager"],featured:true},
      {name:"Premium",price:"₹17,999",unit:"one-time",desc:"Pvt Ltd + First Year Compliance",features:["Everything in Standard","First Year Annual Filing","Income Tax Return","Share Certificates","Trademark Search"],featured:false}
    ],
    faqs:[
      {q:"What is a Private Limited Company?",a:"A Pvt Ltd is a company held by private shareholders with limited liability, separate legal identity, and restricted share transfer."},
      {q:"How many directors are required?",a:"A minimum of 2 directors and a maximum of 15. At least one director must be an Indian resident."},
      {q:"What is the minimum capital?",a:"There is no minimum paid-up capital after the Companies Amendment Act. You can start with ₹1."},
      {q:"What is INC-20A?",a:"INC-20A is the declaration of commencement of business that must be filed within 180 days of incorporation."},
      {q:"What are the annual compliance requirements?",a:"Annual returns (MGT-7), financial statements (AOC-4), board meetings, auditor appointment, and income tax return."},
      {q:"Can a Pvt Ltd raise funding?",a:"Yes, Pvt Ltd companies can raise equity funding from angel investors, VCs, and private equity — making it the preferred structure for startups."}
    ],
    related:["LLP Registration","OPC Registration","Company Compliance","Company Annual Filing","Share Transfer","Trademark Registration"],
    category:"Startup"
  },

  /* ── ADDITIONAL SERVICES (GST, REGISTRATIONS, etc.) ── */
  /* These are placeholders - add full data similarly for other services */
  "gst-reg":{breadcrumb:["GST","GST Registration"],eyebrow:"GST — Registration",h1:["GST","Registration","<em>Online</em>"],desc:"Register for GST online and get your GSTIN within 7 working days.",price:"₹1,499",plans:[{name:"Basic",price:"₹1,499",unit:"one-time",desc:"GST registration",features:["Document Preparation","GST Application Filing","GSTIN Activation","GST Certificate"],featured:false},{name:"Standard",price:"₹2,999",unit:"one-time",desc:"GST + first return",features:["Everything in Basic","First GSTR-3B Filing","HSN Code Advisory","Dedicated GST Expert"],featured:true},{name:"Premium",price:"₹5,999",unit:"one-time",desc:"GST + quarterly returns",features:["Everything in Standard","Quarterly GST Returns (3 months)","Input Tax Credit Guidance","Invoice Software Setup","Priority Support"],featured:false}],faqs:[{q:"Who needs GST registration?",a:"Businesses with annual turnover exceeding ₹40 lakhs (₹20 lakhs for services, ₹10 lakhs for North-East states)."},{q:"What is GSTIN?",a:"GSTIN is a 15-digit Goods and Services Tax Identification Number assigned after successful GST registration."},{q:"What are the GST return filing due dates?",a:"GSTR-1 is due on the 11th of the following month; GSTR-3B is due on the 20th. Quarterly filers have different deadlines."}],related:["GST Return Filing","GST Amendment","GST Notice","Income Tax Filing"],category:"GST"}
};

/* ═══════════════════════════════════════
   REVIEWS DATA
═══════════════════════════════════════ */
const REVIEWS = [
  {init:"PS",name:"Prashant Sharan",svc:"Proprietorship",stars:"★★★★★",date:"26 Jun 2020",text:"Great work. Team was responsive and handled everything smoothly."},
  {init:"DG",name:"Deep Ghatak",svc:"Registration",stars:"★★★★★",date:"11 Jun 2020",text:"Very fast work. Got my registration done in record time with no hassle."},
  {init:"MM",name:"Manoj Mehta",svc:"Trademark",stars:"★★★★★",date:"04 Jun 2020",text:"Thank you for such fast and prompt service. Highly recommended!"},
  {init:"KK",name:"Kamil Khan",svc:"GST Filing",stars:"★★★★★",date:"12 Aug 2021",text:"Very gentle behaviour and very much cooperative. Overall fantastic service."},
  {init:"PN",name:"Pankaj Narvekar",svc:"Compliance",stars:"★★★★★",date:"07 Feb 2022",text:"Excellent service. Process was explained clearly and completed on time."},
  {init:"RA",name:"Ramakrishna",svc:"LLP",stars:"★★★★★",date:"17 Jul 2020",text:"Thank you! Very professional team, smooth experience throughout."},
  {init:"PR",name:"Prem",svc:"ITR Filing",stars:"★★★★☆",date:"07 Jul 2020",text:"Completed the process very soon. Good support from the team."},
  {init:"SV",name:"Shalini Verma",svc:"Pvt Ltd",stars:"★★★★★",date:"15 Mar 2023",text:"Absolutely seamless. Would strongly recommend WealthEmpire to anyone starting out."}
];
