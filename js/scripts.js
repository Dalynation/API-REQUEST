//=======================================Fetch users==========================================================
// Here Im using api to fetch 12 users from the provideed website.
fetch('https://randomuser.me/api?results=12&nat=us')
  .then(response => response.json())
  .then(data => insertProfiles(data.results))

//This a function that passes the results to each card. The structure of the card the results is being passed to specifes the need details and provides a # id.
  function insertProfiles(results) {
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
  }
  //=======================================Search Bar==========================================================
// I am selecting the search container class and pushing it to a variable.
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
//=======================================Modal Window==========================================================
// Here is where I'm atempting to append the modal structure with the specified details, and to appear when  the function is ran.
// function modalAddon (results) {
//   $.each(results, function(index, user) {
//       $('#gallery').append(
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
//     </div>`).show();
// })

// Here is when a click event cuase modal window to appear.
// $('#0').addEventListener('click', modalAddon);
// $('#1').addEventListener('click', modalAddon);
// $('#2').addEventListener('click', modalAddon);
// $('#3').addEventListener('click', modalAddon);
// $('#4').addEventListener('click', modalAddon);
// $('#5').addEventListener('click', modalAddon);
// $('#6').addEventListener('click', modalAddon);
// $('#7').addEventListener('click', modalAddon);
// $('#8').addEventListener('click', modalAddon);
// $('#9').addEventListener('click', modalAddon);
// $('#10').addEventListener('click', modalAddon);
// $('#11').addEventListener('click', modalAddon);


// Here is where I plan to select the close button ID to close the modal window. Possibly hide the object.
