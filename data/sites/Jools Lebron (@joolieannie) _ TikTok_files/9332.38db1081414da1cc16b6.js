"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[9332],{22231:(e,t,o)=>{o.d(t,{E:()=>a,l:()=>s});var r=o(40099),i=o(77026),n=o(90771);const s=()=>{const e=(0,n.eX)(),t=(0,n.RW)();return{shouldShowLiveSurvey:e,handleHideLiveSurvey:(0,r.useCallback)((()=>{t.handleShowLiveSurvey(!1)}),[])}},a=()=>(0,i.W6)()},97031:(e,t,o)=>{o.d(t,{B:()=>p});var r=o(24643),i=o(25695),n=o(40099),s=o(41286),a=o(1232),l=o(52111),d=o(55416),c=o(16519);var u=o(75126);function p(e){const t=function(t){const o=function({onClose:e}={}){const{hideModal:t}=(0,a.g)(),[o,s]=(0,i.S)(l.hf,{selector:({showing:e})=>e,dependencies:[]}),d=(0,n.useCallback)((()=>{null==e||e(),t(),s.hideReport()}),[s,t,e]);return(0,r.jsx)(u.p,{onClose:d,visible:o})}(),s=function({onClose:e}={}){const{hideModal:t}=(0,a.g)(),[o,s]=(0,i.S)(d.y7,{selector:({showing:e})=>e,dependencies:[]}),l=(0,n.useCallback)((()=>{null==e||e(),t(),s.hideReport()}),[s,t,e]);return(0,r.jsx)(c.Y,{onClose:l,visible:o})}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e,Object.assign({},t)),o,s]})};return t.displayName=`WithReport(${(0,s.x)(e)})`,t}},27885:(e,t,o)=>{o.d(t,{c:()=>l});var r=o(24643),i=o(40099),n=o(9511),s=o(41286),a=o(19006);function l(e){return function(t){const o=o=>{const{selfFocusable:s=!1}=o,{pathname:l}=(0,n.useLocation)(),d=(0,i.useMemo)((()=>null!=e?e:(0,a.N2)(l)),[l]),c=(0,i.useMemo)((()=>"unknown"===d?void 0:`main-content-${d}`),[d]),u=(0,i.useMemo)((()=>s?0:void 0),[s]),p=(0,i.useMemo)((()=>Object.assign(Object.assign({},o),{tabIndex:u,containerID:c})),[o,u,c]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t,Object.assign({},p))})};return o.displayName=`WithA11yFocusManagerHOC(${(0,s.x)(t)})`,o}}},84132:(e,t,o)=>{o.d(t,{gw:()=>I,uU:()=>D,xP:()=>A});var r,i=o(40099),n=o(24642);!function(e){e.SurveyIconShow="desktop_web_survey_show_icon",e.SurveyPopupShow="desktop_web_survey_show",e.SurveyIconClick="desktop_web_survey_click_icon",e.SurveyCtaClick="desktop_web_survey_click_join",e.SurveyCloseClick="desktop_web_survey_click_not_now"}(r||(r={}));const s={handleSurveyPopupShow:()=>{n.f.event("desktop_web_survey_show")},handleSurveyIconShow:()=>{n.f.event("desktop_web_survey_show_icon")},handleSurveyIconClick:()=>{n.f.event("desktop_web_survey_click_icon")},handleSurveyCtaClick:()=>{n.f.event("desktop_web_survey_click_join")},handleSurveyCloseClick:()=>{n.f.event("desktop_web_survey_click_not_now")}};var a=o(50453),l=o(52964),d=o(93166),c=o(47218),u=o(62209),p=o(59590),h=o(71111),v=o(76e3),g=o(35626),y=o.n(g),m=o(92225);const x=1/0,b=(0,h.atom)(JSON.parse((0,p._S)("PC_APP_SURVEY")||"{}")),_=(0,h.atom)((e=>e(b)),((e,t,o)=>{const r=e(b),i="function"==typeof o?o(r):Object.assign(Object.assign({},r),o);var n;y()(r,i)||(t(b,i),n=i,(0,p.AP)("PC_APP_SURVEY",JSON.stringify(n)))}));_.debugLabel="surveyPersistedAtom";const f=(0,h.atom)(!1),w=(0,h.atom)(-1),S=(0,h.atom)(!1),j=(0,h.atom)({link:"",shouldShowSurvey:!1}),k=(0,h.atom)((e=>({surveyPopActive:e(f),surveyConfig:e(j),initialized:e(S)})),((e,t,o)=>{const r=(0,m.ev)();t(f,o),e(f)?(s.handleSurveyPopupShow(),r.changeCurrentType(m.RD.SurveyEntrance),t(_,(e=>{var t;return{count:(null!==(t=e.count)&&void 0!==t?t:0)+1,hasShown:!0}}))):r.changeCurrentType(m.RD.None)}));k.debugLabel="surveyAtom";const{useAtomService:C,useServiceDispatchers:P,useServiceState:L}=(0,v.i)(k,((e,t)=>({startTimeout(){e(S)||(t(S,!0),s.handleSurveyIconShow());const o=e(w),{hasShown:r,count:i=0}=e(_);!r&&-1===o&&i<x&&t(w,window.setTimeout((()=>t(k,!0)),3e4))},clearTimeout(){const o=e(w);window.clearTimeout(o),t(w,-1)},setSurveyPopActive(e){t(k,e)},setSurveyConfig(e){t(j,e)}})));function A(){const[{surveyPopActive:e},{setSurveyPopActive:t,startTimeout:o,clearTimeout:r}]=C((e=>({surveyPopActive:e.surveyPopActive})),c.bN),n=(0,i.useCallback)((()=>{s.handleSurveyCloseClick(),t(!1)}),[]),a=(0,i.useCallback)((()=>{s.handleSurveyIconClick(),t((e=>!e)),r()}),[]),l=(0,i.useCallback)((()=>{s.handleSurveyCtaClick(),t(!1)}),[]);return(0,i.useEffect)((()=>{o()}),[]),{surveyPopActive:e,handleToggleShow:a,handleHideSurvey:n,handleClickCTA:l}}function D(){var e,t;const{user:o}=(0,a.L)((0,l.W)((()=>["user"]),[])),r=null!==(e=null==o?void 0:o.hasLivePermission)&&void 0!==e&&e,{config:n}=(0,a.L)((0,d.U)((()=>["config"]),[])),{desktopWebSurveyLink:s}=(0,a.L)(n),c=P(),{shouldShowSurvey:p,isNewUser:h}=(0,u.wX)(),v=null!==(t=null==s?void 0:s[h?"new":"old"])&&void 0!==t?t:"",g=p&&r;return(0,i.useEffect)((()=>{c.setSurveyConfig({link:v,shouldShowSurvey:g})}),[c,v,g]),{link:v,shouldShowSurvey:g}}const I=()=>L((e=>e.surveyConfig.link),c.bN)},7254:(e,t,o)=>{o.d(t,{SP:()=>Ee});var r=o(24643),i=o(40099),n=o(9511),s=o(63077),a=o(24642),l=o(72302),d=o(59590),c=o(62120),u=o(47236);const p=(0,u.Ay)({resolved:{},chunkName:()=>"live-survey",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!o.m[t]},importAsync:()=>o.e(4816).then(o.bind(o,28268)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return o(t)},resolve:()=>28268});var h=o(22231),v=o(62209),g=o(50453),y=o(53720),m=o(93166),x=o(52964),b=o(92225),_=o(96008),f=o(73635),w=o(50475),S=o(78185),j=o(47218),k=o(23594);const C={id:"pc-a05d3271",use:"pc-a05d3271-usage",viewBox:"0 0 21 19",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19" id="pc-a05d3271"><path fill="currentColor" d="M12.601 17h2.52a.84.84 0 1 1 0 1.68h-9.24a.84.84 0 1 1 0-1.68h2.1v-2.1h-6.3A1.68 1.68 0 0 1 0 13.22V1.88C0 .952.754.199 1.68.199h17.642c.927 0 1.68.753 1.68 1.68V13.22c0 .927-.753 1.68-1.68 1.68h-6.72zm-.84 0v-2.1h-2.94V17zM1.681 1.88v11.34h17.641V1.88H1.68z" /></symbol>'};function P(e){const t=(0,i.useContext)(k.X);return(0,i.useLayoutEffect)((()=>(t.add(C),()=>{t.remove("pc-a05d3271")})),[]),(0,r.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor"},e,{children:(0,r.jsx)("use",{xlinkHref:"#pc-a05d3271"},void 0)}),void 0)}var L=o(6874),A=o(19086),D=o(1232),I=o(42245),E=o(50410),T=o(98151),B=o(78004);const M=(0,T.default)("div",{target:"ejkrawn0"})({display:"flex",position:"relative",marginBottom:"12px"},"label:DivPromotionContainer;"),O=(0,T.default)("button",{target:"ejkrawn1"})(B.WA,(({isExpand:e,theme:t})=>{const o=(0,B.t7)(t.direction,"end");return[(0,B.zy)({theme:t,typography:"P3",fontWeight:"bold",color:"TextSecondary",fontFamily:"TikTokFont"}),{position:e?"absolute":"relative",right:0,bottom:0,padding:"0 8px",minWidth:"90px",height:"32px",boxShadow:`0 2px 8px ${t.colors.ShadowSecondary}`,borderRadius:"52px",cursor:"pointer",lineHeight:"30px",textAlign:"center",whiteSpace:"nowrap",borderWidth:"1px",borderStyle:"solid",borderColor:t.colors.LineSecondary2,backgroundColor:t.colors.BGSecondary,":hover":{borderColor:t.colors.LinePrimary,backgroundColor:t.colors.BGTertiary},":active":{borderColor:t.colors.LinePrimary,backgroundColor:t.colors.BGInput},transition:"transform 0.3s cubic-bezier(.4,.14,.3,1)",transformOrigin:`${o} bottom`,transform:e?"scale(0)":"none"}]}),"label:ButtonGetAppText;"),F=(0,T.default)("div",{target:"ejkrawn3"})((({isExpand:e,theme:t})=>{const o=(0,B.t7)(t.direction,"end");return[(0,B.zy)({theme:t,typography:"P2",fontWeight:"bold"}),{position:e?"relative":"absolute",bottom:"-1px",background:t.colors.BGSecondary,boxShadow:`0 2px 8px ${t.colors.ShadowSecondary}`,border:`1px solid ${t.colors.LineSecondary3}`,borderRadius:"8px",transition:"all 0.3s cubic-bezier(.4,.14,.3,1)",transformOrigin:`${o} bottom`,transform:e?"none":"scale(0)"},(0,B.mp)({direction:t.direction,end:"-1px"})]}),"label:DivExpandContainer;"),R=(0,T.default)("div",{target:"ejkrawn4"})((({theme:{direction:e}})=>(0,B.mp)({direction:e,end:"16px"})),{position:"absolute",top:16,cursor:"pointer"},"label:DivXMarkWrapper;"),W=(0,T.default)("div",{target:"ejkrawn5"})((({theme:{direction:e}})=>(0,B.mp)({direction:e,marginEnd:48,marginStart:16})),"label:DivExpandWrapper;"),$=(0,T.default)("div",{target:"ejkrawn6"})((({theme:{colors:e}})=>({margin:"6px 0",display:"flex",flexDirection:"row",padding:"8px",borderRadius:"8px",cursor:"pointer",":hover":{background:e.BGView}})),"label:DivItemContainer;"),N=(0,T.default)("span",{target:"ejkrawn7"})((({theme:{direction:e}})=>(0,B.mp)({direction:e,marginStart:"8px"})),{whiteSpace:"nowrap"},"label:SpanText;"),U=(0,T.default)("div",{target:"ejkrawn8"})((({theme:{colors:e,direction:t}})=>[{width:"calc(100% - 16px)",height:"1px",position:"relative",background:e.LineSecondary2,transform:"scaleY(0.5)"},(0,B.mp)({direction:t,start:"8px"})]),"label:DivSplit;");var H=o(67262);const z=(0,i.memo)((function(){const e=(0,L.s)(),{hideModal:t,showModal:o}=(0,D.g)(),[{isExpand:s,isModalShow:a,isPwaInstallable:l},c]=(0,H.nO)((e=>({isExpand:e.isExpand,isModalShow:e.isModalShow,isPwaInstallable:e.isPwaInstallable})),j.bN),{isElectronApp:u}=(0,I.B_)(),{isDesktopTestV1:p}=(0,I._j)(),h=!u&&p,v=(0,i.useCallback)((()=>{c.handleShowSnack(!1),c.setIsExpand(!0)}),[c]),g=(0,i.useCallback)((()=>{c.setIsExpand(!1),(0,d._S)(A.v1)||(0,d.AP)(A.v1,"1")}),[c]),y=(0,i.useCallback)((()=>{a||(o(),c.setIsModalShow(!0))}),[c,a,o]),m=(0,i.useCallback)((()=>{t(),c.setIsModalShow(!1)}),[c,t]),x=(0,i.useCallback)((()=>{l?v():y()}),[v,y,l]),b=(0,i.useCallback)((()=>{y(),g(),c.handleClickDownload()}),[c,g,y]),_=(0,i.useCallback)((()=>{g(),c.handleInstallationClick()}),[c,g]),k=(0,i.useMemo)((()=>Boolean(navigator.standalone)||window.matchMedia("(display-mode: standalone), (display-mode: minimal-ui)").matches),[]),{search:C}=(0,n.useLocation)();if((0,i.useMemo)((()=>"twa"===(0,d.Hd)(A.O_)||"twa"===new URLSearchParams(C).get("source")),[C]))return null;if(!h)return(0,r.jsx)(E.u,{onClose:m,visible:a});const T=(0,S.w)(O);return(0,r.jsxs)(M,{children:[(0,r.jsx)(T,{isExpand:s,onClick:x,etClick:{etName:"click_get_app_for_pc",etParams:{enter_method:"right_corner_button"}},children:e("get_app")}),(0,r.jsxs)(F,{isExpand:s,children:[(0,r.jsx)(R,{onClick:g,children:(0,r.jsx)(f.A,{width:20,height:20})}),(0,r.jsxs)(W,{children:[!k&&l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)($,{onClick:_,"data-e2e":"pwa-pc",children:[(0,r.jsx)(P,{width:"21",height:"21"}),(0,r.jsx)(N,{children:e("get_tt_desktop")})]}),(0,r.jsx)(U,{})]}),(0,r.jsxs)($,{onClick:b,"data-e2e":"pwa-mobile",children:[(0,r.jsx)(w.A,{width:21,height:21}),(0,r.jsx)(N,{children:e("get_tt_app")})]})]})]}),(0,r.jsx)(E.u,{onClose:m,visible:a})]})})),V=(0,u.Ay)({resolved:{},chunkName:()=>"survey",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!o.m[t]},importAsync:()=>o.e(3653).then(o.bind(o,20116)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return o(t)},resolve:()=>20116});var q=o(84132),G=o(44445),Y=o(45643);const X=(0,T.default)("button",{target:"ejylfo50"})(B.WA,(({theme:{colors:e}})=>({cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",width:"32px",height:"32px",borderRadius:"52px",background:e.Primary,boxShadow:`0 2px 8px ${e.ShadowSecondary}`,":hover":{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)), #FE2C55"},":active":{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)), #FE2C55"}})),"label:ButtonIconContainer;"),J=(0,i.memo)((function(){const e=(0,L.s)(),t=(0,i.useCallback)((()=>{(0,d.a6)(),Y.O.handleToTop()}),[]);return(0,r.jsx)(X,{onClick:t,"aria-label":e("accessibilityLabels_forYou_scroll_btn"),children:(0,r.jsx)(G.A,{width:"16",height:"16",fill:"#FFF"})})}));var K=o(25695),Q=o(58632),Z=o(64162),ee=o(4126),te=o(93995),oe=o(23999),re=o(87933),ie=o(26324),ne=o(72916),se=o(8536),ae=o(74690),le=o(80339),de=o(76435),ce=o(9927),ue=o(38203),pe=o(79490);let he=class{constructor(e){this.fetch=e}fetchProjectListInfo(e){return this.fetch.get("/api/v1/web/project/list/",{query:e,baseUrlType:2})}};he=(0,Q.__decorate)([(0,ue._)(),(0,Q.__metadata)("design:paramtypes",[pe.pM])],he);let ve=class extends Z.E{constructor(e){super(),this.service=e,this.defaultState={inProgress:!1,loading:!0,projectList:[],hideProjectIds:[]}}setLoading(e,t){e.loading=t}removeProjectByIndex(e,t){var o,r;const i=null===(o=null==e?void 0:e.projectList)||void 0===o?void 0:o[t];(null==i?void 0:i.projectID)&&(e.hideProjectIds.push(null==i?void 0:i.projectID),null===(r=e.projectList)||void 0===r||r.splice(t,1))}setProjectList(e,t){var o,r,i;e.projectList=null!==(r=null===(o=t.infos)||void 0===o?void 0:o.filter((t=>{const o=e.hideProjectIds.includes(t.projectID),r=t.taskInProgress>0,i=[4,99].includes(t.status);return!o&&r&&!i})))&&void 0!==r?r:[],e.inProgress=Boolean(null===(i=e.projectList)||void 0===i?void 0:i.length)}fetchProjectList(e){return e.pipe((0,ne.n)((()=>this.service.fetchProjectListInfo({}).pipe((0,se.Z)((e=>(0,oe.of)(this.getActions().setProjectList(e)))),(0,ae.Z)(this.getActions().setLoading(!0)),(0,le.q)(this.getActions().setLoading(!1)),(0,ce.n)({})))))}refreshData(e){return e.pipe((()=>(0,re.O)(500,15e3).pipe((0,ne.n)((()=>(0,oe.of)(this.getActions().fetchProjectList({})))),(0,de.Q)(this.dispose$))))}};(0,Q.__decorate)([(0,ee.uk)(),(0,Q.__metadata)("design:type",ie.c)],ve.prototype,"dispose$",void 0),(0,Q.__decorate)([(0,ee.h5)(),(0,Q.__metadata)("design:type",Function),(0,Q.__metadata)("design:paramtypes",[Object,Boolean]),(0,Q.__metadata)("design:returntype",void 0)],ve.prototype,"setLoading",null),(0,Q.__decorate)([(0,ee.h5)(),(0,Q.__metadata)("design:type",Function),(0,Q.__metadata)("design:paramtypes",[Object,Number]),(0,Q.__metadata)("design:returntype",void 0)],ve.prototype,"removeProjectByIndex",null),(0,Q.__decorate)([(0,ee.h5)(),(0,Q.__metadata)("design:type",Function),(0,Q.__metadata)("design:paramtypes",[Object,Object]),(0,Q.__metadata)("design:returntype",void 0)],ve.prototype,"setProjectList",null),(0,Q.__decorate)([(0,ee.Mj)(),(0,Q.__metadata)("design:type",Function),(0,Q.__metadata)("design:paramtypes",[ie.c]),(0,Q.__metadata)("design:returntype",void 0)],ve.prototype,"fetchProjectList",null),(0,Q.__decorate)([(0,ee.Mj)(),(0,Q.__metadata)("design:type",Function),(0,Q.__metadata)("design:paramtypes",[ie.c]),(0,Q.__metadata)("design:returntype",void 0)],ve.prototype,"refreshData",null),ve=(0,Q.__decorate)([(0,te.n)("uploadProgressModule"),(0,Q.__metadata)("design:paramtypes",[he])],ve);var ge=o(75771),ye=o.n(ge),me=o(23236),xe=o(75431);const be=(0,T.default)("div",{target:"e10yvdyi0"})((({theme:e})=>({width:"404px",height:"87px",marginBottom:"12px",boxShadow:`0px 2px 12px ${e.colors.SDTertiary}`,borderRadius:"8px",backgroundColor:e.colors.BGPrimary,padding:"19px",position:"relative",cursor:"pointer",borderWidth:e.isDark?"1px":0,borderStyle:"solid",borderColor:e.colors.BGTertiary2})),"label:DivUploadProgressContainer;"),_e=(0,T.default)("div",{target:"e10yvdyi1"})({display:"flex",flexDirection:"row"},"label:DivRowContainer;"),fe=(0,T.default)("div",{target:"e10yvdyi2"})((({theme:{colors:e}})=>({position:"absolute",width:"32px",height:"48px",left:"22px",top:" 16px",background:e.TextQuaternary,borderRadius:"2px"})),"label:DivCoverShadowTop;"),we=(0,xe.AH)({height:"52px",width:"38px",borderRadius:"2px",zIndex:"1"},"label:coverBaseStyle;"),Se=(0,T.default)("div",{target:"e10yvdyi3"})(we,(({isEmpty:e,theme:{colors:t}})=>({display:"flex",justifyContent:"center",alignItems:"center",background:e?t.BGPlaceholderOpaque:t.Primary2})),"label:DivProjectCover;"),je=(0,T.default)("img",{target:"e10yvdyi4"})({maxWidth:"100%",maxHeight:"100%"},"label:ImgProjectCover;"),ke=(0,T.default)("div",{target:"e10yvdyi5"})({display:"flex",flexDirection:"column",justifyContent:"start",marginLeft:"16px"},"label:DivMidColumn;"),Ce=(0,T.default)("p",{target:"e10yvdyi6"})((({theme:e,error:t})=>[(0,B.zy)({theme:e,fontFamily:"TikTokFont"}),{color:t?e.colors.Negative:e.colors.TextPrimary,textAlign:"left",fontWeight:"600",fontSize:"14px",marginTop:"6px",lineHeight:"22px"}]),"label:PUploadingProgressTitle;"),Pe=(0,T.default)("div",{target:"e10yvdyi9"})((({theme:{colors:e}})=>({marginTop:"12px",height:"4px",width:"278px",backgroundColor:e.LineSecondary})),"label:DivProgressBarParent;"),Le=(0,T.default)("div",{target:"e10yvdyi10"})((({progress:e,theme:{colors:t}})=>({height:"100%",width:e,backgroundColor:t.Primary})),"label:DivProgressBarChild;"),Ae=({index:e,projectInfo:t,handleCloseCard:o})=>{var n;const s=(0,L.s)(),a=(0,i.useCallback)((t=>{null==t||t.stopPropagation(),o(e)}),[e]),{taskFailed:l,lastPostProgress:d}=t,c=`${d}%`,u=null===(n=ye()(null==t?void 0:t.configs,{type:100}))||void 0===n?void 0:n.payload,p=!u,h=`data:image/jpeg;base64,${u}`,v=l>0;return(0,r.jsxs)(be,{children:[(0,r.jsx)(me.Mt,{onClick:a,children:(0,r.jsx)(f.A,{})}),(0,r.jsxs)(_e,{children:[(0,r.jsx)(fe,{}),(0,r.jsx)(Se,{isEmpty:p,children:!p&&(0,r.jsx)(je,{src:h})}),(0,r.jsxs)(ke,{children:[(0,r.jsx)(Ce,{error:v,children:v?s("Uploading Failed"):`${s("Uploading")}... ${c}`}),(0,r.jsx)(Pe,{children:(0,r.jsx)(Le,{progress:c})})]})]})]})},De=()=>{const[{projectList:e,inProgress:t,loading:o},n]=(0,K.S)(ve,{selector:e=>({projectList:e.projectList,inProgress:e.inProgress,loading:e.loading}),dependencies:[]}),s=(0,i.useCallback)((e=>{n.removeProjectByIndex(e)}),[n]);return(0,i.useEffect)((()=>{n.refreshData()}),[n]),(0,i.useEffect)((()=>{t||o||n.dispose$()}),[t,o,n]),(0,r.jsx)(r.Fragment,{children:t&&(null==e?void 0:e.map(((e,t)=>(0,r.jsx)(Ae,{handleCloseCard:s,index:t,projectInfo:e},e.projectID))))})},Ie=(0,T.default)("div",{target:"ew8lpw50"})((({showTop:e,bottom:t=0,theme:{direction:o}})=>[(0,B.mp)({direction:o,end:"24px"}),{position:"fixed",bottom:`${t}px`,zIndex:7,display:"flex",flexDirection:"column",alignItems:"flex-end",marginBottom:"8px",transform:e?"none":"translateY(40px)",transition:"all 400ms cubic-bezier(0.65, 0, 0.35, 1)"}]),"label:DivBottomContainer;"),Ee=(0,i.memo)((function({pageType:e}){const{isInProductHoldout:t}=(0,v.Vv)(),{isInVideoFeedRedesign:o}=(0,v.bq)(),u=(0,h.E)(),{isJustWatchedEnabled:f}=(0,v.Kg)(),{user:w}=(0,g.L)((0,x.W)((()=>["user"]),[])),{isMobile:S}=(0,g.L)((0,m.U)((()=>["isMobile"]),[])),{isCookieBannerShowing:j}=(0,s.P)(_.b),k=(0,b.si)(),[C,P]=(0,i.useState)(!1),[L,A]=(0,i.useState)(!1),[D,I]=(0,i.useState)(0),[E,T]=(0,i.useState)(!1),{shouldShowSurvey:B}=(0,q.uU)(),{pathname:M}=(0,n.useLocation)(),O=(0,l._g)((()=>{P(0!==(0,d.hY)())}),[],200),{removeShortcutPop:F}=(0,v.gR)(),R=!L&&5!==e&&![b.RD.SurveyEntrance,b.RD.LiveSurvey].includes(k.currentType)&&!F,W=f&&(0,c.cj)(M);(0,i.useEffect)((()=>{a.f.getVarWithCb("tiktok_web",null,(e=>{1===(null==e?void 0:e.can_split_videos)&&T(!0)}))}),[]),(0,i.useEffect)((()=>{var e;if(!j)return void I(0);const t=document.querySelector("div[class*=DivCookieBannerContainer]"),o=null!==(e=null==t?void 0:t.offsetHeight)&&void 0!==e?e:0;I(o)}),[j]),(0,i.useEffect)((()=>{if(!o)return window.addEventListener("scroll",O),()=>{window.removeEventListener("scroll",O)};P(!0)}),[O,o]);const $=(0,i.useCallback)((()=>{A(!0)}),[]),N=(0,i.useCallback)((()=>{T(!1)}),[]);return(0,r.jsxs)(Ie,{showTop:!t||C,bottom:D,children:[R&&(0,r.jsx)(y.S,{onClose:$}),w&&!S&&E&&(0,r.jsx)(De,{handleCloseWindow:N}),B&&(0,r.jsx)(V,{}),u&&(0,r.jsx)(p,{}),W?null:(0,r.jsx)(z,{}),!t||o||W?null:(0,r.jsx)(J,{})]})}))}}]);