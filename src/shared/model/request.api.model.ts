
export interface IArgsRequest {
    limit?: number
    page?: number,
    ordering?: string,
    category_id?: string,
    q?: string,
    popularity?: boolean,
    only_added?: boolean,
    [key: string]: string | undefined | number | boolean;
}
