const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Беспалов",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Олег",
            "id_6": "Денис",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Дин"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Елена",
            "id_3": "Софья",
            "id_4": "Наталья",
            "id_5": "Ева",
            "id_6": "Ольга",
            "id_7": "Марина",
            "id_8": "Елизавета",
            "id_9": "Кристина",
            "id_10": "Андромеда"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Военный",
            "id_2": "Врач",
            "id_3": "Учитель",
            "id_4": "Маркетолог",
            "id_5": "Официант",
            "id_6": "Слесарь",
            "id_7": "Водитель",
            "id_8": "Разработчик",
            "id_9": "Грузчик",
            "id_10": "Космонавт"
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Медсестра",
            "id_2": "Швея",
            "id_3": "Учительница",
            "id_4": "Секретарша",
            "id_5": "Спортсменка",
            "id_6": "Певица",
            "id_7": "Инстаграмщица",
            "id_8": "Домохозяйка",
            "id_9": "Официантка",
            "id_10": "Стюардесса"
        }
    }`,

    birthMonthJson: `{
        "count": 12,
        "list": {     
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson); 
         }
         else {
            return this.randomValue(this.firstNameFemaleJson);
         }
    },


     randomSurname: function() {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
         }
         else {
             return this.randomValue(this.surnameJson) + "a";
         }
    },

    randomBirthYear: function() {

        return this.randomIntNumber(2010, 1970);

    },

    randomBirthMonth: function () {
        return this.randomValue(this.birthMonthJson)

    },

    randomBirthDate: function () {
        if (this.person.birthMonth === `Февраля`) {
            return this.randomIntNumber (28, 1);
        }
        else if (this.person.birthMonth === `Апреля`) {
            return this.randomIntNumber (30, 1);
        }
        else if (this.person.birthMonth === `Июня`) {
            return this.randomIntNumber (30, 1);
        }
        else if (this.person.birthMonth === `Сентября`) {
            return this.randomIntNumber (30, 1);
        }
        else if (this.person.birthMonth === `Ноября`) {
            return this.randomIntNumber (30, 1);
        }
        else {
            return this.randomIntNumber (31, 1);
        }

    },

    randomGender: function () {
        return this.randomIntNumber () === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;

    },

    randomFatherName: function () {
        if (this.person.gender == this.GENDER_MALE) {
             return this.randomValue(this.firstNameMaleJson) + "ович";
        }
        else {
             return this.randomValue(this.firstNameMaleJson) + "овна";
          }
    },

     randomProfession: function () {
         if (this.person.gender === this.GENDER_MALE) {
             return this.randomValue(this.professionMaleJson);
         }
         else {
             return this.randomValue(this.professionFemaleJson);
         }
     },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.birthYear = this.randomBirthYear();
        this.person.fatherName = this.randomFatherName();
        this.person.profession = this.randomProfession();
        this.person.birthMonth = this.randomBirthMonth();
        this.person.birthDate = this.randomBirthDate();
        return this.person;
    }
};
