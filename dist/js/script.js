document.addEventListener("DOMContentLoaded", function () {

    let connexion = new MovieDB();

    connexion.requeteDernierFIlm()

})

class MovieDB{
    constructor() {
        console.log("Construteur");

        this.APIkey = "510e2a21635e1c3a06e3e26ae78de966";

        this.lang = "fr-CA";

        this.baseURL = "https://api.themoviedb.org/3";

        this.imgPath = "https://image.tmdb.org/t/p/";

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

        //console.log(target.responseText);

        data = JSON.parse(target.responseText).results;

        console.log(data);

        this.afficherDernierFilm(data);
    }

    afficherDernierFilm(data){
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].title);
        }
    }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGxldCBjb25uZXhpb24gPSBuZXcgTW92aWVEQigpO1xyXG5cclxuICAgIGNvbm5leGlvbi5yZXF1ZXRlRGVybmllckZJbG0oKVxyXG5cclxufSlcclxuXHJcbmNsYXNzIE1vdmllREJ7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnN0cnV0ZXVyXCIpO1xyXG5cclxuICAgICAgICB0aGlzLkFQSWtleSA9IFwiNTEwZTJhMjE2MzVlMWMzYTA2ZTNlMjZhZTc4ZGU5NjZcIjtcclxuXHJcbiAgICAgICAgdGhpcy5sYW5nID0gXCJmci1DQVwiO1xyXG5cclxuICAgICAgICB0aGlzLmJhc2VVUkwgPSBcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzNcIjtcclxuXHJcbiAgICAgICAgdGhpcy5pbWdQYXRoID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9cIjtcclxuXHJcbiAgICAgICAgdGhpcy50b3RhbEZpbG0gPSA4O1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVldGVEZXJuaWVyRklsbSgpe1xyXG5cclxuICAgICAgICBsZXQgcmVxdWV0ZSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICByZXF1ZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZW5kXCIsIHRoaXMucmV0b3VyUmVxdWV0ZURlcm5pZXJGaWxtLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAvL3JlcXVldGUub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvbm93X3BsYXlpbmc/YXBpX2tleT01MTBlMmEyMTYzNWUxYzNhMDZlM2UyNmFlNzhkZTk2NiZsYW5ndWFnZT1mci1DQSZwYWdlPTFcIik7XHJcbiAgICAgICAgcmVxdWV0ZS5vcGVuKFwiR0VUXCIsIHRoaXMuYmFzZVVSTCArIFwiL21vdmllL25vd19wbGF5aW5nP2FwaV9rZXk9XCIgKyB0aGlzLkFQSWtleSArIFwiJmxhbmd1YWdlPVwiICsgdGhpcy5sYW5nICsgXCImcGFnZT0xXCIpO1xyXG5cclxuICAgICAgICByZXF1ZXRlLnNlbmQoKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldG91clJlcXVldGVEZXJuaWVyRmlsbShlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJldG91ciBkZXJuaWVyIEZpbG1cIik7XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgbGV0IGRhdGE7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGFyZ2V0LnJlc3BvbnNlVGV4dCk7XHJcblxyXG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHRhcmdldC5yZXNwb25zZVRleHQpLnJlc3VsdHM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICB0aGlzLmFmZmljaGVyRGVybmllckZpbG0oZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWZmaWNoZXJEZXJuaWVyRmlsbShkYXRhKXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVtpXS50aXRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sImZpbGUiOiJzY3JpcHQuanMifQ==
