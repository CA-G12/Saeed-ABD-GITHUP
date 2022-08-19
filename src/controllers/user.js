const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");

const user = (req, res) => {
  let name = req.params.name;
  let token = process.env.ACCESS_TOKEN;

  const urlGit = `https://api.github.com/users/${name}`;
  fetch(urlGit, {
    headers: { Authorization: `token ${token}` },
  })
    .then((data) => data.json())
    .then((data) => {
      res.json(data);
      res.end();
    })
    .catch((err) => {
      console.log(err);
      res.end(err);
    });
};
const repos = (req, res) => {
  let name = req.params.name;
  console.log({ name });
  let token = process.env.ACCESS_TOKEN;
  const urlGit = `https://api.github.com/users/${name}/repos`;
  console.log(
    { urlGit },
    {
      headers: { Authorization: `token ${token}` },
    }
  );
  fetch(urlGit)
    .then((data) => data.json())
    .then((data) => {
      res.json(data);
      res.end();
    })
    .catch((err) => console.log(err));
};
const search = (req, res) => {
  fs.readFile(
    path.join(__dirname, "..", "usars.json"),
    "utf-8",
    (err, data) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        data = JSON.parse(data);
        let result = data.filter((e) => {
          return e.name.toLowerCase().includes(req.params.search.toLowerCase());
        });
        res.json(result);
        res.end();
      }
    }
  );
};

module.exports = { user, repos, search };
