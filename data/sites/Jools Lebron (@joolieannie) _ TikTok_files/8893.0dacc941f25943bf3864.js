"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8893],{73998:(e,t,o)=>{o.d(t,{_K:()=>f,z3:()=>g});var i=o(79490),n=o(27066),a=o(19086),r=o(63244),l=o(10442),s=o(63697),d=o(54974),c=o(71111),u=o(76e3),p=function(e,t,o,i){return new(o||(o=Promise))((function(n,a){function r(e){try{s(i.next(e))}catch(e){a(e)}}function l(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,l)}s((i=i.apply(e,t||[])).next())}))};const m=(0,c.atom)(l.hA);m.debugLabel="collectionCandidateAtom";const{useAtomService:f,useServiceState:h,useServiceDispatchers:g}=(0,u.i)(m,((e,t)=>({getCandidates(){return p(this,void 0,void 0,(function*(){const{user:o}=(0,r.x)();if(o){t(m,(e=>Object.assign(Object.assign({},e),{loading:!0})));try{const r=(0,s.bv)(e,m,{secUid:o.secUid}),l=yield function(e){return p(this,void 0,void 0,(function*(){return i.hd.get("/api/collection/candidate/item_list/",{query:e,baseUrlType:2,headers:{[n.nk]:i.hd.csrfToken}})}))}(Object.assign(Object.assign({},r),{appId:a.xE,scene:155}));(0,d.Tj)(e,t,m,"collection",l,{disableReportMore:!0})}catch(e){(0,d.e_)(t,m)}}}))},resetCandidates(){t(m,Object.assign({},l.hA))}})))},22588:(e,t,o)=>{o.d(t,{l:()=>T});var i=o(2787),n=o(40099),a=o(79056),r=o(89787),l=o(6874),s=o(47218),d=o(17565),c=o(53013),u=o(97934),p=o(22653);const m=(0,i.Y)(u.C,{size:72}),f=(0,n.memo)((function({listInfo:{statusCode:e},detailInfo:{reset:t,loadMore:o}}){const a=(0,n.useCallback)((()=>{t(),o()}),[t,o]);return(0,i.Y)(p.QW,{statusCode:e,iconElement:m,onRefresh:a})})),h=(0,n.memo)((function(){const e=(0,l.s)(),t=(0,n.useMemo)((()=>({title:e("collectionsProfilePage_collectionPage_emptyModal_header"),desc:e("collectionsProfilePage_collectionPage_emptyModal_desc")})),[e]);return(0,i.Y)(p.LL,{iconElement:m,emptyTip:t})}));var g=o(50032),v=o(61076),b=o(66641),y=o(77395);const x=(0,n.memo)((function({detailInfo:{loadMore:e},listInfo:{list:t,loading:o,hasMore:a,statusCode:r},listKey:l}){const s=(0,n.useRef)(null),d=(0,n.useCallback)((()=>{return t=this,i=void 0,l=function*(){!o&&a&&0===r&&(yield e())},new((n=void 0)||(n=Promise))((function(e,o){function a(e){try{s(l.next(e))}catch(e){o(e)}}function r(e){try{s(l.throw(e))}catch(e){o(e)}}function s(t){var o;t.done?e(t.value):(o=t.value,o instanceof n?o:new n((function(e){e(o)}))).then(a,r)}s((l=l.apply(t,i||[])).next())}));var t,i,n,l}),[o,a,r,e]);return(0,g.O9)({onHitBottom:d,elemRef:s,bottomThreshold:200}),(0,i.Y)(y.Gi,{ref:s,children:(0,i.Y)(v.Z,{pageType:121,itemList:[],itemListKey:l,loading:o,onHitBottom:()=>{},children:t.map((e=>(0,i.Y)(b.l,{itemId:e},e)))})})}));function _(){return(0,i.Y)(y.Gi,{children:(0,i.Y)(c.C,{isUser:!0})})}const C=(0,n.memo)((function({loadMore:e,reset:t,listState:o}){const a=(0,n.useMemo)((()=>({statusCode:o.statusCode,loadMore:e,reset:t})),[o.statusCode,e,t]);return(0,n.useEffect)((()=>{0===o.statusCode&&o.hasMore&&0===o.list.length&&e()}),[e,o.hasMore,o.list.length,o.statusCode]),(0,i.Y)(d.s6,{Error:f,Empty:h,List:x,Skeleton:_,detailInfo:a,listInfo:o,listKey:"collection"})}));var w=o(87895),k=o(73998),I=o(98151),S=o(24737);const P=I.default.div`
  padding: 0 12px 24px 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  & > div:first-of-type {
    height: 475px;
    width: ${456}px;

    ${S.ph} {
      grid-gap: ${12}px;
      grid-template-columns: repeat(${3}, 1fr) !important;

      // could be improved with container query once supported
      div[data-e2e='collection-selector-footer'] {
        padding: 67px 8px 8px;

        & > svg:first-of-type {
          width: 13px;
          height: 13px;
        }

        & > span:first-of-type {
          font-size: 12px;
          line-height: 12px;
        }
      }
    }
  }

  & > button {
    margin: 0 12px;
  }
`,Y=I.default.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  padding: 8px 8px 4px 8px;
  & > .leading {
    width: 88px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  & > .title {
    flex: 1;
    text-align: center;
    font-size: 17px;
    font-weight: 700;
    color: ${e=>e.theme.colors.UIText1};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & > .trailing {
    width: 88px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`,T=(0,n.memo)((function({isFromCreateCollection:e,open:t,onOpenChange:o,onCommit:d,onPrev:c,loading:u}){const p=(0,l.s)(),[m,f]=(0,k._K)((e=>e),s.bN),h=(0,w.Xq)(),g=(0,n.useMemo)((()=>0!==m.list.length||e?0===h.size&&e?(0,i.Y)(r.I05,{variant:"secondary",label:p("live_done"),onClick:d,loading:u}):(0,i.Y)(r.I05,{label:p("collectionsProfilePage_favoritesPage_selectVideosModal_btn2",{d_numOfVideos:h.size}),disabled:0===h.size,onClick:d,loading:u}):(0,i.Y)(r.I05,{variant:"secondary",label:p("Close"),onClick:()=>o(!1),loading:u})),[p,h.size,e,d,u,m.list.length,o]),v=(0,n.useCallback)(((e,t)=>{if(0===h.size||"tux"!==t)return o(e)}),[h.size,o]),b=(0,n.useCallback)((e=>{"Escape"===e.key&&v(!1,"esc")}),[v]);return(0,n.useEffect)((()=>(document.addEventListener("keydown",b,!0),()=>{document.removeEventListener("keydown",b,!0)})),[b]),(0,i.FD)(r.nOL,{width:"large",style:{maxWidth:"480px",zIndex:3001},open:t,onOpenChange:e=>v(e,"tux"),children:[(0,i.FD)(Y,{children:[(0,i.Y)("div",{className:"leading",children:c&&(0,i.Y)(r.PH3,{icon:(0,i.Y)(r.VMf,{autoMirror:!0}),onClick:c})}),(0,i.Y)("div",{className:"title",children:p("collectionsProfilePage_favoritesPage_selectVideosModal_header")}),(0,i.Y)("div",{className:"trailing",children:(0,i.Y)(r.PH3,{"aria-label":"close",icon:(0,i.Y)(a.g,{}),onClick:()=>v(!1,"x")})})]}),(0,i.FD)(P,{children:[(0,i.Y)(C,{listState:m,loadMore:f.getCandidates,reset:f.resetCandidates}),g]})]})}))},59673:(e,t,o)=>{o.d(t,{l:()=>d});var i=o(40099),n=o(15068),a=o(6874),r=o(24642),l=o(33688),s=function(e,t,o,i){return new(o||(o=Promise))((function(n,a){function r(e){try{s(i.next(e))}catch(e){a(e)}}function l(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,l)}s((i=i.apply(e,t||[])).next())}))};function d({onSuccess:e,enterMethod:t,playMode:o}){const d=(0,a.s)(),c=(0,n.useStatusToast)(),[{isFetching:u},p]=(0,l.I)(n.modifyCollectionItemsAtom,{resetStateBeforeDispatch:!0}),m=(0,i.useCallback)((({statusCode:i,collectionId:n,selectedVideosToAdd:a})=>{if(0===i){r.f.sendEvent("add_vids_to_collection",{enter_method:t,play_mode:o});const i=1===a.size?d("collectionsProfilePage_collectionsPage_topSection_addToastSingular"):d("collectionsProfilePage_collectionsPage_topSection_addToastPlural",{d_numOfVideos:a.size});c({success:!0,message:i}),e(n)}else c({success:!1,message:d("Sorry, something wrong with the server, please try again.")})}),[c,d,t,e,o]);return[u,(0,i.useCallback)(((e,t)=>s(this,void 0,void 0,(function*(){t.size>0&&(yield p({collectionId:e,commitIds:[...t].join(",")},(({statusCode:o})=>m({statusCode:o,collectionId:e,selectedVideosToAdd:t}))))}))),[p,m])]}},87895:(e,t,o)=>{o.d(t,{B6:()=>r,Xq:()=>l,fi:()=>d});var i=o(71111),n=o(76e3);const a=(0,i.atom)(new Set),{useAtomService:r,useServiceState:l,useServiceDispatchers:s,getStaticApi:d}=(0,n.i)(a,((e,t)=>({toggle(e){t(a,(t=>{const o=new Set(t);return t.has(e)?o.delete(e):o.add(e),o}))},set(e){t(a,new Set(e))},clear(){t(a,new Set)}})))},66641:(e,t,o)=>{o.d(t,{l:()=>g});var i=o(2787),n=o(40099),a=o(89787),r=o(50453),l=o(7113),s=o(55118),d=o(51617),c=o(96836),u=o(47218),p=o(3846),m=o(38725),f=o(87895),h=o(77395);const g=(0,n.memo)((function({itemId:e,isOverlay:t}){const[o,g]=(0,f.B6)((t=>t.has(e))),v=(0,c.F3)((t=>t[e]),u.bN),{video:{cover:b,zoomCover:y},statsV2:{playCount:x=0}={},desc:_}=(0,n.useMemo)((()=>(0,r.L)(v)),[v]),C=(0,n.useMemo)((()=>({zoomCover:y,cover:b,quality:"480"})),[y,b]),w=(0,l.V1)(v),k=w||!t,I=(0,n.useCallback)((()=>{g.toggle(e)}),[g,e]),S=(0,n.useCallback)((e=>{e.preventDefault(),e.stopPropagation(),I()}),[I]),P=(0,n.useCallback)((e=>{13!==e.keyCode&&32!==e.keyCode||I()}),[I]),Y=(0,s.D1)(null!=x?x:0),{ratio:T}=d.f.compact;return(0,i.Y)(h.xO,{isOverlay:t,onClick:S,onKeyDown:P,children:(0,i.FD)(m.w,{e2eTag:"collection-item",ratio:T,borderRadius:"4px",onKeyDown:P,children:[(0,i.FD)(p.NR,{children:[(0,i.Y)(h.xl,{label:"",checked:o,onChange:I}),k&&(0,i.Y)(h.zj,{video:C,alt:_,hidePhotoIcon:t&&w})]}),!t&&(0,i.FD)(h.xk,{"data-e2e":"collection-selector-footer",children:[(0,i.Y)(a.bt4,{}),(0,i.Y)("span",{children:Y})]})]})})}))},77395:(e,t,o)=>{o.d(t,{Gi:()=>d,xO:()=>p,xk:()=>u,xl:()=>c,zj:()=>m});var i=o(98151),n=o(89787),a=o(57929),r=o(56955),l=o(3846),s=o(16200);const d=i.default.div`
  overflow: auto;

  scroll-behavior: smooth;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`,c=(0,i.default)(n.h$y)`
  position: absolute;
  top: ${8}px;
  inset-inline-end: ${8}px;
  pointer-events: none;
  z-index: 1;

  & > .TUXCheckboxStandalone--circle > .TUXCheckboxStandalone-indicator {
    border-radius: 50%;
    border: 2.26px solid ${e=>e.theme.colors.ConstTextInverse};
  }

  & > .TUXCheckbox-labelContainer {
    display: none;
  }
`,u=(0,i.default)(r.xk)`
  display: flex;
  align-items: center;
  height: unset;
  color: ${e=>e.theme.colors.ConstTextInverse};
  gap: 4px;
  padding: 67px 13px 8px;
  pointer-events: none;

  & > svg:first-of-type {
    width: 18px;
    height: 18px;
  }

  & > span:first-of-type {
    font-size: 16px;
    font-weight: 500;
  }
`,p=(0,i.default)(l.iP,{target:"e18o3lv10"})((({isOverlay:e})=>[e&&{position:"absolute",top:0,zIndex:1,height:"100%",width:"100%",[`${s.h9}`]:{visibility:"hidden"}}]),"label:DivSelectorItemContainer;"),m=(0,i.default)(a.x)`
  clip-path: ${e=>e.hidePhotoIcon?"circle(14px at calc(100% - 20px) 20px)":"none"};
  pointer-events: ${e=>e.hidePhotoIcon?"none":"auto"};
`},53013:(e,t,o)=>{o.d(t,{C:()=>d,p:()=>c});var i=o(2787),n=o(40099),a=o(62209),r=o(63946),l=o(8040);function s({data:{mode:e,aspectRatio:t}}){return(0,i.Y)(l.pQ,{mode:e,aspectRatio:t})}const d=(0,n.memo)((function({mode:e,aspectRatio:t=208/276,isMasonry:o,isUser:d}){const{isInProductHoldout:c}=(0,a.Vv)(),u=!c,p=(0,n.useMemo)((()=>{if(!o)return Array(24).fill(t);const e=[3/4,3/4,4/3,16/9,9/16,9/16,9/16,1];return Array.from({length:24},(()=>e[Math.floor(Math.random()*e.length)]))}),[o,t]),m=o?(0,i.Y)(r.k,{items:p.map((t=>({mode:e,aspectRatio:t}))),render:s}):p.map(((t,o)=>(0,i.Y)(s,{index:o,data:{mode:e,aspectRatio:t}},o)));return(0,i.Y)(l.Ct,{mode:e,isMasonry:o,useLargerGrid:d&&u,children:m})})),c=(0,n.memo)((function({row:e=4,gap:t="18px",radius:o="8px",cardWidth:n="226px",cardHeight:a="302px"}){return(0,i.Y)(l.z_,{children:new Array(e).fill(1).map(((e,t)=>e+t)).map((e=>{return r=e,(0,i.Y)(l.C2,{children:new Array(3).fill(1).map(((e,t)=>e+t)).map((e=>(0,i.Y)(l.Ql,{cardWidth:n,cardHeight:a,gap:t,radius:o},e)))},r);var r}))})}))},8040:(e,t,o)=>{o.d(t,{C2:()=>u,Ct:()=>s,Ql:()=>p,pQ:()=>d,z_:()=>c});var i=o(75431),n=o(98151),a=o(78004),r=o(24737);const l=(0,i.i7)({"0%":{backgroundPositionX:"200%"},"100%":{backgroundPositionX:"-150%"}}),s=r.ph,d=(0,n.default)("div",{target:"e15jf4tc0"})((({theme:e,mode:t,aspectRatio:o=208/276})=>[{borderRadius:"explore"===t?"8px":"4px",position:"relative",width:"100%",paddingTop:100/o+"%",backgroundColor:e.colors.BGPlaceholderDefault,backgroundImage:"linear-gradient(90deg, rgba(22, 24, 35, 0) 0%, rgba(22, 24, 35, .04) 50%, rgba(22, 24, 35, 0) 100%)",backgroundSize:"200% 100%",backgroundRepeat:"no-repeat",animation:`${l} cubic-bezier(0, 0, 1, 1) 1.5s infinite`}]),"label:DivSkeletonCard;"),c=(0,n.default)("div",{target:"e15jf4tc1"})({display:"flex",flexDirection:"column",paddingTop:"20px"},"label:DivSkeletonContainerV1;"),u=(0,n.default)("div",{target:"e15jf4tc2"})({display:"flex"},"label:DivSkeletonRowContainer;"),p=(0,n.default)("div",{target:"e15jf4tc3"})((({theme:e,cardWidth:t,cardHeight:o,gap:i,radius:n})=>[(0,a.mp)({direction:e.direction,marginEnd:i}),{width:t,height:o,borderRadius:n,marginBottom:i,display:"block",float:"left",overflow:"hidden",flex:"0 0 auto",backgroundColor:e.colors.BGPlaceholderDefault,backgroundImage:"linear-gradient(90deg, rgba(22, 24, 35, 0) 0%, rgba(22, 24, 35, .04) 50%, rgba(22, 24, 35, 0) 100%)",backgroundSize:"200% 100%",backgroundRepeat:"no-repeat",animation:`${l} cubic-bezier(0, 0, 1, 1) 1.5s infinite`}]),"label:DivSkeletonCardV1;")},50502:(e,t,o)=>{o.d(t,{H:()=>h});var i=o(2787),n=o(40099),a=o(53873),r=o(7130),l=o(77026),s=o(1905),d=o(24515),c=o(16711),u=o(87407),p=o(34005),m=o(24642),f=o(66569);const h=(0,n.memo)((({isFTC:e,user:t,e2eTag:o,size:h=116,quality:g="Medium"})=>{const{uniqueId:v,secUid:b}=t,y=f.Rg("avatar-stable-url-hook",{user:t}),x=t[`avatar${g}`],[_]=(0,u.useAtom)(r.K),{livePreviewSonAb:C}=(0,l.Ru)(),w=_.isLive&&"v2"!==C&&"v3"!==C,k=(0,s.AL)({user:t,enterMethod:"others_photo"}),I=(0,n.useMemo)((()=>({enter_from_merge:k.enter_from_merge,enter_method:k.enter_method})),[k]),{livePreviewAb:S}=(0,l.$7)(),P="v2"!==S&&"v3"!==S||_.isError;(0,n.useEffect)((()=>{w&&p.mx.handleLiveShow({enter_from_merge:k.enter_from_merge,enter_method:k.enter_method,follow_status:k.follow_status,anchor_id:k.anchor_id,room_id:k.room_id,action_type:k.action_type,previous_page:m.f.commonParams.previous_page})}),[w]);const Y=(0,n.useCallback)((()=>{w&&p.mx.handleRecLivePlay({enter_from_merge:k.enter_from_merge,enter_method:k.enter_method,follow_status:k.follow_status,anchor_id:k.anchor_id,room_id:k.room_id,action_type:k.action_type,previous_page:m.f.commonParams.previous_page})}),[k,w]),T=()=>(0,i.Y)(d.i,{alt:null==y?void 0:y.alt,isShowLive:w,src:x,size:h,needAnimation:P,e2eTag:o,isBiggerBadge:!0});return e?(0,i.Y)(a.A,{width:96,height:96,"data-e2e":"user-avatar"}):w?(0,i.Y)(c.B,{uniqueId:v,secUid:b,teaParams:k,extraQuery:I,onClick:Y,children:T()}):T()}))},2805:(e,t,o)=>{o.d(t,{S:()=>i,t:()=>n}),o(47236);const i=o(20326).A,n=o(47872).A},47872:(e,t,o)=>{o.d(t,{A:()=>c});var i=o(2787),n=o(40099),a=o(62209),r=o(63377),l=o(89787),s=o(24488);const d=(0,n.memo)((0,n.forwardRef)((function(e,t){return(0,i.Y)(s.iS,Object.assign({ref:t,role:"button",label:"",variant:"secondary",leadingIcon:(0,i.Y)(l.aCW,{})},e))}))),c=(0,n.memo)((0,n.forwardRef)((function({embedCode:e,embedType:t,isEmbedDisabled:o,isEmbedBanned:l,uid:s,uniqueId:c,musicId:u,tagId:p,collectionId:m,collectionName:f,shareUrl:h,tagTitle:g,musicTitle:v,poi:b},y){const x=(0,a.WO)(b),_=(0,n.useMemo)((()=>Object.assign({music_id:u,author_id:s,tag_id:p,collection_id:m,collection_name:f},x)),[u,s,p,m,f,x]);return(0,i.Y)(r.f,{ref:y,trigger:(0,i.Y)(d,{}),from:1,mode:1,shareUrl:h,uniqueId:c,musicId:u,musicTitle:v,tagTitle:g,enabled:!0,embedCode:e,embedType:t,isEmbedDisabled:o,isEmbedBanned:l,teaParams:_})})))},20326:(e,t,o)=>{o.d(t,{A:()=>f});var i=o(2787),n=o(40099),a=o(6874),r=o(10825),l=o(62209),s=o(47448),d=o(30239),c=o(77311),u=o(73580),p=o(89787),m=o(24488);const f=(0,n.memo)((0,n.forwardRef)((function({embedCode:e,embedType:t,isEmbedDisabled:o,isEmbedBanned:f,uid:h,uniqueId:g,musicId:v,tagId:b,collectionId:y,collectionName:x,shareUrl:_,tagTitle:C,musicTitle:w,poi:k},I){const S=(0,a.s)(),[P,Y]=(0,n.useState)(!1),T=(0,n.useRef)(null),D=(0,r.XF)(),{expanded:z}=(0,r.kw)(),E=(0,l.WO)(k),M=(0,n.useMemo)((()=>Object.assign({music_id:v,author_id:h,tag_id:b,collection_id:y,collection_name:x},E)),[v,h,b,y,x,E]),A=(0,u.Nj)(c.A);(0,n.useEffect)((()=>{D()}),[D]);const O=(0,n.useCallback)((e=>{Y((t=>((!0===e||void 0===e&&!t)&&A.handleSharePanelShow(Object.assign({share_option_type:z,is_embed_available:o?0:1},M)),null!=e?e:!t)))}),[A,z,o,M]),R=(0,n.useCallback)((e=>{13===e.keyCode||32===e.keyCode?(e.stopPropagation(),e.preventDefault(),O()):27===e.keyCode&&P&&O(!1)}),[O,P]),B=(0,n.useCallback)((e=>{var t;27===e.keyCode&&(e.stopPropagation(),e.preventDefault(),O(),null===(t=T.current)||void 0===t||t.focus())}),[O]);return(0,n.useImperativeHandle)(I,(()=>({show(){var e;null===(e=T.current)||void 0===e||e.focus(),O(!0)}})),[O]),(0,i.Y)(p.Xwo,{open:P,onOpenChange:Y,trigger:(0,i.Y)(m.iS,{role:"button",label:"",variant:"secondary",leadingIcon:(0,i.Y)(p.aCW,{}),onClick:()=>O(),onKeyDown:R,"data-e2e":"share-btn","aria-label":S("webapp_share_btn"),ref:T,tabIndex:0}),placement:"bottom",children:(0,i.Y)(s.o8,{"data-e2e":"share-group",onKeyDown:B,role:"menu",children:(0,i.Y)(d.SY,{from:1,mode:1,url:_,uniqueId:g,musicId:v,musicTitle:w,tagTitle:C,enabled:!0,embedCode:e,embedType:t,isEmbedDisabled:o,isEmbedBanned:f,teaParams:M,onClickShare:()=>Y(!1)})})})})))},24488:(e,t,o)=>{o.d(t,{$7:()=>s,Dx:()=>l,iS:()=>d});var i=o(98151),n=o(78004),a=o(89787),r=o(58302);const l=(0,i.default)("div",{target:"efrkfhz0"})([{position:"relative",display:"flex",flexDirection:"row",alignItems:"center",gap:"12px",marginTop:"20px"}],"label:DivButtonPanelWrapper;"),s=(0,i.default)(a.I05,{target:"efrkfhz1"})((0,n.jJ)({max:r.f5.Small-1,style:{minWidth:"0 !important",width:"40px !important",paddingLeft:"0 !important",paddingRight:"0 !important","& > :first-child":{"& > .TUXButton-label":{display:"none !important"}}}},{min:r.f5.Small,style:{minWidth:"0 !important",width:"fit-content","& > :first-of-type":{"& > .TUXButton-iconContainer":{display:"none !important"},"& > .TUXButton-label":{margin:"unset !important"}}}}),"label:StyledTUXResponsiveButton;"),d=(0,i.default)(a.I05,{target:"efrkfhz2"})({minWidth:"0 !important",width:"40px !important",paddingLeft:"0 !important",paddingRight:"0 !important","& > :first-of-type":{"& > .TUXButton-label":{display:"none !important"}}},"label:StyledTUXIconOnlyButton;")},57938:(e,t,o)=>{o.d(t,{N:()=>n,R:()=>a});var i=o(79490);const n=e=>i.hd.get("/webcast/room/preload_room/",{query:e,baseUrlType:4}),a=e=>i.hd.get("/webcast/room/check_alive/",{query:e,baseUrlType:4})},7130:(e,t,o)=>{o.d(t,{K:()=>r,r:()=>s});var i=o(58632),n=o(71111),a=o(57938);const r=(0,n.atom)({isLive:!1,isError:!1,isBlock:!1}),l=(0,n.atom)({isFatal:!1,isEnd:!1,roomInfo:null}),s=(0,n.atom)((e=>e(l)),((e,t,o)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){try{const e=yield(0,a.N)(o);if(!(null==e?void 0:e.data))throw Error("no data");t(l,{roomInfo:e.data,isFatal:!0,isEnd:!0})}catch(e){t(l,{roomInfo:null,isFatal:!0,isEnd:!0})}}))))}}]);