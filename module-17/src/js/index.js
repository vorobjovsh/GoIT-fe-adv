import './../sass/styles.scss';
import _ from 'lodash';

import {keyboardButtons, typableChars, langBtns, languageButtons, beginButton, wrpTextArea, btnShow, btnTextAdding, radioLang, elemTextArea, clock, speed, errors, modal, modalP, user, sbmt, userListParent, sectionUser, userId} from './allElements';

import {appData} from './appData';

import './appStart';
import {timer} from './timer';

import {init} from './MODEL/init';
import {Result} from './MODEL/Result';
import {User} from './MODEL/User';

import {remove} from './LOCALSTORAGE/remove';

import {deleteREST} from './REST/deleteREST';
