document.querySelector('.show-insult').addEventListener('click', function() {
    fetch('/insult')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            document.querySelector(".pinsult").innerText = data.complement;
        })
        .catch(function(err) {
            console.error(err);
        });
});
document.querySelector('.show-complement').addEventListener('click', function() {
    fetch('/complement')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            document.querySelector(".pcomplement").innerText = data.complement;
        })
        .catch(function(err) {
            console.error(err);
        });
});