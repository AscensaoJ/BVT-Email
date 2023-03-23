const names = ["Johnny Edgars", "Janet Fromme", "David Jackson", "Bannon Jasper", "Bart Matthews", "Andrew Hanson", "Mark Jaeger", "Valerie Thomas", "Neil Leslieson", "Wes Anderson", "Roxy Hart", "Nathan East", "Kevin Westwood", "Tedd Homeward", "Sam Tapping", "James O'Neil", "Stuart Stewart", "Paul Harrison", "Anders Erikson", "Brandon Harlson"];
const subjects = ["Party", "You Okay?", "Interview", "Two Weeks Notice - Moving Out", "Yo, did I leave my skateboard at ur place?", "Old Arcade Machine", "Hunting Trip", "Valerie Thomas", "Neil Leslieson", "Wes Anderson", "Roxy Hart", "Nathan East", "Kevin Westwood", "Tedd Homeward", "Sam Tapping", "James O'Neil", "Stuart Stewart", "Paul Harrison", "Anders Erikson", "Brandon Harlson"];
const promos = [];


const addBtn = '<td class="selectBox"><input type="checkbox" class="select"></td>';

//box loaders
function loadInbox() {
    var checkClass = document.getElementById('inbox');
    if (!checkClass.classList.contains('active')){
        var loader = '';
        for (let i=0;i<names.length;i++){
            var sender = names[i].split(' ');
            loader = loader.concat(
                "<tr>\n",
                    addBtn,
                    `<td class=\"sender\" title=\"${sender[0]}.${sender[1]}@example.com\">${sender[0]}.${sender[1]}@example.com</td>`,
                    `<td class=\"subject\" title=\"${subjects[i]}\" onclick=\"loadEmail()\">${subjects[i]}</td>\n`,
                "</tr>\n"
            )
        }
        document.getElementById("emailList").innerHTML = loader;
        let checkActive = document.getElementsByClassName('active');
        checkActive.item(0).classList.remove('active');
        checkActive.item(0).classList.remove('active');
        document.getElementById('inbox').classList.add('active');
        document.getElementById('phoneInbox').classList.add('active');
    }
}

function loadPromo() {
    var checkClass = document.getElementById('inbox');
    if (!checkClass.classList.contains('active')){
        var loader = '';
        for (let i=0;i<7;i++){
            var sender = names[i].split(' ');
            loader = loader.concat(
                "<tr>\n",
                    addBtn,
                    `<td class=\"sender\" title=\"${sender[0]}.${sender[1]}@example.com\">${sender[0]}.${sender[1]}@example.com</td>`,
                    `<td class=\"subject\" title=\"${subjects[i]}\">${subjects[i]}</td>\n`,
                "</tr>\n"
            )
        }
        document.getElementById("emailList").innerHTML = loader;
        let checkActive = document.getElementsByClassName('active');
        checkActive.item(0).classList.remove('active');
        checkActive.item(0).classList.remove('active');
        document.getElementById('inbox').classList.add('active');
        document.getElementById('phoneInbox').classList.add('active');
    }
}

function loadUpdates() {
    var checkClass = document.getElementById('inbox');
    if (!checkClass.classList.contains('active')){
        var loader = '';
        for (let i=0;i<20;i++){
            var sender = names[i].split(' ');
            loader = loader.concat(
                "<tr>\n",
                    addBtn,
                    `<td class=\"sender\" title=\"${sender[0]}.${sender[1]}@example.com\">${sender[0]}.${sender[1]}@example.com</td>`,
                    `<td class=\"subject\" title=\"${subjects[i]}\">${subjects[i]}</td>\n`,
                "</tr>\n"
            )
        }
        document.getElementById("emailList").innerHTML = loader;
        let checkActive = document.getElementsByClassName('active');
        checkActive.item(0).classList.remove('active');
        checkActive.item(0).classList.remove('active');
        document.getElementById('inbox').classList.add('active');
        document.getElementById('phoneInbox').classList.add('active');
    }
}

function loadSpam() {
    var checkClass = document.getElementById('inbox');
    if (!checkClass.classList.contains('active')){
        var loader = '';
        for (let i=0;i<20;i++){
            var sender = names[i].split(' ');
            loader = loader.concat(
                "<tr>\n",
                    addBtn,
                    `<td class=\"sender\" title=\"${sender[0]}.${sender[1]}@example.com\">${sender[0]}.${sender[1]}@example.com</td>`,
                    `<td class=\"subject\" title=\"${subjects[i]}\">${subjects[i]}</td>\n`,
                "</tr>\n"
            )
        }
        document.getElementById("emailList").innerHTML = loader;
        let checkActive = document.getElementsByClassName('active');
        checkActive.item(0).classList.remove('active');
        checkActive.item(0).classList.remove('active');
        document.getElementById('inbox').classList.add('active');
        document.getElementById('phoneInbox').classList.add('active');
    }
}

function loadTrash() {
    var checkClass = document.getElementById('inbox');
    if (!checkClass.classList.contains('active')){
        var loader = '';
        for (let i=0;i<20;i++){
            var sender = names[i].split(' ');
            loader = loader.concat(
                "<tr>\n",
                    addBtn,
                    `<td class=\"sender\" title=\"${sender[0]}.${sender[1]}@example.com\">${sender[0]}.${sender[1]}@example.com</td>`,
                    `<td class=\"subject\" title=\"${subjects[i]}\">${subjects[i]}</td>\n`,
                "</tr>\n"
            )
        }
        document.getElementById("emailList").innerHTML = loader;
        let checkActive = document.getElementsByClassName('active');
        checkActive.item(0).classList.remove('active');
        checkActive.item(0).classList.remove('active');
        document.getElementById('inbox').classList.add('active');
        document.getElementById('phoneInbox').classList.add('active');
    }
}

//compose controls
function openCompose() {
    document.getElementById("composeCont").style.display = "block";
    document.getElementById("send").innerHTML = "Send";
}

function clearMsg() {
    document.getElementById("emailMsg").value = "";
}

function closeCompose() {
    let email = document.getElementById("emailTo");
    let subject = document.getElementById("subjectTo");
    document.getElementById("composeCont").style.display = "none";
    email.value = "";
    subject.value = "";
    clearMsg();
    if(email.hasAttribute("readonly")) {email.removeAttribute("readonly");}
    if(email.hasAttribute("disabled")) {email.removeAttribute("disabled");}
    if(subject.hasAttribute("readonly")) {subject.removeAttribute("readonly");}
    if(subject.hasAttribute("disabled")) {subject.removeAttribute("disabled");}
}


function openReply() {
    openCompose();
    let email = document.getElementById("emailTo");
    let subject = document.getElementById("subjectTo");
    email.value = document.getElementById("emailSender").innerText;
    email.setAttribute("readonly", "");
    email.setAttribute("disabled", "");
    subject.value = document.getElementById("emailSubject").innerText;
    subject.setAttribute("readonly", "");
    subject.setAttribute("disabled", "");
    document.getElementById("send").innerHTML = "Reply";
}

//Toggle all checkboxes
function checkToggle() {
    let boxes = document.getElementsByClassName("select");
    for(let i = 0; i < boxes.length; i++){
        boxes[i].checked = document.getElementById('selectAll').checked;
    }
    document.getElementsByClassName('title').innerHTML = "Hello";
}

//Modified from skelly on codeply https://www.codeply.com/p/BmyKLq8RTV
function toggleTheme() {
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light');
        document.getElementById('themeIcon').classList.remove("bi-sun-fill");
        document.getElementById('themeIcon').classList.add("bi-moon-fill");
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark');
        document.getElementById('themeIcon').classList.remove("bi-moon-fill");
        document.getElementById('themeIcon').classList.add("bi-sun-fill");
    }
}
