import { Resolver, Arg, InputType, Field, Mutation, Query } from "type-graphql";
import VideoSchema from "./videoSchema";
import { Video } from "./video";

@InputType()
class VideoInput{
    @Field()
    description: String;

    @Field()
    title: String;

    @Field()
    category: String;
}

@Resolver()
class VideoResolver{

    @Mutation(()=>Video)
    async addVideo(@Arg("videoInput") videoInput: VideoInput){
        try{
            console.log(videoInput)
            const video = await VideoSchema.create(videoInput);
            return video;
        }catch(err){
            console.log(err)
        };

    }

    @Query(()=>Video)
    async videos(){
        const videos = await VideoSchema.find()
        return videos;
    }
}

export {VideoResolver};