import { createSelector } from 'reselect';
import _ from 'lodash.compose';
import { NAME } from './constants';
import { filterActive, filterCompleted } from './model';

export const getAll = state => state[NAME];

export const getCompleted = _(filterCompleted, getAll);

export const getActive = _(filterActive, getAll);

export const getCounts = createSelector(
    getAll,
    getCompleted,
    getActive,
    (allTodos, completedTodos, activeTodos) => ({
        all: allTodos.length,
        completed: completedTodos.length,
        active: activeTodos.length
    })
);