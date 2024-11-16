document.getElementById('generateFact').addEventListener('click', function() {
    const facts = [
        "You are 19 years old, full of youthful energy!",
        "You love painting, showcasing your artistic side.",
        "Hill stations are your favorite, indicating a love for nature.",
        "You have a knack for creativity and expression.",
        "Your appreciation for scenic landscapes is inspiring."
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').textContent = facts[randomIndex];
});
