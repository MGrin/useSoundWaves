(this["webpackJsonpuse-sound-waves-example"]=this["webpackJsonpuse-sound-waves-example"]||[]).push([[0],{3:function(e,n,t){e.exports=t(9)},4:function(e,n,t){},9:function(e,n,t){"use strict";t.r(n);t(4);var c=t(0),r=t.n(c),a=t(2),o=t.n(a),u=window.AudioContext?new window.AudioContext:void 0,s=function(){var e=Object(c.useState)(!1),n=e[0],t=e[1],r=Object(c.useState)(),a=r[0],o=r[1],s=Object(c.useState)(),y=s[0],i=s[1];Object(c.useEffect)((function(){u||o(new Error("No AudioContext is available."))}),[]);var d=Object(c.useRef)(),f=Object(c.useCallback)((function(){t(!1),i(void 0),d.current&&(d.current.stop(),d.current=void 0)}),[]),l=Object(c.useCallback)((function(e){u&&(n&&f(),d.current=u.createOscillator(),d.current.type=e.type||"sine",d.current.frequency.setValueAtTime(e.frequency,u.currentTime),d.current.connect(u.destination),d.current.start(),t(!0),i(e))}),[f,n]);return{isPlaying:n,currentSound:y,oscillator:d.current,play:l,stop:f,error:a}},y=function(e){var n=e.frequency,t=e.secondary,a=e.keyboardKey,o=s(),u=o.isPlaying,y=o.play,i=o.stop,d=Object(c.useCallback)((function(){y({frequency:n})}),[y,n]),f=Object(c.useCallback)((function(){i()}),[i]);return Object(c.useEffect)((function(){var e=function(e){e.key===a&&d()},n=function(e){e.key===a&&f()};return document.addEventListener("keydown",e),document.addEventListener("keyup",n),function(){document.removeEventListener("keydown",e),document.removeEventListener("keyup",n)}}),[d,f,a]),r.a.createElement("div",{className:"key ".concat(u?"active":""," ").concat(t?"secondary":""),onMouseDown:d,onMouseUp:f},r.a.createElement("span",{className:"button"},a))},i=[{name:"A4",frequency:440,secondary:!1,key:"a"},{name:"A4A\u266f4/B\u266d4",frequency:466.1638,secondary:!0,key:"w"},{name:"B4",frequency:493.8833,secondary:!1,key:"s"},{name:"C5",frequency:523.2511,secondary:!1,key:"d"},{name:"C\u266f5/D\u266d5",frequency:554.3653,secondary:!0,key:"e"},{name:"D5",frequency:587.3295,secondary:!1,key:"f"},{name:"D\u266f5/E\u266d5",frequency:622.254,secondary:!0,key:"r"},{name:"E5",frequency:659.2551,secondary:!1,key:"g"},{name:"F5",frequency:698.4565,secondary:!1,key:"h"}],d=function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"keyboard"},i.map((function(e){return r.a.createElement(y,Object.assign({},e,{keyboardKey:e.key,key:e.key}))}))))};o.a.render(r.a.createElement(d,null),document.getElementById("root"))}},[[3,1,2]]]);
//# sourceMappingURL=main.885d8d0d.chunk.js.map