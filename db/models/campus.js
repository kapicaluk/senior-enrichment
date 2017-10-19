'use strict';
const db = require('../');
const Sequelize = require('sequelize');

const images = [
'https://1001libraries.files.wordpress.com/2014/08/warsaw-wniwersity-library-inside.jpg',
'https://cdn04.masterstudies.com/element_db/33/33733_Warsaw1.png',
'http://mpi.krakow.pl/pliki/218645/4.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/UniwersytetWroc%C5%82awski.jpg/1200px-UniwersytetWroc%C5%82awski.jpg',
'http://www.piotrpaszkiewicz.neostrada.pl/images/realizacje/collegium/01.jpg'
]

const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull:false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: function(){
    	return getRandomImage()
    }
  }
})

module.exports = Campus;
