document.addEventListener("DOMContentLoaded", function () {

    let connexion = new MovieDB();

    if(document.location.pathname.search("fiche-film.html") > 0)
    {
        let params = ( new URL(document.location) ).searchParams;

        console.log(params);
        connexion.requeteInfoFIlm(params.get("id"));
    }
    else {
        connexion.requeteDernierFIlm();
    }


})

class MovieDB{
    constructor() {
        console.log("Construteur");

        this.APIkey = "510e2a21635e1c3a06e3e26ae78de966";

        this.lang = "fr-CA";

        this.baseURL = "https://api.themoviedb.org/3";

        this.imgPath = "https://image.tmdb.org/t/p/";

        //this.largeurAffiche = ["w92", "w154", "w185", "w342", "w500", "w780"];

        //this.largeurTeteAffiche = ["w45", "w185"];

        //this.largeurToile = ["w300", "w"]

        this.totalFilm = 8;
    }

    requeteDernierFIlm(){

        let requete = new XMLHttpRequest();

        requete.addEventListener("loadend", this.retourRequeteDernierFilm.bind(this));

        //requete.open("GET", "https://api.themoviedb.org/3/movie/now_playing?api_key=510e2a21635e1c3a06e3e26ae78de966&language=fr-CA&page=1");
        requete.open("GET", this.baseURL + "/movie/now_playing?api_key=" + this.APIkey + "&language=" + this.lang + "&page=1");

        requete.send();

    }


    retourRequeteDernierFilm(e){
        console.log("Retour dernier Film");

        let target = e.currentTarget;
        let data;

        console.log(data);

        data = JSON.parse(target.responseText).results;

        //console.log(data);

        this.afficherDernierFilm(data);
    }


    afficherDernierFilm(data){
        for (let i = 0; i < data.length; i++) {

            let unArticle = document.querySelector(".template>article.film").cloneNode(true);

            unArticle.querySelector("h2").innerHTML = data[i].title;

            unArticle.querySelector(".description").innerHTML = data[i].overview || "Pas de description";

            let src = this.imgPath + "w342" + data[i].poster_path;
            let uneImage = unArticle.querySelector("img");

            uneImage.setAttribute("src", src);
            uneImage.setAttribute("alt", data[i].title);

            document.querySelector(".liste-films").appendChild(unArticle);

            unArticle.querySelector("a").setAttribute("href", "fiche-film.html?id=" + data[i].id);

        }
    }



    requeteInfoFIlm(movieId){

        let requete = new XMLHttpRequest();

        requete.addEventListener("loadend", this.retourRequeteInfoFilm.bind(this));

        //requete.open("GET", "https://api.themoviedb.org/3/movie/{movie_id}?api_key=<510e2a21635e1c3a06e3e26ae78de966>&language=en-US");

        requete.open("GET", this.baseURL + "/movie/" + movieId + "?api_key=" + this.APIkey + "&language=" + this.lang);

        requete.send();

    }


    retourRequeteInfoFilm(e){
        console.log("Retour dernier Film");

        let target = e.currentTarget;
        let data;

        //console.log(target.responseText);

        data = JSON.parse(target.responseText);

        console.log(data);

        this.afficherInfoFilm(data);
    }


    afficherInfoFilm(data){

        document.querySelector("h1").innerHTML = data.title;

        //document.querySelector("p.revenu").innerHTML = data.revenu;

        document.querySelector(".description").innerHTML = data.overview || "Pas de description";

        let src = this.imgPath + "w1280" + data.backdrop_path;
        let uneImage = document.querySelector(".affiche");

        uneImage.setAttribute("src", src);
        uneImage.setAttribute("alt", data.title);

        this.requeteActeur(data.id);

    }

    requeteActeur(movieId){
        //
    }

    retourRequeteActeur(e){

    }

    afficheActeur(data){
        //for (let i = 0; i < data.length; i++) {

        //    let unArticle = document.querySelector(".template>article.film").cloneNode(true);

        //    unArticle.querySelector("h2").innerHTML = data[i].title;

        //    unArticle.querySelector(".description").innerHTML = data[i].overview || "Pas de description";

        //    let src = this.imgPath + "w342" + data[i].poster_path;
        //    let uneImage = unArticle.querySelector("img");

        //    uneImage.setAttribute("src", src);
        //    uneImage.setAttribute("alt", data[i].title);

        //    document.querySelector(".liste-films").appendChild(unArticle);
        // e("href", "fiche-film.html?id=" + data[i].id);

        //}
    }

}
