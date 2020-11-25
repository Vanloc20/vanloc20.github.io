
var i = 0;
 function slideimage(){
	var imgs = [ "images/anhlulut1.jpg", "images/anhlulut2.jpg","images/anhlulut3.jpg","images/anhlulut4.jpg","images/anhlulut5.png"];
	document.getElementById('slides').src = imgs[i];
	console.log(i)
	i++;
	if (i==5) {
		i=0;
	}
}
setInterval(slideimage,3000);

const loiKeuGoi = "Người dân cả nước, kiều bào đang biến niềm thương thành những hành động thiết thực để chia sẻ khó khăn với đồng bào. Cả nước lại hướng về miền Trung thân yêu."

const marquee = document.getElementById("marquee");

taoMarquee();

setInterval(taoMarquee, 1000)

function taoMarquee() {
	const ngayGioHienTai = new Date().toString();
	marquee.innerText = `${ngayGioHienTai} | ${loiKeuGoi}`;
}


function hienThi () {
                document.getElementById("hide").style.display = 'block';
            };
function anLai () {
                document.getElementById("hide").style.display = 'none';
            };            
 
function toggle() {
	const classList = document.getElementById("hide").classList
	const anchor = document.getElementById("anchor")

	if(classList.contains("show")) {
		classList.remove("show")
		anchor.innerText = "Xem thêm"
	} else {
		classList.add("show")
		anchor.innerText = "Ẩn bớt"
	}
}

function cuonToi(id) {
	const tag = document.getElementById(id);

	window.scrollTo({
	  top: tag.offsetTop,
	  behavior: 'smooth'
	});
}






//  function ungHoMienTrung() {
//   var x = document.getElementById("formdangky");

//   const display = x.style.display 
//   console.log(display)
//   if (display == "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
  	loop: true
  });
});
 




 