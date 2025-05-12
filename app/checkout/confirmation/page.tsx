"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Package, Clock, ArrowRight } from "lucide-react"

export default function ConfirmationPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId") || "ORD-" + Math.floor(100000 + Math.random() * 900000)

  // In a real app, you would fetch order details from a database or API
  const orderDetails = {
    orderNumber: orderId,
    orderDate: new Date().toLocaleDateString(),
    estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    items: [
      {
        name: "COCKROACH KILLER PRO FORMULA",
        quantity: 1,
        price: 499.0,
      },
    ],
    shipping: 50.0,
    total: 549.0,
  }

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <Card className="overflow-hidden">
          <div className="bg-primary p-8 flex flex-col items-center justify-center text-center">
            <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center mb-4">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-white">Order Confirmed!</h1>
            <p className="text-primary-foreground/80 mt-2">
              Thank you for your purchase. Your order has been received.
            </p>
          </div>

          <CardContent className="p-8 space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Order Number</p>
                <p className="font-medium">{orderDetails.orderNumber}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Order Date</p>
                <p className="font-medium">{orderDetails.orderDate}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                <p className="font-medium">{orderDetails.estimatedDelivery}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Payment Method</p>
                <p className="font-medium">Cash on Delivery</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Order Summary</h2>

              <div className="border rounded-md divide-y">
                {orderDetails.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden border">
                      <Image src="/placeholder.svg?height=64&width=64" alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                    </div>
                    <div className="font-medium">₹{item.price.toFixed(2)}</div>
                  </div>
                ))}

                <div className="p-4 bg-muted/30 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>
                      ₹{orderDetails.items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>₹{orderDetails.shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹{orderDetails.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">What's Next?</h2>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="border rounded-md p-4 flex gap-3">
                  <Package className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Order Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      Your order is being processed and will be shipped soon.
                    </p>
                  </div>
                </div>
                <div className="border rounded-md p-4 flex gap-3">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Delivery Updates</h3>
                    <p className="text-sm text-muted-foreground">
                      You'll receive email updates about your delivery status.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/" className="flex-1">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
              <Link href="/account/orders" className="flex-1">
                <Button className="w-full">
                  Track Order
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
