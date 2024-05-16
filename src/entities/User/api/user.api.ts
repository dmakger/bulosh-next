import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/shared/data/api.data";
import { IAuthRequest, IAuthResponse, IUser } from "../model/user.model";
import { getAccessToken, getHeaderAuthorization, saveTokensStorage } from "../lib/auth-token.lib";

export const UserAPI = createApi({
	reducerPath: 'userAPI',
  	baseQuery: fetchBaseQuery({
		baseUrl: API_URL + '/'
	}),
	endpoints: (build) => ({
		login: build.mutation<IAuthResponse, IAuthRequest>({
			query: (body) => ({
				url: `token/`,
				method: 'POST',
				body,
				responseHandler: async (response) => {
					if (!response.ok)
						return response
                    const data = await response.json() as IAuthResponse					
                    console.log(data, response);
					
					saveTokensStorage(data)
                    return data
                },
			})
		}),
		register: build.mutation<IAuthResponse, IAuthRequest>({
			query: (body) => ({
				url: `register/`,
				method: 'POST',
				body,
				responseHandler: async (response) => {
                    const data = await response.json() as IAuthResponse					
                    saveTokensStorage(data)
                    return data
                },
			})
		}),
		getAuthUser: build.query<IUser, void>({
            query: () => ({
                url: `/user/current/`,
                method: 'GET',
                headers: getHeaderAuthorization(),
            })
        }),
	})
})
