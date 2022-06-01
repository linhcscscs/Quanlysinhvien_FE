import './FeaturedInfo.css'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Tổng số sinh viên</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">6415</span>
                </div>

            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Số sinh viên nhập học</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">1415</span>
                    <span className="featuredMoneyRate">

                        <ArrowUpward className="featuredIcon" />

                    </span>
                </div>

            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Số sinh viên tốt nghiệp</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">1225</span>
                    <span className="featuredMoneyRate">
                        <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>

            </div>
        </div>
    );
}