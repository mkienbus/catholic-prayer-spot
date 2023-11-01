// const liturgicalButton = document.getElementById("liturgicalButton");
const tbody = document.getElementById("tbody");

async function liturgicalClick(){
  const response = await fetch("http://calapi.inadiutorium.cz/api/v0/en/calendars/default/today");
  const data = await response.json();
  console.log(data);
  console.log(data.date);
  console.log(data.season);
  console.log(data.season_week);
  console.log(data.celebrations[0].title);
  tbody.innerHTML += `<tr>
        <td>${data.date}</td>
        <td>${data.season}</td>
        <td>${data.season_week}</td>
        <td>${data.celebrations[0].title}</td>
    </tr>`;
}