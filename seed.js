const db = require('./db')
const models = require('./db/models');
const Campus = models.Campus;
const Student = models.Student;



    
db.sync()
    .then(() => {
        return Campus.bulkCreate([
            { name: 'Collegium Reactum', image: 'http://www.ostrowiecnr1.pl/zdjecia/oryginaly/3/sandomierz-collegium-gostomianum.jpg' },
            { name: 'University of JavaScript', image: 'https://1001libraries.files.wordpress.com/2014/08/warsaw-wniwersity-library-inside.jpg' },
            { name: 'Node University', image: 'https://cdn04.masterstudies.com/element_db/33/33733_Warsaw1.png' },
            { name: 'Ruby Community College', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/UniwersytetWroc%C5%82awski.jpg/1200px-UniwersytetWroc%C5%82awski.jpg' }
        ])
    })
    .then(() => {
        return Student.bulkCreate([
            { name: 'John Snow', email: 'jon@knowsnothning.com', },
            { name: 'Cersei Lannister', email: 'luvmybrother@revenge.net', },
            { name: 'Dolan Prumpf', email: 'douche@yhouz.gov',},
            { name: 'Serni Banders', email: 'feel@thebern.me', },
            { name: 'Grzegorz Brzeczyszczykiewicz', email: 'grzeorz@chrzaszczbrzmiwtrzcinie.com',},
            { name: 'Tywin Lannister', email: 'chief@lannisters.com', },
            { name: 'Ned Stark', email: 'headless@thenorth.com',},

            { name: 'Pope Francis', email: 'pope@popes.com',  },
            { name: 'Cilary Hlinton', email: 'password1@aol.com', },

            { name: 'James Bond', email: '007@agents.com', },
            { name: 'Steve Jobs', email: 'optout@apple.com', },
            { name: 'Mark Zuckerberg', email: 'face@book.com',},
            { name: 'John Smith', email: 'smith@john.com',},
            { name: 'Dragon Dracarys', email: 'dragon@fire.com',},

            { name: 'Corey Greenwald', email: 'ceo@smite.com', },
            { name: 'Dan Sohval', email: 'dan@instructor.com', },
            { name: 'David Yang', email: 'david@david.com', },
            { name: 'Omri Bernstein',email: 'omri@bern.com', },
            { name: 'Lukasz Kapica', email: 'wookash@kapica.com', },
            ])
        })
    .then(() => console.log('done seeding'));