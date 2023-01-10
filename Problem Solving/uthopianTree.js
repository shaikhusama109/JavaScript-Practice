function utopianTree(n) {
    // Write your code here
    let initialHeigth = 1;
    for(let i=1;i<=n; i++){
       if( i % 2 != 0){
        initialHeigth=initialHeigth+initialHeigth
        
       }
       else{
        initialHeigth++
       }
        
    }
    console.log(initialHeigth)

}

utopianTree(4)