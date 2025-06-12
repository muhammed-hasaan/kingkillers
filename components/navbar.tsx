"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, X, Bug, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/product", label: "Product" },
  ]

  return (
    <header className="w-full border-b bg-background">
      <div className="bg-primary py-1">
        <div className="container flex justify-between items-center flex-col md:flex-row lg:w-[1000px]">
          <div className="text-white text-sm flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span>Call Now: +92 332 1144770</span>
          </div>
          <div className="text-white text-sm">Free Delivery on Orders Above Rs. 2000</div>
        </div>
      </div>

      <div className="container flex h-20 items-center justify-between">
        {/* <Link href="/" className="flex items-center gap-2">
          <Bug className="h-8 w-8 text-primary" />
          <div>
            <span className="text-xl font-bold text-primary">COCKROACH</span>
            <span className="text-xl font-bold">KILLER</span>
          </div>
        </Link> */}
<Image alt="logo" width={70} height={70} src="/cocrogelogo.jfif" className="rounded-full"/>


        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.href ? "text-primary font-bold" : "text-muted-foreground",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          
          <Link href="/product">
            <Button className="bg-primary hover:bg-primary/80 text-white font-bold">Buy Now</Button>
          </Link>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4">
          <nav className="flex flex-col gap-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.href ? "text-primary" : "text-muted-foreground",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.label}
              </Link>
            ))}
           
          </nav>
        </div>
      )}
    </header>
  )
}
