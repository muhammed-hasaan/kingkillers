import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function GoogleSheetsGuide() {
  return (
    <div className="space-y-6">
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Google Sheets Integration Setup</AlertTitle>
        <AlertDescription>
          Follow these steps to connect your website to Google Sheets for order tracking.
        </AlertDescription>
      </Alert>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold">Step 1: Create a Google Service Account</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                Go to the{" "}
                <a
                  href="https://console.cloud.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Google Cloud Console
                </a>
              </li>
              <li>Create a new project or select an existing one</li>
              <li>Navigate to "APIs & Services" &gt; "Credentials"</li>
              <li>Click "Create Credentials" and select "Service Account"</li>
              <li>Fill in the service account details and click "Create"</li>
              <li>Skip the optional steps and click "Done"</li>
              <li>Click on the service account you just created</li>
              <li>Go to the "Keys" tab and click "Add Key" &gt; "Create new key"</li>
              <li>Select "JSON" and click "Create"</li>
              <li>Save the downloaded JSON file securely</li>
            </ol>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold">Step 2: Enable Google Sheets API</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal pl-5 space-y-2">
              <li>In the Google Cloud Console, navigate to "APIs & Services" &gt; "Library"</li>
              <li>Search for "Google Sheets API"</li>
              <li>Click on it and then click "Enable"</li>
            </ol>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="font-bold">Step 3: Create a Google Sheet</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                Go to{" "}
                <a
                  href="https://sheets.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Google Sheets
                </a>
              </li>
              <li>Create a new spreadsheet</li>
              <li>
                Add the following headers in the first row:
                <div className="bg-muted p-2 mt-2 rounded text-sm font-mono">
                  orderId, orderDate, firstName, lastName, email, phone, address, city, pincode, paymentMethod,
                  quantity, subtotal, shipping, total, status
                </div>
              </li>
              <li>
                Share the spreadsheet with the service account email (found in the JSON file) with Editor permissions
              </li>
              <li>Copy the spreadsheet ID from the URL (the long string between /d/ and /edit in the URL)</li>
            </ol>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="font-bold">Step 4: Set Environment Variables</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                In your project, set the following environment variables:
                <div className="bg-muted p-2 mt-2 rounded text-sm font-mono">
                  GOOGLE_SHEETS_CLIENT_EMAIL=service-account-email@project-id.iam.gserviceaccount.com
                  <br />
                  GOOGLE_SHEETS_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nYour Private Key Here\n-----END PRIVATE
                  KEY-----
                  <br />
                  GOOGLE_SHEETS_SHEET_ID=your-spreadsheet-id
                </div>
              </li>
              <li>Replace the values with your actual service account email, private key, and spreadsheet ID</li>
              <li>Make sure to add these environment variables to your hosting platform (like Vercel)</li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
