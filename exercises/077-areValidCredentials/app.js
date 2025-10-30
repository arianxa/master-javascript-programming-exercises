function areValidCredentials (name, contr){
 if (name.length > 3 && contr.length >= 8) {
   return true;
} else {
   return false;
}
}