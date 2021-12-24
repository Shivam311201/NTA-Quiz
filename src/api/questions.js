const Questions = [
    {
      question: "What can you do on the Hive Blockchain?",
      options: [
        "Create content",
        "Play Games",
        "Socialize",
        "The three above",
      ],
      correct: "The three above",
    }
    ,
    {
      question: "How many seconds is a block created on the Hive blockchain?",
      options: ["1 second", "3 seconds", "60 seconds", "360 seconds"],
      correct: "3 seconds",
      questionId: "2",
    }
    ,
    {
      question: "If I already have an account with Steem do I need an account with Hive?",
      options: [
        "Yes.",
        "No. I can use the same keys and username on Hive.",
        "I will try",
        "Let me see",
      ],
      correct: "No. I can use the same keys and username on Hive.",
      questionId: "3",
    }
    ,
    {
      question: "Where can I create an account?",
      options: [
        "https://hive.blog",
        "https://signup.hive.io/",
        "https://peakd.com/",
        "https://hive.io/",
      ],
      correct: "https://signup.hive.io/",
      questionId: "4",
    }
    ,
    {
      question: "How long does a free account take to be active?",
      options: [
          "2 hours", 
          "24 hours", 
          "72 hours", 
          "84 hours"
      ],
      correct: "72 hours",
      questionId: "5",
    },
    {
      question: "Can you do plagiarism?",
      options: [
          "No", 
          "Yes", 
          "Maybe", 
          "I don´t know"
      ],
      correct: "No",
      questionId: "6",
    },
    {
      question: "What should I do for the first post?",
      options: [
        "Place only one photo",
        "My presentation",
        "Insulting Trump",
        "Press all keys and submit",
      ],
      correct: "My presentation",
      questionId: "7",
    },
    {
      question: "What tag should I use in my first Post?",
      options: [
          "#hiveblog", 
          "#hive", 
          "#introduceyourself", 
          "#introducemyself"
      ],
      correct: "#introduceyourself",
      questionId: "8",
    },
    {
      question: "What is a tribe?",
      options: [
          "It is a group of users with a low reputation", 
          "It is a community that creates content on a topic", 
          "It is a group of users with a high reputation", 
          "It is a community that shares the subject of tribes"
      ],
      correct: "#introduceyourself",
      questionId: "9",
    },
    {
      question: "What is Hive Token (HIVE)?",
      options: [
          "Dollars value on the Hive platform", 
          "Hive platform token percentage", 
          "The primary token of the Hive Blockchain and often a reward on posts", 
          "Another Hive token which is often rewarded on posts"
      ],
      correct: "The primary token of the Hive Blockchain and often a reward on posts",
      questionId: "10",
    },
    {
      question: "What are curators?",
      options: [
          "Views of your posts", 
          "Users who comment on your posts", 
          "Users who follow you", 
          "Users who vote on your content"
      ],
      correct: "Users who vote on your content",
      questionId: "11",
    },
    {
      question: "What is Hive Power (HP)?",
      options: [
          "Bitcoin in my wallet", 
          "Power to vote for everyone", 
          "Dollars in my wallet", 
          "Hive token locked in your hive wallet that give you influence and power to curate others in Hive Blockchain"
      ],
      correct: "Hive token locked in your hive wallet that give you influence and power to curate others in Hive Blockchain",
      questionId: "12",
    },
    {
      question: "What is HBD?",
      options: [
          "A community token on the Hive platform", 
          "Hive Backed Dollar, $1 worth of Hive", 
          "Locked version of HIVE which gives account influence on the platform", 
          "Currency of the blockchain, liquid version"
      ],
      correct: "Hive Backed Dollar, $1 worth of Hive",
      questionId: "13",
    },
    {
      question: "What is a delegation on Hive?",
      options: [
          "Delegating a task", 
          "Delegate a post for yourself", 
          "Lend HP to your account", 
          "Pay for HP"
      ],
      correct: "Lend HP to your account",
      questionId: "14",
    },
    {
      question: "What is Power Up?",
      options: [
          "Transfer Hive Power to Liquid Hive", 
          "Sell Hive on exchange", 
          "Transfer Liquid Hive to Hive Power", 
          "Buy Hive on exchange"
      ],
      correct: "Transfer Liquid Hive to Hive Power",
      questionId: "15",
    },
    {
      question: "What is Power Down?",
      options: [
          "Transfer Hive Power to Liquid Hive", 
          "Sell Hive on exchange", 
          "Transfer Liquid Hive to Hive Power", 
          "Buy Hive on exchange"
      ],
      correct: "Transfer Hive Power to Liquid Hive",
      questionId: "16",
    },
    {
      question: "How many days does it take to have Post Payout?",
      options: [
          "1 day", 
          "5 days", 
          "7 days", 
          "15 days"
      ],
      correct: "7 days",
      questionId: "17",
    },
    {
      question: "What is the owner key?",
      options: [
          "The key to making transfers", 
          "The key to giving to anyone", 
          "The key for place orders in the internal market", 
          "Is the master key for the account and is required to change the other keys"
      ],
      correct: "Is the master key for the account and is required to change the other keys",
      questionId: "18",
    },
    {
      question: "What is the active key?",
      options: [
          "The key to making transfers", 
          "Is used to make transfers and place orders in the internal market", 
          "The key for me to log into the Hive Platform", 
          "Is the master key for the account and is required to change the other keys"
      ],
      correct: "Is used to make transfers and place orders in the internal market",
      questionId: "19",
    },
    {
      question: "What is the private key?",
      options: [
          "The key to making transfers", 
          "Is used to make transfers and place orders in the internal market", 
          "Is to sign a transaction with account's auth", 
          "Is the master key for the account and is required to change the other keys"
      ],
      correct: "Is to sign a transaction with account's auth",
      questionId: "20",
    },
    {
      question: "What is a node?",
      options: [
          "Process to release protocol/blockchain consensus upgrades", 
          "A node is an instance of the Hive blockchain running on a server.", 
          "Process to release protocol/blockchain software improvements", 
          "It's just a centralized server with the Hive blockchain"
      ],
      correct: "A node is an instance of the Hive blockchain running on a server.",
      questionId: "21",
    },
    {
      question: "What is a witness on Hive?",
      options: [
          "Are Witnesses who do marketing on other social networks", 
          "There is a server that runs one of the Hive nodes", 
          "Witnesses are people who know Hive's secrets", 
          "Are all users"
      ],
      correct: "There is a server that runs one of the Hive nodes",
      questionId: "22",
    },
    {
      question: "How many votes can I give to one witness?",
      options: [
          "1 vote", 
          "3 votes", 
          "30 votes", 
          "The votes I want"
      ],
      correct: "1 vote",
      questionId: "23",
    },
    {
      question: "What is the top witness?",
      options: [
          "Top 10", 
          "Top 20", 
          "Top 50", 
          "Top 100"
      ],
      correct: "Top 20",
      questionId: "24",
    },
    {
      question: "I pay fees for making a transfer to the exchange?",
      options: [
          "1 HP", 
          "1 HIVE", 
          "1 HBD", 
          "Free"
      ],
      correct: "Free",
      questionId: "25",
    },
    {
      question: "What is Reward Pool?",
      options: [
          "Hive that is burnt", 
          "User group with joint rewards", 
          "A fixed amount of HIVE tokens are allocated to the network reward fund", 
          "A fixed amount of HIVE tokens that is given to all users"
      ],
      correct: "A fixed amount of HIVE tokens are allocated to the network reward fund",
      questionId: "26",
    },
    {
      question: "What is RocksDB?",
      options: [
          "It is a Rock band known throughout the Hive community", 
          "A fast-on-disk data store with an advanced caching layer, which minimizes latency when reading/writing to and from disk", 
          "Multi Index Rocksdb Adapter that updates the database backend of Hive from memory mapped files to a disk log-structured merge-tree implemented via the RocksDB library", 
          "It is one of the largest communities in Hive"
      ],
      correct: "A fast-on-disk data store with an advanced caching layer, which minimizes latency when reading/writing to and from disk",
      questionId: "27",
    },
    {
      question: "Can I delete or deactivate my account?",
      options: [
          "Yes, in the settings you can delete your account", 
          "No, you have to make a request to the Hive community", 
          "Accounts can be deleted with the active key", 
          "Accounts can not be deactivated or deleted"
      ],
      correct: "Accounts can not be deactivated or deleted",
      questionId: "28",
    },
    {
      question: "Can I change my username?",
      options: [
          "Account names can not be changed", 
          "No, you have to make a request to the Hive community", 
          "The username can be changed with an active key", 
          "Yes, in the settings you can change your username"
      ],
      correct: "Account names can not be changed",
      questionId: "29",
    },
    {
      question: "What's the good number of tags to use?",
      options: [
          "1", 
          "5", 
          "8", 
          "10"
      ],
      correct: "8",
      questionId: "30"
    }   
  ];
  
  export default Questions;