document.getElementById("colorCircle").addEventListener("click", function () {
    this.setAttribute("fill", "#" + Math.floor(Math.random() * 16777215).toString(16));
});