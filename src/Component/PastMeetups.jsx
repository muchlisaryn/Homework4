export default function Meetups () {

    const metups = [
        {
            number : 39,
            date : "27 November 2017",
            location : "Kumparan",
            went : "139"
        },
        {
            number : 38,
            date : "27 October 2017",
            location : "BliBli",
            went : "113"
        },
        {
            number : 37,
            date : "27 September 2017",
            location : "Hacktiv8",
            went : "110"
        }
        
    ]

    return (
        <div className="mx-2 my-5">
            <div className="d-flex justify-content-between align-items-center">
                <h1>Past Meetups</h1>
                <button className="btn">See All</button>
            </div>
            <div className="d-flex justify-content-between text-light flex-wrap">
                    {metups.map((e) => 
                    <div className="meetups bg-secondary p-3">
                    <div className="pb-3 border-bottom">{e.date}</div>
                    <div className="mt-2 mb-4" style={{width : "70%"}}>#{e.number} JakartaJS April Meetup with {e.location}</div>
                    <div>{e.went}<span className="text-black"> Went</span></div>
                    <button className="btn btn-light p-2 px-4 mt-3">View</button>
                </div>
                )}
            </div>
        </div>
    )
}