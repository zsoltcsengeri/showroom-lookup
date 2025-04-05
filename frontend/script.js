const $form = document.querySelector("#searchForm");
const $cityInput = document.querySelector("#cityInput");
const $resultsList = document.querySelector("#results");

$form.addEventListener("submit", (event)=>{
  event.preventDefault();
  lookupShowrooms();
});

$cityInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    lookupShowrooms();
  }
});

function lookupShowrooms() {
  const city = $cityInput.value;
  $resultsList.innerHTML = "";

  fetch(`http://127.0.0.1:8000/showrooms?city=${city}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        $resultsList.innerHTML = "<li>No showrooms found.</li>";
      } else {
        data.forEach((showroom) => {
          const li = document.createElement("li");
          li.innerHTML = `
            <strong>${showroom.name}</strong> (${showroom.type})<br>
            <em>${showroom.address}</em><br>
            <u>Opening hours:</u><br>
            Mon–Fri: ${showroom.open_hours.mon_fri}<br>
            Sat: ${showroom.open_hours.sat}<br>
            Sun: ${showroom.open_hours.sun}<br>
            <u>Contact:</u> ${showroom.contact_email}
          `;

          $resultsList.appendChild(li);
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      $resultsList.innerHTML = "<li>Error fetching data.</li>";
    });
}
