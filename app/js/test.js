class Test {
    constructor(data) {
        this.public = data.public; // Свойство с публичными данными

        let _private = data.private; // Переменная с приватными данными

        // Методы для работы с приватными данными должны объявляться как свойство this,
        // содержащее функцию, причем прямо в конструкторе
        this.getPrivate = () => { // Метод получения приватных данных
            return _private;
        }

        this.setPrivate = priv => { // Метод установки нового значения приватных данных
            _private = priv;
        }
    }

    // Методы, объявленные за пределами конструктора не дотянутся до приватных данных
    getPrivate2() {
        return _private; // Ошибка, _private не объявлен
    }

    getPrivate3() {
        return this._private; // undefined
    }
}

const test = new Test({
    public: 'Публичные данные',
    private: 'Приватные данные'
})

class Test2 extends Test {
    constructor(data) {
        super(data);

        this.getPrivate4 = () => {
            return _private;
        }
    }

    getPrivate5() {
        return this.getPrivate();
    }
}

const test2 = new Test2({
    public: 'Публичные данные',
    private: 'Приватные данные'
})