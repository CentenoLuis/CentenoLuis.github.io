const github = new Github();
const ui = new Ui();

const searchUser = document.getElementById("searchUser");
const submitUser = document.getElementById("form");

form.addEventListener("reset", (event) => {
  event.preventDefault();
  searchUser.value = "";
  ui.clearProfile();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const textUser = searchUser.value;

  if (textUser !== "") {
    github.getUser(textUser).then((data) => {
      if (data.profileData.message === "Not Found") {
        ui.showAlert(); //show alert
      } else {
        ui.showProfile(data.profileData); //show profile
      }
    });
  } else {
    ui.clearProfile(); //clear profile
  }
});
