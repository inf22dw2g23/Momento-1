const path = require('path');
const axios = require("axios");

const login = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/public/login.html"));
};

const logout = (req, res) => {
    req.logout();
    res.sendFile(path.join(__dirname, "..", "/public/login.html"));
};

const protected = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/public/protected.html"));
};


const dashboard = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/public/dashboard.html"));
};


const authGitHub = (req, res) => {};

const authCallback = (req, res) => {
    res.redirect("/");
};

const me = (req, res) => {
    res.json(req.user);
};

const gitHubMe = (req, res) => {
    const token = req.user.token;
    axios
      .get("https://api.github.com/user", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
        res.json(response.data);
      })
      .catch(function (err) {
        res.json(err);
      });
};

module.exports = {login, logout, protected, dashboard ,authGitHub, authCallback, me, gitHubMe};