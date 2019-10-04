/**
 * $.router - XpresserRouter
 * @type XpresserRouter
 */
const route = $.router;

/**
 * Name in routes is not compulsory.
 * if action of controller name is === to route name
 * You can use the .actionAsName() function,
 * As seen in about route
 */
route.get('/', 'Contact@index').name('contact.index');

// Post request for submit.
route.post('/contact', 'Contact@submit').name('contact.submit');
