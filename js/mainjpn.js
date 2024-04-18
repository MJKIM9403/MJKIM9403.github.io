
const content = "こんにちは。ウェブエンジニアのキム·ミンジュです。";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 300)



// 숨겨진 네비 

$(document).ready(function(){
    $('.hamToggle').on('click', function(){
        $('#dimmed').show(); 
        $('.hammenu').show().animate({
            right:0
        });  
    });
    $('.quit').on('click', function(){
        $('#dimmed').hide(); 
        $('.hammenu').animate({
            right: '-' + 50 + '%'
                    },function(){
                        $('.hammenu').hide();          
                    });  
    });

});


// 원페이지 메뉴누르면 해당 영역으로 이동
function fnMove(seq) {
	var offset = $("#sec" + seq).offset();
	$('html, body').animate({ scrollTop: offset.top }, 500);
}

// 버튼 클릭 시 맨 위로 이동
const topBtn = document.querySelector(".moveTopBtn");
	topBtn.onclick = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
}

// if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
// $('#navPanel')
// 	.css('transition', 'none');

// modal
$('.prjbtn').on('click', function(){
	$('.black-bg').fadeToggle('show');

	$('.btn-prjbtn').on('click', function(){
		$('.black-bg').fadeOut();

	})


	})
