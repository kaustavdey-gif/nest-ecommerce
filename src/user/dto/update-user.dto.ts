import { PartialType } from "@nestjs/mapped-types";
import { UserProfileDto } from "./update-profile.dto.js";


export class UpdateUserDto extends PartialType(UserProfileDto){}