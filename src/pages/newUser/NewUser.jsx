import "./NewUser.css";

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">THÊM SINH VIÊN </h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>msv</label>
                    <input type="text" placeholder="nhập mã sinh viên" />
                </div>
                <div className="newUserItem">
                    <label>password</label>
                    <input type="text" placeholder="*********" />
                </div>
                <div className="newUserItem">
                    <label>Họ tên</label>
                    <input type="text" placeholder="nhập họ tên" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="nhập email" />
                </div>
                <div className="newUserItem">
                    <label>Số điện thoại</label>
                    <input type="text" placeholder="nhập số điện thoại" />
                </div>
                <div className="newUserItem">
                    <label>Địa chỉ</label>
                    <input type="text" placeholder="nhập địa chỉ" />
                </div>
                <div className="newUserItem">
                    <label>Giới tính</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male">Nam</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female">Nữ</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Hành động</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">LƯU</button>
            </form>
        </div>
    );
}