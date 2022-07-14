import './promo.scss';

const Promo = () => {
    
    return (
        <div className="Promo">
            <div className="container">
                <div className="promo-currency">
                        <form>
                            <h1>Конвертер валют</h1>
                            
                            <div className="row mb-1">
                                <div className="col">
                                    <label htmlFor="name">Ви віддаєте:</label>
                                    <select
                                        disabled
                                        className="form-control"
                                        id="exampleFormControlSelect1"
                                    >   
                                        <option value="USD">USD — Доллар США</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="name">Получаю:</label>
                                    <select
                                        id="select"
                                        className="form-control"
                                    >
                                        <option value="UAN">UAN — Гривні</option>
                                        <option value="EUR">EUR — Евро</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <input
                                        id="input"
                                        type="number"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        id="result"
                                        type="number"
                                        className="form-control"
                                    />
                                </div>
                            </div>

                            <div className="row mb-1">
                                <div className="col">
                                    <select
                                        disabled
                                        className="form-control"
                                        id="exampleFormControlSelect1"
                                    >   
                                        <option value="EUR">EUR — Євро</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <select
                                        id="select"
                                        className="form-control"
                                    >
                                        <option value="USD">USD — Доллар США</option>
                                        <option value="UAN">UAN — Гривні</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <input
                                        id="input"
                                        type="number"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        id="result"
                                        type="number"
                                        className="form-control"
                                    />
                                </div>
                            </div>

                            <div className="row mb-1">
                                <div className="col">
                                    <select
                                        disabled
                                        className="form-control"
                                        id="exampleFormControlSelect1"
                                    >   
                                        <option value="UAN">UAN — Гривні</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <select
                                        id="select"
                                        className="form-control"
                                    >
                                        <option value="EUR">EUR — Евро</option>
                                        <option value="USD">USD — Доллар США</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <input
                                        id="input"
                                        type="number"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        id="result"
                                        type="number"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
    
};

export default Promo;