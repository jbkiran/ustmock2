export const handleError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return "An Error occurred when fetching data";
};
