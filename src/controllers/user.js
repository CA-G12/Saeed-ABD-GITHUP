const fetch = require('node-fetch');

const user = (req,res) => {
    let name = req.params.name
    let token = process.env.ACCESS_TOKEN;
    
    const urlGit = `https://api.github.com/users/${name}?access_token=${token}`;  
    fetch(urlGit, {
        headers:{ Authorization: `token ${token}`,}
    }).then(data => data.json()).then(data => res.json(data))
    .catch(err => console.log(err))
}

module.exports = user;
