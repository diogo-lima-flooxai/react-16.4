import React from 'react';

// Função que retorna um array de elementos filhos com as propriedades passadas
export function childrenWithProps(props) {
  return React.Children.map(props.children, (child) => {
    return React.cloneElement(child, {
      ...props,
      ...child.props,
    });
  });
}