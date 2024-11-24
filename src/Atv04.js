import React from 'react';
import { Link } from 'react-router-dom';
import BarraDeFerramentas from './componentes2/Toolbar';
import Gallery from './componentes2/Gallery';
import Counter from './componentes2/Counter';
import Form from './componentes2/Form';
import Form2 from './componentes2/Form2';
import Form3 from './componentes2/Form3';
import List2 from './componentes2/List2';
import ShapeEditor from './componentes2/ShapeEditor';
import CounterList from './componentes2/CounterList';
import List3 from './componentes2/List3';
import List4 from './componentes2/List4';
import BucketList from './componentes2/BucketList';
import MovingDot from './componentes2/MovingDot';
import './Atv04.css';

function Atv04() {
  return (
    <div className="container">
      <h2>Atividade 04</h2>
      <BarraDeFerramentas
        aoReproduzirFilme={() => alert('Reproduzindo filme!')}
        aoEnviarImagem={() => alert('Enviando imagem!')}
      />
      <Gallery />
      <Counter />
      <Form />
      <Form2 />
      <Form3 />
      <List2 />
      <List3 />
      <List4 />
      <ShapeEditor />
      <CounterList />
      <BucketList />
      <MovingDot />
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Atv04;