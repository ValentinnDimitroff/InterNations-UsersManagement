import localStorageDataProvider from 'ra-data-local-storage';

const dataProvider = localStorageDataProvider({
    loggingEnabled: true,
    defaultData: {
        users: [
            { id: 0, firstName: 'Michael', lastName: 'Schumacher', email: 'm.schumi@f1.com', groups_ids: [1] },
            { id: 1, firstName: 'Lewis', lastName: 'Hamilton', email: 'lh@f1.com', groups_ids: [0] },
        ],
        groups: [
            { id: 0, title: 'Group 0', },
            { id: 1, title: 'Group 1', },
        ],
    }
});

export default dataProvider