import ReactDOM from 'react-dom/client';

import Multi, { BoaNoite } from './componentes/Multiplos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Multi.BoaTarde nome="Ana" />
    <BoaNoite nome="Bia" />
  </div>
);
