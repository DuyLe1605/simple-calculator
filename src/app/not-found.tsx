import Link from "next/link";

export default function NotFound() {
    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1>404 - Không tìm thấy trang</h1>
            <p>Trang bạn truy cập không tồn tại hoặc đã bị xóa.</p>
            <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
                Quay về trang chủ
            </Link>
        </div>
    );
}
