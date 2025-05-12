import GoogleSheetsGuide from "@/components/google-sheets-guide"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Google Sheets Integration</CardTitle>
            <CardDescription>Set up Google Sheets to track orders from your website</CardDescription>
          </CardHeader>
          <CardContent>
            <GoogleSheetsGuide />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
