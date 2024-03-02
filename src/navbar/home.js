export default function Home() {

    const html = `
        <img src="./assets/img/header.svg">
        <div class="welcome">
            <h1>
                <span>The Best Ramen</span>
                <p>In The Town!</p>
            </h1>
            <p>
                Having a rough day? Soften it with our delicious meal.
            </p>

            <button>Reserve A Table</button>
        </div>
    `;

    content.classList.add('home');

    return html;
};