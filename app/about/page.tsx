import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Leaf, Bug, Shield, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('https://img.freepik.com/premium-vector/cockroach-insect-seamless-pattern-background-pest-bug-top-view-flat-body-parasite-pollution-roaches-vector-illustration_342166-196.jpg?ga=GA1.1.853414003.1745658878&semt=ais_hybrid&w=740')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
                            <Badge className="mb-2 bg-yellow-400 text-black hover:bg-yellow-500">100% EFFECTIVE</Badge>

              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                About  <span className="text-primary blink-text">King Killers</span>
              </h1>
              <p className="text-white/80 md:text-xl">
                We're on a mission to help families and businesses eliminate pest problems with safe, effective, and
                affordable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
              <Image src="/cocrogeproduct.jfif" alt="Our Story" fill className="object-cover" />
              {/* Image description: Scientist in lab working on cockroach killer formula */}
            </div>
            <div className="order-1 lg:order-2 space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2010, CockroachKiller began with a simple goal: to create pest control products that actually
                work without compromising on safety.
              </p>
              <p className="text-muted-foreground">
                Our founder, Dr. James Wilson, a renowned entomologist, was frustrated with the ineffective and harmful
                pest control options available on the market. After years of research and development, he created our
                flagship product - a revolutionary cockroach killer that's both highly effective and safe for families.
              </p>
              <p className="text-muted-foreground">
                Today, we've helped over 1 million households and businesses eliminate cockroach infestations and
                maintain pest-free environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Cockroach Problem</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Why cockroaches are more than just a nuisance.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
            <Card className="bg-background border-2 border-primary/20">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Bug className="h-12 w-12 text-destructive" />
                <h3 className="text-xl font-bold">Disease Carriers</h3>
                <p className="text-muted-foreground">
                  Cockroaches can spread at least 33 kinds of bacteria, including E. coli and Salmonella.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-2 border-primary/20">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Shield className="h-12 w-12 text-destructive" />
                <h3 className="text-xl font-bold">Health Hazards</h3>
                <p className="text-muted-foreground">
                  Their droppings, saliva, and shed skin can trigger asthma attacks and allergies.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-2 border-primary/20">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <X className="h-12 w-12 text-destructive" />
                <h3 className="text-xl font-bold">Hard to Eliminate</h3>
                <p className="text-muted-foreground">
                  Cockroaches are notoriously resilient and can quickly develop resistance to many pesticides.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                The principles that guide everything we do.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            <Card className="bg-background">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Leaf className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Safety First</h3>
                <p className="text-muted-foreground">
                  We never compromise on the safety of our products for families, pets, and the environment.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <CheckCircle className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Effectiveness</h3>
                <p className="text-muted-foreground">
                  Our products are rigorously tested to ensure they deliver the results we promise.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Customer Focus</h3>
                <p className="text-muted-foreground">
                  We listen to our customers and continuously improve our products based on their feedback.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Award className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  We're constantly researching and developing new solutions to stay ahead of pest resistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      {/* <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                The experts behind our innovative pest control solutions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Dr. James Wilson"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Dr. James Wilson</h3>
                <p className="text-muted-foreground">Founder & Chief Scientist</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=160&width=160" alt="Sarah Johnson" fill className="object-cover" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-muted-foreground">Head of Product Development</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=160&width=160" alt="Michael Chen" fill className="object-cover" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Michael Chen</h3>
                <p className="text-muted-foreground">Customer Success Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">  
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Thousands of Satisfied Customers</h2>
              <p className="max-w-[700px] md:text-xl/relaxed">
                Experience the difference with our premium cockroach killer.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/product">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Shop Now
                </Button>
              </Link>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
