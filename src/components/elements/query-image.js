import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const QueryImage = ({ alt, data, height, is_eager, width }) => {
    const image = getImage(data)
    if (data) {
        return (
            <div 
                style={{width: width || '100%', height: height}}
            >
                <GatsbyImage
                    image={image}
                    alt={alt}
                    height="100%"
                    loading={is_eager ? 'eager' : 'lazy'}
                />
            </div>
        )
    }
    return null
}

QueryImage.propTypes = {
    alt: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.string,
    data: PropTypes.object.isRequired,
    height: PropTypes.string,
    is_eager: PropTypes.bool,
    width: PropTypes.string,
}

export default QueryImage
