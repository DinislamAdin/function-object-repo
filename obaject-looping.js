var shopingCart = {
    shoos : 10, 
    color : 'black',
    mouse : 10,
    marks : 89,
}
const keys = Object.keys(shopingCart);

console.log(keys);
const value = Object.values(shopingCart);
console.log(value);

for(i = 0; i < keys.length; i++){
   var propartyName = keys[i];
   var propartyvalue = shopingCart[propartyName];

   console.log(propartyName, propartyvalue)

}