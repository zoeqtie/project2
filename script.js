// Video controls
var video = document.getElementById("myVideo");

function playVideo(){ video.play(); }
function pauseVideo(){ video.pause(); }
function replayVideo(){
  video.currentTime = 0;
  video.play();
}

function checkPassword(){
  var pass = document.getElementById("password").value;

  if(pass.length < 8){
    showWarn("รหัสผ่านสั้นเกินไป ควรมีอย่างน้อย 8 ตัวอักษร");
  }
  else if(!/[A-Z]/.test(pass)){
    showWarn("ควรมีตัวพิมพ์ใหญ่ (A-Z) อย่างน้อย 1 ตัว");
  }
  else if(!/[0-9]/.test(pass)){
    showWarn("ควรมีตัวเลข (0-9) อย่างน้อย 1 ตัว");
  }
  else{
    showCorrect();
}
}


// Scroll fade effect
const faders = document.querySelectorAll('.fade');
window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      el.classList.add('show');
    }
  });
});
function closePopup(){
  document.getElementById("popup").style.display = "none";
}
function showWarn(message){
  document.getElementById("warnText").innerText = message;
  document.getElementById("warnPopup").style.display = "flex";
}

function closeWarn(){
  document.getElementById("warnPopup").style.display = "none";
}
function showCorrect(){
  document.getElementById("correctPopup").style.display = "flex";
}

function closeCorrect(){
  document.getElementById("correctPopup").style.display = "none";
}
function openInfo(){
  document.getElementById("infoPopup").style.display = "flex";
}

function closeInfo(){
  document.getElementById("infoPopup").style.display = "none";
}
