async function fetchProfileData() {
    const url = './data/profile.json'

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`Erro ao carregar os dados: ${response.status}`)
    }

    return await response.json()
}