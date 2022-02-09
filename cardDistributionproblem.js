function cardDistribution(...arg) {
    
    var getCardInfos = arg[0];

    var cardSerialDistributionInfo = [];

    for (var i = 0; i < getCardInfos.length; i++){

        var first2CharDistrict = getCardInfos[i].district.substring(0, 2).toUpperCase();
        var last2NumberCurrentYear = getCardInfos[i].currentYear.toString().substr(-2);
        var first2NumberPostalCode = getCardInfos[i].postNo.toString().substring(0,2);
        var userBirthDate = getCardInfos[i].birthYear.toString();
        var zeroPaddingWithSerial = String(i + 1).padStart(6, '0');
        
        var generateCardNumber = first2CharDistrict + last2NumberCurrentYear + first2NumberPostalCode + userBirthDate + zeroPaddingWithSerial;

        var giftRose = 'W';
        if ((i+1)%2 == 0) {
            giftRose = 'R';
        }

        var usePriority = getCardInfos[i].priority;
        var obj = { cardNumber: generateCardNumber, gift: giftRose, priority: usePriority };
        cardSerialDistributionInfo.push(obj);
    }
        cardSerialDistributionInfo.sort(((a, b) => (a.priority < b.priority) ? -1 : 1)); 
        return cardSerialDistributionInfo;
}
console.log(cardDistribution([
    { name: "Mr Rashed", birthYear: 1999, currentYear: 2022, district: "Dhaka", postNo: 1200, priority: 2 },
    { name: "Mr Raju", birthYear: 1995, currentYear: 2022, district: "Rajshahi", postNo: 1211, priority: 1 }
]));