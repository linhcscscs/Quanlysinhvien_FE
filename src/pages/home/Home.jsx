import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./Home.css";
import { userData } from "../../dummyData";
import Title from "../test/tb/Title";
// import WidgetLg from "../../components/widgetLg/WidgetLg";
// import WidgetSm from "../../components/widgetSm/WidgetSm";

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />

            <Chart data={userData} title="Biểu đồ sinh viên " grid dataKey="Active User" />
            <Title />
            <div className="homeWidgets">
                {/* <WidgetSm /> */}
                {/* <WidgetLg /> */}
            </div>
        </div>
    );
}