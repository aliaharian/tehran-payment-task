export const getProducts = async () => {
    const res = await fetch(process.env.NEXT_API_URL + "products")
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}