const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;

    if(name === "" || email === "" || destination === "" || date === ""){
        alert("Please fill all details properly!");
        return;
    }

    let price = 0;

    if(destination === "Vasota") price = 2000;
    else if(destination === "Ajanta Caves") price = 2500;
    else if(destination === "Lonavala") price = 1800;
    else if(destination === "Malvan") price = 3500;
    else if(destination === "Kalsubai") price = 1500;

    alert(
        "Registration Successful 🎉\n\n" +
        "Name: " + name +
        "\nDestination: " + destination +
        "\nTravel Date: " + date +
        "\nTotal Cost: ₹" + price
    );

    form.reset();
});
