// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Separator } from "@/components/ui/separator"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Checkbox } from "@/components/ui/checkbox"
// import {
//   ShieldCheck,
//   CreditCard,
//   Truck,
//   MapPin,
//   CheckCircle2,
//   ArrowRight,
//   Bug,
//   Package,
//   Clock,
//   AlertCircle,
// } from "lucide-react"
// import { useToast } from "@/hooks/use-toast"

// // Import the server action at the top of the file
// import { submitOrderToGoogleSheet } from "@/app/actions/order-actions"

// export default function CheckoutPage() {
//   const [step, setStep] = useState("shipping")
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     pincode: "",
//     paymentMethod: "cod",
//     cardNumber: "",
//     cardName: "",
//     cardExpiry: "",
//     cardCvv: "",
//     saveInfo: false,
//     agreeTerms: false,
//   })
//   const [errors, setErrors] = useState({})
//   const { toast } = useToast()

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))

//     // Clear error when field is edited
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: null }))
//     }
//   }

//   const handleCheckboxChange = (name, checked) => {
//     setFormData((prev) => ({ ...prev, [name]: checked }))

//     // Clear error when field is edited
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: null }))
//     }
//   }

//   const validateShipping = () => {
//     const newErrors = {}
//     const requiredFields = ["firstName", "lastName", "email", "phone", "address", "city", "pincode"]

//     requiredFields.forEach((field) => {
//       if (!formData[field]) {
//         newErrors[field] = "This field is required"
//       }
//     })

//     if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email"
//     }

//     if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = "Please enter a valid 10-digit phone number"
//     }

//     if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) {
//       newErrors.pincode = "Please enter a valid 6-digit PIN code"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const validatePayment = () => {
//     const newErrors = {}

//     if (formData.paymentMethod === "card") {
//       if (!formData.cardNumber) {
//         newErrors.cardNumber = "Card number is required"
//       } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) {
//         newErrors.cardNumber = "Please enter a valid 16-digit card number"
//       }

//       if (!formData.cardName) {
//         newErrors.cardName = "Name on card is required"
//       }

//       if (!formData.cardExpiry) {
//         newErrors.cardExpiry = "Expiry date is required"
//       } else if (!/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) {
//         newErrors.cardExpiry = "Please use MM/YY format"
//       }

//       if (!formData.cardCvv) {
//         newErrors.cardCvv = "CVV is required"
//       } else if (!/^\d{3}$/.test(formData.cardCvv)) {
//         newErrors.cardCvv = "Please enter a valid 3-digit CVV"
//       }
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const validateReview = () => {
//     const newErrors = {}

//     if (!formData.agreeTerms) {
//       newErrors.agreeTerms = "You must agree to the terms and conditions"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleNext = () => {
//     if (step === "shipping" && validateShipping()) {
//       setStep("payment")
//     } else if (step === "payment" && validatePayment()) {
//       setStep("review")
//     }
//   }

//   const handleBack = () => {
//     if (step === "payment") {
//       setStep("shipping")
//     } else if (step === "review") {
//       setStep("payment")
//     }
//   }

//   // Replace the handleSubmit function with this updated version:
//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (validateReview()) {
//       // Create FormData object
//       const formData = new FormData(e.target)
//       formData.append("quantity", "1") // Add quantity - you can update this to use actual quantity

//       // Submit order to Google Sheet
//       const result = await submitOrderToGoogleSheet(formData)

//       if (result.success) {
//         toast({
//           title: "Order Placed Successfully!",
//           description: `Your order #${result.orderId} has been placed. You will receive a confirmation email shortly.`,
//         })

//         // Redirect to confirmation page
//         setTimeout(() => {
//           window.location.href = `/checkout/confirmation?orderId=${result.orderId}`
//         }, 2000)
//       } else {
//         toast({
//           title: "Error",
//           description: result.message,
//           variant: "destructive",
//         })
//       }
//     }
//   }

//   return (
//     <div className="min-h-screen bg-muted/30 py-12">
//       <div className="container px-4 md:px-6">
//         <div className="mb-8">
//           <Link href="/product" className="text-primary hover:underline flex items-center gap-2">
//             <ArrowRight className="h-4 w-4 rotate-180" />
//             <span>Back to Product</span>
//           </Link>
//         </div>

//         <div className="grid gap-8 lg:grid-cols-3">
//           {/* Main Checkout Form */}
//           <div className="lg:col-span-2">
//             <Card className="overflow-hidden">
//               <div className="bg-primary p-6">
//                 <h1 className="text-2xl font-bold text-white flex items-center gap-2">
//                   <Bug className="h-6 w-6" />
//                   Complete Your Purchase
//                 </h1>
//               </div>

//               {/* Checkout Steps */}
//               <div className="p-1">
//                 <Tabs value={step} className="w-full">
//                   <TabsList className="grid w-full grid-cols-3">
//                     <TabsTrigger
//                       value="shipping"
//                       onClick={() => step !== "shipping" && validateShipping() && setStep("shipping")}
//                       className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
//                     >
//                       <div className="flex items-center gap-2">
//                         <MapPin className="h-4 w-4" />
//                         <span className="hidden sm:inline">Shipping</span>
//                       </div>
//                     </TabsTrigger>
//                     <TabsTrigger
//                       value="payment"
//                       onClick={() => {
//                         if (step === "review" || (step === "shipping" && validateShipping())) {
//                           setStep("payment")
//                         }
//                       }}
//                       className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
//                     >
//                       <div className="flex items-center gap-2">
//                         <CreditCard className="h-4 w-4" />
//                         <span className="hidden sm:inline">Payment</span>
//                       </div>
//                     </TabsTrigger>
//                     <TabsTrigger
//                       value="review"
//                       onClick={() => {
//                         if (step === "payment" && validatePayment()) {
//                           setStep("review")
//                         }
//                       }}
//                       className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
//                     >
//                       <div className="flex items-center gap-2">
//                         <CheckCircle2 className="h-4 w-4" />
//                         <span className="hidden sm:inline">Review</span>
//                       </div>
//                     </TabsTrigger>
//                   </TabsList>

//                   <form onSubmit={handleSubmit}>
//                     {/* Shipping Information */}
//                     <TabsContent value="shipping" className="p-6 space-y-6">
//                       <div className="space-y-2">
//                         <h2 className="text-xl font-semibold">Shipping Information</h2>
//                         <p className="text-muted-foreground">Enter your details for delivery</p>
//                       </div>

//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="space-y-2">
//                           <Label htmlFor="firstName">
//                             First Name <span className="text-destructive">*</span>
//                           </Label>
//                           <Input
//                             id="firstName"
//                             name="firstName"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             placeholder="Enter your first name"
//                             className={errors.firstName ? "border-destructive" : ""}
//                           />
//                           {errors.firstName && <p className="text-destructive text-sm">{errors.firstName}</p>}
//                         </div>

//                         <div className="space-y-2">
//                           <Label htmlFor="lastName">
//                             Last Name <span className="text-destructive">*</span>
//                           </Label>
//                           <Input
//                             id="lastName"
//                             name="lastName"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                             placeholder="Enter your last name"
//                             className={errors.lastName ? "border-destructive" : ""}
//                           />
//                           {errors.lastName && <p className="text-destructive text-sm">{errors.lastName}</p>}
//                         </div>

//                         <div className="space-y-2">
//                           <Label htmlFor="email">
//                             Email <span className="text-destructive">*</span>
//                           </Label>
//                           <Input
//                             id="email"
//                             name="email"
//                             type="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             placeholder="Enter your email"
//                             className={errors.email ? "border-destructive" : ""}
//                           />
//                           {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
//                         </div>

//                         <div className="space-y-2">
//                           <Label htmlFor="phone">
//                             Phone <span className="text-destructive">*</span>
//                           </Label>
//                           <Input
//                             id="phone"
//                             name="phone"
//                             value={formData.phone}
//                             onChange={handleChange}
//                             placeholder="Enter your phone number"
//                             className={errors.phone ? "border-destructive" : ""}
//                           />
//                           {errors.phone && <p className="text-destructive text-sm">{errors.phone}</p>}
//                         </div>

//                         <div className="space-y-2 md:col-span-2">
//                           <Label htmlFor="address">
//                             Address <span className="text-destructive">*</span>
//                           </Label>
//                           <Input
//                             id="address"
//                             name="address"
//                             value={formData.address}
//                             onChange={handleChange}
//                             placeholder="Enter your address"
//                             className={errors.address ? "border-destructive" : ""}
//                           />
//                           {errors.address && <p className="text-destructive text-sm">{errors.address}</p>}
//                         </div>

//                         <div className="space-y-2">
//                           <Label htmlFor="city">
//                             City <span className="text-destructive">*</span>
//                           </Label>
//                           <Input
//                             id="city"
//                             name="city"
//                             value={formData.city}
//                             onChange={handleChange}
//                             placeholder="Enter your city"
//                             className={errors.city ? "border-destructive" : ""}
//                           />
//                           {errors.city && <p className="text-destructive text-sm">{errors.city}</p>}
//                         </div>

//                         <div className="space-y-2">
//                           <Label htmlFor="pincode">
//                             PIN Code <span className="text-destructive">*</span>
//                           </Label>
//                           <Input
//                             id="pincode"
//                             name="pincode"
//                             value={formData.pincode}
//                             onChange={handleChange}
//                             placeholder="Enter your PIN code"
//                             className={errors.pincode ? "border-destructive" : ""}
//                           />
//                           {errors.pincode && <p className="text-destructive text-sm">{errors.pincode}</p>}
//                         </div>
//                       </div>

//                       <div className="flex items-center space-x-2">
//                         <Checkbox
//                           id="saveInfo"
//                           checked={formData.saveInfo}
//                           onCheckedChange={(checked) => handleCheckboxChange("saveInfo", checked)}
//                         />
//                         <label
//                           htmlFor="saveInfo"
//                           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                         >
//                           Save this information for next time
//                         </label>
//                       </div>

//                       <div className="flex justify-end">
//                         <Button type="button" onClick={handleNext} className="w-full sm:w-auto">
//                           Continue to Payment
//                           <ArrowRight className="ml-2 h-4 w-4" />
//                         </Button>
//                       </div>
//                     </TabsContent>

//                     {/* Payment Information */}
//                     <TabsContent value="payment" className="p-6 space-y-6">
//                       <div className="space-y-2">
//                         <h2 className="text-xl font-semibold">Payment Method</h2>
//                         <p className="text-muted-foreground">Select your preferred payment method</p>
//                       </div>

//                       <RadioGroup
//                         value={formData.paymentMethod}
//                         onValueChange={(value) => handleChange({ target: { name: "paymentMethod", value } })}
//                         className="space-y-4"
//                       >
//                         <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-muted/50 transition-colors">
//                           <RadioGroupItem value="cod" id="cod" />
//                           <Label htmlFor="cod" className="flex-1 cursor-pointer">
//                             <div className="flex justify-between items-center">
//                               <div>
//                                 <p className="font-medium">Cash on Delivery (COD)</p>
//                                 <p className="text-sm text-muted-foreground">Pay when you receive your order</p>
//                               </div>
//                               <div className="bg-primary/10 p-2 rounded-full">
//                                 <Package className="h-5 w-5 text-primary" />
//                               </div>
//                             </div>
//                           </Label>
//                         </div>

//                         <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-muted/50 transition-colors">
//                           <RadioGroupItem value="card" id="card" />
//                           <Label htmlFor="card" className="flex-1 cursor-pointer">
//                             <div className="flex justify-between items-center">
//                               <div>
//                                 <p className="font-medium">Credit/Debit Card</p>
//                                 <p className="text-sm text-muted-foreground">Pay securely with your card</p>
//                               </div>
//                               <div className="bg-primary/10 p-2 rounded-full">
//                                 <CreditCard className="h-5 w-5 text-primary" />
//                               </div>
//                             </div>
//                           </Label>
//                         </div>
//                       </RadioGroup>

//                       {formData.paymentMethod === "card" && (
//                         <div className="space-y-4 border rounded-md p-4 bg-muted/30">
//                           <div className="space-y-2">
//                             <Label htmlFor="cardNumber">
//                               Card Number <span className="text-destructive">*</span>
//                             </Label>
//                             <Input
//                               id="cardNumber"
//                               name="cardNumber"
//                               value={formData.cardNumber}
//                               onChange={handleChange}
//                               placeholder="1234 5678 9012 3456"
//                               className={errors.cardNumber ? "border-destructive" : ""}
//                             />
//                             {errors.cardNumber && <p className="text-destructive text-sm">{errors.cardNumber}</p>}
//                           </div>

//                           <div className="space-y-2">
//                             <Label htmlFor="cardName">
//                               Name on Card <span className="text-destructive">*</span>
//                             </Label>
//                             <Input
//                               id="cardName"
//                               name="cardName"
//                               value={formData.cardName}
//                               onChange={handleChange}
//                               placeholder="John Doe"
//                               className={errors.cardName ? "border-destructive" : ""}
//                             />
//                             {errors.cardName && <p className="text-destructive text-sm">{errors.cardName}</p>}
//                           </div>

//                           <div className="grid grid-cols-2 gap-4">
//                             <div className="space-y-2">
//                               <Label htmlFor="cardExpiry">
//                                 Expiry Date <span className="text-destructive">*</span>
//                               </Label>
//                               <Input
//                                 id="cardExpiry"
//                                 name="cardExpiry"
//                                 value={formData.cardExpiry}
//                                 onChange={handleChange}
//                                 placeholder="MM/YY"
//                                 className={errors.cardExpiry ? "border-destructive" : ""}
//                               />
//                               {errors.cardExpiry && <p className="text-destructive text-sm">{errors.cardExpiry}</p>}
//                             </div>

//                             <div className="space-y-2">
//                               <Label htmlFor="cardCvv">
//                                 CVV <span className="text-destructive">*</span>
//                               </Label>
//                               <Input
//                                 id="cardCvv"
//                                 name="cardCvv"
//                                 value={formData.cardCvv}
//                                 onChange={handleChange}
//                                 placeholder="123"
//                                 className={errors.cardCvv ? "border-destructive" : ""}
//                               />
//                               {errors.cardCvv && <p className="text-destructive text-sm">{errors.cardCvv}</p>}
//                             </div>
//                           </div>
//                         </div>
//                       )}

//                       <div className="flex justify-between">
//                         <Button type="button" variant="outline" onClick={handleBack}>
//                           Back
//                         </Button>
//                         <Button type="button" onClick={handleNext}>
//                           Review Order
//                           <ArrowRight className="ml-2 h-4 w-4" />
//                         </Button>
//                       </div>
//                     </TabsContent>

//                     {/* Review Order */}
//                     <TabsContent value="review" className="p-6 space-y-6">
//                       <div className="space-y-2">
//                         <h2 className="text-xl font-semibold">Review Your Order</h2>
//                         <p className="text-muted-foreground">
//                           Please review your order details before placing your order
//                         </p>
//                       </div>

//                       <div className="space-y-4">
//                         <div className="border rounded-md p-4 bg-muted/30">
//                           <h3 className="font-medium flex items-center gap-2 mb-2">
//                             <MapPin className="h-4 w-4 text-primary" />
//                             Shipping Information
//                           </h3>
//                           <p>
//                             {formData.firstName} {formData.lastName}
//                           </p>
//                           <p>{formData.address}</p>
//                           <p>
//                             {formData.city}, {formData.pincode}
//                           </p>
//                           <p>{formData.phone}</p>
//                           <p>{formData.email}</p>
//                         </div>

//                         <div className="border rounded-md p-4 bg-muted/30">
//                           <h3 className="font-medium flex items-center gap-2 mb-2">
//                             <CreditCard className="h-4 w-4 text-primary" />
//                             Payment Method
//                           </h3>
//                           {formData.paymentMethod === "cod" ? (
//                             <p>Cash on Delivery</p>
//                           ) : (
//                             <p>Credit/Debit Card ending in {formData.cardNumber.slice(-4)}</p>
//                           )}
//                         </div>
//                       </div>

//                       <div className="space-y-2">
//                         <div className="flex items-center space-x-2">
//                           <Checkbox
//                             id="agreeTerms"
//                             checked={formData.agreeTerms}
//                             onCheckedChange={(checked) => handleCheckboxChange("agreeTerms", checked)}
//                             className={errors.agreeTerms ? "border-destructive" : ""}
//                           />
//                           <label
//                             htmlFor="agreeTerms"
//                             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                           >
//                             I agree to the{" "}
//                             <Link href="/terms" className="text-primary underline">
//                               Terms and Conditions
//                             </Link>{" "}
//                             and{" "}
//                             <Link href="/privacy" className="text-primary underline">
//                               Privacy Policy
//                             </Link>
//                           </label>
//                         </div>
//                         {errors.agreeTerms && <p className="text-destructive text-sm">{errors.agreeTerms}</p>}
//                       </div>

//                       <div className="flex justify-between">
//                         <Button type="button" variant="outline" onClick={handleBack}>
//                           Back
//                         </Button>
//                         <Button type="submit">
//                           Place Order
//                           <CheckCircle2 className="ml-2 h-4 w-4" />
//                         </Button>
//                       </div>
//                     </TabsContent>
//                   </form>
//                 </Tabs>
//               </div>
//             </Card>
//           </div>

//           {/* Order Summary */}
//           <div>
//             <Card>
//               <div className="bg-primary p-6">
//                 <h2 className="text-xl font-bold text-white">Order Summary</h2>
//               </div>
//               <CardContent className="p-6 space-y-6">
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-4">
//                     <div className="relative h-20 w-20 rounded-md overflow-hidden border">
//                       <Image
//                         src="/placeholder.svg?height=80&width=80"
//                         alt="CockroachKiller Pro Formula"
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="font-medium">CockroachKiller Pro Formula</h3>
//                       <p className="text-sm text-muted-foreground">Quantity: 1</p>
//                     </div>
//                     <div className="font-medium">₹499.00</div>
//                   </div>

//                   <Separator />

//                   <div className="space-y-2">
//                     <div className="flex justify-between">
//                       <span>Subtotal</span>
//                       <span>₹499.00</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Shipping</span>
//                       <span>₹50.00</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Tax</span>
//                       <span>₹0.00</span>
//                     </div>
//                   </div>

//                   <Separator />

//                   <div className="flex justify-between font-bold text-lg">
//                     <span>Total</span>
//                     <span>₹549.00</span>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                     <Truck className="h-4 w-4" />
//                     <span>Free shipping on orders over ₹999</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                     <Clock className="h-4 w-4" />
//                     <span>Delivery within 3-5 business days</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                     <ShieldCheck className="h-4 w-4" />
//                     <span>Secure Checkout</span>
//                   </div>
//                 </div>

//                 <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
//                   <div className="flex gap-2">
//                     <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
//                     <div>
//                       <p className="text-sm font-medium text-amber-800">Limited Time Offer</p>
//                       <p className="text-xs text-amber-700">
//                         Buy 2 bottles and get 1 free! Add more to your cart before checkout.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ShieldCheck,
  CreditCard,
  Truck,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Bug,
  Package,
  Clock,
  AlertCircle,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { submitOrderToGoogleSheet } from "../actions/order-actions"

export default function CheckoutPage() {
  const [step, setStep] = useState("shipping")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "cod",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvv: "",
    saveInfo: false,
    agreeTerms: false,
  })
  const [errors, setErrors] = useState({})
  const { toast } = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const handleCheckboxChange = (name, checked) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const validateShipping = () => {
    const newErrors = {}
    const requiredFields = ["firstName", "lastName", "email", "phone", "address", "city"]

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required"
      }
    })

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (formData.phone && !/^\d{11}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validatePayment = () => {
    const newErrors = {}

    if (formData.paymentMethod === "card") {
      if (!formData.cardNumber) {
        newErrors.cardNumber = "Card number is required"
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) {
        newErrors.cardNumber = "Please enter a valid 16-digit card number"
      }

      if (!formData.cardName) {
        newErrors.cardName = "Name on card is required"
      }

      if (!formData.cardExpiry) {
        newErrors.cardExpiry = "Expiry date is required"
      } else if (!/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) {
        newErrors.cardExpiry = "Please use MM/YY format"
      }

      if (!formData.cardCvv) {
        newErrors.cardCvv = "CVV is required"
      } else if (!/^\d{3}$/.test(formData.cardCvv)) {
        newErrors.cardCvv = "Please enter a valid 3-digit CVV"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateReview = () => {
    const newErrors = {}

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (step === "shipping" && validateShipping()) {
      setStep("payment")
    } else if (step === "payment" && validatePayment()) {
      setStep("review")
    }
  }

  const handleBack = () => {
    if (step === "payment") {
      setStep("shipping")
    } else if (step === "review") {
      setStep("payment")
    }
  }
const [Quantity , setQuantity] = useState("")
const handleSubmit = async (e) => {
  e.preventDefault();
localStorage.setItem("Quantity" , Quantity)
  if (validateReview()) {
    const orderData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      pincode: formData.pincode,
      paymentMethod: formData.paymentMethod,
      quantity: Quantity
    };

    try {
      const result = await submitOrderToGoogleSheet(orderData);

      if (result.success) {
        toast({
          title: "Order Placed Successfully!",
          description: `Your order #${result.orderId} has been placed.`,
          variant: "default",
        });

        setTimeout(() => {
          window.location.href = `/checkout/confirmation?orderId=${result.orderId}`;
        }, 2000);
      } else {
        toast({
          title: "Order Failed",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  }
};


  return (
    <div className="min-h-screen bg-muted/30 py-12 w-full">
    <div className="container px-4 md:px-6">
      <div className="mb-8">
        <Link href="/product" className="text-primary hover:underline flex items-center gap-2">
          <ArrowRight className="h-4 w-4 rotate-180" />
          <span>Back to Product</span>
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Main Checkout Form */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <div className="bg-primary p-6">
              <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                <Bug className="h-6 w-6" />
                Complete Your Purchase
              </h1>
            </div>

            {/* Checkout Steps */}
            <div className="p-1">
              <Tabs value={step} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger
                    value="shipping"
                    onClick={() => step !== "shipping" && validateShipping() && setStep("shipping")}
                    className="data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    <div className="flex items-center gap-2 data-[state=active]:text-white">
                      <MapPin className="h-4 w-4" />
                      <span className="hidden sm:inline">Shipping</span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger
                    value="payment"
                    onClick={() => {
                      if (step === "review" || (step === "shipping" && validateShipping())) {
                        setStep("payment")
                      }
                    }}
                    className="data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    <div className="flex items-center gap-2 data-[state=active]:text-white">
                      <CreditCard className="h-4 w-4" />
                      <span className="hidden sm:inline">Payment</span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger
                    value="review"
                    onClick={() => {
                      if (step === "payment" && validatePayment()) {
                        setStep("review")
                      }
                    }}
                    className="data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    <div className="flex items-center gap-2 data-[state=active]:text-white">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="hidden sm:inline">Review</span>
                    </div>
                  </TabsTrigger>
                </TabsList>

                <form onSubmit={handleSubmit}>
                  {/* Shipping Information */}
                  <TabsContent value="shipping" className="p-6 space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-xl font-semibold">Shipping Information</h2>
                      <p className="text-muted-foreground">Enter your details for delivery</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">
                          First Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter your first name"
                          className={errors.firstName ? "border-destructive" : ""}
                        />
                        {errors.firstName && <p className="text-destructive text-sm">{errors.firstName}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">
                          Last Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Enter your last name"
                          className={errors.lastName ? "border-destructive" : ""}
                        />
                        {errors.lastName && <p className="text-destructive text-sm">{errors.lastName}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          Phone <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className={errors.phone ? "border-destructive" : ""}
                        />
                        {errors.phone && <p className="text-destructive text-sm">{errors.phone}</p>}
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">
                          Address <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Enter your address"
                          className={errors.address ? "border-destructive" : ""}
                        />
                        {errors.address && <p className="text-destructive text-sm">{errors.address}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="city">
                          City <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Enter your city"
                          className={errors.city ? "border-destructive" : ""}
                        />
                        {errors.city && <p className="text-destructive text-sm">{errors.city}</p>}
                      </div>

                      
                    </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">
                          Quantity <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="Quantity"
                          name="Quantity"
                          value={Quantity}
                          onChange={(e)=>{setQuantity(e.target.value)}}
                          type="number"
                          placeholder="Enter your Quantity"
                        />
                        {errors.city && <p className="text-destructive text-sm">{errors.city}</p>}
                      </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="saveInfo"
                        checked={formData.saveInfo}
                        onCheckedChange={(checked) => handleCheckboxChange("saveInfo", checked)}
                      />
                      <label
                        htmlFor="saveInfo"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Save this information for next time
                      </label>
                    </div>

                    <div className="flex justify-end">
                      <Button type="button" onClick={handleNext} className="w-full sm:w-auto">
                        Continue to Payment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>

                  {/* Payment Information */}
                  <TabsContent value="payment" className="p-6 space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-xl font-semibold">Payment Method</h2>
                      <p className="text-muted-foreground">Select your preferred payment method</p>
                    </div>

                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={(value) => handleChange({ target: { name: "paymentMethod", value } })}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="cod" id="cod" />
                        <Label htmlFor="cod" className="flex-1 cursor-pointer">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Cash on Delivery (COD)</p>
                              <p className="text-sm text-muted-foreground">Pay when you receive your order</p>
                            </div>
                            <div className="bg-primary/10 p-2 rounded-full">
                              <Package className="h-5 w-5 text-primary" />
                            </div>
                          </div>
                        </Label>
                      </div>

                      {/* <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex-1 cursor-pointer">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Credit/Debit Card</p>
                              <p className="text-sm text-muted-foreground">Pay securely with your card</p>
                            </div>
                            <div className="bg-primary/10 p-2 rounded-full">
                              <CreditCard className="h-5 w-5 text-primary" />
                            </div>
                          </div>
                        </Label>
                      </div> */}
                    </RadioGroup>

                    {formData.paymentMethod === "card" && (
                      <div className="space-y-4 border rounded-md p-4 bg-muted/30">
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">
                            Card Number <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="1234 5678 9012 3456"
                            className={errors.cardNumber ? "border-destructive" : ""}
                          />
                          {errors.cardNumber && <p className="text-destructive text-sm">{errors.cardNumber}</p>}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cardName">
                            Name on Card <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="cardName"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={errors.cardName ? "border-destructive" : ""}
                          />
                          {errors.cardName && <p className="text-destructive text-sm">{errors.cardName}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardExpiry">
                              Expiry Date <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="cardExpiry"
                              name="cardExpiry"
                              value={formData.cardExpiry}
                              onChange={handleChange}
                              placeholder="MM/YY"
                              className={errors.cardExpiry ? "border-destructive" : ""}
                            />
                            {errors.cardExpiry && <p className="text-destructive text-sm">{errors.cardExpiry}</p>}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="cardCvv">
                              CVV <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="cardCvv"
                              name="cardCvv"
                              value={formData.cardCvv}
                              onChange={handleChange}
                              placeholder="123"
                              className={errors.cardCvv ? "border-destructive" : ""}
                            />
                            {errors.cardCvv && <p className="text-destructive text-sm">{errors.cardCvv}</p>}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={handleBack}>
                        Back
                      </Button>
                      <Button type="button" onClick={handleNext}>
                        Review Order
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>

                  {/* Review Order */}
                  <TabsContent value="review" className="p-6 space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-xl font-semibold">Review Your Order</h2>
                      <p className="text-muted-foreground">
                        Please review your order details before placing your order
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="border rounded-md p-4 bg-muted/30">
                        <h3 className="font-medium flex items-center gap-2 mb-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          Shipping Information
                        </h3>
                        <p>
                          {formData.firstName} {formData.lastName}
                        </p>
                        <p>{formData.address}</p>
                        <p>
                          {formData.city}, {formData.pincode}
                        </p>
                        <p>{formData.phone}</p>
                        <p>{formData.email}</p>
                      </div>

                      <div className="border rounded-md p-4 bg-muted/30">
                        <h3 className="font-medium flex items-center gap-2 mb-2">
                          <CreditCard className="h-4 w-4 text-primary" />
                          Payment Method
                        </h3>
                        {formData.paymentMethod === "cod" ? (
                          <p>Cash on Delivery</p>
                        ) : (
                          <p>Credit/Debit Card ending in {formData.cardNumber.slice(-4)}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="agreeTerms"
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) => handleCheckboxChange("agreeTerms", checked)}
                          className={errors.agreeTerms ? "border-destructive" : ""}
                        />
                        <label
                          htmlFor="agreeTerms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the{" "}
                          <a className="text-primary ">
                            By Placing
                          </a>{" "}
                         this order
                        </label>
                      </div>
                      {errors.agreeTerms && <p className="text-destructive text-sm">{errors.agreeTerms}</p>}
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={handleBack}>
                        Back
                      </Button>
                      <Button type="submit">
                        Place Order
                        <CheckCircle2 className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>
                </form>
              </Tabs>
            </div>
          </Card>
        </div>

        {/* Order Summary */}
        <div>
          <Card>
            <div className="bg-primary p-6">
              <h2 className="text-xl font-bold text-white">Order Summary</h2>
            </div>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 rounded-md overflow-hidden border">
                    <Image
                      src="/cocrogeproduct.jfif"
                      alt="CockroachKiller Pro Formula"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">CockroachKiller Pro Formula</h3>
                    <p className="text-sm text-muted-foreground">Quantity: 1</p>
                  </div>
                  <div className="font-medium">Rs499.00</div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>Rs499.00</span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>₹50.00</span>
                  </div> */}
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>Rs0.00</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>Rs499.00</span>
                </div>
              </div>

              {/* <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck className="h-4 w-4" />
                  <span>Free shipping on orders over ₹999</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Delivery within 3-5 business days</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Secure Checkout</span>
                </div>
              </div> */}

            
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
  )
}