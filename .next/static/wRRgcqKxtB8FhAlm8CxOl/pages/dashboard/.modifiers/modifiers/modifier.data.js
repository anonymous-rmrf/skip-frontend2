(window.webpackJsonp=window.webpackJsonp||[]).push([["3ad2"],{H6rm:function(e,t,a){"use strict";a("MaXC");var n=a("4IMT"),i=a.n(n),l=a("0iUn"),o=a("sLSF"),r=a("MI3g"),s=a("a7VT"),d=a("AT/M"),c=a("Tit0"),u=a("q1tI"),m=a.n(u),f=a("pKkg"),p=function(e){function t(e){var a;return Object(l.default)(this,t),(a=Object(r.default)(this,Object(s.default)(t).call(this,e))).handleClick=a.handleClick.bind(Object(d.default)(a)),a.setFormApi=a.setFormApi.bind(Object(d.default)(a)),a}return Object(c.default)(t,e),Object(o.default)(t,[{key:"handleClick",value:function(){this.props.onSubmit(this.formAPi.getState())}},{key:"setFormApi",value:function(e){this.formAPi=e}},{key:"render",value:function(){var e;return e=this.props.prefilledValues?this.props.prefilledValues:{},m.a.createElement("div",{className:"App"},m.a.createElement(f.c,{getApi:this.setFormApi},m.a.createElement("div",{style:{display:"inline-block",marginBottom:15}},m.a.createElement("div",{style:{float:"left",marginRight:8}},m.a.createElement(f.g,{style:{width:195},field:"name",placeholder:"Name",defaultValue:e.name})),m.a.createElement("div",{style:{float:"left",marginRight:8}},m.a.createElement(f.e,{defaultValue:1==e.allowMultiple},m.a.createElement("span",{style:{paddingRight:10}},"allowMultiple"),m.a.createElement(f.d,{value:!0,field:"allowMultiple"},"Yes"),m.a.createElement(f.d,{value:!1,field:"allowMultiple"},"No")))),m.a.createElement("div",{style:{display:"inline-block"}},m.a.createElement(i.a,{style:{float:"left",width:192},onClick:this.props.onCancel},"Cancel"),m.a.createElement(i.a,{style:{float:"left",width:192,marginLeft:15},type:"primary",onClick:this.handleClick},"Save"))))}}]),t}(u.Component);t.a=p},nQpn:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/.modifiers/modifiers/modifier.data",function(){var e=a("y8TV");return{page:e.default||e}}])},y8TV:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),l=(a("zbDu"),a("fEpf")),o=(a("f+nQ"),a("A9gk")),r=(a("MaXC"),a("4IMT")),s=a.n(r),d=a("0iUn"),c=a("sLSF"),u=a("MI3g"),m=a("a7VT"),f=a("AT/M"),p=a("Tit0"),h=a("vYYK"),g=(a("EpBQ"),a("pKkg")),y=function(e){function t(e){var a;return Object(d.default)(this,t),a=Object(u.default)(this,Object(m.default)(t).call(this,e)),Object(h.a)(Object(f.default)(a),"loadModifier",function(){a.props.formData.assignedProduct(a.props.formData.modifierID).then(function(e){var t=[];return e.map(function(e){t.push(e.productunfold)}),a.setState({product:t}),t}).then(function(e){a.setState({isLoaded:!0})}).catch(function(e){return console.log(e)})}),a.state={product:[],isLoaded:!1},a.handleClick=a.handleClick.bind(Object(f.default)(a)),a.setFormApi=a.setFormApi.bind(Object(f.default)(a)),a}return Object(p.default)(t,e),Object(c.default)(t,[{key:"componentDidMount",value:function(){this.loadModifier()}},{key:"handleClick",value:function(){this.props.onSubmit(this.formAPi.getState())}},{key:"setFormApi",value:function(e){this.formAPi=e,this.loadModifier()}},{key:"handleChange",value:function(e){console.log(e)}},{key:"render",value:function(){var e={container:{marginBottom:"20px"},heading:{marginBottom:"2px"},text:{marginBottom:"5px"},removeBtn:{fontSize:"10px",height:"16px",width:"28px",marginRight:"10px"}};return i.a.createElement("div",{className:"App"},i.a.createElement("div",{style:e.container},i.a.createElement("h2",{style:e.heading},"Products Assigned"),this.state.isLoaded?i.a.createElement("div",null,this.state.product.map(function(t){return i.a.createElement("p",{style:e.text},i.a.createElement(l.a,{icon:"close",style:e.removeBtn}),"     ",t.name)})):null),i.a.createElement(g.c,{getApi:this.setFormApi},i.a.createElement(g.f,{field:"assignedTo",mode:"multiple",option:this.props.formData.productData,style:{marginBottom:15,width:"50%"},onChange:this.handleChange})),i.a.createElement("div",{style:{display:"inline-block"}},i.a.createElement(s.a,{style:{float:"left",width:192},onClick:this.props.onCancel},"Cancel"),i.a.createElement(s.a,{style:{float:"left",width:192,marginLeft:15},type:"primary",onClick:this.handleClick},"Save")))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(d.default)(this,t),(a=Object(u.default)(this,Object(m.default)(t).call(this,e))).state={mitem:[],isLoaded:!1},a.handleClick=a.handleClick.bind(Object(f.default)(a)),a.setFormApi=a.setFormApi.bind(Object(f.default)(a)),a}return Object(p.default)(t,e),Object(c.default)(t,[{key:"componentDidMount",value:function(){}},{key:"handleClick",value:function(){this.props.onSubmit(this.formAPi.getState(),function(){})}},{key:"setFormApi",value:function(e){this.formAPi=e}},{key:"render",value:function(){var e={container:{marginBottom:"20px"},heading:{marginBottom:"2px"},text:{marginBottom:"5px"},removeBtn:{fontSize:"10px",height:"16px",width:"28px",marginRight:"10px"}};return i.a.createElement("div",{className:"App"},i.a.createElement("div",{style:e.container},i.a.createElement("h2",{style:e.heading},"Mitems Assigned"),this.state.isLoaded?i.a.createElement("div",null,this.state.mitem.map(function(t){return i.a.createElement("p",{style:e.text},i.a.createElement(l.a,{icon:"close",style:e.removeBtn}),"     ",t.name)})):null),i.a.createElement(g.c,{getApi:this.setFormApi},i.a.createElement("div",{style:{marginBottom:15}},i.a.createElement(g.f,{field:"assignedTo",style:{width:250},option:this.props.formData.mitemData}))),i.a.createElement("div",{style:{display:"inline-block"}},i.a.createElement(s.a,{style:{float:"left",width:192},onClick:this.props.onCancel},"Cancel"),i.a.createElement(s.a,{style:{float:"left",width:192,marginLeft:15},type:"primary",onClick:this.handleClick},"Save")))}}]),t}(n.Component),b=a("H6rm");a.d(t,"itemData",function(){return v});var v={cascaderData:{placeholder:"All Categories",optionArray:["Biscuits","Chips","Drinks","Fries","Breads"]},productColumns:[{title:"SET NAME",dataIndex:"name",key:"product"},{title:"Assign Products",dataIndex:"",key:"assignProduct",render:function(e){return i.a.createElement(o.a,{form:y,title:"Assign Products",buttonValue:"Assign Products",formData:e.assignProduct,assignedData:{},onSubmit:function(t,a){return e.assignProduct.handleAssignProduct(t,e.modifierID,a)}})}},{title:"Assign Modifier Item",dataIndex:"",key:"assignmitems",render:function(e){return i.a.createElement(o.a,{form:E,title:"Assign Modifier Items",buttonValue:"Assign MItems",formData:e.assignMitem,assignedData:{},onSubmit:function(t,a){return e.assignMitem.handleAssignMitem(t,e.modifierID,a)}})}},{title:"allowMultiple",dataIndex:"allowMultiple",key:"allowMultiple"},{title:"Edit",key:"edit",dataIndex:"",render:function(e){return i.a.createElement("span",null,i.a.createElement(o.a,{visible:!0,form:b.a,prefilledValues:e,formData:e.selectData,title:"Edit Modifier",isTableModal:!0,onSubmit:function(t,a){return e.handleFeatures.handleEdit(t,e.modifierID,a)}}))}},{title:"",dataIndex:"",render:function(e){return i.a.createElement("span",null,i.a.createElement(l.a,{onSubmit:function(){return e.handleFeatures.handleDelete(e.modifierID)},modalTitle:"Sure you want to delete ?",icon:"delete",shape:"round",size:"small",style:{backgroundColor:"#F84D65",color:"white"}}))}}]}}},[["nQpn","5d41","9da1","ad9d"]]]);