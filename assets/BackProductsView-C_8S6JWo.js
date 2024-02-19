import{a as $}from"./axios-L6U4YIEh.js";import{p as E,g as V,o as n,c as d,a as t,j as h,v as f,u as s,F as M,h as D,q as N,d as C,t as k,k as x,m as U,f as P,b as w}from"./index-PbkXoai0.js";import{M as A}from"./bootstrap.esm-TTjMTX3M.js";const T={class:"modal-dialog modal-xl"},z={class:"modal-content border-0"},F={class:"modal-header bg-dark text-white"},G={id:"productModalLabel",class:"modal-title"},j={key:0},q={key:1},S=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),W={class:"modal-body"},H={class:"row"},J={class:"col-sm-4"},K={class:"mb-2"},O={class:"mb-3"},Q=t("label",{for:"imageUrl",class:"form-label"}," 輸入圖片網址 ",-1),R=["src"],X=t("h3",null,"新增更多圖片",-1),Y=["for"],Z=["onUpdate:modelValue","id"],tt=["src"],et={key:0},st={key:1},ot={key:1},lt={class:"col-sm-8"},at={class:"mb-3"},nt=t("label",{for:"title",class:"form-label"},"標題",-1),dt={class:"row"},it={class:"mb-3 col-md-6"},ct=t("label",{for:"category",class:"form-label"},"分類",-1),rt={class:"mb-3 col-md-6"},ut=t("label",{for:"unit",class:"form-label"},"單位",-1),mt={class:"row"},pt={class:"mb-3 col-md-6"},_t=t("label",{for:"origin_price",class:"form-label"},"原價",-1),bt={class:"mb-3 col-md-6"},ht=t("label",{for:"price",class:"form-label"},"售價",-1),gt=t("hr",null,null,-1),vt={class:"mb-3"},ft=t("label",{for:"description",class:"form-label"},"產品描述",-1),yt={class:"mb-3"},kt=t("label",{for:"content",class:"form-label"},"說明內容",-1),$t={class:"mb-3"},Pt={class:"form-check"},Mt=t("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),xt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),L="https://ec-course-api.hexschool.io/v2/api/aca101139/admin",Ut={__name:"ProductModal",props:["status","tempProduct"],emits:["emitProductModal","get-data"],setup(y,{emit:g}){let i=null,e={};const p=y,u=g;let _=null;const m=()=>{p.status==="new"?$.post(`${L}/product`,{data:e}).then(r=>{alert(r.data.message),i.hide(),u("get-data")}).catch(r=>alert(r.response.data.message)):p.status==="edit"&&$.put(`${L}/product/${e.id}`,{data:e}).then(r=>{alert(r.data.message),i.hide(),u("get-data")}).catch(r=>alert(r.response.data.message))},c=()=>{e.value.imagesUrl=[],e.value.imagesUrl.push("")};return E(p,(r,o)=>{e=r.tempProduct}),V(()=>{_=new A(document.getElementById("productModal"),{keyboard:!1}),i=_,u("emitProductModal",_),e=p.tempProduct}),(r,o)=>(n(),d("div",null,[t("div",null,[t("div",{id:"productModal",ref_key:"productModal",ref:_,class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},[t("div",T,[t("div",z,[t("div",F,[t("h5",G,[y.status.value==="new"?(n(),d("span",j,"新增產品")):(n(),d("span",q,"編輯產品"))]),S]),t("div",W,[t("div",H,[t("div",J,[t("div",K,[t("div",O,[Q,h(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":o[0]||(o[0]=l=>s(e).imageUrl=l)},null,512),[[f,s(e).imageUrl]])]),t("img",{class:"img-fluid",src:s(e).imageUrl,alt:"主要圖片"},null,8,R)]),X,Array.isArray(s(e).imagesUrl)?(n(),d(M,{key:0},[(n(!0),d(M,null,D(s(e).imagesUrl,(l,a)=>(n(),d("div",{key:l+a,class:"mb-3"},[t("label",{for:l+a,class:"form-label"}," 更多圖片網址 ",8,Y),h(t("input",{type:"text","onUpdate:modelValue":b=>s(e).imagesUrl[a]=b,id:l+a,class:"form-control"},null,8,Z),[[f,s(e).imagesUrl[a]]]),t("img",{src:s(e).imagesUrl[a],class:"img-fluid"},null,8,tt)]))),128)),!s(e).imagesUrl.length||s(e).imagesUrl[s(e).imagesUrl.length-1]?(n(),d("div",et,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:o[1]||(o[1]=l=>s(e).imagesUrl.push(""))}," 新增圖片 ")])):(n(),d("div",st,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:o[2]||(o[2]=l=>s(e).imagesUrl.pop())}," 刪除圖片 ")]))],64)):(n(),d("div",ot,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:c}," 新增圖片 ")]))]),t("div",lt,[t("div",at,[nt,h(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":o[3]||(o[3]=l=>s(e).title=l)},null,512),[[f,s(e).title]])]),t("div",dt,[t("div",it,[ct,h(t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":o[4]||(o[4]=l=>s(e).category=l)},null,512),[[f,s(e).category]])]),t("div",rt,[ut,h(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":o[5]||(o[5]=l=>s(e).unit=l)},null,512),[[f,s(e).unit]])])]),t("div",mt,[t("div",pt,[_t,h(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":o[6]||(o[6]=l=>s(e).origin_price=l)},null,512),[[f,s(e).origin_price,void 0,{number:!0}]])]),t("div",bt,[ht,h(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":o[7]||(o[7]=l=>s(e).price=l)},null,512),[[f,s(e).price,void 0,{number:!0}]])])]),gt,t("div",vt,[ft,h(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":o[8]||(o[8]=l=>s(e).description=l)},null,512),[[f,s(e).description]])]),t("div",yt,[kt,h(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":o[9]||(o[9]=l=>s(e).content=l)},null,512),[[f,s(e).content]])]),t("div",$t,[t("div",Pt,[h(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":o[10]||(o[10]=l=>s(e).is_enabled=l)},null,512),[[N,s(e).is_enabled]]),Mt])])])])]),t("div",{class:"modal-footer"},[xt,t("button",{type:"button",class:"btn btn-primary",onClick:m}," 確認 ")])])])],512)]),C(" `, ")]))}},wt={class:"modal-dialog"},Ct={class:"modal-content border-0"},Vt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Dt={class:"modal-body"},Lt={class:"text-danger"},Bt={class:"modal-footer"},Et=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),At="https://ec-course-api.hexschool.io/v2/api/aca101139/admin",It={__name:"DelProductModal",props:["tempProduct"],emits:["get-data","emitDelProductModal"],setup(y,{emit:g}){const i=y,e=g;let p=null,u=null;const _=()=>{$.delete(`${At}/product/${i.tempProduct.id}`).then(m=>{alert(m.data.message),u.hide(),e("get-data")}).catch(m=>alert(m))};return V(()=>{p=new A(document.getElementById("delProductModal"),{keyboard:!1}),u=p,e("emitDelProductModal",p)}),(m,c)=>(n(),d("div",null,[t("div",{id:"delProductModal",ref_key:"delProductModal",ref:p,class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},[t("div",wt,[t("div",Ct,[Vt,t("div",Dt,[C(" 是否刪除 "),t("strong",Lt,k(y.tempProduct.title),1),C(" 商品(刪除後將無法恢復)。 ")]),t("div",Bt,[Et,t("button",{type:"button",class:"btn btn-danger",onClick:c[0]||(c[0]=r=>_(m.product))}," 確認刪除 ")])])])],512)]))}},Nt={class:"page"},Tt={"aria-label":"Page navigation example"},zt={class:"pagination"},Ft=t("span",{"aria-hidden":"true"},"«",-1),Gt=[Ft],jt={key:0,class:"page-link"},qt=["onClick"],St=t("span",{"aria-hidden":"true"},"»",-1),Wt=[St],Ht={__name:"PaginationComponent",props:["pages"],emits:["emit-pages"],setup(y,{emit:g}){let i=0;const e=y,p=g,u=_=>{p("emit-pages",_)};return E(e,(_,m)=>{i=_.pages}),(_,m)=>(n(),d("div",null,[t("div",Nt,[t("nav",Tt,[t("ul",zt,[t("li",{class:x(["page-item",{disabled:s(i).current_page===1}])},[t("a",{class:"page-link","aria-label":"Previous",onClick:m[0]||(m[0]=U(c=>u(s(i).current_page-1),["prevent"]))},Gt)],2),(n(!0),d(M,null,D(s(i).total_pages,(c,r)=>(n(),d("li",{key:r,class:x(["page-item",{active:c===s(i).current_page}])},[c===s(i).current_page?(n(),d("span",jt,k(c),1)):(n(),d("a",{key:1,class:"page-link",onClick:U(o=>u(c),["prevent"])},k(c),9,qt))],2))),128)),t("li",{class:x(["page-item",{disabled:s(i).current_page===s(i).total_pages}])},[t("a",{class:"page-link","aria-label":"Next",onClick:m[1]||(m[1]=U(c=>u(s(i).current_page+1),["prevent"]))},Wt)],2)])])])]))}},Jt={class:"container"},Kt={class:"text-end mt-4"},Ot={class:"table mt-4"},Qt=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"120"},"編輯")])],-1),Rt={class:"text-end"},Xt={class:"text-end"},Yt={key:0,class:"text-success"},Zt={key:1},te={class:"btn-group"},ee=["onClick"],se=["onClick"],B="https://ec-course-api.hexschool.io/v2",oe="aca101139",de={__name:"BackProductsView",setup(y){let g=null,i=null;const e=P(!1),p=P([]),u=P({imagesUrl:[]}),_=P({}),m=()=>{$.post(`${B}/api/user/check`).then(()=>{c()}).catch(a=>{alert(a.data.message),window.location="index.html"})},c=(a=1)=>{$.get(`${B}/api/${oe}/admin/products?page=${a}`).then(b=>{p.value=b.data.products,_.value=b.data.pagination}).catch(b=>alert(b.response.data.message))},r=(a,b)=>{a==="new"?(u.value={imagesUrl:[]},e.value="new",g.show()):a==="edit"?(u.value={...b},e.value="edit",g.show()):a==="delete"&&(u.value={...b},i.show())},o=a=>{g=a},l=a=>{i=a};return V(()=>{const a=document.cookie.replace(/(?:(?:^|.*;\s*)WillyToken\s*=\s*([^;]*).*$)|^.*$/,"$1");$.defaults.headers.common.Authorization=a,m()}),(a,b)=>(n(),d("div",null,[t("div",Jt,[t("div",Kt,[t("button",{class:"btn btn-primary",onClick:b[0]||(b[0]=v=>r("new"))}," 建立新的產品 ")]),t("table",Ot,[Qt,t("tbody",null,[(n(!0),d(M,null,D(p.value,v=>(n(),d("tr",{key:v.id},[t("td",null,k(v.category),1),t("td",null,k(v.title),1),t("td",Rt,k(v.origin_price),1),t("td",Xt,k(v.price),1),t("td",null,[v.is_enabled?(n(),d("span",Yt,"啟用")):(n(),d("span",Zt,"未啟用"))]),t("td",null,[t("div",te,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:I=>r("edit",v)}," 編輯 ",8,ee),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:I=>r("delete",v)}," 刪除 ",8,se)])])]))),128))])]),w(Ht,{pages:_.value,onEmitPages:c},null,8,["pages"])]),w(Ut,{status:e.value,"temp-product":u.value,onGetData:c,onEmitProductModal:o},null,8,["status","temp-product"]),w(It,{"temp-product":u.value,onGetData:c,onEmitDelProductModal:l},null,8,["temp-product"])]))}};export{de as default};
