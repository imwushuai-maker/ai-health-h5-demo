(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();function Ka(e={}){const t=e.t||(a=>a);return{async initialize(){await Wt(500)},async startMeasurement({onProgress:a}){const s=[[12,t("wmea.CAMERA_PERMISSION_GRANTED")],[24,t("wmea.NOT_CENTERED")],[38,t("prepare.goodLightingBody")],[52,t("wmea.INTERMEDIATE_RESULTS")],[68,t("wmea.HOLD_STILL")],[84,t("scan.progressAnalyzing")],[100,t("wmea.MEASUREMENT_COMPLETED")]];for(const[i,n]of s)a?.(i,n),await Wt(520);return{heartRate:72,bloodPressure:"126/82",hrv:43,stressIndex:e.getLanguage?.()==="zh-CN"?"中等":"Medium",channels:{HR_BPM:[72e4],BP_SYSTOLIC:[126e4],BP_DIASTOLIC:[82e4],HRV_SDNN:[43e4],HEALTH_SCORE:[82e4],BP_CVD:[11e4],BP_STROKE:[7e4],BP_HEART_ATTACK:[9e4],BP_RPP:[907200],DBT_RISK_PROB:[12e4],HPT_RISK_PROB:[18e4],FLD_RISK_PROB:[9e4],OVERALL_METABOLIC_RISK_PROB:[14e4],HDLTC_RISK_PROB:[16e4],MFBG_RISK_PROB:[11e4],HBA1C_RISK_PROB:[1e5],PHYSIO_SCORE:[78e4]}}}}}function Wt(e){return new Promise(t=>setTimeout(t,e))}var ja="1.0.0";const Q={RESULTS:"results",ERROR:"error",APPEVENT:"appEvent",CANCELLED:"cancelled",DESTROYED:"destroyed",LOGS:"logs"};var Ya=(e=>(e.measurement="Measurement",e.collector="Collector",e.camera="Camera",e.app="App",e))(Ya||{});const Gt={APP_LOADED:"APP_LOADED",ASSETS_DOWNLOADED:"ASSETS_DOWNLOADED"},Vt={APP_LOADED:{event:Gt.APP_LOADED},ASSETS_DOWNLOADED:{event:Gt.ASSETS_DOWNLOADED}},pe={DESTROY:"destroy",CANCEL:"cancel",SET_THEME:"setTheme",SET_LANGUAGE:"setLanguage",GET_LOGS:"getLogs",SET_APP_SETTINGS:"setAppSettings"};var Xa=(e=>(e.CAMERA_PERMISSION_DENIED="CAMERA_PERMISSION_DENIED",e.WORKER_ERROR="WORKER_ERROR",e.PROFILE_INFO_NOT_SET="PROFILE_INFO_NOT_SET",e.INVALID_PROFILE="INVALID_PROFILE",e.NO_DEVICES_FOUND="NO_DEVICES_FOUND",e.PAGE_NOT_VISIBLE="PAGE_NOT_VISIBLE",e.CAMERA_START_FAILED="CAMERA_START_FAILED",e.MEASUREMENT_LOW_SNR="MEASUREMENT_LOW_SNR",e.COLLECTOR="COLLECTOR",e.FACE_NONE="FACE_NONE",e.WEBSOCKET_DISCONNECTED="WEBSOCKET_DISCONNECTED",e.MEASUREMENT_PREPARE_FAILED="MEASUREMENT_PREPARE_FAILED",e.INVALID_MEASUREMENT_OPTIONS="INVALID_MEASUREMENT_OPTIONS",e.ASSET_DOWNLOAD_FAILED="ASSET_DOWNLOAD_FAILED",e))(Xa||{}),ha="0.1.0-beta.13",xe=(e=>(e.DELETE="DELETE",e.GET="GET",e.PATCH="PATCH",e.POST="POST",e.PUT="PUT",e.CONNECT="CONNECT",e))(xe||{}),ue=(e=>(e.ON_BEFORE_REST_CALL_ERROR="ON_BEFORE_REST_CALL_ERROR",e))(ue||{});const Kt=typeof DedicatedWorkerGlobalScope<"u",ct=async({baseUrl:e,urlFragment:t,method:a,headers:s,data:i},n)=>{const r=`${e}/${t}`;let l={Code:"",Message:""};try{const c=await fetch(r,{method:a,cache:"no-store",credentials:"include",headers:s,...i!=null&&{body:JSON.stringify(i)}}),f=c.headers.get("content-type"),g=c.status.toString();l={Code:"UNSUPPORTED_RESPONSE_CONTENT_TYPE",Message:"UNSUPPORTED_RESPONSE_CONTENT_TYPE"},g==="503"&&(l={Code:"SERVICE_UNAVAILABLE",Message:"Service unavailable"}),g==="429"&&(l={Code:"TOO_MANY_REQUESTS",Message:"Too many requests"}),f!=null&&(f.startsWith("application/json;")&&(l=await c.json()),f.startsWith("text/plain;")&&(l={data:await c.text()}));let T=c.headers;if(Kt){const w={};c.headers.forEach((S,k)=>{w[k]=S}),T=w}try{n(g,g==="200"?void 0:l)}catch(w){console.error("Error running onAfterRESTCall callback",w)}return{status:g,headers:T,body:l}}catch(c){return c instanceof SyntaxError?l={Code:"SYNTAX_ERROR",Message:"SYNTAX_ERROR"}:l={Code:"UNEXPECTED_ERROR",Message:"UNEXPECTED_ERROR"},{status:"UNKNOWN",headers:Kt?{}:new Headers,body:l}}},je=()=>new Headers({"Content-Type":"application/json"});var qa=Object.defineProperty,Ja=(e,t,a)=>t in e?qa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Za=(e,t,a)=>Ja(e,t+"",a);class Ot{constructor(t){Za(this,"parent"),this.parent=t}async onBeforeRESTCall(){try{return this.parent.onBeforeRESTCall(),{Code:"SUCCESS",Message:"SUCCESS"}}catch{return{Code:ue.ON_BEFORE_REST_CALL_ERROR,Message:ue.ON_BEFORE_REST_CALL_ERROR}}}getDefaults(t){return{baseUrl:JSON.parse(this.parent.getUrl()).http.slice(0,-1),method:xe[t],headers:je()}}getHeaderWithDeviceToken(){const t=je();return t.set("Authorization",`Bearer ${this.parent.getSession().deviceToken}`),t}getHeaderWithUserToken(){const t=je();return t.set("Authorization",`Bearer ${this.parent.getSession().userToken}`),t}getHeaderWithSessionEnabled(){const t=je();return t.set("x-nura-session","true"),t}}class Qa extends Ot{async create(t,a){const{Code:s,Message:i}=await this.onBeforeRESTCall();if(s===ue.ON_BEFORE_REST_CALL_ERROR)return{status:s,body:{Code:s,Message:i},headers:new Headers};const{status:n,body:r,headers:l}=await ct({...this.getDefaults(xe.POST),headers:a==="device"?this.getHeaderWithDeviceToken():this.getHeaderWithUserToken(),urlFragment:"measurements",data:t},this.parent.onAfterRESTCall);return n==="200"&&this.parent.setSession({lastMeasurementId:r.ID}),{status:n,body:r,headers:l}}}class es extends Ot{async retrieveSdkConfigData(t,a){const{Code:s,Message:i}=await this.onBeforeRESTCall();if(s===ue.ON_BEFORE_REST_CALL_ERROR)return{status:s,body:{Code:s,Message:i},headers:new Headers};const{status:n,body:r,headers:l}=await ct({...this.getDefaults(xe.POST),headers:a==="device"?this.getHeaderWithDeviceToken():this.getHeaderWithUserToken(),urlFragment:"studies/sdkconfig",data:t},this.parent.onAfterRESTCall);return n==="200"&&this.parent.setSession({studyCfgData:r.ConfigFile,studyCfgHash:r.MD5Hash}),{status:n,body:r,headers:l}}}class ts extends Ot{async renew(t,a){const{Code:s,Message:i}=await this.onBeforeRESTCall();if(s===ue.ON_BEFORE_REST_CALL_ERROR)return{status:s,body:{Code:s,Message:i},headers:new Headers};const{status:n,body:r,headers:l}=await ct({...this.getDefaults(xe.POST),headers:a==="device"?this.getHeaderWithDeviceToken():this.getHeaderWithUserToken(),urlFragment:"auths/renew",data:t},this.parent.onAfterRESTCall);if(n==="200"){const c=r.Token,f=r.RefreshToken,g={...a==="user"&&{userToken:c,userRefreshToken:f},...a==="device"&&{deviceToken:c,deviceRefreshToken:f}};this.parent.setSession(g)}return{status:n,body:r,headers:l}}async validate(t){const{Code:a,Message:s}=await this.onBeforeRESTCall();return a===ue.ON_BEFORE_REST_CALL_ERROR?{status:a,body:{Code:a,Message:s},headers:new Headers}:await ct({...this.getDefaults(xe.GET),headers:t==="device"?this.getHeaderWithDeviceToken():this.getHeaderWithUserToken(),urlFragment:"auth/v1/validate"},this.parent.onAfterRESTCall)}}var as=Object.defineProperty,ua=e=>{throw TypeError(e)},ss=(e,t,a)=>t in e?as(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,St=(e,t,a)=>ss(e,typeof t!="symbol"?t+"":t,a),ma=(e,t,a)=>t.has(e)||ua("Cannot "+a),Tt=(e,t,a)=>(ma(e,t,"read from private field"),a?a.call(e):t.get(e)),jt=(e,t,a)=>t.has(e)?ua("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),Ye=(e,t,a,s)=>(ma(e,t,"write to private field"),t.set(e,a),a),De,ge;class is{constructor(t){jt(this,De,{http:new URL("https://api.deepaffex.ai")}),jt(this,ge),St(this,"onBeforeRESTCall"),St(this,"onAfterRESTCall"),St(this,"http"),Ye(this,ge,{deviceToken:"",deviceRefreshToken:"",userToken:"",userRefreshToken:"",deviceId:"",roleId:"",userId:"",selectedStudy:"",lastMeasurementId:"",studyCfgHash:"",studyCfgData:""}),this.http={measurements:new Qa(this),studies:new es(this),auths:new ts(this)},this.onBeforeRESTCall=t?.onBeforeRESTCall?t.onBeforeRESTCall:()=>{},this.onAfterRESTCall=t?.onAfterRESTCall?t.onAfterRESTCall:()=>{},t?.url!=null&&Ye(this,De,t.url)}static new(t){return new this(t??void 0)}getUrl(){return JSON.stringify(Tt(this,De))}setUrl(t){Ye(this,De,{http:new URL(t)})}getSession(){return Tt(this,ge)}setSession(t){const a=["deviceToken","deviceRefreshToken","userToken","userRefreshToken","deviceId","userId","roleId","selectedStudy","lastMeasurementId","studyCfgHash","studyCfgData"];Object.keys(t).every(s=>a.includes(s)&&typeof t[s]=="string")&&Ye(this,ge,{...Tt(this,ge),...t})}}De=new WeakMap,ge=new WeakMap;const rs=e=>is.new(e);var ns=Object.defineProperty,pa=e=>{throw TypeError(e)},os=(e,t,a)=>t in e?ns(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,ls=(e,t,a)=>os(e,t+"",a),cs=(e,t,a)=>t.has(e)||pa("Cannot "+a),ds=(e,t,a)=>t.has(e)?pa("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),kt=(e,t,a)=>(cs(e,t,"access private method"),a),Ie,Nt,ga;let fa=e=>new Int8Array(e);class hs extends EventTarget{constructor(){super(...arguments),ds(this,Ie),ls(this,"canDecompress",!1)}static init(){return new this}dispatch(t,a){this.dispatchEvent(new CustomEvent(t,{detail:a}))}getBytesDownloadedEvent(t,a,s,i){return new CustomEvent("bytesDownloaded",{detail:{bytes:t,uncompressedSize:a,url:s,done:i}})}getBytesDownloadErrorEvent(t,a){return new CustomEvent("downloadedError",{detail:{url:t,error:a}})}decompressBrotli(t){const a=atob(t),s=new Uint8Array(a.length);for(let n=0;n<a.length;n++)s[n]=a.charCodeAt(n);const i=new Int8Array(s.length);for(let n=0;n<s.length;n++)i[n]=s[n]>=128?s[n]-256:s[n];return fa(i).buffer}async fetchAsset(t,a,s,i,n){const r=a+s,l=t.find(f=>f.file===s).uncompressedSize,c=(f,g,T,w)=>kt(this,Ie,Nt).call(this,this.getBytesDownloadedEvent(f,g,T,w));try{const f=(await fetch(r)).body?.getReader();if(!f)throw new Error("Failed to get reader from response body.");let g=0;const T=new ReadableStream({async start(S){await k();async function k(){const{done:I,value:x}=await f.read();if(I){S.close(),c(g,l,r,!0);return}x&&(S.enqueue(x),g+=x.length,c(g,l,r,!1)),await k()}}}),w=new Response(T);if(i){const S=await w.json(),{base64EncodedValue:k}=S;if(n==="gzip"){await kt(this,Ie,ga).call(this,k);return}return this.decompressBrotli(k)}else return await w.arrayBuffer()}catch(f){kt(this,Ie,Nt).call(this,this.getBytesDownloadErrorEvent(r,f))}}}Ie=new WeakSet,Nt=function(e){this.dispatchEvent(e)},ga=async function(e){const t=Uint8Array.from(atob(e),l=>l.charCodeAt(0)),a=new Blob([t]).stream().pipeThrough(new DecompressionStream("gzip")),s=await new Response(a).arrayBuffer(),i=new TextDecoder().decode(new Uint8Array(s)),n=new Blob([i],{type:"application/javascript"}),r=URL.createObjectURL(n);fa=(await import(r)).BrotliDecode,this.canDecompress=!0,URL.revokeObjectURL(r)};var us=Object.defineProperty,ms=(e,t,a)=>t in e?us(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Yt=(e,t,a)=>ms(e,typeof t!="symbol"?t+"":t,a);class ps{constructor(){Yt(this,"version",{webSDK:"",extractionLib:{version:"",sdkId:""},faceTracker:""}),Yt(this,"debugLogs",[])}appendLog(t){this.debugLogs.push(t)}generateHTMLTable(){return`
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Anura Web Core SDK - Logs</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
              display: flex;
              flex-direction: column;
            }
            .header { display: flex; justify-content: space-between;}
            .box { padding: 20px; margin-bottom: 20px; border-radius: 5px; border: 1px solid #ccc; }
            svg {
              display: block;
              width: 100%;
              height: auto;
              margin: 20px 0;
            }
            .tooltip {
              position: absolute;
              background-color: rgba(0, 0, 0, 0.7);
              color: white;
              padding: 5px;
              border-radius: 5px;
              display: none;
            }
            .axis-label {
              font-size: 14px;
              text-anchor: middle;
            }
            label {
              font-size: 16px;
              margin-bottom: 10px;
            }
            select {
              font-size: 16px;
              padding: 8px 12px;
              border: 1px solid #ccc;
              border-radius: 4px;
              background-color: #f9f9f9;
              outline: none;
              transition: all 0.3s ease;
              width: 320px;
            }
            select:hover {
              border-color: #888;
            }
            select:focus {
              border-color: #555;
              box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            }
            #download {width: 200px;}
            table {width: 100%; max-width: 100%; table-layout: fixed; border-collapse: collapse;}
            th, td {border: 1px solid #ccc; padding: 8px; text-align: left; word-wrap: break-word;}
            td pre {
                margin: 0;
                white-space: pre-wrap; /* Preserve whitespace and line breaks */
            }
            .json-key {
                color: blue;
            }
            th {background-color: #f2f2f2;}
            .odd-row { background-color: #f9f9f9; }  /* Light grey for odd rows */
            .even-row { background-color: #ffffff; } /* White for even rows */
            .col-60 { width: 60px }
            .col-200 { width: 200px }
            .col-230 { width: 230px }
            .col-350 { width: 350px }
            .chart-container { width: 100%; margin-top: 40px;}
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <h1>Anura Web Core SDK</h1>
            </div>
            <div>
              <button type="button" id="download">Download</button>
            </div>
          </div>
          <br><br>
          <div id="info-table"></div>
          <br><br>
          <h4>Network Delays</h4>
          <div id="network-table"></div>
          <br><br>
          <div class="chart-container">
            <div class="box">
              <h2>Instantaneous video playback FPS between consecutive frames</h2>
              FPS = 1 / time difference between consecutive frames.
              <br><br>
              The time difference is the gap between the 
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback#capturetime" target="_blank" rel="noopener noreferrer">capturetime</a> values of two consecutive frames.
              This method will provide a better representation of the FPS at any given point in time,
              as it accounts for variations in frame rate over time (e.g., if the video slows down or
              experiences drops). It is generally more useful for tracking real-time performance.
              <svg id="fps-chart" viewBox="0 0 800 400"></svg>
            </div>
            <div class="box">
              <h2>Tracking Time per Frame by Face Tracker Worker</h2>
              To track every frame in a video with a playback speed of 30 frames per second (FPS), the face tracking time
              per frame should be less than or equal to the time allocated for each frame, which is:
              <br><br>
              Frame time= 1 / FPS = 1 / 30 ≈ 0.0333 seconds or 33.3 milliseconds.
              <br><br>
              To ensure smooth and consistent face tracking, the face tracking process should ideally complete in less
              than 33.3 milliseconds per frame.
              <svg id="ft-tracking-time-chart" viewBox="0 0 800 400"></svg>
            </div>
            <div class="box">
              <h2>Face tracking Throughput Over Time</h2>
              This chart will help you monitor the system's face tracking capacity over time. It displays the number of frames tracked per unit time (1 second).
              <svg id="ft-throughput-chart" viewBox="0 0 800 400"></svg>
            </div>
            <div class="box">
              <h2>Frame Latency Per Frame</h2>
              This chart shows total processing delay per frame, including face tracking time and DFX processing time.
              <br>
              <br>
              <div id="total-latency"></div>
              <svg id="frame-latency-chart" viewBox="0 0 800 400"></svg>
            </div>
            <div class="tooltip" id="tooltip"></div>
          </div>
          <label for="thread-filter">Filter by Thread:</label>
          <select id="thread-filter">
            <option value="none">None</option>
            ${[...new Set(this.debugLogs.map(t=>t.thread))].map(t=>`<option value="${t}">${t}</option>`).join("")}
          </select>
          <br>
          <br>
          <div id="logs-table"></div>
          <script>
            const logs = ${JSON.stringify(this.debugLogs,null,2)};
            const logsTable = document.getElementById('logs-table');
            const infoTable = document.getElementById('info-table');
            const networkTable = document.getElementById('network-table');
            const filter = document.getElementById('thread-filter');
            const fpsChart = document.getElementById('fps-chart');
            const ftTrackingTimeChart = document.getElementById('ft-tracking-time-chart');
            const ftThroughputChart = document.getElementById('ft-throughput-chart');
            const frameLatencyChart = document.getElementById('frame-latency-chart');
            const totalLatency = document.getElementById('total-latency');
            const tooltip = document.getElementById('tooltip');

            const frameNumCaptureTimeArr = logs.filter(
              item => item.category === 'SDK' && "captureTime" in item.meta && "presentedFrames" in item.meta
              ).map((item) => item.meta);

            const ftResolution = logs.find(
            item => item.category === 'SDK' && "ftWidth" in item.meta && "ftHeight" in item.meta
            ).meta;

            const frameMetrics = logs.find(
            item => item.category === 'SDK' &&
            "numOfFramesPresented" in item.meta &&
            "warmupFrameNumber" in item.meta &&
            "numOftrackedVideoFrames" in item.meta
            ).meta;
            const { numOfFramesPresented, warmupFrameNumber, numOftrackedVideoFrames } = frameMetrics;

            const numOfFramesPresentedSinceWarmUp =
                numOfFramesPresented - warmupFrameNumber;
            const numOfDroppedFrames = Math.max(
                numOfFramesPresented -
                numOftrackedVideoFrames -
                warmupFrameNumber,
                0
            );
            const percentageOfDroppedFrames = 
                numOfDroppedFrames === 0 || numOfFramesPresented === warmupFrameNumber
                    ? 0
                    : (numOfDroppedFrames * 100) /
                      (numOfFramesPresented - warmupFrameNumber);

            const wsCallDelayArr = logs.filter(
            item => item.category === 'WebSocket' && "delay" in item.meta && "actionId" in item.meta
            ).map(item => ({ protocol: "WebSocket", timestamp: item.timestamp.slice(1, -1), ...item.meta }));

            const restCallDelayArr = logs.filter(
            item => item.category === 'DFX API client' && "delay" in item.meta && "actionId" in item.meta
            ).map(item => ({ protocol: "HTTP", timestamp: item.timestamp.slice(1, -1), ...item.meta }));

            const measurement = restCallDelayArr.find(item => "measurementId" in item);
            const measurementId = measurement ? measurement.measurementId : 'N/A';

            const ftTrackingTimeArr = logs.filter(
              item => item.category === 'MediaPipe'
              && item.meta
              && "frameNumber" in item.meta
              && "frameTimestamp" in item.meta
              && "frameTrackingTime" in item.meta
              ).map(item => ({thread: item.thread, ...item.meta})
              ).sort((a, b) => a.frameNumber - b.frameNumber);

            const ftChartData = ftTrackingTimeArr.slice(4); // remove the first 4 elements (warm-up frames) from the array

            const frameThroughput =  calculateThroughput(ftChartData, 1000);

            const frameLatencyArr = logs.filter(
              item => item.category === 'DFX Worker'
              && item.meta
              && "frameNumber" in item.meta
              && "frameTrackingTime" in item.meta
              && "dfxProcessingTime" in item.meta)
              .map(item => ({overall: item.meta.frameTrackingTime + item.meta.dfxProcessingTime, ...item.meta}))
              .sort((a, b) => a.frameNumber - b.frameNumber);
            
            const latency = frameLatencyArr.reduce((sum, frame) => sum + frame.overall, 0);
            totalLatency.innerHTML = \`Total Frames Processed: <strong>\${frameLatencyArr.length}</strong><br><br>Total Latency: <strong>\${(latency / 1000).toFixed(2)} seconds</strong>\`;

            const getCategoryColor = (category) => {
              switch (category) {
                case 'Before REST call event':
                  return 'red';
                case 'After REST call event':
                  return 'orange';
                case 'MediaPipe':
                  return 'green';
                case 'DFX Extraction lib WASM':
                  return 'violet';
                case 'DFX API client':
                  return '#d34110';
                case 'WebSocket':
                  return '#d34110';
                case 'SDK':
                  return '#d34110';
                case 'DFX Worker':
                  return '#ad4393';
                default:
                  return 'black';
              }
            };

            // Function to escape HTML special characters
            function escapeHTML(html) {
                const div = document.createElement('div');
                div.textContent = html;
                return div.innerHTML;
            }

            function formatJsonWithKeyStyling(jsonString) {
                return jsonString.replace(/"(.*?)":/g, (match, p1) => \`<span class="json-key">"\${p1}"</span>:\`);
            }    

            // Function to find and extract the JSON string
            function extractJson(str) {
                let jsonStart = str.indexOf('{');
                if (jsonStart === -1) return null; // No JSON found

                let stack = [];
                let jsonEnd = jsonStart;

                for (let i = jsonStart; i < str.length; i++) {
                    if (str[i] === '{') stack.push('{');
                    if (str[i] === '}') stack.pop();

                    if (stack.length === 0) {
                        jsonEnd = i + 1;
                        break;
                    }
                }

                return str.slice(jsonStart, jsonEnd);
            }

            // Function to format and display the string
            function formatString(str) {
                const jsonPart = extractJson(str);
                let formattedString = escapeHTML(str);

                if (jsonPart) {
                    try {
                        const jsonObject = JSON.parse(jsonPart);
                        const formattedJson = JSON.stringify(jsonObject, null, 4);
                        const styledJson = formatJsonWithKeyStyling(formattedJson);

                        // Replace the JSON part with formatted JSON
                        formattedString = str.replace(jsonPart, \`<pre>\${styledJson}</pre>\`);
                    } catch (e) {
                        console.error('Invalid JSON:', e);
                    }
                }
                return formattedString;
            }    

            function renderInfoTable(data) {
              const tableHtml = \`
                <table>
                  <thead>
                    <tr>
                        <th class="col-350">Title</th>
                        <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    \${data.map((item, index) => {
                      const rowClass = index % 2 === 0 ? 'even-row' : 'odd-row';
                      const [title, description] = item;
                      return \`
                      <tr class="\${rowClass}">
                        <td class="col-350">\${title}</td>
                        <td>\${description}</td>
                      </tr>
                      \`;
                    }).join("")}
                  </tbody>
                </table>
              \`;
              infoTable.innerHTML = tableHtml;
            }

            function renderNetworkTable(data) {
              const tableHtml = \`
                <table>
                  <thead>
                    <tr>
                        <th class="col-230">Timestamp</th>
                        <th class="col-200">Protocol</th>
                        <th class="col-200">Delay (ms)</th>
                        <th>Info</th>
                    </tr>
                  </thead>
                  <tbody>
                    \${data.map((item, index) => {
                      const rowClass = index % 2 === 0 ? 'even-row' : 'odd-row';
                      const { timestamp, protocol, delay, actionId, description } = item;
                      return \`
                      <tr class="\${rowClass}">
                        <td class="col-230">\${timestamp}</td>
                        <td class="col-200">\${protocol}</td>
                        <td class="col-200">\${delay.toFixed(2)}</td>
                        <td>\${description} - Action ID: \${actionId}</td>
                      </tr>
                      \`;
                    }).join("")}
                  </tbody>
                </table>
              \`;
              networkTable.innerHTML = tableHtml;
            }

            function renderLogsTable(data) {
              const tableHtml = \`
                <table>
                  <thead>
                    <tr>
                        <th class="col-60">Index</th>
                        <th class="col-230">Timestamp</th>
                        <th class="col-230">Thread</th>
                        <th class="col-200">Category</th>
                        <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    \${data.map((item, index) => {
                      const rowClass = index % 2 === 0 ? 'even-row' : 'odd-row';
                      const categoryColor = getCategoryColor(item.category);
                      return \`
                      <tr class="\${rowClass}">
                        <td class="col-60">\${index + 1}</td>
                        <td class="col-230">\${item.timestamp.slice(1, -1)}</td>
                        <td class="col-230">\${item.thread}</td>
                        <td class="col-200" style="color: \${categoryColor};">\${item.category}</td>
                        <td>\${formatString(item.message)}</td>
                      </tr>
                      \`;
                    }).join("")}
                  </tbody>
                </table>
              \`;
              logsTable.innerHTML = tableHtml;
            }

            // Instantaneous FPS (between consecutive frames)
            const instantaneousFrameRates = frameNumCaptureTimeArr.map((point, index) => {
              if (index === 0) {
                return { captureTime: point.captureTime, frameRate: 0 }; // No FPS for the first frame
              } else {
                const prevPoint = frameNumCaptureTimeArr[index - 1];
                const timeDifference = point.captureTime - prevPoint.captureTime; // Time difference in seconds
                const fps = timeDifference > 0 ? 1000 / timeDifference : 0; // Convert to FPS by multiplying by 1000
                return { captureTime: point.captureTime, frameRate: fps };
              }
            });

            function calculateThroughput(frameData, intervalMs = 1000) {
                // Sort frame data by frameTimestamp
                frameData.sort((a, b) => a.frameTimestamp - b.frameTimestamp);

                // Find the time range
                const startTime = frameData[0].frameTimestamp;
                const endTime = frameData[frameData.length - 1].frameTimestamp;

                // Group frames into time intervals
                const throughputData = [];
                for (let t = startTime; t <= endTime; t += intervalMs) {
                    const nextInterval = t + intervalMs;
                    const framesInInterval = frameData.filter(
                        frame => frame.frameTimestamp >= t && frame.frameTimestamp < nextInterval
                    ).length;

                    throughputData.push({
                        time: t - startTime, // Time offset in milliseconds
                        throughput: framesInInterval,
                    });
                }

                return throughputData;
            };

            // Function to render the SVG chart
            function renderChart(data, svg, xKey, yKey, xAxisLabel, yAxisLabel, lineColor, getCircleColor, xValuesCallback, tooltipCallback) {
                const width = svg.getAttribute("viewBox").split(" ")[2];
                const height = svg.getAttribute("viewBox").split(" ")[3];
                const padding = 70; // Increase padding to provide more space for y-axis title
                const titlePadding = 30; // Adjust this for more space between title and axis

                const maxTime = Math.max(...data.map(d => d[xKey]));
                const minTime = Math.min(...data.map(d => d[xKey]));
                const maxFrameRate = Math.max(...data.map(d => d[yKey]));
                const minFrameRate = Math.min(...data.map(d => d[yKey]));

                const xScale = (value) => padding + (value / maxTime) * (width - 2 * padding);
                const yScale = (value) => height - padding - (value / maxFrameRate) * (height - 2 * padding);

                // Clear existing SVG content
                svg.innerHTML = "";

                // Draw grid lines
                function drawGridLines() {
                    const gridLines = document.createElementNS("http://www.w3.org/2000/svg", "g");
                    for (let i = 1; i <= 5; i++) {
                        const x = xScale(i * (maxTime / 5));
                        const y1 = padding;
                        const y2 = height - padding;
                        const gridLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
                        gridLine.setAttribute("x1", x);
                        gridLine.setAttribute("y1", y1);
                        gridLine.setAttribute("x2", x);
                        gridLine.setAttribute("y2", y2);
                        gridLine.setAttribute("stroke", "#ccc");
                        gridLine.setAttribute("stroke-width", 1);
                        gridLine.setAttribute("stroke-dasharray", "5,5");
                        gridLines.appendChild(gridLine);
                    }

                    for (let i = 1; i <= 5; i++) {
                        const y = yScale(i * (maxFrameRate / 5));
                        const x1 = padding;
                        const x2 = width - padding;
                        const gridLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
                        gridLine.setAttribute("x1", x1);
                        gridLine.setAttribute("y1", y);
                        gridLine.setAttribute("x2", x2);
                        gridLine.setAttribute("y2", y);
                        gridLine.setAttribute("stroke", "#ccc");
                        gridLine.setAttribute("stroke-width", 1);
                        gridLine.setAttribute("stroke-dasharray", "5,5");
                        gridLines.appendChild(gridLine);
                    }
                    svg.appendChild(gridLines);
                }

                drawGridLines();

                // Draw axes
                const xAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
                xAxis.setAttribute("x1", padding);
                xAxis.setAttribute("y1", height - padding);
                xAxis.setAttribute("x2", width - padding);
                xAxis.setAttribute("y2", height - padding);
                xAxis.setAttribute("stroke", "black");
                svg.appendChild(xAxis);

                const yAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
                yAxis.setAttribute("x1", padding);
                yAxis.setAttribute("y1", padding);
                yAxis.setAttribute("x2", padding);
                yAxis.setAttribute("y2", height - padding);
                yAxis.setAttribute("stroke", "black");
                svg.appendChild(yAxis);

                // Add axis labels
                const xLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
                xLabel.setAttribute("x", width / 2);
                xLabel.setAttribute("y", height - padding / 3);
                xLabel.setAttribute("class", "axis-label");
                xLabel.textContent = xAxisLabel;
                svg.appendChild(xLabel);

                // Add axis label for Y (Frame Rate)
                const yLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
                yLabel.setAttribute("x", -height / 2); // Rotate around the center of the y-axis
                yLabel.setAttribute("y", padding / 2 - 24); // Adjust vertical position to add space
                yLabel.setAttribute("class", "axis-label");
                yLabel.setAttribute("transform", "rotate(-90)");
                yLabel.setAttribute("text-anchor", "middle");
                yLabel.textContent = yAxisLabel;
                svg.appendChild(yLabel);

                // Add axis ticks and labels for X (time)
                const numXTicks = 5;
                for (let i = 0; i <= numXTicks; i++) {
                    const xValue = minTime + (i * (maxTime - minTime) / numXTicks);
                    const x = xScale(xValue);
                    const tick = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    tick.setAttribute("x1", x);
                    tick.setAttribute("y1", height - padding);
                    tick.setAttribute("x2", x);
                    tick.setAttribute("y2", height - padding + 6);
                    tick.setAttribute("stroke", "black");
                    svg.appendChild(tick);

                    const tickLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
                    tickLabel.setAttribute("x", x);
                    tickLabel.setAttribute("y", height - padding + 20);
                    tickLabel.setAttribute("class", "axis-label");
                    tickLabel.textContent = xValuesCallback(xValue);
                    svg.appendChild(tickLabel);
                }

                // Add axis ticks and labels for Y (frame rate)
                const numYTicks = 5;
                for (let i = 0; i <= numYTicks; i++) {
                    const yValue = minFrameRate + (i * (maxFrameRate - minFrameRate) / numYTicks);
                    const y = yScale(yValue);
                    const tick = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    tick.setAttribute("x1", padding - 6); // Move ticks to the left a bit
                    tick.setAttribute("y1", y);
                    tick.setAttribute("x2", padding); // Position ticks a bit further from the axis line
                    tick.setAttribute("y2", y);
                    tick.setAttribute("stroke", "black");
                    svg.appendChild(tick);

                    const tickLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
                    tickLabel.setAttribute("x", padding - 10); // Adjust the label placement to shift it to the right
                    tickLabel.setAttribute("y", y + 5); // Center the label vertically on the tick
                    tickLabel.setAttribute("text-anchor", "end");
                    tickLabel.textContent = yValue.toFixed(1);
                    svg.appendChild(tickLabel);
                }

                // Draw the line chart
                const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
                const lineData = data.map((point, index) => {
                    const x = xScale(point[xKey]);
                    const y = yScale(point[yKey]);
                    return index === 0 ? 'M' + x + ',' + y : 'L' + x + ',' + y;
                }).join(" ");
                line.setAttribute("d", lineData);
                line.setAttribute("fill", "none");
                line.setAttribute("stroke", lineColor);
                line.setAttribute("stroke-width", 2);
                svg.appendChild(line);

                // Add tooltip on hover
                data.forEach((point) => {
                    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                    circle.setAttribute("cx", xScale(point[xKey]));
                    circle.setAttribute("cy", yScale(point[yKey]));
                    circle.setAttribute("r", 4);
                    circle.setAttribute("fill", getCircleColor(point));
                    circle.addEventListener("mouseover", (event) => {
                        tooltip.style.display = "block";
                        tooltip.style.left = event.pageX + 10 + 'px';
                        tooltip.style.top = event.pageY + 10 + 'px';
                        tooltip.innerHTML = tooltipCallback(point);
                    });
                    circle.addEventListener("mouseout", () => {
                        tooltip.style.display = "none";
                    });
                    svg.appendChild(circle);
                });
            }

            const renderFpsTooltip = (point) => {
              return \`Time: \${(point.captureTime/1000).toFixed(4)}s, Frame Rate: \${point.frameRate.toFixed(2)} FPS\`;
            };

            const renderTrackingTimeTooltip = (point) => {
              return \`Frame: \${point.frameNumber}, Tracking Time: \${point.frameTrackingTime.toFixed(2)} ms, Thread: \${point.thread}\`;
            };

            const renderThroughputTooltip = (point) => {
              return \`Time: \${point.time / 1000}s, Throughput: \${point.throughput} FPS\`;
            };

            const renderFrameLatencyTooltip = (point) => {
              return \`Frame: \${point.frameNumber}, Overall: \${point.overall.toFixed(2)} ms, Face Tracking Time: \${point.frameTrackingTime.toFixed(2)} ms, DFX processing: \${point.dfxProcessingTime.toFixed(2)} ms\`;
            };

            const getFTCircleColor = (point) => {
              const colors = ['#c7e9c0' ,'#74c476', '#31a354', '#006d2c'];
              const index = parseInt(point.thread.slice(-1));
              return colors[index];
            };

            const getUTCDate = () => {
              const now = new Date();
              const year = now.getUTCFullYear();
              const month = String(now.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-indexed
              const date = String(now.getUTCDate()).padStart(2, '0');
              const hours = String(now.getUTCHours()).padStart(2, '0');
              const minutes = String(now.getUTCMinutes()).padStart(2, '0');
              const seconds = String(now.getUTCSeconds()).padStart(2, '0');
              return year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds + ' UTC';
            };

            const info = [
              ['Report date', getUTCDate()],
              ['SDK Version', '${this.version.webSDK}'],
              ['Face Tracker Version', '${this.version.faceTracker}'],
              ['Extraction Lib Version', '${this.version.extractionLib.version}'],
              ['Extraction Lib SDK ID', '${this.version.extractionLib.sdkId}'],
              ['Video Resolution (w x h)', ftResolution.frameWidth + ' x ' + ftResolution.frameHeight + ' pixels'],
              ['Face Tracker Resolution (w x h)', ftResolution.ftWidth + ' x ' + ftResolution.ftHeight + ' pixels'],
              ['Measurement ID', measurementId],
              ['Number of Frames Presented', numOfFramesPresented],
              ['Face Trackers Warmup Frame Number', warmupFrameNumber],
              ['Number of Tracked Video Frames', numOftrackedVideoFrames],
              ['Number of Frames Presented Since Warmup', numOfFramesPresentedSinceWarmUp],
              ['Number of dropped Frames', numOfDroppedFrames],
              ['Percentage of dropped frames', percentageOfDroppedFrames.toFixed(2) + '%'],
            ];
            info.push([
                'Touch screen',
                'maxTouchPoints' in navigator && navigator.maxTouchPoints > 0
                        ? 'Available'
                        : 'Not available',
            ]);
            info.push([
                'Window size (w x h)',
                '${window.innerWidth} x ${window.innerHeight} pixels',
            ]);
            info.push([
                'Screen orientation',
                window.innerHeight > window.innerWidth ? 'Portrait' : 'Landscape',
            ]);
            info.push([
                'User agent',
                window.navigator.userAgent,
            ]);
            info.push([
                'Time Zone',
                Intl.DateTimeFormat().resolvedOptions().timeZone,
            ]);
            info.push([
                'Locale',
                Intl.DateTimeFormat().resolvedOptions().locale,
            ]);
            renderInfoTable(info);

            renderNetworkTable([...restCallDelayArr, ...wsCallDelayArr]);

            renderLogsTable(logs);
            renderChart(
              instantaneousFrameRates,
              fpsChart,
              'captureTime',
              'frameRate',
              'Time (s)',
              'Frame Rate (FPS)',
              'blue',
              (point) => 'blue',
              (xValue) => (xValue / 1000).toFixed(1),
              renderFpsTooltip
            );

            renderChart(
              ftChartData,
              ftTrackingTimeChart,
              'frameNumber',
              'frameTrackingTime',
              'Frame Number',
              'Frame Tracking Time (ms)',
              'green',
              getFTCircleColor,
              (xValue) => Math.trunc(xValue),
              renderTrackingTimeTooltip
            );

            renderChart(
              frameThroughput,
              ftThroughputChart,
              'time',
              'throughput',
              'Time (s)',
              'Face tracking throughput (FPS)',
              'orange',
              (point) => 'orange',
              (xValue) => xValue / 1000,
              renderThroughputTooltip
            );

            renderChart(
              frameLatencyArr,
              frameLatencyChart,
              'frameNumber',
              'overall',
              'Frame Number',
              'Frame Latency (ms)',
              '#f93e3e',
              (point) => '#f93e3e',
              (xValue) => Math.trunc(xValue),
              renderFrameLatencyTooltip
            );

            filter.addEventListener('change', () => {
              const selectedThread = filter.value;
              if (selectedThread === 'none') {
                renderLogsTable(logs);
              } else {
                const filteredData = logs.filter(item => item.thread === selectedThread);
                renderLogsTable(filteredData);
              }
            });

            function downloadFile() {
              const now = new Date();
              const formattedDate = now.toISOString().replace(/[-:T]/g, '_').split('.')[0];
              const blob = new Blob([document.documentElement.outerHTML], { type: 'text/html' });
              const link = document.createElement('a');
              link.href = URL.createObjectURL(blob);
              link.download = \`log_\${formattedDate}.html\`;
              document.body.appendChild(link);
              link.click();
              URL.revokeObjectURL(link.href);
              document.body.removeChild(link);
            }
            const download = document.getElementById('download');
            download.onclick = downloadFile;
          <\/script>
        </body>
      </html>
      `}openLogInNewWindow(){console.log(this.debugLogs);const t=this.generateHTMLTable(),a=new Blob([t],{type:"text/html"}),s=URL.createObjectURL(a);window.open(s,"_blank")}}var gs=Object.defineProperty,fs=(e,t,a)=>t in e?gs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,dt=(e,t,a)=>fs(e,typeof t!="symbol"?t+"":t,a);class vt{constructor(t,a){dt(this,"workerUrl"),dt(this,"worker"),this.worker=t,this.workerUrl=a}static init(t,a,s){const i=new Blob([t],{type:"application/javascript"}),n=URL.createObjectURL(i),r=s||`WORKER${String(new Date().getTime())}`,l=new Worker(new URL(n,import.meta.url),{name:r,type:a});return new vt(l,n)}destroy(){return this.worker?(this.worker.terminate(),URL.revokeObjectURL(this.workerUrl),this.worker=void 0,!0):!1}}const bs=(e,t,a,s)=>{const i=e/t,n=a/s;let r=0,l=0;i>n?(r=e,l=e/n):(l=t,r=t*n);const c=(e-r)/2,f=(t-l)/2;return{width:r||0,height:l||0,offsetX:c||0,offsetY:f||0}},vs=(e,t,a,s)=>{const i=(e-a)/2,n=(t-s)/2;return{width:a||0,height:s||0,offsetX:i||0,offsetY:n||0}},ys=(e,t,a,s)=>{const i=e/t,n=a/s;let r=0,l=0;i>n?(l=t,r=t*n):(r=e,l=e/n);const c=(e-r)/2,f=(t-l)/2;return{width:r||0,height:l||0,offsetX:c||0,offsetY:f||0}},Ss=(e,t)=>{switch(e){case"none":return vs(...t);case"cover":return bs(...t);case"contain":default:return ys(...t)}},Xt=e=>/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(e),Ts=e=>e===void 0?!0:!(typeof e.mediaPipe<"u"&&typeof e.mediaPipe!="boolean"||typeof e.beforeRESTCall<"u"&&typeof e.beforeRESTCall!="boolean"||typeof e.afterRESTCall<"u"&&typeof e.afterRESTCall!="boolean"||typeof e.extractionLibWasm<"u"&&typeof e.extractionLibWasm!="boolean"||typeof e.apiClient<"u"&&typeof e.apiClient!="boolean"||typeof e.extractionWorker<"u"&&typeof e.extractionWorker!="boolean"||typeof e.faceTrackerWorkers<"u"&&typeof e.faceTrackerWorkers!="boolean"||typeof e.sdk<"u"&&typeof e.sdk!="boolean"),ks=(e,t)=>{const a={...e};if(t.logger)if(Ts(t.logger))a.logger={...a.logger,...t.logger};else return{results:"invalid"};if(t.apiUrl!==void 0)if(typeof t.apiUrl=="string")a.apiUrl=t.apiUrl;else return{results:"invalid"};if(t.metrics!==void 0)if(typeof t.metrics=="boolean")a.metrics=t.metrics;else return{results:"invalid"};if(t.mirrorVideo!==void 0)if(typeof t.mirrorVideo=="boolean")a.mirrorVideo=t.mirrorVideo;else return{results:"invalid"};if(t.displayMediaStream!==void 0)if(typeof t.displayMediaStream=="boolean")a.displayMediaStream=t.displayMediaStream;else return{results:"invalid"};if(t.assetFolder!==void 0)if(typeof t.assetFolder=="string")a.assetFolder=t.assetFolder;else return{results:"invalid"};if(t.mediaElement!==void 0)if(t.mediaElement instanceof HTMLDivElement)a.mediaElement=t.mediaElement;else return{results:"invalid"};if(t.constraintOverrides!==void 0){let s=function(n,r){if(!(n in i))return!1;const l=i[n];return typeof r===l};const i=Object.fromEntries(Object.entries({backLightMaxPixels_pct:30,backLightSearchMult:1.5,backLightThresh:240,boxCenterX_pct:50,boxCenterY_pct:50,boxHeight_pct:99,boxWidth_pct:50,cameraRot_chunkThresh:.7853981633974483,cameraRot_windowThresh:.2617993877991494,checkBackLight:!1,checkCameraMovement:!1,checkCentered:!1,checkDistance:!1,checkEyebrowMovement:!1,checkFaceDirection:!1,checkLighting:!1,checkMaxDistance:!1,checkMinFps:!1,checkMovement:!1,chunkMovementThresh_pct:60,enableDebugLog:!1,enableFigures:!1,faceRotLR_thresh:.33,faceRotUD_lowerthresh:.25,faceRotUD_upperThresh:5,hy_faceRotLR_thresh:.05,hy_maxFaceRotLR_deg:2,hy_maxFaceRotUD_deg:2,hy_minInterPupilDist_px:5,hy_minimumFps:1,maxEyebrowMovement_mm:3,maxFaceRotLR_deg:12.5,maxFaceRotUD_deg:25,maxMovement_mm:10,minInterPupilDist_px:100,minimumFps:26,movementWindow_ms:2e3,threshBright:225,threshDark:48}).map(([n,r])=>[n,typeof r]));for(const n in t.constraintOverrides){const r=t.constraintOverrides[n];if(!s(n,r))return{results:"invalid"}}a.constraintOverrides=t.constraintOverrides}return{results:"valid",settings:a}},ws=e=>typeof e.age!="number"||e.age<13||e.age>120?(console.error("Invalid age. It should be a number between 13 and 120."),!1):typeof e.height!="number"||e.height<120||e.height>220?(console.error("Invalid height. It should be a number between 120 and 220."),!1):typeof e.weight!="number"||e.weight<30||e.weight>300?(console.error("Invalid weight. It should be a number between 30 and 300."),!1):typeof e.sex!="number"||e.sex<1||e.sex>3?(console.error("Invalid sex. It should be a number between 1 and 3."),!1):typeof e.diabetes!="number"||e.diabetes<4||e.diabetes>6?(console.error("Invalid diabetes. It should be a number between 4 and 6."),!1):typeof e.bloodPressureMedication!="number"||e.bloodPressureMedication!==0&&e.bloodPressureMedication!==1?(console.error("Invalid bloodPressureMedication. It should be either 0 or 1."),!1):typeof e.smoking!="number"||e.smoking!==0&&e.smoking!==1?(console.error("Invalid smoking. It should be either 0 or 1."),!1):!0;var b=(e=>(e.beforeRESTCall="Before REST call event",e.afterRESTCall="After REST call event",e.mediaPipe="MediaPipe",e.extractionLibWasm="DFX Extraction lib WASM",e.apiClient="DFX API client",e.webSocket="WebSocket",e.sdk="SDK",e.dfxWorker="DFX Worker",e))(b||{});const Es=e=>{switch(e){case"Before REST call event":return"red";case"After REST call event":return"orange";case"MediaPipe":return"green";case"DFX Extraction lib WASM":return"violet";case"DFX API client":return"#d34110";case"WebSocket":return"#d34110";case"SDK":return"#d34110";case"DFX Worker":return"#ad4393";default:return"black"}};class qt{constructor(t=1e3){dt(this,"timestamps",[]),dt(this,"windowMs"),this.windowMs=t}tick(t=performance.now()){for(this.timestamps.push(t);this.timestamps.length>0&&t-this.timestamps[0]>this.windowMs;)this.timestamps.shift()}get fps(){const t=this.timestamps.length,a=this.timestamps.at(-1)-this.timestamps[0]||1;return t/a*1e3}get frameCount(){return this.timestamps.length}reset(){this.timestamps=[]}}var Rs=Object.defineProperty,Cs=(e,t,a)=>t in e?Rs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Jt=(e,t,a)=>Cs(e,typeof t!="symbol"?t+"":t,a);const As=()=>{const e=new Date,t=(e.getMonth()+1).toString().padStart(2,"0"),a=e.getDate().toString().padStart(2,"0"),s=e.getFullYear();let i=e.getHours();const n=e.getMinutes().toString().padStart(2,"0"),r=e.getSeconds().toString().padStart(2,"0"),l=e.getMilliseconds().toString().padStart(3,"0"),c=i>=12?"PM":"AM";return i=i%12||12,`[${t}/${a}/${s}, ${i}:${n}:${r}.${l} ${c}]`};class Zt{constructor(){Jt(this,"mertics",new ps),Jt(this,"version",{webSDK:"",extractionLib:{version:"",sdkId:""},faceTracker:""})}retrieveLogs(t){this.mertics.debugLogs=t,this.mertics.openLogInNewWindow(),this.mertics.debugLogs=[]}setVersion(t){this.version=t,this.mertics.version=t}log(t,a,s,i=!1,n={}){const r=As();if(i)this.mertics.appendLog({thread:"Main",timestamp:r,category:a,message:t,meta:n});else{const l=`[${a}]`,c="  ",f=t,g=`color:${s}; font-weight:800;`,T=`color:${Es(a)}; font-weight:700;`;console.log("%c%s%c%s%c%s%c%s",g,r,T,l,"background:inherit;",c,"font-style: italic;",f)}}info(t,a){this.log(t,a,"blue")}warn(t,a){this.log(t,a,"orange")}error(t,a){this.log(t,a,"red")}debug(t,a){this.log(t,a,"green")}start(){console.log("%c%s","color: #5e5e5e; background-color: #2d2d2d; letter-spacing: 0.1em; text-shadow: -1px -1px 1px #111, 2px 2px 1px #363636; font-size: 36px; padding: 20px 40px; text-align: center; text-transform: uppercase; text-rendering: optimizeLegibility;","Anura Web Core SDK"),console.log(`Version: ${this.version.webSDK}`),console.log("https://www.deepaffex.ai")}}const xs={SEX_ASSIGNED_MALE_AT_BIRTH:2,DIABETES_NONE:4,SMOKER_FALSE:1,BLOOD_PRESSURE_MEDICATION_FALSE:0},oe={SEX_ASSIGNED_AT_BIRTH:1,AGE_YEARS:2,HEIGHT_CM:3,WEIGHT_KG:4,SMOKER:5,BLOOD_PRESSURE_MEDICATION:7,DIABETES:8};var ba=(e=>(e[e.BGR=1]="BGR",e[e.RGB=2]="RGB",e[e.BGRA=3]="BGRA",e[e.RGBA=4]="RGBA",e[e.Infrared=5]="Infrared",e[e.Infrared888=6]="Infrared888",e[e.BGR_Infrared=7]="BGR_Infrared",e[e.RGB_Infrared=8]="RGB_Infrared",e[e.Gray=9]="Gray",e))(ba||{});const ce={ASSETS_NOT_DOWNLOADED:"ASSETS_NOT_DOWNLOADED",NOT_LOADED:"NOT_LOADED",LOADING:"LOADING",LOADED:"LOADED",READY:"READY"},Ze={COLLECTOR:"COLLECTOR",ASSET_DOWNLOAD:"ASSET_DOWNLOAD",WEB_SOCKET:"WEB_SOCKET"},ht={CONTAIN:"contain",COVER:"cover",NONE:"none"};var U=(e=>(e.INIT="INIT",e.READY="READY",e.INIT_TFJS="INIT_TFJS",e.SET_PORT="SET_PORT",e.TRACK="TRACK",e.RESULTS_READY="RESULTS_READY",e.WARM_UP="WARM_UP",e.DESTROY="DESTROY",e.LANDMARKS="LANDMARKS",e.VIDEO_FRAME="VIDEO_FRAME",e.SCALE_FACTOR_CHANGED="SCALE_FACTOR_CHANGED",e.FACE_TRACKER_INIT_ERROR="FACE_TRACKER_INIT_ERROR",e.SET_ROTATE_180="SET_ROTATE_180",e.GET_LOGS="GET_LOGS",e))(U||{}),Ns=Object.defineProperty,va=e=>{throw TypeError(e)},Ds=(e,t,a)=>t in e?Ns(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,_=(e,t,a)=>Ds(e,typeof t!="symbol"?t+"":t,a),Mt=(e,t,a)=>t.has(e)||va("Cannot "+a),_e=(e,t,a)=>(Mt(e,t,"read from private field"),t.get(e)),wt=(e,t,a)=>t.has(e)?va("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),$e=(e,t,a,s)=>(Mt(e,t,"write to private field"),t.set(e,a),a),Is=(e,t,a)=>(Mt(e,t,"access private method"),a),_s=(e,t,a,s)=>({set _(i){$e(e,t,i)},get _(){return _e(e,t)}}),le,fe,Dt,ya;const $s=class Sa{constructor(t,a,s,i){wt(this,Dt),_(this,"logger"),_(this,"mediaElement"),_(this,"numOfFramesPresented",0),_(this,"workers",[]),_(this,"numOftrackedVideoFrames",0),_(this,"warmupFrameNumber",0),_(this,"videoCallbackId",0),_(this,"numOfWorkers",4),_(this,"isLoggingFaceTrackerWorkers",!1),_(this,"isLoggingSdk",!1),_(this,"workerIndex",0),_(this,"metrics",!1),_(this,"videoFpsTracker",new qt(1e3)),_(this,"faceTrackerFpsTracker",new qt(1e3)),_(this,"videoElementSize",{width:0,height:0,offsetX:0,offsetY:0}),_(this,"videoElement",document.createElement("video")),_(this,"frameWidth",0),_(this,"frameHeight",0),_(this,"mirrorVideo",!0),_(this,"settings",{faceTrackerWidth:0,faceTrackerHeight:0,displayMediaStream:!0,objectFit:ht.COVER}),_(this,"isExtracting",!1),_(this,"starRating",0),_(this,"scaleFactor",1),_(this,"warmupIndex",0),_(this,"warmingUp",!0),_(this,"ftWorkerIndex",0),_(this,"lastFrameNumber",-1),_(this,"rotate180",!1),wt(this,le,null),wt(this,fe,0),_(this,"on");const{mediaElement:n,mirrorVideo:r,numOfWorkers:l,isLoggingFaceTrackerWorkers:c,isLoggingSdk:f,metrics:g,displayMediaStream:T}=a;this.on=i,this.numOfWorkers=l,this.isLoggingFaceTrackerWorkers=c,this.isLoggingSdk=f,this.metrics=g,this.logger=s,this.settings.displayMediaStream=T,this.mirrorVideo=r,this.mediaElement=n,this.videoFrameCallback=this.videoFrameCallback.bind(this),this.workers=t,this.scaleFactor=a.scaleFactor,this.videoElement.muted=!0,this.videoElement.playsInline=!0,this.videoElement.preload="auto"}static async init(t,a,s){const{numOfWorkers:i,faceTrackerCode:n}=t,r=[],l=new TextDecoder().decode(new Uint8Array(n));if(i>0)for(let f=1;f<=i;f+=1){const g=vt.init(l,"module",`FACE_TRACKER_WORKER_${f-1}`);r.push({ft:g,channel:new MessageChannel,isBusy:!1})}const c=new Sa(r,t,a,s);return i>0&&!await c.initWorkerOnMessage(t.models)?null:c}async initWorkerOnMessage(t){const a=window.matchMedia("(orientation: portrait)").matches,s=a?360:640,i=a?640:360,n=this.workers.map((r,l)=>new Promise((c,f)=>{let g=!1;r.ft.worker.onmessage=T=>{const{action:w,payload:S}=T.data;switch(w){case U.INIT_TFJS:break;case U.READY:{const{workerName:k,version:I,workerId:x,backend:L}=S;g||(g=!0,c()),this.on.faceTrackersReady&&this.on.faceTrackersReady(k,I,x,L);break}case U.FACE_TRACKER_INIT_ERROR:{const{error:k}=S;g||(g=!0,f(new Error(`Worker initialization failed: ${k}`)));break}case U.LANDMARKS:{this.faceTrackerFpsTracker.tick(),r.isBusy=!1,this.warmingUp&&this.warmupIndex++;const{face:k,annotations:I,frameTimestamp:x}=S;this.on.landmarksAvailable&&this.on.landmarksAvailable(k,I,x);break}case U.DESTROY:{const{workerId:k}=S;this.workers[k]&&this.workers[k].ft.destroy(),_e(this,le)&&(_s(this,fe)._++,_e(this,fe)>=this.workers.length&&(_e(this,le).call(this,!0),$e(this,le,null),$e(this,fe,0),this.workers=[]));break}case U.GET_LOGS:{const{logs:k,workerId:I}=S;this.on.logsAvailable&&this.on.logsAvailable(k,I);break}}},r.ft.worker.postMessage({action:U.INIT_TFJS,payload:{width:s,height:i,models:t,scaleFactor:this.scaleFactor,workerId:l,isLogging:this.isLoggingFaceTrackerWorkers,metrics:this.metrics}}),r.ft.worker.postMessage({action:U.SET_PORT,payload:{port:r.channel.port2}},[r.channel.port2])}));try{return await Promise.all(n),!0}catch{return await this.destroyWorkers(),!1}}getMediaElement(){return this.mediaElement}setIsExtracting(t){this.isExtracting=t}destroyWorkers(){return _e(this,le)!==null?Promise.resolve(!1):new Promise(t=>{setTimeout(async()=>{if(this.videoCallbackId&&this.videoElement.cancelVideoFrameCallback(this.videoCallbackId),this.workers.length===0){t(!0);return}$e(this,le,t),$e(this,fe,0),this.workers.forEach(a=>{a?.ft?.worker?.postMessage({action:U.DESTROY})})},200)})}createMediaElements(){this.videoElement.addEventListener("ended",async()=>{this.destroyWorkers()});const t=document.createElement("div"),a=this.settings.displayMediaStream?this.videoElement:t,s="white";this.mediaElement.appendChild(a),a.style.width="100%",a.style.height="100%",a.style.boxSizing="border-box",this.settings.displayMediaStream&&(a.style.border=`1px solid ${s}`),a.style.objectFit=this.settings.objectFit,a.style.transform=`scale(${this.mirrorVideo?"-1":"1"},1)`,this.settings.displayMediaStream||(a.style.height=`${this.frameHeight}px`,a.style.width=`${this.frameWidth}px`),new ResizeObserver(i=>{const{contentRect:n,target:r}=i[0],{width:l,height:c}=n,{x:f,y:g}=r.getBoundingClientRect(),{faceTrackerWidth:T,faceTrackerHeight:w}=this.settings;this.videoElementSize=Ss(this.settings.objectFit,[l,c,this.frameWidth,this.frameHeight]);const{width:S,height:k}=this.videoElementSize;if(!this.settings.displayMediaStream){const I=this.settings.objectFit===ht.NONE;a.style.height=`${Math.trunc(I?k:c)}px`,a.style.width=`${Math.trunc(I?S:l)}px`}this.mediaElement.dispatchEvent(new CustomEvent("mediaElementSizeChanged",{detail:{mediaElementSize:{width:l,height:c,x:f,y:g},videoElementSize:this.videoElementSize,frameInfo:{mediaStreamWidth:this.frameWidth,mediaStreamHeight:this.frameHeight,faceTrackerWidth:T,faceTrackerHeight:w},isPortrait:c>l,aspectRatio:l/c}}))}).observe(this.mediaElement)}log(t,a,s){this.isLoggingSdk&&this.logger.info(t,a),this.metrics&&this.logger.log(t,a,"",!0,s)}videoFrameCallback(t,a){const{presentedFrames:s,captureTime:i,expectedDisplayTime:n,mediaTime:r}=a;this.videoFpsTracker.tick();const l=i===void 0?n:i;this.numOfFramesPresented=s;const c=`Number of frames presented: ${this.numOfFramesPresented} - time: ${l}`;let f=0;if(r&&r>0?f=r*1e3:i&&i>0?f=i>1e6?i-performance.timeOrigin:i:f=t,this.log(c,b.sdk,{captureTime:l,presentedFrames:s}),this.warmingUp)if(this.warmupIndex>=this.numOfWorkers)this.warmingUp=!1;else{const g=this.workers[this.warmupIndex];if(!g.isBusy){g.isBusy=!0;const T=new VideoFrame(this.videoElement,{timestamp:f});g.ft.worker.postMessage({action:U.TRACK,payload:{frame:T,frameTimestamp:f,frameNumber:this.numOfFramesPresented}},[T])}}if(!this.warmingUp){const g=new VideoFrame(this.videoElement,{timestamp:f});let T=!1;for(let w=0;w<this.numOfWorkers;w++){this.ftWorkerIndex=(this.ftWorkerIndex+1)%this.numOfWorkers;const S=this.workers[this.ftWorkerIndex];if(S&&!S.isBusy){S.isBusy=!0,this.on.frameAvailable(f,this.numOfFramesPresented,this.lastFrameNumber,!0),S.ft.worker.postMessage({action:U.TRACK,payload:{frame:g,frameTimestamp:f,frameNumber:this.numOfFramesPresented}},[g]),T=!0;break}}T||this.on.frameAvailable(f,this.numOfFramesPresented,this.lastFrameNumber,!1,g)}this.lastFrameNumber=this.numOfFramesPresented,this.videoCallbackId=this.videoElement.requestVideoFrameCallback(this.videoFrameCallback)}setFaceTrackerMediaStreamResolution(t,a){(t<=360||a<=360)&&(this.scaleFactor=1),this.settings.faceTrackerWidth=t*this.scaleFactor,this.settings.faceTrackerHeight=a*this.scaleFactor,this.workers.forEach(s=>s.ft.worker.postMessage({action:U.SCALE_FACTOR_CHANGED,payload:{scaleFactor:this.scaleFactor}})),this.on.scaleFactorChanged&&this.on.scaleFactorChanged(this.scaleFactor)}setRotate180(t){this.rotate180=t,this.workers.forEach(a=>a.ft.worker.postMessage({action:U.SET_ROTATE_180,payload:{rotate180:t}}))}async setMediaStream(t){if(t instanceof MediaStream)try{const a=await Is(this,Dt,ya).call(this,t,this.videoElement);await this.videoElement.play(),this.settings.displayMediaStream||(this.videoElement.style.visibility="none");const s=this.videoElement.videoWidth||a.width||1,i=this.videoElement.videoHeight||a.height||1;return this.setFaceTrackerMediaStreamResolution(s,i),this.frameWidth=s,this.frameHeight=i,this.log(`Face tracker resolution: ${this.settings.faceTrackerWidth} x ${this.settings.faceTrackerHeight} pixels. Video resolution: ${this.frameWidth} x ${this.frameHeight} pixels`,b.sdk,{ftWidth:this.settings.faceTrackerWidth,ftHeight:this.settings.faceTrackerHeight,frameWidth:this.frameWidth,frameHeight:this.frameHeight}),this.createMediaElements(),this.videoCallbackId=this.videoElement.requestVideoFrameCallback(this.videoFrameCallback),!0}catch(a){return console.log("Error applying face tracker video track constraints",a),!1}return!1}stopTracking(){this.videoCallbackId&&this.videoElement.cancelVideoFrameCallback(this.videoCallbackId),this.videoElement.pause(),this.videoElement.srcObject=null}};le=new WeakMap,fe=new WeakMap,Dt=new WeakSet,ya=async function(e,t){t.srcObject=e,await new Promise(s=>t.onloadedmetadata=s);const[a]=e.getVideoTracks();return a.getSettings()};let Ls=$s;var E=(e=>(e.INIT="INIT",e.READY="READY",e.SET_MODE="SET_MODE",e.SET_NUMBER_OF_CHUNKS="SET_NUMBER_OF_CHUNKS",e.SET_TARGET_FPS="SET_TARGET_FPS",e.SET_CHUNK_DURATION_SECONDS="SET_CHUNK_DURATION_SECONDS",e.SET_FRAME_ORDER="SET_FRAME_ORDER",e.GET_CONSTRAINTS_CONFIG="GET_CONSTRAINTS_CONFIG",e.SET_CONSTRAINTS_CONFIG="SET_CONSTRAINTS_CONFIG",e.SET_FACE_ATTRIBUTE="SET_FACE_ATTRIBUTE",e.RESET_COLLECTION="RESET_COLLECTION",e.CANCEL_COLLECTION="CANCEL_COLLECTION",e.START_COLLECTION="START_COLLECTION",e.SET_PORTS="SET_PORTS",e.COLLECTOR_ERROR="COLLECTOR_ERROR",e.STAR_RATING="STAR_RATING",e.ALL_FACE_TRACKERS_WARMED_UP="ALL_FACE_TRACKERS_WARMED_UP",e.CONSTRAINTS_UPDATED="CONSTRAINTS_UPDATED",e.SHOULD_END_MEASUREMENT_EARLY="SHOULD_END_MEASUREMENT_EARLY",e.GET_LOGS="GET_LOGS",e.NEW_FRAME="NEW_FRAME",e.TRACKING_STATUS="TRACKING_STATUS",e.SCALE_FACTOR_CHANGED="SCALE_FACTOR_CHANGED",e.DESTROY="DESTROY",e))(E||{}),H=(e=>(e.CONNECT="CONNECT",e.DISCONNECT="DISCONNECT",e.DISCONNECTED="DISCONNECTED",e.LOGIN_WITH_TOKEN_SUCCESS="LOGIN_WITH_TOKEN_SUCCESS",e.SUBSCRIBED_TO_RESULTS="SUBSCRIBED_TO_RESULTS",e.CHUNK_SENT="CHUNK_SENT",e.RESULTS_RECEIVED="RESULTS_RECEIVED",e.CHUNK_ACKNOWLEDGED="CHUNK_ACKNOWLEDGED",e.ERROR="ERROR",e.NETWORK_DELAY="NETWORK_DELAY",e))(H||{}),Os=Object.defineProperty,Ta=e=>{throw TypeError(e)},Ms=(e,t,a)=>t in e?Os(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,ka=(e,t,a)=>Ms(e,typeof t!="symbol"?t+"":t,a),Ut=(e,t,a)=>t.has(e)||Ta("Cannot "+a),o=(e,t,a)=>(Ut(e,t,"read from private field"),a?a.call(e):t.get(e)),C=(e,t,a)=>t.has(e)?Ta("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),v=(e,t,a,s)=>(Ut(e,t,"write to private field"),t.set(e,a),a),u=(e,t,a)=>(Ut(e,t,"access private method"),a),Us=(e,t,a,s)=>({set _(i){v(e,t,i)},get _(){return o(e,t,s)}}),q,D,Z,M,V,Qe,et,tt,at,Le,Oe,st,Be,Fe,R,ve,G,He,X,it,ie,J,de,we,Ee,Me,ye,he,Ue,ut,Re,mt,Se,ze,P,We,ae,Pe,ee,se,re,Te,ke,h,Qt,ea,ta,wa,Ea,Ra,Ge,pt,It,_t,Ca,Aa,xa,Na,Da,Ia,Ve,rt,y,aa,_a,$a,La,Oa,be,$;const sa=Symbol("instance_creation_key"),Ps=class Ma{constructor(t){if(C(this,h),C(this,q),C(this,D,{mediaElement:document.createElement("div"),assetFolder:"",apiUrl:"",metrics:!1,logger:{sdk:!1,mediaPipe:!1,beforeRESTCall:!1,afterRESTCall:!1,extractionLibWasm:!1,apiClient:!1,extractionWorker:!1,faceTrackerWorkers:!1},mirrorVideo:!0,displayMediaStream:!0,constraintOverrides:{}}),C(this,Z,[{file:"decompress.json",uncompressedSize:89469},{file:"extraction_worker_0.1.0-beta.13_js.json",uncompressedSize:47465},{file:"facetracker_worker_0.1.0-beta.13_js.json",uncompressedSize:307098},{file:"extraction_wasm_0.1.0-beta.13.json",uncompressedSize:2142219},{file:"detectorModel_json.json",uncompressedSize:4640},{file:"detectorModel_bin.json",uncompressedSize:242046},{file:"landmarkModel_json.json",uncompressedSize:5036},{file:"landmarkModel_bin.json",uncompressedSize:1704814}]),C(this,M,new Zt),C(this,V,hs.init()),C(this,Qe),C(this,et),C(this,tt),C(this,at),C(this,Le),C(this,Oe),C(this,st),C(this,Be,{version:"",sdkId:""}),C(this,Fe,""),C(this,R),C(this,ve,0),C(this,G),C(this,He,ce.ASSETS_NOT_DOWNLOADED),C(this,X,""),C(this,it,""),C(this,ie,!1),C(this,J,!1),C(this,de,5),C(this,we,30),C(this,Ee,5),C(this,Me,!1),C(this,ye,4),C(this,he),C(this,Ue),C(this,ut),C(this,Re,1e7),C(this,mt,0),C(this,Se,new Map),C(this,ze,Promise.resolve()),C(this,P,0),C(this,We,-1),C(this,ae,-1),C(this,Pe,.5),C(this,ee,!1),C(this,se,-1),C(this,re),C(this,Te),C(this,ke),ka(this,"on",{beforeRESTCall:null,afterRESTCall:null,bytesDownloaded:null,faceTrackerStateChanged:null,resultsReceived:null,constraintsUpdated:null,mediaElementResize:null,facialLandmarksUpdated:null,chunkSent:null,error:null}),t!==sa)throw new Error("Use await Measurement.init() to create an instance of Measurement class.")}static async init(t){if(!t)throw new Error("Missing `settings` object");const a=new Ma(sa);if(!a.setSettings(t))throw new Error("Invalid settings object");v(a,q,rs({url:{http:new URL("https://api.deepaffex.ai")},onBeforeRESTCall:()=>{var n,r;u(n=a,h,Aa).call(n),u(r=a,h,xa).call(r)},onAfterRESTCall:(n,r)=>{var l,c;u(l=a,h,Na).call(l,n,r),u(c=a,h,Da).call(c,n,r)}}));const s=n=>{var r;const{bytes:l,url:c,uncompressedSize:f,done:g}=n.detail;u(r=a,h,y).call(r,`bytesDownloaded event, ${l}, ${f}, ${c}, ${g}`,b.mediaPipe),a.on.bytesDownloaded&&a.on.bytesDownloaded(l,f,c,g)},i=n=>{var r;const{error:l,url:c}=n.detail;u(r=a,h,y).call(r,`downloadError event, ${c}, ${l}`,b.mediaPipe),a.on.error&&a.on.error(Ze.ASSET_DOWNLOAD,{url:c,error:l})};return o(a,V).addEventListener("downloadedError",i),o(a,V).addEventListener("bytesDownloaded",s),o(a,M).setVersion(a.getVersion()),o(a,D).logger&&Object.values(o(a,D).logger).some(n=>n===!0)&&o(a,M).start(),setTimeout(()=>{var n;u(n=a,h,be).call(n,ce.ASSETS_NOT_DOWNLOADED)},500),new Proxy(a,{get(n,r,l){const c=r;return typeof n[c]=="function"?n[c].bind(n):Reflect.get(n,c,l)},set(n,r,l){return console.log(`Setting property "${String(r)}" to "${l}" is not allowed`),!0}})}loadMask(t){if(o(this,R)){let a=!1;const s=o(this,R).mediaElement.querySelector("svg");s&&(a=!0,o(this,R).mediaElement.removeChild(s)),o(this,R).mediaElement.appendChild(t),a&&(o(this,R).mediaElement.style.setProperty("border","1px solid transparent"),setTimeout(()=>{o(this,R).mediaElement.removeAttribute("style")},100))}}setSettings(t){const a=ks(o(this,D),t);return a.results==="valid"?(v(this,D,a.settings),!0):!1}getVersion(){return{webSDK:ha,extractionLib:o(this,Be),faceTracker:o(this,Fe)}}async downloadAssets(){const{assetFolder:t}=o(this,D);if(u(this,h,y).call(this,`Asset base URL ${t}`,b.sdk),u(this,h,y).call(this,"Start downloading decompressor...",b.sdk),await o(this,V).fetchAsset(o(this,Z),`${t}/`,"decompress.json",!0,"gzip"),o(this,J))return u(this,h,y).call(this,"Skip downloading assets because the process is being destroyed",b.sdk),!1;if(o(this,V).canDecompress){const a=await u(this,h,Ea).call(this,t),s=await u(this,h,wa).call(this,t);if(o(this,J))return u(this,h,y).call(this,"Skip initializing workers because the process is being destroyed",b.sdk),!1;if(a&&s){await u(this,h,_t).call(this)||u(this,h,y).call(this,"Failed to initialize DFX extraction lib",b.extractionLibWasm);const i=await u(this,h,It).call(this);return i||u(this,h,y).call(this,"Failed to initialize TFJS face tracker",b.mediaPipe),o(this,J)?(o(this,ee)&&await u(this,h,Ge).call(this),i&&o(this,R)&&await u(this,h,pt).call(this),!1):(u(this,h,Ra).call(this),!0)}else return!1}else return u(this,h,y).call(this,"Decompressor not ready",b.sdk),!1}setExtractionLibSettings(t=6,a=30,s=5){v(this,de,t-1),v(this,we,a),v(this,Ee,s)}async setNextChunkAsFinal(){v(this,Me,!0),await u(this,h,$).call(this,E.SHOULD_END_MEASUREMENT_EARLY,{},!0),u(this,h,y).call(this,"Set the action for the next chunk to LAST::PROCESS",b.extractionLibWasm)}async startTracking(){o(this,R)&&(o(this,R).isExtracting||(o(this,R).setIsExtracting(!0),u(this,h,y).call(this,"Start tracking frames",b.mediaPipe),await u(this,h,$).call(this,E.SET_NUMBER_OF_CHUNKS,{value:o(this,Re)},!0),await u(this,h,Ve).call(this)))}async stopTracking(){if(o(this,R)){o(this,R).stopTracking(),await u(this,h,Ia).call(this),o(this,R).setIsExtracting(!1),u(this,h,y).call(this,"Stop extracting frames",b.mediaPipe);const{numOfFramesPresented:t,warmupFrameNumber:a,numOftrackedVideoFrames:s}=o(this,R);u(this,h,y).call(this,"Tracking metrics",b.sdk,{numOfFramesPresented:t,warmupFrameNumber:a,numOftrackedVideoFrames:s}),v(this,X,"")}}async disconnect(){if(o(this,ie)&&await u(this,h,$).call(this,H.DISCONNECT,{},!0),o(this,D).metrics&&o(this,R)){const t=o(this,R).logger.mertics.debugLogs,a=o(this,M).mertics.debugLogs,s=await u(this,h,$).call(this,E.GET_LOGS,{},!0);v(this,re,[]),v(this,Te,0);const i=new Promise(r=>{v(this,ke,()=>r(void 0))});o(this,R).workers.forEach(r=>{r?.ft?.worker?.postMessage({action:U.GET_LOGS})}),await i;let n=[...a,...t,...s.payload];o(this,re)&&o(this,re).forEach(r=>{Array.isArray(r.logs)&&(n=n.concat(r.logs))}),n.sort((r,l)=>{const c=f=>{if(!f.timestamp)return 0;const g=f.timestamp.replace(/\[|\]/g,"");return Date.parse(g.replace(/(AM|PM)/,"").trim())+(g.includes("PM")&&!g.includes("12:")?432e5:0)};return c(r)-c(l)}),o(this,M).retrieveLogs(n)}}async destroy(){v(this,J,!0);let t=!0,a=!0;o(this,R)?.isExtracting&&await this.stopTracking(),o(this,ie)&&await this.disconnect(),o(this,ee)&&(t=await u(this,h,Ge).call(this),u(this,h,y).call(this,"Destroyed",b.extractionLibWasm)),o(this,R)&&(a=await u(this,h,pt).call(this),u(this,h,y).call(this,"Destroyed",b.mediaPipe)),v(this,J,!1);const s=t&&a;return s||u(this,h,y).call(this,"Failed to destroy all workers",b.sdk),s}async reset(){if(o(this,He)!==ce.ASSETS_NOT_DOWNLOADED){o(this,R)?.isExtracting&&await this.stopTracking(),await this.destroy(),v(this,M,new Zt),v(this,Be,{version:"",sdkId:""}),v(this,Fe,""),v(this,ve,0),v(this,X,""),v(this,ie,!1),v(this,de,5),v(this,we,30),v(this,Ee,5),v(this,Me,!1),v(this,he,void 0),v(this,Re,1e7),v(this,mt,0),v(this,Se,new Map),v(this,ze,Promise.resolve()),v(this,P,0),v(this,We,-1),v(this,ae,-1),o(this,D).mediaElement.innerHTML="",v(this,se,-1);const t=await u(this,h,_t).call(this),a=await u(this,h,It).call(this);return t&&a}return!1}async setMediaStream(t){if(o(this,R)&&!o(this,R).isExtracting&&o(this,G)){await o(this,R).setMediaStream(t);const a=Object.fromEntries(o(this,R).workers.map((s,i)=>[`port${i+1}`,s.channel.port1]));o(this,G).worker.postMessage({action:E.SET_PORTS,payload:{numOfWorkers:o(this,ye),workerPorts:a}},[...o(this,R).workers.map(s=>s.channel.port1)])}}async prepare(t,a,s,i){o(this,q).setSession({userToken:t,userRefreshToken:a});let n=!1;if(o(this,D).apiUrl)n=!0;else{const{status:c,region:f}=await u(this,h,_a).call(this,"user");n=c==="200",o(this,D).apiUrl=`api.${f}.deepaffex.ai`}o(this,q).setUrl(`https://${o(this,D).apiUrl}`);const r=await u(this,h,$a).call(this,t,a,"user"),l=await u(this,h,La).call(this,s,i);return r&&l&&n}async setConstraintsConfig(t){await u(this,h,$).call(this,E.SET_CONSTRAINTS_CONFIG,{...o(this,ut),...t&&{...o(this,D).constraintOverrides}},!0)}async startMeasurement(t=!1,a={}){if(v(this,Me,!1),v(this,X,""),v(this,se,-1),await u(this,h,Oa).call(this,a),o(this,G)&&o(this,X)!==""){await u(this,h,rt).call(this),await u(this,h,$).call(this,E.SET_NUMBER_OF_CHUNKS,{value:o(this,de)+1},!0),await this.setConstraintsConfig(t),await u(this,h,Ca).call(this),await u(this,h,Ve).call(this);const{userToken:s}=o(this,q).getSession();s?await u(this,h,$).call(this,H.CONNECT,{token:s,measurementId:o(this,X)},!0):u(this,h,y).call(this,"User token is missing. Unable to connect.",b.webSocket)}return o(this,X)}setDemographics(t){return ws(t)?(v(this,he,t),u(this,h,y).call(this,`Demographics updated ${JSON.stringify(t)}`,b.extractionLibWasm),!0):(u(this,h,y).call(this,`Error updating Demographics ${JSON.stringify(t)}`,b.extractionLibWasm),!1)}setObjectFit(t){return o(this,R)&&ht!==void 0&&Object.values(ht).includes(t)?(o(this,R).settings.objectFit=t,!0):!1}};q=new WeakMap,D=new WeakMap,Z=new WeakMap,M=new WeakMap,V=new WeakMap,Qe=new WeakMap,et=new WeakMap,tt=new WeakMap,at=new WeakMap,Le=new WeakMap,Oe=new WeakMap,st=new WeakMap,Be=new WeakMap,Fe=new WeakMap,R=new WeakMap,ve=new WeakMap,G=new WeakMap,He=new WeakMap,X=new WeakMap,it=new WeakMap,ie=new WeakMap,J=new WeakMap,de=new WeakMap,we=new WeakMap,Ee=new WeakMap,Me=new WeakMap,ye=new WeakMap,he=new WeakMap,Ue=new WeakMap,ut=new WeakMap,Re=new WeakMap,mt=new WeakMap,Se=new WeakMap,ze=new WeakMap,P=new WeakMap,We=new WeakMap,ae=new WeakMap,Pe=new WeakMap,ee=new WeakMap,se=new WeakMap,re=new WeakMap,Te=new WeakMap,ke=new WeakMap,h=new WeakSet,Qt=function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1},ea=function(e){o(this,R)?.setRotate180(e)},ta=function(){const e=u(this,h,aa).call(this),t=u(this,h,Qt).call(this)&&e==="landscape-primary";u(this,h,ea).call(this,t)},wa=async function(e){u(this,h,y).call(this,"Start downloading TFJS face tracker assets...",b.mediaPipe);const t=`${e}/models/`,[a,s,i,n,r]=await Promise.all([o(this,V).fetchAsset(o(this,Z),t,"detectorModel_json.json",!0,"brotli"),o(this,V).fetchAsset(o(this,Z),t,"detectorModel_bin.json",!0,"brotli"),o(this,V).fetchAsset(o(this,Z),t,"landmarkModel_json.json",!0,"brotli"),o(this,V).fetchAsset(o(this,Z),t,"landmarkModel_bin.json",!0,"brotli"),o(this,V).fetchAsset(o(this,Z),`${e}/`,`facetracker_worker_${this.getVersion().webSDK}_js.json`,!0,"brotli")]);return a&&s&&i&&n&&r?(u(this,h,y).call(this,"TFJS face tracker assets successfully downloaded",b.mediaPipe),v(this,Qe,a),v(this,et,s),v(this,tt,i),v(this,at,n),v(this,st,r),!0):(u(this,h,y).call(this,"Failed to download TFJS face tracker assets",b.mediaPipe),!1)},Ea=async function(e){u(this,h,y).call(this,"Start downloading DFX extraction worker assets...",b.extractionLibWasm);const[t,a]=await Promise.all([o(this,V).fetchAsset(o(this,Z),`${e}/extraction/`,`extraction_wasm_${this.getVersion().webSDK}.json`,!0,"brotli"),o(this,V).fetchAsset(o(this,Z),`${e}/`,`extraction_worker_${this.getVersion().webSDK}_js.json`,!0,"brotli")]);return t&&a?(u(this,h,y).call(this,"DFX extraction worker assets successfully downloaded",b.extractionLibWasm),v(this,Le,t),v(this,Oe,a),!0):(u(this,h,y).call(this,"Failed to download DFX extraction worker assets",b.extractionLibWasm),!1)},Ra=function(){if(o(this,R)){const e=t=>{u(this,h,ta).call(this),this.on.mediaElementResize&&this.on.mediaElementResize(t)};o(this,D).mediaElement.addEventListener("mediaElementSizeChanged",e)}},Ge=async function(){await u(this,h,$).call(this,E.DESTROY,{},!0);const e=o(this,G).destroy();return v(this,ee,!1),e},pt=async function(){let e=!1;return o(this,R)&&(e=await o(this,R).destroyWorkers(),v(this,R,void 0)),e},It=async function(){o(this,R)&&(await u(this,h,pt).call(this),u(this,h,y).call(this,"Face Tracker workers destroyed",b.mediaPipe)),u(this,h,be).call(this,ce.NOT_LOADED);const e={faceTrackerCode:o(this,st),numOfWorkers:o(this,ye),mediaElement:o(this,D).mediaElement,mirrorVideo:o(this,D).mirrorVideo,metrics:o(this,D).metrics,displayMediaStream:o(this,D).displayMediaStream,isLoggingFaceTrackerWorkers:o(this,D).logger?.faceTrackerWorkers??!1,isLoggingSdk:o(this,D).logger?.sdk??!1,scaleFactor:o(this,Pe),models:{detectorJson:o(this,Qe),detectorBin:o(this,et),landmarkJson:o(this,tt),landmarkBin:o(this,at)}};u(this,h,be).call(this,ce.LOADING);const t=await Ls.init(e,o(this,M),{faceTrackersReady:(a,s,i,n)=>{u(this,h,y).call(this,`TFJS face tracker version ${s} loaded. Worker name: ${a} - workerId: ${i} - backend: ${n}`,b.mediaPipe),v(this,Fe,`${s}-${n}`),v(this,ve,o(this,ve)+1),o(this,M).setVersion(this.getVersion()),o(this,ve)===o(this,ye)&&u(this,h,be).call(this,ce.LOADED)},frameAvailable:(a,s,i,n,r)=>{!n&&r?o(this,G).worker.postMessage({action:E.NEW_FRAME,payload:{frameNumber:s,frameTimestamp:a,frame:r,lastFrameNumber:i,tracked:n}},[r]):o(this,G).worker.postMessage({action:E.TRACKING_STATUS,payload:{frameNumber:s,frameTimestamp:a,lastFrameNumber:i,tracked:n}})},landmarksAvailable:(a,s,i)=>{const n=i/1e3;o(this,ae)===0&&v(this,ae,n),v(this,We,n),o(this,R).numOftrackedVideoFrames+=1,a.detected||(o(this,R).starRating=0);const{starRating:r}=o(this,R),l=30,c=Math.min(o(this,We)-o(this,ae),l),f=o(this,ae)>0?c/l*100:0,g={video:o(this,R).videoFpsTracker.fps.toFixed(1),faceTracker:o(this,R).faceTrackerFpsTracker.fps.toFixed(1)},T={face:a,annotations:s,starRating:r,percentCompleted:f,fps:g};this.on.facialLandmarksUpdated&&this.on.facialLandmarksUpdated(T)},scaleFactorChanged:a=>{v(this,Pe,a),o(this,R).scaleFactor=a,o(this,G).worker.postMessage({action:E.SCALE_FACTOR_CHANGED,payload:{scaleFactor:a}})},logsAvailable:(a,s)=>{o(this,re)||v(this,re,[]),o(this,re).push({workerId:s,logs:a}),v(this,Te,(o(this,Te)||0)+1),o(this,Te)===o(this,ye)&&o(this,ke)&&(o(this,ke).call(this),v(this,ke,void 0))}});return o(this,J)&&t?(await t.destroyWorkers(),u(this,h,y).call(this,"Face Tracker workers destroyed",b.mediaPipe),!1):t?(v(this,R,t),!0):!1},_t=async function(){if(o(this,J))return!1;const e=new TextDecoder().decode(new Uint8Array(o(this,Oe)));if(o(this,ee)&&await u(this,h,Ge).call(this),v(this,ee,!1),v(this,G,vt.init(e,"module","EXTRACTION_WORKER")),o(this,J))return o(this,G).destroy(),!1;const{studyCfgData:t}=o(this,q).getSession();if(t&&o(this,Le)&&o(this,Oe)){o(this,G).worker.onmessage=async s=>{const{data:i}=s,{id:n,result:r}=i,{action:l,payload:c}=r,f=o(this,Se).get(n);if(f||n===-1){switch(l){case E.READY:{const{sdkId:g,version:T,workerName:w}=c;v(this,Be,{version:T,sdkId:g}),u(this,h,y).call(this,`DFX extraction worker WASM loaded. SDK ID: ${g} - Version: ${T} - Worker Name: ${w}`,b.extractionLibWasm),await u(this,h,$).call(this,E.SET_MODE,{value:"discrete"},!0),await u(this,h,$).call(this,E.SET_NUMBER_OF_CHUNKS,{value:o(this,Re)},!0),await u(this,h,$).call(this,E.SET_TARGET_FPS,{value:o(this,we)},!0),await u(this,h,$).call(this,E.SET_CHUNK_DURATION_SECONDS,{value:o(this,Ee)},!0),await u(this,h,$).call(this,E.SET_FRAME_ORDER,{value:ba.RGBA},!0),await u(this,h,$).call(this,E.GET_CONSTRAINTS_CONFIG,{},!0),v(this,ut,o(this,Ue));break}case E.SET_MODE:{c&&u(this,h,y).call(this,`Set mode to ${c.mode}`,b.extractionLibWasm);break}case E.SET_NUMBER_OF_CHUNKS:{c&&u(this,h,y).call(this,`Set number of chunks to ${r.number}`,b.extractionLibWasm);break}case E.SET_TARGET_FPS:{c&&u(this,h,y).call(this,`Set target FPS to ${o(this,we)}`,b.extractionLibWasm);break}case E.SET_CHUNK_DURATION_SECONDS:{c&&u(this,h,y).call(this,`Set chunk duration to ${o(this,Ee)} Seconds`,b.extractionLibWasm);break}case E.SET_FRAME_ORDER:{c&&u(this,h,y).call(this,"Set channel order RGBA",b.extractionLibWasm);break}case E.GET_CONSTRAINTS_CONFIG:{c&&(v(this,Ue,c),u(this,h,y).call(this,`Get constraints ${JSON.stringify(c)}`,b.extractionLibWasm));break}case E.SET_CONSTRAINTS_CONFIG:{c&&(v(this,Ue,c),u(this,h,y).call(this,`Set constraints ${JSON.stringify(c)}`,b.extractionLibWasm));break}case E.SET_FACE_ATTRIBUTE:{const{success:g,faceId:T,attribute:w,value:S}=c;g&&u(this,h,y).call(this,`Set face attribute: faceId: ${T}, attribute: ${w}, value: ${S}`,b.extractionLibWasm);break}case E.RESET_COLLECTION:{c&&u(this,h,y).call(this,"Reset collection",b.extractionLibWasm);break}case E.CANCEL_COLLECTION:{c&&u(this,h,y).call(this,"Collecttion cancelled",b.extractionLibWasm);break}case E.START_COLLECTION:{c&&u(this,h,y).call(this,`Collector started - state: ${c}`,b.extractionLibWasm);break}case E.SET_PORTS:{c&&u(this,h,y).call(this,"Ports set",b.extractionLibWasm);break}case E.COLLECTOR_ERROR:{if(c){const{error:g,frameNumber:T}=c;u(this,h,y).call(this,`Collector error on frame ${T}: ${g}`,b.extractionLibWasm),this.on.error&&this.on.error(Ze.COLLECTOR,c),o(this,ie)?(u(this,h,y).call(this,"Measurement in progress, Stopping tracking due to collector error",b.extractionLibWasm),await this.stopTracking()):(u(this,h,y).call(this,"No active measurement, resetting and starting collection",b.extractionLibWasm),await u(this,h,rt).call(this),await u(this,h,Ve).call(this))}break}case E.STAR_RATING:{o(this,R).starRating=c.rating;break}case E.ALL_FACE_TRACKERS_WARMED_UP:{const{frameNumber:g}=r;o(this,R).warmupFrameNumber=g,u(this,h,y).call(this,"All face tracker workers are warmed up.",b.mediaPipe),u(this,h,be).call(this,ce.READY);break}case E.CONSTRAINTS_UPDATED:{const{feedback:g,status:T}=c;this.on.constraintsUpdated&&this.on.constraintsUpdated(g,T);break}case E.SHOULD_END_MEASUREMENT_EARLY:{const{currentFinalChunkNumber:g,currentResultsOrder:T,newFinalChunkNumber:w}=r;u(this,h,y).call(this,`Request the end measurement early. Current final chunk number: ${g}, Current results order: ${T}, New final chunk number: ${w}`,b.extractionLibWasm);break}case E.GET_LOGS:break;case E.DESTROY:break;case H.CONNECT:{v(this,ie,!0),v(this,ae,0),u(this,h,y).call(this,c?"Connected":"Connection error",b.webSocket);break}case H.LOGIN_WITH_TOKEN_SUCCESS:{u(this,h,y).call(this,"Successfully logged in with token",b.webSocket);break}case H.SUBSCRIBED_TO_RESULTS:{u(this,h,y).call(this,"Subscribed to the results",b.webSocket);break}case H.CHUNK_SENT:{u(this,h,y).call(this,`Chunk sent ${JSON.stringify(c)}`,b.webSocket),this.on.chunkSent&&this.on.chunkSent(c);break}case H.DISCONNECT:{v(this,ie,!1),u(this,h,y).call(this,"Disconnect",b.webSocket);break}case H.DISCONNECTED:{u(this,h,y).call(this,`Disconnected! - code: ${c.code}, reason: ${c.reason}, wasClean: ${c.wasClean}`,b.webSocket),this.on.error&&this.on.error(Ze.WEB_SOCKET,c);break}case H.CHUNK_ACKNOWLEDGED:{u(this,h,y).call(this,`Chunk number ${c.chunkOrder} received by the server!`,b.webSocket),o(this,de)===c.chunkOrder&&await this.stopTracking();break}case H.RESULTS_RECEIVED:{const{MeasurementID:g,MeasurementDataID:T}=c;g?v(this,se,parseInt(T.split(":")[1],10)):v(this,se,o(this,se)+1),this.on.resultsReceived&&this.on.resultsReceived(c),u(this,h,y).call(this,`Results received: ${JSON.stringify(c)}`,b.webSocket),o(this,se)===o(this,de)&&(await u(this,h,$).call(this,H.DISCONNECT,{},!0),await u(this,h,rt).call(this),await u(this,h,Ve).call(this));break}case H.NETWORK_DELAY:{const{delay:g,description:T,actionId:w}=c;u(this,h,y).call(this,`Round-trip delay for ${T} call with Action ID ${w} was ${g.toFixed(2)} ms`,b.webSocket,{delay:g,actionId:w,description:T});break}case H.ERROR:{u(this,h,y).call(this,"Error",b.webSocket),this.on.error&&this.on.error(Ze.WEB_SOCKET,c);break}}f&&(f.resolve(r),o(this,Se).delete(n))}};const a=(await u(this,h,$).call(this,E.INIT,{wasm:o(this,Le),studyConfigData:t,isLogging:o(this,D).logger?.extractionWorker||!1,metrics:o(this,D).metrics||!1,apiUrl:o(this,D).apiUrl,scaleFactor:o(this,Pe)},!0)).action===E.READY;return v(this,ee,a),o(this,ee)&&o(this,J)?(await u(this,h,Ge).call(this),!1):a}else return!1},Ca=async function(){if(o(this,R)){if(!o(this,he)){u(this,h,y).call(this,"No demographics to set",b.extractionLibWasm);return}const e="1",{age:t,height:a,weight:s,sex:i,smoking:n,bloodPressureMedication:r,diabetes:l}=o(this,he),c=await u(this,h,$).call(this,E.SET_FACE_ATTRIBUTE,{faceId:e,attribute:oe.SEX_ASSIGNED_AT_BIRTH,value:i},!0),f=await u(this,h,$).call(this,E.SET_FACE_ATTRIBUTE,{faceId:e,attribute:oe.AGE_YEARS,value:t},!0),g=await u(this,h,$).call(this,E.SET_FACE_ATTRIBUTE,{faceId:e,attribute:oe.HEIGHT_CM,value:a},!0),T=await u(this,h,$).call(this,E.SET_FACE_ATTRIBUTE,{faceId:e,attribute:oe.WEIGHT_KG,value:s},!0),w=await u(this,h,$).call(this,E.SET_FACE_ATTRIBUTE,{faceId:e,attribute:oe.SMOKER,value:n},!0),S=await u(this,h,$).call(this,E.SET_FACE_ATTRIBUTE,{faceId:e,attribute:oe.BLOOD_PRESSURE_MEDICATION,value:r},!0),k=await u(this,h,$).call(this,E.SET_FACE_ATTRIBUTE,{faceId:e,attribute:oe.DIABETES,value:l},!0);u(this,h,y).call(this,`Set demographics for Face ID ${e}, ${JSON.stringify(o(this,he))}`,b.extractionLibWasm);const I={SEX_ASSIGNED_AT_BIRTH:{success:c.payload.success},AGE_YEARS:{success:f.payload.success},HEIGHT_CM:{success:g.payload.success},WEIGHT_KG:{success:T.payload.success},SMOKER:{success:w.payload.success},BLOOD_PRESSURE_MEDICATION:{success:S.payload.success},DIABETES:{success:k.payload.success}};u(this,h,y).call(this,`Validation results for demographics for Face ID ${e}, ${JSON.stringify(I)}`,b.extractionLibWasm)}},Aa=function(){},xa=function(){const e=new Date().toISOString();Xt(e)&&(u(this,h,y).call(this,`Action ID: ${o(this,P)}`,b.beforeRESTCall),this.on.beforeRESTCall&&this.on.beforeRESTCall(e,o(this,P)))},Na=function(e,t){},Da=function(e,t){const a=new Date().toISOString();Xt(a)&&(u(this,h,y).call(this,`Action ID: ${o(this,P)}, HTTP status code: ${e}, error: ${JSON.stringify(t)}`,b.afterRESTCall),this.on.afterRESTCall&&this.on.afterRESTCall(a,o(this,P),e,t))},Ia=async function(){await u(this,h,$).call(this,E.CANCEL_COLLECTION,{},!0)},Ve=async function(){await u(this,h,$).call(this,E.START_COLLECTION,{},!0)},rt=async function(){await u(this,h,$).call(this,E.RESET_COLLECTION,{},!0),await u(this,h,$).call(this,E.SET_NUMBER_OF_CHUNKS,{value:o(this,Re)},!0)},y=function(e,t,a){o(this,D).metrics&&o(this,M).log(e,t,"",!0,a),o(this,D).logger?.mediaPipe&&t===b.mediaPipe&&o(this,M).info(e,t),o(this,D).logger?.beforeRESTCall&&t===b.beforeRESTCall&&o(this,M).info(e,t),o(this,D).logger?.afterRESTCall&&t===b.afterRESTCall&&o(this,M).info(e,t),o(this,D).logger?.extractionLibWasm&&t===b.extractionLibWasm&&o(this,M).info(e,t),o(this,D).logger?.apiClient&&t===b.apiClient&&o(this,M).info(e,t),o(this,D).logger?.webSocket&&t===b.webSocket&&o(this,M).info(e,t),o(this,D).logger?.sdk&&t===b.sdk&&o(this,M).info(e,t)},aa=function(){return screen.orientation.type},_a=async function(e){v(this,P,0);const t=performance.now(),a=await o(this,q).http.auths.validate(e),s=performance.now()-t,{status:i,body:n}=a;if(u(this,h,y).call(this,i==="200"?"Successfully validated the Token":`Failed to validate token. Status: ${i}`,b.apiClient,{delay:s,actionId:o(this,P),description:"Validate Token"}),i==="200"){const{Region:r}=n;return{region:r,status:i}}else return{status:i,region:""}},$a=async function(e,t,a){v(this,P,2304);const s=performance.now(),i=await o(this,q).http.auths.renew({Token:e,RefreshToken:t},a),n=performance.now()-s,{status:r}=i;return u(this,h,y).call(this,r==="200"?"Successfully refreshed the Token":`Failed to refresh token. Status: ${r}`,b.apiClient,{delay:n,actionId:o(this,P),description:"Refresh Token"}),r==="200"},La=async function(e,t){v(this,P,806);const a=performance.now();v(this,it,e);const s=await o(this,q).http.studies.retrieveSdkConfigData({StudyID:e,...t&&{sdkId:t}},"user"),i=performance.now()-a,{status:n}=s;return u(this,h,y).call(this,n==="200"?"Retrieve SDK Config Data - success":"Retrieve SDK Config Data - failure",b.apiClient,{delay:i,actionId:o(this,P),description:"Retrieve SDK Config Data"}),n==="200"},Oa=async function(e){u(this,h,y).call(this,"Get Measurement ID",b.apiClient),v(this,P,504);const t=performance.now(),a={StudyID:o(this,it),Resolution:100};e.partnerId&&(a.PartnerID=e.partnerId),e.userProfileId&&(a.UserProfileID=e.userProfileId);const s=await o(this,q).http.measurements.create(a,"user"),i=performance.now()-t,{status:n,body:r}=s;let l="";n==="200"?(v(this,X,r.ID),l=`Successfully obtained measurement ID: ${o(this,X)}`):(v(this,X,""),l=`Failed to obtain measurement ID. Status: ${n}`),u(this,h,y).call(this,l,b.apiClient,{delay:i,actionId:o(this,P),measurementId:o(this,X),description:"Get Measurement ID"})},be=function(e){v(this,He,e),u(this,h,y).call(this,`Face tracker state changed: ${e}`,b.mediaPipe),this.on.faceTrackerStateChanged&&this.on.faceTrackerStateChanged(o(this,He))},$=function(e,t,a=!1){return new Promise(s=>{const i=Us(this,mt)._++;o(this,Se).set(i,{resolve:s,action:e});const n=()=>o(this,G).worker.postMessage({id:i,action:e,payload:t});a?v(this,ze,o(this,ze).then(n).catch(r=>console.error(r))):n()})},ka(Ps,"VERSION",ha);class Bs{static VERSION=ja;#e=document.createElement("div");#a=document.createElement("div");#s=!1;#i=!1;on={results:null,error:null,event:null};constructor(){this.#e.style.height="100%"}async init(t){const{container:a,appPath:s,settings:i,profile:n,config:r,language:l,apiUrl:c}=t;return this.#a=a,new Promise((f,g)=>{const T=a.attachShadow({mode:"open"}),w="app",S=document.createElement("link");S.rel="stylesheet",S.href=`${s}/stylex.css`,T.appendChild(S);const k=document.createElement("link");k.rel="stylesheet",k.href=`${s}/${w}.css`,T.appendChild(k);const I=N=>{this.on.results&&this.on.results({...N.detail})},x=N=>{this.on.error&&this.on.error({...N.detail})},L=N=>{this.on.event&&this.on.event({...N.detail}),N.detail.event===Vt.APP_LOADED.event&&(this.#s=!0,f()),N.detail.event===Vt.ASSETS_DOWNLOADED.event&&(this.#i=!0)};this.#e.addEventListener(Q.RESULTS,I),this.#e.addEventListener(Q.ERROR,x),this.#e.addEventListener(Q.APPEVENT,L),T.appendChild(this.#e);const W=document.createElement("script");W.type="module",W.src=`${s}/${w}.mjs`,W.onload=()=>{import(W.src).then(N=>{N.app.init(this.#e,s,i,n,c,r,l)}).catch(N=>{g(new Error("Failed to initialize Measurement Embedded React app: "+N.message))})},W.onerror=()=>{g(new Error("Failed to load the measurement embedded app script"))},T.appendChild(W)})}#t(){if(!this.#s)throw new Error("MeasurementEmbeddedApp is not initialized. Call init() before using this method.")}#r(){if(!this.#i)throw new Error('Assets not downloaded and SDK not initialized. Please wait for the "ASSETS_DOWNLOADED" event before calling this method.')}async destroy(){return this.#t(),this.#r(),new Promise(t=>{const a=i=>{if(this.#e.removeEventListener(Q.DESTROYED,a),this.#a){const n=this.#a.cloneNode(!1);this.#a.replaceWith(n)}t(i.detail.destroyed)};this.#e.addEventListener(Q.DESTROYED,a);const s=new CustomEvent("measurement-embedded-app-action",{detail:{action:pe.DESTROY,data:{}}});this.#e.dispatchEvent(s)})}setTheme(t){this.#t();const a=new CustomEvent("measurement-embedded-app-action",{detail:{action:pe.SET_THEME,data:{theme:t}}});this.#e.dispatchEvent(a)}setLanguage(t){this.#t();const a=new CustomEvent("measurement-embedded-app-action",{detail:{action:pe.SET_LANGUAGE,data:{language:t}}});this.#e.dispatchEvent(a)}setAppSettings(t,a,s,i={}){this.#t();const n=new CustomEvent("measurement-embedded-app-action",{detail:{action:pe.SET_APP_SETTINGS,data:{token:t,refreshToken:a,studyId:s,measurementOptions:i}}});this.#e.dispatchEvent(n)}async cancel(t){return this.#t(),this.#r(),new Promise(a=>{const s=n=>{this.#e.removeEventListener(Q.CANCELLED,s),a(n.detail.reset)};this.#e.addEventListener(Q.CANCELLED,s);const i=new CustomEvent("measurement-embedded-app-action",{detail:{action:pe.CANCEL,data:{reset:t}}});this.#e.dispatchEvent(i)})}getLogs(){return this.#t(),new Promise(t=>{const a=i=>{this.#e.removeEventListener(Q.LOGS,a),t(i.detail.logs)};this.#e.addEventListener(Q.LOGS,a);const s=new CustomEvent("measurement-embedded-app-action",{detail:{action:pe.GET_LOGS,data:{}}});this.#e.dispatchEvent(s)})}}const Ua="/dfxapi-cn",Fs="/dfxapi-int";function Hs(e){return e.includes("deepaffex.ai")?Fs:e.includes("deepaffex.cn")?Ua:e}async function zs(e,t){const a=Hs(t??Ua);console.log("[dfxApi] registerLicense → POST",`${a}/organizations/licenses`);const s=await fetch(`${a}/organizations/licenses`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({Key:e,DeviceTypeID:"ANDROID_PHONE",Name:"DFX Web Monitor",Identifier:"DFXCLIENT",Version:"2.9.5-CN-Debug"})});if(console.log("[dfxApi] registerLicense ← HTTP",s.status),!s.ok){const r=await s.text();throw new Error(`registerLicense failed: ${s.status} ${r}`)}const i=await s.json(),n=i.Token?i.Token.slice(0,20)+"…":"(empty)";return console.log("[dfxApi] registerLicense ✓ DeviceID:",i.DeviceID,"| token preview:",n),i.Token,{deviceToken:i.Token,refreshToken:i.RefreshToken,deviceId:i.DeviceID}}const{SEX_ASSIGNED_MALE_AT_BIRTH:Ws,SMOKER_FALSE:Gs,BLOOD_PRESSURE_MEDICATION_FALSE:Vs,DIABETES_NONE:Ks}=xs,js={APP_LOADED:[0,"wmea.APP_LOADED"],ASSETS_DOWNLOADED:[5,"wmea.ASSETS_DOWNLOADED"],FACE_TRACKER_LOADED:[10,"wmea.FACE_TRACKER_LOADED"],CAMERA_PERMISSION_GRANTED:[12,"wmea.CAMERA_PERMISSION_GRANTED"],CAMERA_STARTED:[15,"wmea.CAMERA_STARTED"],MEASUREMENT_PREPARED:[20,"wmea.MEASUREMENT_PREPARED"],MEASUREMENT_STARTED:[25,"wmea.MEASUREMENT_STARTED"],INTERMEDIATE_RESULTS:[50,"wmea.INTERMEDIATE_RESULTS"],MEASUREMENT_COMPLETED:[95,"wmea.MEASUREMENT_COMPLETED"],RESULTS_RECEIVED:[100,"wmea.RESULTS_RECEIVED"]},Ys="/ai-health-h5-demo/";function Xs(e){return`${Ys}${e.replace(/^\/+/,"")}`.replace(/\/$/,"")}const qs={TOO_CLOSE:"wmea.TOO_CLOSE",TOO_FAR:"wmea.TOO_FAR",TURN_LEFT:"wmea.TURN_LEFT",TURN_RIGHT:"wmea.TURN_RIGHT",TURN_UP:"wmea.TURN_UP",TURN_DOWN:"wmea.TURN_DOWN",TILT_LEFT:"wmea.TILT_LEFT",TILT_RIGHT:"wmea.TILT_RIGHT",NOT_CENTERED:"wmea.NOT_CENTERED",TOO_MUCH_MOVEMENT:"wmea.TOO_MUCH_MOVEMENT",HOLD_STILL:"wmea.HOLD_STILL"};function Js(e={}){const t=e.t||(x=>x),a={licenseKey:e.licenseKey||localStorage.getItem("dfx_license_key")||"",studyId:e.studyId||localStorage.getItem("dfx_study_id")||"",restUrl:e.restUrl||localStorage.getItem("dfx_region")||"https://api.deepaffex.cn"};let s=null,i=null,n=null,r=null,l=null,c=null;async function f({onProgress:x}={}){if(!a.licenseKey||!a.studyId)throw I(new Error(t("wmea.CONFIG_MISSING")),"wmea-config");const L=document.querySelector("#wmea-container");if(!L)throw I(new Error(t("wmea.CONTAINER_MISSING")),"wmea-container");await T(),L.innerHTML="",x?.(0,t("wmea.REGISTERING_LICENSE"),k("initializing"));const{deviceToken:W,refreshToken:N}=await zs(a.licenseKey,a.restUrl);s=new Bs,i=new Promise((A,te)=>{n=A,r=te}),s.on.results=async A=>{l=A,x?.(100,t("wmea.RESULTS_RECEIVED"),k("finished")),n?.(Zs(A))},s.on.error=async A=>{const te=await w();r?.(I(new Error(`${A.code}: ${A.message}`),"wmea-error",{error:A,logs:te}))},s.on.event=A=>{if(c=A,A.event==="CONSTRAINT_VIOLATION"){const zt=A.payload?.code;x?.(0,t(qs[zt]||"",{})||String(zt||"Constraint violation"),k("aligning-error",{appEvent:A}));return}const[te,Va]=js[A.event]||[0,A.event];x?.(te,t(Va),k(S(A.event),{appEvent:A}))},x?.(0,t("wmea.STARTING_WMEA"),k("initializing")),await s.init({container:L,appPath:Xs("/wmea"),settings:{token:W,refreshToken:N,studyId:a.studyId},profile:{age:40,heightCm:175,weightKg:70,sex:Ws,smoking:Gs,bloodPressureMedication:Vs,diabetes:Ks,bypassProfile:!1},language:e.getWmeaLanguage?.()||"en",config:{checkConstraints:!0,cameraFacingMode:"user",cameraAutoStart:!0,measurementAutoStart:!0,cancelWhenLowSNR:!1,debugMode:!0,downloadPayloads:!1},apiUrl:Et(a.restUrl)})}async function g(){if(!i)throw I(new Error(t("wmea.NOT_INITIALIZED")),"wmea-start");return await i}async function T(){if(s)try{await s.destroy()}catch{}s=null,i=null,n=null,r=null,l=null,c=null}async function w(){try{return s?await s.getLogs():[]}catch{return[]}}function S(x){return x==="MEASUREMENT_STARTED"||x==="INTERMEDIATE_RESULTS"?"measuring":x==="MEASUREMENT_COMPLETED"||x==="RESULTS_RECEIVED"?"analyzing":x==="CAMERA_STARTED"||x==="MEASUREMENT_PREPARED"?"ready":"initializing"}function k(x,L={}){return{phase:x,debug:{stage:"wmea",phase:x,latestEvent:c,hasResult:!!l,config:{restUrl:a.restUrl,apiUrl:Et(a.restUrl),studyId:a.studyId,hasLicenseKey:!!a.licenseKey},...L},...L}}function I(x,L,W={}){const N=x instanceof Error?x:new Error(String(x));return N.debug={stage:L,message:N.message,stack:N.stack,latestEvent:c,hasResult:!!l,config:{restUrl:a.restUrl,apiUrl:Et(a.restUrl),studyId:a.studyId,hasLicenseKey:!!a.licenseKey},...W},N}return{initialize:f,startMeasurement:g,cleanup:T}}function Zs(e){const t={};for(const[r,l]of Object.entries(e?.Channels||{}))Array.isArray(l?.Data)&&(t[r]=l.Data);const a=Math.round(Xe(t.HR_BPM)??72),s=Math.round(Xe(t.BP_SYSTOLIC)??124),i=Math.round(Xe(t.BP_DIASTOLIC)??80),n=Math.round(Xe(t.HRV_SDNN)??44);return{heartRate:a,bloodPressure:`${s}/${i}`,hrv:n,stressIndex:"中等",channels:t,raw:e}}function Et(e){try{return new URL(e).host}catch{return e.replace(/^https?:\/\//,"").replace(/\/.*$/,"")}}function Xe(e){return!Array.isArray(e)||e.length===0?null:e.reduce((t,a)=>t+a,0)/e.length/1e4}function Qs(e){return e.useMock?Ka(e):Js(e)}const $t=[{code:"zh-CN",wmeaCode:"zh",label:"中文"},{code:"en-US",wmeaCode:"en",label:"English"}],ia="vitalscan_language",ra={"zh-CN":{appTitle:"AI 健康副驾驶 H5",language:{label:"语言"},nav:{home:"首页",trends:"趋势",scan:"扫描",insights:"洞察",profile:"我的"},common:{back:"返回",close:"关闭",pending:"待更新",high:"偏高",watch:"关注",normal:"正常"},home:{heroAlt:"人脸健康扫描",noDevice:"无需额外设备",title:"30 秒 AI 健康扫描",body:"使用手机摄像头查看关键健康指标，并获取 AI 生成的健康趋势洞察。",indicators:"关键健康指标",learnMore:"了解更多",cta:"开始免费扫描",privacy:"你的数据保持私密并受到保护",disclaimerTitle:"健康洞察，不是医疗建议。",disclaimerBody:"本应用仅用于信息参考，不用于诊断、治疗或预防任何疾病。",poweredBy:"技术支持",poweredBody:"NuraLogix 提供的先进 AI 生物感知技术<br />（NuraLogix™ by DeepAffex®）"},indicatorGroups:{vitals:"生命体征",cardioRisks:"心血管风险",metabolicRisks:"代谢风险",biomarkers:"生物标志物"},indicators:{pulseRate:"脉率",bloodPressure:"血压",hrv:"HRV",cvdRisk:"多年期<br />心血管风险",heartAttackRisk:"心梗风险",strokeRisk:"卒中风险",diabetesRisk:"2 型糖尿病<br />风险",hypertensionRisk:"高血压<br />风险",fattyLiverRisk:"脂肪肝<br />风险",cholesterolRisk:"胆固醇<br />风险",glucoseRisk:"血糖<br />风险",hba1cRisk:"HbA1c<br />风险"},prepare:{title:"开始前准备",faceAlt:"扫描准备示意",goodLightingTitle:"光线充足",goodLightingBody:"确保脸部被均匀照亮",goodLightingHint:"双手握持手机会更稳定。",faceFrameTitle:"脸部完整入框",faceFrameBody:"保持整张脸清晰可见",stayStillTitle:"保持静止",stayStillBody:"测量只需约 30 秒",removeGlassesTitle:"摘下眼镜",removeGlassesBody:"有助于获得更准确的结果",ready:"我准备好了",privacy:"你的数据会被安全加密"},scan:{initialHint:"点击开始测量后，请让面部保持在画面中央。",preparingCamera:"正在准备摄像头...",completeHint:"测量完成。结果已进入今日状态和趋势解释。",failedHint:"测量失败，请检查摄像头权限和网络状态。",resultsReady:"结果已准备好",vitalReady:"生命体征已生成",analyzingTitle:"正在分析你的生命体征",analyzingBody:"AI 正在分析你的面部信号，以识别关键健康指标。",resultLine:"心率 {heartRate} bpm · 血压 {bloodPressure} · HRV {hrv} ms",debugTitle:"调试详情",debugSaved:"已保存到 localStorage：dfx_last_error",titleComplete:"已完成",titleFailed:"扫描失败",titleReady:"准备开始",titlePosition:"请调整脸部位置",titleAnalyzing:"分析中...",titleScanning:"扫描中...",progressFinished:"已完成",progressPreparing:"准备中",progressMeasure:"测量进度",progressAnalyzing:"分析中",progressScanning:"扫描中",oldReady:"已就绪",oldRunning:"测量中",oldStart:"开始 Shen.AI 测量",resultTitle:"测量结果",resultEmpty:"完成测量后，这里会展示今日结果并同步到趋势页。",metricHeartRate:"心率",metricBloodPressure:"血压",metricStress:"压力",metricRealtime:"实时聚合",metricEstimate:"估算结果",metricIndex:"指数",wellnessNotice:"本产品用于健康趋势理解和生活方式管理，不用于疾病诊断、治疗或替代医生建议。"},results:{kicker:"DeepAffex 结果",title:"健康扫描报告",snapshot:"健康概览",trendOnly:"仅用于健康趋势参考",scanAgain:"再次扫描",heartRate:"心率",bloodPressure:"血压",cardiovascular:"心血管",metabolicRisks:"代谢风险",biomarkers:"生物标志物",cvdRisk:"心血管风险",strokeRisk:"卒中风险",heartAttackRisk:"心梗风险",ratePressure:"心率血压乘积",type2DiabetesRisk:"2 型糖尿病风险",hypertensionRisk:"高血压风险",fattyLiverRisk:"脂肪肝风险",overallMetabolicRisk:"综合代谢风险",hdlRisk:"HDL 胆固醇风险",glucoseRisk:"血糖风险",hba1cRisk:"HbA1c 风险",physioScore:"生理评分",disclaimer:"健康洞察，不是医疗建议。这些输出仅供信息参考，不用于诊断、治疗或预防疾病。"},trends:{title:"健康趋势",subtitle:"30 天基线回顾",calendar:"日历",rangeLabel:"趋势时间范围",aiSummary:"AI 趋势总结",updatedToday:"今日更新",summaryTitle:"整体恢复正在朝好的方向变化。<span>+6 分</span>",summaryBody:"健康评分上升 6 分。静息心率和压力改善最明显，血压本周仍值得关注。",askAi:"询问 AI",details:"详情",overview:"总览",baselineBased:"AI 测量的 35-40 岁年龄健康基线",wellnessScore:"健康评分",good:"良好",yourScore:"你的评分",personalBaseline:"个人基线",snapshotLabel:"30 天趋势摘要",stableDays:"稳定天数",bestSignal:"最佳信号",stress:"压力",watch:"关注",bp:"血压",mildSwings:"轻微波动",keyIndicators:"关键健康指标",recentInsights:"近期 AI 洞察",viewAll:"查看全部"},wmea:{APP_LOADED:"正在加载测量应用...",ASSETS_DOWNLOADED:"资源已下载",FACE_TRACKER_LOADED:"人脸追踪已就绪",CAMERA_PERMISSION_GRANTED:"摄像头权限已授权",CAMERA_STARTED:"摄像头已启动",MEASUREMENT_PREPARED:"测量已准备好",MEASUREMENT_STARTED:"测量已开始",INTERMEDIATE_RESULTS:"正在接收实时结果",MEASUREMENT_COMPLETED:"测量完成",RESULTS_RECEIVED:"最终结果已收到",REGISTERING_LICENSE:"正在注册 DFX 许可...",STARTING_WMEA:"正在启动 WMEA...",CONFIG_MISSING:"缺少 DFX License Key 或 Study ID。",CONTAINER_MISSING:"Scanning 页面缺少 WMEA container。",NOT_INITIALIZED:"WMEA 尚未初始化。",TOO_CLOSE:"请离远一些",TOO_FAR:"请靠近一些",TURN_LEFT:"请看向摄像头",TURN_RIGHT:"请看向摄像头",TURN_UP:"请稍微低头",TURN_DOWN:"请稍微抬头",TILT_LEFT:"请保持头部水平",TILT_RIGHT:"请保持头部水平",NOT_CENTERED:"请将脸部置于中央",TOO_MUCH_MOVEMENT:"请保持静止",HOLD_STILL:"请保持静止"}},"en-US":{appTitle:"AI Health Copilot H5",language:{label:"Language"},nav:{home:"Home",trends:"Trends",scan:"Scan",insights:"Insights",profile:"Profile"},common:{back:"Back",close:"Close",pending:"Pending",high:"High",watch:"Watch",normal:"Normal"},home:{heroAlt:"Face health scan",noDevice:"No device needed",title:"AI Health Scan<br />in <em>30 Seconds</em>",body:"Use your phone camera to check your key health metrics and get AI-powered wellness insights.",indicators:"Key Health Indicators",learnMore:"Learn more",cta:"Start My Free Scan",privacy:"Your data is private and secure",disclaimerTitle:"Wellness insights, not medical advice.",disclaimerBody:"This app is for informational purposes only and does not diagnose, treat, or prevent any disease.",poweredBy:"Powered by",poweredBody:"Advanced AI biosensing technology by Nuralogix<br />(NuraLogix™ by DeepAffex®)"},indicatorGroups:{vitals:"Vitals",cardioRisks:"Cardio Risks",metabolicRisks:"Metabolic Risks",biomarkers:"Biomarkers"},indicators:{pulseRate:"Pulse Rate",bloodPressure:"Blood Pressure",hrv:"HRV",cvdRisk:"Multi-year<br />CVD Risk",heartAttackRisk:"Heart Attack Risk",strokeRisk:"Stroke Risk",diabetesRisk:"Type 2 Diabetes<br />Risk",hypertensionRisk:"Hypertension<br />Risk",fattyLiverRisk:"Fatty Liver<br />Risk",cholesterolRisk:"Cholesterol<br />Risk",glucoseRisk:"Glucose<br />Risk",hba1cRisk:"HbA1c<br />Risk"},prepare:{title:"Before We Start",faceAlt:"Scan preparation illustration",goodLightingTitle:"Good lighting",goodLightingBody:"Make sure your face is well-lit",goodLightingHint:"Hold your phone with both hands for more stability.",faceFrameTitle:"Face in the frame",faceFrameBody:"Keep your whole face visible",stayStillTitle:"Stay still",stayStillBody:"It only takes 30 seconds",removeGlassesTitle:"Remove glasses",removeGlassesBody:"For more accurate results",ready:"I'm Ready",privacy:"Your data is safe and encrypted"},scan:{initialHint:"After tapping start, keep your face centered in the frame.",preparingCamera:"Preparing camera...",completeHint:"Measurement complete. Results are ready for today's status and trend explanation.",failedHint:"Measurement failed. Please check camera permission and network status.",resultsReady:"Results are ready",vitalReady:"Vital Signs Ready",analyzingTitle:"Analyzing Your Vital Signs",analyzingBody:"Our AI is analyzing your facial signals to detect key health indicators.",resultLine:"Heart rate {heartRate} bpm · BP {bloodPressure} · HRV {hrv} ms",debugTitle:"Debug details",debugSaved:"Saved to localStorage key: dfx_last_error",titleComplete:"Complete",titleFailed:"Scan Failed",titleReady:"Get Ready",titlePosition:"Position Your Face",titleAnalyzing:"Analyzing...",titleScanning:"Scanning...",progressFinished:"Finished",progressPreparing:"Preparing",progressMeasure:"Measure progress",progressAnalyzing:"Analyzing",progressScanning:"Scanning",oldReady:"Ready",oldRunning:"Measuring",oldStart:"Start Shen.AI Measurement",resultTitle:"Measurement results",resultEmpty:"After measurement, today's results will appear here and sync to Trends.",metricHeartRate:"Heart Rate",metricBloodPressure:"Blood Pressure",metricStress:"Stress",metricRealtime:"Live aggregate",metricEstimate:"Estimated result",metricIndex:"Index",wellnessNotice:"This product is for health trend understanding and lifestyle management, not for diagnosis, treatment, or replacing medical advice."},results:{kicker:"DeepAffex Results",title:"Health Scan Report",snapshot:"Wellness snapshot",trendOnly:"Informational health trend only",scanAgain:"Scan again",heartRate:"Heart Rate",bloodPressure:"Blood Pressure",cardiovascular:"Cardiovascular",metabolicRisks:"Metabolic Risks",biomarkers:"Biomarkers",cvdRisk:"CVD Risk",strokeRisk:"Stroke Risk",heartAttackRisk:"Heart Attack Risk",ratePressure:"Rate Pressure",type2DiabetesRisk:"Type 2 Diabetes Risk",hypertensionRisk:"Hypertension Risk",fattyLiverRisk:"Fatty Liver Risk",overallMetabolicRisk:"Overall Metabolic Risk",hdlRisk:"HDL Cholesterol Risk",glucoseRisk:"Blood Glucose Risk",hba1cRisk:"HbA1c Risk",physioScore:"Physio Score",disclaimer:"Wellness insights, not medical advice. These outputs are for informational purposes and do not diagnose, treat, or prevent disease."},trends:{title:"Health Trends",subtitle:"30-day baseline review",calendar:"Calendar",rangeLabel:"Trend time range",aiSummary:"AI Trend Summary",updatedToday:"Updated today",summaryTitle:"Overall recovery is moving in the right direction. <span>+6 pts</span>",summaryBody:"Wellness Score rose 6 points. Resting heart rate and stress improved most, while blood pressure remains worth watching this week.",askAi:"Ask AI",details:"Details",overview:"Overview",baselineBased:"AI-measured age 35-40 health baseline",wellnessScore:"Wellness Score",good:"Good",yourScore:"Your Score",personalBaseline:"Personal Baseline",snapshotLabel:"30-day trend summary",stableDays:"Stable days",bestSignal:"Best signal",stress:"Stress",watch:"Watch",bp:"BP",mildSwings:"mild swings",keyIndicators:"Key Health Indicators",recentInsights:"Recent AI Insights",viewAll:"View All"},wmea:{APP_LOADED:"Loading measurement app...",ASSETS_DOWNLOADED:"Assets downloaded",FACE_TRACKER_LOADED:"Face tracker ready",CAMERA_PERMISSION_GRANTED:"Camera permission granted",CAMERA_STARTED:"Camera started",MEASUREMENT_PREPARED:"Measurement prepared",MEASUREMENT_STARTED:"Measurement started",INTERMEDIATE_RESULTS:"Receiving live results",MEASUREMENT_COMPLETED:"Measurement completed",RESULTS_RECEIVED:"Final results received",REGISTERING_LICENSE:"Registering DFX license...",STARTING_WMEA:"Starting WMEA...",CONFIG_MISSING:"Missing DFX License Key or Study ID.",CONTAINER_MISSING:"Scanning page is missing the WMEA container.",NOT_INITIALIZED:"WMEA has not been initialized.",TOO_CLOSE:"Move farther",TOO_FAR:"Move closer",TURN_LEFT:"Look at the camera",TURN_RIGHT:"Look at the camera",TURN_UP:"Lower your chin",TURN_DOWN:"Raise your chin",TILT_LEFT:"Keep your head level",TILT_RIGHT:"Keep your head level",NOT_CENTERED:"Center your face",TOO_MUCH_MOVEMENT:"Hold still",HOLD_STILL:"Hold still"}}};function ei(){let e=na(localStorage.getItem(ia)||navigator.language);function t(r){return e=na(r),localStorage.setItem(ia,e),document.documentElement.lang=e,document.title=a("appTitle"),e}function a(r,l={}){const c=oa(ra[e],r)??oa(ra["en-US"],r)??r;return ti(c,l)}function s(){return $t}function i(){return e}function n(){return $t.find(r=>r.code===e)?.wmeaCode||"en"}return t(e),{getLanguage:i,getWmeaLanguage:n,options:s,setLanguage:t,t:a}}function na(e){return $t.some(a=>a.code===e)?e:String(e||"").toLowerCase().split("-")[0]==="zh"?"zh-CN":"en-US"}function oa(e,t){return t.split(".").reduce((a,s)=>a?.[s],e)}function ti(e,t){return String(e).replace(/\{(\w+)\}/g,(a,s)=>t[s]??"")}let z=null;const Pa="vitalscan_onboarding_complete",nt=6,ai="/ai-health-h5-demo/";function la(e){return`${ai}${e.replace(/^\/+/,"")}`}function si(e){return e.replaceAll('src="/assets/',`src="${la("/assets/")}`).replaceAll('href="/assets/',`href="${la("/assets/")}`)}function m(e,t){return z?.t(e,t)||e}function p(e){return e[z?.getLanguage?.()]||e["en-US"]||e["zh-CN"]||""}const d={activeTab:"home",onboardingStep:0,activePlanFilter:"all",activeRiskInsightTab:"at-risk",activeRiskInsight:null,activeTrendIndicatorGroup:"vitals",showProgressHistorySheet:!1,activeTrendIndicator:null,activeTrendRange:"30D",onboarding:{goal:"heart",concerns:["heart","bp","diabetes"],age:45,sex:"male",heightFt:5,heightIn:10,weightLbs:165,unit:"us",activity:"lightly",sleep:"okay",eating:"sugar",stress:"moderate"},measurement:{status:"idle",phase:"idle",progress:0,faceHint:"",result:null,debug:null}},ii=[["home","nav.home"],["trends","nav.trends"],["scan","nav.scan"],["insights","nav.insights"],["profile","nav.profile"]],Pt=["7D","30D","90D"],Lt=[{id:"heart",icon:"heart",tone:"rose",label:{"en-US":"Improve heart health","zh-CN":"改善心脏健康"}},{id:"bp",icon:"drop",tone:"violet",label:{"en-US":"Track blood pressure trends","zh-CN":"追踪血压趋势"}},{id:"stress",icon:"recovery",tone:"orange",label:{"en-US":"Reduce stress","zh-CN":"降低压力"}},{id:"sleep",icon:"moon",tone:"purple",label:{"en-US":"Improve sleep and recovery","zh-CN":"改善睡眠与恢复"}},{id:"metabolic",icon:"chart",tone:"green",label:{"en-US":"Lower metabolic risk","zh-CN":"降低代谢风险"}},{id:"habits",icon:"walk",tone:"blue",label:{"en-US":"Build healthier habits","zh-CN":"养成更健康的习惯"}},{id:"curious",icon:"info",tone:"gray",label:{"en-US":"Just curious about my health","zh-CN":"只是想了解自己的健康"}}],Ba=[{id:"heart",icon:"heart",tone:"rose",label:{"en-US":"Heart health","zh-CN":"心脏健康"}},{id:"bp",icon:"drop",tone:"violet",label:{"en-US":"Blood pressure","zh-CN":"血压"}},{id:"diabetes",icon:"metabolic",tone:"green",label:{"en-US":"Type 2 diabetes risk","zh-CN":"2 型糖尿病风险"}},{id:"stress",icon:"recovery",tone:"orange",label:{"en-US":"Stress & recovery","zh-CN":"压力与恢复"}},{id:"weight",icon:"chart",tone:"blue",label:{"en-US":"Weight / BMI","zh-CN":"体重 / BMI"}},{id:"sleep",icon:"moon",tone:"purple",label:{"en-US":"Sleep quality","zh-CN":"睡眠质量"}}],ri=[{id:"male",icon:"user",tone:"blue",label:{"en-US":"Male","zh-CN":"男性"}},{id:"female",icon:"female",tone:"pink",label:{"en-US":"Female","zh-CN":"女性"}},{id:"private",icon:"user",tone:"gray",label:{"en-US":"Prefer not to say","zh-CN":"不想透露"}}],ni=[{id:"sitting",icon:"sitting",tone:"gray",label:{"en-US":"Mostly sitting","zh-CN":"大多久坐"}},{id:"lightly",icon:"walk",tone:"blue",label:{"en-US":"Lightly active","zh-CN":"轻度活跃"},detail:{"en-US":"Light exercise 1-2 days/week","zh-CN":"每周轻度运动 1-2 天"}},{id:"moderate",icon:"run",tone:"orange",label:{"en-US":"Moderately active","zh-CN":"中度活跃"},detail:{"en-US":"Exercise 3-4 days/week","zh-CN":"每周运动 3-4 天"}},{id:"very",icon:"dumbbell",tone:"green",label:{"en-US":"Very active","zh-CN":"非常活跃"},detail:{"en-US":"Exercise 5+ days/week","zh-CN":"每周运动 5 天以上"}}],oi=[{id:"great",label:{"en-US":"Great, 7-8 hours most nights","zh-CN":"很好，多数晚上睡 7-8 小时"}},{id:"okay",label:{"en-US":"Okay, but inconsistent","zh-CN":"还可以，但不稳定"}},{id:"poor",label:{"en-US":"Poor, I often wake up tired","zh-CN":"较差，经常醒来仍疲惫"}},{id:"short",label:{"en-US":"I sleep less than 6 hours","zh-CN":"睡眠少于 6 小时"}},{id:"unsure",label:{"en-US":"Not sure","zh-CN":"不确定"}}],li=[{id:"balanced",label:{"en-US":"Balanced most days","zh-CN":"大多数时候饮食均衡"}},{id:"processed",label:{"en-US":"High in processed foods","zh-CN":"加工食品偏多"}},{id:"sugar",label:{"en-US":"High in sugar or snacks","zh-CN":"糖分或零食偏多"}},{id:"salty",label:{"en-US":"High in salty foods","zh-CN":"高盐食物偏多"}},{id:"skip",label:{"en-US":"I often skip meals","zh-CN":"我经常不按时吃饭"}},{id:"healthier",label:{"en-US":"I'm trying to eat healthier","zh-CN":"我正在尝试吃得更健康"}}],ci=[{id:"low",icon:"smile",tone:"green",label:{"en-US":"Low","zh-CN":"低"}},{id:"moderate",icon:"meh",tone:"orange",label:{"en-US":"Moderate","zh-CN":"中等"}},{id:"high",icon:"meh",tone:"orange",label:{"en-US":"High","zh-CN":"高"}},{id:"very",icon:"heart",tone:"rose",label:{"en-US":"Very high","zh-CN":"很高"}}],Ce=[{id:"vitals",label:"Vitals",shortLabel:{"en-US":"Vitals","zh-CN":"体征"},icon:"heart",items:["pulse-rate","irregular-heartbeat-count","respiratory-rate","systolic-blood-pressure","diastolic-blood-pressure"]},{id:"physiological",label:"Physiological",shortLabel:{"en-US":"Physio","zh-CN":"生理"},icon:"wave",items:["heart-rate-variability","cardiac-workload","vascular-capacity","vitality-index"]},{id:"mental",label:"Mental",shortLabel:{"en-US":"Mental","zh-CN":"心理"},icon:"brain",items:["stress-level","sleep-quality","anxiety-index"]},{id:"physical",label:"Physical",shortLabel:{"en-US":"Body","zh-CN":"身体"},icon:"body",items:["body-mass-index","facial-skin-age","cardio-metabolic-age","waist-to-height-ratio","body-shape-index","estimated-height","estimated-weight","waist-circumference"]}],Ke=[{id:"cvd",code:"BP_CVD",title:"Cardiovascular Disease Risk",value:12.4,threshold:10,status:"Moderate",tone:"orange",isNew:!0,isAtRisk:!0,icon:"/assets/icon-cvd-risk.svg",body:"Newly elevated after today's scan. Systolic pressure and cardio-metabolic age are the biggest contributors.",followUp:"Track again this week to confirm whether this is a persistent pattern."},{id:"multi-year-cvd",code:"CVD_MULTI_YEAR_RISK_PROBS",title:"Multi-year Cardiovascular Disease Risk",value:9.1,threshold:7.5,status:"Watch",tone:"yellow",isNew:!1,isAtRisk:!0,icon:"/assets/icon-heart-attack.svg",body:"Likelihood of a first cardiovascular disease event over a selected 1-20 year horizon is above the low-risk band.",followUp:"Review the selected time horizon and continue tracking blood pressure and profile-driven risk factors."},{id:"type-2-diabetes",code:"DBT_RISK_PROB",title:"Type 2 Diabetes Risk",value:11.6,threshold:10,status:"Watch",tone:"yellow",isNew:!1,isAtRisk:!0,icon:"/assets/icon-diabetes.svg",body:"Percentage of people with a similar risk profile diagnosed with Type 2 Diabetes is above the low-risk band.",followUp:"Average several scans across days before interpreting this as a persistent risk shift."},{id:"hypertension",code:"HPT_RISK_PROB",title:"Hypertension Risk",value:18.2,threshold:15,status:"Elevated",tone:"orange",isNew:!1,isAtRisk:!0,icon:"/assets/icon-bp.svg",body:"Percentage of people with a similar risk profile diagnosed with hypertension is elevated.",followUp:"Average multiple resting measurements and consider blood pressure screening if it remains high."},{id:"hypercholesterolemia",code:"HDLTC_RISK_PROB",title:"Hypercholesterolemia Risk",value:14.2,threshold:12,status:"Watch",tone:"yellow",isNew:!1,isAtRisk:!0,icon:"/assets/icon-cholesterol.svg",body:"Risk profile suggests a higher probability of abnormally high total-to-HDL cholesterol ratio.",followUp:"If this persists, consider confirming HDL and total cholesterol with a laboratory test."},{id:"overall-metabolic-health",code:"OVERALL_METABOLIC_RISK_PROB",title:"Overall Metabolic Health Risk",value:16.4,threshold:14,status:"Elevated",tone:"orange",isNew:!1,isAtRisk:!0,icon:"/assets/icon-metabolic.svg",body:"Composite estimate across hypertension, diabetes, triglycerides, cholesterol, and fatty liver risk is elevated.",followUp:"Use repeated scans to see which metabolic risk contributor is driving the combined score."},{id:"heart-attack",code:"BP_HEART_ATTACK",title:"Heart Attack Risk",value:.8,threshold:1.65,status:"Normal",tone:"green",isNew:!1,isAtRisk:!1,icon:"/assets/icon-heart-attack.svg"},{id:"stroke",code:"BP_STROKE",title:"Stroke Risk",value:1.2,threshold:3.3,status:"Normal",tone:"green",isNew:!1,isAtRisk:!1,icon:"/assets/icon-stroke-risk.svg"},{id:"hypertriglyceridemia",code:"TG_RISK_PROB",title:"Hypertriglyceridemia Risk",value:3.6,threshold:8,status:"Normal",tone:"green",isNew:!1,isAtRisk:!1,icon:"/assets/icon-cholesterol.svg"},{id:"fatty-liver",code:"FLD_RISK_PROB",title:"Fatty Liver Disease Risk",value:4.8,threshold:10,status:"Normal",tone:"green",isNew:!1,isAtRisk:!1,icon:"/assets/icon-liver-risk.svg"},{id:"hemoglobin-a1c",code:"HBA1C_RISK_PROB",title:"Hemoglobin A1C Risk",value:3.2,threshold:7,status:"Normal",tone:"green",isNew:!1,isAtRisk:!1,icon:"/assets/icon-glucose.svg"},{id:"fasting-glucose",code:"MFBG_RISK_PROB",title:"Fasting Blood Glucose Risk",value:4.1,threshold:8,status:"Normal",tone:"green",isNew:!1,isAtRisk:!1,icon:"/assets/icon-glucose.svg"},{id:"hrv-advanced",code:"HRV_ADVANCED",title:"HRV Advanced Parameters",value:2.8,threshold:6,status:"Normal",tone:"green",isNew:!1,isAtRisk:!1,icon:"/assets/icon-hrv.svg"},{id:"nuralogix-scores",code:"HEALTH_SCORE",title:"NuraLogix Scores",value:72,threshold:60,unit:"score",higherIsBetter:!0,status:"Normal",tone:"green",isNew:!1,isAtRisk:!1,icon:"/assets/icon-wellness-score.svg"},{id:"moderate-anxiety",code:"SURVEY_ANXIETY_MODERATE",title:"Moderate Anxiety Rapid Assessment",value:18,threshold:40,status:"Normal",tone:"green",isNew:!1,isAtRisk:!1,icon:"/assets/icon-wellness-score.svg"},{id:"moderate-depression",code:"SURVEY_DEPRESSION_MODERATE",title:"Moderate Depression Rapid Assessment",value:14,threshold:40,status:"Normal",tone:"green",isNew:!1,isAtRisk:!1,icon:"/assets/icon-trend-calm.svg"}],di={cvd:{title:"心血管疾病风险",status:"中等",body:"今日扫描后该风险新近升高。收缩压和心血管代谢年龄是主要影响因素。",followUp:"建议本周再次追踪，确认这是否是持续模式。"},"multi-year-cvd":{title:"多年期心血管疾病风险",status:"关注",body:"在所选 1-20 年时间范围内，首次发生心血管疾病事件的可能性高于低风险区间。",followUp:"请复核所选时间范围，并继续追踪血压和个人资料相关风险因素。"},"type-2-diabetes":{title:"2 型糖尿病风险",status:"关注",body:"与相似风险画像人群相比，被诊断为 2 型糖尿病的比例高于低风险区间。",followUp:"建议跨天取多次扫描平均值，再判断这是否为持续风险变化。"},hypertension:{title:"高血压风险",status:"升高",body:"与相似风险画像人群相比，被诊断为高血压的比例有所升高。",followUp:"建议取多次静息测量平均值；若持续偏高，可考虑血压筛查。"},hypercholesterolemia:{title:"高胆固醇血症风险",status:"关注",body:"风险画像提示总胆固醇与 HDL 比值异常升高的可能性更高。",followUp:"若该趋势持续，建议通过实验室检查确认 HDL 和总胆固醇。"},"overall-metabolic-health":{title:"综合代谢健康风险",status:"升高",body:"结合高血压、糖尿病、甘油三酯、胆固醇和脂肪肝风险的综合估计值有所升高。",followUp:"可通过重复扫描观察是哪一项代谢风险因素在推动综合评分。"},"heart-attack":{title:"心梗风险",status:"正常"},stroke:{title:"卒中风险",status:"正常"},hypertriglyceridemia:{title:"高甘油三酯风险",status:"正常"},"fatty-liver":{title:"脂肪肝疾病风险",status:"正常"},"hemoglobin-a1c":{title:"糖化血红蛋白 A1C 风险",status:"正常"},"fasting-glucose":{title:"空腹血糖风险",status:"正常"},"hrv-advanced":{title:"HRV 高级参数",status:"正常"},"nuralogix-scores":{title:"NuraLogix 评分",status:"正常"},"moderate-anxiety":{title:"中度焦虑快速评估",status:"正常"},"moderate-depression":{title:"中度抑郁快速评估",status:"正常"}},hi={cvd:{definition:{"en-US":"Definition: Estimates the likelihood of experiencing a first heart attack or stroke within the next 10 years, expressed as a percentage.","zh-CN":"定义：用于估计受试者未来 10 年内首次发生心梗或卒中的可能性，并以百分比表示。"},background:{"en-US":"Background: The model considers biological sex at birth, age, BMI, systolic blood pressure, antihypertensive medication status, and, when available, smoking and diabetes status. It follows a Framingham-derived concept based on long-term cardiovascular studies.","zh-CN":"背景：该风险会考虑出生生理性别、年龄、BMI、收缩压、降压药使用情况，以及可用时的吸烟和糖尿病状态。其方法源自 Framingham 思路，并参考长期心血管随访研究。"}},"multi-year-cvd":{definition:{"en-US":"Definition: Estimates the likelihood of a first cardiovascular disease event over a selected 1-20 year time horizon, expressed as a percentage.","zh-CN":"定义：用于估计受试者在所选 1-20 年时间范围内首次发生心血管疾病事件的可能性，并以百分比表示。"},background:{"en-US":"Background: This advanced machine-learning score estimates cardiovascular disease likelihood over a user-selected future window. The same interpretation table applies regardless of selected year.","zh-CN":"背景：该评分基于高级机器学习，用于估计用户所选未来时间窗口内发生心血管疾病的可能性；无论选择哪一年，均使用同一解释表。"}},"heart-attack":{definition:{"en-US":"Definition: Estimates the likelihood of experiencing a first heart attack within the next 10 years, expressed as a percentage.","zh-CN":"定义：用于估计受试者未来 10 年内首次发生心梗的可能性，并以百分比表示。"},background:{"en-US":"Background: The score uses profile and cardiovascular factors including biological sex at birth, age, BMI, systolic blood pressure, medication status, and, when available, smoking and diabetes status.","zh-CN":"背景：该评分使用个人资料和心血管相关因素，包括出生生理性别、年龄、BMI、收缩压、用药状态，以及可用时的吸烟和糖尿病状态。"}},stroke:{definition:{"en-US":"Definition: Estimates the likelihood of experiencing a first stroke within the next 10 years, expressed as a percentage.","zh-CN":"定义：用于估计受试者未来 10 年内首次发生卒中的可能性，并以百分比表示。"},background:{"en-US":"Background: The score uses similar Framingham-derived inputs as cardiovascular disease risk, including profile information, systolic blood pressure, medication status, and available smoking or diabetes data.","zh-CN":"背景：该评分使用与心血管疾病风险类似的 Framingham 衍生输入，包括个人资料、收缩压、用药状态，以及可用的吸烟或糖尿病数据。"}},hypertension:{definition:{"en-US":"Definition: Corresponds to the percentage of people with a similar risk profile who are diagnosed with hypertension by their doctor.","zh-CN":"定义：表示与受试者风险画像相似的人群中，被医生诊断为高血压的人群比例。"},background:{"en-US":"Background: This risk profile is based on facial blood-flow measurements and subject profile information. Hypertension is a major treatable cardiovascular risk factor, so consistently high risk may warrant clinical screening.","zh-CN":"背景：该风险画像基于面部血流测量和个人资料信息。高血压是重要且可干预的心血管风险因素，若风险持续偏高，可考虑临床筛查。"}},"type-2-diabetes":{definition:{"en-US":"Definition: Corresponds to the percentage of people with a similar risk profile who are diagnosed with Type 2 Diabetes by their doctor.","zh-CN":"定义：表示与受试者风险画像相似的人群中，被医生诊断为 2 型糖尿病的人群比例。"},background:{"en-US":"Background: The estimate uses facial blood-flow and profile information and does not necessarily reflect current blood sugar. Uncontrolled Type 2 Diabetes is associated with vascular, heart, kidney, and nerve complications.","zh-CN":"背景：该估计基于面部血流和个人资料信息，并不等同于当前血糖值。未受控的 2 型糖尿病可能与血管、心脏、肾脏和神经损伤相关。"}},hypercholesterolemia:{definition:{"en-US":"Definition: Corresponds to the percentage of people with a similar risk profile who have an abnormally high total cholesterol to HDL cholesterol ratio.","zh-CN":"定义：表示与受试者风险画像相似的人群中，总胆固醇与 HDL 胆固醇比值异常升高的人群比例。"},background:{"en-US":"Background: The risk profile uses facial blood-flow and profile information. Hypercholesterolemia is a treatable cardiovascular risk factor and may be confirmed with HDL and total cholesterol blood tests.","zh-CN":"背景：该风险画像基于面部血流和个人资料信息。高胆固醇血症是可干预的心血管风险因素，可通过 HDL 和总胆固醇血液检测进一步确认。"}},hypertriglyceridemia:{definition:{"en-US":"Definition: Corresponds to the percentage of people with a similar risk profile who have abnormally high triglyceride levels.","zh-CN":"定义：表示与受试者风险画像相似的人群中，甘油三酯水平异常升高的人群比例。"},background:{"en-US":"Background: The profile uses facial blood-flow and subject information. Hypertriglyceridemia, especially with other factors, is a treatable cardiovascular risk factor and can be checked with a blood test.","zh-CN":"背景：该风险画像基于面部血流和个人信息。高甘油三酯，尤其与其他因素叠加时，是可干预的心血管风险因素，可通过血液检测确认。"}},"fatty-liver":{definition:{"en-US":"Definition: Corresponds to the percentage of people with a similar risk profile who are diagnosed with fatty liver disease.","zh-CN":"定义：表示与受试者风险画像相似的人群中，被诊断为脂肪肝疾病的人群比例。"},background:{"en-US":"Background: Fatty liver disease involves triglyceride accumulation in liver cells. Contributing factors can include alcohol use, metabolic syndrome, obesity, insulin resistance, and dietary patterns such as high fructose intake.","zh-CN":"背景：脂肪肝疾病与肝细胞内甘油三酯脂质堆积相关，影响因素可能包括饮酒、代谢综合征、肥胖、胰岛素抵抗以及高果糖等饮食模式。"}},"overall-metabolic-health":{definition:{"en-US":"Definition: Provides a comprehensive estimate of susceptibility to a spectrum of metabolic conditions using facial blood-flow measurements and profile data.","zh-CN":"定义：结合面部血流测量信息和个人资料数据，用于综合估计个体对一系列代谢状况的易感性。"},background:{"en-US":"Background: This combines hypertension, Type 2 diabetes, hypertriglyceridemia, hypercholesterolemia, and fatty liver risks to describe the overlap between metabolic well-being and cardiovascular health.","zh-CN":"背景：该指标综合高血压、2 型糖尿病、高甘油三酯、高胆固醇血症和脂肪肝风险，用于呈现代谢健康与心血管健康之间的关联。"}},"hemoglobin-a1c":{definition:{"en-US":"Definition: Corresponds to the percentage of people with a similar risk profile whose HbA1c levels are above 5.7% when tested, indicating elevated prediabetes risk.","zh-CN":"定义：表示与受试者风险画像相似的人群中，检测时 HbA1c 高于 5.7% 的人群比例，提示糖尿病前期风险升高。"},background:{"en-US":"Background: HbA1c reflects glycated hemoglobin and is used by lab testing to estimate average blood glucose over the past 2-3 months. Higher A1c percentages generally indicate higher blood glucose.","zh-CN":"背景：HbA1c 反映糖化血红蛋白水平，实验室检测常用于估计过去 2-3 个月的平均血糖；A1c 百分比越高，通常代表血糖水平越高。"}},"fasting-glucose":{definition:{"en-US":"Definition: Corresponds to the percentage of people with a similar risk profile whose blood glucose is above 5.5 mmol/L after 8-10 hours of fasting.","zh-CN":"定义：表示与受试者风险画像相似的人群中，空腹 8-10 小时后血糖高于 5.5 mmol/L 的人群比例。"},background:{"en-US":"Background: The estimate uses facial blood-flow and profile information. Fasting blood glucose is typically measured by a lab blood test after 8-10 hours of fasting, and other physiological states can affect results.","zh-CN":"背景：该估计基于面部血流和个人资料信息。空腹血糖通常通过空腹 8-10 小时后的实验室血液检测获得，其他生理状态也可能影响结果。"}},"hrv-advanced":{definition:{"en-US":"Definition: HRV Advanced Parameters provide additional heart-rate-variability measurements for deeper autonomic nervous system assessment.","zh-CN":"定义：HRV 高级参数提供更细分的心率变异性测量，用于进一步观察自主神经系统相关状态。"},background:{"en-US":"Background: These parameters extend standard HRV views and are best interpreted as trend signals across repeated measurements rather than a standalone diagnosis.","zh-CN":"背景：这些参数扩展了标准 HRV 观察维度，更适合作为多次测量后的趋势信号理解，而不是单独作为诊断依据。"}},"nuralogix-scores":{definition:{"en-US":"Definition: NuraLogix General Wellness Score is a measure of overall health, with component scores covering mental, physical, physiological, risk, and vitals health.","zh-CN":"定义：NuraLogix 综合健康评分用于衡量整体健康状况，并包含心理、身体、生理、风险和生命体征等组件评分。"},background:{"en-US":"Background: A higher General Wellness Score indicates better overall health, while individual component scores contribute to the final HEALTH_SCORE.","zh-CN":"背景：综合健康评分越高，通常代表整体健康状态越好；各个组件评分会共同参与 HEALTH_SCORE 的计算。"}},"moderate-anxiety":{definition:{"en-US":"Definition: Estimates the likelihood that the user would be classified as having moderate anxiety according to the long-form DASS-42 questionnaire.","zh-CN":"定义：用于估计用户按照 DASS-42 长版问卷标准被归类为中度焦虑的可能性。"},background:{"en-US":"Background: A short questionnaire enables rapid adult anxiety assessment and is derived from the long-form DASS-42 used clinically for moderate-level anxiety classification.","zh-CN":"背景：该快速评估来自 DASS-42 长版问卷的思路，用于成人焦虑状态的快速筛查，并对应临床中度焦虑分类参考。"}},"moderate-depression":{definition:{"en-US":"Definition: Estimates the likelihood that the user would be classified as having moderate depression according to the long-form DASS-42 questionnaire.","zh-CN":"定义：用于估计用户按照 DASS-42 长版问卷标准被归类为中度抑郁的可能性。"},background:{"en-US":"Background: A short questionnaire enables rapid adult depression assessment and is derived from the long-form DASS-42 used clinically for moderate-level depression classification.","zh-CN":"背景：该快速评估来自 DASS-42 长版问卷的思路，用于成人抑郁状态的快速筛查，并对应临床中度抑郁分类参考。"}}},ui={"pulse-rate":{definition:{"en-US":"Definition: Pulse Rate is DeepAffex Cloud's estimate of the subject's pulse rate, based on facial blood-flow data.","zh-CN":"定义：脉率是 DeepAffex Cloud 基于面部血流数据对受试者脉率的估计。"},background:{"en-US":"Background: Pulse rate represents how many times the heart beats per minute and is one of the core vital signs for interpreting cardiovascular state.","zh-CN":"背景：脉率表示心脏每分钟跳动次数，是解读心血管状态的核心生命体征之一。"}},"respiratory-rate":{definition:{"en-US":"Definition: Breathing Rate estimates how many times the user inhales and exhales per minute, using facial blood-flow data and subject motion.","zh-CN":"定义：呼吸频率用于估计用户每分钟吸气和呼气的次数，基于面部血流数据和受试者运动信息。"},background:{"en-US":"Background: Adult resting breathing rate is commonly interpreted in a normal range, while unusually slow or fast rates can reflect medication effects, activity, or underlying physiological conditions.","zh-CN":"背景：成人静息呼吸频率通常有参考范围；过慢或过快可能与药物、活动状态或潜在生理状况有关。"}},"blood-pressure":{definition:{"en-US":"Definition: Blood Pressure combines DeepAffex estimates of systolic and diastolic pressure from facial blood-flow data.","zh-CN":"定义：血压由 DeepAffex 基于面部血流数据估算的收缩压和舒张压共同组成。"},background:{"en-US":"Background: Systolic pressure reflects peak arterial pressure during heart contraction, while diastolic pressure reflects arterial pressure when the heart muscle is relaxed. Together they help contextualize cardiovascular load.","zh-CN":"背景：收缩压反映心肌收缩时的动脉峰值压力，舒张压反映心肌放松时的动脉压力；两者共同帮助理解心血管负荷。"}},"systolic-blood-pressure":{definition:{"en-US":"Definition: Systolic Blood Pressure is DeepAffex Cloud's estimate of peak arterial pressure during heart muscle contraction, based on facial blood-flow data.","zh-CN":"定义：收缩压是 DeepAffex Cloud 基于面部血流数据，对心肌收缩时动脉峰值压力的估计。"},background:{"en-US":"Background: Systolic pressure is measured in mmHg and is commonly used in blood-pressure classification and cardiovascular risk context.","zh-CN":"背景：收缩压以 mmHg 表示，常用于血压分类和心血管风险背景判断。"}},"diastolic-blood-pressure":{definition:{"en-US":"Definition: Diastolic Blood Pressure is DeepAffex Cloud's estimate of arterial pressure when the heart muscle is relaxed, based on facial blood-flow data.","zh-CN":"定义：舒张压是 DeepAffex Cloud 基于面部血流数据，对心肌放松时动脉压力的估计。"},background:{"en-US":"Background: Diastolic pressure is measured in mmHg and complements systolic pressure when interpreting blood-pressure status and cardiovascular load.","zh-CN":"背景：舒张压以 mmHg 表示，在解读血压状态和心血管负荷时与收缩压互为补充。"}},"stress-level":{definition:{"en-US":"Definition: NuraLogix Mental Stress Index is DeepAffex Cloud's proprietary 5-point estimate of mental stress, from relaxed to overloaded.","zh-CN":"定义：NuraLogix 心理压力指数是 DeepAffex Cloud 的 5 分制专有估计，用于表示从放松到过载的心理压力水平。"},background:{"en-US":"Background: Mental stress reflects changes in internal balance caused by psychological, physiological, or environmental stressors and is linked with sympathetic nervous system activation.","zh-CN":"背景：心理压力反映心理、生理或环境压力源引起的内部稳态变化，并与交感神经系统激活相关。"}},"heart-rate-variability":{definition:{"en-US":"Definition: HRV_SDNN is DeepAffex Cloud's estimate of SDNN, a heart-rate-variability measure based on timing variation between normal heartbeats.","zh-CN":"定义：HRV_SDNN 是 DeepAffex Cloud 对 SDNN 的估计，用于衡量正常心跳间隔之间的时间变化。"},background:{"en-US":"Background: Higher SDNN generally indicates greater beat-to-beat variability and may reflect stronger parasympathetic recovery activity.","zh-CN":"背景：较高的 SDNN 通常表示心跳间隔变化更丰富，可能反映更强的副交感恢复活动。"}},"cardiac-workload":{definition:{"en-US":"Definition: Cardiac Workload is estimated from Pulse Rate multiplied by Systolic Blood Pressure.","zh-CN":"定义：心脏负荷由脉率乘以收缩压进行估算。"},background:{"en-US":"Background: Cardiac workload describes stress placed on the heart muscle. At rest, it can provide context for cardiovascular health and heart pumping demand.","zh-CN":"背景：心脏负荷描述心肌承受的压力。在静息状态下，它可为心血管健康和心脏泵血需求提供参考。"}},"vascular-capacity":{definition:{"en-US":"Definition: Vascular Capacity is DeepAffex Cloud's estimate of Tau, a measure related to blood-vessel elasticity.","zh-CN":"定义：血管能力是 DeepAffex Cloud 对 Tau 的估计，与血管弹性相关。"},background:{"en-US":"Background: When measured at rest, vascular capacity can indicate cardiovascular health because it is strongly related to vascular stiffness. Higher Tau generally suggests better vascular health.","zh-CN":"背景：在静息状态下，血管能力可作为心血管健康参考，因为它与血管僵硬度密切相关；Tau 越高通常提示血管状态越好。"}},"vitality-index":{definition:{"en-US":"Definition: NuraLogix Vitality Index is a proprietary 5-point measure of cardiovascular health and overall vitality, from poor to excellent.","zh-CN":"定义：NuraLogix 活力指数是 5 分制专有指标，用于衡量心血管健康和整体活力，从较差到优秀。"},background:{"en-US":"Background: The index integrates physiological signals such as cardiac workload and vascular capacity to summarize cardiovascular vitality and overall physiological resilience.","zh-CN":"背景：该指数整合心脏负荷、血管能力等生理信号，用于概括心血管活力和整体生理韧性。"}},"irregular-heartbeat-count":{definition:{"en-US":"Definition: Irregular Heartbeat Count estimates the number of irregular heartbeats detected during a 30-second facial blood-flow measurement.","zh-CN":"定义：不规则心跳次数用于估计 30 秒面部血流测量中检测到的不规则心跳数量。"},background:{"en-US":"Background: Irregular beats occur outside normal rhythm and are often harmless, but repeated or persistent patterns should be understood in context and followed up clinically when appropriate.","zh-CN":"背景：不规则心跳发生在正常节律之外，多数情况下可能无害；但若反复或持续出现，应结合背景理解，并在需要时进行临床随访。"}},"sleep-quality":{definition:{"en-US":"Definition: NuraLogix Sleep Quality Index is a proprietary 5-point estimate of sleep quality, from poor to excellent.","zh-CN":"定义：NuraLogix 睡眠质量指数是 5 分制专有估计，用于表示从较差到优秀的睡眠质量。"},background:{"en-US":"Background: The index uses HRV features together with heart rate and blood pressure signals, which are influenced by sleep stages and overall sleep quality.","zh-CN":"背景：该指数结合 HRV 特征、心率和血压信号，这些信号会受到睡眠阶段和整体睡眠质量影响。"}},"anxiety-index":{definition:{"en-US":"Definition: NuraLogix Anxiety Index is a proprietary 5-point measure of underlying, long-range anxiety level, from excellent to poor.","zh-CN":"定义：NuraLogix 焦虑指数是 5 分制专有指标，用于衡量长期、基础性的焦虑水平，从优秀到较差。"},background:{"en-US":"Background: The index combines heart rate, breathing rate, blood pressure, and HRV signals linked with autonomic nervous system activity to track baseline anxiety trends over time.","zh-CN":"背景：该指数结合心率、呼吸频率、血压和 HRV 等与自主神经活动相关的信号，用于追踪长期基础焦虑趋势。"}},"cardio-metabolic-age":{definition:{"en-US":"Definition: Cardiovascular Metabolic Age estimates cardiovascular and metabolic health age using chronological age and indicators derived from facial blood-flow measurement.","zh-CN":"定义：心血管代谢年龄结合实际年龄和面部血流测量衍生指标，估算心血管与代谢健康年龄。"},background:{"en-US":"Background: The estimate reflects contributors including cardiovascular disease risk, metabolic risks, cardiac workload, vascular capacity, and demographic information such as BMI.","zh-CN":"背景：该估计会反映心血管疾病风险、代谢风险、心脏负荷、血管能力，以及 BMI 等人口统计和身体资料因素。"}},"body-mass-index":{definition:{"en-US":"Definition: Body Mass Index is calculated from height and weight in the user profile, or estimated by DeepAffex Cloud if profile information is missing.","zh-CN":"定义：身体质量指数基于用户资料中的身高和体重计算；若资料缺失，可由 DeepAffex Cloud 估算。"},background:{"en-US":"Background: BMI adjusts tissue mass for height and is commonly used to categorize body-fat related health risk, including cardiovascular and metabolic risk context.","zh-CN":"背景：BMI 将身体组织质量按身高进行校正，常用于身体脂肪相关健康风险分类，并用于心血管和代谢风险背景判断。"}},"facial-skin-age":{definition:{"en-US":"Definition: Facial Skin Age is DeepAffex Cloud's estimate of age based on the condition of the face surface.","zh-CN":"定义：面部皮肤年龄是 DeepAffex Cloud 基于面部表面状态对年龄的估计。"},background:{"en-US":"Background: The estimate can reflect visible facial skin aging and may be influenced by fatigue, skincare, cosmetics, and lighting quality during capture.","zh-CN":"背景：该估计可作为可见面部皮肤老化参考，可能受到疲劳、护肤或化妆品使用，以及采集时光线质量影响。"}},"waist-to-height-ratio":{definition:{"en-US":"Definition: Waist-to-Height Ratio expresses waist circumference as a percentage of height, using the same measurement units.","zh-CN":"定义：腰高比表示腰围占身高的比例，腰围和身高需使用相同单位。"},background:{"en-US":"Background: Waist-to-height ratio is a strong predictor of cardiovascular disease risk and is associated with factors such as elevated total cholesterol and lower HDL.","zh-CN":"背景：腰高比是心血管疾病风险的重要预测指标，并与总胆固醇升高、HDL 降低等因素相关。"}},"body-shape-index":{definition:{"en-US":"Definition: Body Shape Index measures abdominal-region size relative to overall body size, using waist circumference, BMI, and height.","zh-CN":"定义：体型指数利用腰围、BMI 和身高，衡量腹部区域大小相对于整体体型的水平。"},background:{"en-US":"Background: A larger abdominal region can suggest deeper abdominal fat, which is associated with multiple health risks including diabetes and cardiovascular disease.","zh-CN":"背景：腹部区域较大可能提示更高的深层腹部脂肪水平，并与糖尿病、心血管疾病等多种健康风险相关。"}},"estimated-height":{definition:{"en-US":"Definition: Estimated Height is DeepAffex Cloud's estimate of the subject's height in centimeters.","zh-CN":"定义：估算身高是 DeepAffex Cloud 对受试者身高的厘米级估计。"},background:{"en-US":"Background: Height supports body-composition and profile-based calculations, including BMI and waist-to-height related estimates.","zh-CN":"背景：身高用于支持身体组成和个人资料相关计算，包括 BMI 与腰高比等估计。"}},"estimated-weight":{definition:{"en-US":"Definition: Estimated Weight is DeepAffex Cloud's estimate of the subject's weight in kilograms.","zh-CN":"定义：估算体重是 DeepAffex Cloud 对受试者体重的千克级估计。"},background:{"en-US":"Background: Weight supports body-composition and metabolic calculations, especially when combined with height and waist-related estimates.","zh-CN":"背景：体重用于支持身体组成和代谢相关计算，尤其会与身高、腰围等估计共同使用。"}},"waist-circumference":{definition:{"en-US":"Definition: Waist Circumference is calculated from user profile information or estimated by DeepAffex Cloud if profile information is not provided.","zh-CN":"定义：腰围基于用户资料计算；若未提供资料，可由 DeepAffex Cloud 估算。"},background:{"en-US":"Background: Waist circumference supports abdominal-size and metabolic-risk context, especially when combined with height, BMI, and body-shape indicators.","zh-CN":"背景：腰围用于支持腹部体型和代谢风险背景判断，尤其会与身高、BMI 和体型指数共同使用。"}}},mi=[{name:"indicatorGroups.vitals",cards:[["pulse","indicators.pulseRate","HR_BPM"],["bp","indicators.bloodPressure","BP_SYSTOLIC / BP_DIASTOLIC"],["hrv","indicators.hrv","HRV_SDNN"]]},{name:"indicatorGroups.cardioRisks",cards:[["cvd","indicators.cvdRisk","CVD_MULTI_YEAR_RISK_PROBS"],["heartAttack","indicators.heartAttackRisk","BP_HEART_ATTACK"],["stroke","indicators.strokeRisk","BP_STROKE"]]},{name:"indicatorGroups.metabolicRisks",cards:[["diabetes","indicators.diabetesRisk","DBT_RISK_PROB"],["bp","indicators.hypertensionRisk","HPT_RISK_PROB"],["liver","indicators.fattyLiverRisk","FLD_RISK_PROB"]]},{name:"indicatorGroups.biomarkers",cards:[["cholesterol","indicators.cholesterolRisk","HDLTC_RISK_PROB"],["glucose","indicators.glucoseRisk","MFBG_RISK_PROB"],["glucose","indicators.hba1cRisk","HBA1C_RISK_PROB"]]}],Bt=[{id:"pulse-rate",icon:"/assets/icon-heart-rate.svg",label:"Pulse Rate",value:"78",unit:"bpm",status:"Improving",tone:"pink",delta:"↓ 3 bpm",summary:"Moving closer to baseline",explanation:"Down 3 bpm, moving closer to your baseline",cardCta:"3 days to refresh",motivation:"Track 3 more days to refresh your baseline",baseline:"DeepAffex HR_BPM · beats/min · official range 0-140",detail:"Pulse Rate is DeepAffex Cloud's estimate of pulse rate from facial blood-flow data. It is expressed in beats per minute."},{id:"respiratory-rate",icon:"/assets/icon-pulse-rate.svg",label:"Breathing Rate",value:"16",unit:"/min",status:"Stable",tone:"blue",delta:"↓ 2 /min",summary:"Stable for 5 days",explanation:"Stable for 5 consecutive days",cardCta:"7 days to confirm",motivation:"Stay stable for 7 days to confirm the trend",baseline:"DeepAffex BR_BPM · breaths/min · official range 1.2-35",detail:"Breathing Rate is DeepAffex Cloud's estimate of breaths per minute from facial blood-flow and subject motion."},{id:"blood-pressure",icon:"/assets/icon-blood-pressure.svg",label:"Blood Pressure",value:"120/78",unit:"mmHg",status:"Watch",tone:"purple",delta:"↓ 5 / 3 mmHg",summary:"Systolic still fluctuates",explanation:"Systolic fluctuation is still above your baseline",cardCta:"Watch this week",motivation:"Keep watching it this week",baseline:"Systolic 108-118 / Diastolic 68-76",detail:"Blood pressure includes systolic SYS and diastolic DIA values. Your diastolic trend is relatively stable, while systolic pressure still shows mild fluctuation."},{id:"systolic-blood-pressure",icon:"/assets/icon-blood-pressure.svg",label:"Systolic Blood Pressure",value:"120",unit:"mmHg",status:"Watch",tone:"purple",delta:"↓ 5 mmHg",summary:"SYS still above baseline",explanation:"Systolic pressure is trending down but remains above the age baseline",cardCta:"Watch SYS",motivation:"Track 3 more resting scans to confirm whether SYS is settling",baseline:"DeepAffex BP_SYSTOLIC · mmHg · official range 45-180",detail:"Systolic Blood Pressure is DeepAffex Cloud's estimate of peak arterial pressure during heart muscle contraction."},{id:"diastolic-blood-pressure",icon:"/assets/icon-bp.svg",label:"Diastolic Blood Pressure",value:"78",unit:"mmHg",status:"Stable",tone:"blue",delta:"↓ 3 mmHg",summary:"DIA is near baseline",explanation:"Diastolic pressure is close to the expected baseline range",cardCta:"Keep tracking",motivation:"Maintain regular scans to confirm the stable DIA pattern",baseline:"DeepAffex BP_DIASTOLIC · mmHg · official range 30-120",detail:"Diastolic Blood Pressure is DeepAffex Cloud's estimate of arterial pressure when the heart muscle is relaxed."},{id:"stress-level",icon:"/assets/icon-wellness-score.svg",label:"Stress Level",value:"56",unit:"/100",status:"Improving",tone:"violet",delta:"↓ 8 pts",summary:"Recovery is improving",explanation:"Stress is down 8 points, recovery is improving",cardCta:"4-day streak",motivation:"Improved for 4 consecutive days",baseline:"Personal baseline 48-62 /100",detail:"Your stress level has continued to move down over the last few days, which suggests better recovery. Relaxation and sleep tasks can help maintain this trend."},{id:"heart-rate-variability",icon:"/assets/icon-hrv.svg",label:"Heart Rate Variability",value:"42",unit:"ms",status:"Stable",tone:"blue",delta:"+3 ms",summary:"Recovery signal is steady",explanation:"HRV is holding near your personal recovery baseline",cardCta:"Confirm recovery",motivation:"Track after sleep to make HRV comparisons cleaner",baseline:"DeepAffex point HRV_SDNN · milliseconds",detail:"Heart Rate Variability reflects beat-to-beat timing variation and is often used as a recovery and autonomic balance signal."},{id:"cardiac-workload",icon:"/assets/icon-heart-attack.svg",label:"Cardiac Workload",value:"9.4k",unit:"",status:"Watch",tone:"purple",delta:"↓ 4%",summary:"Workload is easing",explanation:"Cardiac workload is lower than last week but still worth monitoring",cardCta:"Watch trend",motivation:"Pair scans with resting state to reduce noisy readings",baseline:"DeepAffex point BP_RPP · rate pressure product",detail:"Cardiac Workload estimates the work performed by the heart using pulse and blood pressure related signals."},{id:"vascular-capacity",icon:"/assets/icon-cvd-risk.svg",label:"Vascular Capacity",value:"72",unit:"/100",status:"Stable",tone:"green",delta:"+2 pts",summary:"Capacity is steady",explanation:"Vascular capacity remains inside your recent baseline",cardCta:"Maintain",motivation:"Continue regular activity and scans to confirm the pattern",baseline:"DeepAffex physiological indicator · unitless score",detail:"Vascular Capacity is a physiological signal used to summarize vascular response and circulation-related capacity."},{id:"vitality-index",icon:"/assets/icon-wellness-score.svg",label:"NuraLogix Vitality Index",value:"3.8",unit:"/5",status:"Improving",tone:"violet",delta:"+0.2",summary:"Vitality improved",explanation:"Vitality Index is trending upward in the current baseline window",cardCta:"Keep routine",motivation:"Daily scans can show whether this improvement persists",baseline:"NuraLogix Vitality Index · 5-point scale",detail:"NuraLogix Vitality Index summarizes multiple physiological signals into a broad vitality estimate."},{id:"irregular-heartbeat-count",icon:"/assets/icon-pulse-rate.svg",label:"Irregular Heartbeat Count",value:"2",unit:"",status:"Watch",tone:"pink",delta:"↓ 1 event",summary:"2 events detected",explanation:"2 irregular heartbeat events detected in the latest 30-second scan",cardCta:"Track rhythm",motivation:"Repeat scans at rest to confirm whether this remains occasional",baseline:"DeepAffex point IHB_COUNT · unitless · 0-4 nominal range",detail:"Irregular Heartbeat Count estimates the number of irregular heartbeats detected during a 30-second facial blood-flow measurement. Occasional events can happen, but persistent patterns should be discussed with a clinician."},{id:"sleep-quality",icon:"/assets/icon-trend-calm.svg",label:"NuraLogix Sleep Quality Index",value:"4.2",unit:"/5",status:"Stable",tone:"blue",delta:"+0.4",summary:"Sleep quality is improving",explanation:"Sleep Quality Index is up 0.4 points in the baseline window",cardCta:"Keep routine",motivation:"Keep a consistent bedtime routine to strengthen this sleep signal",baseline:"DeepAffex point SLEEP_QUALITY · unitless · 1-5.9 range",detail:"NuraLogix Sleep Quality Index is a 5-point estimate of sleep quality based on physiological signals such as HRV, heart rate, and blood pressure patterns."},{id:"anxiety-index",icon:"/assets/icon-wellness-score.svg",label:"NuraLogix Anxiety Index",value:"2.6",unit:"/5",status:"Improving",tone:"violet",delta:"↓ 0.3",summary:"Long-range anxiety signal eased",explanation:"Anxiety Index is down 0.3 points compared with your recent baseline",cardCta:"Protect recovery",motivation:"Pair daily scans with breathing or wind-down tasks to keep this trend visible",baseline:"DeepAffex point ANXIETY_INDEX · unitless · 1-5.9 range",detail:"NuraLogix Anxiety Index estimates longer-range anxiety level from combined physiological signals including heart rate, breathing rate, blood pressure, and HRV."},{id:"cardio-metabolic-age",icon:"/assets/icon-metabolic.svg",label:"Cardiovascular Metabolic Age",value:"42",unit:"yrs",status:"Watch",tone:"purple",delta:"↓ 1 yr",summary:"Still above chronological age",explanation:"Cardiovascular metabolic age decreased by 1 year but remains worth watching",cardCta:"Review risks",motivation:"Continue exercise and nutrition tasks to help lower your risk profile",baseline:"DeepAffex point AGE_CVM · years · 18-110 range",detail:"Cardiovascular Metabolic Age estimates cardiovascular and metabolic health age using chronological age plus indicators derived from facial blood-flow measurement and profile inputs."},{id:"body-mass-index",icon:"/assets/icon-metabolic.svg",label:"Body Mass Index",value:"23.8",unit:"",status:"Stable",tone:"green",delta:"steady",summary:"BMI is stable",explanation:"BMI remains close to your current profile baseline",cardCta:"Review profile",motivation:"Keep profile inputs current for better physical estimates",baseline:"DeepAffex physical indicator · kg/m2",detail:"Body Mass Index estimates weight relative to height and is used as a broad physical profile indicator."},{id:"facial-skin-age",icon:"/assets/icon-wellness-score.svg",label:"Facial Skin Age",value:"39",unit:"yrs",status:"Stable",tone:"blue",delta:"steady",summary:"Skin age is steady",explanation:"Facial skin age remains near your current profile estimate",cardCta:"Track monthly",motivation:"Use consistent lighting to improve face-based estimates",baseline:"DeepAffex physical indicator · years",detail:"Facial Skin Age estimates visible facial skin age from the image capture context."},{id:"waist-to-height-ratio",icon:"/assets/icon-metabolic.svg",label:"Waist-to-Height Ratio",value:"0.48",unit:"",status:"Stable",tone:"green",delta:"steady",summary:"Ratio is in range",explanation:"Waist-to-height ratio is stable in the current profile",cardCta:"Maintain",motivation:"Keep physical profile measurements current",baseline:"DeepAffex physical indicator · ratio",detail:"Waist-to-Height Ratio compares waist circumference with height and is often used in metabolic risk context."},{id:"body-shape-index",icon:"/assets/icon-metabolic.svg",label:"Body Shape Index",value:"0.078",unit:"",status:"Stable",tone:"green",delta:"steady",summary:"Shape index is stable",explanation:"Body Shape Index remains near your current baseline",cardCta:"Review profile",motivation:"Update measurements when profile data changes",baseline:"DeepAffex physical indicator · ABSI-style score",detail:"Body Shape Index is a body composition related estimate used alongside BMI and waist measurements."},{id:"estimated-height",icon:"/assets/icon-wellness-score.svg",label:"Estimated Height",value:"172",unit:"cm",status:"Stable",tone:"blue",delta:"steady",summary:"Height estimate locked",explanation:"Estimated height is stable for this profile",cardCta:"Profile",motivation:"Keep profile information accurate",baseline:"DeepAffex physical estimate · centimeters",detail:"Estimated Height is a physical profile estimate used to support body composition calculations."},{id:"estimated-weight",icon:"/assets/icon-wellness-score.svg",label:"Estimated Weight",value:"70",unit:"kg",status:"Stable",tone:"blue",delta:"steady",summary:"Weight estimate stable",explanation:"Estimated weight is stable for this profile",cardCta:"Profile",motivation:"Update profile measurements when weight changes",baseline:"DeepAffex physical estimate · kilograms",detail:"Estimated Weight is a physical profile estimate used to support metabolic and body composition signals."},{id:"waist-circumference",icon:"/assets/icon-metabolic.svg",label:"Waist Circumference",value:"82",unit:"cm",status:"Stable",tone:"green",delta:"steady",summary:"Waist estimate stable",explanation:"Waist circumference remains near your current baseline",cardCta:"Track profile",motivation:"Keep waist measurement current for metabolic trend context",baseline:"DeepAffex physical estimate · centimeters",detail:"Waist Circumference is a physical estimate used with height and body shape metrics for metabolic context."}],pi={"pulse-rate":{label:"脉率",status:"改善中",summary:"正在接近基线",baseline:"DeepAffex HR_BPM · 次/分钟 · 官方范围 0-140",detail:"脉率是 DeepAffex Cloud 基于面部血流数据估算的每分钟脉搏次数。",motivation:"再连续记录 3 天，帮助确认基线是否稳定刷新。"},"respiratory-rate":{label:"呼吸频率",status:"稳定",summary:"已稳定 5 天",baseline:"DeepAffex BR_BPM · 次/分钟 · 官方范围 1.2-35",detail:"呼吸频率是 DeepAffex Cloud 基于面部血流和受试者运动估算的每分钟呼吸次数。",motivation:"保持 7 天稳定记录，帮助确认这一趋势。"},"blood-pressure":{label:"血压",status:"关注",summary:"收缩压仍有波动",baseline:"收缩压 108-118 / 舒张压 68-76",detail:"血压包含收缩压 SYS 与舒张压 DIA。当前舒张压趋势较稳定，收缩压仍有轻微波动。",motivation:"本周继续观察，帮助区分正常波动和持续升高。"},"systolic-blood-pressure":{label:"收缩压",status:"关注",summary:"SYS 仍高于基线",baseline:"DeepAffex BP_SYSTOLIC · mmHg · 官方范围 45-180",detail:"收缩压是 DeepAffex Cloud 对心肌收缩时动脉峰值压力的估算。",motivation:"再做 3 次静息扫描，确认收缩压是否继续回落。"},"diastolic-blood-pressure":{label:"舒张压",status:"稳定",summary:"DIA 接近基线",baseline:"DeepAffex BP_DIASTOLIC · mmHg · 官方范围 30-120",detail:"舒张压是 DeepAffex Cloud 对心肌放松时动脉压力的估算。",motivation:"保持规律扫描，确认舒张压的稳定模式。"},"stress-level":{label:"压力水平",status:"改善中",summary:"恢复状态在改善",baseline:"个人基线 48-62 /100",detail:"你的压力水平最近持续下降，提示恢复状态正在改善。放松练习和睡眠任务有助于维持这一趋势。",motivation:"已连续改善 4 天，继续保持。"},"heart-rate-variability":{label:"心率变异性",status:"稳定",summary:"恢复信号稳定",baseline:"DeepAffex HRV_SDNN · 毫秒",detail:"心率变异性反映心跳间隔变化，常用于观察恢复状态和自主神经平衡。",motivation:"建议在睡醒后记录，让 HRV 对比更稳定。"},"cardiac-workload":{label:"心脏负荷",status:"关注",summary:"负荷正在缓解",baseline:"DeepAffex BP_RPP · 心率血压乘积",detail:"心脏负荷结合脉率和血压相关信号，估算心脏当前做功水平。",motivation:"尽量在静息状态扫描，减少噪声读数。"},"vascular-capacity":{label:"血管能力",status:"稳定",summary:"血管能力稳定",baseline:"DeepAffex 生理指标 · 无单位评分",detail:"血管能力用于概括血管反应和循环相关能力。",motivation:"保持规律活动和扫描，确认趋势稳定。"},"vitality-index":{label:"NuraLogix 活力指数",status:"改善中",summary:"活力有所提升",baseline:"NuraLogix 活力指数 · 5 分量表",detail:"NuraLogix 活力指数将多项生理信号汇总为整体活力估计。",motivation:"每日扫描可以确认这一改善是否持续。"},"irregular-heartbeat-count":{label:"不规则心跳次数",status:"关注",summary:"检测到 2 次事件",baseline:"DeepAffex IHB_COUNT · 无单位 · 0-4 名义范围",detail:"不规则心跳次数估算 30 秒面部血流测量中检测到的不规则心跳数量。偶发事件可能出现，但持续模式建议咨询临床专业人士。",motivation:"在相似静息条件下重复扫描，确认是否仍为偶发。"},"sleep-quality":{label:"NuraLogix 睡眠质量指数",status:"稳定",summary:"睡眠质量在改善",baseline:"DeepAffex SLEEP_QUALITY · 无单位 · 1-5.9 范围",detail:"NuraLogix 睡眠质量指数基于 HRV、心率、血压等生理信号估算睡眠质量。",motivation:"保持固定睡前流程，有助于增强睡眠信号。"},"anxiety-index":{label:"NuraLogix 焦虑指数",status:"改善中",summary:"长期焦虑信号缓解",baseline:"DeepAffex ANXIETY_INDEX · 无单位 · 1-5.9 范围",detail:"NuraLogix 焦虑指数结合心率、呼吸、血压和 HRV 等信号估算较长期的焦虑水平。",motivation:"将每日扫描与呼吸或睡前放松任务结合，帮助保持趋势可见。"},"cardio-metabolic-age":{label:"心血管代谢年龄",status:"关注",summary:"仍高于实际年龄",baseline:"DeepAffex AGE_CVM · 年 · 18-110 范围",detail:"心血管代谢年龄结合实际年龄、面部血流测量和个人资料输入，估算心血管与代谢健康年龄。",motivation:"继续保持运动和营养任务，帮助降低风险画像。"},"body-mass-index":{label:"身体质量指数",status:"稳定",summary:"BMI 稳定",baseline:"DeepAffex 身体指标 · kg/m2",detail:"身体质量指数根据身高和体重估算体重相对水平，是一个宽泛的身体画像指标。",motivation:"保持个人资料输入准确，有助于改善身体估算。"},"facial-skin-age":{label:"面部皮肤年龄",status:"稳定",summary:"皮肤年龄稳定",baseline:"DeepAffex 身体指标 · 年",detail:"面部皮肤年龄根据图像采集上下文估算可见面部皮肤年龄。",motivation:"使用稳定光线可以提升面部估算一致性。"},"waist-to-height-ratio":{label:"腰高比",status:"稳定",summary:"比例处于范围内",baseline:"DeepAffex 身体指标 · 比值",detail:"腰高比比较腰围与身高，常用于代谢风险相关背景判断。",motivation:"保持身体资料测量更新。"},"body-shape-index":{label:"体型指数",status:"稳定",summary:"体型指数稳定",baseline:"DeepAffex 身体指标 · ABSI 类评分",detail:"体型指数是身体组成相关估算，会与 BMI 和腰围指标一起使用。",motivation:"当身体资料变化时，及时更新测量数据。"},"estimated-height":{label:"估算身高",status:"稳定",summary:"身高估算已稳定",baseline:"DeepAffex 身体估算 · 厘米",detail:"估算身高用于支持身体组成相关计算。",motivation:"保持个人资料信息准确。"},"estimated-weight":{label:"估算体重",status:"稳定",summary:"体重估算稳定",baseline:"DeepAffex 身体估算 · 千克",detail:"估算体重用于支持代谢和身体组成信号。",motivation:"体重变化时请更新个人资料测量值。"},"waist-circumference":{label:"腰围",status:"稳定",summary:"腰围估算稳定",baseline:"DeepAffex 身体估算 · 厘米",detail:"腰围会与身高和体型指标一起用于代谢背景判断。",motivation:"保持腰围测量更新，有助于代谢趋势解释。"}};function gi(e,t,a){z=a,d.measurement.faceHint||=m("scan.initialHint"),fi()||(d.activeTab="onboarding");function s(l){Object.assign(d,l),r()}async function i(){s({activeTab:"scanning",measurement:{status:"running",phase:"initializing",progress:0,faceHint:m("scan.preparingCamera"),result:null,debug:null}});try{await t.initialize({onProgress:(c,f,g={})=>{d.measurement.progress=c,d.measurement.faceHint=f,d.measurement.status="running",d.measurement.phase=g.phase||d.measurement.phase,n()}});const l=await t.startMeasurement({onProgress:(c,f,g={})=>{d.measurement.progress=c,d.measurement.faceHint=f,d.measurement.status="running",d.measurement.phase=g.phase||d.measurement.phase,n()}});s({activeTab:"results",measurement:{status:"finished",phase:"finished",progress:100,faceHint:m("scan.completeHint"),result:l,debug:null}})}catch(l){const c=l.debug||{message:l.message,stack:l.stack};Li(c),Oi(c),s({measurement:{status:"failed",phase:"failed",progress:0,faceHint:l.message||m("scan.failedHint"),result:null,debug:c}})}}function n(){const{status:l,phase:c,progress:f,faceHint:g,debug:T}=d.measurement,w=Math.max(0,Math.min(100,Math.round(f))),S=e.querySelector(".scan-title h1"),k=e.querySelector(".scan-title p"),I=e.querySelector(".scan-progress-label"),x=e.querySelector(".scan-progress span"),L=e.querySelector(".scan-debug pre");S&&(S.textContent=Fa(l,c)),k&&(k.innerHTML=`<span class="${Ha(l,c)}"></span>${g}`),I&&(I.innerHTML=`${Ui(l,c)} <span>${w}%</span>`),x&&(x.style.width=`${w}%`),L&&T&&(L.textContent=yt(T))}function r({preserveScroll:l=!1}={}){const c=e.querySelector(".app-page"),f=e.querySelector(".indicator-detail-sheet"),g=l&&c?.scrollTop||0,T=l&&f?.scrollTop||0,w=d.activeTab==="onboarding"||d.activeTab==="onboarding-ready"||d.activeTab==="prepare"||d.activeTab==="scanning"||d.activeTab==="results",S=d.activeTab==="onboarding"||d.activeTab==="onboarding-ready"||d.activeTab==="home"||d.activeTab==="prepare"||d.activeTab==="scanning"||d.activeTab==="first-trends"||d.activeTab==="trends"||d.activeTab==="insights"||d.activeTab==="profile"||d.activeTab==="results";e.innerHTML=si(`
      <main class="app-shell ${S?"landing-shell":""} ${w?"":"has-bottom-nav"}">
        <section class="app-page">
          ${S?"":vi()}
          ${yi()}
        </section>
        ${w?"":Br()}
      </main>
    `),l?(e.querySelector(".app-page")?.scrollTo({top:g,left:0}),e.querySelector(".indicator-detail-sheet")?.scrollTo({top:T,left:0})):(e.querySelector(".app-page")?.scrollTo({top:0,left:0}),window.scrollTo({top:0,left:0})),e.onclick=k=>{const I=k.target.closest("[data-tab]");if(I){const te=I.dataset.tab;d.activeTab=te==="scan"?"prepare":te,r();return}const x=k.target.closest("[data-plan-filter]");if(x){d.activePlanFilter=x.dataset.planFilter,r({preserveScroll:!0});return}const L=k.target.closest("[data-risk-insight-tab]");if(L){d.activeRiskInsightTab=L.dataset.riskInsightTab,r({preserveScroll:!0});return}const W=k.target.closest("[data-trend-indicator-group]");if(W){d.activeTrendIndicatorGroup=W.dataset.trendIndicatorGroup,r({preserveScroll:!0});return}const N=k.target.closest("[data-action]");if(!N)return;const A=N.dataset.action;if(A==="onboarding-next"){d.onboardingStep<nt-1?(d.onboardingStep+=1,r()):(d.activeTab="onboarding-ready",r());return}if(A==="onboarding-back"){d.onboardingStep>0&&(d.onboardingStep-=1,r());return}if(A==="onboarding-complete"){localStorage.setItem(Pa,"true"),d.activeTab="home",r();return}if(A==="select-onboarding-goal"){d.onboarding.goal=N.dataset.value,r({preserveScroll:!0});return}if(A==="toggle-onboarding-concern"){bi(N.dataset.value),r({preserveScroll:!0});return}if(A==="select-onboarding-sex"){d.onboarding.sex=N.dataset.value,r({preserveScroll:!0});return}if(A==="select-onboarding-unit"){d.onboarding.unit=N.dataset.value,r({preserveScroll:!0});return}if(A==="select-onboarding-activity"){d.onboarding.activity=N.dataset.value,r({preserveScroll:!0});return}if(A==="select-onboarding-sleep"){d.onboarding.sleep=N.dataset.value,r({preserveScroll:!0});return}if(A==="select-onboarding-eating"){d.onboarding.eating=N.dataset.value,r({preserveScroll:!0});return}if(A==="select-onboarding-stress"){d.onboarding.stress=N.dataset.value,r({preserveScroll:!0});return}if(A==="start-measurement"){i();return}if(A==="prepare-scan"){d.activeTab="prepare",r();return}if(A==="go-home"){t.cleanup?.(),d.activeTab="home",r();return}if(A==="view-results"){d.activeTab="results",r();return}if(A==="view-first-trends"){d.activeTab="first-trends",r();return}if(A==="view-full-trends"){d.activeTab="trends",r();return}if(A==="scan-again"&&(d.activeTab="prepare",r()),A==="open-progress-history"){d.showProgressHistorySheet=!0,r({preserveScroll:!0});return}if(A==="close-progress-history"){d.showProgressHistorySheet=!1,r({preserveScroll:!0});return}if(A==="set-trend-range"){d.activeTrendRange=N.dataset.range,r({preserveScroll:!0});return}if(A==="open-trend-indicator"){d.activeTrendIndicator=N.dataset.indicatorId,r({preserveScroll:!0});return}if(A==="close-trend-indicator"){d.activeTrendIndicator=null,r({preserveScroll:!0});return}if(A==="open-risk-insight"){d.activeRiskInsight=N.dataset.riskId,r({preserveScroll:!0});return}A==="close-risk-insight"&&(d.activeRiskInsight=null,r({preserveScroll:!0}))},e.onchange=k=>{const I=k.target.closest("[data-language-select]");I&&(z.setLanguage(I.value),d.measurement.faceHint=m("scan.initialHint"),r({preserveScroll:!0}))}}r()}function fi(){return localStorage.getItem(Pa)==="true"}function bi(e){const t=d.onboarding.concerns;if(t.includes(e)){d.onboarding.concerns=t.filter(a=>a!==e);return}t.length>=3||(d.onboarding.concerns=[...t,e])}function vi(){const e={home:["今日状态","AI 健康副驾驶"],scan:["摄像头测量","Shen.AI Web SDK"],trends:["健康趋势","个人基线对比"],reports:["体检与病历","健康画像锚点"],plan:["健康计划","12 周改进"]},[t,a]=e[d.activeTab];return`
    <header class="screen-header">
      <div>
        <p class="kicker">${a}</p>
        <h1>${t}</h1>
      </div>
      <span class="date-pill">5 月 18 日</span>
    </header>
  `}function yi(){return d.activeTab==="onboarding"?Si():d.activeTab==="onboarding-ready"?Ni():d.activeTab==="prepare"?Vi():d.activeTab==="scanning"?_i():d.activeTab==="results"?Ii():d.activeTab==="scan"?Ki():d.activeTab==="first-trends"?Yi():d.activeTab==="trends"?ji():d.activeTab==="insights"?tr():d.activeTab==="profile"?dr():d.activeTab==="reports"?Ur():d.activeTab==="plan"?Pr():Wi()}function Si(){const e=[ki,wi,Ei,Ri,Ci,Ai];return`
    <section class="onboarding-page">
      ${Ti()}
      ${e[d.onboardingStep]()}
      <button class="onboarding-cta" data-action="onboarding-next">
        ${p({"en-US":"Continue","zh-CN":"继续"})}
      </button>
      ${xi()}
    </section>
  `}function Ti(){return`
    <header class="onboarding-topbar">
      <button class="onboarding-back" data-action="onboarding-back" aria-label="${m("common.back")}">
        ${K("back")}
      </button>
      <div>
        <span>${p({"en-US":`Step ${d.onboardingStep+1} of ${nt}`,"zh-CN":`第 ${d.onboardingStep+1} / ${nt} 步`})}</span>
        <div class="onboarding-progress" aria-hidden="true">
          ${Array.from({length:nt},(e,t)=>`<i class="${t<=d.onboardingStep?"active":""}"></i>`).join("")}
        </div>
      </div>
      <span class="onboarding-top-spacer" aria-hidden="true"></span>
    </header>
  `}function Ne(e,t){return`
    <section class="onboarding-title">
      <h1>${p(e)}</h1>
      <p>${p(t)}</p>
    </section>
  `}function ki(){return`
    ${Ne({"en-US":"What's your main health goal?","zh-CN":"你的主要健康目标是什么？"},{"en-US":"This helps us personalize your insights and action plan.","zh-CN":"这能帮助我们个性化你的洞察和行动计划。"})}
    <section class="onboarding-list">
      ${Lt.map(e=>me({item:e,selected:d.onboarding.goal===e.id,action:"select-onboarding-goal",layout:"row"})).join("")}
    </section>
  `}function wi(){return`
    ${Ne({"en-US":"Which health areas are you most concerned about?","zh-CN":"你最关注哪些健康领域？"},{"en-US":"Select up to 3 areas.","zh-CN":"最多选择 3 项。"})}
    <section class="onboarding-grid">
      ${Ba.map(e=>me({item:e,selected:d.onboarding.concerns.includes(e.id),action:"toggle-onboarding-concern",layout:"tile"})).join("")}
    </section>
    <div class="onboarding-secure-note">${K("shield")} ${p({"en-US":"Your information is private and secure.","zh-CN":"你的信息会保持私密并受到保护。"})}</div>
  `}function Ei(){return`
    ${Ne({"en-US":"Tell us a little about you","zh-CN":"告诉我们一些你的情况"},{"en-US":"This helps us provide more accurate insights.","zh-CN":"这能帮助我们提供更准确的洞察。"})}
    <section class="onboarding-form">
      <div class="onboarding-field">
        <label>${p({"en-US":"Age","zh-CN":"年龄"})}</label>
        <button class="onboarding-select-like">
          <strong>${d.onboarding.age}</strong>
          <span>${p({"en-US":"years old","zh-CN":"岁"})}</span>
          ${K("chevronDown")}
        </button>
      </div>
      <div class="onboarding-field">
        <label>${p({"en-US":"Sex assigned at birth","zh-CN":"出生时登记性别"})}</label>
        <div class="onboarding-list compact">
          ${ri.map(e=>me({item:e,selected:d.onboarding.sex===e.id,action:"select-onboarding-sex",layout:"row"})).join("")}
        </div>
      </div>
    </section>
  `}function Ri(){return`
    ${Ne({"en-US":"What's your body profile?","zh-CN":"你的身体数据如何？"},{"en-US":"This helps us understand your overall health better.","zh-CN":"这能帮助我们更好理解你的整体健康状况。"})}
    <section class="onboarding-form">
      <div class="onboarding-field">
        <label>${p({"en-US":"Height","zh-CN":"身高"})}</label>
        <div class="onboarding-measure-row">
          <div class="onboarding-measure"><strong>${d.onboarding.heightFt}</strong><span>ft</span></div>
          <div class="onboarding-measure"><strong>${d.onboarding.heightIn}</strong><span>in</span></div>
        </div>
      </div>
      <div class="onboarding-field">
        <label>${p({"en-US":"Weight","zh-CN":"体重"})}</label>
        <div class="onboarding-measure wide"><strong>${d.onboarding.weightLbs}</strong><span>lbs</span></div>
      </div>
      <div class="onboarding-unit-toggle">
        <button class="${d.onboarding.unit==="us"?"active":""}" data-action="select-onboarding-unit" data-value="us">US</button>
        <button class="${d.onboarding.unit==="metric"?"active":""}" data-action="select-onboarding-unit" data-value="metric">Metric</button>
      </div>
    </section>
    <div class="onboarding-secure-note">${K("shield")} ${p({"en-US":"Used for BMI and health insights only.","zh-CN":"仅用于 BMI 和健康洞察。"})}</div>
  `}function Ci(){return`
    ${Ne({"en-US":"How would you describe your lifestyle?","zh-CN":"你会如何描述自己的生活方式？"},{"en-US":"","zh-CN":""})}
    <section class="onboarding-field">
      <label>${p({"en-US":"How active are you on a typical week?","zh-CN":"你一周通常有多活跃？"})}</label>
      <div class="onboarding-list compact">
        ${ni.map(e=>me({item:e,selected:d.onboarding.activity===e.id,action:"select-onboarding-activity",layout:"row",detail:e.detail})).join("")}
      </div>
    </section>
    <section class="onboarding-field">
      <label>${p({"en-US":"How is your sleep lately?","zh-CN":"你最近睡眠如何？"})}</label>
      <div class="onboarding-list dense">
        ${oi.map(e=>me({item:e,selected:d.onboarding.sleep===e.id,action:"select-onboarding-sleep",layout:"text"})).join("")}
      </div>
    </section>
    <div class="onboarding-secure-note">${K("shield")} ${p({"en-US":"Your answers help personalize your plan.","zh-CN":"你的回答会帮助个性化计划。"})}</div>
  `}function Ai(){return`
    ${Ne({"en-US":"A few more questions to personalize your plan","zh-CN":"再回答几个问题，个性化你的计划"},{"en-US":"","zh-CN":""})}
    <section class="onboarding-field">
      <label>${p({"en-US":"How would you describe your eating habits?","zh-CN":"你会如何描述自己的饮食习惯？"})}</label>
      <div class="onboarding-list dense">
        ${li.map(e=>me({item:e,selected:d.onboarding.eating===e.id,action:"select-onboarding-eating",layout:"text"})).join("")}
      </div>
    </section>
    <section class="onboarding-field">
      <label>${p({"en-US":"How stressed do you feel most days?","zh-CN":"大多数时候你感觉压力多大？"})}</label>
      <div class="onboarding-stress-grid">
        ${ci.map(e=>me({item:e,selected:d.onboarding.stress===e.id,action:"select-onboarding-stress",layout:"stress"})).join("")}
      </div>
    </section>
  `}function me({item:e,selected:t,action:a,layout:s,detail:i}){const n=i?p(i):"";return`
    <button class="onboarding-option ${s} ${e.tone||""} ${t?"selected":""}" data-action="${a}" data-value="${e.id}">
      ${e.icon?`<span class="onboarding-option-icon">${K(e.icon)}</span>`:""}
      <span class="onboarding-option-copy">
        <strong>${p(e.label)}</strong>
        ${n?`<small>${n}</small>`:""}
      </span>
      <span class="onboarding-check" aria-hidden="true">${t?"✓":""}</span>
    </button>
  `}function xi(){return d.onboardingStep===1||d.onboardingStep===3||d.onboardingStep===4?"":'<span class="onboarding-bottom-spacer" aria-hidden="true"></span>'}function Ni(){const e=Di().join(", ");return`
    <section class="onboarding-ready-page">
      <div class="onboarding-ready-copy">
        <p class="ready-kicker">${K("checkCircle")} ${p({"en-US":"All set!","zh-CN":"全部完成！"})}</p>
        <h1>${p({"en-US":"Your Personal Health Profile Is Ready","zh-CN":"你的个人健康画像已准备好"})}</h1>
        <p>${p({"en-US":"We'll use your profile and scan results to create personalized insights and a weekly action plan just for you.","zh-CN":"我们会结合你的资料和扫描结果，生成个性化洞察与每周行动计划。"})}</p>
        <section class="ready-summary-list">
          ${Rt("target",p({"en-US":"Primary Focus","zh-CN":"主要关注"}),e)}
          ${Rt("calendar",p({"en-US":"Recommended Scan Frequency","zh-CN":"建议扫描频率"}),p({"en-US":"Daily morning scan","zh-CN":"每天早晨扫描"}))}
          ${Rt("chart",p({"en-US":"AI Plan Style","zh-CN":"AI 计划风格"}),p({"en-US":"Balanced weekly action plan","zh-CN":"均衡的每周行动计划"}))}
        </section>
        <button class="onboarding-cta ready" data-action="onboarding-complete">
          ${p({"en-US":"Start My First AI Health Scan","zh-CN":"开始第一次 AI 健康扫描"})}
          <span>→</span>
        </button>
        <div class="onboarding-secure-note ready-note">${K("shield")} ${p({"en-US":"No device needed. Just your phone camera.","zh-CN":"无需额外设备，只需要手机摄像头。"})}</div>
      </div>
      <div class="onboarding-ready-visual">
        <span class="ready-bubble heart">${K("heart")}</span>
        <span class="ready-bubble moon">${K("moon")}</span>
        <span class="ready-bubble walk">${K("walk")}</span>
        <div class="ready-phone">
          <img src="/assets/male-face-clean.png" alt="" aria-hidden="true" />
          <div class="ready-scan-badge">${K("shield")} AI Scan</div>
        </div>
      </div>
    </section>
  `}function Di(){const e=Ba.filter(t=>d.onboarding.concerns.includes(t.id)).map(t=>p(t.label));return e.length?e:[p(Lt.find(t=>t.id===d.onboarding.goal)?.label||Lt[0].label)]}function Rt(e,t,a){return`
    <article class="ready-summary-item">
      <span>${K(e)}</span>
      <div>
        <small>${t}</small>
        <strong>${a}</strong>
      </div>
    </article>
  `}function K(e){return{back:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 5 8.5 12l7 7"/></svg>',chevronDown:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5"/></svg>',checkCircle:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.2 2.2 2.2 4.8-5"/></svg>',shield:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.2 19 6v5.2c0 4.4-2.8 7.7-7 9.5-4.2-1.8-7-5.1-7-9.5V6l7-2.8Z"/><path d="m8.7 12 2.1 2.1 4.7-5"/></svg>',target:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="m14.8 9.2 4.7-4.7M17.3 4.5h2.2v2.2"/></svg>',user:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7.3" r="3.1"/><path d="M6.5 20a5.5 5.5 0 0 1 11 0"/></svg>',female:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7.8" r="3.2"/><path d="M12 11v8M9 16h6"/></svg>',sitting:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6h8a2 2 0 0 1 2 2v5H6V8a2 2 0 0 1 2-2Z"/><path d="M5 13h14M7 13v5M17 13v5"/></svg>',run:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="13" cy="5" r="2"/><path d="m10.5 9 3 1.8 3.5-1.1M11.8 11.3 9.2 15l-3 3.3M14.2 13.4l2.9 5.2"/></svg>',dumbbell:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6M7 8v8M17 8v8M20 9v6M7 12h10"/></svg>',smile:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8.5 10h.01M15.5 10h.01M8.7 14.2a4.5 4.5 0 0 0 6.6 0"/></svg>',meh:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8.5 10h.01M15.5 10h.01M8.8 15h6.4"/></svg>'}[e]||O(e)}function Ii(){const e=d.measurement.result||{},t=Pi(e);return`
    <section class="results-page">
      <header class="results-header">
        <button class="back-button result-back" data-action="go-home" aria-label="${m("common.back")}">
          <span></span>
        </button>
        <div>
          <p>${m("results.kicker")}</p>
          <h1>${m("results.title")}</h1>
        </div>
      </header>

      <section class="results-score">
        <div>
          <span>${m("results.snapshot")}</span>
          <strong>${Ae(e,"HEALTH_SCORE","--",0)}</strong>
          <small>${m("results.trendOnly")}</small>
        </div>
        <button data-action="scan-again">${m("results.scanAgain")}</button>
      </section>

      <section class="result-hero-grid">
        ${Ct("/assets/icon-pulse-rate.svg",m("results.heartRate"),e.heartRate?`${e.heartRate}`:Ae(e,"HR_BPM"),"bpm","HR_BPM")}
        ${Ct("/assets/icon-blood-pressure.svg",m("results.bloodPressure"),e.bloodPressure||Hi(e),"mmHg","BP_SYSTOLIC / BP_DIASTOLIC")}
        ${Ct("/assets/icon-hrv.svg","HRV",e.hrv?`${e.hrv}`:Ae(e,"HRV_SDNN"),"ms","HRV_SDNN")}
      </section>

      ${t.map(Bi).join("")}

      <section class="results-disclaimer">
        ${m("results.disclaimer")}
      </section>
    </section>
  `}function _i(){const{status:e,phase:t,progress:a,faceHint:s,result:i,debug:n}=d.measurement,r=Fa(e,t),l=e==="finished"?"Results are ready":s;return`
    <section class="scan-page">
      <button class="scan-close" data-action="go-home" aria-label="${m("common.close")}"></button>

      <section class="scan-title">
        <h1>${r}</h1>
        <p><span class="${Ha(e,t)}"></span>${l}</p>
      </section>

      <section class="scan-orbit wmea-orbit">
        <div id="wmea-container" class="wmea-container"></div>
        <div id="dfx-quality" class="dfx-quality">WMEA</div>
      </section>

      <section class="analyzing-card">
        <img src="/assets/icon-shield-blue.svg" alt="" aria-hidden="true" />
        <div>
          <h2>${m(e==="finished"?"scan.vitalReady":"scan.analyzingTitle")}</h2>
          ${i?`<p>${m("scan.resultLine",{heartRate:i.heartRate,bloodPressure:i.bloodPressure,hrv:i.hrv})}</p>`:`<p>${m("scan.analyzingBody")}</p>`}
        </div>
      </section>

      ${n?$i(n):""}

    </section>
  `}function $i(e){return`
    <section class="scan-debug">
      <h2>${m("scan.debugTitle")}</h2>
      <p>${m("scan.debugSaved")}</p>
      <pre>${Mi(yt(e))}</pre>
    </section>
  `}function Li(e){try{localStorage.setItem("dfx_last_error",yt(e))}catch{}}function Oi(e){const t=`DFX measurement error

${yt(e)}`;setTimeout(()=>{window.alert(t)},50)}function yt(e){return JSON.stringify(e,null,2)}function Mi(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Fa(e,t){return m(e==="finished"?"scan.titleComplete":e==="failed"||t==="failed"?"scan.titleFailed":t==="countdown"?"scan.titleReady":t==="aligning-error"||t==="ready"||t==="aligning"?"scan.titlePosition":t==="analyzing"?"scan.titleAnalyzing":"scan.titleScanning")}function Ha(e,t){return e==="failed"||t==="aligning-error"||t==="failed"||t==="error"?"scan-dot-error":t==="ready"||t==="countdown"||t==="measuring"?"scan-dot-ready":""}function Ui(e,t){return m(e==="finished"?"scan.progressFinished":t==="initializing"?"scan.progressPreparing":t==="aligning-error"||t==="aligning"||t==="ready"||t==="countdown"?"scan.progressMeasure":t==="analyzing"?"scan.progressAnalyzing":"scan.progressScanning")}function Pi(e){return[{title:m("results.cardiovascular"),items:[["/assets/icon-cvd-risk.svg",m("results.cvdRisk"),"BP_CVD","%"],["/assets/icon-stroke-risk.svg",m("results.strokeRisk"),"BP_STROKE","%"],["/assets/icon-heart-attack.svg",m("results.heartAttackRisk"),"BP_HEART_ATTACK","%"],["/assets/icon-heart-rate.svg",m("results.ratePressure"),"BP_RPP",""]]},{title:m("results.metabolicRisks"),items:[["/assets/icon-diabetes.svg",m("results.type2DiabetesRisk"),"DBT_RISK_PROB","%"],["/assets/icon-bp.svg",m("results.hypertensionRisk"),"HPT_RISK_PROB","%"],["/assets/icon-liver-risk.svg",m("results.fattyLiverRisk"),"FLD_RISK_PROB","%"],["/assets/icon-metabolic.svg",m("results.overallMetabolicRisk"),"OVERALL_METABOLIC_RISK_PROB","%"]]},{title:m("results.biomarkers"),items:[["/assets/icon-cholesterol.svg",m("results.hdlRisk"),"HDLTC_RISK_PROB","%"],["/assets/icon-glucose.svg",m("results.glucoseRisk"),"MFBG_RISK_PROB","%"],["/assets/icon-glucose.svg",m("results.hba1cRisk"),"HBA1C_RISK_PROB","%"],["/assets/icon-wellness-score.svg",m("results.physioScore"),"PHYSIO_SCORE",""]]}].map(t=>({...t,items:t.items.map(([a,s,i,n])=>({icon:a,label:s,key:i,value:Ae(e,i),unit:n,status:zi(e,i)}))}))}function Bi(e){return`
    <section class="result-section">
      <h2>${e.title}</h2>
      <div class="result-list">
        ${e.items.map(Fi).join("")}
      </div>
    </section>
  `}function Fi(e){return`
    <article class="result-list-item">
      <img src="${e.icon}" alt="" aria-hidden="true" />
      <div>
        <h3>${e.label}</h3>
        <p>${e.key}</p>
      </div>
      <strong>${e.value}${e.value==="--"?"":e.unit}</strong>
      <span class="${e.status.className}">${e.status.label}</span>
    </article>
  `}function Ct(e,t,a,s,i){return`
    <article class="result-metric-card">
      <img src="${e}" alt="" aria-hidden="true" />
      <span>${t}</span>
      <strong>${a||"--"}</strong>
      <small>${s}</small>
      <p>${i}</p>
    </article>
  `}function Ae(e,t,a="--",s=1){const i=za(e.channels?.[t]);return i===null?a:Number.isInteger(i)||s===0?String(Math.round(i)):i.toFixed(s)}function Hi(e){const t=Ae(e,"BP_SYSTOLIC"),a=Ae(e,"BP_DIASTOLIC");return t==="--"||a==="--"?"--":`${t}/${a}`}function za(e){return!Array.isArray(e)||e.length===0?null:e.reduce((t,a)=>t+a,0)/e.length/1e4}function zi(e,t){const a=za(e.channels?.[t]);if(a===null)return{label:m("common.pending"),className:"result-status muted"};if(t.includes("RISK")||t.startsWith("BP_")){if(a>=30)return{label:m("common.high"),className:"result-status high"};if(a>=15)return{label:m("common.watch"),className:"result-status watch"}}return{label:m("common.normal"),className:"result-status normal"}}function Wi(){return`
    <section class="iphone-home">
      <header class="iphone-header">
        <div class="iphone-brand">
          <img class="vital-logo" src="/assets/vitalscan-logo.svg" alt="" aria-hidden="true" />
          <strong>VitalScan</strong>
          <span>AI</span>
        </div>
        ${Gi()}
      </header>

      <section class="iphone-hero">
        <img class="hero-scan-img" src="/assets/hero-scan.png" alt="${m("home.heroAlt")}" />
        <span class="device-pill"><img src="/assets/icon-shield-blue.svg" alt="" aria-hidden="true" />${m("home.noDevice")}</span>
        <h1>${m("home.title")}</h1>
        <p>${m("home.body")}</p>
      </section>

      <section class="iphone-indicators">
        <div class="indicator-head">
          <div><img src="/assets/icon-shield-gray.svg" alt="" aria-hidden="true" />${m("home.indicators")}</div>
          <button>${m("home.learnMore")} <span>›</span></button>
        </div>
        <div class="indicator-carousel" aria-label="${m("home.indicators")}">
          <div class="indicator-track">
            ${mi.map(zr).join("")}
          </div>
        </div>
        <div class="pager group-pager"><span></span><span></span><span></span><span></span></div>
      </section>

      <button class="iphone-cta" data-action="prepare-scan">
        <img src="/assets/icon-camera-white.svg" alt="" aria-hidden="true" />
        ${m("home.cta")}
      </button>

      <div class="iphone-privacy"><img src="/assets/icon-lock-gray.svg" alt="" aria-hidden="true" />${m("home.privacy")}</div>

      <section class="iphone-wellness">
        <img src="/assets/icon-shield-large.svg" alt="" aria-hidden="true" />
        <div>
          <h2>${m("home.disclaimerTitle")}</h2>
          <p>${m("home.disclaimerBody")}</p>
        </div>
      </section>

      <section class="iphone-powered">
        <span>${m("home.poweredBy")}</span>
        <strong><img src="/assets/nuralogix-mark.svg" alt="" aria-hidden="true" />nuralogix</strong>
        <small>by DeepAffex®</small>
        <p>${m("home.poweredBody")}</p>
      </section>
    </section>
  `}function Gi(){return`
    <label class="language-select" aria-label="${m("language.label")}">
      <select data-language-select>
        ${z.options().map(e=>`
          <option value="${e.code}" ${e.code===z.getLanguage()?"selected":""}>${e.label}</option>
        `).join("")}
      </select>
    </label>
  `}function Vi(){return`
    <section class="prepare-page">
      <header class="prepare-header">
        <button class="back-button" data-action="go-home" aria-label="${m("common.back")}">
          <span></span>
        </button>
        <h1>${m("prepare.title")}</h1>
      </header>

      <section class="prepare-face">
        <img src="/assets/male-clean.png" alt="${m("prepare.faceAlt")}" />
      </section>

      <section class="prep-card">
        ${Je("/assets/icon-good-lighting.svg",m("prepare.goodLightingTitle"),m("prepare.goodLightingBody"),m("prepare.goodLightingHint"))}
        ${Je("/assets/icon-face-frame.svg",m("prepare.faceFrameTitle"),m("prepare.faceFrameBody"))}
        ${Je("/assets/icon-stay-still.svg",m("prepare.stayStillTitle"),m("prepare.stayStillBody"))}
        ${Je("/assets/icon-remove-glasses.svg",m("prepare.removeGlassesTitle"),m("prepare.removeGlassesBody"))}
      </section>

      <button class="ready-cta" data-action="start-measurement">${m("prepare.ready")}</button>
      <div class="prepare-privacy"><img src="/assets/icon-shield-gray.svg" alt="" aria-hidden="true" />${m("prepare.privacy")}</div>
    </section>
  `}function Ki(){const e=d.measurement.result;return`
    <section class="camera-card">
      <div class="camera-frame">
        <div class="face-guide"></div>
        <span>${d.measurement.status==="idle"?m("scan.oldReady"):d.measurement.progress+"%"}</span>
      </div>
      <p>${d.measurement.faceHint}</p>
      <div class="progress-track">
        <span style="width: ${d.measurement.progress}%"></span>
      </div>
      <button class="primary full" data-action="start-measurement">
        ${d.measurement.status==="running"?m("scan.oldRunning"):m("scan.oldStart")}
      </button>
    </section>

    <section class="card">
      <p class="kicker">${m("scan.resultTitle")}</p>
      ${e?`
            <div class="result-grid">
              ${qe(m("scan.metricHeartRate"),e.heartRate+" bpm",m("scan.metricRealtime"))}
              ${qe(m("scan.metricBloodPressure"),e.bloodPressure,m("scan.metricEstimate"))}
              ${qe("HRV",e.hrv+" ms","SDNN")}
              ${qe(m("scan.metricStress"),e.stressIndex,m("scan.metricIndex"))}
            </div>
          `:`<p>${m("scan.resultEmpty")}</p>`}
    </section>

    <section class="notice">
      ${m("scan.wellnessNotice")}
    </section>
  `}function ji(){return`
    <section class="trends-page">
      <header class="trends-top">
        <span class="trend-top-spacer" aria-hidden="true"></span>
        <div>
          <h1>${m("trends.title")}</h1>
          <p>${m("trends.subtitle")}</p>
        </div>
        <button class="calendar-button" aria-label="${m("trends.calendar")}">
          ${O("calendar")}
        </button>
      </header>

      <nav class="range-tabs" aria-label="${m("trends.rangeLabel")}">
        ${Pt.map(Ft).join("")}
      </nav>

      <button class="first-trends-preview" data-action="view-first-trends">
        <span>${O("spark")}</span>
        <div>
          <strong>Preview first scan state</strong>
          <small>See the baseline-building experience for day one</small>
        </div>
        <em>›</em>
      </button>

      <section class="trend-ai-card">
        <div class="trend-card-head">
          <strong><img src="/assets/icon-trend-spark.svg" alt="" aria-hidden="true" />${m("trends.aiSummary")}</strong>
          <span><img src="/assets/icon-trend-ai.svg" alt="" aria-hidden="true" />${m("trends.updatedToday")}</span>
        </div>
        <div class="trend-ai-body">
          <div class="trend-ai-icon">${O("trendUp")}</div>
          <div>
            <h2>${m("trends.summaryTitle")}</h2>
            <p>${m("trends.summaryBody")}</p>
            <div class="trend-ai-actions">
              <button>${m("trends.askAi")}</button>
              <button>${m("trends.details")}</button>
            </div>
          </div>
        </div>
      </section>

      <section class="trend-overview-head">
        <h2>${m("trends.overview")}</h2>
        <span>${m("trends.baselineBased")} ${O("info")}</span>
      </section>

      <section class="wellness-trend-card">
        <div class="wellness-score-block">
          <span>${m("trends.wellnessScore")}</span>
          <strong>72<small>/100</small></strong>
          <em>${m("trends.good")}</em>
        </div>
        <div class="wellness-chart">
          <div class="chart-legend"><span>${m("trends.yourScore")}</span><span>${m("trends.personalBaseline")}</span></div>
          ${Dr()}
        </div>
      </section>

      <section class="trend-snapshot-grid" aria-label="${m("trends.snapshotLabel")}">
        <article>
          <span>${O("calendar")} ${m("trends.stableDays")}</span>
          <strong>24<small>/30</small></strong>
          <em>+4 days</em>
        </article>
        <article>
          <span>${O("spark")} ${m("trends.bestSignal")}</span>
          <strong>${m("trends.stress")}</strong>
          <em>-8 pts</em>
        </article>
        <article>
          <span>${O("chart")} ${m("trends.watch")}</span>
          <strong>${m("trends.bp")}</strong>
          <em>${m("trends.mildSwings")}</em>
        </article>
      </section>

      <section class="trend-section-title">
        <h2>${m("trends.keyIndicators")}</h2>
        <span class="last-measured">${p({"en-US":"Last measured 12 min ago","zh-CN":"上次测量：12 分钟前"})}</span>
      </section>

      ${mr()}

      <section class="trend-section-title">
        <h2>${p({"en-US":"AI Risk Insights","zh-CN":"AI 风险洞察"})}</h2>
        <button>${p({"en-US":"View Docs","zh-CN":"查看说明"})}</button>
      </section>

      ${Sr()}

      <section class="results-disclaimer trend-disclaimer">
        ${m("results.disclaimer")}
      </section>

      ${d.activeTrendIndicator?vr():""}
      ${d.activeRiskInsight?wr():""}
    </section>
  `}function Yi(){return`
    <section class="trends-page first-trends-page">
      <header class="trends-top">
        <span class="trend-top-spacer" aria-hidden="true"></span>
        <div>
          <h1>${p({"en-US":"First Scan","zh-CN":"首次测量"})}</h1>
          <p>${p({"en-US":"Baseline building","zh-CN":"健康基线建立中"})}</p>
        </div>
        <button class="calendar-button" data-action="view-full-trends" aria-label="${p({"en-US":"View full trends","zh-CN":"查看完整趋势"})}">
          ${O("chart")}
        </button>
      </header>

      <section class="first-baseline-hero">
        <div>
          <span>${p({"en-US":"Day 1","zh-CN":"第 1 天"})}</span>
          <h2>${p({"en-US":"Your first health snapshot is ready.","zh-CN":"你的首次健康快照已生成。"})}</h2>
          <p>${p({"en-US":"Trend comparison will unlock after several more scans. For now, we show your current readings and what will be tracked next.","zh-CN":"完成更多次测量后将解锁趋势对比。当前先展示本次读数，以及后续会持续追踪的内容。"})}</p>
        </div>
        <div class="baseline-progress-ring">
          <strong>1<small>/7</small></strong>
          <span>${p({"en-US":"scans","zh-CN":"次测量"})}</span>
        </div>
      </section>

      <section class="first-score-card">
        <div>
          <span>${p({"en-US":"Wellness Score","zh-CN":"健康评分"})}</span>
          <strong>72<small>/100</small></strong>
          <em>${p({"en-US":"First reading","zh-CN":"首次读数"})}</em>
        </div>
        <div class="first-score-chart">
          ${er()}
          <p>${p({"en-US":"Baseline range will appear after 3-7 consistent scans.","zh-CN":"连续完成 3-7 次测量后，将显示健康基线范围。"})}</p>
        </div>
      </section>

      <section class="first-nudge-card">
        <span>${O("spark")}</span>
        <div>
          <strong>${p({"en-US":"AI is building your baseline","zh-CN":"AI 正在建立你的健康基线"})}</strong>
          <p>${p({"en-US":"Complete a few more scans under similar conditions so trend explanations can separate normal variation from meaningful change.","zh-CN":"请在相似状态下继续完成几次测量，趋势解释才能区分正常波动和真正有意义的变化。"})}</p>
        </div>
      </section>

      <section class="trend-section-title">
        <h2>${p({"en-US":"Key Health Indicators","zh-CN":"关键健康指标"})}</h2>
        <span class="last-measured">${p({"en-US":"First scan · today","zh-CN":"首次测量 · 今天"})}</span>
      </section>

      ${Xi()}

      <section class="trend-section-title">
        <h2>${p({"en-US":"AI Risk Insights","zh-CN":"AI 风险洞察"})}</h2>
      </section>

      ${Zi()}

      <section class="first-action-card">
        <div>
          <h2>${p({"en-US":"Scan again tomorrow","zh-CN":"明天再次测量"})}</h2>
          <p>${p({"en-US":"Two more scans will start showing early direction. Seven scans unlock a more reliable baseline comparison.","zh-CN":"再完成 2 次测量后，将开始呈现初步方向。完成 7 次测量后，可解锁更可靠的基线对比。"})}</p>
        </div>
        <button data-action="prepare-scan">${p({"en-US":"Scan","zh-CN":"测量"})}</button>
      </section>

      <button class="first-view-full" data-action="view-full-trends">${p({"en-US":"View full trends demo","zh-CN":"查看完整趋势示例"})}</button>
    </section>
  `}function Xi(){const e=Ce.find(a=>a.id===d.activeTrendIndicatorGroup)||Ce[0],t=e.items.map(a=>Bt.find(s=>s.id===a)).filter(Boolean);return`
    <section class="vital-trend-panel first-vital-panel">
      <nav class="vital-trend-tabs" aria-label="${p({"en-US":"First scan indicator categories","zh-CN":"首次测量指标分类"})}">
        ${Ce.map(a=>`
          <button class="${e.id===a.id?"active":""}" data-trend-indicator-group="${a.id}">
            <i>${Wa(a.icon)}</i>
            <span>${p(a.shortLabel)}</span>
            <small>${a.items.length} ${p({"en-US":"metrics","zh-CN":"项指标"})}</small>
          </button>
        `).join("")}
      </nav>
      <section class="first-indicator-list">
        ${t.map(qi).join("")}
      </section>
    </section>
  `}function qi(e){return`
    <article class="first-indicator-card">
      <header>
        <h3>${ne(e,"label")}</h3>
        <em>🟡 ${p({"en-US":"Baseline building","zh-CN":"基线建立中"})}</em>
      </header>
      <strong>${e.value}<small>${e.unit}</small></strong>
      <p>${p({"en-US":"First reading recorded","zh-CN":"已记录首次读数"})}</p>
      <span>${Ji(e.id)}</span>
      <div class="single-reading-dot" aria-hidden="true"><i></i></div>
    </article>
  `}function Ji(e){return{"pulse-rate":"HR_BPM","irregular-heartbeat-count":"IHB_COUNT","respiratory-rate":"BR_BPM","systolic-blood-pressure":"BP_SYSTOLIC","diastolic-blood-pressure":"BP_DIASTOLIC","heart-rate-variability":"HRV_SDNN","cardiac-workload":"BP_RPP","vascular-capacity":"VASCULAR_CAPACITY","vitality-index":"VITALITY_INDEX","stress-level":"MSI","sleep-quality":"SLEEP_QUALITY","anxiety-index":"ANXIETY_INDEX","body-mass-index":"BMI_CALC","facial-skin-age":"AGE_FACE","cardio-metabolic-age":"AGE_CVM","waist-to-height-ratio":"WAIST_TO_HEIGHT","body-shape-index":"ABSI","estimated-height":"HEIGHT_ESTIMATE","estimated-weight":"WEIGHT_ESTIMATE","waist-circumference":"WAIST_CIRCUMFERENCE"}[e]||e.toUpperCase()}function Zi(){const e=Ke.filter(s=>s.isAtRisk).sort((s,i)=>Number(i.isNew)-Number(s.isNew)),t=Ke.filter(s=>!s.isAtRisk),a=d.activeRiskInsightTab==="at-risk"?e:t;return`
    <section class="first-risk-panel">
      <section class="first-risk-card">
        <strong>${p({"en-US":"First scan signal","zh-CN":"首次扫描信号"})}</strong>
        <p>${p({"en-US":"Risk estimates use the same DeepAffex risk set as Trends, but confidence is still building. Persistent risks will be highlighted after repeated measurements.","zh-CN":"风险估计使用与趋势页一致的 DeepAffex 风险集合，但置信度仍在建立中。重复测量后会突出持续风险。"})}</p>
        <div class="first-risk-summary">
          <article><span>${p({"en-US":"At Risk","zh-CN":"有风险"})}</span><strong>${e.length}</strong></article>
          <article><span>${p({"en-US":"No Risk","zh-CN":"低风险"})}</span><strong>${t.length}</strong></article>
          <article><span>${p({"en-US":"Confidence","zh-CN":"置信度"})}</span><strong>${p({"en-US":"Building","zh-CN":"建立中"})}</strong></article>
        </div>
      </section>

      <nav class="risk-insight-tabs first-risk-tabs" aria-label="${p({"en-US":"First scan risk filter","zh-CN":"首次测量风险筛选"})}">
        <button class="${d.activeRiskInsightTab==="at-risk"?"active":""}" data-risk-insight-tab="at-risk">
          ${p({"en-US":"At Risk","zh-CN":"有风险"})} <span>${e.length}</span>
        </button>
        <button class="${d.activeRiskInsightTab==="no-risk"?"active":""}" data-risk-insight-tab="no-risk">
          ${p({"en-US":"No Risk","zh-CN":"低风险"})} <span>${t.length}</span>
        </button>
      </nav>

      <section class="first-risk-list">
        ${a.map(Qi).join("")}
      </section>
    </section>
  `}function Qi(e){return`
    <article class="first-risk-item ${e.isAtRisk?"watch":"normal"}">
      <div>
        <h3>${j(e,"title")}</h3>
        <p>${e.code}</p>
      </div>
      <strong>${Y(e)}</strong>
      <em>${e.isAtRisk?p({"en-US":"First scan signal","zh-CN":"首次信号"}):p({"en-US":"No risk signal","zh-CN":"暂无风险信号"})}</em>
    </article>
  `}function er(){return`
    <svg class="first-score-svg" viewBox="0 0 220 96" aria-label="${p({"en-US":"First scan score placeholder","zh-CN":"首次测量评分占位图"})}" role="img">
      <line class="first-grid" x1="18" y1="24" x2="204" y2="24" />
      <line class="first-grid" x1="18" y1="48" x2="204" y2="48" />
      <line class="first-grid" x1="18" y1="72" x2="204" y2="72" />
      <rect class="first-baseline-placeholder" x="34" y="31" width="156" height="18" rx="9" />
      <circle class="first-score-dot" cx="116" cy="39" r="5" />
      <text x="126" y="42">72</text>
    </svg>
  `}function tr(){const e=[["heart","Cardiovascular<br />Risk","⚠️ Moderate","orange"],["drop","Blood Pressure<br />Risk","✅ Mild","green"],["recovery","Stress & Recovery<br />Risk","🔥 High","red"],["metabolic","Metabolic<br />Risk","⚠️ Moderate","orange"]],t=e.length>4?"risk-grid risk-grid-slider":"risk-grid",a=e.map(l=>ar(...l)).join(""),i=[{category:"exercise",icon:"walk",title:"Move your body",body:"30 min moderate cardio",days:[!0,!0,!0,!1,!1,!1,!1],tone:"green"},{category:"exercise",icon:"mobility",title:"Mobility & Stretch",body:"10-15 min daily",days:[!0,!0,!1,!1,!1,!1,!1],tone:"green"},{category:"nutrition",icon:"nutrition",title:"Eat heart-healthy",body:"Follow balanced meals",days:[!0,!1,!0,!1,!1,!1,!1],tone:"purple"},{category:"nutrition",icon:"drop",title:"Stay hydrated",body:"8 glasses of water",days:[!0,!0,!0,!1,!1,!1,!1],tone:"purple"},{category:"sleep",icon:"lotus",title:"Stress reset",body:"5 min breathing or relax",days:[!0,!1,!1,!1,!1,!1,!1],tone:"orange"},{category:"sleep",icon:"moon",title:"Sleep on time",body:"Before 11:00 PM",days:[!0,!1,!0,!1,!1,!1,!1],tone:"blue"}].filter(l=>d.activePlanFilter==="all"||l.category===d.activePlanFilter),n=l=>d.activePlanFilter===l?"active":"",r=sr();return`
    <section class="insights-page">
      <header class="insights-header">
        <span class="insights-top-spacer" aria-hidden="true"></span>
        <div>
          <h1>Insights</h1>
          <p>Personalized health guidance</p>
        </div>
        <button class="ask-ai-button" aria-label="Ask AI">
          ${O("chat")}
        </button>
      </header>

      <section class="insight-section-title">
        <h2>Health Risk Summary</h2>
        <span>Latest scan and trends</span>
      </section>

      <section class="risk-summary-card">
        <div class="${t}">
          ${e.length>4?`<div class="risk-grid-track">${a}</div>`:a}
        </div>

        <button class="full-risk-button">
          <span>${O("chart")}</span>
          <strong>View Full Risk Analysis</strong>
          <small>See your detailed risk factors and contributing metrics</small>
          <em>›</em>
        </button>
      </section>

      <section class="insight-section-title">
        <h2>AI Personalized Action Plan</h2>
      </section>

      <section class="action-plan-card">
        <footer class="weekly-progress">
          ${cr("29%","",58,29,"mini-ring")}
          <div>
            <strong>Weekly Progress</strong>
            <p>You're off to a great start!</p>
          </div>
          <button data-action="open-progress-history">View My Progress</button>
        </footer>

        <nav class="plan-filters" aria-label="Action plan filters">
          <button class="${n("all")}" data-plan-filter="all">All</button>
          <button class="${n("exercise")}" data-plan-filter="exercise">${ot("exercise")}Exercise</button>
          <button class="${n("nutrition")}" data-plan-filter="nutrition">${ot("nutrition")}Nutrition</button>
          <button class="${n("sleep")}" data-plan-filter="sleep">${ot("sleep")}Sleep</button>
        </nav>

        <div class="task-table">
          ${i.map(l=>rr(l.icon,l.title,l.body,l.days,`${l.days.filter(Boolean).length}/7`,l.tone,r)).join("")}
        </div>
      </section>

      <section class="insight-section-title">
        <h2>AI Coach Insight</h2>
        <span>Personalized</span>
      </section>

      <section class="coach-insight-card">
        <div>
          <h3>Your stress levels have been elevated this week.</h3>
          <p>Consistently completing stress management and sleep tasks can help improve your recovery.</p>
        </div>
        <div class="coach-visual">${O("bulb")}</div>
      </section>

      <section class="insight-section-title">
        <h2>Momentum</h2>
        <span>Plan consistency</span>
      </section>

      <section class="streak-card">
        <span>${O("flame")}</span>
        <div>
          <h2>Keep it up!</h2>
          <p>2 days in a row. Small steps, big impact.</p>
        </div>
        <button>View Streak <em>›</em></button>
      </section>
      ${d.showProgressHistorySheet?nr():""}
    </section>
  `}function ar(e,t,a,s){return`
    <article class="risk-summary-item ${s}">
      <span>${O(e)}</span>
      <h3>${t}</h3>
      <small>${a}</small>
    </article>
  `}function sr(){const e=new Date().getDay();return e===0?6:e-1}function ir(e,t,a){return e?{className:"done",label:"Completed",mark:"✓"}:t>a?{className:"future",label:"Not due yet",mark:""}:t===a?{className:"today",label:"Not checked today",mark:""}:{className:"missed",label:"Missed",mark:""}}function rr(e,t,a,s,i,n,r){const l=ir(s[r],r,r),c=s[r]?"Today completed":"Today pending";return`
    <article class="action-task ${n}">
      <div class="task-copy">
        <span class="task-icon">${O(e)}</span>
        <h3>${t}</h3>
        <p>${a}</p>
      </div>
      <div class="daily-check-row">
        <span class="daily-check-dot ${l.className}" aria-label="${l.label}">${l.mark}</span>
        <small>${c}</small>
      </div>
      <strong>${i}</strong>
      <em>›</em>
    </article>
  `}function nr(){const e=or(),t=e.days.filter(r=>r.completed>0).length,a=e.days.reduce((r,l)=>r+l.completed,0),s=e.days.reduce((r,l)=>r+l.total,0),i=Math.round(a/s*100),n=lr(e.days);return`
    <div class="metrics-sheet-backdrop" data-action="close-progress-history"></div>
    <section class="metrics-sheet progress-history-sheet" role="dialog" aria-modal="true" aria-label="Progress History">
      <header>
        <span aria-hidden="true"></span>
        <div>
          <h2>Progress History</h2>
        </div>
        <button data-action="close-progress-history" aria-label="Close">×</button>
      </header>
      <div class="metrics-sheet-body progress-history-body">
        <section class="progress-history-summary">
          <article>
            <span>30-day completion</span>
            <strong>${i}%</strong>
          </article>
          <article>
            <span>Completed days</span>
            <strong>${t}<small>/30</small></strong>
          </article>
          <article>
            <span>Current streak</span>
            <strong>${n}<small>d</small></strong>
          </article>
        </section>

        <section class="progress-history-chart" aria-label="30 day completion trend">
          ${e.days.map(r=>`
            <span
              class="${r.completed===0?"empty":r.completed>=5?"high":r.completed>=3?"mid":"low"}"
              style="height: ${Math.max(8,Math.round(r.completed/r.total*54))}px"
              title="${r.label}: ${r.completed}/${r.total}"
            ></span>
          `).join("")}
        </section>

        <section class="progress-category-grid">
          ${e.categories.map(r=>`
            <article>
              <span>${ot(r.icon)}</span>
              <div>
                <strong>${r.label}</strong>
                <small>${r.completed}/${r.total} completed</small>
              </div>
              <em>${Math.round(r.completed/r.total*100)}%</em>
            </article>
          `).join("")}
        </section>
      </div>
    </section>
  `}function or(){return{days:[3,4,2,5,6,0,4,3,6,5,2,4,0,3,5,6,4,2,3,5,6,0,2,4,5,3,6,4,5,6].map((t,a)=>({label:`Day ${a+1}`,completed:t,total:6})),categories:[{icon:"exercise",label:"Exercise",completed:22,total:30},{icon:"nutrition",label:"Nutrition",completed:19,total:30},{icon:"sleep",label:"Sleep",completed:17,total:30}]}}function lr(e){let t=0;for(let a=e.length-1;a>=0&&e[a].completed!==0;a-=1)t+=1;return t}function ot(e){return{exercise:`
      <svg class="plan-filter-icon" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12.7" cy="4.7" r="2.1" />
        <path d="M10.8 8.2 8.6 12l3.3 2.6" />
        <path d="M11 9.1h3.9l2.1 3.2" />
        <path d="M12.1 14.5 10.8 20" />
        <path d="M14.2 14.2 17.5 19" />
        <path d="M8.5 7.7 6.6 10.8" />
      </svg>
    `,nutrition:`
      <svg class="plan-filter-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.8 3.8v7.3" />
        <path d="M10.2 3.8v7.3" />
        <path d="M5.2 7.4h6.6" />
        <path d="M8.5 11.1v9.1" />
        <path d="M16.5 3.8v16.4" />
        <path d="M18.9 4.1v6.8c0 1.7-1 2.8-2.4 2.8" />
      </svg>
    `,sleep:`
      <svg class="plan-filter-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.9 16.2A7.8 7.8 0 0 1 8.1 5.4 7.8 7.8 0 1 0 18.9 16.2Z" />
      </svg>
    `}[e]||""}function O(e){return{chat:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5.8A3.2 3.2 0 0 1 8.2 2.6h7.6A3.2 3.2 0 0 1 19 5.8v4.8a3.2 3.2 0 0 1-3.2 3.2H11l-4.4 3.5v-3.5A3.2 3.2 0 0 1 5 10.6V5.8Z"/><path d="M8.5 7.2h7M8.5 10.2h4.8"/></svg>',shield:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.2 19 6v5.2c0 4.4-2.8 7.7-7 9.5-4.2-1.8-7-5.1-7-9.5V6l7-2.8Z"/><path d="m8.7 12 2.1 2.1 4.7-5"/></svg>',heart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.3S4.8 15.9 3.4 10.4C2.5 6.8 4.7 4.2 7.8 4.2c1.8 0 3.1 1 4.2 2.3 1.1-1.3 2.4-2.3 4.2-2.3 3.1 0 5.3 2.6 4.4 6.2C19.2 15.9 12 20.3 12 20.3Z"/></svg>',drop:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.2s6 6.3 6 11.1a6 6 0 0 1-12 0c0-4.8 6-11.1 6-11.1Z"/><path d="M9.2 15.3a3.2 3.2 0 0 0 4.8 1.8"/></svg>',recovery:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7" r="3"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0"/><path d="M17.7 5.2h2.2M18.8 4.1v2.2"/></svg>',metabolic:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="2"/><circle cx="6.5" cy="9" r="1.6"/><circle cx="17.5" cy="9" r="1.6"/><circle cx="7.4" cy="16.1" r="1.6"/><circle cx="16.6" cy="16.1" r="1.6"/><path d="M8 9.7 10.3 11M13.7 11 16 9.7M8.8 15.2l1.8-1.7M13.4 13.5l1.8 1.7"/></svg>',chart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5M4 19h16"/><path d="m7.2 15 4.1-4.2 3.2 2.4 4.2-6"/></svg>',star:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3.6 2.4 5 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8 2.4-5Z"/></svg>',calendar:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6.5h14v12H5z"/><path d="M8 4.5v4M16 4.5v4M5 10h14"/></svg>',info:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 10.6v5.2M12 7.4h.01"/></svg>',trendUp:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17.2 9.3 12l3.9 3.2L20 7.8"/><path d="M15 7.8h5v5"/></svg>',walk:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="13" cy="5" r="2"/><path d="m10.7 9.2 3.1 1.3 2.3 3.3M11.8 10.4l-2 4.4-3 3.4M13.6 14.3l-1.1 5.1M8.8 9.3l-1.7 2"/></svg>',mobility:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="14" cy="5" r="2"/><path d="M9.5 12.5 13 8.7l3.8 2.1M13 12l-3.8 4.2M14.2 13.4l2.4 5.6"/></svg>',nutrition:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4v8M10 4v8M7 8h3M8.5 12v8"/><path d="M16.5 4v16M14.5 4c3.4 2 3.4 5.5 0 7.4"/></svg>',moon:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.7 15.6A7.2 7.2 0 0 1 8.4 5.3a7.2 7.2 0 1 0 10.3 10.3Z"/></svg>',lotus:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19c-4.6 0-7.4-2.2-8.7-6.5 3.7-.5 6.3.7 8.7 3.9 2.4-3.2 5-4.4 8.7-3.9C19.4 16.8 16.6 19 12 19Z"/><path d="M12 16.4c-2.1-2.4-2.1-5.1 0-8.1 2.1 3 2.1 5.7 0 8.1Z"/></svg>',spark:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.6 14 10l6.4 2-6.4 2-2 6.4-2-6.4-6.4-2 6.4-2 2-6.4Z"/></svg>',bulb:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M15.5 22.5a8.5 8.5 0 1 1 17 0c0 3.2-1.7 5.2-3.8 7.1v3.3h-9.4v-3.3c-2.1-1.9-3.8-3.9-3.8-7.1Z"/><path d="M19.5 37h9M21 41h6M24 6v4M36 12l-2.8 2.8M12 12l2.8 2.8"/></svg>',flame:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.8 3.2c1 3.7-2 5.6-2 8.2 0 1.4.9 2.3 2 2.3 1.7 0 2.7-1.8 2.5-4.2 2.3 2 3.6 4 3.6 6.2a6.9 6.9 0 0 1-13.8 0c0-2.9 1.9-5.1 4.2-7.2 1.2-1.1 2.4-2.5 3.5-5.3Z"/></svg>'}[e]||""}function cr(e,t,a,s,i="score-ring"){const n=a/2-7,r=a/2,l=2*Math.PI*n,c=l*(1-s/100);return`
    <div class="${i}" style="--ring-size: ${a}px;">
      <svg viewBox="0 0 ${a} ${a}" aria-hidden="true">
        <circle class="ring-track" cx="${r}" cy="${r}" r="${n}" />
        <circle class="ring-value" cx="${r}" cy="${r}" r="${n}" stroke-dasharray="${l.toFixed(2)}" stroke-dashoffset="${c.toFixed(2)}" />
      </svg>
      <strong>${e}</strong>
      
    </div>
  `}function dr(){return`
    <section class="profile-page">
      <header class="simple-page-head">
        <p>Account</p>
        <h1>Profile</h1>
      </header>

      <section class="profile-card">
        <div class="profile-avatar">VS</div>
        <h2>VitalScan User</h2>
        <p>Personal health trend tracking</p>
      </section>

      <section class="profile-stats">
        <article><strong>12</strong><span>Scans</span></article>
        <article><strong>30D</strong><span>Trend window</span></article>
        <article><strong>Private</strong><span>Data mode</span></article>
      </section>

      <section class="profile-settings">
        ${At("Health profile","Age range, baseline and comparison group")}
        ${At("Camera permissions","Manage browser measurement access")}
        ${At("Privacy & consent","Review data usage and wellness disclaimer")}
      </section>
    </section>
  `}function hr(e){const t=e.id==="blood-pressure"?Ir():Mr(e.tone,!0),a=ne(e,"status");return`
    <article class="trend-indicator-item" data-action="open-trend-indicator" data-indicator-id="${e.id}">
      <div class="trend-indicator-main">
        <h3>${ne(e,"label")}</h3>
        <strong>${e.value}<span>${e.unit}</span></strong>
      </div>
      <em class="trend-status ${e.status==="Watch"?"elevated":""}">${ur(e.status)} ${a}</em>
      <div class="trend-spark ${e.tone}">${t}</div>
      <p class="trend-card-ai-summary">
        <span>${p({"en-US":"AI summary","zh-CN":"AI 总结"})}</span>
        ${ne(e,"summary")}
      </p>
    </article>
  `}function ne(e,t){return z?.getLanguage?.()==="zh-CN"&&pi[e.id]?.[t]||e[t]}function ur(e){return e==="Watch"?"⚠":e==="Improving"?"↘":"✓"}function mr(){const e=Ce.find(a=>a.id===d.activeTrendIndicatorGroup)||Ce[0],t=e.items.map(a=>Bt.find(s=>s.id===a)).filter(Boolean);return`
    <section class="vital-trend-panel">
      <nav class="vital-trend-tabs" aria-label="Trend indicator categories">
        ${Ce.map(a=>`
            <button class="${e.id===a.id?"active":""}" data-trend-indicator-group="${a.id}">
              <i>${Wa(a.icon)}</i>
              <span>${p(a.shortLabel)}</span>
              <small>${a.items.length} ${p({"en-US":"metrics","zh-CN":"项指标"})}</small>
            </button>
          `).join("")}
      </nav>
      <div class="trend-indicator-list vital-tab-content trend-category-content">
        ${t.map(hr).join("")}
      </div>
    </section>
  `}function Wa(e){const t={heart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.2S4.8 15.9 3.5 10.2C2.7 6.8 4.8 4.4 7.8 4.4c1.8 0 3.2 1 4.2 2.4 1-1.4 2.4-2.4 4.2-2.4 3 0 5.1 2.4 4.3 5.8C19.2 15.9 12 20.2 12 20.2Z"/><path d="M6.6 12h3.1l1.1-2.2 2.2 4.4 1.3-2.2h3.1"/></svg>',wave:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13c2.1 0 2.1-4 4.2-4s2.1 8 4.2 8 2.1-8 4.2-8S18.7 13 20 13"/><path d="M5 6h14M5 20h14"/></svg>',brain:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.2 5.2a3.2 3.2 0 0 0-3.1 3.3 3.6 3.6 0 0 0-1.5 6.3 3.4 3.4 0 0 0 4.8 3.7V5.2Z"/><path d="M14.8 5.2a3.2 3.2 0 0 1 3.1 3.3 3.6 3.6 0 0 1 1.5 6.3 3.4 3.4 0 0 1-4.8 3.7V5.2Z"/><path d="M9.4 9.2H7.2M14.6 9.2h2.2M9.4 14.8H7.1M14.6 14.8h2.3"/></svg>',body:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="4.7" r="2.1"/><path d="M6.8 9.2h10.4M12 7.2v6.1M8.5 20l2.2-6.7h2.6l2.2 6.7M8.6 9.4l-1.8 4.8M15.4 9.4l1.8 4.8"/></svg>'};return t[e]||t.heart}function Ft(e){return`
    <button class="${d.activeTrendRange===e?"active":""}" data-action="set-trend-range" data-range="${e}">
      ${e}
    </button>
  `}function F(e=d.activeTrendRange){const t=z?.getLanguage?.()==="zh-CN"?{"7D":"近 7 天","30D":"近 30 天","90D":"近 90 天"}:{"7D":"Last 7 days","30D":"Last 30 days","90D":"Last 90 days"};return t[e]||t["30D"]}function pr(e=d.activeTrendRange){const t=z?.getLanguage?.()==="zh-CN"?{"7D":"短期信号","30D":"基线窗口","90D":"长期模式"}:{"7D":"short-term signal","30D":"baseline window","90D":"long-term pattern"};return t[e]||t["30D"]}function gr(e,t=d.activeTrendRange){return(z?.getLanguage?.()==="zh-CN"?{"pulse-rate":{"7D":"↓ 1 bpm","30D":"↓ 3 bpm","90D":"↓ 5 bpm"},"respiratory-rate":{"7D":"稳定","30D":"↓ 2 /分","90D":"稳定"},"blood-pressure":{"7D":"SYS +2","30D":"↓ 5 / 3","90D":"轻微波动"},"systolic-blood-pressure":{"7D":"↓ 2 mmHg","30D":"↓ 5 mmHg","90D":"轻微波动"},"diastolic-blood-pressure":{"7D":"稳定","30D":"↓ 3 mmHg","90D":"稳定"},"stress-level":{"7D":"↓ 4 分","30D":"↓ 8 分","90D":"↓ 11 分"},"irregular-heartbeat-count":{"7D":"2 次事件","30D":"↓ 1 次事件","90D":"稳定"},"sleep-quality":{"7D":"+0.2","30D":"+0.4","90D":"+0.6"},"anxiety-index":{"7D":"↓ 0.1","30D":"↓ 0.3","90D":"↓ 0.5"},"cardio-metabolic-age":{"7D":"稳定","30D":"↓ 1 岁","90D":"↓ 2 岁"}}:{"pulse-rate":{"7D":"↓ 1 bpm","30D":"↓ 3 bpm","90D":"↓ 5 bpm"},"respiratory-rate":{"7D":"steady","30D":"↓ 2 /min","90D":"stable"},"blood-pressure":{"7D":"SYS +2","30D":"↓ 5 / 3","90D":"mild swings"},"systolic-blood-pressure":{"7D":"↓ 2 mmHg","30D":"↓ 5 mmHg","90D":"mild swings"},"diastolic-blood-pressure":{"7D":"steady","30D":"↓ 3 mmHg","90D":"stable"},"stress-level":{"7D":"↓ 4 pts","30D":"↓ 8 pts","90D":"↓ 11 pts"},"irregular-heartbeat-count":{"7D":"2 events","30D":"↓ 1 event","90D":"stable"},"sleep-quality":{"7D":"+0.2","30D":"+0.4","90D":"+0.6"},"anxiety-index":{"7D":"↓ 0.1","30D":"↓ 0.3","90D":"↓ 0.5"},"cardio-metabolic-age":{"7D":"steady","30D":"↓ 1 yr","90D":"↓ 2 yrs"}})[e.id]?.[t]||e.delta}function fr(e,t=d.activeTrendRange){const a=F(t).toLowerCase(),s={"pulse-rate":`AI 总结：在${F(t)}内，你的脉率正在接近个人基线。趋势方向积极，继续稳定记录有助于确认改善是否持久。`,"respiratory-rate":`AI 总结：在${F(t)}内，呼吸频率保持在基线范围内，短期波动较小。建议保持规律追踪，而不是根据单次读数做判断。`,"blood-pressure":`AI 总结：在${F(t)}内，舒张压相对稳定，收缩压仍接近基线上沿。继续观察本周数据，可以帮助区分正常波动和持续升高。`,"systolic-blood-pressure":`AI 总结：在${F(t)}内，收缩压正在回落，但仍有读数高于 AI 年龄健康基线。继续静息扫描有助于确认改善是否稳定。`,"diastolic-blood-pressure":`AI 总结：在${F(t)}内，舒张压接近 AI 年龄健康基线且波动有限。当前看起来稳定，继续追踪可进一步确认。`,"stress-level":`AI 总结：在${F(t)}内，压力水平下降，恢复状态改善。每日扫描可以帮助判断这种恢复是否成为新的稳定基线。`,"irregular-heartbeat-count":`AI 总结：在${F(t)}内，不规则心跳事件更像是偶发而非持续。建议在相似静息条件下重复扫描。`,"sleep-quality":`AI 总结：在${F(t)}内，睡眠质量指数有所改善。固定睡眠时间、降低晚间压力，有助于更清晰地确认这一信号。`,"anxiety-index":`AI 总结：在${F(t)}内，长期焦虑信号有所缓解。该指数反映基线生理状态，持续追踪比单次读数更有意义。`,"cardio-metabolic-age":`AI 总结：在${F(t)}内，心血管代谢年龄略有下降，但仍需要运动和营养一致性来巩固。更长历史记录能帮助确认下降是否持久。`};return z?.getLanguage?.()==="zh-CN"?s[e.id]||`AI 总结：在${F(t)}内，该指标正在与个人基线对比，用于解释趋势方向和稳定性。`:{"pulse-rate":`AI summary: across the ${a}, your pulse rate is moving toward your personal baseline. The trend looks constructive, and a few more consistent records will help confirm whether the improvement is durable.`,"respiratory-rate":`AI summary: across the ${a}, respiratory rate remains inside your baseline band with low variation. This is a stable signal, so the best next step is maintaining regular tracking rather than reacting to a single reading.`,"blood-pressure":`AI summary: across the ${a}, diastolic pressure is relatively steady while systolic pressure still sits near the upper side of your baseline. Keep watching this week so the app can separate normal fluctuation from a persistent upward pattern.`,"systolic-blood-pressure":`AI summary: across the ${a}, systolic pressure is moving down but still has readings above the AI-measured age baseline. Continue resting scans to confirm whether the improvement holds.`,"diastolic-blood-pressure":`AI summary: across the ${a}, diastolic pressure is close to the AI-measured age baseline with limited variation. This looks stable, but continued tracking helps confirm the pattern.`,"stress-level":`AI summary: across the ${a}, stress is trending down and recovery is improving. Continued daily scans can show whether this recovery pattern is becoming your new normal baseline.`,"irregular-heartbeat-count":`AI summary: across the ${a}, irregular heartbeat events appear occasional rather than persistent. Repeat scans under similar resting conditions will help separate normal variation from a pattern that deserves follow-up.`,"sleep-quality":`AI summary: across the ${a}, sleep quality is improving on the NuraLogix 5-point scale. Consistent bedtime, recovery, and lower evening stress should make this signal easier to confirm.`,"anxiety-index":`AI summary: across the ${a}, the long-range anxiety signal is easing. Because this index reflects baseline physiology rather than a single moment, steady tracking is more useful than reacting to one reading.`,"cardio-metabolic-age":`AI summary: across the ${a}, cardiovascular metabolic age is moving slightly lower but still benefits from continued exercise and nutrition consistency. Longer history can show whether the reduction is durable.`}[e.id]||`AI summary: across the ${a}, this indicator is being compared with your personal baseline to explain both direction and stability.`}function br(e){return z?.getLanguage?.()==="zh-CN"?e.id==="blood-pressure"?"SYS / DIA 与基线对比":"趋势与个人基线对比":e.id==="blood-pressure"?"SYS / DIA vs baseline":"Trend vs personal baseline"}function vr(){const e=Bt.find(r=>r.id===d.activeTrendIndicator);if(!e)return"";const t=F(),a=pr(),s=gr(e),i=ne(e,"label"),n=ne(e,"baseline");return`
    <div class="metrics-sheet-backdrop" data-action="close-trend-indicator"></div>
    <section class="indicator-detail-sheet" role="dialog" aria-modal="true" aria-label="${i} ${p({"en-US":"trend details","zh-CN":"趋势详情"})}">
      <header>
        <span aria-hidden="true"></span>
        <div>
          <h2>${i}${p({"en-US":" Trend","zh-CN":"趋势"})}</h2>
          <p>${t} · ${a}</p>
        </div>
        <button data-action="close-trend-indicator" aria-label="${m("common.close")}">×</button>
      </header>
      <nav class="indicator-range-tabs" aria-label="${p({"en-US":"Trend range","zh-CN":"趋势时间范围"})}">
        ${Pt.map(Ft).join("")}
      </nav>

      <section class="indicator-detail-chart-card ${e.tone}">
        <header>
          <div>
            <strong>${br(e)}</strong>
            <span>${t}</span>
          </div>
          <em class="${e.status==="Watch"?"elevated":""}">${s}</em>
        </header>
        <div class="indicator-chart-legend ${e.id==="blood-pressure"?"bp":""}">
          ${e.id==="blood-pressure"?`<span><i class="sys"></i>SYS</span><span><i class="dia"></i>DIA</span><span><i class="band"></i>${p({"en-US":"Baseline bands","zh-CN":"基线区间"})}</span>`:`<span><i class="you"></i>${p({"en-US":"Your trend","zh-CN":"你的趋势"})}</span><span><i class="band"></i>${p({"en-US":"Baseline band","zh-CN":"基线区间"})}</span>`}
        </div>
        <div class="indicator-detail-chart ${e.tone}">
          ${e.id==="blood-pressure"?$r(d.activeTrendRange):_r(e,d.activeTrendRange)}
        </div>
        <div class="indicator-detail-stats">
          <article>
            <span>${p({"en-US":"Latest","zh-CN":"最新值"})}</span>
            <strong>${e.value} ${e.unit}</strong>
          </article>
          <article>
            <span>${p({"en-US":"Baseline","zh-CN":"基线"})}</span>
            <strong>${n}</strong>
          </article>
          <article>
            <span>${p({"en-US":"Change","zh-CN":"变化"})}</span>
            <strong>${s}</strong>
          </article>
        </div>
      </section>

      <section class="indicator-ai-summary">
        <span>${O("spark")}</span>
        <div>
          <h3>${p({"en-US":"AI summary","zh-CN":"AI 总结"})}</h3>
          <p>${fr(e)}</p>
        </div>
      </section>

      <section class="indicator-detail-copy">
        <p><strong>${p({"en-US":"What this means","zh-CN":"含义说明"})}</strong>${yr(e)}</p>
      </section>
    </section>
  `}function yr(e){const t=ui[e.id]||{definition:{"en-US":`Definition: ${ne(e,"detail")}`,"zh-CN":`定义：${ne(e,"detail")}`},background:{"en-US":"Background: This indicator is compared with the current baseline window to help explain direction, stability, and abnormal readings.","zh-CN":"背景：该指标会结合当前基线窗口，用于解释趋势方向、稳定性和异常读数。"}};return`
    <span>${p(t.definition)}</span>
    <span>${p(t.background)}</span>
  `}function Sr(){const e=Ke.filter(s=>s.isAtRisk).sort((s,i)=>Number(i.isNew)-Number(s.isNew)),t=Ke.filter(s=>!s.isAtRisk),a=d.activeRiskInsightTab==="at-risk"?e:t;return`
    <section class="risk-insights-panel">
      <nav class="risk-insight-tabs" aria-label="${p({"en-US":"Risk insight filter","zh-CN":"风险洞察筛选"})}">
        <button class="${d.activeRiskInsightTab==="at-risk"?"active":""}" data-risk-insight-tab="at-risk">
          ${p({"en-US":"At Risk","zh-CN":"有风险"})} <span>${e.length}</span>
        </button>
        <button class="${d.activeRiskInsightTab==="no-risk"?"active":""}" data-risk-insight-tab="no-risk">
          ${p({"en-US":"No Risk","zh-CN":"低风险"})} <span>${t.length}</span>
        </button>
      </nav>

      ${d.activeRiskInsightTab==="at-risk"?`<div class="at-risk-grid">${a.map(Tr).join("")}</div>`:`<div class="no-risk-list">${a.map(kr).join("")}</div>`}
    </section>
  `}function Tr(e){return`
    <article class="risk-insight-card ${e.tone} ${e.isNew?"new":""}" data-action="open-risk-insight" data-risk-id="${e.id}">
      <header>
        <span><img src="${e.icon}" alt="" aria-hidden="true" /></span>
        <em>${e.isNew?p({"en-US":"New risk","zh-CN":"新增风险"}):j(e,"status")}</em>
      </header>
      <h3>${j(e,"title")}</h3>
      <strong>${Y(e)}</strong>
      ${Ga(e)}
      <p class="risk-card-ai-summary">
        <span>${p({"en-US":"AI summary","zh-CN":"AI 总结"})}</span>
        ${j(e,"body")}
      </p>
    </article>
  `}function kr(e){const t=j(e,"title");return`
    <article class="no-risk-row" data-action="open-risk-insight" data-risk-id="${e.id}">
      <header>
        <div>
          <h3>${t}: <strong>${Y(e)}</strong></h3>
        </div>
        <em>${j(e,"status")}</em>
      </header>
      ${Ga(e)}
      <footer>
        <span>0</span>
        <span>${Y({...e,value:e.threshold})}</span>
        <span>∞</span>
      </footer>
    </article>
  `}function j(e,t){return z?.getLanguage?.()==="zh-CN"?di[e.id]?.[t]||e[t]||"":e[t]||""}function wr(){const e=Ke.find(s=>s.id===d.activeRiskInsight);if(!e)return"";const t=j(e,"title"),a=e.isAtRisk?j(e,"status"):p({"en-US":"Normal","zh-CN":"正常"});return`
    <div class="metrics-sheet-backdrop" data-action="close-risk-insight"></div>
    <section class="indicator-detail-sheet risk-detail-sheet" role="dialog" aria-modal="true" aria-label="${t} details">
      <header>
        <span aria-hidden="true"></span>
        <div>
          <h2>${t}</h2>
          <p>${e.code}</p>
        </div>
        <button data-action="close-risk-insight" aria-label="${m("common.close")}">×</button>
      </header>

      <nav class="indicator-range-tabs" aria-label="${p({"en-US":"Risk trend range","zh-CN":"风险趋势时间范围"})}">
        ${Pt.map(Ft).join("")}
      </nav>

      <section class="risk-detail-card trend-mode ${e.tone}">
        <header>
          <div>
            <strong>${p({"en-US":"Risk trend vs low-risk band","zh-CN":"风险趋势 vs 低风险区间"})}</strong>
            <span>${F()} · ${ca(e)}</span>
          </div>
          <em>${Cr(e)}</em>
        </header>
        <div class="risk-detail-chart">
          ${Ar(e,d.activeTrendRange)}
        </div>
        <div class="indicator-detail-stats risk-detail-stats">
          <article>
            <span>${p({"en-US":"Latest","zh-CN":"最新"})}</span>
            <strong>${Y(e)}</strong>
          </article>
          <article>
            <span>${p({"en-US":"Low-risk band","zh-CN":"低风险区间"})}</span>
            <strong>${ca(e)}</strong>
          </article>
          <article>
            <span>${p({"en-US":"Status","zh-CN":"状态"})}</span>
            <strong>${e.isNew?p({"en-US":"New risk","zh-CN":"新增风险"}):a}</strong>
          </article>
        </div>
      </section>

      <section class="indicator-ai-summary">
        <span>${O("spark")}</span>
        <div>
          <h3>${p({"en-US":"AI summary","zh-CN":"AI 总结"})}</h3>
          <p>${Er(e)}</p>
        </div>
      </section>

      <section class="indicator-detail-copy">
        <p><strong>${p({"en-US":"What this means","zh-CN":"含义说明"})}</strong>${Rr(e)}</p>
      </section>
    </section>
  `}function ca(e){return e.higherIsBetter?p({"en-US":`Healthy target ${Y({...e,value:e.threshold})}+`,"zh-CN":`健康目标 ${Y({...e,value:e.threshold})}+`}):p({"en-US":`Watch threshold ${Y({...e,value:e.threshold})}`,"zh-CN":`关注阈值 ${Y({...e,value:e.threshold})}`})}function Er(e){return z?.getLanguage?.()==="zh-CN"?e.isAtRisk?`${j(e,"title")} 当前为 ${Y(e)}，已高于低风险参考区间。建议结合后续多次测量观察是否持续。`:`${j(e,"title")} 当前为 ${Y(e)}，处于低风险区间。继续保持测量可以帮助识别新的变化。`:e.isAtRisk?`${j(e,"title")} is currently ${Y(e)}, above the low-risk reference band. Repeated scans can help confirm whether this is persistent.`:`${j(e,"title")} is currently ${Y(e)}, within the low-risk band. Continued tracking helps catch new changes early.`}function Rr(e){const t=hi[e.id]||{definition:{"en-US":"Definition: This risk point is provided by DeepAffex as an estimated health-risk measurement.","zh-CN":"定义：该风险点由 DeepAffex 提供，用于呈现估算的健康风险测量结果。"},background:{"en-US":"Background: Use repeated measurements and the trend view to understand whether this signal is stable or changing.","zh-CN":"背景：可结合多次测量和趋势视图，理解该信号是稳定还是正在变化。"}};return`
    <span>${p(t.definition)}</span>
    <span>${p(t.background)}</span>
  `}function Cr(e){return e.higherIsBetter?e.value>=e.threshold?"✓":"↓":e.isAtRisk?e.isNew?"+ new":"↑":"✓"}function Ar(e,t=d.activeTrendRange){const a=xr(e),s=gt(a.values,t),i=Ht(),n=s.map((f,g)=>{const T=i.left+g*i.width/(s.length-1),w=B(f,a.min,a.max,i);return{value:f,x:T,y:w,index:g}}),r=B(a.safeHigh,a.min,a.max,i),l=B(a.safeLow,a.min,a.max,i)-r,c=ft(n,a.safeLow,a.safeHigh,t);return`
    <svg class="detailed-trend-svg risk-trend-svg ${e.tone}" viewBox="0 0 330 154" aria-label="${j(e,"title")} trend with low-risk band" role="img">
      <g class="detail-grid">
        ${a.ticks.map(f=>{const g=B(f,a.min,a.max,i);return`<line x1="${i.left}" y1="${g}" x2="${i.right}" y2="${g}" /><text x="4" y="${g+4}">${da(e,f)}</text>`}).join("")}
      </g>
      <rect class="detail-baseline-band risk-safe-band" x="${i.left}" y="${r}" width="${i.width}" height="${l}" rx="12" />
      <polyline class="detail-trend-line risk-line" points="${n.map(f=>`${f.x},${f.y}`).join(" ")}" />
      ${c.map((f,g)=>bt(f,da(e,f.value),g%2===0?-18:18)).join("")}
    </svg>
  `}function xr(e){const t=e.unit==="score"?100:Math.max(e.threshold*2,e.value*1.35,10),a=e.higherIsBetter?t:e.threshold,s=e.higherIsBetter?e.threshold:0,i=e.isAtRisk?e.value*.78:Math.max(e.value*1.15,e.threshold*.55),n=e.higherIsBetter?[e.value-5,e.value-2,e.value-4,e.value+3,e.value,e.value+2,e.value-1,e.value]:[i,i*.94,e.value*1.08,e.value*.9,e.value*1.12,e.value*.98,e.value*1.04,e.value];return{min:0,max:t,safeLow:s,safeHigh:a,ticks:e.higherIsBetter?[100,e.threshold,50,0]:[t,e.threshold,e.threshold/2,0],values:n.map(r=>Math.max(0,Math.min(t,Number(r.toFixed(1)))))}}function da(e,t){return e.unit==="score"?`${Math.round(t)}`:`${Number.isInteger(t)?t:t.toFixed(1)}%`}function Ga(e){const t=e.higherIsBetter?100-e.value/100*100:e.value/(e.threshold*2||1)*100;return`
    <div class="risk-segment-bar" style="--risk-position: ${Math.max(0,Math.min(98,t))}%">
      <span class="safe"></span>
      <span class="watch"></span>
      <span class="high"></span>
      <i></i>
    </div>
  `}function Nr(e){return`${Number.isInteger(e)?e:e.toFixed(1)}%`}function Y(e){return e.unit==="score"?`${Number.isInteger(e.value)?e.value:e.value.toFixed(1)}`:Nr(e.value)}function Dr(){return`
    <svg class="overview-trend-svg" viewBox="0 0 300 112" aria-label="Wellness Score trend chart" role="img">
      <g class="overview-y-axis">
        <text x="0" y="14">100</text>
        <text x="8" y="44">75</text>
        <text x="8" y="74">50</text>
        <text x="8" y="104">25</text>
      </g>
      <g class="overview-grid">
        <line x1="34" y1="10" x2="294" y2="10" />
        <line x1="34" y1="40" x2="294" y2="40" />
        <line x1="34" y1="70" x2="294" y2="70" />
        <line x1="34" y1="100" x2="294" y2="100" />
      </g>
      <rect class="overview-baseline-band" x="34" y="22" width="260" height="18" rx="9" />
      <polyline class="overview-score" points="34,51 45,55 56,49 68,44 80,40 91,54 102,66 114,57 126,52 138,45 150,34 162,46 174,57 186,46 198,49 210,43 222,54 234,45 246,57 258,52 270,44 282,54 294,49" />
      <g class="overview-points">
        <circle cx="34" cy="51" r="2" />
        <circle cx="45" cy="55" r="2" />
        <circle cx="56" cy="49" r="2" />
        <circle cx="68" cy="44" r="2" />
        <circle cx="80" cy="40" r="2" />
        <circle cx="91" cy="54" r="2" />
        <circle cx="102" cy="66" r="2" />
        <circle cx="114" cy="57" r="2" />
        <circle cx="126" cy="52" r="2" />
        <circle cx="138" cy="45" r="2" />
        <circle cx="150" cy="34" r="2" />
        <circle cx="162" cy="46" r="2" />
        <circle cx="174" cy="57" r="2" />
        <circle cx="186" cy="46" r="2" />
        <circle cx="198" cy="49" r="2" />
        <circle cx="210" cy="43" r="2" />
        <circle cx="222" cy="54" r="2" />
        <circle cx="234" cy="45" r="2" />
        <circle cx="246" cy="57" r="2" />
        <circle cx="258" cy="52" r="2" />
        <circle cx="270" cy="44" r="2" />
        <circle cx="282" cy="54" r="2" />
        <circle cx="294" cy="49" r="4.5" />
      </g>
    </svg>
  `}function Ir(){return`
    <svg class="bp-trend-svg" viewBox="0 0 160 54" aria-label="Blood pressure trend chart" role="img">
      <rect class="bp-baseline systolic" x="0" y="11" width="160" height="15" rx="7.5" />
      <rect class="bp-baseline diastolic" x="0" y="30" width="160" height="13" rx="6.5" />
      <polyline class="bp-systolic" points="0,20 16,22 30,16 44,21 58,12 72,18 86,20 100,17 114,22 130,19 146,21 160,18" />
      <polyline class="bp-diastolic" points="0,37 16,35 30,39 44,34 58,37 72,32 86,36 100,35 114,38 130,36 146,37 160,35" />
      <g class="bp-legend">
        <circle cx="4" cy="50" r="2" />
        <text x="10" y="52">SYS</text>
        <circle cx="48" cy="50" r="2" />
        <text x="54" y="52">DIA</text>
      </g>
    </svg>
  `}function _r(e,t=d.activeTrendRange){const a={"pulse-rate":{min:60,max:90,ticks:[90,82,72,60],baseline:[72,82],values:[84,81,83,79,86,82,78,77],unit:"bpm"},"respiratory-rate":{min:12,max:22,ticks:[22,18,14,12],baseline:[14,18],values:[19,17,16,17,16,16,15,16],unit:"/min"},"systolic-blood-pressure":{min:96,max:132,ticks:[132,118,108,96],baseline:[108,118],values:[121,119,116,122,117,115,118,116],unit:"mmHg"},"diastolic-blood-pressure":{min:60,max:88,ticks:[88,76,68,60],baseline:[68,76],values:[78,74,76,73,75,72,74,73],unit:"mmHg"},"stress-level":{min:40,max:76,ticks:[76,62,48,40],baseline:[48,62],values:[68,65,61,59,57,55,54,56],unit:"pts"},"irregular-heartbeat-count":{min:0,max:4,ticks:[4,3,2,0],baseline:[0,1],values:[1,0,1,3,1,0,2,2],unit:"events"},"sleep-quality":{min:1,max:5.9,ticks:[5.9,5,4,1],baseline:[4,5.9],values:[3.8,3.9,4,3.7,4.1,4.3,4.2,4.2],unit:"/5"},"anxiety-index":{min:1,max:5.9,ticks:[5.9,4,3,1],baseline:[1,3],values:[3.2,3,2.9,3.1,2.8,2.7,2.6,2.6],unit:"/5"},"cardio-metabolic-age":{min:30,max:58,ticks:[58,50,42,30],baseline:[38,41],values:[45,44,43,44,43,42,42,42],unit:"yrs"}},s=a[e.id]||a["pulse-rate"],i=gt(s.values,t),n=Ht(s.min,s.max),r=i.map((w,S)=>{const k=n.left+S*n.width/(i.length-1),I=B(w,s.min,s.max,n);return{value:w,x:k,y:I,index:S}}),[l,c]=s.baseline,f=B(c,s.min,s.max,n),g=B(l,s.min,s.max,n)-f,T=ft(r,l,c,t);return`
    <svg class="detailed-trend-svg ${e.tone}" viewBox="0 0 330 154" aria-label="${e.label} trend with personal baseline" role="img">
      <g class="detail-grid">
        ${s.ticks.map(w=>{const S=B(w,s.min,s.max,n);return`<line x1="${n.left}" y1="${S}" x2="${n.right}" y2="${S}" /><text x="4" y="${S+4}">${w}</text>`}).join("")}
      </g>
      <rect class="detail-baseline-band" x="${n.left}" y="${f}" width="${n.width}" height="${g}" rx="12" />
      <polyline class="detail-trend-line" points="${r.map(w=>`${w.x},${w.y}`).join(" ")}" />
      ${T.map((w,S)=>bt(w,Or(w.value),S%2===0?-18:18)).join("")}
    </svg>
  `}function $r(e=d.activeTrendRange){const t={min:60,max:132,ticks:[130,118,108,76,68,60],sysBaseline:[108,118],diaBaseline:[68,76],sys:[121,119,116,122,117,115,118,116],dia:[78,74,76,73,75,72,74,73]},a=gt(t.sys,e),s=gt(t.dia,e),i=Ht(),n=a.map((S,k)=>({value:S,x:i.left+k*i.width/(a.length-1),y:B(S,t.min,t.max,i),index:k,type:"sys"})),r=s.map((S,k)=>({value:S,x:i.left+k*i.width/(s.length-1),y:B(S,t.min,t.max,i),index:k,type:"dia"})),l=B(t.sysBaseline[1],t.min,t.max,i),c=B(t.sysBaseline[0],t.min,t.max,i)-l,f=B(t.diaBaseline[1],t.min,t.max,i),g=B(t.diaBaseline[0],t.min,t.max,i)-f,T=ft(n,t.sysBaseline[0],t.sysBaseline[1],e),w=ft(r,t.diaBaseline[0],t.diaBaseline[1],e);return`
    <svg class="detailed-trend-svg bp-detail" viewBox="0 0 330 154" aria-label="Blood pressure trend with systolic and diastolic baselines" role="img">
      <g class="detail-grid">
        ${t.ticks.map(S=>{const k=B(S,t.min,t.max,i);return`<line x1="${i.left}" y1="${k}" x2="${i.right}" y2="${k}" /><text x="4" y="${k+4}">${S}</text>`}).join("")}
      </g>
      <rect class="detail-baseline-band sys-band" x="${i.left}" y="${l}" width="${i.width}" height="${c}" rx="10" />
      <rect class="detail-baseline-band dia-band" x="${i.left}" y="${f}" width="${i.width}" height="${g}" rx="10" />
      <polyline class="detail-trend-line sys-line" points="${n.map(S=>`${S.x},${S.y}`).join(" ")}" />
      <polyline class="detail-trend-line dia-line" points="${r.map(S=>`${S.x},${S.y}`).join(" ")}" />
      ${T.map((S,k)=>bt(S,`SYS ${S.value}`,k%2===0?-17:17)).join("")}
      ${w.map(S=>bt(S,`DIA ${S.value}`,18)).join("")}
    </svg>
  `}function gt(e,t){return Array.from({length:t==="7D"?7:t==="90D"?90:30},(s,i)=>{const n=e[i%e.length];if(t==="7D")return n;const r=t==="90D"?Math.sin(i/8)*.8:Math.sin(i/4)*.45,l=n+r;return Number.isInteger(n)?Math.round(l):Number(l.toFixed(1))})}function ft(e,t,a,s){const i=e.map(l=>({...l,risk:Lr(l.value,t,a)})).filter(l=>l.risk>0);if(s==="7D")return i;const n=[];for(let l=0;l<i.length;l+=1){const c=Math.floor(i[l].index/7)*7;if(n.some(g=>Math.floor(g.index/7)*7===c))continue;const f=i.filter(g=>Math.floor(g.index/7)*7===c);n.push(f.reduce((g,T)=>T.risk>g.risk?T:g,f[0]))}const r=s==="90D"?7:5;return n.sort((l,c)=>c.risk-l.risk).slice(0,r).sort((l,c)=>l.index-c.index)}function Lr(e,t,a){return e<t?t-e:e>a?e-a:0}function Or(e){return Number.isInteger(e)?`${e}`:`${e.toFixed(1)}`}function Ht(){return{left:34,right:318,top:22,bottom:132,width:284,height:110}}function B(e,t,a,s){return s.bottom-(e-t)/(a-t)*s.height}function bt(e,t,a=-18){const s=Math.max(28,t.length*6+12),i=18,n=Math.min(330-s-2,Math.max(28,e.x-s/2)),r=Math.min(136,Math.max(4,e.y+a));return`
    <g class="abnormal-point ${e.type||""}">
      <circle cx="${e.x}" cy="${e.y}" r="3.6" />
      <rect x="${n}" y="${r}" width="${s}" height="${i}" rx="9" />
      <text x="${n+s/2}" y="${r+12.5}">${t}</text>
    </g>
  `}function Mr(e="green",t=!1){return`
    <svg class="trend-line ${e} ${t?"mini":""}" viewBox="${t?"0 0 160 54":"0 0 360 150"}" aria-hidden="true">
      ${t?'<rect class="baseline" x="0" y="16" width="160" height="18" rx="9" />':'<polyline class="avg" points="0,102 40,105 80,100 120,103 160,98 200,99 240,96 280,97 320,95 360,96" />'}
      <polyline class="you" points="${t?"0,28 18,25 32,29 48,20 64,27 80,13 98,24 116,22 132,28 160,25":"0,74 25,80 50,72 75,68 100,85 125,76 150,70 175,55 200,68 225,63 250,70 275,62 300,70 325,66 350,58 360,55"}" />
      ${t?"":'<circle cx="350" cy="58" r="6" />'}
    </svg>
  `}function Ur(){return`
    <section class="card centered">
      <img class="file-icon-img" src="/assets/icon-file-upload.svg" alt="" aria-hidden="true" />
      <h2>上传最近一次体检报告</h2>
      <p>提取关键指标，建立健康基线，并在后续趋势解释中持续参考。</p>
      <button class="primary">选择文件</button>
    </section>
    <section class="card">
      <p class="kicker">当前健康基线</p>
      <h2>更值得长期关注：心血管代谢相关指标</h2>
      <div class="tag-list">
        <span>LDL-C 偏高</span><span>尿酸偏高</span><span>空腹血糖正常高值</span>
      </div>
    </section>
  `}function Pr(){return`
    <section class="card">
      <p class="kicker">本周目标</p>
      <h2>让血压波动回到个人基线附近</h2>
      <div class="progress-track"><span style="width:64%"></span></div>
    </section>
    <section class="card">
      <p class="kicker">今日任务</p>
      ${xt("快走 20 分钟",!0)}
      ${xt("晚餐减少高盐外食")}
      ${xt("23:30 前上床")}
    </section>
    <section class="insight light">
      <p class="kicker">效果反馈</p>
      <h2>这个策略对你可能有效</h2>
      <p>过去 14 天你完成了 76% 的计划任务，平均睡眠增加 32 分钟，血压波动有所下降。</p>
    </section>
  `}function Br(){return`
    <nav class="bottom-nav" aria-label="${m("nav.home")}">
      ${ii.map(([e,t])=>`
            <button data-tab="${e}" class="${Hr(e)?"active":""} ${e==="scan"?"scan-nav":""}">
              ${Fr(e)}
              <small>${m(t)}</small>
            </button>
          `).join("")}
    </nav>
  `}function Fr(e){return{home:`
      <svg class="nav-icon nav-home" viewBox="0 0 28 28" aria-hidden="true">
        <path d="M4.8 12.3 14 4.6l9.2 7.7v10.4a1.5 1.5 0 0 1-1.5 1.5h-5.1v-7.1h-5.2v7.1H6.3a1.5 1.5 0 0 1-1.5-1.5V12.3Z" />
      </svg>
    `,trends:`
      <svg class="nav-icon nav-trends" viewBox="0 0 28 28" aria-hidden="true">
        <rect x="4.2" y="15.3" width="3.7" height="8.5" rx="0.8" />
        <rect x="11.1" y="10.7" width="3.7" height="13.1" rx="0.8" />
        <rect x="18" y="4.1" width="3.7" height="19.7" rx="0.8" />
      </svg>
    `,scan:`
      <svg class="nav-icon nav-scan" viewBox="0 0 56 56" aria-hidden="true">
        <defs>
          <linearGradient id="scanGradient" x1="28" y1="0" x2="28" y2="56" gradientUnits="userSpaceOnUse">
            <stop stop-color="#197CFF" />
            <stop offset="1" stop-color="#075DEE" />
          </linearGradient>
        </defs>
        <circle class="scan-orb" cx="28" cy="28" r="28" />
        <circle cx="28" cy="28" r="8.2" />
        <circle cx="28" cy="28" r="2.4" />
        <path d="M28 11v4.2M28 40.8V45M11 28h4.2M40.8 28H45" />
        <circle cx="39.6" cy="16.2" r="1.7" />
      </svg>
    `,insights:`
      <svg class="nav-icon nav-insights" viewBox="0 0 28 28" aria-hidden="true">
        <path d="M8.2 12.2a5.8 5.8 0 1 1 10.3 3.6c-1.2 1.3-1.9 2.2-2.1 3.6h-4.8c-.2-1.4-.9-2.3-2.1-3.6a5.8 5.8 0 0 1-1.3-3.6Z" />
        <path d="M11.6 22h4.8M12.4 25h3.2" />
      </svg>
    `,profile:`
      <svg class="nav-icon nav-profile" viewBox="0 0 28 28" aria-hidden="true">
        <circle cx="14" cy="14" r="10.4" />
        <circle cx="14" cy="11.5" r="3.2" />
        <path d="M8.2 20.4c1.1-3 3-4.4 5.8-4.4s4.7 1.4 5.8 4.4" />
      </svg>
    `}[e]||""}function Hr(e){return e==="scan"?d.activeTab==="prepare"||d.activeTab==="scanning"||d.activeTab==="scan":d.activeTab===e}function At(e,t){return`
    <button class="profile-row">
      <span>
        <strong>${e}</strong>
        <small>${t}</small>
      </span>
      <em>›</em>
    </button>
  `}function qe(e,t,a){return`
    <article class="metric">
      <span>${e}</span>
      <strong>${t}</strong>
      <small>${a}</small>
    </article>
  `}function xt(e,t=!1){return`
    <label class="task">
      <input type="checkbox" ${t?"checked":""} />
      <span>${e}</span>
    </label>
  `}function Je(e,t,a,s=""){return`
    <article class="prep-item">
      <img src="${e}" alt="" aria-hidden="true" />
      <div>
        <h2>${t}</h2>
        <p>${a}</p>
        ${s?`<p class="prep-blue">${s}</p>`:""}
      </div>
    </article>
  `}function zr(e){return`
    <div class="indicator-group">
      <div class="group-label">${m(e.name)}</div>
      <div class="iphone-card-row">
        ${e.cards.map(([t,a,s])=>Wr(t,a,s,!0)).join("")}
      </div>
    </div>
  `}function Wr(e,t,a,s=!1){return`
    <article class="phone-indicator ${s?"locked":""}">
      <img class="phone-icon-img" src="${{pulse:"/assets/icon-pulse-rate.svg",bp:"/assets/icon-bp.svg",hrv:"/assets/icon-hrv.svg",cvd:"/assets/icon-cvd-risk.svg",heartAttack:"/assets/icon-heart-attack.svg",stroke:"/assets/icon-stroke-risk.svg",metabolic:"/assets/icon-metabolic.svg",diabetes:"/assets/icon-diabetes.svg",liver:"/assets/icon-liver-risk.svg",cholesterol:"/assets/icon-cholesterol.svg",glucose:"/assets/icon-glucose.svg",wellness:"/assets/icon-wellness-score.svg"}[e]}" alt="" aria-hidden="true" />
      <h3>${m(t)}</h3>
      <small class="point-id">${a}</small>
      <div class="phone-value">
        ${s?'<span class="locked-value"><img src="/assets/icon-lock-gray.svg" alt="" aria-hidden="true" />--</span>':"<strong>--</strong>"}
      </div>
    </article>
  `}const lt=ei(),Gr=Qs({licenseKey:"09ab9b40-346b-434b-a27b-136c05d5a191",studyId:"391cab63-b0fe-4b8a-966e-584213071db6",restUrl:"https://api.deepaffex.cn",useMock:!1,getLanguage:lt.getLanguage,getWmeaLanguage:lt.getWmeaLanguage,t:lt.t});gi(document.querySelector("#app"),Gr,lt);
