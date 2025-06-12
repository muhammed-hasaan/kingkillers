import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Bug, X, Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Announcement Bar */}
      {/* <div className="bg-yellow-400 py-2">
        <div className="container">
          <div className="marquee">
            <div className="marquee-content">
              <span className="font-bold">
                SPECIAL OFFER! Buy 1 Get 1 Free! Limited Time Only! Order Now! Free Delivery on Orders Above Rs. 2000!
                Call Now: +92 332 1144770
              </span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Hero Section */}
      <section className="w-full py-8 md:py-12 bg-[url('https://img.freepik.com/premium-vector/cockroach-insect-seamless-pattern-background-pest-bug-top-view-flat-body-parasite-pollution-roaches-vector-illustration_342166-196.jpg?ga=GA1.1.853414003.1745658878&semt=ais_hybrid&w=740')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <Badge className="mb-2 bg-yellow-400 text-black hover:bg-yellow-500">100% EFFECTIVE</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                KILL ALL COCKROACHES <span className="text-primary blink-text">INSTANTLY!</span>
              </h1>
              <p className="text-white md:text-xl">
                <span className="font-bold">GUARANTEED RESULTS OR MONEY BACK!</span> Our powerful formula kills
                cockroaches on contact and prevents them from coming back for 6 months!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Link href="/product" className="w-full sm:w-1/2 md:w-[160px]">
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/80 text-white font-bold"
                  >
                    ORDER NOW
                  </Button>
                </Link>
                <Link href="/about" className="w-full sm:w-1/2 md:w-[160px]">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-2 bg-yellow-400 p-2 rounded-md w-full md:w-[340px]">
                <Phone className="h-5 w-5" />
                <span className="font-bold text-black">
                  ORDER BY PHONE: <a href="tel:+923321144770">+92 332 1144770</a>
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="w-full py-8 md:py-12 bg-yellow-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                COCKROACHES ARE DANGEROUS!
              </h2>
              <p className="max-w-[700px] text-black font-semibold md:text-xl/relaxed">
                They spread disease, contaminate food, and trigger allergies and asthma.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-8">
            <Card className="overflow-hidden border-2 border-primary">
              <div className="relative h-48">
                <Image
                  src="https://img.freepik.com/free-vector/inedible-bread-with-mould_1308-118577.jpg?ga=GA1.1.853414003.1745658878&semt=ais_hybrid&w=740"
                  alt="Cockroaches in kitchen"
                  fill
                  className="object-cover"
                />
                {/* Image description: Close-up of cockroaches crawling in a kitchen near food items */}
              </div>
              <CardContent className="p-4 bg-primary text-white">
                <h3 className="font-bold text-center">FOOD CONTAMINATION</h3>
                <p className="text-sm text-white/90 text-center">
                  Cockroaches contaminate food with bacteria, causing food poisoning and disease.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-2 border-primary">
              <div className="relative h-48">
                <Image
                  src="https://img.freepik.com/free-vector/coronavirus-symptoms-abstract-concept-illustration_335657-5060.jpg?ga=GA1.1.853414003.1745658878&semt=ais_hybrid&w=740"
                  alt="Child with asthma"
                  fill
                  className="object-cover"
                />
                {/* Image description: A child using an asthma inhaler, representing health issues caused by cockroaches */}
              </div>
              <CardContent className="p-4 bg-primary text-white">
                <h3 className="font-bold text-center">HEALTH RISKS</h3>
                <p className="text-sm text-white/90 text-center">
                  Cockroach allergens trigger asthma attacks and allergic reactions, especially in children.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-2 border-primary">
              <div className="relative h-48">
                <Image
                  src="https://img.freepik.com/free-vector/cartoon-cockroach-mascot_102902-2326.jpg?ga=GA1.1.853414003.1745658878&semt=ais_hybrid&w=740"
                  alt="Cockroach infestation"
                  fill
                  className="object-cover"
                />
                {/* Image description: Multiple cockroaches gathered in a dark corner, showing an infestation */}
              </div>
              <CardContent className="p-4 bg-primary text-white">
                <h3 className="font-bold text-center">RAPID REPRODUCTION</h3>
                <p className="text-sm text-white/90 text-center">
                  A single female cockroach can produce up to 400 offspring, creating massive infestations quickly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="w-full py-8 md:py-12 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden border-8 border-yellow-400 product-shadow">
              <Image
                src="/cocrogeproduct.jfif"
                alt="Cockroach Killer Product"
                fill
                className="object-contain bg-white p-4"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block bg-yellow-400 text-black font-bold px-4 py-2 rounded-md">#1 BEST SELLER</div>
              <h2 className="text-3xl md:text-4xl font-bold">KING KILLERS COCKROACH</h2>
              <div className="flex items-center gap-2">
                <div className="flex">
                  <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                </div>
                <span className="font-bold">(500+ Reviews)</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-yellow-400" />
                  <span className="font-bold">KILLS ON CONTACT</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-yellow-400" />
                  <span className="font-bold">LONG-LASTING PROTECTION (6 MONTHS)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-yellow-400" />
                  <span className="font-bold">SAFE FOR CHILDREN & PETS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-yellow-400" />
                  <span className="font-bold">ODORLESS FORMULA</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold line-through opacity-70">Rs. 999</div>
                <div className="text-4xl font-bold text-yellow-400">Rs. 499</div>
                <div className="bg-yellow-400 text-black font-bold px-2 py-1 rounded-md">50% OFF</div>
              </div>
              <Link href="/product">
                <Button size="lg" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg">
                  ORDER NOW
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-8 md:py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">HOW IT WORKS</h2>
              <p className="max-w-[700px] text-black font-semibold md:text-xl/relaxed">
                Our advanced formula targets cockroaches at every stage of their lifecycle.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-8">
            <div className="flex flex-col items-center space-y-4 text-center bg-yellow-50 p-6 rounded-lg border-2 border-primary">
              <div className="relative w-full h-40 mb-2">
                <Image
                  src="https://img.freepik.com/premium-vector/spray-kill-insects_124715-3864.jpg?ga=GA1.1.853414003.1745658878&semt=ais_hybrid&w=740"
                  alt="Spraying in corners"
                  fill
                  className="object-cover rounded-md"
                />
                {/* Image description: Person spraying the product in home corners and crevices */}
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-primary">OUR PRODUCT</h3>
              <p className="text-black font-medium">Add medicine in corners, cracks, and areas where cockroaches hide.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center bg-yellow-50 p-6 rounded-lg border-2 border-primary">
              <div className="relative w-full h-40 mb-2">
                <Image
                  src="https://img.freepik.com/free-vector/home-pest-insects-control-abstract-concept-illustration-pest-insects-control-vermin-exterminator-service-insect-thrips-equipment-diy-solution-home-garden-protection_335657-215.jpg?ga=GA1.1.853414003.1745658878&semt=ais_hybrid&w=740"
                  alt="Cockroaches attracted to spray"
                  fill
                  className="object-cover rounded-md"
                />
                {/* Image description: Cockroaches being drawn to the treated area */}
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-primary">ATTRACT</h3>
              <p className="text-black font-medium">
                Our special formula attracts cockroaches from their hiding places.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center bg-yellow-50 p-6 rounded-lg border-2 border-primary">
              <div className="relative w-full h-40 mb-2">
                <Image
                  src="https://img.freepik.com/free-vector/sticker-template-with-top-view-cockroach-isolated_1308-59246.jpg?ga=GA1.1.853414003.1745658878&semt=ais_hybrid&w=740"
                  alt="Dead cockroaches"
                  fill
                  className="object-cover rounded-md"
                />
                {/* Image description: Dead cockroaches showing the effectiveness of the product */}
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-primary">KILL</h3>
              <p className="text-black font-medium">
                Cockroaches are eliminated on contact and the barrier prevents new infestations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="w-full py-8 md:py-12 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">BEFORE & AFTER</h2>
              <p className="max-w-[700px] text-black font-semibold md:text-xl/relaxed">
                See the real difference our product makes.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-2 text-center">
              <div className="relative aspect-video rounded-xl overflow-hidden border-4 border-red-600">
                <Image
                  src="https://img.freepik.com/premium-photo/homemade-red-cockroaches-eating-sugar-dropped-ground-cockroach-invasion-insect-problems-home_72932-2928.jpg?w=996"
                  alt="Kitchen infested with cockroaches"
                  fill
                  className="object-cover"
                />
                {/* Image description: Kitchen with visible cockroach infestation */}
              </div>
              <h3 className="text-xl font-bold text-red-600">BEFORE TREATMENT</h3>
            </div>
            <div className="space-y-2 text-center">
              <div className="relative aspect-video rounded-xl overflow-hidden border-4 border-green-600">
                <Image
                  // src="https://www.lajaunies.com/wp-content/uploads/2024/04/dead-cockroach.webp"
                  src="https://img.freepik.com/premium-photo/dead-cockroaches-wooden-table_36043-687.jpg?uid=R183942898&ga=GA1.1.1215317229.1736098905&semt=ais_hybrid&w=740"
                  alt="Clean kitchen after treatment"
                  fill
                  className="object-cover"
                />
                {/* Image description: Same kitchen completely clean after treatment */}
              </div>
              <h3 className="text-xl font-bold text-green-600">AFTER TREATMENT</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-8 md:py-12 bg-yellow-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">CUSTOMER REVIEWS</h2>
              <p className="max-w-[700px] text-black font-semibold md:text-xl/relaxed">
                Don't just take our word for it. Here's what our customers have to say.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-8">
            <Card className="border-2 border-primary">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-black font-medium">
                  "I've tried many products but this is by far the most effective. My cockroach problem was gone within
                  days! Haven't seen a single one in 3 months."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-muted h-8 w-8">
                    <Image width={100} height={100} alt="" src="/usermale.jpeg" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Ahmed K.</p>
                    <p className="text-xs text-muted-foreground">Lahore</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-black font-medium">
                  "As a mother of two, I was concerned about using pest control products. This is safe and effective -
                  exactly what I needed! My kitchen is finally cockroach-free."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-muted h-8 w-8">

                    <Image width={80} height={80} alt="" src="/userfemale.jpeg" />

                  </div>
                  <div>
                    <p className="text-sm font-bold">Fatima S.</p>
                    <p className="text-xs text-muted-foreground">Karachi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-muted stroke-muted-foreground" />
                </div>
                <p className="text-black font-medium">
                  "I run a restaurant and this product has been a lifesaver. Easy to use and keeps the pests away for
                  months. Health inspectors were impressed with our pest control."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-muted h-8 w-8">
                    <Image width={80} height={80} alt="" src="/usermale.jpeg" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Imran M.</p>
                    <p className="text-xs text-muted-foreground">Islamabad</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Urdu Section */}
      <section className="w-full py-8 md:py-12 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">NOW AVAILABLE IN PAKISTAN!</h2>
              <p className="text-xl">
                Get the best cockroach killer medicine delivered to your doorstep anywhere in Pakistan.
              </p>
              <div className="urdu-text text-2xl font-bold">کاکروچ کلر دوائی - گھر کی صفائی کا بہترین حل</div>
              <div className="urdu-text text-lg">
                ہمارا کاکروچ کلر دوائی پاکستان میں اب دستیاب ہے۔ ابھی آرڈر کریں اور گھر کو کیڑوں سے پاک رکھیں۔
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Bug className="h-40 w-40 text-white/20 rotating-bug" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <X className="h-60 w-60 text-red-500/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-8 md:py-12 bg-yellow-400">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="relative h-[300px] rounded-xl overflow-hidden border-4 border-primary">
              <Image
                src="/cocrogeproduct.jfif"
                alt="Cockroach Killer Product"
                fill
                className="object-cover"
              />
              {/* Image description: Professional photo of the product package showing the brand name and cockroach imagery */}
            </div>
            <div className="flex flex-col items-center md:items-start justify-center space-y-4 text-center md:text-left">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-black">ORDER NOW!</h2>
                <p className="max-w-[700px] text-black font-bold md:text-xl/relaxed">
                  hurry up order now and prevant the cockroach
                </p>
                <div className="text-4xl font-bold text-primary">Rs. 499 ONLY!</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Link href="/product" className="w-full">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/80 text-white font-bold text-lg">
                    BUY NOW
                  </Button>
                </Link>
                <a href="tel:+923321144770" className="w-full">
                  <Button size="lg" variant="outline" className="w-full border-primary text-primary font-bold">
                    <Phone className="mr-2 h-4 w-4" />
                    CALL TO ORDER
                  </Button>
                </a>
              </div>
              <div className="bg-white p-2 rounded-md text-black font-bold text-center w-full">
                Cash on Delivery Available All Over Pakistan!
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
