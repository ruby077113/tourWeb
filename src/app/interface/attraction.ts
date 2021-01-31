type category = {
    id: number;
    name: string;
};
type images = {
    src: string; //附件位址
    subject: string; //主旨
    ext: string; //格式
};
type links = {
    src: string; //附件位址
    subject: string; //主旨
};
export interface attraction {
    id: number;
    name: string;
    name_zh: null;
    open_status: 1;
    introduction: string;
    open_time: string;
    zipcode: string;
    distric: string;
    address: string;
    tel: string;
    fax: string;
    email: string;
    months: string;
    nlat: number;
    elong: number;
    official_site: string;
    facebook: string;
    ticket: string;
    remind: string;
    staytime: string;
    modified: string;
    url: string;
    category: category[];
    target: category[];
    service: category[];
    friendly: category[];
    images: images[];
    files: images[];
    links: links[];
}
