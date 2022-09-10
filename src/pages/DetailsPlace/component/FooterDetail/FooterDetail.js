import React from 'react';
import Footer from '~/components/Footer/Footer';
import './FooterDetail.scss';
function FooterDetail(props) {
  return (
    <footer className="detail-footer">
      <div className="container">
        <div className="detail-footer-content">
          <section className="detail-footer-content-section">
            <div className="detail-footer-content-title">
              <h3>Hỗ trợ</h3>
            </div>
            <ul className="detail-footer-content-list">
              <li className="detail-footer-content-item">
                <a href="/">Trung tâm trợ giúp</a>
              </li>
              <li className="detail-footer-content-item">
                <a href="/">Air Cover</a>
              </li>
              <li className="detail-footer-content-item">
                <a href="/">Thông tin an toàn</a>
              </li>
              <li className="detail-footer-content-item">
                <a href="/">Hỗ trợ người khuyết tật</a>
              </li>
              <li className="detail-footer-content-item">
                <a href="/">Các tùy chọn hủy</a>
              </li>
              <li className="detail-footer-content-item">
                <a href="/">Biện pháp ứng phó đại dịch COVID cùa chúng tôi</a>
              </li>
              <li className="detail-footer-content-item">
                <a href="/">Báo cáo lo ngại của hàng xóm</a>
              </li>
            </ul>
          </section>
          <section className="detail-footer-content-section">
            <div className="detail-footer-content-title">
              <h3>Cộng đồng</h3>
            </div>
            <ul className="detail-footer-content-list">
              <li className="detail-footer-content-item">
                <a href="/">Airbnb.org: nhà ở cứu trợ</a>
              </li>
              <li className="detail-footer-content-item">
                <a href="/">Hỗ trợ dân tị nạn Afghanistan</a>
              </li>
              <li className="detail-footer-content-item">
                <a href="/">Chông phân biệt đối xử</a>
              </li>
            </ul>
          </section>
          <section className="detail-footer-content-section">
            <div className="detail-footer-content-title">
              <h3>Đón tiếp khách</h3>
            </div>
            <ul className="detail-footer-content-list">
              <li className="detail-footer-content-item">
                <a href="/">Thử đón tiếp khách</a>
              </li>
              <li className="detail-footer-content-item">
                <a href="/">Air Cover cho chủ nhà</a>
              </li>
              <li className="detail-footer-content-item">
                <a href="/">Xem tài nguyên đón tiếp khách</a>
              </li>
              <li className="detail-footer-content-item">
                <a href="/">Truy cập diễn đàn cộng đồng</a>
              </li>
              <li className="detail-footer-content-item">
                <a href="/">Đón tiếp khách có trách nhiệm</a>
              </li>
            </ul>
          </section>
          <section className="detail-footer-content-section">
            <div className="detail-footer-content-title">
              <h3>Airbnb</h3>
            </div>
            <ul className="detail-footer-content-list">
              <li className="detail-footer-content-item">
                <a href="/">Trang tin tức</a>
              </li>
              <li className="detail-footer-content-item">
                <a href="/">Tìm hiểu các tính năng mới</a>
              </li>
              <li className="detail-footer-content-item">
                <a href="/">Thư ngỏ từ các nhà sáng lập</a>
              </li>
              <li className="detail-footer-content-item">
                <a href="/">Cơ hội nghề nghiệp</a>
              </li>
              <li className="detail-footer-content-item">
                <a href="/">Nhà đầu tư</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default FooterDetail;
