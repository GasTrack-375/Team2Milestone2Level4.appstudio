let req = ""
let req2 = ""
let query = ""
let pw = "Chicken21!"  // put your database password here
let favsList = ""
let user = ""
let gasID = ""
let query2 = ""
let results2 = ""

btnSubmit.onclick=function(){
    user = inptUserName.value
    gasID = inptGasID.value
    query = "INSERT INTO favorite (username, gas_id) VALUES ('" + user + "', '" + gasID + "')"
    alert(query)
    
    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dtn75570&pass=" + pw + "&database=dtn75570&query=" + query)

    if (req.status == 200)  //transit worked
      if (req.responseText == 500)  {  // for our server - this means the insert succeeded
        query2 = "SELECT gas_id FROM favorite WHERE username = " + '"' + user + '"'
        
        req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dtn75570&pass=" + pw + "&database=dtn75570&query=" + query2)
        
        results2 = JSON.parse(req2.responseText)
        let message = ""
        for (i=0; i<results2.length; i++) 
          message = message + results2[i] + "\n"
        txtFavs.value = message
     } else {
        txtFavs.textContent = "There was a problem adding this favorite."
        }
     else  //transit error
        alert("Error")
  }
    
        





btnLog.onclick=function(){
  ChangeForm(login)
}

btnMap.onclick=function(){
  ChangeForm(googleMaps)
}

butWeather.onclick=function(){
  ChangeForm(weather)
}
