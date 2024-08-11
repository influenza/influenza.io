import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM from 'react-dom' instead of 'react-dom/client'
import Cadastro from './App.jsx';
import Equipe from './Equipe.jsx';
import Home from './Home.jsx';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom"; // Use BrowserRouter instead of Router
import Login from './Login.jsx';
import Cadastro2 from './cadastro2.jsx';
import Notfound from './404.jsx';
import Cadastro3 from './cadastro3.jsx';
import { termosuso } from './termosuso.jsx';
import { Tabela } from './Tabela.jsx';
import { TabelaPag } from './Tabelapag.jsx';
import { Dashboard } from './dashboard.jsx';
import Equipe2 from './Equipe2.jsx';
import Equipe3 from './Equipe3.jsx';
import EquipeCon from './Equipecon.jsx';
import Convite from './convite.jsx';
import Metas from './metas.jsx';
import Equipe4 from './Equipe4.jsx';
import { Perfil } from './perfil.jsx';
import { EquipeVisao } from './equipevisao.jsx';
import { Convinteres } from './conviteres.jsx';
import { Listausu } from './listafunc.jsx';
import Banimento from './banimento.jsx';
import RedefinirSenha from './redefinirsenha.jsx';
import Forbbiden from './403.jsx';
import Payment from './402.jsx';
import BadRequest from './400.jsx';
import EntrarEqui from './entrarequipe.jsx';
import { Cadastro4 } from './cadastro4.jsx';
import { Teste } from './teste.jsx';
import { HomeEqui } from './homeequi.jsx';
import { Redefinir } from './redefinirdados.jsx';
import Inicio from './inicio.jsx';
import EnviarCon from './EnviarConvite.jsx';
import { HomeTem} from './homeequitem.jsx';
import { Listausupag } from './listausupag.jsx';
ReactDOM.render(
  <Router>
    <Routes>
       <Route path='/' element={<Home />} /> 
      <Route path='/cadastro2' element={<Cadastro2 />} /> 
      <Route path='/cadastro4' element={<Cadastro4 />} /> 
      <Route path='/teste' element={<Teste />} /> 
      <Route path='/inicio' element={<Inicio/>} />
      <Route path='/Enviar' element={<EnviarCon/>} />

      <Route path='/cadastro3/:cifra' element={<Cadastro3 />} /> 
      <Route path='/termosdeuso' element={<termosuso />} /> 
      <Route path='//termosdeuso' element={<termosuso />} /> 
      <Route path='/equipe' element={<Equipe />} /> 
      <Route path='/equipe/convite/:nomequi' element={<EquipeCon />} /> 
      <Route path='/perfil' element={<Perfil/>} /> 
      <Route path='/403' element={<Forbbiden/>} /> 
      <Route path='/402' element={<Payment/>} />
      <Route path='/400' element={<BadRequest/>} /> 
      <Route path='/HomeEqui' element={<HomeEqui/>} />
      <Route path='/Redefinirdados' element={<Redefinir/>} />
      <Route path='/HomeEquiTem' element={<HomeTem/>} />



      
      <Route path='/banimento' element={<Banimento/>} /> 
      <Route path='/registroconvite' element={<Convinteres/>} /> 
      <Route path='/listausuarios' element={<Listausu/>} />
      <Route path='/listausuarios/:pag' element={<Listausupag/>} /> 

      <Route path='/redefinirsenha' element={<RedefinirSenha/>}/> 
      <Route path='/equipe2' element={<Equipe2 />} /> 
      <Route path='/equipe3' element={< Equipe3/>} /> 
      <Route path='/equipe4' element={< Equipe4/>} /> 
      <Route path='/equipevisao' element={<EquipeVisao/>}/>
      <Route path='/tabela' element={<Tabela />} /> 
      <Route path='/tabela/:pag' element={<TabelaPag />} /> 
      <Route path='/dashboard' element={< Dashboard/>} /> 
      <Route path='metas' element={<Metas/>}/>
      <Route path='/404' element={<Notfound />} /> 
      <Route path='*' element={<Notfound/>}/>
      <Route path='/login' element={<Login />} />
      <Route path='/entrarequipe' element={<EntrarEqui />} /> 

    </Routes>
  </Router>,
  document.getElementById('root')
);
