

fetch('https://randomuser.me/api?results=12&nat=us')
  .then(response => response.json())
  .then(data => insertProfiles(data.results))

  // Add search container
  const searchContainer = document.querySelector('.search-container');

  // Create search form
  const searchBar = `
      <form action="#" method="get">
          <input type="search" id="search-input" class="search-input" placeholder="Search...">
          <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
      </form>
  `;
  // Add search to html
  searchContainer.innerHTML = searchBar;

  const searchInput = document.getElementById('search-input');
  const searchSubmit = document.getElementById('search-submit');

  // Filter page people results on click of search submit button
  searchSubmit.addEventListener("click", () => {
      const searchResults = searchInput.value.toLowerCase();
      searchText(searchResults);
  })

  // Filter page people results from search
  function searchText(value) {
      const card = document.querySelectorAll('.card');
      // loop through all people cards on page
      for(i = 0; i < card.length; i++) {
          // Grab person name from card
          const userName = card[i].querySelector('.card-name').textContent;
          if (userName.indexOf(value) > -1) {
              card[i].style.display = "";
          } else {
              card[i].style.display = "none";
          }
      }
  }



function insertProfiles(results) {

          $.each(results, function(index, user) {
              $('#gallery').append(
               `<div class="card">
                  <div class="card-img-container">
                      <img class="card-img" src="${user.picture.large}" alt="profile picture">
                  </div>
                  <div class="card-info-container">
                      <h2 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h2>
                      <p class="card-text">${user.email}</p>
                      <p class="card-text cap">${user.location.city}, ${user.location.state}</p>
                  </div>
                </div>`);
          });
}




// function modalAddon (user) {
//               $(".modal-info-container").html(
// `<div class="modal-container">
//     <div class="modal">
//         <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
//         <div class="modal-info-container">
//             <h3 id="name" class="modal-name cap">${user.name.first} ${user.name.last}</h3>
//             <p class="modal-text">${user.email}</p>
//             <p class="modal-text cap">${user.location.city}</p>
//             <hr>
//             <p class="modal-text">${user.cellPhone}</p>
//             <p class="modal-text">${user.location.streetAddress}, ${user.location.state}, ${user.postcode}</p>
//             <p class="modal-text">${user.birthday}</p>
//         </div>
//     </div>`);
//     $(".modal-container").show();
// }
//
//
// createModalWindow();
//          $('.card').on("click", function() {
//                  let user = $('.card').index(this);
//                  modalAddon(results[user]);