//function for create option
function option(el){
    let s_tag = document.getElementById("lang");
    let opt = document.createElement("option");
        opt.innerText=el.name;
        opt.value=el.code;
        s_tag.append(opt);
}
//fetch data in option Menu
async function fetchData(){
    let res = await fetch("https://libretranslate.de/languages");
    let data = await res.json();
    console.log(data);
    data.forEach(el => {
        option(el)
    });
}
function writtenValue(){
    let lang = document.getElementById("Box1")
    return lang.value;
}
async function translate(){
    let txt = document.getElementById("Box1").value;
    let lang_opt = document.getElementById("lang").value;
    //console.log(lang_opt);
    let res = await fetch("https://libretranslate.de/translate", {
        method:"POST",
        body: JSON.stringify({
        q:writtenValue(),
        source:"en",
        target:lang_opt,
        }),
        headers: {"Content-Type":"application/json"},
    });
    let data = await res.json();
    return data;   
}
async function showData(){
    let result =  await translate();
    console.log(result.translatedText);
    let box2 = document.getElementById("Box2");
    
    box2.value = result.translatedText;
   // box2.append(result.translatedText);
}
fetchData();
