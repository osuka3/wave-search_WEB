$(function() {

	$("<div id='newsSection2'></div>").appendTo("body");
	$("<div id='aboutSection2'></div>").appendTo("body");

	$("body").css("position", "relative");

	$("#topSection").css("position", "absolute");
	$("#topSection").css("z-index", 899);
	$("#newsSection").css("position", "absolute");
	$("#newsSection").css("z-index", 889);
	$("#newsSection2").css("position", "absolute");
	$("#newsSection2").css("z-index", 789);
	$("#businessSection").css("position", "absolute");
	$("#businessSection").css("z-index", 898);
	$("#aboutSection").css("position", "absolute");
	$("#aboutSection").css("z-index", 888);
	$("#aboutSection2").css("position", "absolute");
	$("#aboutSection2").css("z-index", 788);

	$("#topScroll a").attr("href", "#newsSection2");
	$(".nNews a").attr("href", "#newsSection2");
	$(".nAbout a").attr("href", "#aboutSection2");

	$(window).scroll(function() {
		var value = $(this).scrollTop();
		var nPos = $("#topSection").height() + (value - $('#newsSection').offset().top)/2;
		$('#newsSection').css("top", nPos);
		var aPos = $("#topSection").height() + $("#newsSection").height() + $("#businessSection").height() + (value - $('#aboutSection').offset().top)/2;
		$('#aboutSection').css("top", aPos);
	});

	//ビジネスMサイズの縦調整
	$('#contMpack').each(function(index) {
		var $arr = new Array();
		var arr2 = new Array();
		$arr.push(arr2);
		var arrCnt = 0;
		var cnt = 0;
		$('.contM').each(function(index) {
			var $sel = $(this);
			$arr[arrCnt].push($sel.height());
			cnt += 1;
			if (cnt == 2) {
				arrCnt += 1;
				cnt = 0;
				var arr3 = new Array();
				$arr.push(arr3);
			}
		});
		if ($arr[arrCnt].length == 0) {
			$arr.splice(arrCnt, 1);
		}
		var arrLength = $arr.length;
		for (i = 0 ; i < arrLength ; i += 1) {
			$arr[i].sort(function(a, b) {
				return a - b;
			});
			$arr[i].reverse();
		}
		var arrCnt2 = 0;
		var cnt2 = 0;
		$('.contM').each(function(index) {
			var $sel = $(this);
			$sel.css("height",$arr[arrCnt2][0]);
			cnt2 += 1;
			if (cnt2 == 2) {
				arrCnt2 += 1;
				cnt2 = 0;
			}
		});
	});
	//ビジネスSサイズの縦調整
	$('#contSpack').each(function(index) {
		var $arr = new Array();
		var arr2 = new Array();
		$arr.push(arr2);
		var arrCnt = 0;
		var cnt = 0;
		$('.contS').each(function(index) {
			var $sel = $(this);
			$arr[arrCnt].push($sel.height());
			cnt += 1;
			if (cnt == 3) {
				arrCnt += 1;
				cnt = 0;
				var arr3 = new Array();
				$arr.push(arr3);
			}
		});
		if ($arr[arrCnt].length == 0) {
			$arr.splice(arrCnt, 1);
		}
		var arrLength = $arr.length;
		for (i = 0 ; i < arrLength ; i += 1) {
			$arr[i].sort(function(a, b) {
				return a - b;
			});
			$arr[i].reverse();
		}
		var arrCnt2 = 0;
		var cnt2 = 0;
		$('.contS').each(function(index) {
			var $sel = $(this);
			$sel.css("height",$arr[arrCnt2][0]);
			cnt2 += 1;
			if (cnt2 == 3) {
				arrCnt2 += 1;
				cnt2 = 0;
			}
		});
	});
	div_height();
	//ウィンドウリサイズ
	$(window).resize(function() {
		div_height();
	});
	//ページ内リンク
	$('a[href^=#]').click(function() {
		var speed = 400;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
	//ナビロゴ
	$('#navlogo').hide();
	$(window).scroll(function() {
		if ($(this).scrollTop() >= $(window).height()) {
			$('#navlogo').fadeIn();
		} else {
			$('#navlogo').fadeOut();
		}
	});
});
//section高さ
function div_height() {
	var whd = $(window).height();
	var topM = 66;
	var topHeight = 350;
	if (whd > topHeight + topM) {
		$("#topSection").css("height", whd);
		$("#topSection div").css("padding-top", whd - $("#topSection div").height() - 15);
	} else {
		$("#topSection").css("height", topM + topHeight);
		$("#topSection div").css("padding-top", $("#topSection").height() - $("#topSection div").height() - 15);
	}
	$("#newsSection article").css("padding-top", 0);
	$("#newsSection .backtop").css("padding-top", 0);
	$("#newsSection").css("height", "auto");
	if ($("#newsSection").height() < whd - topM) {
		var h = $("#newsSection").height();
		$("#newsSection").css("height", whd);
		$("#newsSection article").css("padding-top", (whd - h) / 2);
		$("#newsSection .backtop").css("padding-top", (whd - h) / 2 - 15);
	} else {
		$("#newsSection article").css("padding-top", topM);
	}
	if ($("#businessSection").height() < whd) {
		$("#businessSection").css("height", whd);
	}
	$("#aboutSection article").css("padding-top", 0);
	$("#aboutSection footer").css("padding-top", 0);
	$("#aboutSection").css("height", "auto");
	if ($("#aboutSection").height() < whd - topM) {
		var h = $("#aboutSection").height();
		$("#aboutSection").css("height", whd);
		$("#aboutSection article").css("padding-top", (whd - h) / 2);
		$("#aboutSection footer").css("padding-top", (whd - h) / 2 - 15);
	} else {
		$("#aboutSection article").css("padding-top", topM);
	}
	var nTop = $("#topSection").height();
	$("#newsSection").css("top", nTop);
	$("#newsSection2").css("top", nTop);
	var bTop = $("#topSection").height() + $("#newsSection").height();
	$("#businessSection").css("top", bTop);
	var aTop = $("#topSection").height() + $("#newsSection").height() + $("#businessSection").height();
	$("#aboutSection").css("top", aTop);
	$("#aboutSection2").css("top", aTop);
}
