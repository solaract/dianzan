function dianzan(){
	document.body.scrollTop = document.body.scrollHeight;
	var a_arr = document.getElementById('QM_Feeds_Iframe').contentDocument.getElementsByClassName('qz_like_btn_v3');
	[].forEach.call(a_arr,function(value){
		if(value.dataset['islike'] === '0'){
			value.click();
		}
	});
	if(document.body.scrollHeight - document.documentElement.clientHeight > 10){
		setTimeout(dianzan,1000);
	}
}