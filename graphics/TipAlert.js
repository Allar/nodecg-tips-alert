(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"TipAlert_atlas_", frames: [[0,2442,720,405],[0,407,720,405],[2166,814,720,405],[2888,6512,720,405],[2888,1221,720,405],[2888,0,720,405],[2888,5291,720,405],[2888,4070,720,405],[2888,6919,720,405],[2888,407,720,405],[2888,3663,720,405],[2888,4477,720,405],[2888,1628,720,405],[2166,7326,720,405],[2888,814,720,405],[2888,2035,720,405],[2888,2849,720,405],[2888,3256,720,405],[2888,2442,720,405],[1444,4884,720,405],[2166,2849,720,405],[2166,1221,720,405],[2166,5291,720,405],[2166,1628,720,405],[2166,3663,720,405],[2166,4070,720,405],[2166,4477,720,405],[2166,6512,720,405],[0,814,720,405],[2166,4884,720,405],[2166,5698,720,405],[2166,6105,720,405],[2166,6919,720,405],[2166,7733,720,405],[1444,2849,720,405],[1444,3663,720,405],[1444,4477,720,405],[1444,4070,720,405],[1444,1221,720,405],[0,0,720,405],[1444,1628,720,405],[1444,2035,720,405],[1444,2442,720,405],[1444,3256,720,405],[3610,814,720,405],[3610,1628,720,405],[3610,2035,720,405],[3610,2442,720,405],[2888,7326,720,405],[3610,1221,720,405],[0,1221,720,405],[2888,7733,720,405],[3610,0,720,405],[3610,407,720,405],[722,2849,720,405],[722,5291,720,405],[722,4477,720,405],[722,3256,720,405],[722,3663,720,405],[722,2442,720,405],[722,4070,720,405],[0,1628,720,405],[722,4884,720,405],[722,2035,720,405],[1444,6105,720,405],[1444,6512,720,405],[2166,407,720,405],[1444,5291,720,405],[1444,5698,720,405],[1444,7733,720,405],[1444,6919,720,405],[1444,7326,720,405],[0,2035,720,405],[2166,0,720,405],[3610,4477,720,405],[3610,5291,720,405],[3610,5698,720,405],[3610,2849,720,405],[3610,4884,720,405],[3610,6105,720,405],[3610,3256,720,405],[3610,4070,720,405],[3610,3663,720,405],[2166,2035,720,405],[1444,0,720,405],[722,6512,720,405],[1444,407,720,405],[1444,814,720,405],[722,7733,720,405],[722,5698,720,405],[722,7326,720,405],[722,6919,720,405],[722,6105,720,405],[722,0,720,405],[2166,3256,720,405],[0,3663,720,405],[0,6512,720,405],[0,6919,720,405],[0,2849,720,405],[0,7326,720,405],[0,7733,720,405],[0,5291,720,405],[722,407,720,405],[722,814,720,405],[0,4884,720,405],[2166,2442,720,405],[722,1221,720,405],[722,1628,720,405],[0,3256,720,405],[0,5698,720,405],[0,4070,720,405],[0,4477,720,405],[0,6105,720,405],[2888,4884,720,405],[2888,5698,720,405],[2888,6105,720,405]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.HISNAMEISJOHNCENA_1_0 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_1 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_10 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_100 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_101 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_102 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_103 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_104 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_105 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_106 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_107 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_108 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_109 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_11 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_110 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_111 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_112 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_113 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_114 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_115 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_12 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_13 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_14 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_15 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_16 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_17 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_18 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_19 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_2 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_20 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_21 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_22 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_23 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_24 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_25 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_26 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_27 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_28 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_29 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_3 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_30 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_31 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_32 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_33 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_34 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_35 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_36 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_37 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_38 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_39 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_4 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_40 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_41 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_42 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_43 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_44 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_45 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_46 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_47 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_48 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_49 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_5 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_50 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_51 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_52 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_53 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_54 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_55 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_56 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_57 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_58 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_59 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_6 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_60 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_61 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_62 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_63 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_64 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_65 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_66 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_67 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_68 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_69 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_7 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_70 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_71 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_72 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_73 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_74 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_75 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_76 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_77 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_78 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_79 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_8 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_80 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_81 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_82 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_83 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_84 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_85 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_86 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_87 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_88 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_89 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_9 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_90 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_91 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_92 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_93 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_94 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_95 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_96 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_97 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_98 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.HISNAMEISJOHNCENA_1_99 = function() {
	this.spriteSheet = ss["TipAlert_atlas_"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.TipperText = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.followerText = new cjs.Text("NEW FOLLOWER", "64px 'Roboto Lt'", "#FFFFFF");
	this.followerText.name = "followerText";
	this.followerText.textAlign = "center";
	this.followerText.lineHeight = 79;
	this.followerText.lineWidth = 634;
	this.followerText.parent = this;
	this.followerText.setTransform(0.1,-38.4);
	this.followerText.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.followerText).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-321.9,-43.4,651,94);


(lib.TipperNote = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.noteText = new cjs.Text("NEW FOLLOWER Ass Asdsadaskdasjkhdjaskdhajkhdsjkadhajksdhasjkdhasjkdhasjkdhajkhdjkashdsjkahdajksdhajkhdajkdhajk", "24px 'Roboto Lt'", "#FFFFFF");
	this.noteText.name = "noteText";
	this.noteText.textAlign = "center";
	this.noteText.lineHeight = 31;
	this.noteText.lineWidth = 634;
	this.noteText.parent = this;
	this.noteText.setTransform(0.1,-38.4);
	this.noteText.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,0);

	this.timeline.addTween(cjs.Tween.get(this.noteText).wait(1));

}).prototype = getMCSymbolPrototype(lib.TipperNote, new cjs.Rectangle(-319.9,-41.4,645,102), null);


(lib.ThanksForTipping = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Thanks For Tipping", "50px 'Roboto Lt'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 62;
	this.text.lineWidth = 492;
	this.text.parent = this;
	this.text.setTransform(247.9,-30);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.ThanksForTipping, new cjs.Rectangle(-6,-38,513,82), null);


(lib.HISNAMEISJOHNCENA_1_gif = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HISNAMEISJOHNCENA_1_0();
	this.instance.parent = this;

	this.instance_1 = new lib.HISNAMEISJOHNCENA_1_1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.HISNAMEISJOHNCENA_1_2();
	this.instance_2.parent = this;

	this.instance_3 = new lib.HISNAMEISJOHNCENA_1_3();
	this.instance_3.parent = this;

	this.instance_4 = new lib.HISNAMEISJOHNCENA_1_4();
	this.instance_4.parent = this;

	this.instance_5 = new lib.HISNAMEISJOHNCENA_1_5();
	this.instance_5.parent = this;

	this.instance_6 = new lib.HISNAMEISJOHNCENA_1_6();
	this.instance_6.parent = this;

	this.instance_7 = new lib.HISNAMEISJOHNCENA_1_7();
	this.instance_7.parent = this;

	this.instance_8 = new lib.HISNAMEISJOHNCENA_1_8();
	this.instance_8.parent = this;

	this.instance_9 = new lib.HISNAMEISJOHNCENA_1_9();
	this.instance_9.parent = this;

	this.instance_10 = new lib.HISNAMEISJOHNCENA_1_10();
	this.instance_10.parent = this;

	this.instance_11 = new lib.HISNAMEISJOHNCENA_1_11();
	this.instance_11.parent = this;

	this.instance_12 = new lib.HISNAMEISJOHNCENA_1_12();
	this.instance_12.parent = this;

	this.instance_13 = new lib.HISNAMEISJOHNCENA_1_13();
	this.instance_13.parent = this;

	this.instance_14 = new lib.HISNAMEISJOHNCENA_1_14();
	this.instance_14.parent = this;

	this.instance_15 = new lib.HISNAMEISJOHNCENA_1_15();
	this.instance_15.parent = this;

	this.instance_16 = new lib.HISNAMEISJOHNCENA_1_16();
	this.instance_16.parent = this;

	this.instance_17 = new lib.HISNAMEISJOHNCENA_1_17();
	this.instance_17.parent = this;

	this.instance_18 = new lib.HISNAMEISJOHNCENA_1_18();
	this.instance_18.parent = this;

	this.instance_19 = new lib.HISNAMEISJOHNCENA_1_19();
	this.instance_19.parent = this;

	this.instance_20 = new lib.HISNAMEISJOHNCENA_1_20();
	this.instance_20.parent = this;

	this.instance_21 = new lib.HISNAMEISJOHNCENA_1_21();
	this.instance_21.parent = this;

	this.instance_22 = new lib.HISNAMEISJOHNCENA_1_22();
	this.instance_22.parent = this;

	this.instance_23 = new lib.HISNAMEISJOHNCENA_1_23();
	this.instance_23.parent = this;

	this.instance_24 = new lib.HISNAMEISJOHNCENA_1_24();
	this.instance_24.parent = this;

	this.instance_25 = new lib.HISNAMEISJOHNCENA_1_25();
	this.instance_25.parent = this;

	this.instance_26 = new lib.HISNAMEISJOHNCENA_1_26();
	this.instance_26.parent = this;

	this.instance_27 = new lib.HISNAMEISJOHNCENA_1_27();
	this.instance_27.parent = this;

	this.instance_28 = new lib.HISNAMEISJOHNCENA_1_28();
	this.instance_28.parent = this;

	this.instance_29 = new lib.HISNAMEISJOHNCENA_1_29();
	this.instance_29.parent = this;

	this.instance_30 = new lib.HISNAMEISJOHNCENA_1_30();
	this.instance_30.parent = this;

	this.instance_31 = new lib.HISNAMEISJOHNCENA_1_31();
	this.instance_31.parent = this;

	this.instance_32 = new lib.HISNAMEISJOHNCENA_1_32();
	this.instance_32.parent = this;

	this.instance_33 = new lib.HISNAMEISJOHNCENA_1_33();
	this.instance_33.parent = this;

	this.instance_34 = new lib.HISNAMEISJOHNCENA_1_34();
	this.instance_34.parent = this;

	this.instance_35 = new lib.HISNAMEISJOHNCENA_1_35();
	this.instance_35.parent = this;

	this.instance_36 = new lib.HISNAMEISJOHNCENA_1_36();
	this.instance_36.parent = this;

	this.instance_37 = new lib.HISNAMEISJOHNCENA_1_37();
	this.instance_37.parent = this;

	this.instance_38 = new lib.HISNAMEISJOHNCENA_1_38();
	this.instance_38.parent = this;

	this.instance_39 = new lib.HISNAMEISJOHNCENA_1_39();
	this.instance_39.parent = this;

	this.instance_40 = new lib.HISNAMEISJOHNCENA_1_40();
	this.instance_40.parent = this;

	this.instance_41 = new lib.HISNAMEISJOHNCENA_1_41();
	this.instance_41.parent = this;

	this.instance_42 = new lib.HISNAMEISJOHNCENA_1_42();
	this.instance_42.parent = this;

	this.instance_43 = new lib.HISNAMEISJOHNCENA_1_43();
	this.instance_43.parent = this;

	this.instance_44 = new lib.HISNAMEISJOHNCENA_1_44();
	this.instance_44.parent = this;

	this.instance_45 = new lib.HISNAMEISJOHNCENA_1_45();
	this.instance_45.parent = this;

	this.instance_46 = new lib.HISNAMEISJOHNCENA_1_46();
	this.instance_46.parent = this;

	this.instance_47 = new lib.HISNAMEISJOHNCENA_1_47();
	this.instance_47.parent = this;

	this.instance_48 = new lib.HISNAMEISJOHNCENA_1_48();
	this.instance_48.parent = this;

	this.instance_49 = new lib.HISNAMEISJOHNCENA_1_49();
	this.instance_49.parent = this;

	this.instance_50 = new lib.HISNAMEISJOHNCENA_1_50();
	this.instance_50.parent = this;

	this.instance_51 = new lib.HISNAMEISJOHNCENA_1_51();
	this.instance_51.parent = this;

	this.instance_52 = new lib.HISNAMEISJOHNCENA_1_52();
	this.instance_52.parent = this;

	this.instance_53 = new lib.HISNAMEISJOHNCENA_1_53();
	this.instance_53.parent = this;

	this.instance_54 = new lib.HISNAMEISJOHNCENA_1_54();
	this.instance_54.parent = this;

	this.instance_55 = new lib.HISNAMEISJOHNCENA_1_55();
	this.instance_55.parent = this;

	this.instance_56 = new lib.HISNAMEISJOHNCENA_1_56();
	this.instance_56.parent = this;

	this.instance_57 = new lib.HISNAMEISJOHNCENA_1_57();
	this.instance_57.parent = this;

	this.instance_58 = new lib.HISNAMEISJOHNCENA_1_58();
	this.instance_58.parent = this;

	this.instance_59 = new lib.HISNAMEISJOHNCENA_1_59();
	this.instance_59.parent = this;

	this.instance_60 = new lib.HISNAMEISJOHNCENA_1_60();
	this.instance_60.parent = this;

	this.instance_61 = new lib.HISNAMEISJOHNCENA_1_61();
	this.instance_61.parent = this;

	this.instance_62 = new lib.HISNAMEISJOHNCENA_1_62();
	this.instance_62.parent = this;

	this.instance_63 = new lib.HISNAMEISJOHNCENA_1_63();
	this.instance_63.parent = this;

	this.instance_64 = new lib.HISNAMEISJOHNCENA_1_64();
	this.instance_64.parent = this;

	this.instance_65 = new lib.HISNAMEISJOHNCENA_1_65();
	this.instance_65.parent = this;

	this.instance_66 = new lib.HISNAMEISJOHNCENA_1_66();
	this.instance_66.parent = this;

	this.instance_67 = new lib.HISNAMEISJOHNCENA_1_67();
	this.instance_67.parent = this;

	this.instance_68 = new lib.HISNAMEISJOHNCENA_1_68();
	this.instance_68.parent = this;

	this.instance_69 = new lib.HISNAMEISJOHNCENA_1_69();
	this.instance_69.parent = this;

	this.instance_70 = new lib.HISNAMEISJOHNCENA_1_70();
	this.instance_70.parent = this;

	this.instance_71 = new lib.HISNAMEISJOHNCENA_1_71();
	this.instance_71.parent = this;

	this.instance_72 = new lib.HISNAMEISJOHNCENA_1_72();
	this.instance_72.parent = this;

	this.instance_73 = new lib.HISNAMEISJOHNCENA_1_73();
	this.instance_73.parent = this;

	this.instance_74 = new lib.HISNAMEISJOHNCENA_1_74();
	this.instance_74.parent = this;

	this.instance_75 = new lib.HISNAMEISJOHNCENA_1_75();
	this.instance_75.parent = this;

	this.instance_76 = new lib.HISNAMEISJOHNCENA_1_76();
	this.instance_76.parent = this;

	this.instance_77 = new lib.HISNAMEISJOHNCENA_1_77();
	this.instance_77.parent = this;

	this.instance_78 = new lib.HISNAMEISJOHNCENA_1_78();
	this.instance_78.parent = this;

	this.instance_79 = new lib.HISNAMEISJOHNCENA_1_79();
	this.instance_79.parent = this;

	this.instance_80 = new lib.HISNAMEISJOHNCENA_1_80();
	this.instance_80.parent = this;

	this.instance_81 = new lib.HISNAMEISJOHNCENA_1_81();
	this.instance_81.parent = this;

	this.instance_82 = new lib.HISNAMEISJOHNCENA_1_82();
	this.instance_82.parent = this;

	this.instance_83 = new lib.HISNAMEISJOHNCENA_1_83();
	this.instance_83.parent = this;

	this.instance_84 = new lib.HISNAMEISJOHNCENA_1_84();
	this.instance_84.parent = this;

	this.instance_85 = new lib.HISNAMEISJOHNCENA_1_85();
	this.instance_85.parent = this;

	this.instance_86 = new lib.HISNAMEISJOHNCENA_1_86();
	this.instance_86.parent = this;

	this.instance_87 = new lib.HISNAMEISJOHNCENA_1_87();
	this.instance_87.parent = this;

	this.instance_88 = new lib.HISNAMEISJOHNCENA_1_88();
	this.instance_88.parent = this;

	this.instance_89 = new lib.HISNAMEISJOHNCENA_1_89();
	this.instance_89.parent = this;

	this.instance_90 = new lib.HISNAMEISJOHNCENA_1_90();
	this.instance_90.parent = this;

	this.instance_91 = new lib.HISNAMEISJOHNCENA_1_91();
	this.instance_91.parent = this;

	this.instance_92 = new lib.HISNAMEISJOHNCENA_1_92();
	this.instance_92.parent = this;

	this.instance_93 = new lib.HISNAMEISJOHNCENA_1_93();
	this.instance_93.parent = this;

	this.instance_94 = new lib.HISNAMEISJOHNCENA_1_94();
	this.instance_94.parent = this;

	this.instance_95 = new lib.HISNAMEISJOHNCENA_1_95();
	this.instance_95.parent = this;

	this.instance_96 = new lib.HISNAMEISJOHNCENA_1_96();
	this.instance_96.parent = this;

	this.instance_97 = new lib.HISNAMEISJOHNCENA_1_97();
	this.instance_97.parent = this;

	this.instance_98 = new lib.HISNAMEISJOHNCENA_1_98();
	this.instance_98.parent = this;

	this.instance_99 = new lib.HISNAMEISJOHNCENA_1_99();
	this.instance_99.parent = this;

	this.instance_100 = new lib.HISNAMEISJOHNCENA_1_100();
	this.instance_100.parent = this;

	this.instance_101 = new lib.HISNAMEISJOHNCENA_1_101();
	this.instance_101.parent = this;

	this.instance_102 = new lib.HISNAMEISJOHNCENA_1_102();
	this.instance_102.parent = this;

	this.instance_103 = new lib.HISNAMEISJOHNCENA_1_103();
	this.instance_103.parent = this;

	this.instance_104 = new lib.HISNAMEISJOHNCENA_1_104();
	this.instance_104.parent = this;

	this.instance_105 = new lib.HISNAMEISJOHNCENA_1_105();
	this.instance_105.parent = this;

	this.instance_106 = new lib.HISNAMEISJOHNCENA_1_106();
	this.instance_106.parent = this;

	this.instance_107 = new lib.HISNAMEISJOHNCENA_1_107();
	this.instance_107.parent = this;

	this.instance_108 = new lib.HISNAMEISJOHNCENA_1_108();
	this.instance_108.parent = this;

	this.instance_109 = new lib.HISNAMEISJOHNCENA_1_109();
	this.instance_109.parent = this;

	this.instance_110 = new lib.HISNAMEISJOHNCENA_1_110();
	this.instance_110.parent = this;

	this.instance_111 = new lib.HISNAMEISJOHNCENA_1_111();
	this.instance_111.parent = this;

	this.instance_112 = new lib.HISNAMEISJOHNCENA_1_112();
	this.instance_112.parent = this;

	this.instance_113 = new lib.HISNAMEISJOHNCENA_1_113();
	this.instance_113.parent = this;

	this.instance_114 = new lib.HISNAMEISJOHNCENA_1_114();
	this.instance_114.parent = this;

	this.instance_115 = new lib.HISNAMEISJOHNCENA_1_115();
	this.instance_115.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,720,405);


// stage content:
(lib.TipAlert = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{start:2,stop:374});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.showAlert = function(tipper, amount, note) {
			this.tipper = tipper;
			this.amount = amount;
			this.note = note;
			this.gotoAndPlay("start");
		}
	}
	this.frame_2 = function() {
		playSound("HISNAMEISJOHNCENA_1wav");
	}
	this.frame_50 = function() {
		this.tipperText.followerText.text = "$" + this.amount + " from " + this.tipper + "!";
		this.noteText.noteText.text = this.note;
	}
	this.frame_374 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(48).call(this.frame_50).wait(324).call(this.frame_374).wait(1));

	// Layer 7
	this.instance = new lib.ThanksForTipping();
	this.instance.parent = this;
	this.instance.setTransform(400.1,32,0.656,0.656,0,0,0,247.9,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).to({_off:true},324).wait(1));

	// Layer 3
	this.noteText = new lib.TipperNote();
	this.noteText.parent = this;
	this.noteText.setTransform(393,202.1);
	this.noteText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.noteText).wait(50).to({_off:false},0).to({_off:true},324).wait(1));

	// Layer 6
	this.tipperText = new lib.TipperText();
	this.tipperText.parent = this;
	this.tipperText.setTransform(400.8,98.6,1,1,0,0,0,0.8,-1.4);
	this.tipperText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tipperText).wait(50).to({_off:false},0).to({_off:true},324).wait(1));

	// Layer 4
	this.instance_1 = new lib.HISNAMEISJOHNCENA_1_gif();
	this.instance_1.parent = this;
	this.instance_1.setTransform(400,202.5,1,1,0,0,0,360,202.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(67).to({alpha:0},45).to({_off:true},1).wait(260));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.498)").s().p("Eg4PAXcMAAAgu3MBwfAAAMAAAAu3g");
	this.shape.setTransform(400,150);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).to({_off:true},372).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 800,
	height: 405,
	fps: 30,
	color: "#000000",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/TipAlert_atlas_.png", id:"TipAlert_atlas_"},
		{src:"sounds/HISNAMEISJOHNCENA_1wav.mp3", id:"HISNAMEISJOHNCENA_1wav"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;