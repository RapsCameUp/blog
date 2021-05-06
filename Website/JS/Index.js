function Subscribe() {
    var strUserEmail = document.getElementById('userEmail').value;
    if (strUserEmail != '') {
        alert(strUserEmail + ": " + 'You have been successfully subscribed to receive our news letters. Thank You.');
    } else {
        alert('Please Enter Your Email Address.');
    }

}

function NewPost() {

    const strHeading = document.getElementById('HeadingInput').value; // get the heading
    const strBody = document.getElementById('bodyInput').value; // get the bodycontent

    var x = document.getElementById("fileUploader"); // get the image uploaded
    var imgSelected = "";
    if ('files' in x) {
        var file = x.files[0];
        if ('name' in file) {
            imgSelected += file.name;
        }
    }

    const div = document.createElement('div'); // create a container for the new post
    div.className = 'row';
    div.style = 'margin-top: 25px;';

    div.innerHTML = `
    <div class="offset-sm-1 col-sm-2" style="background: #245677;" id="imagecontainer">
    <img src="images/` + imgSelected + `" alt="No Image">
    </div>

    <div class="col-sm-8" id="newsContainer">
    <h5 class="text-center" style="margin-top: 3px;">  ` + strHeading + `</h5>
    <p style="margin-top: 10px;"> ` + strBody + ` </p>
               
    </div>
    `;

    document.getElementById('mainContent').appendChild(div); // display the new post in browser

}


function UserFeedBack() {
    alert('Thank You For The FeedBack.');

}