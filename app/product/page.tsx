import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  Check,
  ShieldCheck,
  Truck,
  RotateCcw,
  Bug,
  ThumbsUp,
  AlertTriangle,
  CheckCircle,
  X,
  Clock,
  Droplets,
  Phone,
} from "lucide-react"

export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Announcement Bar */}
      <div className="bg-yellow-400 py-2">
        <div className="container">
          <div className="marquee">
            <div className="marquee-content">
              <span className="font-bold">
                SPECIAL OFFER! Buy 1 Get 1 Free! Limited Time Only! Order Now! Free Delivery on Orders Above Rs. 2000!
                Call Now: +92 300 1234567
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <section className="w-full py-8 md:py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square overflow-hidden rounded-lg border-4 border-primary bg-white text-black">
                <Image
                  src="/cocrogeproduct.jfif"
                  alt="CockroachKiller Pro Formula Spray Bottle"
                  fill
                  className="object-contain p-4"  
                  priority
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold">BEST SELLER</Badge>
                </div>
                <div className="absolute bottom-4 right-4 price-tag text-2xl text-black" style={{color:'#BD2423'}}>50% OFF</div>
              </div>
              {/* <div className="grid grid-cols-4 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-primary bg-white">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Product close-up"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-primary bg-white">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Product in use"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-primary bg-white">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Dead cockroach result"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-primary bg-white">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Product size reference"
                    fill
                    className="object-cover"
                  />
                </div>
              </div> */}
            </div>
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <Badge className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold">BEST SELLER</Badge>
                <h1 className="text-3xl font-bold text-primary">COCKROACH KILLER PRO FORMULA</h1>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  </div>
                  <span className="text-sm font-bold">(500+ reviews)</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold line-through opacity-70">Rs. 999</div>
                  <div className="text-4xl font-bold text-primary">Rs. 499</div>
                </div>
                <div className="bg-yellow-400 p-2 rounded-md text-black font-bold text-center">
                  LIMITED TIME OFFER! 50% OFF + FREE DELIVERY
                </div>
                <p className="text-black font-medium">
                  Our advanced formula is designed to eliminate cockroaches at every stage of their lifecycle. Safe for
                  homes with children and pets.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="font-bold">KILLS ON CONTACT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="font-bold">LONG-LASTING PROTECTION (6 MONTHS)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="font-bold">SAFE FOR CHILDREN & PETS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="font-bold">ODORLESS & NON-STAINING</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="quantity" className="text-sm font-bold">
                    QUANTITY
                  </label>
                  <select
                    id="quantity"
                    className="rounded-md border-2 border-primary bg-background px-3 py-2 font-bold"
                    defaultValue="1"
                  >
                    <option value="1">1</option>
                    <option value="2">2 (Buy 1 Get 1 Free!)</option>
                    <option value="3">3</option>
                    <option value="4">4 (Buy 2 Get 2 Free!)</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/80 text-white font-bold text-lg">
                  ADD TO CART
                </Button>
                <Link href="/checkout">
                  <Button variant="outline" size="lg" className="w-full border-primary text-primary font-bold">
                    BUY NOW
                  </Button>
                </Link>
              </div>
              <div className="bg-yellow-50 p-4 rounded-md border-2 border-yellow-400">
                <div className="flex items-center gap-2 font-bold">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>ORDER BY PHONE: +92 300 1234567</span>
                </div>
                <div className="flex items-center gap-2 mt-2 font-bold">
                  <Truck className="h-5 w-5 text-primary" />
                  <span>FREE DELIVERY ON ORDERS ABOVE RS. 2000</span>
                </div>
                <div className="flex items-center gap-2 mt-2 font-bold">
                  <RotateCcw className="h-5 w-5 text-primary" />
                  <span>100% MONEY BACK GUARANTEE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Information Tabs */}
      <section className="w-full py-8 md:py-12 bg-yellow-50">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger
                value="description"
                className="data-[state=active]:bg-primary data-[state=active]:text-white font-bold"
              >
                DESCRIPTION
              </TabsTrigger>
              <TabsTrigger
                value="specifications"
                className="data-[state=active]:bg-primary data-[state=active]:text-white font-bold"
              >
                SPECIFICATIONS
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="data-[state=active]:bg-primary data-[state=active]:text-white font-bold"
              >
                REVIEWS
              </TabsTrigger>
            </TabsList>

            {/* Description Tab */}
            <TabsContent value="description" className="p-6 bg-white rounded-lg mt-2 border-2 border-primary">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Bug className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold text-primary">PRODUCT DESCRIPTION</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <p className="text-black font-medium">
                        <span className="font-bold text-primary">COCKROACH KILLER PRO FORMULA</span> is a
                        professional-grade cockroach elimination solution designed for home use. Our unique formula
                        targets cockroaches at every stage of their lifecycle, from eggs to adults, ensuring complete
                        eradication of infestations.
                      </p>
                      <p className="text-black font-medium">
                        Unlike other products on the market, our formula creates a long-lasting barrier that continues
                        to work for up to 6 months after application. This means you don't just eliminate the current
                        infestation - you prevent future ones as well.
                      </p>
                      <p className="text-black font-medium">
                        Our formula is odorless, non-staining, and dries quickly after application. It's safe to use
                        around children and pets when used as directed, making it the perfect solution for families
                        concerned about harmful chemicals.
                      </p>
                    </div>

                    <div className="relative h-[300px] rounded-lg overflow-hidden border-4 border-primary">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Product demonstration"
                        fill
                        className="object-cover"
                      />
                      {/* Image description: Visual demonstration of product being applied in home setting */}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-yellow-50 border-2 border-primary">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
                        <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-primary">KILLS ON CONTACT</h4>
                      <p className="text-black font-medium">
                        Our fast-acting formula eliminates cockroaches within seconds of direct contact.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-yellow-50 border-2 border-primary">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
                        <X className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-primary">PREVENTS EGGS</h4>
                      <p className="text-black font-medium">
                        Disrupts the reproductive cycle, preventing eggs from hatching and new infestations.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-yellow-50 border-2 border-primary">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
                        <Clock className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-primary">LONG-LASTING</h4>
                      <p className="text-black font-medium">
                        Creates an invisible barrier that continues to protect your home for up to 6 months.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Droplets className="h-8 w-8 text-primary" />
                    <h4 className="text-xl font-bold text-primary">HOW TO USE</h4>
                  </div>

                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="border-2 border-primary rounded-lg p-4 text-center space-y-2 bg-yellow-50">
                      <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto font-bold text-xl">
                        1
                      </div>
                      <h5 className="font-bold text-primary">SHAKE WELL</h5>
                      <p className="text-sm text-black font-medium">Shake the bottle thoroughly before use.</p>
                    </div>

                    <div className="border-2 border-primary rounded-lg p-4 text-center space-y-2 bg-yellow-50">
                      <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto font-bold text-xl">
                        2
                      </div>
                      <h5 className="font-bold text-primary">DIRECT SPRAY</h5>
                      <p className="text-sm text-black font-medium">
                        Spray directly on cockroaches for immediate elimination.
                      </p>
                    </div>

                    <div className="border-2 border-primary rounded-lg p-4 text-center space-y-2 bg-yellow-50">
                      <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto font-bold text-xl">
                        3
                      </div>
                      <h5 className="font-bold text-primary">APPLY TO AREAS</h5>
                      <p className="text-sm text-black font-medium">
                        Spray in cracks, crevices, and areas where cockroaches hide.
                      </p>
                    </div>

                    <div className="border-2 border-primary rounded-lg p-4 text-center space-y-2 bg-yellow-50">
                      <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto font-bold text-xl">
                        4
                      </div>
                      <h5 className="font-bold text-primary">REAPPLY</h5>
                      <p className="text-sm text-black font-medium">
                        Reapply every 6 months for continuous protection.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
                  <div className="flex gap-4 items-start">
                    <AlertTriangle className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary">SAFETY PRECAUTIONS</h4>
                      <ul className="mt-2 space-y-2 text-black font-medium">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Keep out of reach of children and pets until dry.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Avoid contact with eyes and skin. Wash hands after use.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Do not spray directly on food, utensils, or food preparation surfaces.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Store in a cool, dry place away from direct sunlight.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Specifications Tab */}
            <TabsContent value="specifications" className="p-6 bg-white rounded-lg mt-2 border-2 border-primary">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <ThumbsUp className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold text-primary">PRODUCT SPECIFICATIONS</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-primary border-b-2 border-primary pb-2">
                          PHYSICAL PROPERTIES
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <h5 className="font-bold">Contents</h5>
                            <p className="text-black font-medium">500ml spray bottle</p>
                          </div>
                          <div className="space-y-1">
                            <h5 className="font-bold">Form</h5>
                            <p className="text-black font-medium">Liquid spray</p>
                          </div>
                          <div className="space-y-1">
                            <h5 className="font-bold">Color</h5>
                            <p className="text-black font-medium">Clear</p>
                          </div>
                          <div className="space-y-1">
                            <h5 className="font-bold">Odor</h5>
                            <p className="text-black font-medium">Odorless</p>
                          </div>
                          <div className="space-y-1">
                            <h5 className="font-bold">pH Level</h5>
                            <p className="text-black font-medium">7.2 (Neutral)</p>
                          </div>
                          <div className="space-y-1">
                            <h5 className="font-bold">Shelf Life</h5>
                            <p className="text-black font-medium">3 years (unopened)</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-primary border-b-2 border-primary pb-2">PERFORMANCE</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <h5 className="font-bold">Coverage Area</h5>
                            <p className="text-black font-medium">Up to 2000 sq. ft.</p>
                          </div>
                          <div className="space-y-1">
                            <h5 className="font-bold">Duration of Effect</h5>
                            <p className="text-black font-medium">Up to 6 months</p>
                          </div>
                          <div className="space-y-1">
                            <h5 className="font-bold">Kill Time</h5>
                            <p className="text-black font-medium">30 seconds on contact</p>
                          </div>
                          <div className="space-y-1">
                            <h5 className="font-bold">Residual Effect</h5>
                            <p className="text-black font-medium">Yes</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-primary border-b-2 border-primary pb-2">
                          INGREDIENTS & SAFETY
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <h5 className="font-bold">Active Ingredients</h5>
                            <p className="text-black font-medium">
                              Proprietary blend of natural and synthetic compounds
                            </p>
                          </div>
                          <div className="space-y-1">
                            <h5 className="font-bold">Child Safe</h5>
                            <p className="text-black font-medium">Yes (when used as directed)</p>
                          </div>
                          <div className="space-y-1">
                            <h5 className="font-bold">Pet Safe</h5>
                            <p className="text-black font-medium">Yes (when used as directed)</p>
                          </div>
                          <div className="space-y-1">
                            <h5 className="font-bold">Eco-Friendly</h5>
                            <p className="text-black font-medium">Yes</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-primary border-b-2 border-primary pb-2">
                          USAGE & STORAGE
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <h5 className="font-bold">Application Method</h5>
                            <p className="text-black font-medium">Spray</p>
                          </div>
                          <div className="space-y-1">
                            <h5 className="font-bold">Reapplication</h5>
                            <p className="text-black font-medium">Every 6 months</p>
                          </div>
                          <div className="space-y-1">
                            <h5 className="font-bold">Storage</h5>
                            <p className="text-black font-medium">Cool, dry place away from direct sunlight</p>
                          </div>
                          <div className="space-y-1">
                            <h5 className="font-bold">Temperature Range</h5>
                            <p className="text-black font-medium">5°C to 30°C</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-primary border-b-2 border-primary pb-2">
                    EFFECTIVENESS AGAINST PESTS
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card className="bg-yellow-50 border-2 border-primary">
                      <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Bug className="h-10 w-10 text-primary" />
                        </div>
                        <h5 className="font-bold text-primary">COCKROACHES</h5>
                        <div className="flex items-center justify-center mt-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-gray-300">
                      <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Bug className="h-10 w-10" />
                        </div>
                        <h5 className="font-bold">ANTS</h5>
                        <div className="flex items-center justify-center mt-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-gray-300">
                      <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Bug className="h-10 w-10" />
                        </div>
                        <h5 className="font-bold">SPIDERS</h5>
                        <div className="flex items-center justify-center mt-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4" />
                          <Star className="h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-gray-300">
                      <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Bug className="h-10 w-10" />
                        </div>
                        <h5 className="font-bold">SILVERFISH</h5>
                        <div className="flex items-center justify-center mt-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6 border-2 border-primary">
                  <div className="flex gap-4 items-start">
                    <ShieldCheck className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary">CERTIFICATIONS & COMPLIANCE</h4>
                      <ul className="mt-2 space-y-2 text-black font-medium">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-1" />
                          <span>ISO 9001:2015 Certified Manufacturing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-1" />
                          <span>Compliant with Pesticide Regulation Standards</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-1" />
                          <span>Dermatologically Tested</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-1" />
                          <span>Non-toxic Formula Certification</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="p-6 bg-white rounded-lg mt-2 border-2 border-primary">
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                      <h3 className="text-2xl font-bold text-primary">CUSTOMER REVIEWS</h3>
                    </div>
                    <p className="text-black font-medium">See what our customers have to say about our product</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">4.9</div>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      </div>
                      <div className="text-sm font-bold">(500+ reviews)</div>
                    </div>

                    <div className="h-16 w-px bg-border mx-2"></div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium w-2">5</div>
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="bg-primary h-full" style={{ width: "85%" }}></div>
                        </div>
                        <div className="text-sm font-bold">85%</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium w-2">4</div>
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="bg-primary h-full" style={{ width: "10%" }}></div>
                        </div>
                        <div className="text-sm font-bold">10%</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium w-2">3</div>
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="bg-primary h-full" style={{ width: "3%" }}></div>
                        </div>
                        <div className="text-sm font-bold">3%</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium w-2">2</div>
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="bg-primary h-full" style={{ width: "1%" }}></div>
                        </div>
                        <div className="text-sm font-bold">1%</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium w-2">1</div>
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="bg-primary h-full" style={{ width: "1%" }}></div>
                        </div>
                        <div className="text-sm font-bold">1%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border-2 border-primary rounded-lg p-6 bg-yellow-50">
                    <div className="flex items-start gap-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted">
                        <Image src="/placeholder.svg?height=48&width=48" alt="Ahmed K." fill className="object-cover" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold">Ahmed K.</h4>
                            <p className="text-sm font-medium">Lahore • Verified Purchase</p>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          </div>
                        </div>
                        <h5 className="font-bold text-primary">FINALLY, A PRODUCT THAT ACTUALLY WORKS!</h5>
                        <p className="text-black font-medium">
                          "I've tried many products over the years, but this is by far the most effective. My cockroach
                          problem was completely gone within a week of application. I was skeptical at first because
                          I've been disappointed by so many products before, but this one truly delivered results.
                          Highly recommended!"
                        </p>
                        <div className="pt-2 flex gap-2">
                          <div className="relative h-16 w-16 rounded-md overflow-hidden border-2 border-primary">
                            <Image
                              src="/placeholder.svg?height=64&width=64"
                              alt="Customer photo"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="relative h-16 w-16 rounded-md overflow-hidden border-2 border-primary">
                            <Image
                              src="/placeholder.svg?height=64&width=64"
                              alt="Customer photo"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="pt-2 flex items-center gap-4 text-sm">
                          <span className="font-medium">2 months ago</span>
                          <button className="flex items-center gap-1 text-primary hover:underline font-bold">
                            <ThumbsUp className="h-4 w-4" />
                            Helpful (24)
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-2 border-primary rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Fatima S."
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold">Fatima S.</h4>
                            <p className="text-sm font-medium">Karachi • Verified Purchase</p>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          </div>
                        </div>
                        <h5 className="font-bold text-primary">SAFE FOR FAMILIES AND EXTREMELY EFFECTIVE</h5>
                        <p className="text-black font-medium">
                          "As a mother of two young children, I was concerned about using pest control products in my
                          home. This product gave me peace of mind with its safety features while effectively
                          eliminating our cockroach problem. It's been 3 months and no sign of them returning! The
                          odorless formula is a huge plus."
                        </p>
                        <div className="pt-2 flex items-center gap-4 text-sm">
                          <span className="font-medium">3 months ago</span>
                          <button className="flex items-center gap-1 text-primary hover:underline font-bold">
                            <ThumbsUp className="h-4 w-4" />
                            Helpful (18)
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-2 border-primary rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted">
                        <Image src="/placeholder.svg?height=48&width=48" alt="Imran M." fill className="object-cover" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold">Imran M.</h4>
                            <p className="text-sm font-medium">Islamabad • Verified Purchase</p>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4" />
                          </div>
                        </div>
                        <h5 className="font-bold text-primary">GREAT PRODUCT, SPRAY NOZZLE COULD BE IMPROVED</h5>
                        <p className="text-black font-medium">
                          "Works great for eliminating cockroaches. The only reason I'm giving 4 stars instead of 5 is
                          that the spray nozzle could be improved for better reach in tight spaces. Otherwise, excellent
                          product! I've recommended it to several friends who were also struggling with cockroach
                          problems."
                        </p>
                        <div className="pt-2 flex items-center gap-4 text-sm">
                          <span className="font-medium">1 month ago</span>
                          <button className="flex items-center gap-1 text-primary hover:underline font-bold">
                            <ThumbsUp className="h-4 w-4" />
                            Helpful (12)
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button className="bg-primary hover:bg-primary/80 text-white font-bold">LOAD MORE REVIEWS</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Order Now Section */}
      <section className="w-full py-8 md:py-12 bg-yellow-400">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="relative h-[300px] rounded-xl overflow-hidden border-4 border-primary">
              <Image
                src="/placeholder.svg?height=500&width=500"
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
                  Limited Time Offer: 50% OFF + Free Delivery
                </p>
                <div className="text-4xl font-bold text-primary">Rs. 499 ONLY!</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Link href="/checkout" className="w-full">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/80 text-white font-bold text-lg">
                    BUY NOW
                  </Button>
                </Link>
                <Link href="/contact" className="w-full">
                  <Button size="lg" variant="outline" className="w-full border-primary text-primary font-bold">
                    <Phone className="mr-2 h-4 w-4" />
                    CALL TO ORDER
                  </Button>
                </Link>
              </div>
              <div className="bg-white p-2 rounded-md text-black font-bold text-center w-full">
                Cash on Delivery Available All Over Pakistan!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="w-full py-8 md:py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">YOU MAY ALSO LIKE</h2>
              <p className="max-w-[700px] text-black font-medium md:text-xl/relaxed">
                Complete your pest control arsenal with these complementary products.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card className="overflow-hidden border-2 border-primary">
              <div className="relative aspect-square bg-white">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Ant Control Spray"
                  fill
                  className="object-contain p-4 transition-all hover:scale-105"
                />
              </div>
              <CardContent className="p-4 bg-yellow-50">
                <h3 className="font-bold text-primary">ANT CONTROL SPRAY</h3>
                <p className="text-sm text-black font-medium">Eliminate ant infestations effectively</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-bold text-lg">Rs. 399</span>
                  <Button className="bg-primary hover:bg-primary/80 text-white font-bold">ADD TO CART</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-2 border-primary">
              <div className="relative aspect-square bg-white">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Mosquito Repellent"
                  fill
                  className="object-contain p-4 transition-all hover:scale-105"
                />
              </div>
              <CardContent className="p-4 bg-yellow-50">
                <h3 className="font-bold text-primary">MOSQUITO REPELLENT</h3>
                <p className="text-sm text-black font-medium">Long-lasting protection against mosquitoes</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-bold text-lg">Rs. 349</span>
                  <Button className="bg-primary hover:bg-primary/80 text-white font-bold">ADD TO CART</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-2 border-primary">
              <div className="relative aspect-square bg-white">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Pest Control Kit"
                  fill
                  className="object-contain p-4 transition-all hover:scale-105"
                />
              </div>
              <CardContent className="p-4 bg-yellow-50">
                <h3 className="font-bold text-primary">COMPLETE PEST CONTROL KIT</h3>
                <p className="text-sm text-black font-medium">All-in-one solution for household pests</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-bold text-lg">Rs. 999</span>
                  <Button className="bg-primary hover:bg-primary/80 text-white font-bold">ADD TO CART</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
