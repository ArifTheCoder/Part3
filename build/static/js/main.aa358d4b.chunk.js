(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(42)},22:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),l=n.n(r),u=(n(22),n(11)),i=n(12),s=n(14),c=n(13),m=n(15),d=n(2),h=n.n(d),p=function(e){return o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,e.name),o.a.createElement("td",null,e.phone),o.a.createElement("td",null,o.a.createElement(w,{id:e.id}))))},w=function(e){return o.a.createElement("button",{onClick:function(){window.confirm("Do you really want to delete?")&&(h.a.delete("http://localhost:3001/persons/".concat(e.id)).then(function(e){console.log("Deleted")}),window.location.reload())}},"poista")},b=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).addPerson=function(e){if(e.preventDefault(),n.state.persons.filter(function(e){return e.name===n.state.newName}).length>0)alert("Person already exists!");else{var t={name:n.state.newName,number:n.state.newNumber};h.a.post("http://localhost:3001/persons",t).then(function(e){n.setState({persons:n.state.persons.concat(e.data),newName:"",newNumber:""})})}},n.handlePersonName=function(e){n.setState({newName:e.target.value})},n.handlePhoneNumber=function(e){n.setState({newNumber:e.target.value})},n.state={persons:[{name:"",number:""}],newName:"",newNumber:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://localhost:3001/persons").then(function(t){e.setState({persons:t.data})})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Puhelinluettelo"),o.a.createElement("form",{onSubmit:this.addPerson},o.a.createElement("div",null,"nimi: ",o.a.createElement("input",{value:this.state.newName,onChange:this.handlePersonName}),o.a.createElement("br",null),"numero: ",o.a.createElement("input",{value:this.state.newNumber,onChange:this.handlePhoneNumber})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"lis\xe4\xe4"))),o.a.createElement("h2",null,"Numerot"),o.a.createElement("div",null,o.a.createElement("table",null,this.state.persons.map(function(e){return o.a.createElement(p,{key:e.name,name:e.name,phone:e.number,id:e.id})}))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.aa358d4b.chunk.js.map