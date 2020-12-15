function calculate(){
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let h = document.getElementById("h").value;

  let area = ((+a + +b)*(+h)/2);
  console.log(area)

  if(isNaN(area)){
    document.getElementById("output").innerHTML = "Error please only input positive intigers"
  }
  else{
    document.getElementById("output").innerHTML = area
  }
  
  
}