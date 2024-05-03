import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/shared/data/api.data";
import { IProduct, IProductProps } from "../model/product.model";

export const ProductAPI = createApi({
	reducerPath: 'productAPI',
  	baseQuery: fetchBaseQuery({
		baseUrl: API_URL + '/product/'
	}),
	endpoints: (build) => ({
		getProducts: build.query<IProduct[], IProductProps>({
			query: () => ({
				url: `all/`,
				method: 'GET',
			})
		}),
	})
})
