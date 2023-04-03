const BASE_URL = `https://learn.codeit.kr/3315/film-reviews`;

export async function getReviews({order = "createdAt", offset = 0, limit = 6}) {
    const query = `order=${order}&offset=${offset}&limit=${limit}`
    const response = await fetch(`${BASE_URL}?${query}`);
    if (!response.ok) {
        throw new Error("영화 리뷰를 불러오는데 실패했습니다.");
    }
    return response.json();
}

export async function createReviews(formData) {
    const response = await fetch(`${BASE_URL}` ,{
        method : "POST",
        body : formData,
    });
    if (!response.ok) {
        throw new Error("영화 리뷰를 등록하는데 실패했습니다.");
    }
    return response.json();
}

export async function updateReviews(id, formData) {
    const response = await fetch(`${BASE_URL}/${id}` ,{
        method : "PUT",
        body : formData,
    });
    if (!response.ok) {
        throw new Error("영화 리뷰를 수정하는데 실패했습니다.");
    }
    return response.json();
}