import SEO from 'src/components/SEO'

const About = () => (
	<>
		<SEO
			title="Kartik Nair"
			description="About me & ways to get in touch with me"
			url={`${process.env.NEXT_PUBLIC_HOME_URL}/about`}
		/>

		<h3>About me</h3>

		<p>
			Hey there! I'm a software engineer and designer based in Dubai.
			Currently I'm finishing my Bachelor's in Computer Systems while
			building other side projects.
		</p>

		<p>
			My focus area for the past few years has been front-end development
			with React and using HTML & CSS to create beautiful user experiences
			that bring delight. I'm also currently experimenting with Svelte &
			Sapper for some small and blazing fast projects.
		</p>

		<p>
			This summer I'm looking to work on more side projects (I have
			something very exciting coming up soon) and also get a job so I can
			learn from people that are much more skilled than me.
		</p>

		<p>
			If you want to work with me on something or just wanna chat you can
			either email me at <a href="mailto:hi@kartikn.me">hi@kartikn.me</a>{' '}
			or find me on my socials:
		</p>

		<p>
			<a href="https://github.com/kartiknair">GitHub</a> /{' '}
			<a href="https://twitter.com/kartikajitnair">Twitter</a> /{' '}
			<a href="https://medium.com/kartikanair">Medium</a> /{' '}
			<a href="https://instagram.com/nairkartik">Instagram</a>
		</p>
	</>
)

export default About
