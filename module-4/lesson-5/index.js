"use strict";


movies.splice(50);


// ============================= NORMALIZE ALL MOVIES =========================//

let allMovies = movies.map((item) => {
    return {
        id: item.imdbId,
        year: item.year,
        category: item.categories,
        rating: item.imdbRating,
        lang: item.language,
        link: `https://youtube.com/embed/${
            item.youtubeId
        }`,
        title: item.title,
        summary: item.summary,
        maxImg: item.bigThumbanil,
        minImg: item.smallThumbnail,
        time: `${
            Math.trunc(item.runtime / 60)
        }h ${
            item.runtime % 60
        }m`
    };
});

console.log(allMovies);


// ============================= NORMALIZE ALL MOVIES END =========================//


function renderMovies(movies) {

    if (movies && movies.length) {


        movies.forEach(item => {
            const card = createElement('div', 'card', `
       <div class="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light">
                    <img
                      src="${
                item.minImg
            }"
                      class="img-fluid w-100" />
                    <a href="#!">
                      <div
                        class="mask"
                      ></div>
                    </a>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">${
                item.title
            }</h5>
                    <ul class="card-text">
                     <li><strong> Language : </strong> ${
                item.lang
            }</li>
                       <li><strong>Category: </strong> ${
                item.category
            }</li>
                       <li><strong>Year: </strong> ${
                item.year
            }</li>
                       <li><strong>Rating: </strong> ${
                item.rating
            }</li>
                       <li><strong>Runtime: </strong> ${
                item.time
            }</li>
                       <li><strong>YouTube: </strong> <a href="${
                item.link
            }" target="_blank">Watch</a> </li>
                    </ul>
                    <div class="d-flex gap-4"> 
                         <a href="#!" class="btn btn-primary">Read more</a>
                         <a href="#!" class="btn btn-warning">Add bookmark</a>
                    </div>
                  </div>
    `);

            $(".wrapper").append(card);
        });


    } else {
        $(".wrapper").innerHTML = "<h1 class='text-center text-danger'> NOT FOUND </h1>";

    }


}

renderMovies(allMovies);


// ----------------------------- RENDER MOVIES END -----------------------------


// ----------------------------- DYNAMIC CATEGORY -----------------------------


function dynamicCategory(data) {

    const categories = [];

    if (data) {
        data.forEach((item) => {
            item.category.forEach(el => {
                if (! categories.includes(el)) {
                    categories.push(el);
                }
            })
        })
    }


    if (categories.length) {
        categories.forEach((item) => {
            const option = createElement('option', 'list', item);
            $('#category').append(option);
        })
    }
}


dynamicCategory(allMovies);

// ----------------------------- DYNAMIC CATEGORY -----------------------------


const findFilms = (filmtitle) => {

    return allMovies.filter((item) => {
        return item.title.includes(filmtitle);

    })

}


$('#global-search').addEventListener('keyup', (e) => {

    $(".wrapper").innerHTML = "";


    const result = allMovies.filter((item) => {
        return item.title.includes(e.target.value);
    })


    if (result.length) {
        renderMovies(result)
    } else {
        $(".wrapper").innerHTML = `<h1 class='text-center text-warning'> SEARCH RESULT ${
            result.length
        } </h1>`
    }

})
