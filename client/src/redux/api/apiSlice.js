/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_CONSTANTS } from "../../constants/apiConstants";

const baseQuery = fetchBaseQuery({
  baseUrl: API_CONSTANTS.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Book"],
  endpoints: (builder) => ({}),
});
