import { useLoaderData } from "@remix-run/react"

export function loader(): Promise<{ imagenUrl: string; size: string }> {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        imagenUrl: "/OIG2.jfif",
        size: "400px",
      })
    }, 2000)
  })
}

export default function GaleriaImagenes() {
  const data = useLoaderData<typeof loader>()
  return (
    <div>
      <img className="object-contain max-w-sm" src="/OIG2.jfif" alt="" />
      {data.imagenUrl}
    </div>
  )
}
