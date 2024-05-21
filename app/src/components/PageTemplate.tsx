import { ComponentProps, PropsWithChildren } from "react"
import { cn } from "~/utils"

function PageTemplate({
  children,
  className,
}: PropsWithChildren & ComponentProps<"div">) {
  return (
    <div className="w-screen h-screen">
      <div className={cn("w-full h-full bg-red-200", className)}>
        <div>SHOPI</div>
        {children}
      </div>
    </div>
  )
}

export default PageTemplate
