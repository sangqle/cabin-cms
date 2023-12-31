import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="flex h-full overflow-hidden flex-col p-8 w-80 bg-slate-100">
            <Link href="/dashboard">
                Danh sách sản phẩm
            </Link>
            <Link href="/dashboard/orders">
                Orders
            </Link>
            <Link href="/dashboard/blogs">
                Bài viết
            </Link>
            <Link href="/dashboard/notifications">
                Thông báo
            </Link>
        </div>
    );
}
