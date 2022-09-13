let first = prompt('Nhap A');
let second = prompt('Nhap B');

function tinh() {
    for (let i = Number(first); i <= Number(second); i++){
        let count = 0;
        for(let j = 2; j <=i; j++){
            if(i % j ==0){
                count+=1;
            }
        }
        if(count <=1){
            document.write(i);
        }
    }
}

tinh();