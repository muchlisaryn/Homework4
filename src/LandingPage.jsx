import AboutMeetup from "./Component/AboutMeetup";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Member from "./Component/Members";
import Navbar from "./Component/Navbar";
import NextMeetup from "./Component/NextMeetup";
import Meetups from "./Component/PastMeetups";

export default function LandingPage () {
    return (
        <div>
            <Navbar/>
            <Header/>
            <NextMeetup/>
            <AboutMeetup/>
            <Member/>
            <Meetups/>
            <Footer/>
        </div>
    )
}