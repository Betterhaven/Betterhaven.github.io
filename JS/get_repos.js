function getRepos() {
  const repoList = document.getElementById("repo-list");
    fetch("https://api.github.com/orgs/BetterHaven/repos")
    .then((response) => response.json())
    .then((repos) => {
      repos.forEach((repo) => {
        const listItem = document.createElement("li");
        const repoLink = document.createElement("a");
        repoLink.href = repo.html_url;
        repoLink.textContent = repo.name;
        listItem.appendChild(repoLink);
        const description = document.createElement("p");
        description.textContent = repo.description || "No description available.";
        listItem.appendChild(description);
        repoList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching repositories:", error);
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Failed to load repositories.";
      repoList.appendChild(errorMessage);
    });
}