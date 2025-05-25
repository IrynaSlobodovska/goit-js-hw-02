function checkForSpam(message) {
  const lowerMessage = message.toLowerCase();
  return lowerMessage.includes("spam") || lowerMessage.includes("sale");
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offer now!"));
console.log(checkForSpam("Amazing Sale, only tonight!"));
console.log(checkForSpam("Get rid of sPaM email. Our book in on sale!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
