import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div className="bg-red-400 h-screen ">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          className=""
        >
          <h1>hola</h1>
        </motion.div>
      </div>
    </div>
  )
}
