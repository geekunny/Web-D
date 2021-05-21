const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const doggos = document.querySelector(".dogos");

function add_doggo() {
    const promise = fetch(DOG_URL);
    promise
        .then(function(Response) {
            const processingPromise = Response.json();
            return processingPromise;
        })
        .then(function(processedResponse) {
            const img = document.createElement("img");
            img.className = "image";
            img.src = processedResponse.message;
            img.alt = "Cute dogo";
            doggos.appendChild(img);
        });
}
document.querySelector(".butt").addEventListener("click", add_doggo);