import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
    
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground space-y-10 lg:flex w-full lg:justify-between lg:items-center">
              <div className="flex justify-center items-center text-left space-x-4">
          <div className="space-y-4  flex justify-center items-center flex-col">
            <h3 className="text-lg font-semibold rounded-full ">
              <Image alt="logo" src="/cocrogelogo.jfif" width={100} height={100} style={{borderRadius:'100px'}} /></h3>
           
          </div>
          {/* <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-muted-foreground hover:text-foreground">
                  Product
                </Link>
              </li>
            </ul>
          </div> */}
          {/* <div>
            <h4 className="text-sm font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div> */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 w-full flex justify-start items-center">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">Email: support@cockroachkiller.com</p>
              <p className="text-sm text-muted-foreground">Phone: +1 (800) 123-4567</p>
            </div>
          </div>
        </div>
          <p>© {new Date().getFullYear()} CockroachKiller. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
