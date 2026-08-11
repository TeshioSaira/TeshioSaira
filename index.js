async function loadFollowers() {
    const response = await fetch("https://script.google.com/macros/s/AKfycbyJM3NpQlMtOURCN_cf6b00yOlH8A0ghGnUjoaPxEgdwEfXCA6YQjLjWQxgRZ-EJQo58A/exec");
    const data = await response.json();
    console.log(data);
    document.getElementById("index_subscriber_youtube").textContent = data["YouTube"];
}

window.addEventListener("load", function() {
   loadFollowers();
});