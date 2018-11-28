// Here Im using api to fetch 12 users from the provideed website.
fetch('https://randomuser.me/api?results=12&nat=us')
  .then(response => response.json())
  .then(data => insertProfiles(data.results))


// Creates format for fethed elements
  function insertProfiles(results) { //passes results and appends them to the page
            $.each(results, function(index, user) {
                $('#gallery').append(
                 `<div class="card"  id=${index}>
                    <div class="card-img-container">
                        <img class="card-img" src="${user.picture.large}" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h2 id=${index} class="card-name cap">${user.name.first} ${user.name.last}</h2>
                        <p class="card-text">${user.email}</p>
                        <p class="card-text cap">${user.location.city}, ${user.location.state}</p>
                    </div>
                  </div>`);
                });

//The modal div is being appended to the html
    function modalWindow() {
            $('#gallery').append(
             `<div class="modal-container">
                  <div class="modal">
                      <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                      <div class="modal-info-container">
                      </div>
                  </div>
              </div>`);
            $('.modal-container').hide();
    }
// I am formating the information I want the modal window to portray
    function modalAddon(user) {

            $(".modal-info-container").html( `
         <img class="modal-img" src="${user.picture.large}" alt="profile picture">
         <h2 id="name" class="modal-name cap">${user.name.first} ${user.name.last}</h2>
         <p class="modal-text">${user.email}</p>
         <p class="modal-text cap">${user.location.city}</p>
         <br>_________________________________</br>
         <p class="modal-text">${user.cell}</p>
         <p class="modal-text">Postcode: ${user.location.postcode}</p>
         <p class="modal-text">Birthday: ${user.dob.date}</p>
     </div>
`);
$(".modal-container").show();

        //This hide's the modal window when the "X" button is clicked
        $('#modal-close-btn').on("click", function() {
            $(".modal-container").hide();
        });
}


modalWindow(); //This opens the modal window when the card is clicked
          $('.card').on("click", function() {
                  let user = $('.card').index(this);
                  modalAddon(results[user]);

                });

}

//I am selecting the search container class and pushing it to a variable
const searchContainer = document.querySelector('.search-container');

// Here is where the html is being sent to the div to appear in html.
   const searchBar = `
       <form action="#" method="get">
           <input type="search" id="search-input" class="search-input" placeholder="Search...">
           <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
       </form>`;
   searchContainer.innerHTML = searchBar;


 // Both id's to interact with the search bar is selected and is told to filter the input.
   const searchButton = document.getElementById('search-submit');
   const searchInput = document.getElementById('search-input');
 searchButton.addEventListener('click', () => {
      let filter = searchInput.value.toLowerCase();
      searchText(filter);
      })
 // This function selects all card objects and queries the name to check if there's a match.
       function searchText(value) {
     const card = document.querySelectorAll('.card');
       for (let i = 0; i < card.length; i++) {
         const userName = card[i].querySelector('.card-name').textContent
         if (userName.indexOf(value) > -1) {
               card[i].style.display = "";
           } else {
               card[i].style.display = "none";

           }
     }
}
//Changing colors for the header and the background
$('h1').css('color','white');
$('body').css('backgroundColor', 'darkgreen');
