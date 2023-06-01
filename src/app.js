// save yargs to variable using require keyword
const yargs = require("yargs");

// require objects we need from utils folder
// by default node looks for index.js, so we don't need to specify
const { Movie, movieArr} = require("./utils")
// movie2 

// example of yargs structure
// console.log(yargs.argv);

// functinality to check user input and save data
// pass in YargsObj as permameter 
const app = (yargsObj) => {
    if(yargsObj.add) {
        // use new Movie class to collect data
        const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.genre, yargsObj.rating);
        // use add function to save data to array
        movie.add();
        console.log(movieArr);
    } else if(yargsObj.addMany) {
        const movie1 = new Movie(yargsObj.title1, yargsObj.actor1, yargsObj.genre1, yargsObj.rating1)
        const movie2 = new Movie(yargsObj.title2, yargsObj.actor2, yargsObj.genre2, yargsObj.rating2)
        movie1.add();
        movie2.add();
        console.log(movieArr);
    } else {
        console.log("Incorrect Command")
    }
};

// call app function and pass in terminal input as arguements
app(yargs.argv);
