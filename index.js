const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const search = document.getElementById("search");
const btn = document.getElementById("search-btn");
const input = document.getElementById("inp-word");
const sound = document.getElementById('sound')
const btn2 = document.getElementById('btn2')

 btn.addEventListener("click", async () => {
    try{
        let inputValue = input.value; //gotten from the declaration above
        const res = await fetch(`${url}${inputValue}`);
        const data = await res.json();
        console.log(data);
        result.innerHTML = `<h3>${inputValue}</h3>
    <button onclick="playSound()"><i class="fas fa-volume-up"></i></i></button>
    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>/${inputValue}</p>
    </div>
    <div class="word-meaning">
        <p>${data[0].meanings[0].definitions[0].definition}</p>
    </div>
    <div class="word-example">
        <p>${data[0].meanings[0].definitions[0].example || ''}</p>
    </div>
    <div class="synonym">
        <p>${data[0].meanings[0].synonyms[0] || 'not available'}, ${data[0].meanings[0].synonyms[1] || ''}</p>
    </div>`;
    sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`)  
    }
    catch(e) {
        console.log(`error:(, ${e}`)
    }
});

function playSound() {
   sound.play()
}



//AlTERNATIVE METHOD
// const dic = async () => {
//     let term = input.value  //the the value of the input in the search bar
//     const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`)
//     const data = await res.json()
//     console.log(data)
    // result.innerHTML = `<h3>${term}</h3>
    //     <button><i class="fas fa-volume-up"></i></i></button>
    //     <div class="details">
    //         <p>${data[0].meanings[0].partOfSpeech}</p>
    //         <p>/${term}</p>
    //     </div>
    //     <div class="word-meaning">
    //         <p>${data[0].meanings[0].definitions[0].definition}</p>
    //     </div>
    //     <div class="word-example">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elitint aliquae or nobis illum provident!
    //     </div>
    //     <div class="synonym">
    //         <p>Synonyms:${data[0].meanings[0].synonyms[0]}, ${data[0].meanings[0].synonyms[1]}</p>
    //     </div>`;
//}
// btn.addEventListener('click', dic)
