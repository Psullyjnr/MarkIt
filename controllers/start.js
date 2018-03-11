'use strict';

const logger = require('../utils/logger');

const start = {
  index(request, response) {
    logger.info('start rendering');
    const viewData = {
      title: 'Welcome to MarkIt',
      description: 'The newest application designed for easier access to your favourite websites at the click of a button. Here you can store all of your bookmarked websites in a multitude of different catagorys.',
    };
    response.render('start', viewData);
  },
};

module.exports = start;
