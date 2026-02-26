// Phishing Email Examples
const phishingExamples = [
  {
    text:
      "From: school-it-support@security-check.com\n" +
      "Subject: URGENT: Verify your school account now!\n\n" +
      "Hi student,\n\n" +
      "We noticed a problem with your school account. Click this link " +
      "in the next 10 minutes or your account will be deleted:\n" +
      "http://school-login-fix.example-login-check.com\n\n" +
      "Thanks,\nIT Help Desk",
    answer: "phishing",
    explanation:
      "This looks super urgent and scary, right? But official emails usually don't threaten you or use weird email addresses like 'security-check.com'. They also won't ask you to click a strange link to fix a problem.",
  },
  {
    text:
      "From: librarian@yourmiddleschool.edu\n" +
      "Subject: Overdue library book reminder\n\n" +
      "Hello,\n\n" +
      "Our records show you still have 'Introduction to Robotics' checked out. " +
      "Please return it by Friday or talk to the librarian if you have questions.\n\n" +
      "Thank you,\nSchool Library",
    answer: "safe",
    explanation:
      "This email seems totally normal! The sender's email address looks real, it's about something you know (a library book), and it asks you to talk to a person if you have questions, not click a weird link.",
  },
  {
    text:
      "From: free-prizes@super-giveaway.com\n" +
      "Subject: You won a new gaming laptop!!!\n\n" +
      "Congratulations!\n\n" +
      "You were randomly selected to win a gaming laptop. Just reply with your " +
      "full name, home address, and school password so we can confirm your identity.\n\n" +
      "Act fast or we will pick another winner!",
    answer: "phishing",
    explanation:
      "Wow, a free laptop sounds amazing! But hold on... why do they need your school password? Big companies will NEVER ask for your password in an email. This is a huge red flag! If something sounds too good to be true, it probably is.",
  },
  // New Phishing Examples
  {
    text:
      "From: support@security-alert.net\nSubject: URGENT: Account Suspended\n\nDear User,\n\nWe have detected unusual activity on your account. To prevent further issues, please click the link below to verify your account immediately:\nhttp://verify-account.malicious.link\n\nFailure to do so will result in permanent account suspension.\n\nSincerely,\nAccount Security Team",
    answer: "phishing",
    explanation:
      "Urgent requests, threats of account suspension, and suspicious links are common phishing tactics. Always check the sender's email address and hover over links before clicking.",
  },
  {
    text:
      "From: [Friend's Name]@[random-email.com]\nSubject: Friend in Emergency\n\nHey, I'm stuck in an emergency and need money urgently. Can you quickly send funds to this account?\n[Bank Details]\n\nI'll explain everything later. Please help!\n\nThanks,\n[Friend's Name]",
    answer: "phishing",
    explanation:
      "Be very wary of emails from friends or family asking for money, especially if they claim to be in an emergency and the email address looks unusual. Always try to contact them directly through a different method (phone call, text) to confirm.",
  },
  {
    text:
      "From: accounts@billing-department.org\nSubject: Invoice Overdue - Action Required\n\nDear Customer,\n\nYour invoice #123456 is overdue. Please click here to view and pay your invoice immediately to avoid late fees:\nhttp://pay-invoice.fake-billing.com\n\nThank you,\nBilling Department",
    answer: "phishing",
    explanation:
      "Unexpected invoices, especially with urgent calls to action and suspicious links, are often phishing attempts. Verify the sender and invoice details through official channels before clicking any links or making payments.",
  },
  {
    text:
      "From: delivery@package-updates.info\nSubject: Your Package Delivery Failed\n\nDear Customer,\n\nWe attempted to deliver your package, but it failed. Please update your delivery preferences and pay a small re-delivery fee here:\nhttp://re-delivery.scam-logistics.net\n\nSincerely,\nDelivery Service",
    answer: "phishing",
    explanation:
      "Unsolicited notifications about failed package deliveries, especially those asking for personal information or payment for re-delivery, are common phishing scams. Always track packages through official carrier websites.",
  },
  {
    text:
      "From: alert@security-monitor.biz\nSubject: Security Alert: Unusual Activity Detected\n\nDear Account Holder,\n\nWe detected unusual login activity on your account from an unrecognized device. For your security, please verify your identity immediately by clicking the link below:\nhttp://security-verify.bad-site.org\n\nIf this was not you, please secure your account.\n\nThank You,\nSecurity Team",
    answer: "phishing",
    explanation:
      "Security alerts that prompt immediate action via a link should be treated with extreme caution. Always navigate directly to the service's official website or app to check for alerts, rather than clicking links in emails.",
  },
  {
    text:
      "From: prize@sweepstakes-winners.com\nSubject: Congratulations, You've Won!\n\nDear Lucky Winner,\n\nCongratulations! You have been selected as a winner in our exclusive sweepstakes. To claim your prize, please provide your personal and banking details here:\nhttp://claim-your-prize.free-money.com\n\nClaim now before it's too late!\n\nBest Regards,\nSweepstakes Committee",
    answer: "phishing",
    explanation:
      "Emails claiming you've won a prize in a contest you didn't enter, especially those asking for personal or financial information, are almost always scams. If something sounds too good to be true, it probably is.",
  },
  {
    text:
      "From: no-reply@account-services.info\nSubject: Password Verification Required\n\nDear User,\n\nWe require you to verify your password to continue using our services. Please click the link below to update your credentials:\nhttp://verify-password.login-update.net\n\nThank you for your cooperation.\n\nAccount Services",
    answer: "phishing",
    explanation:
      "Companies will rarely ask you to verify your password via an email link. If you receive such an email, it's safer to go directly to the service's website and log in there to check for any messages or issues.",
  },
  {
    text:
      "From: security@mybank-online.biz\nSubject: Important: Your Bank Account\n\nDear Valued Customer,\n\nThere has been an issue with your bank account that requires your immediate attention. Please log in to your account through the following secure link:\nhttp://secure-login.bank-portal.com\n\nFailure to do so may result in account restrictions.\n\nSincerely,\nYour Bank",
    answer: "phishing",
    explanation:
      "Banks will typically not send emails with urgent requests to click links for account issues. Always access your bank's website by typing the official URL into your browser, not by clicking links in emails.",
  },
  {
    text:
      "From: irs-support@tax-refunds.gov.org\nSubject: Tax Refund Notification\n\nDear Taxpayer,\n\nYou are eligible for a tax refund of $500. To process your refund, please submit your personal and banking information through our secure portal:\nhttp://tax-refund.government-claim.net\n\nThank you,\nIRS e-File Service",
    answer: "phishing",
    explanation:
      "Government agencies like the IRS typically do not initiate contact about tax refunds via email, especially if they ask for personal or financial information through a link. Always be suspicious of such emails.",
  },
  {
    text:
      "From: deals@discount-store.vip\nSubject: Exclusive Offer - Limited Time!\n\nHello,\n\nCongratulations! You've been selected for an exclusive, limited-time offer. Click here to claim your discount before it expires:\nhttp://exclusive-deal.shop-now.xyz\n\nDon't miss out!\n\nBest,\nYour Favorite Store",
    answer: "phishing",
    explanation:
      "While legitimate marketing emails exist, be cautious of overly aggressive, urgent, or generic 'exclusive offers' from unknown senders or with suspicious links. Always verify the source and legitimacy of such deals.",
  },
  // New Legitimate Examples
  {
    text:
      "From: manager@yourcompany.com\nSubject: Meeting Reminder - Project Alpha\n\nHi Team,\n\nJust a friendly reminder about our Project Alpha meeting today at 2:00 PM in Conference Room B. Please come prepared to discuss the latest progress.\n\nThanks,\n[Your Manager]",
    answer: "safe",
    explanation:
      "This is a typical work email with a clear sender, relevant subject, and no suspicious requests or links. It's a legitimate reminder for an expected event.",
  },
  {
    text:
      "From: orders@shoponline.com\nSubject: Your Order Confirmation #12345\n\nDear Customer,\n\nThank you for your recent purchase! Your order #12345 has been confirmed and will be shipped soon. You can track your order here:\nhttps://www.shoponline.com/track?order=12345\n\nSincerely,\nShopOnline Team",
    answer: "safe",
    explanation:
      "This is a standard order confirmation email from a known retailer. The sender's email is legitimate, and the link goes to a secure, official tracking page. Always check the domain of such links.",
  },
  {
    text:
      "From: newsletter@organization.com\nSubject: Weekly Newsletter from [Organization Name]\n\nHello Subscriber,\n\nHere's your weekly update from [Organization Name], featuring our latest news, articles, and upcoming events. Read more on our website:\nhttps://www.organization.com/newsletter/latest\n\nEnjoy,\nThe [Organization Name] Team",
    answer: "safe",
    explanation:
      "This is a common newsletter from an organization you likely subscribed to. The sender and links appear legitimate, providing information rather than demanding action or personal details.",
  },
  {
    text:
      "From: registrar@university.edu\nSubject: Class Schedule Update\n\nDear Student,\n\nThis is an important update regarding your Fall semester class schedule. Please log in to your student portal to view the changes:\nhttps://student.university.edu/portal\n\nBest Regards,\nUniversity Registrar",
    answer: "safe",
    explanation:
      "A legitimate email from an educational institution about a schedule change. It directs you to a known, secure portal for information, rather than asking for direct credentials.",
  },
  {
    text:
      "From: updates@softwarecompany.com\nSubject: Software Update Available\n\nDear User,\n\nA new version of [Software Name] is now available with improved features and bug fixes. You can download the update from our official website:\nhttps://www.softwarecompany.com/downloads\n\nThank you for using our software,\n[Software Name] Team",
    answer: "safe",
    explanation:
      "This is a standard notification about a software update from a known company. It directs you to their official download page. Always download software updates from the official source.",
  },
  {
    text:
      "From: appointments@clinic.com\nSubject: Appointment Confirmation\n\nDear [Patient Name],\n\nThis email confirms your appointment with Dr. Smith on [Date] at [Time]. Please arrive 15 minutes early. You can reschedule here if needed:\nhttps://www.clinic.com/reschedule\n\nSee you soon,\nClinic Staff",
    answer: "safe",
    explanation:
      "A routine appointment confirmation. The sender and content are clear and expected, and any links lead to an official site for managing appointments.",
  },
  {
    text:
      "From: statements@utilitycompany.com\nSubject: Your Monthly Statement\n\nDear Customer,\n\nYour latest monthly statement from [Utility Company Name] is now available. Log in to your online account to view the details:\nhttps://www.utilitycompany.com/myaccount\n\nThank you,\n[Utility Company Name]",
    answer: "safe",
    explanation:
      "Expected monthly statement notification from a known utility company. It directs you to their official customer portal, which is a safe practice.",
  },
  {
    text:
      "From: events@conference.org\nSubject: Event Registration Details\n\nDear Attendee,\n\nThank you for registering for the Annual Tech Conference! Here are your registration details, including your badge and agenda:\nhttps://www.conference.org/myregistration\n\nWe look forward to seeing you,\nConference Organizers",
    answer: "safe",
    explanation:
      "Confirmation of event registration, directing you to an official page for details. This is a legitimate and expected communication after signing up for an event.",
  },
  {
    text:
      "From: hr@yourcompany.com\nSubject: Important Announcement: Office Closure\n\nDear Employees,\n\nDue to unforeseen circumstances, the office will be closed on [Date]. Please work remotely if possible. Further updates will be provided.\n\nSincerely,\nHuman Resources",
    answer: "safe",
    explanation:
      "An official announcement from a company's HR department. The sender is internal and trustworthy, and the message contains relevant information for employees without suspicious requests.",
  },
  {
    text:
      "From: admissions@school.edu\nSubject: Open House Reminder\n\nDear Prospective Student,\n\nThis is a reminder for the upcoming School Open House on [Date] at [Time]. We hope to see you there! More details can be found here:\nhttps://www.school.edu/openhouse\n\nBest regards,\nAdmissions Team",
    answer: "safe",
    explanation:
      "A reminder for a school event from the admissions department. The email address is legitimate, and the link points to the official school website.",
  },
];

const phishingMessageEl = document.getElementById("phishing-message");
const phishingFeedbackEl = document.getElementById("phishing-feedback");
const phishingButtons = document.querySelectorAll(
  'button[data-answer="safe"], button[data-answer="phishing"]'
);
const nextPhishingBtn = document.getElementById("next-activity-btn"); // Get the next activity button
const newEmailBtn = document.getElementById("next-phishing"); // Renamed for clarity
const scoreEl = document.getElementById("phishing-score");
const goalEl = document.getElementById("phishing-goal");

let correctGuesses = 0;
let attempts = 0;
const masteryTarget = 3;
const activityId = "phishing_detective";
let completionSaved = getCompletionStatus(activityId);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const safeExamples = phishingExamples.filter(example => example.answer === "safe");
const phishingOnlyExamples = phishingExamples.filter(example => example.answer === "phishing");

let safeQueue = shuffle([...safeExamples]);
let phishingQueue = shuffle([...phishingOnlyExamples]);
let nextEmailType = Math.random() < 0.5 ? "safe" : "phishing";
let currentPhishingExample = null;

function getNextExample() {
  if (nextEmailType === "safe") {
    if (!safeQueue.length) safeQueue = shuffle([...safeExamples]);
    const example = safeQueue.pop();
    nextEmailType = "phishing";
    return example;
  }

  if (!phishingQueue.length) phishingQueue = shuffle([...phishingOnlyExamples]);
  const example = phishingQueue.pop();
  nextEmailType = "safe";
  return example;
}

function showPhishingExample() {
  if (!phishingMessageEl) return;
  currentPhishingExample = getNextExample();
  phishingMessageEl.textContent = currentPhishingExample.text;
  if (phishingFeedbackEl) {
    phishingFeedbackEl.textContent = "";
    phishingFeedbackEl.className = "result";
  }
  // Re-enable buttons for the new example
  phishingButtons.forEach(btn => btn.disabled = false);
}

function updateScoreUi() {
  if (scoreEl) {
    scoreEl.textContent = `${correctGuesses}/${attempts}`;
  }
  if (goalEl) {
    const remaining = Math.max(0, masteryTarget - correctGuesses);
    goalEl.textContent = remaining > 0
      ? `Get ${remaining} more correct to earn your mastery star.`
      : "Mastery unlocked! Keep practicing with more emails.";
  }
}

if (nextPhishingBtn) {
  nextPhishingBtn.classList.remove("disabled");
  nextPhishingBtn.removeAttribute("aria-disabled");
  nextPhishingBtn.removeAttribute("tabindex");
}

if (phishingExamples.length && phishingMessageEl) {
  showPhishingExample();
}

updateScoreUi();

if (phishingButtons.length && phishingFeedbackEl) {
  phishingButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const guess = btn.getAttribute("data-answer");
      if (!currentPhishingExample) return;
      const correct = currentPhishingExample.answer;
      const explanation = currentPhishingExample.explanation;
      attempts++;

      if (guess === correct) {
        phishingFeedbackEl.textContent = "Awesome, you got it! " + explanation;
        phishingFeedbackEl.className = "result good";
        correctGuesses++;

        if (!completionSaved && correctGuesses >= masteryTarget) {
          completionSaved = true;
          saveCompletionStatus(activityId, true);
          phishingFeedbackEl.textContent += " 🎉 You reached mastery and earned your star!";
        }
      } else {
        phishingFeedbackEl.textContent = "Not quite, let's learn why. " + explanation;
        phishingFeedbackEl.className = "result bad";
      }
      updateScoreUi();
      // Disable buttons after an answer to prevent multiple submissions for the same example
      phishingButtons.forEach(b => b.disabled = true);
    });
  });
}

if (newEmailBtn) {
  newEmailBtn.addEventListener("click", () => {
    showPhishingExample();
    // Re-enable buttons for the new example
    phishingButtons.forEach(btn => btn.disabled = false);
  });
}