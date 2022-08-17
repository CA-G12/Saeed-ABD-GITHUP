const resultContainer = document.querySelector(".result-container");

const searchcontainer = document.querySelector(".search-result");
const serchInput = document.getElementById("search");
const reposDiv = document.createElement("div");
reposDiv.classList.add("repos");
resultContainer.appendChild(reposDiv);

const delayKeyUp = (() => {
  let timer = null;
  const delay = (func, ms) => {
    timer ? clearTimeout(timer) : null;
    timer = setTimeout(func, ms);
  };
  return delay;
})();

serchInput.addEventListener("keyup", (e) => {
  const query = e.target.value;
  console.log(query);
  delayKeyUp(() => {
    if (query === "") {
      searchcontainer.textContent = "";
    } else {
      fetch(`/users/${query}`)
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          rendersearchResult(data);
        });
    }
  }, 500);
});

const card = (user, desc) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  const userimage = document.createElement("img");
  cardDiv.appendChild(userimage);
  userimage.textContent = user.avatar_url;
  const ancorUser = document.createElement("a");
  cardDiv.appendChild(ancorUser);
  const usaerName = document.createElement("h3");
  ancorUser.appendChild(usaerName);
  userName.textContent = user.login;
  const span = document.createElement("span");
  cardDiv.appendChild(span);
  span.textContent = desc;
  resultContainer.appendChild(cardDiv);
};
card();

const repos = (obj) => {
  const repoHome = document.createElement("div");
  repoHome.classList.add("repo-card");
  const repoAncor = document.createElement("a");
  const textAncor = document.createElement("h3");
  const repoSpan = document.createElement("span");
  reposDiv.appendChild(repoHome);
  repoHome.appendChild(repoAncor);
  repoAncor.appendChild(textAncor);
  repoHome.appendChild(repoSpan);
  repoAncor.href = obj.html_url;
  textAncor.textContent = obj.name;
  repoSpan.textContent = obj.language;
};

///////////////////////////////////////

function rendersearchResult(arr) {
  searchcontainer.textContent = "";
  arr.forEach((ele) => {
    let ancor = document.createElement("a");
    ancor.id = ele.id;
    ancor.textContent = ele.name;
    searchcontainer.appendChild(ancor);
    ancor.addEventListener("click", () => {
      searchcontainer.textContent = "";
      resultContainer.textContent = "";
      fetch(`users/${ele.name}`)
        .then((data) => data.json())
        .then((data) => {
          card(data, ele.description);
        })
        .catch((err) => console.log(err));
      fetch(`users/${ele.name}/repos`)
        .then((data) => data.json())
        .then((data) => {
          data.forEach((ele) => {
            repos(ele);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
}
