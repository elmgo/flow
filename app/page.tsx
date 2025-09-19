import Circle from '@/components/Circle'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import css from './page.module.scss'

export default function Home() {
	return (
		<div className={css.root}>
			<div className={css.bg} />
			<Nav />
			<Hero />
			<Circle />
			<Footer />
		</div>
	)
}
