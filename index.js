function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
}

function leashDog(dogName, dogBreed) {
  console.log(`put leash on ${dogName}`);
}

function walkToPark(dogName, dogBreed) {
    console.log(`walk ${dogName} to park` );
}

function throwFrisbee(dogName, dogBreed) {
    console.log(`throw frisbee to ${dogName}`);
}

function walkHome(dogName, dogBreed) {
    console.log(`Walk ${dogName} back home`);
}

function unleashDog(dogName, dogBreed) {
    console.log(`take leash off ${dogName}`);
}

 const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

 function exerciseDog(dogName, dogBreed) {
   return routine.map(fn => fn(dogName, dogBreed))
 }
