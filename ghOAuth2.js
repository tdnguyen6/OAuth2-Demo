let ghSignIn = document.getElementById("gh-signIn");
let ghSignOut = document.getElementById("gh-signOut");

ghSignIn.onclick = () => {
  let state = (new Date()).getTime();
  location.href =
    "https://github.com/login/oauth/authorize?client_id=d32d2e713ddf613284c2&state=" +
    state;
  sessionStorage.setItem("state", state);
};

let queryString = location.search;
if (queryString != "") {
  let urlParams = new URLSearchParams(queryString);

  if (urlParams.get("code") != null && urlParams.get("state") != null) {
    let state = sessionStorage.getItem("state");
    let code = urlParams.get("code");
    if (urlParams.get("state") === state) {
      console.log(`Code is ${urlParams.get("code")}`);
      fetch(
        "https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?client_id=d32d2e713ddf613284c2&client_secret=a85d684c0fc52f12dbf56171a3d231eea610c671&code=" + code, { method: "POST" }
      ).then(res => res.text()).then(ans => console.log(ans));
    }
  }
}
