import { SharedError } from "../../../shared/types/error";

export const isError = (response: any): response is SharedError => {
    return response.errorMessage !== undefined;
}