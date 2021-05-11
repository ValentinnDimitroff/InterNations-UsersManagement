import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { TestContext } from "ra-test";
import GroupShow from "./GroupShow";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

describe("GroupShow page", () => {
    it('should pop up a dialog on "Add User" button click', () => {
        const initialState = {
            admin: {
                resources: {
                    group: {
                        data: { 1: { id: 1, title: "foo" } },
                    },
                    usergroup: {
                        data: { 1: { user_id: 1, group_id: 1 } },
                    },
                    user: {
                        data: { 1: { id: 1, firstName: "nameFoo", lastName: "nameBar" } },
                    },
                },
            },
        };

        const defaultShowProps = {
            permission: "user",
            id: 1,
            basePath: "/group",
            resource: "group",
        };

        const { getByText, getByLabelText, getByRole } = render(
            <ThemeProvider theme={createMuiTheme()}>
                <TestContext initialState={initialState} enableReducers>
                    <GroupShow {...defaultShowProps} />
                </TestContext>
            </ThemeProvider>
        );

        //  get the button
        const sut = getByLabelText("Add User");

        expect(sut).toBeInTheDocument();

        // click button
        fireEvent.click(sut);

        // check for the dialog
        expect(getByRole("dialog")).toBeVisible();
        expect(getByText("No available users")).toBeInTheDocument();
    });
});
