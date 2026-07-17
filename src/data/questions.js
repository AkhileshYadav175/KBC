export const prizeMoneyMap = [
  "₹100",
  "₹200",
  "₹300",
  "₹400",
  "₹500", // Safe zone 1 (index 4, Level 5)
  "₹700",
  "₹900",
  "₹1,100",
  "₹1,300",
  "₹1,500", // Safe zone 2 (index 9, Level 10)
  "₹1,600",
  "₹1,700",
  "₹1,800",
  "₹1,900",
  "₹2,100" // Safe zone 3 / Jackpot (index 14, Level 15)
];

export const safeZoneIndices = [4, 9, 14]; // index in prizeMoneyMap

export const contestantGroups = [
  // --- Contestant 1 Group ---
  [
    // Easy (Level 1-5)
    {
      id: 101,
      question: "Ek website par \"Buy Now\" button bright aur clearly visible rakha gaya hai. Iska primary purpose kya hai?",
      options: [
        "Website ko colorful banana",
        "User ka attention desired action par lana",
        "Website ki loading speed badhana",
        "SEO improve karna"
      ],
      answerIndex: 1,
      difficulty: "easy"
    },
    {
      id: 102,
      question: "Ek video ke beech ka unwanted 5-second portion remove karna hai. Sabse appropriate editing action kya hoga?",
      options: [
        "Trim",
        "Cut",
        "Transition",
        "Crop"
      ],
      answerIndex: 1,
      difficulty: "easy"
    },
    {
      id: 103,
      question: "Agar ek customer product ko cart me add karta hai, lekin purchase complete nahi karta, ise kya kehte hain?",
      options: [
        "Bounce Rate",
        "Cart Abandonment",
        "Conversion Drop",
        "Customer Exit"
      ],
      answerIndex: 1,
      difficulty: "easy"
    },
    {
      id: 104,
      question: "Ek company ko job ke liye 500 resumes mile. Recruiter sabse pehle kis cheez ko quickly check karne ki sabse zyada possibility rakhta hai?",
      options: [
        "Candidate ki complete life story",
        "Relevant skills aur experience",
        "Resume ka file size",
        "Candidate ka favourite subject"
      ],
      answerIndex: 1,
      difficulty: "easy"
    },
    {
      id: 105,
      question: "Ek restaurant Rs.500 ki dish ko Rs.499 me list karta hai. Ye pricing strategy mainly kis psychological effect ka use karti hai?",
      options: [
        "Charm Pricing",
        "Premium Pricing",
        "Penetration Pricing",
        "Cost-Based Pricing"
      ],
      answerIndex: 0,
      difficulty: "easy"
    },
    // Medium (Level 6-10)
    {
      id: 106,
      question: "Ek Instagram ad ko 1 lakh logon ne dekha, lekin bahut kam logon ne click kiya. Sabse directly kis metric ko improve karne ki zarurat ho sakti hai?",
      options: [
        "CTR",
        "CPC",
        "ROAS",
        "Conversion Rate"
      ],
      answerIndex: 0,
      difficulty: "medium"
    },
    {
      id: 107,
      question: "Website ka layout mobile screen par automatically adjust ho jata hai. Is concept ko kya kehte hain?",
      options: [
        "Adaptive Hosting",
        "Responsive Design",
        "Dynamic Coding",
        "Flexible Programming"
      ],
      answerIndex: 1,
      difficulty: "medium"
    },
    {
      id: 108,
      question: "Ek customer Rs.2,000 ka product kharidne me hesitate kar raha hai. Website par \"Only 2 left in stock\" dikhaya jata hai. Ye primarily kis psychological principle ka use hai?",
      options: [
        "Authority",
        "Scarcity",
        "Reciprocity",
        "Consistency"
      ],
      answerIndex: 1,
      difficulty: "medium"
    },
    {
      id: 109,
      question: "Ek advertisement me likha hai: \"10,000+ students already joined.\" Consumer psychology me ye primarily kis principle par kaam karta hai?",
      options: [
        "Scarcity",
        "Social Proof",
        "Anchoring",
        "Reciprocity"
      ],
      answerIndex: 1,
      difficulty: "medium"
    },
    {
      id: 110,
      question: "Ek product pehle Rs.4,999 dikhaya gaya, uske baad Rs.2,999 offer price. Rs.4,999 dekhne ke baad Rs.2,999 comparatively sasta lagta hai. Ye kis effect ka example hai?",
      options: [
        "Halo Effect",
        "Anchoring Effect",
        "Recency Effect",
        "Confirmation Bias"
      ],
      answerIndex: 1,
      difficulty: "medium"
    },
    // Hard (Level 11-15)
    {
      id: 111,
      question: "Ek designer ko logo banana hai jo visiting card se billboard tak quality lose kiye bina resize ho sake. Best choice kya hogi?",
      options: [
        "Raster Graphic",
        "Vector Graphic",
        "JPEG Image",
        "Screenshot"
      ],
      answerIndex: 1,
      difficulty: "advanced"
    },
    {
      id: 112,
      question: "AI se answer lete waqt kaunsa prompt generally better output dega?",
      options: [
        "\"Marketing batao\"",
        "\"Digital marketing explain karo\"",
        "\"Jaipur ke beginners ke liye 3-month digital marketing course ka structured syllabus banao\"",
        "\"Best answer do\""
      ],
      answerIndex: 2,
      difficulty: "advanced"
    },
    {
      id: 113,
      question: "Ek ad par clicks bahut aa rahe hain aur CPC bhi low hai, lekin sales almost zero hain. Sabse pehle kis cheez ko investigate karna logical hoga?",
      options: [
        "Sirf ad ka color",
        "Landing page aur audience relevance",
        "Followers ki total sankhya",
        "Logo ka size"
      ],
      answerIndex: 1,
      difficulty: "advanced"
    },
    {
      id: 114,
      question: "Ek business ke paas cash hai, inventory hai aur customers se payment receive karni baaki hai. Accounting me ye teeno broadly kis category me aa sakte hain?",
      options: [
        "Assets",
        "Liabilities",
        "Expenses",
        "Equity only"
      ],
      answerIndex: 0,
      difficulty: "advanced"
    },
    {
      id: 115,
      question: "Ek customer ko Rs.500 ka product expensive lag raha hai. Uske paas hi Rs.1,500 ka premium option dikha diya gaya, jisse Rs.500 wala reasonable lagne laga. Ye kis psychological concept se sabse closely related hai?",
      options: [
        "Anchoring",
        "Reciprocity",
        "Loss Aversion",
        "Mere Exposure"
      ],
      answerIndex: 0,
      difficulty: "advanced"
    }
  ],

  // --- Contestant 2 Group ---
  [
    // Easy (Level 1-5)
    {
      id: 201,
      question: "Ek video me ek scene se doosre scene ke beech smooth visual change add kiya gaya. Ise kya kehte hain?",
      options: [
        "Transition",
        "Transformation",
        "Rendering",
        "Correction"
      ],
      answerIndex: 0,
      difficulty: "easy"
    },
    {
      id: 202,
      question: "Kisi job me \"Remote Position\" likha hai. Iska sabse appropriate meaning kya hai?",
      options: [
        "Sirf night shift",
        "Office se door location se kaam karna",
        "Temporary job",
        "Freelancing hi karna"
      ],
      answerIndex: 1,
      difficulty: "easy"
    },
    {
      id: 203,
      question: "Website ka basic content aur structure primarily kis technology se define hota hai?",
      options: [
        "CSS",
        "HTML",
        "JavaScript",
        "SQL"
      ],
      answerIndex: 1,
      difficulty: "easy"
    },
    {
      id: 204,
      question: "Ek advertisement ko 50,000 baar screen par display kiya gaya. Ye number generally kya represent karta hai?",
      options: [
        "Reach",
        "Impressions",
        "Clicks",
        "Conversions"
      ],
      answerIndex: 1,
      difficulty: "easy"
    },
    {
      id: 205,
      question: "Ek brand baar-baar same logo, colors aur visual style use karta hai. Isse consumer ke mind me primarily kya build hota hai?",
      options: [
        "Brand Recognition",
        "Conversion Rate",
        "Search Ranking",
        "Ad Frequency only"
      ],
      answerIndex: 0,
      difficulty: "easy"
    },
    // Medium (Level 6-10)
    {
      id: 206,
      question: "\"Free Trial - No Credit Card Required\" likhne ka psychological benefit sabse likely kya hai?",
      options: [
        "Perceived risk aur friction kam karna",
        "Product automatically premium banana",
        "SEO ranking double karna",
        "Customer ko confuse karna"
      ],
      answerIndex: 0,
      difficulty: "medium"
    },
    {
      id: 207,
      question: "Ek ad me celebrity kisi product ko recommend karta hai. Consumer psychology me ye primarily kis principle se related ho sakta hai?",
      options: [
        "Authority",
        "Scarcity",
        "Loss Aversion",
        "Reciprocity"
      ],
      answerIndex: 0,
      difficulty: "medium"
    },
    {
      id: 208,
      question: "Accounting me business ko supplier ka paisa dena baaki hai. Supplier generally business ke liye kya hoga?",
      options: [
        "Debtor",
        "Creditor",
        "Asset",
        "Revenue"
      ],
      answerIndex: 1,
      difficulty: "medium"
    },
    {
      id: 209,
      question: "Ek Excel formula ko multiple rows me same pattern ke saath apply karna hai. Sabse convenient feature kya ho sakta hai?",
      options: [
        "Fill Handle",
        "Format Painter",
        "Find & Replace",
        "Page Layout"
      ],
      answerIndex: 0,
      difficulty: "medium"
    },
    {
      id: 210,
      question: "\"Join 50,000+ Happy Customers\" statement mainly kis psychological trigger ko activate karta hai?",
      options: [
        "Social Proof",
        "Scarcity",
        "Reciprocity",
        "Loss Aversion"
      ],
      answerIndex: 0,
      difficulty: "medium"
    },
    // Hard (Level 11-15)
    {
      id: 211,
      question: "Ek e-commerce website par Rs.999 ka product dikhaya gaya hai instead of Rs.1,000. Is pricing ka likely psychological objective kya hai?",
      options: [
        "Price ko perceptually lower feel karana",
        "GST avoid karna",
        "Product quality badhana",
        "Shipping cost reduce karna"
      ],
      answerIndex: 0,
      difficulty: "advanced"
    },
    {
      id: 212,
      question: "Ek company \"Buy 2, Get 1 Free\" offer deti hai. Customer originally ek product lene aaya tha, lekin teen le jata hai. Business ne primarily kya increase kiya?",
      options: [
        "Average Order Value/Quantity",
        "Bounce Rate",
        "CPC",
        "Search Ranking"
      ],
      answerIndex: 0,
      difficulty: "advanced"
    },
    {
      id: 213,
      question: "Ek ad ko 1,000 unique logon ne dekha, lekin total 3,000 baar display hua. Is situation me kya most likely hai?",
      options: [
        "Reach 3,000 aur impressions 1,000",
        "Reach 1,000 aur impressions 3,000",
        "Reach aur impressions dono 3,000",
        "Clicks 3,000 hain"
      ],
      answerIndex: 1,
      difficulty: "advanced"
    },
    {
      id: 214,
      question: "Ek online course ki sales page par pehle Rs.50,000 ka \"Total Value\" dikhaya aur actual price Rs.10,000 rakha. Consumer ke price perception ko influence karne ke liye primarily kya use hua?",
      options: [
        "Anchoring",
        "Reciprocity",
        "Retargeting",
        "Remarketing"
      ],
      answerIndex: 0,
      difficulty: "advanced"
    },
    {
      id: 215,
      question: "Ek graphic designer print ke liye design bana raha hai. Generally print workflow me kaunsa color model zyada relevant hota hai?",
      options: [
        "RGB",
        "CMYK",
        "HEX",
        "HSL"
      ],
      answerIndex: 1,
      difficulty: "advanced"
    }
  ],

  // --- Contestant 3 Group ---
  [
    // Easy (Level 1-5)
    {
      id: 301,
      question: "Ek video ko edit karne ke baad final MP4 file generate karne ke process ko kya kahenge?",
      options: [
        "Export",
        "Import",
        "Transition",
        "Timeline"
      ],
      answerIndex: 0,
      difficulty: "easy"
    },
    {
      id: 302,
      question: "Ek AI tool ko diya gaya instruction generally kya kehlata hai?",
      options: [
        "Prompt",
        "Command Line",
        "Algorithm",
        "Dataset"
      ],
      answerIndex: 0,
      difficulty: "easy"
    },
    {
      id: 303,
      question: "Ek business chahta hai ki Google search me uski website naturally better visible ho. Kis field par focus korea?",
      options: [
        "SEO",
        "SEM only",
        "SMM only",
        "CRM"
      ],
      answerIndex: 0,
      difficulty: "easy"
    },
    {
      id: 304,
      question: "Customer website par \"Book Your Free Demo\" button click karta hai. Ye button marketing terminology me kya hai?",
      options: [
        "CTA",
        "CTR",
        "CPC",
        "CRM"
      ],
      answerIndex: 0,
      difficulty: "easy"
    },
    {
      id: 305,
      question: "\"Offer Ends Tonight\" likhne ka primary psychological purpose kya hai?",
      options: [
        "Urgency create karna",
        "Authority establish karna",
        "Social Proof create karna",
        "Brand Recall create karna"
      ],
      answerIndex: 0,
      difficulty: "easy"
    },
    // Medium (Level 6-10)
    {
      id: 306,
      question: "Ek architecture firm building ka precise 2D floor plan banana chahti hai. Sabse relevant software category kya hogi?",
      options: [
        "CAD Software",
        "Video Editing Software",
        "Accounting Software",
        "CRM Software"
      ],
      answerIndex: 0,
      difficulty: "medium"
    },
    {
      id: 307,
      question: "Ek customer Rs.10,000 ka course ek saath pay nahi karna chahta, lekin Rs.999/month attractive lagta hai. Ye presentation mainly kis cheez ko reduce karti hai?",
      options: [
        "Perceived immediate financial burden",
        "Total course duration",
        "Course syllabus",
        "Customer ki income"
      ],
      answerIndex: 0,
      difficulty: "medium"
    },
    {
      id: 308,
      question: "Ek brand customer ko pehle free useful e-book deta hai aur baad me paid course offer karta hai. Consumer psychology me ye kis principle se related ho sakta hai?",
      options: [
        "Reciprocity",
        "Scarcity",
        "Anchoring",
        "Loss Aversion"
      ],
      answerIndex: 0,
      difficulty: "medium"
    },
    {
      id: 309,
      question: "Job interview me candidate ko kisi skill ka answer nahi pata. Best professional approach kya hogi?",
      options: [
        "Confidently galat answer dena",
        "Honest rehkar learning approach explain karna",
        "Question ignore karna",
        "Interviewer ko question change karne bolna"
      ],
      answerIndex: 1,
      difficulty: "medium"
    },
    {
      id: 310,
      question: "Ek product ke 4.9-star reviews dekhkar customer ka trust increase hota hai. Ye primarily kis principle ka example hai?",
      options: [
        "Social Proof",
        "Anchoring",
        "Scarcity",
        "Loss Aversion"
      ],
      answerIndex: 0,
      difficulty: "medium"
    },
    // Hard (Level 11-15)
    {
      id: 311,
      question: "Ek website ke checkout page par bahut saare unnecessary form fields hain. Unhe kam karne se conversion kyon improve ho sakta hai?",
      options: [
        "User friction reduce hoti hai",
        "SEO automatically double hota hai",
        "Product price kam ho jata hai",
        "Ad CPC zero ho jata hai"
      ],
      answerIndex: 0,
      difficulty: "advanced"
    },
    {
      id: 312,
      question: "Customer Rs.20,000 lose hone ke fear se action leta hai, jabki Rs.20,000 gain karne ka chance usse utna motivate nahi karta. Ye kya hai?",
      options: [
        "Loss Aversion",
        "Anchoring",
        "Authority Bias",
        "Social Proof"
      ],
      answerIndex: 0,
      difficulty: "advanced"
    },
    {
      id: 313,
      question: "Ek ad ka CTR high hai aur conversion rate bhi high hai, lekin business phir bhi loss me hai. Sabse logical reason kya ho sakta hai?",
      options: [
        "Customer acquisition cost profit margin se zyada hai",
        "CTR high hona loss ka direct reason hai",
        "Conversion rate kam hona chahiye",
        "Website par logo bada hai"
      ],
      answerIndex: 0,
      difficulty: "advanced"
    },
    {
      id: 314,
      question: "Ek expensive restaurant menu me Rs.5,000 ki dish sabse upar rakhi gayi. Customer Rs.2,000 ki dish choose karta hai aur use reasonable samajhta hai. Rs.5,000 wali dish ne kya role play kiya?",
      options: [
        "Anchor",
        "Conversion",
        "Retargeting",
        "Lead Magnet"
      ],
      answerIndex: 0,
      difficulty: "advanced"
    },
    {
      id: 315,
      question: "Ek customer checkout tak pahunch gaya, lekin last moment par unexpected Rs.500 delivery charge dekhkar purchase cancel kar diya. Sabse likely UX/psychology issue kya hai?",
      options: [
        "Unexpected cost/friction",
        "Social Proof",
        "Authority Bias",
        "Brand Recall"
      ],
      answerIndex: 0,
      difficulty: "advanced"
    }
  ]
];
