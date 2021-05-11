/**
 * Module dependencies
 */

// ...


/**
 * test/about.js
 *
 * About test.
 */
module.exports = async function about(req, res) {

  res.view('about', {
    layout: 'b4layout'
  })
};
