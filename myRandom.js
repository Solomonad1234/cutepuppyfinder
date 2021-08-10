function get_random_api_image(){
  //url API
  url = "https://random.dog/woof.json";

  fetch(url)
  //Retreives Data From Site
  .then(function(response){
      return response.json();
  })
  .then (function(data){
      display_image(data.url);
  })
  .catch(function(error){
      console.log("Error" +error);
  });
}
function display_image(image_url){
  document.getElementById("image").src = image_url
}