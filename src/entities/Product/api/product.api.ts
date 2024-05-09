import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/shared/data/api.data";
import { IProduct, IProductProps, IProductQuery } from "../model/product.model";
import { getProductProps } from "../lib/props.product.lib";
import { getHeaderAuthorization, getHeaderAuthorizationIfExists } from "@/entities/User/lib/auth-token.lib";

export const ProductAPI = createApi({
	reducerPath: 'productAPI',
  	baseQuery: fetchBaseQuery({
		baseUrl: API_URL + '/product/'
	}),
	endpoints: (build) => ({
		getProducts: build.query<IProductQuery, IProductProps>({
			query: (props) => ({
				url: `all/?${getProductProps(props)}`,
				method: 'GET',
				headers: getHeaderAuthorizationIfExists(),
			})
		}),

		updateProduct: build.mutation<IProduct, object>({
			query: (body) => ({
				url: `cart/update/`,
				method: 'POST',
				headers: getHeaderAuthorization(),
				body,
			})
		}),
	})
})
