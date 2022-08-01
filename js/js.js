var inputName= document.getElementById("inputName");
var inpurUrl= document.getElementById("inpurUrl");


var infoList;
if (localStorage.getItem("ourInfo") == null) {
    var infoList = [];
}
else {
    infoList = JSON.parse(localStorage.getItem("ourInfo"));
    displayInfo()
}

function addInfo() {
    var userInfo =
    {
        name: inputName.value,
        url: inpurUrl.value,
    }
    if(userInfo.name !='' && userInfo.url !=''&& userInfo.name !=' ' && userInfo.url !=' '){
        infoList.push(userInfo);
        localStorage.setItem("ourInfo", JSON.stringify(infoList));
        displayInfo()
        clearInfo();
    }
    else{
        alert("Name and Url Field is required");
    }
}

function displayInfo() {

    var container = "";
    for (var i = 0; i < infoList.length; i++) {
        container +=`
        <div class="info">
          <h2>${infoList[i].name}</h2>
          <div class="info-btn w-75">
          <a href="${infoList[i].url}" target="_blank" class="btn btn-primary">Visit</a>
          <button onclick="deletInfo(${i})" class="btn btn-danger">Delete</button>
          </div>
        </div>
        `
    }
    document.getElementById("userInfo").innerHTML = container;
}

function clearInfo() {
    inputName.value = "";
    inpurUrl.value = "";
}

function deletInfo(index) {
    infoList.splice(index, 1)
    localStorage.setItem("ourInfo", JSON.stringify(infoList));
    displayInfo()
}