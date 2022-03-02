import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      name: '',
      description: '',
      attr: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
      trunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      save: [],
    };
  }

  onInputChange({ target }) {
    // const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [target.name]: value,
    }, () => {
      const { name, description, attr, attr2, attr3, image,
        rare } = this.state;

      this.setState({
        isSaveButtonDisabled: false,
      });
      const attr01 = Number(attr);
      const attr02 = Number(attr2);
      const attr03 = Number(attr3);

      const maximum = 90; // lint pediu pra colocar em uma const
      const sum = 210;

      if (attr01 < 0 || attr01 > maximum
    || attr02 < 0 || attr02 > maximum
    || attr03 < 0 || attr03 > maximum
    || attr01 + attr02 + attr03 > sum
    || !name || !description || !image || !rare) {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  }

  onSaveButtonClick = (event) => {
    const { trunfo, save } = this.state;
    event.preventDefault();
    if (trunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
    this.setState((prevState) => ({
      save: [...save, prevState],
    }));

    this.setState({
      name: '',
      description: '',
      attr: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
      trunfo: false,
      isSaveButtonDisabled: true,
      // save: true,
    });
  };

  render() {
    const { name, description, attr, attr2,
      attr3, image, rare, trunfo, hasTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          hasTrunfo={ hasTrunfo }
          cardTrunfo={ trunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;
