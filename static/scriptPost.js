document.getElementById("contact").addEventListener("submit", function (e) {
        e.preventDefault();
        let request = new XMLHttpRequest();

        request.onload = () => {
            if (request.status >= 200 && request.status < 300) {
                alert("success");
            }
        };

        request.open('POST', 'https://n213m3o6yd.execute-api.us-east-1.amazonaws.com/v1/addUser');
        request.setRequestHeader("Access-Control-Allow-Origin", "*");

        const json = JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value
        });

        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send(json);

        document.getElementById("contact").reset();

    }
);



