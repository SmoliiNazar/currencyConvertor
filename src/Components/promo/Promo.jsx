import './promo.scss';

const Promo = () => {
    return (
        <div className="Promo">
            <div className="container">
                <div className="promo-currency">
                        <form>
                            <h1>Конвертер валют</h1>
                            
                            <div class="row mb-1">
                                <div class="col">
                                    <label for="name">Ви віддаєте:</label>
                                    <select
                                        disabled
                                        class="form-control"
                                        id="exampleFormControlSelect1"
                                    >   
                                        <option value="USD">USD — Доллар США</option>
                                    </select>
                                </div>
                                <div class="col">
                                    <label for="name">Получаю:</label>
                                    <select
                                        id="select"
                                        class="form-control"
                                    >
                                        <option value="UAN">UAN — Гривні</option>
                                        <option value="EUR">EUR — Евро</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <input
                                        id="input"
                                        type="number"
                                        class="form-control"
                                        autofocus
                                    />
                                </div>
                                <div class="col">
                                    <input
                                        id="result"
                                        type="number"
                                        class="form-control"
                                    />
                                </div>
                            </div>

                            <div class="row mb-1">
                                <div class="col">
                                    <select
                                        disabled
                                        class="form-control"
                                        id="exampleFormControlSelect1"
                                    >   
                                        <option value="EUR">EUR — Євро</option>
                                    </select>
                                </div>
                                <div class="col">
                                    <select
                                        id="select"
                                        class="form-control"
                                    >
                                        <option value="USD">USD — Доллар США</option>
                                        <option value="UAN">UAN — Гривні</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <input
                                        id="input"
                                        type="number"
                                        class="form-control"
                                        autofocus
                                    />
                                </div>
                                <div class="col">
                                    <input
                                        id="result"
                                        type="number"
                                        class="form-control"
                                    />
                                </div>
                            </div>

                            <div class="row mb-1">
                                <div class="col">
                                    <select
                                        disabled
                                        class="form-control"
                                        id="exampleFormControlSelect1"
                                    >   
                                        <option value="UAN">UAN — Гривні</option>
                                    </select>
                                </div>
                                <div class="col">
                                    <select
                                        id="select"
                                        class="form-control"
                                    >
                                        <option value="EUR">EUR — Евро</option>
                                        <option value="USD">USD — Доллар США</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <input
                                        id="input"
                                        type="number"
                                        class="form-control"
                                        autofocus
                                    />
                                </div>
                                <div class="col">
                                    <input
                                        id="result"
                                        type="number"
                                        class="form-control"
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