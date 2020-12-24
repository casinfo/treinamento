import React from "react";

import "./App.css";

import Card from "./components/layout/Card";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from "./components/basicos/ComFilhos";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIF";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";

export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#10 - Contador" color="#D0C91F">
                <Contador passo={10} valor={100}></Contador>
            </Card>
            <Card titulo="#09 - Input" color="#F07818">
                <Input></Input>
            </Card>
            <Card titulo="#08 - Comunicação Indireta" color="#000">
                <Super></Super>
            </Card>

            <Card titulo="#07 - Comunicação Direta" color="#59C4C5">
                <Pai sobrenome="Freitas"></Pai>
            </Card>

            <Card titulo="#06 - Condicional com IF v2" color="#FA6900">
                <CondicionalComIf numero={10}></CondicionalComIf>
            </Card>

            <Card titulo="#05 - Condicional v1" color="#E94C6F">
                <Condicional numero={11}></Condicional>
            </Card>

            <Card titulo="#04 - Repetição" color="#008BBA">
                <Repeticao></Repeticao>
            </Card>

            <Card titulo="#03 - Componente com Filhos" color="#F07818">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Davi</li>
                        <li>Arthur</li>
                        <li>Heitor</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="#02 - Componente com Parâmetro" color="#FF85CB">
                <ComParametro
                    titulo="Esse é o título"
                    subtitulo="Esse é o subtitulo"
                ></ComParametro>
                <ComParametro titulo="OPA" subtitulo="Epa"></ComParametro>
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#92B06A">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);
