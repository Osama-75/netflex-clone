import Nav from "../components/Navs&Bars/Nav";
import Banner from "../components/Parts/Banner";
import Row from "../components/Parts/Row";
import requests from "../components/api/Request";


export default function HomeScreen() {
    return (
        <>
            <Nav />
            <Banner />
            <Row rowID='1' title='UpComing' fetchURL={requests.requestUpcoming} />
            <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
            <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} />
            <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated} />
            <Row rowID='5' title='Horror' fetchURL={requests.requestHorror} />
        </>
        
    )
}