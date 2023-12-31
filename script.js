// navbar script start
const body = document.querySelector("body");
        const navbar = document.querySelector(".navbar");
        const menuBtn = document.querySelector(".menu-btn");
        const cancelBtn = document.querySelector(".cancel-btn");
        menuBtn.onclick = () => {
          navbar.classList.add("show");
          menuBtn.classList.add("hide");
          body.classList.add("disabled");
        }
        cancelBtn.onclick = () => {
          body.classList.remove("disabled");
          navbar.classList.remove("show");
          menuBtn.classList.remove("hide");
        }
        window.onscroll = () => {
          this.scrollY > 10 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
        }
// navbar script end

// drag and drop script start

const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");
let file;
button.onclick = () => {
input.click();
}
input.addEventListener("change", function() {
file = this.files[0];
dropArea.classList.add("active");
showFile();
});
dropArea.addEventListener("dragover", (event) => {
event.preventDefault();
dropArea.classList.add("active");
dragText.textContent = "Release to Upload File";
});
dropArea.addEventListener("dragleave", () => {
dropArea.classList.remove("active");
dragText.textContent = "Drag & Drop to Upload File";
});
dropArea.addEventListener("drop", (event) => {
event.preventDefault();
file = event.dataTransfer.files[0];
showFile();
});
function showFile() {
let fileType = file.type;
let validExtensions = ["image/jpeg", "image/jpg", "image/png", "application/pdf", ".doc", ".docx", "video/mp4", ".xml", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
];
console.log(fileType)
if (validExtensions.includes(fileType)) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
        let fileURL = fileReader.result;
        dropArea.classList.remove("active");
        dragText.textContent = "The file is successfully uploaded."
        setTimeout(() => {
            dragText.textContent = "Drag & Drop to Upload File"
        }, 2000)
    }
    fileReader.readAsDataURL(file);
} else {
    alert("This is not an valid file!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
}
}
// drag and drop script end


// contact form script start

function Send() {
        
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var contact = document.getElementById("Contact").value;
    var sub = document.getElementById("subject").value;
    var mess = document.getElementById("message").value;

    var body = "Name: " + name + "<br/> Email:" + email + "<br/> Message:" + mess;

    console.log(body);
    Email.send({
        SecureToken : "ca130070-a4da-43d2-a27a-39c6f196c4cf",
        To: 'kamalmistry162@gmail.com',
        From: "thepcdemo@gmail.com",
        Subject: sub,
        Body: body
    }).then(
        message => {
            if (message == 'OK') {

                swal("Successfull", "Your Data Successfull Received", "success");
            }
            else {

                swal("Something Wrong", "Your Data is not Received", "error");
            }
        }
    );

}

// script for refresh input data

let btnClear = document.querySelector('.button');
let inputs = document.querySelectorAll('input');

btnClear.addEventListener('click', () => {
    inputs.forEach(input =>  input.value = '');
});

// contact form script end
