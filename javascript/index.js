// const liturgicalButton = document.getElementById("liturgicalButton");
const tbody = document.getElementById("tbody");

async function liturgicalClick(){
  document.getElementById("liturgicalButton").onclick=null;
  const response = await fetch("http://calapi.inadiutorium.cz/api/v0/en/calendars/default/today");
  const data = await response.json();
  tbody.innerHTML += `<tr>
        <td>${data.date}</td>
        <td>${data.season}</td>
        <td>${data.season_week}</td>
        <td>${data.celebrations[0].title}</td>
    </tr>`;
}