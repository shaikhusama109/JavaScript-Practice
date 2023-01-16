// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?isFullScreen=true


function designerPdfViewer(h, word) {
    // Write your code here
    
    let heigth =0;
    let wordLength = word.length
    
    
    for(let i = 0; i<h.length; i++){
        let indexOf = h[word.charCodeAt(i)-97]
        if(heigth < indexOf){
            heigth = indexOf
        }
        
        }
    
    return (heigth * wordLength)

}