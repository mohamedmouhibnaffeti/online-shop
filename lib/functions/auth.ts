import jwt from 'jsonwebtoken'


export const createAccessToken = (id: any) => {
    const user = { id: id.id }
    return jwt.sign({user}, process.env.JWT_SECRET || "", {
        expiresIn: '1h'
    })
}

export const createRefreshToken = (id: any) => {
    const user = { id: id.id }
    return jwt.sign({user}, process.env.JWT_SECRET || "", {
        expiresIn: '7d'
    })
}

export const refreshToken = async() => {
    try{
        const response  = await fetch('/api/auth/token/refresh', {
            method: 'POST',
            body: JSON.stringify({
                refresh_token: localStorage.getItem('RefreshToken')
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(!response.ok){
            if(response.status === 401){
                localStorage.removeItem('AccessToken');
                localStorage.removeItem('RefreshToken');
                window.location.href = '/auth/Login';
            } else {
                throw new Error('Failed to refresh token');
            }
        }
        if(response.ok){
            const data = await response.json()
            const { accessToken } = data
            localStorage.setItem('AccessToken', accessToken)
        }
    }catch(err){
        localStorage.removeItem('AccessToken');
        localStorage.removeItem('RefreshToken');
        window.location.href = '/auth/Login';
    }
}


export const sendAuthenticatedRequest = async(url: string, options: any = {}) => {
    try{
        options.headers = options.headers || {}
        const accessToken = localStorage.getItem('AccessToken')
        if(accessToken){
            options.headers.Authorization = `Bearer ${accessToken}`
        }

        const response = await fetch(`/api/${url}`, options)
        if(!response.ok && response.status === 401){
            await refreshToken()
            options.headers.Authorization = `Bearer ${localStorage.getItem('AccessToken')}`
            return await fetch(`/api/${url}`, options)
        }else if(!response.ok && response.status === 403){
            localStorage.removeItem('AccessToken');
            localStorage.removeItem('RefreshToken');
            window.location.href = '/auth/Login';
        }
    }catch(err){
        throw err
    }
}