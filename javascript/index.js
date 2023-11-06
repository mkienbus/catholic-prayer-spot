function liturgicalClick(){
  const tbody = document.getElementById("tbody");
  console.log("clicked");
  fetch("http://calapi.inadiutorium.cz/api/v0/en/calendars/default/today")
    .then(response => response.json())
    .then(obj => (tbody.innerHTML += 
      `<tr>
        <td>${obj.date}</td>
        <td>${obj.season}</td>
        <td>${obj.season_week}</td>
        <td>${obj.celebrations[0].title}</td>
      </tr>`));
   document.getElementById("liturgicalButton").onclick=null;
}