"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { unpackNavLinks } from "@/data/site";
import { portfolioNavLinks } from "@/data/portfolio";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { TEAM_CONOCENOS_URL } from "@/data/team";

function isUnpackRoute(pathname: string | null): boolean {
  if (!pathname) return false;
  const parts = pathname.split("/").filter(Boolean);
  return parts[parts.length - 1] === "unpack";
}

export default function Header() {
  const pathname = usePathname();
  const isUnpack = isUnpackRoute(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const secondaryLinks = isUnpack ? unpackNavLinks : portfolioNavLinks;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 shadow-[0_2px_32px_-4px_rgba(0,0,0,0.07)] backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <Container>
          <div className="flex h-16 flex-wrap items-center justify-between gap-y-3 md:h-20 md:flex-nowrap">
            <div className="flex min-w-0 flex-1 items-center gap-4 md:gap-8">
              <Link
                href="/"
                className="shrink-0 font-[family-name:var(--font-heading)] text-lg font-bold tracking-[-0.03em] text-[#111] md:text-xl"
              >
                Andreína Pérez
              </Link>

              <nav
                className="hidden items-center rounded-full bg-black/[0.06] p-1 lg:flex"
                aria-label="Secciones principales"
              >
                <Link
                  href="/"
                  className={cn(
                    "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                    !isUnpack ? "bg-white text-[#111] shadow-sm" : "text-[#666] hover:text-[#111]",
                  )}
                >
                  Inicio
                </Link>
                <Link
                  href="/unpack"
                  className={cn(
                    "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                    isUnpack ? "bg-white text-[#111] shadow-sm" : "text-[#666] hover:text-[#111]",
                  )}
                >
                  Unpack
                </Link>
              </nav>
            </div>

            <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8">
              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap text-sm text-[#666] transition-colors hover:text-[#111]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <div className="hidden sm:block">
                {isUnpack ? (
                  <Button href={TEAM_CONOCENOS_URL} variant="primary">
                    Conócenos
                  </Button>
                ) : (
                  <Button href="/unpack" variant="primary">
                    Never Unpack
                  </Button>
                )}
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center lg:hidden"
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-[#111]" />
                ) : (
                  <Menu className="h-6 w-6 text-[#111]" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-[60] bg-white lg:hidden"
          >
            <Container>
              <nav className="flex flex-col gap-6 py-8" aria-label="Móvil">
                <div className="flex gap-2 rounded-full bg-black/[0.06] p-1">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex-1 rounded-full py-2.5 text-center text-sm font-semibold",
                      !isUnpack ? "bg-white text-[#111] shadow-sm" : "text-[#666]",
                    )}
                  >
                    Inicio
                  </Link>
                  <Link
                    href="/unpack"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex-1 rounded-full py-2.5 text-center text-sm font-semibold",
                      isUnpack ? "bg-white text-[#111] shadow-sm" : "text-[#666]",
                    )}
                  >
                    Unpack
                  </Link>
                </div>

                {secondaryLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-[-0.03em] text-[#111]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="pt-2"
                >
                  {isUnpack ? (
                    <Button
                      href={TEAM_CONOCENOS_URL}
                      variant="primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Conócenos
                    </Button>
                  ) : (
                    <Button href="/unpack" variant="primary" onClick={() => setMobileMenuOpen(false)}>
                      Never Unpack
                    </Button>
                  )}
                </motion.div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
