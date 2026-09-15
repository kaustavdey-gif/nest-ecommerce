import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type userDocument = HydratedDocument<User>
@Schema({
    timestamps: true,
})
export class User{
    @Prop({ required: true })
    name: string;
    @Prop({required: true, unique: true, trim: true})
    email: string;
    @Prop({required: true, })
    password: string;
    @Prop({enum: ["user", "admin"], default: "user"})
    role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);