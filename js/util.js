const nations = ['汉族', '蒙古族', '回族', '藏族', '维吾尔族', '苗族', '彝族', '壮族', '布依族', '朝鲜族', '满族', '侗族', '瑶族', '白族', '土家族', '哈尼族',
	'哈萨克族', '傣族', '黎族', '僳僳族', '佤族', '畲族', '高山族', '拉祜族', '水族', '东乡族', '纳西族', '景颇族', '柯尔克孜族', '土族', '达斡尔族', '仫佬族',
	'羌族', '布朗族', '撒拉族', '毛南族', '仡佬族', '锡伯族', '阿昌族', '普米族', '塔吉克族', '怒族', '乌孜别克族', '俄罗斯族', '鄂温克族', '德昂族', '保安族',
	'裕固族', '京族', '塔塔尔族', '独龙族', '鄂伦春族', '赫哲族', '门巴族', '珞巴族', '基诺族'
]
//获取页面传参
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); //匹配目标参数
	if (r != null) return unescape(r[2]);
	return null; //返回参数值
}
//转换日期格式
function changeDate(date) {
	return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

}
//拉起授权获取用户信息
function getUserInfo(page, appId) {
	doGetForm(
		'https://app.zwfw.nmg.gov.cn:4443/icity/auth2.0/authorize', {}, null,
		function(code, data) {}, null, null,
		function() {

		});
	var url = encodeURI("https://www.yjhlcity.com/ysb_msbjr/" + page)
	window.location.href =
		'https://app.zwfw.nmg.gov.cn:4443/icity/auth2.0/authorize?app_id=' + appId +
		'&redirect_uri=' +
		url + '&scope=auth_user&state=';
}
//请求后台获取用户信息
function getToken(code, openId, appId) {
	let data = {
		code: code,
		openId: openId,
		appId: appId
	}
	doPostJson(
		'https://www.yjhlcity.com/usercenter/app/msbsign/checkMsbCoderelease', data,
		null,
		function(code, data) {
			return data
		}, null, null,
		function(obj) {
			return null
		});

}


