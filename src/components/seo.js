import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import OgImage from 'images/common/og_image.png'

const SEO = ({ description, meta, title, no_index, has_organization_schema, meta_attributes }) => {
    let queries = []
    queries = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                    }
                }
            }
        `,
    )
    const metaDescription = description || queries.site.siteMetadata.description
    const default_og_title = localize('TechBar Computer Services | Reliable. Affordable. Convenient.')
    const default_og_description = localize('Computer services provided just the way you need it.')
    let organization_schema = {}


    if (has_organization_schema) {
        organization_schema = {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'TechBar',
            alternateName: 'TechBar.app',
            url: 'https:/techbar.app',
            // Update this logo later
            // logo: 'https://deriv.com/static/1b57a116945933314eefeec0030c8e9d/2a4de/logo.png',
            sameAs: [
                'https://www.instagram.com/techbarmy',
                'https://techbar.app',
            ],
        }
    }

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            defer={false}
            meta={[
                {
                    name: 'description',
                    content: metaDescription,
                },
                {
                    name: 'google',
                    content: 'notranslate',
                },
                {
                    property: 'og:title',
                    content: meta_attributes?.og_title || default_og_title,
                },
                {
                    property: 'og:site_name',
                    content: title,
                },
                {
                    property: 'og:description',
                    content: meta_attributes?.og_description || default_og_description,
                },
                {
                    property: 'og:type',
                    content: meta_attributes?.og_type || 'website',
                },
                {
                    property: 'og:locale',
                    content: lang,
                },
                {
                    property: 'og:image',
                    content: meta_attributes?.og_img || OgImage,
                },
                {
                    property: 'og:image:width',
                    content: meta_attributes?.og_img_width || '600',
                },
                {
                    property: 'og:image:height',
                    content: meta_attributes?.og_img_height || '315',
                },
                {
                    name: 'twitter:card',
                    content: 'summary',
                },
                {
                    name: 'twitter:creator',
                    content: queries.site.siteMetadata.author,
                },
                {
                    name: 'twitter:title',
                    content: title,
                },
                {
                    name: 'twitter:description',
                    content: metaDescription,
                },
                {
                    name: 'format-detection',
                    content: 'telephone=no',
                },
                {
                    name: 'yandex-verification',
                    content: '4ddb94bbff872c63',
                },
                {
                    name: 'referrer',
                    content: 'origin',
                },
                ...(no_index
                    ? [
                          {
                              name: 'robots',
                              content: 'noindex',
                          },
                      ]
                    : []),
            ].concat(meta)}
        >
            {has_organization_schema && (
                <script type="application/ld+json">{JSON.stringify(organization_schema)}</script>
            )}
        </Helmet>
    )
}

SEO.defaultProps = {
    meta: [],
}

SEO.propTypes = {
    description: PropTypes.string,
    has_organization_schema: PropTypes.bool,
    meta: PropTypes.arrayOf(PropTypes.object),
    meta_attributes: PropTypes.object,
    no_index: PropTypes.bool,
    title: PropTypes.string.isRequired,
}

export default SEO
