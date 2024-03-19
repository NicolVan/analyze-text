function analyze(){
    var text = document.getElementById("txt").value;
    let result1 = document.getElementById("numWords");
    let result2 = document.getElementById("numLetters");
    let result3 = document.getElementById("frequencywords");
    
    const words = text.split(" ");
    let numberwords = words.length;
    result1.innerHTML = `Words: ${numberwords}`;
    
    const letters = text.split('');
    let numLett = letters.length;
    result2.innerHTML = `Letters : ${numLett}`;
    
    const wordFrequency = words.reduce((acc, word) =>{
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    },{})
    
    result3.innerHTML = "";
    for(const wrd  in wordFrequency){
        const frequency  = wordFrequency[wrd];
        const newElement = document.createElement('p');
        newElement.textContent = `${wrd} : ${frequency}`;
        result3.appendChild(newElement);
    }
}
