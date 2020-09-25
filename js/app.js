// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

// eslint-disable-next-line no-undef
const profiles = profileIterator(squad);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile) {
    document.querySelector('#profile-display').innerHTML = `
    <div class="card mx-auto" style="width: 20rem;">
      <img src="./images/profile_images/${currentProfile.name}.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${currentProfile.name}</h5>
        <p>${currentProfile.position}</p>
        <p>${currentProfile.nationality}</p>
      </div>
    </div>
  `;
  } else {
    // Reload the page
    window.location.reload();
  }
}


// Next Event
document.querySelector('#next').addEventListener('click', nextProfile);

// Initially load the card with the first profile
nextProfile();