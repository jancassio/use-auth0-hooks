export interface IIDTokenContext {
  /**
   * The current access token.
   */
  idToken?: string | null;

  /**
   * If retrieving an access token failed, this will contain the error.
   */
  error: Error | null;

  /**
   * Is the transaction still ongoing.
   */
  isLoading: boolean;
}
