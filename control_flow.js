let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "Subscriber";
let userCategory;
let isAuthenticated = true;
if(isLoggedIn){
    if(userRole=="admin"){
        userMessage="Welcome, Admin!";
    }
    else{
        userMessage="Welcome, User!";
    }
}
else{
    userMessage = "Please log in to access the system";
}
switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory ="Subscriber";
        break;
    default:
        userCategory = "Unknown";
    
}
let authenticationStatus = isAuthenticated?"Authentication":"Not authenticated";
console.log("Access Level:", accessLevel);
console.log("User Message:",userMessage);
console.log("User category:",userCategory);
console.log("Authentication Status:",authenticationStatus)
