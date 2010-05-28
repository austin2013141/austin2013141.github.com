// Created by iWeb 3.0 local-build-20100528

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,221),url:'Hong_Kong_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Hong_Kong_files/stroke_1.png'},{rect:new IWRect(2,-2,296,4),url:'Hong_Kong_files/stroke_2.png'},{rect:new IWRect(298,-2,4,4),url:'Hong_Kong_files/stroke_3.png'},{rect:new IWRect(298,2,4,221),url:'Hong_Kong_files/stroke_4.png'},{rect:new IWRect(298,223,4,4),url:'Hong_Kong_files/stroke_5.png'},{rect:new IWRect(2,223,296,4),url:'Hong_Kong_files/stroke_6.png'},{rect:new IWRect(-2,223,4,4),url:'Hong_Kong_files/stroke_7.png'}],new IWSize(300,225))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Hong_Kong_files/Hong_KongMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
