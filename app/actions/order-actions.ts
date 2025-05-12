// "use server"

// import { GoogleSpreadsheet } from "google-spreadsheet"
// import { JWT } from "google-auth-library"

// // This would normally come from environment variables
// const GOOGLE_SHEETS_CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL || ""
// const GOOGLE_SHEETS_PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY || ""
// const GOOGLE_SHEETS_SHEET_ID = process.env.GOOGLE_SHEETS_SHEET_ID || ""

// export async function submitOrderToGoogleSheet(formData: FormData) {
//   try {
//     // Extract order data from form
//     const firstName = formData.get("firstName") as string
//     const lastName = formData.get("lastName") as string
//     const email = formData.get("email") as string
//     const phone = formData.get("phone") as string
//     const address = formData.get("address") as string
//     const city = formData.get("city") as string
//     const pincode = formData.get("pincode") as string
//     const paymentMethod = formData.get("paymentMethod") as string
//     const quantity = formData.get("quantity") as string

//     // Calculate order total
//     const productPrice = 499
//     const quantityNum = Number.parseInt(quantity || "1")
//     const subtotal = productPrice * quantityNum
//     const shipping = subtotal >= 2000 ? 0 : 50
//     const total = subtotal + shipping

//     // Create a new order ID
//     const orderId = "ORD-" + Math.floor(100000 + Math.random() * 900000)
//     const orderDate = new Date().toISOString()

//     // Set up authentication
//     const serviceAccountAuth = new JWT({
//       email: GOOGLE_SHEETS_CLIENT_EMAIL,
//       key: GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
//       scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//     })

//     // Initialize the sheet
//     const doc = new GoogleSpreadsheet(GOOGLE_SHEETS_SHEET_ID, serviceAccountAuth)
//     await doc.loadInfo()

//     // Get the first sheet
//     const sheet = doc.sheetsByIndex[0]

//     // Add the row to the sheet
//     await sheet.addRow({
//       orderId,
//       orderDate,
//       firstName,
//       lastName,
//       email,
//       phone,
//       address,
//       city,
//       pincode,
//       paymentMethod,
//       quantity: quantityNum,
//       subtotal,
//       shipping,
//       total,
//       status: "New",
//     })

//     return {
//       success: true,
//       message: "Order placed successfully!",
//       orderId,
//     }
//   } catch (error) {
//     console.error("Error submitting order to Google Sheet:", error)
//     return {
//       success: false,
//       message: "Failed to place order. Please try again or contact customer support.",
//     }
//   }
// }


"use server"

import { GoogleSpreadsheet } from "google-spreadsheet"
import { JWT } from "google-auth-library"

const GOOGLE_SHEETS_CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL || ""
const GOOGLE_SHEETS_PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n") || ""
const GOOGLE_SHEETS_SHEET_ID = process.env.GOOGLE_SHEETS_SHEET_ID || ""

export async function submitOrderToGoogleSheet(orderData:any) {
  try {
    // Extract order data from form
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      pincode,
      paymentMethod,
      quantity = "1"
    } = orderData

    // Calculate order total
    const productPrice = 499
    const quantityNum = Number.parseInt(quantity)
    const subtotal = productPrice * quantityNum
    const shipping = subtotal >= 2000 ? 0 : 50
    const total = subtotal + shipping

    // Create order details
    const orderId = "ORD-" + Math.floor(100000 + Math.random() * 900000)
    const orderDate = new Date().toLocaleString('en-US');

    // Set up authentication
    const serviceAccountAuth = new JWT({
      email: GOOGLE_SHEETS_CLIENT_EMAIL,
      key: GOOGLE_SHEETS_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    // Initialize the sheet
    const doc = new GoogleSpreadsheet(GOOGLE_SHEETS_SHEET_ID, serviceAccountAuth)
    await doc.loadInfo()

    // Get the first sheet
    const sheet = doc.sheetsByIndex[0]

    // Add headers if sheet is empty
    if (sheet.rowCount === 0) {
      await sheet.setHeaderRow([
        "orderId",
        "orderDate",
        "firstName",
        "lastName",
        "email",
        "phone",
        "address",
        "city",
        "pincode",
        "paymentMethod",
        "quantity",
        "subtotal",
        "shipping",
        "total",
        "status"
      ])
    }

    // Add the row to the sheet
    await sheet.addRow({
      orderId,
      orderDate,
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      pincode,
      paymentMethod,
      quantity: quantityNum,
      subtotal,
      shipping,
      total,
      status: "New",
    })

    return {
      success: true,
      message: "Order placed successfully!",
      orderId,
    }
  } catch (error) {
    console.error("Error submitting order to Google Sheet:", error)
    return {
      success: false,
      message: "Failed to place order. Please try again or contact customer support.",
    }
  }
}