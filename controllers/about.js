'use strict';

const logger = require('../utils/logger');

const about = {
  index(request, response) {
    logger.info('about rendering');
    const viewData = {
      title: 'About MarkIt',
      contact: 'Developed by MarkIt Inc, WIT, Waterford.',
    };
    response.render('about', viewData);
  },
};

module.exports = about;
