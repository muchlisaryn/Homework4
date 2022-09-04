import Title from "./Title"



export default function Member () {

    const name = "Muchlis"
    const others = 5

    return (
        <div className="mx-2 my-5">
        <div className="d-flex justify-content-between align-items-center">
        <Title value={'Members'}/>
        <button className="btn">See All</button>
        </div>
        <div className="bg-secondary d-flex p-3 align-items-center fw-semibold text-light">
            <div className="members bg-light rounded rounded-circle "></div>
            <div className=" ms-4">
                <div> Organizers</div>
                <div className="d-flex mt-2">
                    <div>{name}</div>
                    <div className="ms-4">{others} others</div>
                </div>
            </div>
        </div>
    </div>
    )
}