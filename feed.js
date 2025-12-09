const feed = document.getElementById("feed");


const posts = [
{ user: "Alex", text: "Good morning!" },
{ user: "John", text: "Loving the weather today!" },
];


posts.forEach(p => {
feed.innerHTML += `
<div class='post-card'>
<h3>${p.user}</h3>
<p>${p.text}</p>
</div>`;
});