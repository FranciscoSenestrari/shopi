import { Link, Outlet } from "@remix-run/react"

export default function Galeria() {
  return (
    <div>
      <div>galeria</div>
      <Link to="/galeria/imagenes"> mostrar imagen</Link>
      <Link to="/galeria/4"> mostrar imagen</Link>
      <Outlet />
    </div>
  )
}
