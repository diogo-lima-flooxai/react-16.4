import ReactDOM from 'react-dom/client';

import Saudacao from './componentes/Saudacao';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Saudacao tipo="Bom dia" nome="Ana" />
  </div>
);
