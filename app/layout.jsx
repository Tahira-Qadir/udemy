import NavBar from "../components/NavBar";
import { orbitron } from "./fonts";
import "./globals.css";

export const metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body className="px-4 py-2 flex flex-col min-h-screen bg-orange-50">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="text-center text-slate-500 text-xs border-t py-3">
          Game Data and Image Couresty of{" "}
          <a
            href="https://rawg.io/"
            target="_blank"
            className="text-orange-900 hover:underline"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
