import localStorageDataProvider from 'ra-data-local-storage';

const dataProvider = localStorageDataProvider({
    loggingEnabled: true,
    defaultData: {
        users: [
            { id: 0, firstName: 'Michael', lastName: 'Schumacher', email: 'm.schumi@f1.com',  },
            { id: 1, firstName: 'Lewis', lastName: 'Hamilton', email: 'lh@f1.com',  },
        ],
        groups: [
            { id: 0, title: 'Newcomers', description: 'This is a group for onboarding new staff members',},
            { id: 1, title: 'Coordinators', description: 'This is a group for communities coordinators',},
        ],
        usergroup: [
            {user_id: 0, group_id: 0},
            {user_id: 0, group_id: 1},
            {user_id: 1, group_id: 0},
            {user_id: 1, group_id: 1},
        ],
    }
});

export default dataProvider