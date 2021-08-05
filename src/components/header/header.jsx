
import { current } from 'immer';
import React from 'react';


import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) =>(

    <div class="row">
	<div class="headerlogo four columns">
		<div class="logo">
			
			<a href="index.html">
			<h1>Studio Azeleb</h1>
			</a>

			
			
			
		</div>
	</div>
	<div class="headermenu eight columns noleftmarg">
		<nav id="nav-wrap">
		<ul id="main-menu" class="nav-bar sf-menu">
			<li class="current">
			<a href="/">Menu</a>
			<ul>
				<a href="index2.html"> </a>
			</ul>
			</li>
			<li>
			<a href="#">Nossos Produtos</a>
			<ul>
				<li><a href="portofolio2.html">Esmaltes</a></li>
				<li><a href="portofolio3.html">Shampoo</a></li>
				<li><a href="portofolio4.html">Escovas</a></li>
				<li><a href="portofoliodetail.html">Morning care</a></li>
			</ul>
			</li>
			<li>
			<a href="#">Blog Salão</a>
			<ul>
				<li><a href="blogpage1.html">Blog Diário</a></li>
				<li><a href="blogpage2.html">Blog Semanal  </a></li>
				<li><a href="blogpage3.html">Blog Mensal</a></li>
				<li><a href="blogsinglepost.html">Nossas redes</a></li>
			</ul>
			</li>
			<li>
			<a href="#">Sobre nós</a>
			<ul>
				<li><a href="about.html">Sobre nós</a></li>
				<li><a href="services.html">Serviços</a></li>
			</ul>
			</li>

			{ 

				currentUser ? (
				<li>
					<a href="/" onClick={() => auth.signOut()}> Logout</a>
				</li>
				
				):(
				<li>
				<a href="#">Login</a>
				<ul>
					<li><a href = "login-cliente">Cliente</a></li>
					<li><a href = "login-funcionario">Funcionário</a></li>
					<li><a href = "login-administracao">Administração</a></li>
				</ul>
				</li>
				)

			}
				{ 

		currentUser ? (

			<li>
			<a href="/unidade">Reserva</a>
			</li>

		):(
			null
		)

		}

		</ul>
		</nav>
	</div>
</div>
)

export default Header;
