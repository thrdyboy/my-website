import resolveResponse from "contentful-resolve-response"
const SpaceId = process.env.CONTENTFUL_SPACE_ID as string
const Token = process.env.CONTENTFUL_ACCESS_TOKEN as string
const MainURL = process.env.CONTENTFUL_MAIN_URL as string

export const getFeature = async () => {
    const MakeResponse = await fetch(
        `${MainURL}/spaces/${SpaceId}/environments/master/entries?access_token=${Token}&content_type=feature&include=10`,
        { next: {  revalidate: 10 } })
    
    const data = await MakeResponse.json()
    const response = {
        items: data.items,
        includes: data.includes
    }

    const Returning = resolveResponse(response)
    return Returning
}

export const getFeatureSlug = async (slug: string) => {
    const MakeResponse = await fetch(
        `${MainURL}/spaces/${SpaceId}/environments/master/entries?access_token=${Token}&content_type=feature&include=10&fields.slug=${slug}`,
        { next: {  revalidate: 10 } })
    
    const data = await MakeResponse.json()
    const response = {
        items: data.items,
        includes: data.includes
    }

    const Returning = resolveResponse(response)
    return Returning[0]
}

export const getTeam = async () => {
    const MakeResponse = await fetch(
        `${MainURL}/spaces/${SpaceId}/environments/master/entries?access_token=${Token}&content_type=team&include=10`,
        { next: {  revalidate: 10 } })
    
    const data = await MakeResponse.json()
    const response = {
        items: data.items,
        includes: data.includes
    }

    const Returning = resolveResponse(response)
    return Returning
}

export const getTeamSlug = async (slug: string) => {
    const MakeResponse = await fetch(
        `${MainURL}/spaces/${SpaceId}/environments/master/entries?access_token=${Token}&content_type=team&include=10&fields.slug=${slug}`,
        { next: {  revalidate: 10 } })
    
    const data = await MakeResponse.json()
    const response = {
        items: data.items,
        includes: data.includes
    }

    const Returning = resolveResponse(response)
    return Returning[0]
}

export const getValorant = async () => {
    const MakeResponse = await fetch(
        `${MainURL}/spaces/${SpaceId}/environments/master/entries?access_token=${Token}&content_type=valorant&include=10`,
        { next: {  revalidate: 10 } })
    
    const data = await MakeResponse.json()
    const response = {
        items: data.items,
        includes: data.includes
    }

    const Returning = resolveResponse(response)
    return Returning
}

export const getValorantSlug = async (slug: string) => {
    const MakeResponse = await fetch(
        `${MainURL}/spaces/${SpaceId}/environments/master/entries?access_token=${Token}&content_type=valorant&include=10&fields.slug=${slug}`,
        { next: {  revalidate: 10 } })
    
    const data = await MakeResponse.json()
    const response = {
        items: data.items,
        includes: data.includes
    }

    const Returning = resolveResponse(response)
    return Returning[0]
}