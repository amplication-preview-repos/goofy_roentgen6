/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { FaceCreateNestedManyWithoutUsersInput } from "./FaceCreateNestedManyWithoutUsersInput";
import { Type } from "class-transformer";
import { ImageCreateNestedManyWithoutUsersInput } from "./ImageCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => FaceCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FaceCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FaceCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  faces?: FaceCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ImageCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ImageCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ImageCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  images?: ImageCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string | null;
}

export { UserCreateInput as UserCreateInput };