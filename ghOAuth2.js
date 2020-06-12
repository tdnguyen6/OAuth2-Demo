let ghSignIn = document.getElementById("gh-signIn");
let ghSignOut = document.getElementById("gh-signOut");

ghSignIn.onclick = () => {
  fetch("https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/authorize?client_id=d32d2e713ddf613284c2&state=hihihi", {
    headers: {
      "Origin": "*"
    }
  });
};