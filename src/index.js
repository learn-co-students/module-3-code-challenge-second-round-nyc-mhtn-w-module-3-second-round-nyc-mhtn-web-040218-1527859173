document.addEventListener('DOMContentLoaded', () => {
  // console.log('loaded');
  const theatreId = 1;
  const theatreURL = `https://evening-plateau-54365.herokuapp.com/theatres/${theatreId}`
  // const movieTitle = document.getElementById('movie-title')


  const movieCardsContainer = document.getElementById('ui-cards-showings')

  fetch(theatreURL)
  .then(res=>res.json())
  .then(json=>showMovies(json))


// console.log(movieTitle);

  function showMovies(theatreObj){
    console.log(theatreObj);
    let movies = theatreObj.showings
    movies.forEach(movie => {
      // debugger
      // console.log(movie);
    // let card = document.createElement('div')
    movieCardsContainer.innerHTML += `<div class="card">
      <div class="content">
        <div id='movie-title-${movie.id}' class="header">
          (Film Title)
        </div>
        <div id='movie-runtime-${movie.id}' class="meta">
          (Runtime) minutes
        </div>
        <div id="movie-description-${movie.id}" class="description">
          <span id="movie-showing${movie.id}" class="ui label">
            (Showtime)
          </span>

        </div>
      </div>
      <div class="extra content">
        <div id="ui-blue-button-${movie.id}" class="ui blue button">Buy Ticket</div>
      </div>
      </div>`
      // console.log(card);
      let movieTitle = document.getElementById(`movie-title-${movie.id}`)
      movieTitle.innerText = movie.film.title
      let movieRuntime = document.getElementById(`movie-runtime-${movie.id}`)
      movieRuntime.innerText = `${movie.film.runtime} minutes`
      let movieShowtime = document.getElementById(`movie-showing${movie.id}`)
      movieShowtime.innerText = movie.showtime
      let movieDescription = document.getElementById(`movie-description-${movie.id}`)
      // console.log(movie.capacity);
      // console.log(movie.tickets_sold);
      let difference = movie.capacity - movie.tickets_sold
      movieDescription.append(`${difference} remaining tickets`)
      let buyButton = document.getElementById(`ui-blue-button-${movie.id}`)
      // console.log(buyButton);
      // movieDescription.innerText +=
      })
      movieCardsContainer.addEventListener('click', (e) => {
        debugger
        if (e.target.className.includes('moviebutton')){
          console.log(e);
          
        }
        console.log('click');
        // console.log(difference);
        // console.log(movie.film.title);
        fetch('https://evening-plateau-54365.herokuapp.com/tickets', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            Accepts: 'application/json'
          },
          body: JSON.stringify({
            showing_id: showing_id
          })
        })
      })

      // debugger

    }


    // console.log(movieCardsContainer);
  // let movieShowing = ''

















}) // << end of document event listener
