import { User } from "@clerk/express";
import { Inngest } from "inngest";


// Create a client to send and receive events
export const inngest = new Inngest({ id: "movie-ticket-booking" });

//inngest function to save user data to a database


const syncUserCreation = inngest.createFunction(
    {id:'sync-user-from-clerk'},
    {events:'clerk/user.created'},
    async({event})=>{
        const{id, first_name,last_name,email_addresses,image_url}=event.data
        const userDAta={
        _id:id,
        name:`${first_name} ${last_name}`,
        email:email_addresses[0].email_address,
        image:image_url

    }
    await User.create(userDAta)
    
}
)


const syncUserDeletion = inngest.createFunction(
    {id:'delete-user-with-clerk'},
    {events:'clerk/user.deleted'},
    async({event})=>{
        const{id}=event.data
       await User.findByIdAndDlete(id)

    }
    )

// Inngest Function to update user data in database 

const syncUserUpdation = inngest.createFunction(
    {id:'update-user-from-clerk'},
    {events:'clerk/user.updated'},
    async({event})=>{
        const{id,first_name,last_name,email_address,image_url}=event.data
        const userDAta={
        _id:id,
        name:`${first_name} ${last_name}`,
        email:email_addresses[0].email_address,
        image:image_url
        }
       await User.findByIdAndUpdate(id,userDAta)

    }
    )


// Create an empty array where we'll export future Inngest functions
export const functions = [syncUserCreation,syncUserDeletion,syncUserUpdation];
