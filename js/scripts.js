

fetch('https://randomuser.me/api?results=12&nat=us')
  .then(response => response.json())
  .then(data => insertProfiles(data.results))

function insertProfiles(results) {
          //Appends card for each employee to gallery, interpolating employees' info
          $.each(results, function(index, employee) {
              $('#gallery').append(
               `<div class="card">
                  <div class="card-img-container">
                      <img class="card-img" src="${employee.picture.medium}" alt="profile picture">
                  </div>
                  <div class="card-info-container">
                      <h3 id="name" class="card-name cap">${employee.name.first} ${employee.name.last}</h3>
                      <p class="card-text">${employee.email}</p>
                      <p class="card-text cap">${employee.location.city}, ${employee.location.state}</p>
                  </div>
                </div>`);
          });

}
