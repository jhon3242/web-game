export default async function getReviews({order = "createdAt", offset = 0, limit = 6}) {
    const query = `order=${order}&offset=${offset}&limit=${limit}`
    const response = await fetch(`https://learn.codeit.kr/3315/film-reviews?${query}`)
        .then(res => res.json())
        .catch(err => console.log(err));
    return response;
}