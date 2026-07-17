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
      question: "Ek website ka layout mobile screen par automatically adjust ho jata hai. Is concept ko kya kehte hain?",
      options: [
        "Responsive Design",
        "Adaptive Hosting",
        "Dynamic Coding",
        "Flexible Programming"
      ],
      answerIndex: 0,
      difficulty: "easy"
    },
    {
      id: 102,
      question: "Ek video ke beech ka unwanted 5-second portion remove karna hai. Sabse appropriate editing action kya hoga?",
      options: [
        "Trim",
        "Transition",
        "Cut",
        "Crop"
      ],
      answerIndex: 2,
      difficulty: "easy"
    },
    {
      id: 103,
      question: "Agar ek customer product ko cart me add karta hai, lekin purchase complete nahi karta, ise kya kehte hain?",
      options: [
        "Bounce Rate",
        "Conversion Drop",
        "Customer Exit",
        "Cart Abandonment"
      ],
      answerIndex: 3,
      difficulty: "easy"
    },
    {
      id: 104,
      question: "Ek restaurant Rs.500 ki dish ko Rs.499 me list karta hai. Ye pricing strategy mainly kis psychological effect ka use karti hai?",
      options: [
        "Premium Pricing",
        "Charm Pricing",
        "Penetration Pricing",
        "Cost-Based Pricing"
      ],
      answerIndex: 1,
      difficulty: "easy"
    },
    {
      id: 105,
      question: "Ek customer Rs.2,000 ka product kharidne me hesitate kar raha hai. Website par \"Only 2 left in stock\" dikhaya jata hai. Ye primarily kis psychological principle ka use hai?",
      options: [
        "Scarcity",
        "Authority",
        "Reciprocity",
        "Consistency"
      ],
      answerIndex: 0,
      difficulty: "easy"
    },
    // Medium (Level 6-10)
    {
      id: 106,
      question: "Ek advertisement me likha hai: \"10,000+ students already joined.\" Consumer psychology me ye primarily kis principle par kaam karta hai?",
      options: [
        "Scarcity",
        "Anchoring",
        "Social Proof",
        "Reciprocity"
      ],
      answerIndex: 2,
      difficulty: "medium"
    },
    {
      id: 107,
      question: "Ek business ke paas cash hai, inventory hai aur customers se payment receive karni baaki hai. Accounting me ye teeno broadly kis category me aa sakte hain?",
      options: [
        "Liabilities",
        "Expenses",
        "Equity only",
        "Assets"
      ],
      answerIndex: 3,
      difficulty: "medium"
    },
    {
      id: 108,
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
      id: 109,
      question: "Ek campaign me 10,000 impressions aur 500 clicks aaye. Approximate CTR kitna hai?",
      options: [
        "2%",
        "5%",
        "10%",
        "20%"
      ],
      answerIndex: 1,
      difficulty: "medium"
    },
    {
      id: 110,
      question: "Ek product pehle Rs.4,999 dikhaya gaya, uske baad Rs.2,999 offer price. Rs.4,999 dekhne ke baad Rs.2,999 comparatively sasta lagta hai. Ye kis effect ka example hai?",
      options: [
        "Halo Effect",
        "Recency Effect",
        "Confirmation Bias",
        "Anchoring Effect"
      ],
      answerIndex: 3,
      difficulty: "medium"
    },
    // Hard (Level 11-15)
    {
      id: 111,
      question: "AI se answer lete waqt kaunsa prompt generally better output dega?",
      options: [
        "\"Jaipur ke beginners ke liye 3-month digital marketing course ka structured syllabus banao\"",
        "\"Marketing batao\"",
        "\"Digital marketing explain karo\"",
        "\"Best answer do\""
      ],
      answerIndex: 0,
      difficulty: "advanced"
    },
    {
      id: 112,
      question: "Consumer ko \"Rs.1,000 paane\" ke comparison me \"Rs.1,000 kho dene\" ka thought zyada strongly affect karta hai. Is tendency ko kya kehte hain?",
      options: [
        "Social Proof",
        "Loss Aversion",
        "Anchoring",
        "Reciprocity"
      ],
      answerIndex: 1,
      difficulty: "advanced"
    },
    {
      id: 113,
      question: "Ek ad par clicks bahut aa rahe hain aur CPC bhi low hai, lekin sales almost zero hain. Sabse pehle kis cheez ko investigate karna logical hoga?",
      options: [
        "Sirf ad ka color",
        "Followers ki total sankhya",
        "Landing page aur audience relevance",
        "Logo ka size"
      ],
      answerIndex: 2,
      difficulty: "advanced"
    },
    {
      id: 114,
      question: "Ek company AI se candidates ke resumes automatically shortlist kar rahi hai. Agar historical hiring data biased tha, to sabse important potential risk kya hai?",
      options: [
        "AI computer ko slow kar dega",
        "Resume ka format automatically PDF ho jayega",
        "Internet speed kam ho jayegi",
        "AI existing bias ko reproduce kar sakta hai"
      ],
      answerIndex: 3,
      difficulty: "advanced"
    },
    {
      id: 115,
      question: "Ek business ne ad ka CTR double kar diya, lekin conversion rate half ho gaya. Agar baaki factors approximately same rahein, to sabse reasonable interpretation kya hai?",
      options: [
        "Campaign definitely double profitable hua",
        "Zyada clicks aaye, lekin traffic ki quality/relevance kam ho sakti hai",
        "CTR aur conversion ka koi relation hi nahi",
        "Website ka SEO automatically improve hua"
      ],
      answerIndex: 1,
      difficulty: "advanced"
    }
  ],

  // --- Contestant 2 Group ---
  [
    // Easy (Level 1-5)
    {
      id: 201,
      question: "Ek brand baar-baar same logo, colors aur visual style use karta hai. Isse consumer ke mind me primarily kya build hota hai?",
      options: [
        "Conversion Rate",
        "Brand Recognition",
        "Search Ranking",
        "Ad Frequency only"
      ],
      answerIndex: 1,
      difficulty: "easy"
    },
    {
      id: 202,
      question: "Ek advertisement ko 50,000 baar screen par display kiya gaya. Ye number generally kya represent karta hai?",
      options: [
        "Reach",
        "Clicks",
        "Conversions",
        "Impressions"
      ],
      answerIndex: 3,
      difficulty: "easy"
    },
    {
      id: 203,
      question: "Accounting me business ko supplier ka paisa dena baaki hai. Supplier generally business ke liye kya hoga?",
      options: [
        "Creditor",
        "Debtor",
        "Asset",
        "Revenue"
      ],
      answerIndex: 0,
      difficulty: "easy"
    },
    {
      id: 204,
      question: "\"Free Trial - No Credit Card Required\" likhne ka psychological benefit sabse likely kya hai?",
      options: [
        "Product automatically premium banana",
        "SEO ranking double karna",
        "Perceived risk aur friction kam karna",
        "Customer ko confuse karna"
      ],
      answerIndex: 2,
      difficulty: "easy"
    },
    {
      id: 205,
      question: "\"Join 50,000+ Happy Customers\" statement mainly kis psychological trigger ko activate karta hai?",
      options: [
        "Scarcity",
        "Reciprocity",
        "Loss Aversion",
        "Social Proof"
      ],
      answerIndex: 3,
      difficulty: "easy"
    },
    // Medium (Level 6-10)
    {
      id: 206,
      question: "Ek e-commerce website par Rs.999 ka product dikhaya gaya hai instead of Rs.1,000. Is pricing ka likely psychological objective kya hai?",
      options: [
        "GST avoid karna",
        "Price ko perceptually lower feel karana",
        "Product quality badhana",
        "Shipping cost reduce karna"
      ],
      answerIndex: 1,
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
      question: "Ek ad ko 1,000 unique logon ne dekha, lekin total 3,000 baar display hua. Is situation me kya most likely hai?",
      options: [
        "Reach 3,000 aur impressions 1,000",
        "Reach aur impressions dono 3,000",
        "Reach 1,000 aur impressions 3,000",
        "Clicks 3,000 hain"
      ],
      answerIndex: 2,
      difficulty: "medium"
    },
    {
      id: 209,
      question: "Ek marketing campaign ne Rs.10,000 ad spend karke Rs.50,000 attributed revenue generate kiya. Simple ROAS kya hoga?",
      options: [
        "2x",
        "4x",
        "5x",
        "10x"
      ],
      answerIndex: 2,
      difficulty: "medium"
    },
    {
      id: 210,
      question: "Ek online course ki sales page par pehle Rs.50,000 ka \"Total Value\" dikhaya aur actual price Rs.10,000 rakha. Consumer ke price perception ko influence karne ke liye primarily kya use hua?",
      options: [
        "Reciprocity",
        "Retargeting",
        "Remarketing",
        "Anchoring"
      ],
      answerIndex: 3,
      difficulty: "medium"
    },
    // Hard (Level 11-15)
    {
      id: 211,
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
      id: 212,
      question: "Ek customer product ke positive reviews padhne ke baad wahi reviews zyada notice karta hai jo uske pehle se bane opinion ko support karte hain. Ye kis cognitive bias ka example hai?",
      options: [
        "Anchoring Bias",
        "Confirmation Bias",
        "Survivorship Bias",
        "Recency Bias"
      ],
      answerIndex: 1,
      difficulty: "advanced"
    },
    {
      id: 213,
      question: "Ek company ka ad bahut attractive hai, lekin landing page ad me kiye promise se match nahi karta. Sabse likely problem kya hogi?",
      options: [
        "Conversion guaranteed increase hoga",
        "CPC automatically zero ho jayega",
        "Organic SEO immediately improve hoga",
        "Clicks aa sakte hain, lekin conversions suffer kar sakte hain"
      ],
      answerIndex: 3,
      difficulty: "advanced"
    },
    {
      id: 214,
      question: "AI-generated content ko directly publish karne se pehle human review ka sabse strong reason kya hai?",
      options: [
        "AI output factually incorrect ya contextually misleading ho sakta hai",
        "AI hamesha spelling mistakes karta hai",
        "AI internet use hi nahi kar sakta",
        "AI sirf English likh sakta hai"
      ],
      answerIndex: 0,
      difficulty: "advanced"
    },
    {
      id: 215,
      question: "Do offers hain: Offer A - Rs.1,000 ki direct Rs.200 discount. Offer B - Rs.1,000 ke product ke saath \"Rs.200 value ka FREE gift\". Similar economic value ke bawajood kuch consumers Offer B prefer kar sakte hain. Best explanation kya hai?",
      options: [
        "Free product ki accounting nahi hoti",
        "Discount illegal hota hai",
        "\"Free\" word ki perceived psychological value disproportionately high ho sakti hai",
        "Gift ki value hamesha Rs.200 se zyada hoti hai"
      ],
      answerIndex: 2,
      difficulty: "advanced"
    }
  ],

  // --- Contestant 3 Group ---
  [
    // Easy (Level 1-5)
    {
      id: 301,
      question: "Customer website par \"Book Your Free Demo\" button click karta hai. Ye button marketing terminology me kya hai?",
      options: [
        "CTR",
        "CPC",
        "CTA",
        "CRM"
      ],
      answerIndex: 2,
      difficulty: "easy"
    },
    {
      id: 302,
      question: "\"Offer Ends Tonight\" likhne ka primary psychological purpose kya hai?",
      options: [
        "Authority establish karna",
        "Social Proof create karna",
        "Brand Recall create karna",
        "Urgency create karna"
      ],
      answerIndex: 3,
      difficulty: "easy"
    },
    {
      id: 303,
      question: "Ek product ke 4.9-star reviews dekhkar customer ka trust increase hota hai. Ye primarily kis principle ka example hai?",
      options: [
        "Social Proof",
        "Anchoring",
        "Scarcity",
        "Loss Aversion"
      ],
      answerIndex: 0,
      difficulty: "easy"
    },
    {
      id: 304,
      question: "Ek brand customer ko pehle free useful e-book deta hai aur baad me paid course offer karta hai. Consumer psychology me ye kis principle se related ho sakta hai?",
      options: [
        "Scarcity",
        "Reciprocity",
        "Anchoring",
        "Loss Aversion"
      ],
      answerIndex: 1,
      difficulty: "easy"
    },
    {
      id: 305,
      question: "Ek customer Rs.10,000 ka course ek saath pay nahi karna chahta, lekin Rs.999/month attractive lagta hai. Ye presentation mainly kis cheez ko reduce karti hai?",
      options: [
        "Perceived immediate financial burden",
        "Total course duration",
        "Course syllabus",
        "Customer ki income"
      ],
      answerIndex: 0,
      difficulty: "easy"
    },
    // Medium (Level 6-10)
    {
      id: 306,
      question: "Ek AI tool ko diya gaya instruction generally kya kehlata hai?",
      options: [
        "Command Line",
        "Algorithm",
        "Dataset",
        "Prompt"
      ],
      answerIndex: 3,
      difficulty: "medium"
    },
    {
      id: 307,
      question: "Ek expensive restaurant menu me Rs.5,000 ki dish sabse upar rakhi gayi. Customer Rs.2,000 ki dish choose karta hai aur use reasonable samajhta hai. Rs.5,000 wali dish ne kya role play kiya?",
      options: [
        "Conversion",
        "Anchor",
        "Retargeting",
        "Lead Magnet"
      ],
      answerIndex: 1,
      difficulty: "medium"
    },
    {
      id: 308,
      question: "Customer Rs.20,000 lose hone ke fear se action leta hai, jabki Rs.20,000 gain karne ka chance usse utna motivate nahi karta. Ye kya hai?",
      options: [
        "Anchoring",
        "Authority Bias",
        "Loss Aversion",
        "Social Proof"
      ],
      answerIndex: 2,
      difficulty: "medium"
    },
    {
      id: 309,
      question: "Ek company ke paas 100 leads aayi aur 10 customers bane. Lead-to-customer conversion rate kya hai?",
      options: [
        "1%",
        "5%",
        "10%",
        "20%"
      ],
      answerIndex: 2,
      difficulty: "medium"
    },
    {
      id: 310,
      question: "Ek customer checkout tak pahunch gaya, lekin last moment par unexpected Rs.500 delivery charge dekhkar purchase cancel kar diya. Sabse likely UX/psychology issue kya hai?",
      options: [
        "Social Proof",
        "Authority Bias",
        "Brand Recall",
        "Unexpected cost/friction"
      ],
      answerIndex: 3,
      difficulty: "medium"
    },
    // Hard (Level 11-15)
    {
      id: 311,
      question: "Ek AI model confidently ek aisi factual information generate karta hai jo actually incorrect hai. Is phenomenon ko commonly kya kehte hain?",
      options: [
        "Hallucination",
        "Overfitting",
        "Automation",
        "Rendering"
      ],
      answerIndex: 0,
      difficulty: "advanced"
    },
    {
      id: 312,
      question: "A/B testing me website ke do versions test karne ka primary objective kya hota hai?",
      options: [
        "Dono websites ko Google par rank karana",
        "Identify karna ki kaunsa version target metric par better perform karta hai",
        "Website ka backup banana",
        "Competitor ki website copy karna"
      ],
      answerIndex: 1,
      difficulty: "advanced"
    },
    {
      id: 313,
      question: "Ek company product ko \"Most Popular\" label karke three pricing plans ke beech highlight karti hai. Iska likely psychological objective kya hai?",
      options: [
        "Product ki manufacturing cost reduce karna",
        "SEO improve karna",
        "Customer ko ek preferred choice ki taraf guide karna",
        "Accounting simplify karna"
      ],
      answerIndex: 2,
      difficulty: "advanced"
    },
    {
      id: 314,
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
      id: 315,
      question: "Ek subscription company ke paas do options hain: Plan A - Rs.999/month, Cancel Anytime. Plan B - Rs.9,999/year, \"Save Rs.1,989\". Agar company annual plan ko strategically highlight karti hai, to business ka likely objective kya hai?",
      options: [
        "Customer ko monthly plan hi choose karwana",
        "Website traffic reduce karna",
        "Product ki manufacturing cost badhana",
        "Customer commitment aur upfront revenue increase karna"
      ],
      answerIndex: 3,
      difficulty: "advanced"
    }
  ]
];

export const khushiSoniQuestions = [
  {
    id: 901,
    question: "Which of these is the most important factor in creating a positive first impression during an interview?",
    options: [
      "Expensive clothes",
      "Confident body language and a smile",
      "Speaking very fast",
      "Memorizing every answer"
    ],
    answerIndex: 1,
    difficulty: "easy"
  },
  {
    id: 902,
    question: "Which habit contributes the MOST to personality development?",
    options: [
      "Comparing yourself with others",
      "Learning continuously and accepting feedback",
      "Avoiding challenges",
      "Talking more than listening"
    ],
    answerIndex: 1,
    difficulty: "easy"
  },
  {
    id: 903,
    question: "Before an interview, what is the BEST way to reduce stress?",
    options: [
      "Skip breakfast",
      "Keep revising until the last minute",
      "Practice deep breathing or meditation for a few minutes",
      "Drink multiple cups of coffee"
    ],
    answerIndex: 2,
    difficulty: "easy"
  },
  {
    id: 904,
    question: "During an interview, if you don't know the answer to a question, what should you do?",
    options: [
      "Make up an answer",
      "Stay silent",
      "Honestly admit it and explain how you would find the solution",
      "Change the topic"
    ],
    answerIndex: 2,
    difficulty: "easy"
  },
  {
    id: 905,
    question: "Which of the following is a sign of a strong personality?",
    options: [
      "Dominating every conversation",
      "Always trying to prove yourself right",
      "Respecting others while confidently expressing your own thoughts",
      "Speaking the loudest in the room"
    ],
    answerIndex: 2,
    difficulty: "easy"
  }
];
