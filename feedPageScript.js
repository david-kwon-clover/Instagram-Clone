// FEED LOGIC

    // FEED ITEMS API FETCH
const feed = document.querySelector(".feed-page-content");

async function getFeedPics() {
  const url = "https://picsum.photos/v2/list?page=2&limit=20";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const feedElements = await response.json();
    feedElements.forEach((element) => {
      const feedItem = document.createElement("article");
      feedItem.innerHTML = `
      <div class="feed-item">
        <!-- User Info -->
        <div class="user-info">
            <img src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg" alt="User Profile Picture" class="profile-pic">
            <span class="username">${element.author.split(" ").join("_")}</span>
        </div>

        <!-- Post Image -->
        <div class="post-image">
            <img src=${element.download_url} alt="Post Image">
        </div>

        <!-- Post Actions -->
        <div class="post-actions">
            <div class="left-actions">
                <img src="https://static.thenounproject.com/png/1964849-200.png" alt="Like Icon" class="icon">
                <img src="https://static.thenounproject.com/png/2473088-512.png" alt="Comment Icon" class="icon">
                <img src="https://static.thenounproject.com/png/113254-512.png" alt="Share Icon" class="icon">
            </div>
            <div class="right-actions">
                <img src="https://static.thenounproject.com/png/1376547-512.png" alt="Bookmark Icon" class="icon">
            </div>
        </div>

        <!-- Caption -->
        <div class="caption">
            <span class="username">${element.author.split(" ").join("_")}</span> I farted.
        </div>
        </div>
      `;
      feed.appendChild(feedItem);
    });
  } catch (error) {
    console.error(error.message);
  }
}

getFeedPics();

    // FEED LOGOUT BUTTON
const feedLogoutButton = document.querySelector(".feed-page-logout-button");

feedLogoutButton.addEventListener("click", () => {
    document.location.href = "./index.html";
})

const accountButton = document.querySelector(".profile-pic-nav");


accountButton.addEventListener("click", () => {
    document.location.href = "./account.html";
})
