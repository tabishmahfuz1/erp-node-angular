(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{dLN2:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var a=u("NcP4"),i=u("xYTU"),r=u("pMnS"),s=u("iInd"),b=u("SVse");class o{constructor(l){this.itemService=l}ngOnInit(){this.items$=this.itemService.getItems()}}var c=u("lJxs"),d=u("lTCR"),m=u.n(d),p=(u("t4lL"),u("nbgS"));const g=m.a`
			        query getItem($id: Int!) {
			          getItem(id: $id) {
			            id
			            itemName
			            itemPrice
			            itemCost
			            isActive
			            qtyOnHand
			          }
			        }
			      `,h=m.a`
		        mutation saveItem($item: ItemInput) {
		          saveItem(item: $item) {
		            id
		            itemName
		            itemPrice
		            itemCost
		            isActive
		            qtyOnHand
		          }
		        }
		      `,f=m.a`
		        query item {
		          item {
		            id
		            itemName
		            itemPrice
		            itemCost
		            isActive
		            qtyOnHand
		          }
		        }
		      `,v=m.a`
		        query getItemStockDetails($id: Int!) {
		          getItemStockDetails(itemId: $id) {
		            id
		            type
				    date
				    quantity
				    remarks
				    itemId
		          }
		        }
		      `;let E=(()=>{class l{constructor(l){this.apollo=l}getItems(){return this.apollo.watchQuery({query:f}).valueChanges.pipe(Object(c.a)(l=>l.data.item))}getItemStockDetails(l){return this.apollo.watchQuery({query:v,variables:{id:l}}).valueChanges.pipe(Object(c.a)(l=>l.data.getItemStockDetails))}getItem(l){return this.apollo.watchQuery({query:g,variables:{id:l}}).valueChanges.pipe(Object(c.a)(l=>l.data.getItem))}saveItem(l){return this.apollo.mutate({mutation:h,variables:{item:l},refetchQueries:[{query:f,variables:{repoFullName:"apollographql/apollo-client"}}]}).pipe(Object(c.a)(l=>l.data.saveItem))}}return l.ngInjectableDef=t.Sb({factory:function(){return new l(t.Tb(p.b))},token:l,providedIn:"root"}),l})();var C=t.qb({encapsulation:0,styles:[[""]],data:{}});function y(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,15,"tr",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Mb(2,null,["",""])),(l()(),t.sb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Mb(4,null,["",""])),(l()(),t.sb(5,0,null,null,1,"td",[["class","text-right"]],null,null,null,null,null)),(l()(),t.Mb(6,null,["",""])),(l()(),t.sb(7,0,null,null,1,"td",[["class","text-right"]],null,null,null,null,null)),(l()(),t.Mb(8,null,["",""])),(l()(),t.sb(9,0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Mb(10,null,["",""])),(l()(),t.sb(11,0,null,null,4,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.sb(12,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Eb(l,13).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.rb(13,671744,null,0,s.p,[s.m,s.a,b.j],{routerLink:[0,"routerLink"]},null),(l()(),t.sb(14,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["edit"]))],function(l,n){l(n,13,0,"/items/"+n.context.$implicit.id)},function(l,n){l(n,2,0,n.context.$implicit.id),l(n,4,0,n.context.$implicit.itemName),l(n,6,0,n.context.$implicit.itemPrice),l(n,8,0,n.context.$implicit.itemCost),l(n,10,0,n.context.$implicit.qtyOnHand||0),l(n,12,0,t.Eb(n,13).target,t.Eb(n,13).href)})}function w(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,21,"div",[["class","main-content"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,20,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),t.sb(2,0,null,null,19,"div",[["class","d-flex flex-container justify-content-center"]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,18,"table",[["class","table table-bordered table-striped mr-5"]],null,null,null,null,null)),(l()(),t.sb(4,0,null,null,13,"thead",[],null,null,null,null,null)),(l()(),t.sb(5,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),t.sb(6,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["ID"])),(l()(),t.sb(8,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Name"])),(l()(),t.sb(10,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Price"])),(l()(),t.sb(12,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Cost"])),(l()(),t.sb(14,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Stock"])),(l()(),t.sb(16,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Action"])),(l()(),t.sb(18,0,null,null,3,"tbody",[],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,2,null,y)),t.rb(20,278528,null,0,b.l,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null),t.Gb(131072,b.b,[t.h])],function(l,n){var u=n.component;l(n,20,0,t.Nb(n,20,0,t.Eb(n,21).transform(u.items$)))},null)}function k(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,1,"app-item-list",[],null,null,null,w,C)),t.rb(1,114688,null,0,o,[E],null,null)],function(l,n){l(n,1,0)},null)}var I=t.ob("app-item-list",o,k,{},{},[]),x=u("8rEH"),M=u("zQui"),O=u("IP0z"),_=u("Xd0L"),D=u("cUpR"),S=u("/HVE"),q=t.qb({encapsulation:2,styles:["mat-table{display:block}mat-header-row{min-height:56px}mat-footer-row,mat-row{min-height:48px}mat-footer-row,mat-header-row,mat-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-footer-row::after,mat-header-row::after,mat-row::after{display:inline-block;min-height:inherit;content:''}mat-cell:first-of-type,mat-footer-cell:first-of-type,mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-footer-cell:last-of-type,mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-footer-cell,mat-header-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-footer-row,tr.mat-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}td.mat-cell,td.mat-footer-cell,th.mat-header-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type,th.mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type,[dir=rtl] th.mat-header-cell:first-of-type{padding-left:0;padding-right:24px}td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type,th.mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type,[dir=rtl] th.mat-header-cell:last-of-type{padding-right:0;padding-left:24px}"],data:{}});function J(l){return t.Ob(0,[t.Kb(402653184,1,{_rowOutlet:0}),t.Kb(402653184,2,{_headerRowOutlet:0}),t.Kb(402653184,3,{_footerRowOutlet:0}),t.Db(null,0),(l()(),t.sb(4,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(5,16384,[[2,4]],0,M.t,[t.O,t.k],null,null),(l()(),t.sb(6,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(7,16384,[[1,4]],0,M.r,[t.O,t.k],null,null),(l()(),t.sb(8,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(9,16384,[[3,4]],0,M.s,[t.O,t.k],null,null)],null,null)}var K=t.qb({encapsulation:2,styles:[],data:{}});function L(l){return t.Ob(0,[(l()(),t.sb(0,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(1,147456,null,0,M.c,[t.O],null,null)],null,null)}var j=t.qb({encapsulation:2,styles:[],data:{}});function T(l){return t.Ob(0,[(l()(),t.sb(0,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(1,147456,null,0,M.c,[t.O],null,null)],null,null)}var A=u("Rlre"),N=u("rWV4"),P=u("omvX"),H=u("s7LF"),$=u("Azqq"),R=u("HsOI"),F=u("JjoW"),U=u("hOhj"),V=u("5GAg"),Q=u("MlvX");class z{constructor(l,n,u,t){this.route=l,this.itemService=n,this._snackBar=u,this.router=t,this.isNewItem=!0,this.displayedColumns=["type","quantity","remarks"],this.item={id:null,itemName:"",itemCost:0,itemPrice:0,qtyOnHand:0,isActive:!0},l.params.subscribe(l=>{this.id=parseInt(l.id),this.item.id=this.id}),this.id&&this.fetchItem()}ngOnInit(){}fetchItem(){this.isNewItem=!1,this.itemService.getItem(this.id).subscribe(l=>this.item=l),this.fetchItemStockDetails()}fetchItemStockDetails(){this.itemService.getItemStockDetails(this.id).subscribe(l=>{this.stockDetails=l,console.log(this.stockDetails)})}saveItem(l){this.itemService.saveItem(this.item).subscribe(l=>{this.item=l,this._snackBar.open("Item Saved","",{duration:3e3}),this.isNewItem&&this.router.navigate(["/items/"+this.item.id])})}}var B=u("dFDH"),G=t.qb({encapsulation:0,styles:[[""]],data:{}});function X(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.rb(1,16384,null,0,x.e,[M.d,t.k],null,null),(l()(),t.Mb(-1,null,[" Type "]))],null,null)}function W(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.rb(1,16384,null,0,x.a,[M.d,t.k],null,null),(l()(),t.Mb(2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.$implicit.type)})}function Y(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.rb(1,16384,null,0,x.e,[M.d,t.k],null,null),(l()(),t.Mb(-1,null,[" Quantity "]))],null,null)}function Z(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.rb(1,16384,null,0,x.a,[M.d,t.k],null,null),(l()(),t.Mb(2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.$implicit.quantity)})}function ll(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),t.rb(1,16384,null,0,x.e,[M.d,t.k],null,null),(l()(),t.Mb(-1,null,[" Remarks "]))],null,null)}function nl(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),t.rb(1,16384,null,0,x.a,[M.d,t.k],null,null),(l()(),t.Mb(2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.$implicit.remarks)})}function ul(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,2,"tr",[["class","mat-header-row"],["mat-header-row",""],["role","row"]],null,null,null,L,K)),t.Jb(6144,null,M.k,null,[x.g]),t.rb(2,49152,null,0,x.g,[],null,null)],null,null)}function tl(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,2,"tr",[["class","mat-row"],["mat-row",""],["role","row"]],null,null,null,T,j)),t.Jb(6144,null,M.m,null,[x.i]),t.rb(2,49152,null,0,x.i,[],null,null)],null,null)}function el(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,143,"div",[["class","main-content"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,142,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),t.sb(2,0,null,null,141,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,5,"div",[["class","card-header card-header-warning card-header-icon"]],null,null,null,null,null)),(l()(),t.sb(4,0,null,null,2,"div",[["class","card-icon"]],null,null,null,null,null)),(l()(),t.sb(5,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["content_copy"])),(l()(),t.sb(7,0,null,null,1,"p",[["class","card-title"]],null,null,null,null,null)),(l()(),t.Mb(8,null,[""," Item"])),(l()(),t.sb(9,0,null,null,131,"div",[["class","card-body pl-5"]],null,null,null,null,null)),(l()(),t.sb(10,0,null,null,130,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],null,null,A.c,A.b)),t.rb(11,3325952,null,1,N.f,[t.k,t.h,[2,N.a],[2,P.a]],null,null),t.Kb(603979776,1,{_tabs:1}),(l()(),t.sb(13,16777216,null,null,65,"mat-tab",[["label","General Details"]],null,null,null,A.d,A.a)),t.rb(14,770048,[[1,4]],2,N.c,[t.O],{textLabel:[0,"textLabel"]},null),t.Kb(603979776,2,{templateLabel:0}),t.Kb(335544320,3,{_explicitContent:0}),(l()(),t.sb(17,0,null,0,61,"div",[["class","p-3"]],null,null,null,null,null)),(l()(),t.sb(18,0,null,null,19,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.sb(19,0,null,null,8,"div",[["class","form-group p-2 w-25"]],null,null,null,null,null)),(l()(),t.sb(20,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Item Name"])),(l()(),t.sb(22,0,null,null,5,"input",[["class","form-control"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==t.Eb(l,23)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Eb(l,23).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Eb(l,23)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Eb(l,23)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(a.item.itemName=u)&&e),e},null,null)),t.rb(23,16384,null,0,H.c,[t.D,t.k,[2,H.a]],null,null),t.Jb(1024,null,H.h,function(l){return[l]},[H.c]),t.rb(25,671744,null,0,H.m,[[8,null],[8,null],[8,null],[6,H.h]],{model:[0,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,H.i,null,[H.m]),t.rb(27,16384,null,0,H.j,[[4,H.i]],null,null),(l()(),t.sb(28,0,null,null,9,"div",[["class","form-group p-2 w-25"]],null,null,null,null,null)),(l()(),t.sb(29,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Cost"])),(l()(),t.sb(31,0,null,null,6,"input",[["class","form-control"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==t.Eb(l,32)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Eb(l,32).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Eb(l,32)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Eb(l,32)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.Eb(l,33).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t.Eb(l,33).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Eb(l,33).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(a.item.itemCost=u)&&e),e},null,null)),t.rb(32,16384,null,0,H.c,[t.D,t.k,[2,H.a]],null,null),t.rb(33,16384,null,0,H.n,[t.D,t.k],null,null),t.Jb(1024,null,H.h,function(l,n){return[l,n]},[H.c,H.n]),t.rb(35,671744,null,0,H.m,[[8,null],[8,null],[8,null],[6,H.h]],{model:[0,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,H.i,null,[H.m]),t.rb(37,16384,null,0,H.j,[[4,H.i]],null,null),(l()(),t.sb(38,0,null,null,29,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.sb(39,0,null,null,9,"div",[["class","form-group p-2 w-25"]],null,null,null,null,null)),(l()(),t.sb(40,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Selling Price"])),(l()(),t.sb(42,0,null,null,6,"input",[["class","form-control"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==t.Eb(l,43)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Eb(l,43).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Eb(l,43)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Eb(l,43)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.Eb(l,44).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t.Eb(l,44).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Eb(l,44).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(a.item.itemPrice=u)&&e),e},null,null)),t.rb(43,16384,null,0,H.c,[t.D,t.k,[2,H.a]],null,null),t.rb(44,16384,null,0,H.n,[t.D,t.k],null,null),t.Jb(1024,null,H.h,function(l,n){return[l,n]},[H.c,H.n]),t.rb(46,671744,null,0,H.m,[[8,null],[8,null],[8,null],[6,H.h]],{model:[0,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,H.i,null,[H.m]),t.rb(48,16384,null,0,H.j,[[4,H.i]],null,null),(l()(),t.sb(49,0,null,null,18,"div",[["class","form-group p-2 w-25"]],null,null,null,null,null)),(l()(),t.sb(50,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Status"])),(l()(),t.sb(52,0,null,null,15,"mat-select",[["class","form-control mat-select"],["role","listbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null],[2,"mat-select-empty",null]],[[null,"ngModelChange"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,n,u){var e=!0,a=l.component;return"keydown"===n&&(e=!1!==t.Eb(l,57)._handleKeydown(u)&&e),"focus"===n&&(e=!1!==t.Eb(l,57)._onFocus()&&e),"blur"===n&&(e=!1!==t.Eb(l,57)._onBlur()&&e),"ngModelChange"===n&&(e=!1!==(a.item.isActive=u)&&e),e},$.b,$.a)),t.Jb(6144,null,R.c,null,[F.c]),t.rb(54,671744,null,0,H.m,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,H.i,null,[H.m]),t.rb(56,16384,null,0,H.j,[[4,H.i]],null,null),t.rb(57,2080768,null,3,F.c,[U.d,t.h,t.y,_.b,t.k,[2,O.b],[2,H.l],[2,H.f],[2,R.b],[6,H.i],[8,null],F.a,V.g],{value:[0,"value"]},null),t.Kb(603979776,4,{options:1}),t.Kb(603979776,5,{optionGroups:1}),t.Kb(603979776,6,{customTrigger:0}),t.Jb(2048,null,_.j,null,[F.c]),(l()(),t.sb(62,0,null,1,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Eb(l,63)._selectViaInteraction()&&e),"keydown"===n&&(e=!1!==t.Eb(l,63)._handleKeydown(u)&&e),e},Q.b,Q.a)),t.rb(63,8568832,[[4,4]],0,_.p,[t.k,t.h,[2,_.j],[2,_.o]],{value:[0,"value"]},null),(l()(),t.Mb(-1,0,["Active"])),(l()(),t.sb(65,0,null,1,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Eb(l,66)._selectViaInteraction()&&e),"keydown"===n&&(e=!1!==t.Eb(l,66)._handleKeydown(u)&&e),e},Q.b,Q.a)),t.rb(66,8568832,[[4,4]],0,_.p,[t.k,t.h,[2,_.j],[2,_.o]],{value:[0,"value"]},null),(l()(),t.Mb(-1,0,["Disabled"])),(l()(),t.sb(68,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.sb(69,0,null,null,9,"div",[["class","form-group p-2 w-25"]],null,null,null,null,null)),(l()(),t.sb(70,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Qty On Hand"])),(l()(),t.sb(72,0,null,null,6,"input",[["class","form-control"],["type","number"]],[[8,"readOnly",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==t.Eb(l,73)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Eb(l,73).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Eb(l,73)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Eb(l,73)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.Eb(l,74).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t.Eb(l,74).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Eb(l,74).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(a.item.qtyOnHand=u)&&e),e},null,null)),t.rb(73,16384,null,0,H.c,[t.D,t.k,[2,H.a]],null,null),t.rb(74,16384,null,0,H.n,[t.D,t.k],null,null),t.Jb(1024,null,H.h,function(l,n){return[l,n]},[H.c,H.n]),t.rb(76,671744,null,0,H.m,[[8,null],[8,null],[8,null],[6,H.h]],{model:[0,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,H.i,null,[H.m]),t.rb(78,16384,null,0,H.j,[[4,H.i]],null,null),(l()(),t.sb(79,16777216,null,null,55,"mat-tab",[["label","Stock Details"]],null,null,null,A.d,A.a)),t.rb(80,770048,[[1,4]],2,N.c,[t.O],{textLabel:[0,"textLabel"]},null),t.Kb(603979776,7,{templateLabel:0}),t.Kb(335544320,8,{_explicitContent:0}),(l()(),t.sb(83,0,null,0,51,"table",[["class","w-100 mat-table"],["mat-table",""]],null,null,null,J,q)),t.Jb(6144,null,M.o,null,[x.k]),t.rb(85,2342912,null,4,x.k,[t.r,t.h,t.k,[8,null],[2,O.b],b.d,S.a],{dataSource:[0,"dataSource"]},null),t.Kb(603979776,9,{_contentColumnDefs:1}),t.Kb(603979776,10,{_contentRowDefs:1}),t.Kb(603979776,11,{_contentHeaderRowDefs:1}),t.Kb(603979776,12,{_contentFooterRowDefs:1}),(l()(),t.sb(90,0,null,null,12,null,null,null,null,null,null,null)),t.Jb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[x.c]),t.rb(92,16384,null,3,x.c,[],{name:[0,"name"]},null),t.Kb(603979776,13,{cell:0}),t.Kb(603979776,14,{headerCell:0}),t.Kb(603979776,15,{footerCell:0}),t.Jb(2048,[[9,4]],M.d,null,[x.c]),(l()(),t.hb(0,null,null,2,null,X)),t.rb(98,16384,null,0,x.f,[t.L],null,null),t.Jb(2048,[[14,4]],M.j,null,[x.f]),(l()(),t.hb(0,null,null,2,null,W)),t.rb(101,16384,null,0,x.b,[t.L],null,null),t.Jb(2048,[[13,4]],M.b,null,[x.b]),(l()(),t.sb(103,0,null,null,12,null,null,null,null,null,null,null)),t.Jb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[x.c]),t.rb(105,16384,null,3,x.c,[],{name:[0,"name"]},null),t.Kb(603979776,16,{cell:0}),t.Kb(603979776,17,{headerCell:0}),t.Kb(603979776,18,{footerCell:0}),t.Jb(2048,[[9,4]],M.d,null,[x.c]),(l()(),t.hb(0,null,null,2,null,Y)),t.rb(111,16384,null,0,x.f,[t.L],null,null),t.Jb(2048,[[17,4]],M.j,null,[x.f]),(l()(),t.hb(0,null,null,2,null,Z)),t.rb(114,16384,null,0,x.b,[t.L],null,null),t.Jb(2048,[[16,4]],M.b,null,[x.b]),(l()(),t.sb(116,0,null,null,12,null,null,null,null,null,null,null)),t.Jb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[x.c]),t.rb(118,16384,null,3,x.c,[],{name:[0,"name"]},null),t.Kb(603979776,19,{cell:0}),t.Kb(603979776,20,{headerCell:0}),t.Kb(603979776,21,{footerCell:0}),t.Jb(2048,[[9,4]],M.d,null,[x.c]),(l()(),t.hb(0,null,null,2,null,ll)),t.rb(124,16384,null,0,x.f,[t.L],null,null),t.Jb(2048,[[20,4]],M.j,null,[x.f]),(l()(),t.hb(0,null,null,2,null,nl)),t.rb(127,16384,null,0,x.b,[t.L],null,null),t.Jb(2048,[[19,4]],M.b,null,[x.b]),(l()(),t.hb(0,null,null,2,null,ul)),t.rb(130,540672,null,0,x.h,[t.L,t.r],{columns:[0,"columns"]},null),t.Jb(2048,[[11,4]],M.l,null,[x.h]),(l()(),t.hb(0,null,null,2,null,tl)),t.rb(133,540672,null,0,x.j,[t.L,t.r],{columns:[0,"columns"]},null),t.Jb(2048,[[10,4]],M.n,null,[x.j]),(l()(),t.sb(135,16777216,null,null,5,"mat-tab",[["label","Movement Details"]],null,null,null,A.d,A.a)),t.rb(136,770048,[[1,4]],2,N.c,[t.O],{textLabel:[0,"textLabel"]},null),t.Kb(603979776,22,{templateLabel:0}),t.Kb(335544320,23,{_explicitContent:0}),(l()(),t.sb(139,0,null,0,1,"div",[["class","p-3"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,[" TO BE IMPLEMENTED "])),(l()(),t.sb(141,0,null,null,2,"div",[["class","card-footer justify-content-center"]],null,null,null,null,null)),(l()(),t.sb(142,0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.saveItem(u)&&t),t},null,null)),(l()(),t.Mb(-1,null,[" Save "]))],function(l,n){var u=n.component;l(n,14,0,"General Details"),l(n,25,0,u.item.itemName),l(n,35,0,u.item.itemCost),l(n,46,0,u.item.itemPrice),l(n,54,0,u.item.isActive),l(n,57,0,u.item.isActive),l(n,63,0,!0),l(n,66,0,!1),l(n,76,0,u.item.qtyOnHand),l(n,80,0,"Stock Details"),l(n,85,0,u.stockDetails),l(n,92,0,"type"),l(n,105,0,"quantity"),l(n,118,0,"remarks"),l(n,130,0,u.displayedColumns),l(n,133,0,u.displayedColumns),l(n,136,0,"Movement Details")},function(l,n){var u=n.component;l(n,8,0,u.isNewItem?"New":"Edit"),l(n,10,0,t.Eb(n,11).dynamicHeight,"below"===t.Eb(n,11).headerPosition),l(n,22,0,t.Eb(n,27).ngClassUntouched,t.Eb(n,27).ngClassTouched,t.Eb(n,27).ngClassPristine,t.Eb(n,27).ngClassDirty,t.Eb(n,27).ngClassValid,t.Eb(n,27).ngClassInvalid,t.Eb(n,27).ngClassPending),l(n,31,0,t.Eb(n,37).ngClassUntouched,t.Eb(n,37).ngClassTouched,t.Eb(n,37).ngClassPristine,t.Eb(n,37).ngClassDirty,t.Eb(n,37).ngClassValid,t.Eb(n,37).ngClassInvalid,t.Eb(n,37).ngClassPending),l(n,42,0,t.Eb(n,48).ngClassUntouched,t.Eb(n,48).ngClassTouched,t.Eb(n,48).ngClassPristine,t.Eb(n,48).ngClassDirty,t.Eb(n,48).ngClassValid,t.Eb(n,48).ngClassInvalid,t.Eb(n,48).ngClassPending),l(n,52,1,[t.Eb(n,56).ngClassUntouched,t.Eb(n,56).ngClassTouched,t.Eb(n,56).ngClassPristine,t.Eb(n,56).ngClassDirty,t.Eb(n,56).ngClassValid,t.Eb(n,56).ngClassInvalid,t.Eb(n,56).ngClassPending,t.Eb(n,57).id,t.Eb(n,57).tabIndex,t.Eb(n,57)._getAriaLabel(),t.Eb(n,57)._getAriaLabelledby(),t.Eb(n,57).required.toString(),t.Eb(n,57).disabled.toString(),t.Eb(n,57).errorState,t.Eb(n,57).panelOpen?t.Eb(n,57)._optionIds:null,t.Eb(n,57).multiple,t.Eb(n,57)._ariaDescribedby||null,t.Eb(n,57)._getAriaActiveDescendant(),t.Eb(n,57).disabled,t.Eb(n,57).errorState,t.Eb(n,57).required,t.Eb(n,57).empty]),l(n,62,0,t.Eb(n,63)._getTabIndex(),t.Eb(n,63).selected,t.Eb(n,63).multiple,t.Eb(n,63).active,t.Eb(n,63).id,t.Eb(n,63)._getAriaSelected(),t.Eb(n,63).disabled.toString(),t.Eb(n,63).disabled),l(n,65,0,t.Eb(n,66)._getTabIndex(),t.Eb(n,66).selected,t.Eb(n,66).multiple,t.Eb(n,66).active,t.Eb(n,66).id,t.Eb(n,66)._getAriaSelected(),t.Eb(n,66).disabled.toString(),t.Eb(n,66).disabled),l(n,72,0,!u.isNewItem,t.Eb(n,78).ngClassUntouched,t.Eb(n,78).ngClassTouched,t.Eb(n,78).ngClassPristine,t.Eb(n,78).ngClassDirty,t.Eb(n,78).ngClassValid,t.Eb(n,78).ngClassInvalid,t.Eb(n,78).ngClassPending)})}function al(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,1,"app-item-detail",[],null,null,null,el,G)),t.rb(1,114688,null,0,z,[s.a,E,B.b,s.m],null,null)],function(l,n){l(n,1,0)},null)}var il=t.ob("app-item-detail",z,al,{},{},[]),rl=u("POq0"),sl=u("QQfA"),bl=u("Mz6y"),ol=u("Fwaw"),cl=u("oapL"),dl=u("ZwOa"),ml=u("zMNK");u.d(n,"InventoryModuleNgFactory",function(){return pl});var pl=t.pb(e,[],function(l){return t.Bb([t.Cb(512,t.j,t.ab,[[8,[a.a,i.a,i.b,r.a,I,il]],[3,t.j],t.w]),t.Cb(4608,b.o,b.n,[t.t,[2,b.A]]),t.Cb(4608,H.r,H.r,[]),t.Cb(4608,rl.c,rl.c,[]),t.Cb(4608,_.b,_.b,[]),t.Cb(4608,sl.c,sl.c,[sl.i,sl.e,t.j,sl.h,sl.f,t.q,t.y,b.d,O.b,[2,b.i]]),t.Cb(5120,sl.j,sl.k,[sl.c]),t.Cb(5120,F.a,F.b,[sl.c]),t.Cb(5120,bl.b,bl.c,[sl.c]),t.Cb(4608,D.e,_.c,[[2,_.g],[2,_.l]]),t.Cb(1073742336,b.c,b.c,[]),t.Cb(1073742336,H.q,H.q,[]),t.Cb(1073742336,H.g,H.g,[]),t.Cb(1073742336,O.a,O.a,[]),t.Cb(1073742336,_.l,_.l,[[2,_.d],[2,D.f]]),t.Cb(1073742336,S.b,S.b,[]),t.Cb(1073742336,_.u,_.u,[]),t.Cb(1073742336,ol.c,ol.c,[]),t.Cb(1073742336,rl.d,rl.d,[]),t.Cb(1073742336,R.d,R.d,[]),t.Cb(1073742336,cl.c,cl.c,[]),t.Cb(1073742336,dl.b,dl.b,[]),t.Cb(1073742336,ml.g,ml.g,[]),t.Cb(1073742336,U.b,U.b,[]),t.Cb(1073742336,sl.g,sl.g,[]),t.Cb(1073742336,_.s,_.s,[]),t.Cb(1073742336,_.q,_.q,[]),t.Cb(1073742336,F.d,F.d,[]),t.Cb(1073742336,V.a,V.a,[]),t.Cb(1073742336,bl.e,bl.e,[]),t.Cb(1073742336,M.p,M.p,[]),t.Cb(1073742336,x.l,x.l,[]),t.Cb(1073742336,N.j,N.j,[]),t.Cb(1073742336,B.e,B.e,[]),t.Cb(1073742336,s.q,s.q,[[2,s.v],[2,s.m]]),t.Cb(1073742336,e,e,[]),t.Cb(1024,s.k,function(){return[[{path:"",component:o},{path:"new",component:z},{path:":id",component:z}]]},[])])})}}]);