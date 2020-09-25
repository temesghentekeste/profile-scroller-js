
const profiles = profileIterator(squad);
nextProfile();

// Next Event
document.querySelector('#next').addEventListener('click',nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile) {
    document.querySelector('#profile-display').innerHTML = `
    <div class="card mx-auto" style="width: 20rem;">
      <img src="./images/profile_images/${currentProfile.name}.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${currentProfile.name}</h5>
        <p>${currentProfile.position}</p>
        <p>${currentProfile.nationality}</p>
      </div>
    </div>
  `
  }else {
    // Reload the page
    window.location.reload();
  }
}
// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
             { value: profiles[nextIndex++], done: false } : 
             { done: true }
    }
  }
}