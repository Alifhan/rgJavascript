function findMovies(favoriteGenre) {
    const movies = [
        {
            id: 1,
            name: 'Avengers end game',
            genre: 'Action',
            soldTicket: 149,
            capacity: 150
        },
        {
            id: 2,
            name: 'La la Land',
            genre: 'Romance',
            soldTicket: 20,
            capacity: 75
        },
        {
            id: 3,
            name: 'Beauty and the Beast',
            genre: 'Romance',
            soldTicket: 50,
            capacity: 50
        },
        {
            id: 4,
            name: 'Superman vs Batman',
            genre: 'Action',
            soldTicket: 150,
            capacity: 250
        },
        {
            id: 5,
            name: 'Transformer',
            genre: 'Action',
            soldTicket: 90,
            capacity: 90
        },
        {
            id: 6,
            name: '5 feet apart',
            genre: 'Romance',
            soldTicket: 25,
            capacity: 45
        },
        {
            id: 7,
            name: 'Hamilton',
            genre: 'Musical',
            soldTicket: 295,
            capacity: 300
        },
        {
            id: 8,
            name: 'Dear Evan Hansen',
            genre: 'Musical',
            soldTicket: 150,
            capacity: 200
        },
        {
            id: 9,
            name: 'Conjuring',
            genre: 'Horror',
            soldTicket: 30,
            capacity: 100
        },
        {
            id: 10,
            name: 'Annabelle',
            genre: 'Horror',
            soldTicket: 10,
            capacity: 30
        },
        {
            id: 11,
            name: 'Fast and Furios',
            genre: 'Action',
            soldTicket: 25,
            capacity: 40
        },
        {
            id: 12,
            name: 'Romeo and Julet',
            genre: 'Romance',
            soldTicket: 15,
            capacity: 15
        },
        {
            id: 13,
            name: 'Wicked',
            genre: 'Musical',
            soldTicket: 75,
            capacity: 75
        }
    ]
    var outputfavoriteGenre = [];

  favoriteGenre.forEach((data) => {
    let inputgenre = data;
    movies.forEach((movie) => {
      if (inputgenre == movie.genre) {
        outputfavoriteGenre.push(movie);
      }
    });
  });

  return outputfavoriteGenre;
}
     


function findTicketAvailability(movie, user) {
    // untuk melihat apakah tiketnya kurang atau tidak
  let statustiket = false;
  for (let j = 0; j < user.favoriteGenre.length; j++) {
    let usergenrefav = user.favoriteGenre[j];
    if (Array.isArray(movie)) {
      for (let i = 0; i < movie.length; i++) {
        let TiketAvailabilitynow = movie[i].capacity - movie[i].soldTicket;

        if (movie[i].genre === usergenrefav && TiketAvailabilitynow >= user.ticket) {
          statustiket = true;
        } else if (movie[i].genre === usergenrefav && TiketAvailabilitynow < user.ticket) {
          statustiket = false;
        }
      }
    } else {
      let TiketAvailabilitynow = movie.capacity - movie.soldTicket;
      if (movie.genre === usergenrefav && TiketAvailabilitynow >= user.ticket) {
        statustiket = true;
      } else if (movie.genre === usergenrefav && TiketAvailabilitynow < user.ticket) {
        statustiket = false;
      }
    }
  }
  return statustiket; // TODO: replace this
}

function findRecommendation(user) {
    // mencari rekomendasi
  var recommendation = [];
  let userfavgenre = user.favoriteGenre;
  let showmoviebygenre = findMovies(userfavgenre);
  for (let j = 0; j < userfavgenre.length; j++) {
    let selectgenre = userfavgenre[j];
    for (let i = 0; i < showmoviebygenre.length; i++) {
      let checkAvail = showmoviebygenre[i].capacity - showmoviebygenre[i].soldTicket;
      if (showmoviebygenre[i].genre === selectgenre && checkAvail >= user.ticket) {
        recommendation.push(showmoviebygenre[i]);
      } else if (showmoviebygenre[i].genre === selectgenre && checkAvail < user.ticket) {
        continue;
      }
    }
  }
  return recommendation;
}

function generateRecommendation(user) {
    // Menjumlahkan total tiket
  let rekomenFilm = findRecommendation(user);
  if (rekomenFilm.length === 0) {
    return `Tidak ada film yang sesuai kriteria`;
  } else {
    for (let index = 0; index < rekomenFilm.length; index++) {
      delete rekomenFilm[index].capacity;
      delete rekomenFilm[index].soldTicket;
      if (rekomenFilm[index].genre === "Musical") {
        let totalBayar = user.ticket * 80000;

        rekomenFilm[index].totalPrice = totalBayar;
      } else if (rekomenFilm[index].genre === "Horror") {
        let totalBayar = user.ticket * 75000;

        rekomenFilm[index].totalPrice = totalBayar;
      } else if (rekomenFilm[index].genre === "Action") {
        let totalBayar = user.ticket * 100000;

        rekomenFilm[index].totalPrice = totalBayar;
      } else if (rekomenFilm[index].genre === "Romance") {
        let totalBayar = user.ticket * 40000;

        rekomenFilm[index].totalPrice = totalBayar;
      }
    }
  }

  return rekomenFilm;
}

let user1 = {
    name: 'Aditira',
    ticket: 1,
    favoriteGenre: ['Action', 'Musical', 'Romance', 'Horror']
}

let user2 = {
    name: 'Eddy',
    ticket: 20,
    favoriteGenre: ['Musical', 'Romance']
}

let user3 = {
    name: 'Afis',
    ticket: 1,
    favoriteGenre: ['Sci Fi', 'Documentary', 'Thriller']
}

console.log(generateRecommendation(user1))
console.log(generateRecommendation(user2))
console.log(generateRecommendation(user3))

module.exports = {
    findMovies,
    findTicketAvailability,
    findRecommendation,
    generateRecommendation
}
