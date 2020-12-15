function calculate() {
  const a = document.getElementById('a').value
  const b = document.getElementById('b').value
  const h = document.getElementById('h').value

  const area = ((+a + +b) * (+h) / 2)
  console.log(area)

  if (isNaN(area)) {
    document.getElementById('output').innerHTML = 'Error please only input positive intigers'}
  else {
    document.getElementById('output').innerHTML = area}
}