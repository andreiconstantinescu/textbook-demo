define(["app","./lib/socket.io"],function(App){function getSessionId(){var key="lfa_sessionId_"+document.title,sessionId=App.storage.getItem(key);return sessionId||(sessionId="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(c){var r=16*Math.random()|0,v="x"===c?r:3&r|8;return v.toString(16)}),App.storage.setItem(key,sessionId)),sessionId}function sendWS(obj){function sendQueue(){if(messageQueue.length&&ws&&ws.readyState!==WebSocket.CONNECTING){if(ws.readyState!==WebSocket.OPEN)return void reopenConnection();for(var i=0,n=messageQueue.length;n>i;i++)ws.send(JSON.stringify(messageQueue[i]));messageQueue.length=0}}function reopenConnection(){ws=null,messageQueue.length&&(timerRunning||(timerRunning=!0,setTimeout(function(){setUpConnection(),timerRunning=!1},1e4)))}function setUpConnection(){ws||(ws=new WebSocket("ws://"+domain),ws.onopen=sendQueue,ws.onerror=reopenConnection)}messageQueue.push(obj),setUpConnection(),sendQueue()}function sendLog(key,data){sendWS({userAgent:window.navigator.userAgent,title:document.title,sessionId:getSessionId(),clientTime:new Date,key:key,data:data})}var domain="lfa-static.herokuapp.com",ws=null,messageQueue=[],timerRunning=!1;window.App.on("static",function(key,data){sendLog(key,data)}),window.App.book.on("render",function(opts){sendLog("navigate",{route:opts.chapter})})});