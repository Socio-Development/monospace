/**
 * User metadata contains information about the user's account.
 */
export type UserMetadata = {
  /**
   * The account creation time as an ISO 8601 string.
   */
  createdAt: string
  /**
   * The last login time as an ISO 8601 string.
   *
   * This field is `null` if the user has never logged in.
   */
  lastLoginAt: string | null
}
