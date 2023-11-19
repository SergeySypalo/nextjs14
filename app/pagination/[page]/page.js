export async function generateStaticParams() {	
	return ["1","2"].map(i => ({ page: i }))
}

export default function Posts({ params }) {	
	return <p>My blog - page {params.page}</p>
}