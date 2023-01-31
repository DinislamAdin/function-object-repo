const color = 'black';
if(color === 'green'){
    console.log('you are my green friend')
}
else if(color === 'red'){
    console.log('you are my red friend')
}
else if(color === 'black'){
    console.log('you are my black friend')
}
else if(color === 'blue'){
    console.log('you are my blue friend')
}
else{
    console.log('you are not my friend')
}


switch(color){
    case 'green': 
        console.log('you are my green friend')
        break;
    case 'red': 
        console.log('you are my red friend')
        break;
    case 'black': 
        console.log('you are my black friend')
        break;
    case 'blue': 
        console.log('you are my green friend')
        break;
    case '': 
        console.log('you are not my friend')
        break;
}