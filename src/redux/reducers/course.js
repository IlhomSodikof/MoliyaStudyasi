import { createSlice } from "@reduxjs/toolkit";

export const CourseSlice = createSlice({
    name: "course",
    initialState: {
        course: null,
    },
    reducers: {
        setCourse: (state, action) => {
            state.course = action.payload;
        },
        reset: (state) => {
            state.course = null;
        },
    },
});

export const { setCourse, reset } = CourseSlice.actions;
export const selectCourse = (state) => state.user.course;
export default CourseSlice.reducer;
