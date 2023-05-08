// const toggleButton = document.getElementById("toggle-button-id");
// const navLinks = document.getElementById("navbar-links-id");

// toggleButton.addEventListener('click', function() {
//     navLinks.classList.toggle('active');
// })

//  console.log(toggleButton);

 const albums = document.getElementsByClassName('albums')[0];
 const button = document.getElementById("addAlbum");

 button.addEventListener('click', function() {

    //e.preventDefault();

    const imageURL = document.getElementById('image').value;
    const description = document.getElementById('description').value;

    const album = createAlbum(imageURL, description);
    albums.appendChild(album);

 })

 function createAlbum(imageURL, description) {

    const albumDiv = document.createElement('div'); // <div>
    albumDiv.className = 'album';

    const image = document.createElement('img');
    image.setAttribute('src', imageURL);

    const paragraph = document.createElement('p');
    paragraph.textContent = description;

    const albumFooter = document.createElement('div');
    albumFooter.className = "albumFooter";

    const buttonDiv = document.createElement('div');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    button1.textContent = 'view';
    button2.textContent = 'edit';

      {/* <div>
         <button>View</button>

    </div> */}
    buttonDiv.appendChild(button1);
    buttonDiv.appendChild(button2);

    const timeElement = document.createElement('span');
    timeElement.textContent = '9 min';

    albumFooter.appendChild(buttonDiv);
    albumFooter.appendChild(timeElement);

    albumDiv.appendChild(image);
    albumDiv.appendChild(paragraph);
    albumDiv.appendChild(albumFooter);

    return albumDiv;

 }


