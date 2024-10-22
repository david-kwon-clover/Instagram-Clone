// FEED LOGIC
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
      feedItem.innerHTML = `<h6>${element.author}</h6>
        <img src=${element.download_url} />`;
      feed.appendChild(feedItem);
    });
    console.log(feedElements);
  } catch (error) {
    console.error(error.message);
  }
}

getFeedPics();
