import localStorageDataProvider from "ra-data-local-storage";

const dataProvider = localStorageDataProvider({
  loggingEnabled: false,
  defaultData: {
    users: [
      {
        id: 0,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@internations.com",
      },
      {
        id: 1,
        firstName: "Lewis",
        lastName: "Smith",
        email: "l.smith@internations.com",
      },
    ],
    groups: [
      {
        id: 0,
        title: "Newcomers",
        description: "This is a group for onboarding new staff members",
      },
      {
        id: 1,
        title: "Coordinators",
        description: "This is a group for communities coordinators",
      },
    ],
    usergroup: [
      { user_id: 0, group_id: 0 },
      { user_id: 0, group_id: 1 },
      { user_id: 1, group_id: 0 },
      { user_id: 1, group_id: 1 },
    ],
  },
});

export default dataProvider;
