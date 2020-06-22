import Head from 'next/head'

const SEO = ({ title, description, image, url, type }) => {
	if (!image) {
		const api = 'https://i.microlink.io/'
		const cardUrl = `https://cards.microlink.io/?preset=simple&p=2gJ_PD4KICA8TGluawogICAgaHJlZj0naHR0cHM6Ly9zYXBwZXItYmxvZy5ub3cuc2gvc3R5bGVzL2Jhc2UuY3NzJwogICAgcmVsPSdzdHlsZXNoZWV0JwogIC8-CiAgPEZsZXgKICAgIHN4PXt7CiAgICAgIHBhZGRpbmdMZWZ0OiAxNTAsCiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywKICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsCiAgICAgIGJnOiBxdWVyeS5iZywKICAgICAgY29sb3I6IHF1ZXJ5LmNvbG9yLAogICAgfX0KICA-CiAgICA8VGV4dAogICAgICBzeD17ewogICAgICAgIHdpZHRoOiAiNzUlIiwKICAgICAgICBmb250RmFtaWx5OiAna3VtYmgnLAogICAgICAgIGZvbnRTaXplOiAiMnJlbSIsCiAgICAgICAgZm9udFdlaWdodDogNDAwLAogICAgICB9fQogICAgICBjaGlsZHJlbj17cXVlcnkuaGVhZGxpbmV9CiAgICAvPgogICAgPFRleHQKICAgICAgc3g9e3sKICAgICAgICBtYXJnaW5Ub3A6ICIxcmVtIiwKICAgICAgICB3aWR0aDogIjUwJSIsCiAgICAgICAgZm9udEZhbWlseTogJ2t1bWJoJywKICAgICAgICBmb250U2l6ZTogIjEuMjVyZW0iLAogICAgICAgIGZvbnRXZWlnaHQ6IDQwMCwKICAgICAgfX0KICAgICAgY2hpbGRyZW49e3F1ZXJ5LmNhcHRpb259CiAgICAvPgogIDwvRmxleD4KPC8-&headline=${encodeURIComponent(
			title
		)}&caption=${encodeURIComponent(description)}`
		image = `${api}${encodeURIComponent(cardUrl)}`
	}

	return (
		<Head>
			<title>{title}</title>
			<meta name="title" content={title} />
			<meta name="description" content={description} />

			{type === 'post' ? (
				<>
					<meta property="og:type" content="article" />
					<meta
						property="article:author"
						content={process.env.NEXT_PUBLIC_HOME_URL}
					/>
				</>
			) : (
				<meta property="og:type" content="website" />
			)}

			<meta property="og:url" content={url} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={url} />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={image} />
		</Head>
	)
}

export default SEO
