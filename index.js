document.addEventListener("click", ()  => {
 let element = document.getElementById("the-excuse");
 element.innerHTML = generateExcuse();
 console.log(generateExcuse());
});

let pronoun = ["A", "The", "My"];
let subject = ["jogger", "raccon", "dog", "driver", "comedian", "pincone"];
let action = ["took", "threw", "yelled at", "stole", "bit"];
let possetion = ["my homework", "my toe", "my car", "my shoe"];
let where = ["on the street", "in my house", "in my driveway"];

let generateExcuse = () => {
  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let possIndx = Math.floor(Math.random() * possetion.length);
  let wherIndx = Math.floor(Math.random() * where.length);
  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actIndx] +
    " " +
    possetion[possIndx] +
    " " +
    where[wherIndx]
  );
};
