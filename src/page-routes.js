import connectComponent from '/Users/react/sx-admin/src/redux/store/connectComponent';
import {startFetchingComponent, endFetchingComponent, shouldComponentMount} from '/Users/react/sx-admin/src/commons/route-utils';

export default [
    {
        path: '/error/401',
        getComponent: (nextState, cb) => {startFetchingComponent();require.ensure([], (require) => {if (!shouldComponentMount(nextState)) return;endFetchingComponent();cb(null, connectComponent(require('src/pages/error/Error401')));});},},
    {
        path: '/error/403',
        getComponent: (nextState, cb) => {startFetchingComponent();require.ensure([], (require) => {if (!shouldComponentMount(nextState)) return;endFetchingComponent();cb(null, connectComponent(require('src/pages/error/Error403')));});},},
    {
        path: '/example/actions',
        getComponent: (nextState, cb) => {startFetchingComponent();require.ensure([], (require) => {if (!shouldComponentMount(nextState)) return;endFetchingComponent();cb(null, connectComponent(require('src/pages/examples/ActionsExample')));});},},
    {
        path: '/example/font-icon',
        getComponent: (nextState, cb) => {startFetchingComponent();require.ensure([], (require) => {if (!shouldComponentMount(nextState)) return;endFetchingComponent();cb(null, connectComponent(require('src/pages/examples/FontIconExample')));});},},
    {
        path: '/form/layout',
        getComponent: (nextState, cb) => {startFetchingComponent();require.ensure([], (require) => {if (!shouldComponentMount(nextState)) return;endFetchingComponent();cb(null, connectComponent(require('src/pages/examples/FormLayoutExample')));});},},
    {
        path: '/example/crop-image',
        getComponent: (nextState, cb) => {startFetchingComponent();require.ensure([], (require) => {if (!shouldComponentMount(nextState)) return;endFetchingComponent();cb(null, connectComponent(require('src/pages/examples/ImageCropperDemo')));});},},
    {
        path: '/example/sync-tree',
        getComponent: (nextState, cb) => {startFetchingComponent();require.ensure([], (require) => {if (!shouldComponentMount(nextState)) return;endFetchingComponent();cb(null, connectComponent(require('src/pages/examples/SyncTree')));});},},
    {
        path: '/example/test',
        getComponent: (nextState, cb) => {startFetchingComponent();require.ensure([], (require) => {if (!shouldComponentMount(nextState)) return;endFetchingComponent();cb(null, connectComponent(require('src/pages/examples/Test')));});},},
    {
        path: '/example/test2',
        getComponent: (nextState, cb) => {startFetchingComponent();require.ensure([], (require) => {if (!shouldComponentMount(nextState)) return;endFetchingComponent();cb(null, connectComponent(require('src/pages/examples/Test2')));});},},
    {
        path: '/example/css',
        getComponent: (nextState, cb) => {startFetchingComponent();require.ensure([], (require) => {if (!shouldComponentMount(nextState)) return;endFetchingComponent();cb(null, connectComponent(require('src/pages/examples/cssModule/CssModuleExample')));});},},
    {
        path: '/example/users/+add',
        getComponent: (nextState, cb) => {startFetchingComponent();require.ensure([], (require) => {if (!shouldComponentMount(nextState)) return;endFetchingComponent();cb(null, connectComponent(require('src/pages/examples/users/UserEdit')));});},},
    {
        path: '/example/users',
        getComponent: (nextState, cb) => {startFetchingComponent();require.ensure([], (require) => {if (!shouldComponentMount(nextState)) return;endFetchingComponent();cb(null, connectComponent(require('src/pages/examples/users/Users')));});},},
];
