const accountId = 144553
let accountEmail = "utsav@google.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2 //not allowed

accoutnEmail = "up@up.com"
accountPassword = "123"
accountCity = "Vapi"


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
