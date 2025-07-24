
const Information = [
    {Address: "FPT Long Châu, 123 Đường Số 1, Phường 2, Quận 3, TP.HCM",
    PhoneNumber: "18006928",
    Email: "sale@nhathuoclongchau.com.vn",
    User: "FPT Long Châu"
    },
];
    

const FooterCertification = () => {
    return (
        <div className="footer-certification">
            <hr />
            <p>
                © 2007 - 2025 Công ty Cổ Phần Dược Phẩm FPT Long Châu Số ĐKKD 0315275368 cấp ngày 17/09/2018 tại Sở Kế hoạch Đầu tư TPHCM       
            </p>
            <p>
            GP thiết lập TTTĐTTH số 538/GP-TTĐT do Sở TTTT Hồ Chí Minh cấp ngày 27 tháng 03 năm 2025
            </p>
            <ul>
                {Information.map((info, index) => (
                    <li key={index}>
                        <strong>Address:</strong> {info.Address} <br />
                        <strong>Phone:</strong> {info.PhoneNumber} <br />
                        <strong>Email:</strong> {info.Email} <br />
                        <strong>User:</strong> {info.User}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default FooterCertification;