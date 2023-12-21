export type BackendError = {
    errorMessage: string;
};

export const isError = (response: any): response is BackendError => {
    return response.errorMessage !== undefined;
}