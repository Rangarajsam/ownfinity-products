const DEFAULT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2I5ZTBlYjA2ZDMzMmU4YmVjZWM5ZjkiLCJpYXQiOjE3NTkyODUyOTF9.DXydE_6NxYirnudEvP3hs8cNTeDoCGNsVcuGElbiRA0"; // Use this for standalone mode

export const getAuthToken = (state: any) => {
    // Try to get token from auth MF if available
    const authToken = state.auth?.user?.token;
    
    // If auth MF token is not available, use default token
    return authToken || DEFAULT_TOKEN;
}