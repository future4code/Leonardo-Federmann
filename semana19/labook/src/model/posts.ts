export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }
 
export interface post {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: string,
    authorId: string
 }

 export interface postDTO {
     post: post,
     message: string
 }

