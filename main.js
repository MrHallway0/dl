function onClick() {
    var query = document.getElementById("input").value;
    console.log('Trying to go to ' + query)
    location.replace(query)
    console.log('Oh no, you should not be seeing this!')
}