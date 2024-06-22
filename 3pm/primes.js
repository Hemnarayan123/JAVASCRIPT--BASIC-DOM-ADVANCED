






for(val =1; val<=10; val++){
    var count = 0

    for(i=1; i<=val; i++){
        
        if(val%i === 0){
            count++
        }
    }
    
    if(count === 2){
        console.log(val + 'prime');
    }
    else{
        console.log(val + 'not prime');
    }
}

