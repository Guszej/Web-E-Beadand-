document.addEventListener("DOMContentLoaded", function () {
    const draggables = document.querySelectorAll(".draggable");
    const dropzones = document.querySelectorAll(".dropzone");

    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", function (event) {
            event.dataTransfer.setData("text", event.target.id);
        });
    });

    dropzones.forEach(dropzone => {
        dropzone.addEventListener("dragover", function (event) {
            event.preventDefault();
        });

        dropzone.addEventListener("drop", function (event) {
            event.preventDefault();
            let data = event.dataTransfer.getData("text");
            let element = document.getElementById(data);

            let number = parseInt(element.textContent);
            let isEven = number % 2 === 0;
            let correctZone = isEven ? "even" : "odd";

            if (dropzone.id === correctZone) {
                dropzone.appendChild(element);
            }
        });
    });
});