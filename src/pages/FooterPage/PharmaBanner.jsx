import { Row, Col, Button } from 'antd';
import { EnvironmentFilled } from '@ant-design/icons';

const PharmacyBanner = () => {
  return (
    <div style={{ backgroundColor: '#0000ff', padding: '0px 12px' }}>
      <Row align="middle" justify="space-between" style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Cột trái: icon + text */}
        <Col>
          <div style={{ color: 'white', fontWeight: 500, fontSize: '24px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <EnvironmentFilled style={{ fontSize: '24px' }} />
            <span>Xem hệ thống nhà thuốc trên toàn quốc</span>
          </div>
        </Col>

        {/* Cột phải: nút */}
        <Col>
          <Button
            type="default"
            style={{
              backgroundColor: '#ffffff',
              color: '#0000ff',
              borderRadius: '9999px',
              padding: '6px 24px',
              fontWeight: 400,
              fontSize: '20px',
            }}
          >
            Xem danh sách nhà thuốc
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default PharmacyBanner;
