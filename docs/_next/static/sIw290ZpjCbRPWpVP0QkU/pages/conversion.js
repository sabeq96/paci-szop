(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{DDkn:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/conversion",function(){return t("MCiF")}])},MCiF:function(e,a,t){"use strict";t.r(a);var i=t("ODXe"),n=t("q1tI"),o=t.n(n),l=t("YFqc"),s=t.n(l),m=t("Ji2X"),r=t("ofer"),c=t("hlFM"),d=t("tRbT"),p=t("RHQs"),u=t("kKik"),h=t("r9w1"),g=t("SWq5"),f=t("Z3vd"),y=t("OrM8"),w=t("iuMA"),b=o.a.createElement,v={wheel:[{id:"24",name:'24"',price:123.6},{id:"26",name:'26"',price:123.6},{id:"27.5",name:'27.5"',price:123.6},{id:"29",name:'29"',price:123.6}],power:[{id:"2000W",name:"2000W / 48V",price:125.14},{id:"3000W",name:"3000W / 60V",price:325.12}],capacity:{"2000W":[{id:"18000",name:"18000mAh",price:325.12},{id:"21000",name:"21000mAh",price:325.12},{id:"24000",name:"24000mAh",price:325.12}],"3000W":[{id:"24000",name:"24000mAh",price:325.12},{id:"27000",name:"27000mAh",price:325.12}]},gallery:[{img:"https://components101.com/sites/default/files/components/How-to-choose-a-Battery.jpg",title:"battery1",cols:2},{img:"https://images-na.ssl-images-amazon.com/images/I/71P28O72LPL._AC_SX425_.jpg",title:"battery2",cols:1},{img:"https://images-na.ssl-images-amazon.com/images/I/71P28O72LPL._AC_SX425_.jpg",title:"battery3",cols:1},{img:"https://components101.com/sites/default/files/components/How-to-choose-a-Battery.jpg",title:"battery4",cols:2}]};a.default=function(){var e=o.a.useState(""),a=Object(i.a)(e,2),t=a[0],n=a[1],l=o.a.useState(""),k=Object(i.a)(l,2),j=k[0],W=k[1],S=o.a.useState("none"),_=Object(i.a)(S,2),x=_[0],O=_[1],P=o.a.useState(""),C=Object(i.a)(P,2),I=C[0],z=C[1],A=o.a.useState(""),L=Object(i.a)(A,2),M=L[0],B=L[1],X=o.a.useState(""),D=Object(i.a)(X,2),T=D[0],E=D[1],F=o.a.useState(),H=Object(i.a)(F,2),q=H[0],J=H[1];return b(m.a,{maxWidth:"lg"},b(c.a,{my:4},b(d.a,{container:!0,spacing:2,alignItems:"baseline"},b(d.a,{item:!0},b(s.a,{href:"/"},b(r.a,{variant:"h1",component:"h1",gutterBottom:!0},"Pacipl shop"))),b(d.a,{item:!0},b(y.a,{href:"/",color:"secondary"},"Przejd\u017a do strony g\u0142\xf3wnej")),b(d.a,{item:!0},b(y.a,{href:"/contact",color:"secondary"},"Przejd\u017a do kontaktu"))),b(c.a,{my:6},b(r.a,{variant:"h2",component:"h2",gutterBottom:!0},"Konwersje"),b(r.a,{component:"p"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),b(c.a,{my:3},b(p.a,{cellHeight:220,cols:3},v.gallery.map((function(e,a){return b(u.a,{key:a,cols:e.cols||1},b("img",{src:e.img,alt:e.title}))})))),b(c.a,{my:12},b(r.a,{variant:"h4",component:"h3",gutterBottom:!0},"Z\u0142\xf3\u017c zam\xf3wienie"),b(c.a,{my:3},b("form",{action:"https://mailthis.to/sdawid96@gmail.com",method:"POST"},b("input",{type:"hidden",name:"_after",value:"http://localhost:3000"}),b(d.a,{container:!0,spacing:3,direction:"column"},b(d.a,{item:!0,xs:12,md:6,lg:3},b(g.a,{id:"wheel",value:t,onChange:n,label:"Wielko\u015b\u0107 ko\u0142a",options:v.wheel})),b(d.a,{item:!0,xs:12,md:6,lg:3},b(g.a,{id:"power",value:j,onChange:function(e){W(e),O("")},label:"Moc",options:v.power})),b(d.a,{item:!0,xs:12,md:6,lg:3},b(g.a,{id:"capacity",value:x,onChange:O,label:"Pojemno\u015b\u0107 bateri",options:v.capacity[j]||[{id:"none",name:"Brak",price:0}]})),b(d.a,{item:!0,xs:12,md:6,lg:3},b(r.a,{style:{fontWeight:"bold"}},"Suma: ",((v.wheel.find((function(e){return e.id===t}))||{}).price||0)+((v.power.find((function(e){return e.id===j}))||{}).price||0)+(((v.capacity[j]||[]).find((function(e){return e.id===x}))||{}).price||0),"z\u0142")),b(d.a,{item:!0,xs:12,md:6,lg:3},b(h.a,{id:"fullname",name:"fullname",label:"Imi\u0119 i nazwisko",variant:"outlined",onChange:function(e){z(e.target.value)},value:I,fullWidth:!0})),b(d.a,{item:!0,xs:12,md:6,lg:3},b(h.a,{id:"email",name:"email",label:"Email",variant:"outlined",onChange:function(e){B(e.target.value)},value:M,fullWidth:!0})),b(d.a,{item:!0,xs:12,md:6,lg:3},b(h.a,{id:"phone",name:"phone",label:"Telefon",variant:"outlined",onChange:function(e){E(e.target.value)},value:T,fullWidth:!0})),b(d.a,{item:!0,xs:12,md:8},b(h.a,{id:"description",name:"description",label:"Szczeg\xf3\u0142y",variant:"outlined",onChange:function(e){J(e.target.value)},value:q,fullWidth:!0,multiline:!0,rows:6})),b(d.a,{item:!0,xs:12,md:8},b(f.a,{type:"submit",variant:"contained",color:"primary"},"Wy\u015blij"))))))),b(w.a,null)))}}},[["DDkn",0,2,1,3,4,5]]]);