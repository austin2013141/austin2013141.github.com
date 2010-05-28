// Created by iWeb 3.0 local-build-20100528

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,98),url:'Concordia_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Concordia_files/stroke_1.png'},{rect:new IWRect(2,-2,245,4),url:'Concordia_files/stroke_2.png'},{rect:new IWRect(247,-2,5,4),url:'Concordia_files/stroke_3.png'},{rect:new IWRect(247,2,5,98),url:'Concordia_files/stroke_4.png'},{rect:new IWRect(247,100,5,4),url:'Concordia_files/stroke_5.png'},{rect:new IWRect(2,100,245,4),url:'Concordia_files/stroke_6.png'},{rect:new IWRect(-2,100,4,4),url:'Concordia_files/stroke_7.png'}],new IWSize(249,102))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Concordia_files/ConcordiaMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id5');applyEffects()}
function onPageUnload()
{Widget.onunload();}
