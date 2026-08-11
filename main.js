async function load_header_footer() {
    const header = await fetch("header.html");
    document.getElementById("header").innerHTML = await header.text();
    const footer = await fetch("footer.html");
    document.getElementById("footer").innerHTML = await footer.text();
}

window.addEventListener("load", load_header_footer);