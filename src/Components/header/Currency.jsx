import './currency.scss';
import { Component } from 'react';

class Currency extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usdName: '',
      usdValue: 0,
      eurName: '',
      eurValue: 0,
    }
  }

  componentDidMount() {
    fetch(`https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=5`)
    .then(data => data.json())
    .then(result => {
      this.setState({
        usdName: result[0].ccy,
        usdValue: Math.floor(result[0].buy),
        eurName: result[1].ccy,
        eurValue: Math.floor(result[1].buy)
      })
    })
  }
  
  render() {
    const {usdName, usdValue, eurName, eurValue} = this.state;

    return (
      <div className="header">
      <div className="container">
        <div className="header-title">Курси валют по співвідношенню до гривні:</div>
        
        <div className="header-currency">
            <div className="header-currency__descr" data-value='USD'>{usdName}:</div>
            <div className="header-currency__counter">{usdValue}</div>

            <div className="header-currency__descr" data-value='EUR'>{eurName}:</div>
            <div className="header-currency__counter">{eurValue}</div>

        </div>
      </div>
    </div>
    )
  }
};

export default Currency;