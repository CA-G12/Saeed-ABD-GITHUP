const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");

const user = (req, res) => {
  let name = req.params.name;
  let token = process.env.ACCESS_TOKEN;

  const urlGit = `https://api.github.com/users/${name}?access_token=${token}`;
  fetch(urlGit, {
    headers: { Authorization: `token ${token}` },
  })
    .then((data) => data.json())
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};
const repos = (req, res) => {
  let name = req.params.name;
  let token = process.env.ACCESS_TOKEN;

  const urlGit = `https://api.github.com/users/${name}/repos`;
  fetch(urlGit)
    .then((data) => data.json())
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};
const search = (req, res) => {
  fetch(path.join(__dirname, "usars.json"))
    .then((data) => data.json())
    .then((data) => {
      return data.filter((e) =>
        e.name.toLowerCase().includes(req.params.search.toLowerCase())
      );
    })
    .then((data) => {
      res.json(data);
      res.end();
    })
    .catch((err) => {
      console.log(err);
      res.end();
    });
};

module.exports = { user, repos, search };
