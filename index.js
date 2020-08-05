function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`
}

function leashDog(dogName, dogBreed) {
  console.log(`put leash on ${dogName}`);
  return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(dogName, dogBreed) {
    console.log(`walk ${dogName} to park` );
    return `Walk to the park with ${dogName} the ${dogBreed}`
}

function throwFrisbee(dogName, dogBreed) {
    console.log(`throw frisbee to ${dogName}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

function walkHome(dogName, dogBreed) {
    console.log(`Walk ${dogName} back home`);
    return `Walk home with ${dogName} the ${dogBreed}`
}

function unleashDog(dogName, dogBreed) {
    console.log(`take leash off ${dogName}`);
    return `Unleash ${dogName} the ${dogBreed}`
}

 const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

 function exerciseDog(dogName, dogBreed) {
   return routine.map(fn => fn(dogName, dogBreed))
 }
