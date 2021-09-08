async function search(){
    let movie = document.getElementById("movie_nm").value;
    let data_div = document.getElementById("data");
    data_div.innerHTML=null;

    let response = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=9bfa028f`);
    let data = await response.json();
    console.log(data);

    if(data.Response != "False" && data.imdbRating >"8"){
        let h1 = document.createElement('h1');
            h1.innerText = "Recommended"

        let p = document.createElement("p")
            p.innerHTML=`<h2>${data.Title}</h2>`;

        let date = document.createElement("p")
         date.innerHTML = `<p> Release Date :${data.Released}</p>`;

        let rating = document.createElement("p")
         rating.innerHTML = `<p> Rating :${data.imdbRating}</p>`;
        
        let image = document.createElement('img');
            image.src = data.Poster;

        let div = document.createElement('div')
        div.append(h1,p,image,date,rating);
        data_div.append(div)
    }else if(data.Response != "False"){
        let p = document.createElement("p")
            p.innerHTML=`<h2>${data.Title}</h2>`;

        let date = document.createElement("p")
         date.innerHTML = `<h2> Release Date :${data.Released}</h2>`;

        let rating = document.createElement("p")
         rating.innerHTML = `<h2> Rating :${data.imdbRating}</h2>`;
        
        let image = document.createElement('img');
            image.src = data.Poster;

        let div = document.createElement('div')
        div.append(image,p,date,rating);
        data_div.append(div)
    }
    
    else{
        let data_div = document.getElementById("data")

        let image = document.createElement('img');
            image.src = "http://decoden.org/girona/common/images/sorry-no-data.png";
            let div = document.createElement('div')
        div.append(image);
        data_div.append(div)

    }
}