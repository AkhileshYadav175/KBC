export const prizeMoneyMap = [
  "₹100",
  "₹200",
  "₹300",
  "₹400",
  "₹500", // Safe zone 1 (index 4, Level 5)
  "₹600",
  "₹700",
  "₹800",
  "₹900",
  "₹1,100", // Safe zone 2 (index 9, Level 10)
  "₹1,300",
  "₹1,500",
  "₹1,700",
  "₹1,900",
  "₹2,100" // Safe zone 3 / Jackpot (index 14, Level 15)
];

export const safeZoneIndices = [4, 9, 14]; // index in prizeMoneyMap

export const contestantGroups = [
  // --- Set 1 ---
  [
    // Easy (Level 1-5)
    {
      id: 101,
      question: "Tally software kis company ne develop kiya hai?",
      options: [
        "Coral Software",
        "Microsoft",
        "Tally Solutions",
        "None of the Above"
      ],
      answerIndex: 2,
      difficulty: "easy"
    },
    {
      id: 102,
      question: "Tally mein user ka data kis directory mein store hota hai?",
      options: [
        "Bin",
        "Sub",
        "Data",
        "Database"
      ],
      answerIndex: 2,
      difficulty: "easy"
    },
    {
      id: 103,
      question: "Tally mein company select karne ke liye kaunsi shortcut key use hoti hai?",
      options: [
        "Alt + F1",
        "Alt + F3",
        "F1",
        "F4"
      ],
      answerIndex: 1,
      difficulty: "easy"
    },
    {
      id: 104,
      question: "Tally mein nayi company banane ke liye kaunsa option use hota hai?",
      options: [
        "New Company",
        "Start Company",
        "Create",
        "Create Company"
      ],
      answerIndex: 2,
      difficulty: "easy"
    },
    {
      id: 105,
      question: "Tally mein naya ledger banane ke liye kaunsi shortcut key use hoti hai?",
      options: [
        "Alt + A",
        "Alt + C",
        "Alt + X",
        "Alt + D"
      ],
      answerIndex: 1,
      difficulty: "easy"
    },
    // Medium (Level 6-10)
    {
      id: 106,
      question: "Tally mein date period change karne ke liye kaunsi shortcut key use hoti hai?",
      options: [
        "Alt + F2",
        "Alt + F1",
        "Ctrl + F2",
        "Ctrl + F1"
      ],
      answerIndex: 0,
      difficulty: "medium"
    },
    {
      id: 107,
      question: "Ek bank account se doosre bank account mein amount transfer karne ke liye kaunsa voucher use hota hai?",
      options: [
        "Payment",
        "Receipt",
        "Journal",
        "Contra"
      ],
      answerIndex: 3,
      difficulty: "medium"
    },
    {
      id: 108,
      question: "Salary, rent ya interest paid ki entry kis voucher mein hoti hai?",
      options: [
        "Payment",
        "Contra",
        "Receipt",
        "Journal"
      ],
      answerIndex: 0,
      difficulty: "medium"
    },
    {
      id: 109,
      question: "Tally mein credit purchase record karne ke liye kaunsa voucher use hota hai?",
      options: [
        "F5: Payment",
        "F9: Purchase",
        "F6: Receipt",
        "F7: Journal"
      ],
      answerIndex: 1,
      difficulty: "medium"
    },
    {
      id: 110,
      question: "Tally mein credit sales record karne ke liye kaunsa voucher use hota hai?",
      options: [
        "F5: Payment",
        "F7: Journal",
        "F8: Sales",
        "F6: Receipt"
      ],
      answerIndex: 2,
      difficulty: "medium"
    },
    // Hard (Level 11-15)
    {
      id: 111,
      question: "Balance Sheet ki sahi accounting equation kaunsi hai?",
      options: [
        "Assets = Liabilities + Capital",
        "Liabilities = Assets + Capital",
        "Capital = Assets + Liabilities",
        "Assets = Capital − Liabilities"
      ],
      answerIndex: 0,
      difficulty: "advanced"
    },
    {
      id: 112,
      question: "Accounting mein supplier ka account kis group mein aata hai?",
      options: [
        "Supplier",
        "Sundry Debtors",
        "Sundry Creditors",
        "Sundry Customers"
      ],
      answerIndex: 2,
      difficulty: "advanced"
    },
    {
      id: 113,
      question: "Kaunsa financial statement kisi specific date par business ki financial position dikhata hai?",
      options: [
        "Bank and Cash Balances",
        "Individual Account Balances",
        "Summary of All Transactions",
        "Balance Sheet"
      ],
      answerIndex: 3,
      difficulty: "advanced"
    },
    {
      id: 114,
      question: "Business ke liye kharida gaya computer kis type ka asset hai?",
      options: [
        "Fixed Asset",
        "Direct Expense",
        "Current Asset",
        "None"
      ],
      answerIndex: 0,
      difficulty: "advanced"
    },
    {
      id: 115,
      question: "Business ne bank se ₹10,000 cash withdraw kiye. Kaunsa voucher use hoga?",
      options: [
        "Payment",
        "Contra",
        "Receipt",
        "Post-Dated"
      ],
      answerIndex: 1,
      difficulty: "advanced"
    }
  ],

  // --- Set 2 ---
  [
    // Easy (Level 1-5)
    {
      id: 201,
      question: "Tally kis type ka software hai?",
      options: [
        "Computerized Accounting",
        "Manual Accounting",
        "Operating System",
        "Programming Language"
      ],
      answerIndex: 0,
      difficulty: "easy"
    },
    {
      id: 202,
      question: "Tally se bahar nikalne ke liye kaunsa option use hota hai?",
      options: [
        "Quit",
        "Exit",
        "Close",
        "Shut Company"
      ],
      answerIndex: 0,
      difficulty: "easy"
    },
    {
      id: 203,
      question: "Tally mein nayi company create karne ki shortcut key kya hai?",
      options: [
        "Ctrl + F3",
        "Alt + F3",
        "Ctrl + F4",
        "Alt + F4"
      ],
      answerIndex: 1,
      difficulty: "easy"
    },
    {
      id: 204,
      question: "Pehle se bani company mein changes karne ke liye kaunsa option use hota hai?",
      options: [
        "Alter",
        "Select Company",
        "Shut Company",
        "Modify Company"
      ],
      answerIndex: 0,
      difficulty: "easy"
    },
    {
      id: 205,
      question: "Tally mein kitne predefined ledgers hote hain?",
      options: [
        "One",
        "Two",
        "Four",
        "Three"
      ],
      answerIndex: 1,
      difficulty: "easy"
    },
    // Medium (Level 6-10)
    {
      id: 206,
      question: "Tally mein calculator open karne ke liye kaunsi shortcut key use hoti hai?",
      options: [
        "Ctrl + P",
        "Ctrl + C",
        "Ctrl + N",
        "Ctrl + A"
      ],
      answerIndex: 2,
      difficulty: "medium"
    },
    {
      id: 207,
      question: "Machinery par depreciation ki entry kis voucher mein hoti hai?",
      options: [
        "Payment",
        "Contra",
        "Receipt",
        "Journal"
      ],
      answerIndex: 3,
      difficulty: "medium"
    },
    {
      id: 208,
      question: "Closing stock generally kahan show hota hai?",
      options: [
        "Journal Voucher",
        "Trial Balance",
        "Profit & Loss Account",
        "Balance Sheet"
      ],
      answerIndex: 3,
      difficulty: "medium"
    },
    {
      id: 209,
      question: "Salary Account generally kis group mein aata hai?",
      options: [
        "Direct Incomes",
        "Direct Expenses",
        "Indirect Incomes",
        "Indirect Expenses"
      ],
      answerIndex: 3,
      difficulty: "medium"
    },
    {
      id: 210,
      question: "Customer se payment receive hone ki entry kis voucher mein hoti hai?",
      options: [
        "Payment",
        "Contra",
        "Receipt",
        "Journal"
      ],
      answerIndex: 2,
      difficulty: "medium"
    },
    // Hard (Level 11-15)
    {
      id: 211,
      question: "Sales, Purchases aur Discount Allowed jaise accounts kis category mein aate hain?",
      options: [
        "Personal Accounts",
        "Real Accounts",
        "Nominal Accounts",
        "Bank Accounts Only"
      ],
      answerIndex: 2,
      difficulty: "advanced"
    },
    {
      id: 212,
      question: "Kaunsa reserved group liabilities ke under aata hai?",
      options: [
        "Capital A/c",
        "Fixed Assets",
        "Investment",
        "Sundry Debtors"
      ],
      answerIndex: 0,
      difficulty: "advanced"
    },
    {
      id: 213,
      question: "Business ki financial position dikhane wala statement kaunsa hai?",
      options: [
        "Sales Register",
        "Purchase Register",
        "Balance Sheet",
        "Cash Voucher"
      ],
      answerIndex: 2,
      difficulty: "advanced"
    },
    {
      id: 214,
      question: "Tally mein company ki information change karne ke liye kaunsa option use hota hai?",
      options: [
        "Company Info > Split Company Data",
        "None of These",
        "Company Info > Alter",
        "Company Info > Backup"
      ],
      answerIndex: 2,
      difficulty: "advanced"
    },
    {
      id: 215,
      question: "Business ne ₹85,000 cash HDFC Bank account mein deposit kiye. Kaunsa voucher use hoga?",
      options: [
        "Payment",
        "Contra",
        "Sales",
        "Journal"
      ],
      answerIndex: 1,
      difficulty: "advanced"
    }
  ],

  // --- Set 3 ---
  [
    // Easy (Level 1-5)
    {
      id: 301,
      question: "Tally mein ledgers aur groups create karne ke liye kaunsa menu use hota hai?",
      options: [
        "Inventory Master",
        "Accounting Master",
        "Company Info",
        "Account Info"
      ],
      answerIndex: 3,
      difficulty: "easy"
    },
    {
      id: 302,
      question: "Tally mein Sales Voucher ke liye kaunsi function key use hoti hai?",
      options: [
        "F5",
        "F6",
        "F7",
        "F8"
      ],
      answerIndex: 3,
      difficulty: "easy"
    },
    {
      id: 303,
      question: "Tally mein opened company ko band karne ke liye kaunsa option diya gaya hai?",
      options: [
        "Alter Company",
        "Close Company",
        "Shut Company",
        "Exit Company"
      ],
      answerIndex: 1,
      difficulty: "easy"
    },
    {
      id: 304,
      question: "Gateway of Tally se Go To feature open karne ke liye kaunsi shortcut key use hoti hai?",
      options: [
        "Alt + G",
        "Ctrl + G",
        "Alt + O",
        "Alt + M"
      ],
      answerIndex: 0,
      difficulty: "easy"
    },
    {
      id: 305,
      question: "Cash mein wages pay karne par kaunsa voucher use hota hai?",
      options: [
        "Payment",
        "Contra",
        "Receipt",
        "Journal"
      ],
      answerIndex: 0,
      difficulty: "easy"
    },
    // Medium (Level 6-10)
    {
      id: 306,
      question: "Tally mein Excel data lane ke liye kaunsa option use hota hai?",
      options: [
        "Import",
        "Export",
        "Share",
        "Data"
      ],
      answerIndex: 0,
      difficulty: "medium"
    },
    {
      id: 307,
      question: "Production ya manufacturing expenses kis group mein aate hain?",
      options: [
        "Direct Expenses",
        "Indirect Expenses",
        "Miscellaneous Expenses",
        "None of the Above"
      ],
      answerIndex: 0,
      difficulty: "medium"
    },
    {
      id: 308,
      question: "Rent received ki entry kis voucher mein record hoti hai?",
      options: [
        "Payment",
        "Contra",
        "Receipt",
        "Journal"
      ],
      answerIndex: 2,
      difficulty: "medium"
    },
    {
      id: 309,
      question: "Credit par furniture purchase karne ke liye kaunsa voucher use hoga?",
      options: [
        "Purchase",
        "Payment",
        "Receipt",
        "Journal"
      ],
      answerIndex: 0,
      difficulty: "medium"
    },
    {
      id: 310,
      question: "Tally mein report print karne ki shortcut key kya hai?",
      options: [
        "Alt + P",
        "Ctrl + P",
        "Shift + P",
        "Alt + Ctrl + P"
      ],
      answerIndex: 0,
      difficulty: "medium"
    },
    // Hard (Level 11-15)
    {
      id: 311,
      question: "Cash, inventory aur customers se receivable amount ko broadly kis category mein rakha jata hai?",
      options: [
        "Liabilities",
        "Expenses",
        "Equity Only",
        "Assets"
      ],
      answerIndex: 3,
      difficulty: "advanced"
    },
    {
      id: 312,
      question: "Assets aur Liabilities se Capital calculate karne ka sahi formula kya hai?",
      options: [
        "Capital = Assets + Liabilities",
        "Capital = Liabilities − Assets",
        "Capital = Assets − Liabilities",
        "Capital = Assets × Liabilities"
      ],
      answerIndex: 2,
      difficulty: "advanced"
    },
    {
      id: 313,
      question: "Ramesh se ₹50,000 receive hue. Kaunsa voucher use hoga?",
      options: [
        "Payment",
        "Contra",
        "Receipt",
        "Journal"
      ],
      answerIndex: 2,
      difficulty: "advanced"
    },
    {
      id: 314,
      question: "Mahesh ko ₹25,750 pay kiye gaye. Kaunsa voucher use hoga?",
      options: [
        "Payment",
        "Contra",
        "Receipt",
        "Journal"
      ],
      answerIndex: 0,
      difficulty: "advanced"
    },
    {
      id: 315,
      question: "Tally ke diye gaye menu options mein Profit & Loss Account dekhne ka kaunsa path question paper mein diya gaya hai?",
      options: [
        "None of These",
        "Gateway of Tally > Account Books > Profit & Loss A/c",
        "Gateway of Tally > Reports > Profit & Loss A/c",
        "Gateway of Tally > Display > Profit & Loss A/c"
      ],
      answerIndex: 3,
      difficulty: "advanced"
    }
  ],

  // --- Set 4 ---
  [
    // Easy (Level 1-5)
    {
      id: 401,
      question: "Tally mein Journal Voucher create karne ke liye kaunsi shortcut key use hoti hai?",
      options: [
        "F4",
        "F7",
        "F6",
        "F5"
      ],
      answerIndex: 1,
      difficulty: "easy"
    },
    {
      id: 402,
      question: "Multiple companies open hone par ek company se doosri company mein switch karne ke liye kaunsa option use hota hai?",
      options: [
        "Company",
        "Select Company",
        "Company Info",
        "Shut Company"
      ],
      answerIndex: 1,
      difficulty: "easy"
    },
    {
      id: 403,
      question: "Kisi party ko paise pay karne ki entry kis voucher mein hoti hai?",
      options: [
        "Payment",
        "Contra",
        "Receipt",
        "Journal"
      ],
      answerIndex: 0,
      difficulty: "easy"
    },
    {
      id: 404,
      question: "Mohan ko goods sell karne ki entry kis voucher mein hoti hai?",
      options: [
        "Payment",
        "Contra",
        "Sales",
        "Journal"
      ],
      answerIndex: 2,
      difficulty: "easy"
    },
    {
      id: 405,
      question: "Building ka rent receive hone par kaunsa voucher use hota hai?",
      options: [
        "Payment",
        "Contra",
        "Receipt",
        "Journal"
      ],
      answerIndex: 2,
      difficulty: "easy"
    },
    // Medium (Level 6-10)
    {
      id: 406,
      question: "Cash aur Bank ke beech amount transfer karne ke liye kaunsa voucher use hota hai?",
      options: [
        "Payment",
        "Receipt",
        "Journal",
        "Contra"
      ],
      answerIndex: 3,
      difficulty: "medium"
    },
    {
      id: 407,
      question: "Aapki question paper ke according, Tally start karne par pehli baar kaunsa menu dikhai deta hai?",
      options: [
        "Gateway of Tally",
        "Display",
        "Company Info",
        "None of These"
      ],
      answerIndex: 2,
      difficulty: "medium"
    },
    {
      id: 408,
      question: "Jis party se business ko paise receive karne hain, uska account kis group mein aata hai?",
      options: [
        "Sundry Creditors",
        "Sundry Debtors",
        "Fixed Assets",
        "Direct Expenses"
      ],
      answerIndex: 1,
      difficulty: "medium"
    },
    {
      id: 409,
      question: "Business ke liye purchase kiya gaya computer kis type ka asset hai?",
      options: [
        "Fixed Asset",
        "Direct Expense",
        "Current Asset",
        "None"
      ],
      answerIndex: 0,
      difficulty: "medium"
    },
    {
      id: 410,
      question: "India mein financial year ki starting date kya hai?",
      options: [
        "1st January",
        "1st February",
        "1st March",
        "1st April"
      ],
      answerIndex: 3,
      difficulty: "medium"
    },
    // Hard (Level 11-15)
    {
      id: 411,
      question: "Personal Account ke rule ke according, receiver ko kya kiya jata hai?",
      options: [
        "Debit",
        "Credit",
        "Both",
        "Balance Entered in Voucher"
      ],
      answerIndex: 0,
      difficulty: "advanced"
    },
    {
      id: 412,
      question: "Purchase Return, Sales Return, Depreciation aur Bad Debts ki entries ke liye kaunsa voucher diya gaya hai?",
      options: [
        "Contra",
        "Journal",
        "Payment",
        "Receipt"
      ],
      answerIndex: 1,
      difficulty: "advanced"
    },
    {
      id: 413,
      question: "Bank Overdraft Account Balance Sheet ke kis side par dikhaya jata hai?",
      options: [
        "Liabilities > Current Liabilities",
        "Assets > Current Liabilities",
        "Liabilities > Loans (Liability)",
        "Assets > Loan & Advance Assets"
      ],
      answerIndex: 0,
      difficulty: "advanced"
    },
    {
      id: 414,
      question: "Business ₹5,00,000 cash se start hua. Aapki question paper mein diye gaye options mein kaunsa voucher select karna hai?",
      options: [
        "Payment",
        "Contra",
        "Sales",
        "Journal"
      ],
      answerIndex: 3,
      difficulty: "advanced"
    },
    {
      id: 415,
      question: "Agar Assets ₹8,00,000 aur Liabilities ₹3,00,000 hain, toh Capital kitna hoga?",
      options: [
        "₹11,00,000",
        "₹5,00,000",
        "₹3,00,000",
        "₹8,00,000"
      ],
      answerIndex: 1,
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
