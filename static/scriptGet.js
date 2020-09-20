const app = document.getElementById('root');
const container = document.createElement('div');

container.setAttribute('class', 'container');
app.appendChild(container);

let request = new XMLHttpRequest();
request.open('GET', 'https://n213m3o6yd.execute-api.us-east-1.amazonaws.com/v1/getUsers', true);
request.setRequestHeader("Access-Control-Allow-Origin", "*");


request.onload = function () {
    const data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.Items.forEach(user => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = `Full Name: ${user.Name}`;

            const p1 = document.createElement('p');
            p1.textContent = `Email: ${user.Email} `;
            const p2 = document.createElement('p');
            p2.textContent = `Phone number:  ${user.Phone}`;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p1);
            card.appendChild(p2);
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
};

request.send();
