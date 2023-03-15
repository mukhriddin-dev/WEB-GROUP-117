"use strict";

// {
//     "title": "Patton Oswalt: Annihilation",
//     "year": 2017,
//     "categories": ["Uncategorized"],
//     "imdbId": "tt7026230",
//     "imdbRating": 7.4,
//     "runtime": 66,
//     "language": "English",
//     "youtubeId": "4hZi5QaMBFc",
//     "summary": "Patton Oswald, despite a personal tragedy, produces his best standup yet. Focusing on the tribulations of the Trump era and life after the loss of a loved one, Patton Oswald continues his journey to contribute joy to the world.",
//     "smallThumbnail": "http://i3.ytimg.com/vi/4hZi5QaMBFc/hqdefault.jpg",
//     "bigThumbnail": "http://i3.ytimg.com/vi/4hZi5QaMBFc/maxresdefault.jpg"
// }

movies.splice(50);



// ============================= NORMALIZE ALL MOVIES =========================//

let allMovies = movies.map((item) => {
    return {
        id: item.imdbId,
        year: item.year,
        category: item.categories,
        rating: item.imdbRating,
        lang: item.language,
        link: `https://youtube.com/embed/${item.youtubeId}`,
        title: item.title,
        summary: item.summary,
        maxImg: item.bigThumbanil,
        minImg: item.smallThumbnail,
        time: `${Math.trunc(item.runtime/60)}h ${item.runtime%60}m`
    };
});

console.log(allMovies);


// ============================= NORMALIZE ALL MOVIES END =========================//


allMovies.forEach(item => {
    const card = createElement('div', 'card', `
       <div class="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light">
                    <img
                      src="${item.minImg}"
                      class="img-fluid w-100" />
                    <a href="#!">
                      <div
                        class="mask"
                      ></div>
                    </a>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Button</a>
                  </div>
    `);

    $(".wrapper").append(card);
});

