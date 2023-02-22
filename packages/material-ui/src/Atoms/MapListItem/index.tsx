import React from 'react'

interface MapListItemProps {
    Component: any
    Items: Array<object>
    other?: any
}

const MapListItem = ({ Component, Items, other }: MapListItemProps) => {

    return (
        <>
            {
                Items?.map((item, i) => {
                    return item && <Component key={i} item={item} other={other} />

                }
                )
            }
        </>
    )
}

export default MapListItem