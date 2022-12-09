// determine router base
let routeBase = '';
if(!import.meta.env.VITE_SKIP_BASE_BATH || import.meta.env.VITE_SKIP_BASE_BATH === 'false') {
    routeBase = '/mui-thenetninja';
}

export default {
    notes : `${routeBase}/`,
    create: `${routeBase}/create`
};
