import './currency.scss';

const Currency = () => {
    return (
        <div class="container pt-5 pb-5">
            <div class="row justify-content-center">
                <div class="col-6">
                    <div class="card p-3">
                        <form>
                            <h1 class="h2 mb-4">Конвертер валют</h1>

                            <div class="courses">
                                <div class="course-item card card-body">
                                    <div class="course-item-title">Курс USD</div>
                                    <div class="course-item-value" data-value="USD">--.--</div>
                                </div>
                                <div class="course-item card card-body">
                                    <div class="course-item-title">Курс EUR</div>
                                    <div class="course-item-value" data-value="EUR">--.--</div>
                                </div>
                                <div class="course-item card card-body">
                                    <div class="course-item-title">Курс GPB</div>
                                    <div class="course-item-value" data-value="GBP">--.--</div>
                                </div>
                            </div>

                            <div class="row mb-1">
                                <div class="col">
                                    <label for="name">Отдаю:</label>
                                    <select
                                        disabled
                                        class="form-control"
                                        id="exampleFormControlSelect1"
                                    >
                                        <option value="RUB" selected>RUB — Рубли</option>
                                    </select>
                                </div>
                                <div class="col">
                                    <label for="name">Получаю:</label>
                                    <select
                                        id="select"
                                        class="form-control"
                                    >
                                        <option value="USD">USD — Доллар США</option>
                                        <option value="EUR">EUR — Евро</option>
                                        <option value="GBP">GPB — Фунт стерлингов</option>
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
    </div>
    );
};

export default Currency;