const PATH_HEADING_IMAGE = "/assets/images/js-icon.png";
const PATH_EXTERNAL_NAVBAR = "/src/html/navbars.html";

const changeHeaderImage = () => {
  sendRequest(PATH_HEADING_IMAGE).then(response => {
    const imgSource = document.getElementById("img-header");
    imgSource.setAttribute("src", response.url);
  });

  const navBarSource = document.getElementById("navbar");
  sendResquestText(PATH_EXTERNAL_NAVBAR)
    .then(htmlString => {
        debugger;
      navBarSource.innerHTML = htmlString;
    })
    .catch(error => {
      alert("Something went wrong ==> \n " + error);
    });
};

window.onload = setTimeout(changeHeaderImage, 3000);
