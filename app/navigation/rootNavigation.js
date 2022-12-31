import React from 'react'
/* used to be able to to nevigate in components that have no access to the navigate property */

export const navigationRef = React.createRef()

const navigate = (name, params) => {
    // ?. -> null coescing operate
    navigationRef.current?.navigate(name, params)
}

export default {
    navigate,
}