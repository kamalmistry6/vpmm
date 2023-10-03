$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 100){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });   
});

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