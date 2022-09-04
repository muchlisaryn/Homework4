import Title from "./Title";

export default function NextMeetup () {
    return (
        <div className="mx-2 my-5">
        <Title value={"Next Meetup"}/>
        <div className="bg-secondary  my-3 p-4 text-light">
            <h5>Awesome meetup and ecent</h5>
            <h6 className="date mb-5">25 January 2019</h6>
            <p>Hello, javascript & Node.js Ninjas!</p>
            <p style={{width : '80%'}}>Get ready for our mountly meetup JakartaJS! this will be our fifth meetup of 2018!
               the meetp format will contain some short stories and technical talks.
               if you have a short annoucement you'd like to share with the audience, you may do so during open mic announcements.
               <br/><br/>
               Remember to bring a photo ID to get through building security
               <br/><br/>
               -------------------
               <br/><br/>
               See you there!
               <br/><br/>
               Best, Hengki, Giovanni, Sofian, Reza, Agung The JakartaJS Organizers
            </p>       
        </div>
        </div>
    )
}