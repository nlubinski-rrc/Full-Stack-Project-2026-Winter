/**
 * Interface representing a standard API response
 * @template T - The type of the data property
 */
interface PossibleResponse<T> {
    status: string;
    data?: T;
    message?: string;
    error?: string;
    code?: string;
}

/**
 * Creates a success response object
 * @param data - The data to include in a response
 * @param message - A message providing additional information about the response
 * @returns
 */
export const successReply = <T>(data: T,message?: string): PossibleResponse<T> => ({
    status: "success",
    data,
    message,
});

/**
 * Creates an error resposne object
 * @param message - The error message
 * @param code - Optional error code for debugging
 * @returns
 */
export const errorReply = (message: string,code?: string): PossibleResponse<null> => ({
    status: "error",
    error: message,
    code,
});