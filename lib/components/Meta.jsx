import Head from 'next/head'

export const Meta = ({ title }) => {
  const defaultTitle = 'PoolTogether - SingleRandomWinner PrizePoolBuilder'
  title = title ? `${title} - ${defaultTitle}` : defaultTitle

  const url = `https://builder.pooltogether.com`
  const description = `Create Prize Pools with this UI tool`
  const keywords = 'ethereum'
  const twitterHandle = '@PoolTogether_'

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name='viewport' content='width=device-width,initial-scale=1,shrink-to-fit=no' />
        <meta charSet='utf-8' />

        <link rel='stylesheet' href='https://use.typekit.net/ezg2vko.css' />

        <link rel='icon' type='image/png' href='/favicon.png' />
        
        <link rel='stylesheet' href='/animate.css' />

        <meta name='theme-color' content='#2E0F73' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='author' content='PoolTogether LLC' />
        <meta name='copyright' content={`Copyright ${new Date().getFullYear()}`} />

        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:site_name' content={title} />
        <meta property='og:url' content={url} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={`${url}/facebook_share_image_1200x630.png`} />
        <meta property='og:rich_attachment' content='true' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        
        <meta property='twitter:title' content={title} />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:site' content={twitterHandle} />
        <meta property='twitter:image:src' content={`${url}/twitter_share_image_800_418.png`} />
        <meta property='twitter:url' content={url} />
        <meta property='twitter:creator' content={twitterHandle} />
      </Head>
    </>
  )
}