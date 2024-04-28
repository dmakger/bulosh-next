import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/shared/data/api.data";
import { ICategory } from "../model/category.metric.model";

export const CategoryAPI = createApi({
	reducerPath: 'categoryAPI',
  	baseQuery: fetchBaseQuery({
		baseUrl: API_URL + '/metric/category/'
	}),
	endpoints: (build) => ({
		getCategories: build.query<ICategory[], void>({
			query: () => ({
				url: `all/`,
				method: 'GET',
			})
		}),
	})
})
