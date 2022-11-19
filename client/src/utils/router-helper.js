import { APPS } from './routes';

export function getRoute() {
    const subdomain = getSubdomain();
    const mainApp = APPS[0].app;
    if (subdomain === 'localhost' || subdomain === '') return mainApp;
    const App = APPS.find(e => subdomain === e.subdomain)?.app;
    if (App === undefined) return mainApp;
    return App;
}

export function getSubdomain() {
    const domain = window.location.hostname;
    const subdomain = domain.split('.');
    if (subdomain[0] !== 'localhost') return subdomain[0];
    return subdomain[0];
}