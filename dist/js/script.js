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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGxldCBjb25uZXhpb24gPSBuZXcgTW92aWVEQigpO1xyXG5cclxuICAgIGlmKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnNlYXJjaChcImZpY2hlLWZpbG0uaHRtbFwiKSA+IDApXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9ICggbmV3IFVSTChkb2N1bWVudC5sb2NhdGlvbikgKS5zZWFyY2hQYXJhbXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgICAgICAgY29ubmV4aW9uLnJlcXVldGVJbmZvRklsbShwYXJhbXMuZ2V0KFwiaWRcIikpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29ubmV4aW9uLnJlcXVldGVEZXJuaWVyRklsbSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0pXHJcblxyXG5jbGFzcyBNb3ZpZURCe1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25zdHJ1dGV1clwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5BUElrZXkgPSBcIjUxMGUyYTIxNjM1ZTFjM2EwNmUzZTI2YWU3OGRlOTY2XCI7XHJcblxyXG4gICAgICAgIHRoaXMubGFuZyA9IFwiZnItQ0FcIjtcclxuXHJcbiAgICAgICAgdGhpcy5iYXNlVVJMID0gXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zXCI7XHJcblxyXG4gICAgICAgIHRoaXMuaW1nUGF0aCA9IFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvXCI7XHJcblxyXG4gICAgICAgIC8vdGhpcy5sYXJnZXVyQWZmaWNoZSA9IFtcInc5MlwiLCBcIncxNTRcIiwgXCJ3MTg1XCIsIFwidzM0MlwiLCBcInc1MDBcIiwgXCJ3NzgwXCJdO1xyXG5cclxuICAgICAgICAvL3RoaXMubGFyZ2V1clRldGVBZmZpY2hlID0gW1widzQ1XCIsIFwidzE4NVwiXTtcclxuXHJcbiAgICAgICAgLy90aGlzLmxhcmdldXJUb2lsZSA9IFtcInczMDBcIiwgXCJ3XCJdXHJcblxyXG4gICAgICAgIHRoaXMudG90YWxGaWxtID0gODtcclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXRlRGVybmllckZJbG0oKXtcclxuXHJcbiAgICAgICAgbGV0IHJlcXVldGUgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgcmVxdWV0ZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVuZFwiLCB0aGlzLnJldG91clJlcXVldGVEZXJuaWVyRmlsbS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgLy9yZXF1ZXRlLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL25vd19wbGF5aW5nP2FwaV9rZXk9NTEwZTJhMjE2MzVlMWMzYTA2ZTNlMjZhZTc4ZGU5NjYmbGFuZ3VhZ2U9ZnItQ0EmcGFnZT0xXCIpO1xyXG4gICAgICAgIHJlcXVldGUub3BlbihcIkdFVFwiLCB0aGlzLmJhc2VVUkwgKyBcIi9tb3ZpZS9ub3dfcGxheWluZz9hcGlfa2V5PVwiICsgdGhpcy5BUElrZXkgKyBcIiZsYW5ndWFnZT1cIiArIHRoaXMubGFuZyArIFwiJnBhZ2U9MVwiKTtcclxuXHJcbiAgICAgICAgcmVxdWV0ZS5zZW5kKCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXRvdXJSZXF1ZXRlRGVybmllckZpbG0oZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXRvdXIgZGVybmllciBGaWxtXCIpO1xyXG5cclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGxldCBkYXRhO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UodGFyZ2V0LnJlc3BvbnNlVGV4dCkucmVzdWx0cztcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZmZpY2hlckRlcm5pZXJGaWxtKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhZmZpY2hlckRlcm5pZXJGaWxtKGRhdGEpe1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHVuQXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGxhdGU+YXJ0aWNsZS5maWxtXCIpLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHVuQXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiaDJcIikuaW5uZXJIVE1MID0gZGF0YVtpXS50aXRsZTtcclxuXHJcbiAgICAgICAgICAgIHVuQXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpLmlubmVySFRNTCA9IGRhdGFbaV0ub3ZlcnZpZXcgfHwgXCJQYXMgZGUgZGVzY3JpcHRpb25cIjtcclxuXHJcbiAgICAgICAgICAgIGxldCBzcmMgPSB0aGlzLmltZ1BhdGggKyBcInczNDJcIiArIGRhdGFbaV0ucG9zdGVyX3BhdGg7XHJcbiAgICAgICAgICAgIGxldCB1bmVJbWFnZSA9IHVuQXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xyXG5cclxuICAgICAgICAgICAgdW5lSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIHNyYyk7XHJcbiAgICAgICAgICAgIHVuZUltYWdlLnNldEF0dHJpYnV0ZShcImFsdFwiLCBkYXRhW2ldLnRpdGxlKTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdGUtZmlsbXNcIikuYXBwZW5kQ2hpbGQodW5BcnRpY2xlKTtcclxuXHJcbiAgICAgICAgICAgIHVuQXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiYVwiKS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiZmljaGUtZmlsbS5odG1sP2lkPVwiICsgZGF0YVtpXS5pZCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJlcXVldGVJbmZvRklsbShtb3ZpZUlkKXtcclxuXHJcbiAgICAgICAgbGV0IHJlcXVldGUgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgcmVxdWV0ZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVuZFwiLCB0aGlzLnJldG91clJlcXVldGVJbmZvRmlsbS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgLy9yZXF1ZXRlLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL3ttb3ZpZV9pZH0/YXBpX2tleT08NTEwZTJhMjE2MzVlMWMzYTA2ZTNlMjZhZTc4ZGU5NjY+Jmxhbmd1YWdlPWVuLVVTXCIpO1xyXG5cclxuICAgICAgICByZXF1ZXRlLm9wZW4oXCJHRVRcIiwgdGhpcy5iYXNlVVJMICsgXCIvbW92aWUvXCIgKyBtb3ZpZUlkICsgXCI/YXBpX2tleT1cIiArIHRoaXMuQVBJa2V5ICsgXCImbGFuZ3VhZ2U9XCIgKyB0aGlzLmxhbmcpO1xyXG5cclxuICAgICAgICByZXF1ZXRlLnNlbmQoKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldG91clJlcXVldGVJbmZvRmlsbShlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJldG91ciBkZXJuaWVyIEZpbG1cIik7XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgbGV0IGRhdGE7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGFyZ2V0LnJlc3BvbnNlVGV4dCk7XHJcblxyXG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHRhcmdldC5yZXNwb25zZVRleHQpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZmZpY2hlckluZm9GaWxtKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhZmZpY2hlckluZm9GaWxtKGRhdGEpe1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIikuaW5uZXJIVE1MID0gZGF0YS50aXRsZTtcclxuXHJcbiAgICAgICAgLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwicC5yZXZlbnVcIikuaW5uZXJIVE1MID0gZGF0YS5yZXZlbnU7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIikuaW5uZXJIVE1MID0gZGF0YS5vdmVydmlldyB8fCBcIlBhcyBkZSBkZXNjcmlwdGlvblwiO1xyXG5cclxuICAgICAgICBsZXQgc3JjID0gdGhpcy5pbWdQYXRoICsgXCJ3MTI4MFwiICsgZGF0YS5iYWNrZHJvcF9wYXRoO1xyXG4gICAgICAgIGxldCB1bmVJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWZmaWNoZVwiKTtcclxuXHJcbiAgICAgICAgdW5lSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIHNyYyk7XHJcbiAgICAgICAgdW5lSW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsIGRhdGEudGl0bGUpO1xyXG5cclxuICAgICAgICB0aGlzLnJlcXVldGVBY3RldXIoZGF0YS5pZCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlcXVldGVBY3RldXIobW92aWVJZCl7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuXHJcbiAgICByZXRvdXJSZXF1ZXRlQWN0ZXVyKGUpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZmZpY2hlQWN0ZXVyKGRhdGEpe1xyXG4gICAgICAgIC8vZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgIC8vICAgIGxldCB1bkFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBsYXRlPmFydGljbGUuZmlsbVwiKS5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vICAgIHVuQXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiaDJcIikuaW5uZXJIVE1MID0gZGF0YVtpXS50aXRsZTtcclxuXHJcbiAgICAgICAgLy8gICAgdW5BcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIikuaW5uZXJIVE1MID0gZGF0YVtpXS5vdmVydmlldyB8fCBcIlBhcyBkZSBkZXNjcmlwdGlvblwiO1xyXG5cclxuICAgICAgICAvLyAgICBsZXQgc3JjID0gdGhpcy5pbWdQYXRoICsgXCJ3MzQyXCIgKyBkYXRhW2ldLnBvc3Rlcl9wYXRoO1xyXG4gICAgICAgIC8vICAgIGxldCB1bmVJbWFnZSA9IHVuQXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xyXG5cclxuICAgICAgICAvLyAgICB1bmVJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc3JjKTtcclxuICAgICAgICAvLyAgICB1bmVJbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgZGF0YVtpXS50aXRsZSk7XHJcblxyXG4gICAgICAgIC8vICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdGUtZmlsbXNcIikuYXBwZW5kQ2hpbGQodW5BcnRpY2xlKTtcclxuICAgICAgICAvLyBlKFwiaHJlZlwiLCBcImZpY2hlLWZpbG0uaHRtbD9pZD1cIiArIGRhdGFbaV0uaWQpO1xyXG5cclxuICAgICAgICAvL31cclxuICAgIH1cclxuXHJcbn1cclxuIl0sImZpbGUiOiJzY3JpcHQuanMifQ==
