
import { useState } from "react";
import Tabela from "../tabela/tabela";

const Tabs1 = () => {
	const [activeButton,setActiveButton]=useState('simple1')
	return (
	<div style={{margin:100}}class="six columns">
		<h5>Serviços</h5>
		<dl class="tabs">
			<dd class={activeButton==='simple1'?'active':''}><a onClick={()=>{setActiveButton('simple1')}} href="#simple1">Escova</a></dd>
			<dd class={activeButton==='simple2'?'active':''}><a onClick={()=>{setActiveButton('simple2')}} href="#simple2">Manicure</a></dd>
			<dd class={activeButton==='simple3'?'active':''}><a onClick={()=>{setActiveButton('simple3')}} href="#simple3">Pedicure</a></dd>
			<dd class={activeButton==='simple4'?'active':''}><a onClick={()=>{setActiveButton('simple4')}} href="#simple4">Depilação</a></dd>
			<dd class={activeButton==='simple5'?'active':''}><a onClick={()=>{setActiveButton('simple5')}} href="#simple5">Sombrancelha</a></dd>
		</dl>
		<ul class="tabs-content">
			<li class="active" id="simple1Tab"></li>
			{activeButton==='simple1'&&(<Tabela param = "simple1" />)}
			{activeButton==='simple2'&&(<Tabela param = "simple2" />)}
			{activeButton==='simple3'&&(<Tabela param = "simple3" />)}
			{activeButton==='simple4'&&(<Tabela param = "simple4" />)}
			{activeButton==='simple5'&&(<Tabela param = "simple5" />)}
			<li  id="simple2Tab">This is simple tab 2's content. Now you see it! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et non ex maxima parte de tota iudicabis? Item de contrariis, a quibus ad genera formasque generum.</li>
			<li id="simple3Tab">This is simple tab 3's content. It's, you know...okay. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et non ex maxima parte de tota iudicabis? Item de contrariis, a quibus ad genera formasque generum.</li>
		</ul>
	</div>


)}


export default Tabs1;
