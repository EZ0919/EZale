var showImg = function (index) {
	"use strict";
	// 取得第 index 張影像	
	var img;
	
	img = $("img").eq(index);
	
	// 判斷該影像是否有 visible 屬性
	if (img.is(":visible")) {
		img.hide();
	} else {
		img.show();
	}
};

// 將按鈕事件與程式碼綁在一起
//var btn = $(".btn").eq(0);
//btn.bind("click",
//			function () {
//				showImg(0);
//			});

//// 讓每個按鈕都做同樣的事
//$(".btn").each( function(index) {
//	console.log(index +":"+$(this).text());
//});

// 看過每一個 btn 按鈕
$(".btn").each( function(index) {
	// 將目前看到的 btn按鈕的 click 事件綁定
  $(this).bind("click", function () {
	  			// 當按下時呼叫 showImg
				showImg(index);
  });
});