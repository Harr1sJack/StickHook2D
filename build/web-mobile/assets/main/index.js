System.register("chunks:///_virtual/Anchor.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Player.ts"],(function(t){var o,n,e,i,r,a,c,l,s,h,p,d;return{setters:[function(t){o=t.applyDecoratedDescriptor,n=t.inheritsLoose,e=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,c=t.Node,l=t.BoxCollider2D,s=t.Contact2DType,h=t.RigidBody2D,p=t.Component},function(t){d=t.Player}],execute:function(){var u,g,C,y,f;r._RF.push({},"860cfENmyJJa5Lzah8DuyXt","Anchor",void 0);var m=a.ccclass,v=a.property;t("Anchor",(u=m("Anchor"),g=v({type:c}),u((f=o((y=function(t){function o(){for(var o,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return o=t.call.apply(t,[this].concat(r))||this,e(o,"target",f,i(o)),o.boxCollider=void 0,o}n(o,t);var r=o.prototype;return r.onLoad=function(){this.boxCollider=this.getComponent(l),this.boxCollider.on(s.BEGIN_CONTACT,this.onBeginContact,this),this.boxCollider.on(s.END_CONTACT,this.onEndContact,this)},r.onBeginContact=function(t,o,n){o.node.getComponent(d)&&(o.node.getComponent(d).anchor=this.getComponent(h),this.target.position=t.node.position,this.target.active=!0,console.log(this.node.name+"enter"))},r.onEndContact=function(t,o,n){if(o.node.getComponent(d)){var e=o.node.getComponent(d);e.anchor==this.getComponent(h)&&(e.anchor=null,this.target.active=!1,console.log(this.node.name+"exit"))}},o}(p)).prototype,"target",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=y))||C));r._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var e,t,o,a,r,i,c,s;return{setters:[function(n){e=n.inheritsLoose},function(n){t=n.cclegacy,o=n._decorator,a=n.director,r=n.find,i=n.Sprite,c=n.UITransform,s=n.Component}],execute:function(){var u,l;t._RF.push({},"2241esknTpNM4C2g9u2m7tN","GameManager",void 0);var p=o.ccclass;o.property,n("GameManager",p("GameManager")(((l=function(n){function t(){for(var e,t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return(e=n.call.apply(n,[this].concat(o))||this).BG=void 0,e}e(t,n);var o=t.prototype;return o.onLoad=function(){null==t.instance?t.instance=this:this.node.destroy(),a.addPersistRootNode(t.instance.node),this.SetBG()},o.Play=function(){a.loadScene("Level1")},o.SetBG=function(){this.BG=r("Canvas/BG").getComponent(i);var n=r("Canvas").getComponent(c);this.BG.getComponent(c).contentSize.set(n.contentSize.x,n.contentSize.y)},t}(s)).instance=null,u=l))||u);t._RF.pop()}}}));

System.register("chunks:///_virtual/Level1Manager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameManager.ts","./Player.ts"],(function(e){var n,t,o,i,r,a,l,c,u,s,p,y,d,f,g;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,o=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,l=e.BoxCollider2D,c=e.Node,u=e.Contact2DType,s=e.find,p=e.UITransform,y=e.director,d=e.Component},function(e){f=e.GameManager},function(e){g=e.Player}],execute:function(){var h,C,b,v,m,z,L,G,B,M,O,T,S;r._RF.push({},"3e41dnGn/tL1ITMbdGlKLy9","Level1Manager",void 0);var w=a.ccclass,D=a.property;e("Level1Manager",(h=w("Level1Manager"),C=D({type:l}),b=D({type:l}),v=D({type:c}),m=D({type:c}),z=D({type:g}),h((B=n((G=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return n=e.call.apply(e,[this].concat(r))||this,o(n,"finishCollider",B,i(n)),o(n,"boundaryCollider",M,i(n)),o(n,"youWon",O,i(n)),o(n,"gameOver",T,i(n)),o(n,"player",S,i(n)),n}t(n,e);var r=n.prototype;return r.onLoad=function(){this.boundaryCollider.on(u.END_CONTACT,this.onEndContact,this),this.finishCollider.on(u.BEGIN_CONTACT,this.onBeginContact,this),f.instance.SetBG(),this.SetBoundary()},r.SetBoundary=function(){var e=s("Canvas").getComponent(p);this.boundaryCollider.size.x=e.contentSize.x,this.boundaryCollider.size.y=e.contentSize.y},r.onBeginContact=function(e,n,t){n.node.getComponent(g)&&this.Won()},r.onEndContact=function(e,n,t){n.getComponent(g)&&this.GameOver()},r.Won=function(){console.log("Won"),this.youWon.active=!0},r.GameOver=function(){console.log("GameOver"),this.gameOver.active=!0},r.Restart=function(){y.loadScene("Level1")},n}(d)).prototype,"finishCollider",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=n(G.prototype,"boundaryCollider",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=n(G.prototype,"youWon",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=n(G.prototype,"gameOver",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=n(G.prototype,"player",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=G))||L));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Anchor.ts","./GameManager.ts","./Level1Manager.ts","./Player.ts"],(function(){return{setters:[null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Player.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var t,n,o,e,r,c,s,a,l,h,d,p,u,y;return{setters:[function(i){t=i.applyDecoratedDescriptor,n=i.inheritsLoose,o=i.initializerDefineProperty,e=i.assertThisInitialized},function(i){r=i.cclegacy,c=i._decorator,s=i.Node,a=i.RigidBody2D,l=i.CircleCollider2D,h=i.DistanceJoint2D,d=i.input,p=i.Input,u=i.Vec3,y=i.Component}],execute:function(){var g,f,v,S,T;r._RF.push({},"a3455Wrms9JSZ9xi2Tf9Efp","Player",void 0);var C=c.ccclass,m=c.property,D=function(i){return i[i.idle=0]="idle",i[i.Swinging=1]="Swinging",i}(D||{});i("Player",(g=C("Player"),f=m({type:s}),g((T=t((S=function(i){function t(){for(var t,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return t=i.call.apply(i,[this].concat(r))||this,o(t,"rope",T,e(t)),t.anchor=void 0,t.rigidBody=void 0,t.distanceJoint=void 0,t.circleCollider=void 0,t.playerState=D.idle,t.crntAnchor=void 0,t}n(t,i);var r=t.prototype;return r.onLoad=function(){this.rigidBody=this.getComponent(a),this.circleCollider=this.getComponent(l),this.distanceJoint=this.getComponent(h),d.on(p.EventType.TOUCH_START,this.TouchStart,this),d.on(p.EventType.TOUCH_END,this.TouchEnd,this)},r.update=function(i){this.playerState,D.Swinging},r.TouchStart=function(i){this.HookIn()},r.TouchEnd=function(i){this.ReleaseHook()},r.HookIn=function(){null!=this.anchor&&(this.crntAnchor=this.anchor.node,this.distanceJoint.connectedBody=this.anchor,this.distanceJoint.enabled=!0,this.playerState=D.Swinging)},r.SwingRope=function(i){this.rope.position=this.crntAnchor.position.add(this.node.position).divide3f(2,2,2),console.log(u.dot(this.crntAnchor.position.normalize(),this.node.position.normalize()))},r.ReleaseHook=function(){this.crntAnchor=null,this.distanceJoint.connectedBody=null,this.distanceJoint.enabled=!1,this.playerState=D.idle},t}(y)).prototype,"rope",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=S))||v));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});