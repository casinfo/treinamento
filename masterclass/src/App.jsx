import React from 'react'

import './App.css'

import Card from "./components/layout/Card";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from "./components/basicos/ComFilhos";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIF';


export default (props) =>
    <div className="App">
       <Card titulo="#06 - Condicional com IF"> 
            <CondicionalComIf numero={10}>             
            </CondicionalComIf>
        </Card>

        <Card titulo="#05 - Condicional 1"> 
            <Condicional numero={11}>             
            </Condicional>
        </Card>

       <Card titulo="#04 - Repetição"> 
            <Repeticao>
            </Repeticao>
        </Card>

        <Card titulo="#03 - Componente com Filhos"> 
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Davi</li>
                <li>Arthur</li>
                <li>Heitor</li>
            </ul>
        </ComFilhos>
        </Card>

        <Card titulo="#02 - Componente com Parâmetro"> 
            <ComParametro titulo="Esse é o título" 
                        subtitulo="Esse é o subtitulo"></ComParametro>
            <ComParametro titulo="OPA" 
                        subtitulo="Epa"></ComParametro>
        </Card>

        <Card titulo="#01 - Primeiro Componente"> 
            <Primeiro></Primeiro>
        </Card>
    </div>