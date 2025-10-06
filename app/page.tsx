import Circle from '@/components/landing/Circle'
import Footer from '@/components/landing/Footer'
import Hero from '@/components/landing/Hero'
import Nav from '@/components/landing/Nav'
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
