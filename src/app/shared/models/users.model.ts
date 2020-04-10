export interface IUser {
    id: number;
    firstName: String;
    lastName: String;
    email: any;
    phNumber:number;
    status: 'active' | 'inactive';
}