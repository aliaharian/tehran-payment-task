export const getUsers = async () => {
    const res = await fetch(process.env.NEXT_API_URL + "users")
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}