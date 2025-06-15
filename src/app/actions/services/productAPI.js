// server action là các hàm xử lý trên server(nơi chứa source nextjs)

export const getAllProductAction = async () => {
    const res = await fetch("https://apistore.cybersoft.edu.vn/api/product");
    const data = await res.json();

    return data.content;
};
// Viet action getAllProductDetailByID 
export const getAllProductDetailByID = async (id) => {
    const res = await fetch(`https://apistore.cybersoft.edu.vn/api/Product/getid?id=${id}`);
    const data = await res.json();

    return data.content;
};
export const getAllProductByKeywordAction = async (keyword) => {
    const res = await fetch(`https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`);
    const data = await res.json();

    return data.content;
};
