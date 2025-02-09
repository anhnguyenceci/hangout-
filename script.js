function nextPage() {
    var audio = document.getElementById("backgroundMusic");
    audio.play(); // Phát nhạc khi nhấn "Yes"
    
    // Chuyển sang trang tiếp theo (nếu muốn)
    // window.location.href = "nextpage.html";
}

function moveButton() {
    var button = document.getElementById("noButton");
    var x = Math.random() * (window.innerWidth - button.offsetWidth);
    var y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = "absolute";
    button.style.left = x + "px";
    button.style.top = y + "px";
}
