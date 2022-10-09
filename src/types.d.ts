export interface user {
    node_id: string
    name: string
    login?: string
    avatar_url: string
    created_at: Date
    bio?:string
    public_repos?: number
    followers: number
    following: number
    location?: string
    twitter_username?: string
    blog?: string
    company?: string
}