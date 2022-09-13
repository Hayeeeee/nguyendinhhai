function numberOneTriangle(soNguyen) {
    let result = '';
    if (Number(soNguyen) >=1 && Number(soNguyen) <=10){
        for(let i =1; i <= Number(soNguyen); i++){
            for(let j=1; j<=i; j++){
                result+="*";
            }
            result+="\n";  
        }    
        alert(result);
    }else{
        return 0;
    }
    
}

numberOneTriangle(10);