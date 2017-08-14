import TreeBarChart from './tree-bar-chart/TreeBarChart';

(function (root, factory) {
  'use strict';
  if (typeof module === 'object') {
    module.exports = factory;
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    root.TreeBarChart = factory;
  }
}(this, TreeBarChart));