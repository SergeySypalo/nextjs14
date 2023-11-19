export async function generateStaticParams() {	
	return ["comedy", "drama"].map(genre => ({genre: `best-${genre}-movies`}))
}

export default async function Post({ params }) {   
	return <p>{params.genre}</p>	
}