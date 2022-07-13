import './currency.scss';

const Currency = () => {
    return (
        <div className="header">
          <div className="container">
            <div className="header-title">Курси валют по співвідношенню до гривні:</div>
            
            <div className="header-currency">
                <div className="header-currency__descr">USD:</div>
                <div className="header-currency__counter">30</div>

                <div className="header-currency__descr">EUR:</div>
                <div className="header-currency__counter">30</div>

                <div className="header-currency__descr">UAN:</div>
                <div className="header-currency__counter">30</div>
            </div>
          </div>
        </div>
    );
};

export default Currency;