// Async Await
// - this really elegant simple being abel to essentially store the fulfilled promises value immediately into a variable without having to mess with callback functions now.

const getPosition = function (name) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// try catch for most of API calls.
const whereamI = async function (name) {
  try {
    // handling errors
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    const resGo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGo.ok) {
      throw new Error("Ajay Dangol has sent off an error message for you");
    }
    const dataGeo = await resGo.json();
    // will stop decode execution at this point of this function until the promise is fullfilled. Until the data has been fetched in this case.
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    if (!res.ok)
      throw new Error("Problem getting location data sssssssssssssss");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};
whereamI("nepal");

//returning value from async functions
const getCountryData = async function (name) {
  try {
    const countryname = await fetch(
      `https://restcountries.com/v3.1/name/${name}`
    );
    const samename = await countryname.json();
    return `third: ${samename}`;
  } catch (err) {
    throw err;
  }
};
console.log("first");
getCountryData("Nepal")
  .then((res) => console.log(res))
  .catch((err) => console.log(`AAYYYYYYY::: ${err.message}`))
  .finally(() => {
    console.log("third");
  });

// handling the promises with asysnc and await.
(async function () {
  try {
    const city = await getCountryData("nepal");
    console.log(`2: ${city}`);
  } catch (err) {
    console.log(err);
  }
  console.log("third");
})();

async function testCountry(name) {
  try {
    const countryname = await getCountryData("nepal");
    const samename = await countryname.json();
    return `third: ${samename}`;
  } catch (err) {
    throw err;
  }
}

// for async function, we always need to wrap with try and catch statements
const get3countries = async function (c1, c2, c3) {
  try {
    // await
    //Promise.all() here function takes in an array of promies, and it will return a new promise, which will then runn all the promises in the array at the same time.
    // If one promises rejects, then it is enough for the entire thing to reject as well.
    const data = Promise.all([]);
  } catch (err) {
    console.log(err);
  }
};

const newData = new Promise(function (resolve, reject) {
  console.log(setTimeout(resolve, 500, "Rojit"));
});

const oldData = new Promise(function (resolve, reject) {
  console.log(setTimeout(resolve, 800, "Ajay"));
});

Promise.race([newData, oldData]).then((value) => console.log(value));
// Other Promise combinators: Race, ALLSETTLED and any
// Promise.allSettled();
// lt also takse array data but  even though one promises rejects it settles and returns all the promises equally

// Promises.any() is same like promise.race() with the difference that the rejected promises are ignored.


/*
Event Loop For promises

- Callback related to promises that we registered with the promises then method. Do actually no go to  into the callback queue.
Instead callback of the promises  have special queue for themselves which is so called microtask queue. So it has basically  priority  over the callback queue.
- So at the end of the event loop, so after the callback has been taken from the callback queue, the event loop will check if there are any callback queue in the microtask queue.
And if there are any of them, it will run all of them before it will run any more callback from the regular queue.
*/