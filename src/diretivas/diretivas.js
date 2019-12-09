import angular from 'angular';

import limitTo from './limitTo/limit-to';

import validate from './validate/validate';

import positiveFloat from './positiveFloat/positiveFloat';

import positiveInteger from './positiveInteger/positiveInteger';

import regexInput from './regexInput/regexInput';

import ngPatternRestrict from './ngPatternRestrict/ngPatternRestrict';

import maskChange from './maskChange/maskChange';

export default angular.module('myApp.diretivas', [])
    .directive('limitTo', limitTo, 'validate', 'ngPatternRestrict', ngPatternRestrict, validate, 'positiveFloat', 
                positiveFloat, 'positiveInteger', positiveInteger, 'regexInput', regexInput, 'maskChange', maskChange)
                .name;