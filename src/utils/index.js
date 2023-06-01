// empty array to store data
const movieArr = [];
// const movie2 = [];

// create Movie class for title and actor object
// 'this' keyword refers to the object it belongs to
class Movie {
    constructor(title, actor, genre, rating = "Not specified") {
        this.title = title;
        this.actor = actor;
        this.genre = genre;
        this.rating = rating;
    }
    // small function to add cli input to movieArr
    add() {
        movieArr.push(this)
    }
    // addMany() {
    //     movie2.push(this)
    // }
};

// export objects to use elsewhere in app
module.exports = {Movie, movieArr};
// movie2