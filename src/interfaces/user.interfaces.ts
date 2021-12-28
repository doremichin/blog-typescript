export interface IUserData {
    uid:string
    email:string
    emailVerified: boolean
    isAnonymous: boolean
    createdAt:string
    lastLoginAt:string
    apiKey:string
    appName:string
    providerData : []
    stsTokenManager : {}
}
