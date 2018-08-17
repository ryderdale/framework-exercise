export const UpdateSiteKeyword = 'UpdateSiteKeyword';


export function UpdateSite(content) {
    return {
        type: UpdateSiteKeyword,
        payload: content
    }
}