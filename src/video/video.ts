import {ObjectType, Field} from 'type-graphql'


@ObjectType()
class Video{

    @Field(type => String)
    description: String;

    @Field(type => String)
    title: String;

    @Field(type => String)
    category: String;
}

export {Video}