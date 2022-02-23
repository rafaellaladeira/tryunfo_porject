import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="name">
          Nome da carta:
          <input type="text" id="name" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea type="text" id="description" data-testid="description-input" />
        </label>
        <label htmlFor="attr">
          Atributo:
          <input type="number" id="attr" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2">
          Atributo 2:
          <input type="number" id="attr2" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3">
          Atributo 3:
          <input type="number" id="attr3" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          Imagem da carta:
          <input type="text" id="image" data-testid="image-input" />
        </label>
        <label htmlFor="rare">
          Raridade:
          <select id="rare" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trunfo:
          <input type="checkbox" id="trunfo" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

export default Form;
