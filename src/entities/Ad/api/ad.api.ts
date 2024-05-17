import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/shared/data/api.data";
import { IPoster } from "../model/poster.ad.model";

export const AdAPI = createApi({
	reducerPath: 'adAPI',
  	baseQuery: fetchBaseQuery({
		baseUrl: API_URL + '/ad/'
	}),
	endpoints: (build) => ({
		getPosters: build.query<IPoster[], void>({
			query: () => ({
				url: `poster/all`,
				method: 'GET',
			})
		}),
	})
})
