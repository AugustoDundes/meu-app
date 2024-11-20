import React from 'react';
import { Link } from 'react-router-dom';
import Perfil from './componentes/Perfil';
import Galeria from './componentes/Galeria';
import StatusMessage from './componentes/StatusDaMensagem';
import Lista from './componentes/List';
import DoubleValue from './componentes/Dobro';
import './Atv03.css';

function Atv03() {
    return (
      <div className="container">
        <h2>Atividade 03</h2>
        <Perfil name="Marcos" imageUrl="https://cdn3d.iconscout.com/3d/premium/thumb/avatar-homem-afro-latino-10971671-8779383.png?f=webp" />
        <Galeria />
        <StatusMessage isOnline={true} />
        <Lista items={['Componente lista', 'Professora: Carol', 'Fatec Prudente']} />
        <DoubleValue value={5} />
        <Link to="/">Voltar</Link>
      </div>
    );
  }


export default Atv03;
