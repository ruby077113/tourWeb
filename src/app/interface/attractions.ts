type category = {
    id: number;
    name: string;
};
type images = {
    [key: string]: string;
};
type files = {
    src: string; //附件位址
    subject: string; //主旨
    ext: string; //格式
};
type links = {
    src: string; //附件位址
    subject: string; //主旨
};
interface Attractions {
    id: number;
    name: string;
    name_zh: string;
    open_status: number; //標題
    introduction: string; //介紹
    open_time: string; //開放時間
    zipcode: string; //郵遞區號
    distric: string; //行政區
    address: string; //地址
    tel: string; //電話
    fax: string; // 傳真
    email: string; // 電子郵件
    months: string; // 月份
    nlat: number; // 北緯
    elong: number; // 東經
    official_site: string; // 官方網站網址
    facebook: string; // 臉書粉絲頁網址
    ticket: string; // 門票/收費
    remind: string; // 旅遊叮嚀
    staytime: string; // 停留時間
    modified: string; // 最後修改時間
    url: string; // 資料源網址
    category: category[];
    target: category[];
    service: category[];
    friendly: category[];
    images: images;
    files: files;
    links: links;
}

export interface toursData {
    total: string;
    data: Attractions[];
}
