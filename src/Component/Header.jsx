import Button from "./Button"

export default function Header () {

    const Name = "Muchlis Aryana" 
    const Members = 2.534
    const Location = "Jakarta, Indonesia"

    return (
        <>
        <div className="bg-secondary mx-2 my-3 p-4 d-flex text-light">
            <div className="profile p-5">
                
            </div>
            <div className="ms-5">
                <h1>Hacktiv8 Meetup</h1>
                <div className="d-flex mt-3">
                    <div>
                        <h5 className="py-2">Location</h5>
                        <h5 className="py-2">Members</h5>
                        <h5 className="py-2">Organizers</h5>
                    </div>
                    <div className="ms-5">
                        <h5 className="py-2">{Location}</h5>
                        <h5 className="py-2">{Members}</h5>
                        <h5 className="py-2">{Name}</h5>
                    </div>
                </div>
                <div className="mt-5">
                <Button text="Join Us"/>
                </div>
            </div>
        </div>
        </>
    )
}