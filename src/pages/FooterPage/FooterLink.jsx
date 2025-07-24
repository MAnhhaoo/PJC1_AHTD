import { FacebookFilled } from '@ant-design/icons';
import { Row, Col, Space, Typography, Image } from 'antd';
import { Grid } from 'antd';
import { Link } from 'react-router-dom';
import ZaloIcon from '../../assets/img/FooterPage/Zalo-icon.webp';
import FooterCertification from './FooterCertification';
const { Title, Text } = Typography;

const aboutUsLinks = [
    { title: "Giới thiệu", href: "/gioi-thieu" },
    { title: "Hệ thống cửa hàng", href: "/he-thong-cua-hang" },
    { title: "Giấy phép kinh doanh", href: "/giay-phep-kinh-doanh" },
    { title: "Quy chế hoạt động", href: "/quy-che-hoat-dong" },
    { title: "Chính sách đặt cọc", href: "/chinh-sach-dat-coc" },
    { title: "Chính sách nội dung", href: "/chinh-sach-noi-dung" },
    { title: "Chính sách đổi trả thuốc", href: "/doi-tra-thuoc" },
    { title: "Chính sách giao hàng", href: "/giao-hang" },
    { title: "Chính sách bảo mật dữ liệu cá nhân", href: "/bao-mat-du-lieu" },
    { title: "Chính sách thanh toán", href: "/thanh-toan" },
    { title: "Kiểm tra hóa đơn điện tử", href: "/kiem-tra-hoa-don" },
    { title: "Chính sách thu thập và xử lý dữ liệu cá nhân", href: "/xu-ly-du-lieu-ca-nhan" },
    { title: "Chính sách hoàn huỷ đổi trả Vắc xin", href: "/doi-tra-vaccine" },
    { title: "Thông tin trung tâm bảo hành máy thiết bị y tế", href: "/bao-hanh-thiet-bi-y-te" },
    { title: "Thể lệ chương trình “Tích điểm nhận đặc quyền”", href: "/the-le-tich-diem" },
];
const categories = [
    { title: "Thực phẩm chức năng", href: "/thuc-pham-chuc-nang" },
    { title: "Dược mỹ phẩm", href: "/duoc-my-pham" },
    { title: "Thuốc", href: "/thuoc" },
    { title: "Chăm sóc cá nhân", href: "/cham-soc-ca-nhan" },
    { title: "Trang thiết bị y tế", href: "/trang-thiet-bi-y-te" },
    { title: "Đặt thuốc online", href: "/dat-thuoc-online" },
    { title: "Tiêm chủng Long Châu", href: "/tiem-chung-long-chau" },
];


const LearnMoreLinks = [
    { title: "Góc sức khỏe", href: "/goc-suc-khoe" },
    { title: "Tra cứu thuốc", href: "/tra-cuu-thuoc" },
    { title: "Tra cứu dược chất", href: "/tra-cuu-duoc-chat" },
    { title: "Tra cứu dược liệu", href: "/tra-cuu-duoc-lieu" },
    { title: "Bệnh thường gặp", href: "/benh-thuong-gap" },
    { title: "Bệnh viện", href: "/benh-vien" },
    { title: "Đội ngũ chuyên môn", href: "/doi-ngu-chuyen-mon" },
    { title: "Tin tức tuyển dụng", href: "/tuyen-dung" },
    { title: "Tin tức sự kiện", href: "/su-kien" },
];

const SwitchBoard = [
    {
        title: "Tư vấn mua hàng",
        phone: "18006928",
        branch: "Nhánh 1",
    },
    {
        title: "Trung tâm Vắc xin",
        phone: "18006928",
        branch: "Nhánh 2",
    },
    {
        title: "Góp ý, khiếu nại",
        phone: "18006928",
        branch: "Nhánh 3",
    },
];

const Certifications = [
];

const PaymentMethods = [
];

const FooterLink = () => {
    return (
        <div className='container'>
            <Row gutter={[16, 24]}>
                {/* Cột 1: VỀ CHÚNG TÔI */}
                <Col xs={24} sm={12} md={8} lg={4} >
                    <Space direction="vertical" size={6}>
                        <Title level={5} style={{ marginBottom: 0, fontWeight: 600 }}>
                            VỀ CHÚNG TÔI
                        </Title>
                        {aboutUsLinks.map((items, index) => (
                            <Link key={index} to={items.href} className="hover:text-[#1061FF] text-[#1a1a1a]">
                                {items.title}
                            </Link>
                        ))}
                    </Space>
                </Col>

                {/* Cột 2: DANH MỤC */}
                <Col xs={24} sm={12} md={8} lg={4}>
                    <Space direction="vertical" size={6}>
                        <Title level={5} style={{ marginBottom: 0, fontWeight: 600 }}>
                            DANH MỤC
                        </Title>
                        {categories.map((item, index) => (
                            <Link key={index} to={item.href} className="hover:text-[#1061FF] text-[#1a1a1a]">{item.title}</Link>
                        ))}
                    </Space>
                </Col>

                {/* Cột 3: TÌM HIỂU THÊM */}
                <Col xs={24} sm={12} md={8} lg={4}>
                    <Space direction="vertical" size={6}>
                        <Title level={5} style={{ marginBottom: 0, fontWeight: 600 }}>
                            TÌM HIỂU THÊM
                        </Title>
                        {LearnMoreLinks.map((item, index) => (

                            <Link key={index} to={item.href} className="hover:text-[#1061FF]">{item.title}</Link>
                        ))}
                    </Space>
                </Col>

                {/* Cột 4: TỔNG ĐÀI */}
                <Col xs={24} sm={12} md={8} lg={6}>
                    <Space direction="vertical" size={6}>
                        <Title level={5} style={{ marginBottom: 0, fontWeight: 600 }}>
                            TỔNG ĐÀI (8:00–22:00)
                        </Title>
                        {SwitchBoard.map((item, index) => (
                            <li key={index} className="hover:text-[#1061FF] cursor-pointer">
                                <span className="font-semibold ">{item.title}</span>
                                <br />
                                {item.phone} ({item.branch})
                            </li>
                        ))}

                        <Title level={5} style={{ marginBottom: 0, fontWeight: 600 }}>
                            CHỨNG NHẬN BỞI
                        </Title>

                        <Title level={5} style={{ marginBottom: 0, fontWeight: 600 }}>
                            HỖ TRỢ THANH TOÁN
                        </Title>

                    </Space>
                </Col>

                {/* Cột 5: Mạng xã hội & QR */}
                <Col xs={24} sm={12} md={8} lg={6}>
                    {/* Kết nối MXH */}
                    <Space direction="vertical" size={8}>
                        <Title level={5} style={{ margin: 0, fontWeight: 600, fontSize: 14 }}>
                            KẾT NỐI VỚI CHÚNG TÔI
                        </Title>
                        <Space size="small" align="center">
                            <FacebookFilled style={{ fontSize: 20, color: '#3b5998' }} />
                            <Text style={{ fontSize: 13 }}>Facebook</Text>
                        </Space>
                        <Space size="small" align="center">
                            <Image src={ZaloIcon} preview={false} alt="Zalo" width={20} height={20}/>
                            <Text style={{ fontSize: 13 }}>Zalo</Text>
                        </Space>
                    </Space>

                    {/* QR Code */}
                    <div style={{ marginTop: 24 }}>
                        <Title level={5} style={{ marginBottom: 8, fontWeight: 600, fontSize: 14 }}>
                            TẢI ỨNG DỤNG LONG CHÂU
                        </Title>
                        <Image
                            src="/qrcode.png"
                            alt="QR Long Châu"
                            width={96}
                            height={96}
                            preview={false}
                        />
                    </div>
                </Col>
            </Row>
            <FooterCertification />
        </div>

    );
}

export default FooterLink;