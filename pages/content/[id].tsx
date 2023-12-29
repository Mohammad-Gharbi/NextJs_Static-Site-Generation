export default function Page({ product }: any) {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black text-white">
      {product.title}
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products")
  const data = await res.json()

  const paths = data.products.map((product: any) => ({
    params: { id: product.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`)
  const product = await res.json()

  return { props: { product } }
}
