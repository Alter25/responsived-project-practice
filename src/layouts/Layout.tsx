import "./../App.css"
import type { ReactNode } from "react"
import { FiAlignJustify } from "react-icons/fi";

interface Props{
  children: ReactNode;
}

export default function layout({children}:Props) {
  return <section className="layout">
    <header className="layout-header">
      <button className="button-primary text-color-primary">
        <FiAlignJustify/>
      </button>
      <h1 className="header-text text-color-primary">Bienvenidos!</h1>
      <div><p>algo</p></div>
    </header>
    <main className="layout-main">{children}</main>
    <footer className="layout-footer">some content here</footer>
  </section>
}