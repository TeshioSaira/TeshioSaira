async function load_header_footer() {
    const footer = await fetch("footer.html");
    document.getElementById("footer").innerHTML = await footer.text();
}

window.addEventListener("load", load_header_footer);