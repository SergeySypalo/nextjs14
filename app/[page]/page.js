export async function generateStaticParams() {	
	const rrr = ["1","2"].map(i => ({ page: i }))
	console.log(rrr)
	return rrr
}

export default function Posts({ params }) {	
	return <p>My blog - page {params.page}</p>
}