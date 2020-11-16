/*
Login form

let req = ""
let query = ""
let pw = "Chicken21!"  // put your database password here
let userList = ""


login.onshow=function(){
   txtLogin_contents.style.height = "100px"
}

login.onshow=function(){
    query = "Select * FROM user"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dtn75570&pass=" + pw + "&database=dtn75570&query=" + query)

    if (req.status == 200){ //transit worked.
        userList = JSON.parse(req.responseText)
    }else{
        // transit error
        lblDel = `Error: ${req.status}`
    }  
}


btnLogIn.onclick=function(){
    let username= inptUsername.value
    let password = inptPassword.value
    // make sure the customer name is in the database before you try to delete it
    let found = ""
    for (i = 0; i <= userList.length - 1; i++) {
        if (username === userList[i][0] && password === userList[i][1]){
            found = true
            break // if found the item in the database jump out of loop
        }else{
            found = false
    }
  }
    if (found == false) 
       NSB.MsgBox(`You do not have an account.`)
    else if (found == true) {
      ChangeForm(googleMaps)
      } // found isi true
}




btnCreate.onclick=function(){
    let username= inptUsername.value
    let password = inptPassword.value
    let email = inptEmail.value
    let query = "INSERT INTO user (username,password,email) VALUES ('"+ username + "', '" + password+ "', '" + email+ "')"
    // look at how the query is rendered
    alert(query)
    
    // replace my netID with yours (2 places)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dtn75570&pass=" + pw + "&database=dtn75570&query=" + query)

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            NSB.MsgBox(`You have successfully created an account!`)
        else
            NSB.MsgBox(`You have aready had an account.`)
    } else 
        // transit error
        NSB.MsgBox(`Error: ${req.status}`)
}
*/