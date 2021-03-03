$(function() {
	//ビジネスSサイズの縦調整
	$('#contPack').each(function(index) {
		var $arr = new Array();
		var arr2 = new Array();
		$arr.push(arr2);
		var arrCnt = 0;
		var cnt = 0;
		$('.cont').each(function(index) {
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
		$('.cont').each(function(index) {
			var $sel = $(this);
			$sel.css("height",$arr[arrCnt2][0]);
			cnt2 += 1;
			if (cnt2 == 3) {
				arrCnt2 += 1;
				cnt2 = 0;
			}
		});
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
});