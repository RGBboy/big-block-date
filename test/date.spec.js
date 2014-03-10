/*!
 * Date unit tests
 */

/**
 * Module Dependencies
 */

var test = require('tape'),
    DateSystem = require('../index');

/**
 * Setup
 */

var setup = function (t) {
};

/**
 * Teardown
 */

var teardown = function (t) {
};

/**
 * Date Class
 */

test('Date should be a class', function (t) {
    t.plan(1);
    t.ok(DateSystem, 'class should exist');
});

/**
 * Date instance
 */

test('date should equal Date', function (t) {
    t.plan(1);
    dateInstance = DateSystem();
    t.equal(dateInstance, Date);
});