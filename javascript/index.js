// const liturgicalButton = document.getElementById("liturgicalButton");

async function liturgicalClick(){
  const response = await fetch("http://calapi.inadiutorium.cz/api/v0/en/calendars/default/today");
  const data = await response.json();
  console.log(data);
}