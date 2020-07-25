import fs from 'fs'
import marked from 'marked'
import * as matter from 'gray-matter'
import prism from 'prismjs'
import PrismJsx from 'prismjs/components/prism-jsx.min'

const renderer = new marked.Renderer()
renderer.image = (href, title, text) => {
	return `<img data-src="${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/${href}" loading="lazy" alt="${text}" class="cld-responsive" />`
}

marked.setOptions({
	renderer: renderer,
	highlight: function (code, lang) {
		if (prism.languages[lang]) {
			return prism.highlight(code, prism.languages[lang], lang)
		} else {
			return code
		}
	},
	pedantic: false,
	gfm: true,
	breaks: false,
	sanitize: false,
	smartLists: true,
	smartypants: false,
	xhtml: false,
})

export const getMarkdownFiles = (path) => {
	const files = fs.readdirSync(path)
	let projects = files.map((file) => {
		let data = matter.read(`${path}/${file}`)
		data.orig = data.orig.toString()
		data.slug = file.slice(0, -3)
		return data
	})
	projects = projects.sort((a, b) => {
		return b.data.date - a.data.date
	})
	return projects
}

export const getMarkdownFile = (path) => {
	let data = matter.read(path)
	data.orig = data.orig.toString()
	data.content = marked(data.content)
	return data
}
